"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var Rx_1 = require("rxjs/Rx");
var report_utils_1 = require("../../../shared/helpers/report.utils");
var base_component_1 = require("../../../shared/components/base/base.component");
var user_model_1 = require("../../../shared/models/user.model");
var log_model_1 = require("../../../shared/models/log.model");
var course_member_model_1 = require("../../../shared/models/course-member.model");
var _ = require("underscore");
var constants_1 = require("../../../shared/models/constants");
var report_decorator_1 = require("../../report.decorator");
var select_group_dialog_component_1 = require("../../../shared/components/select-group-dialog/select-group-dialog.component");
var select_user_dialog_component_1 = require("../../../shared/components/select-user-dialog/select-user-dialog.component");
var time_pipe_1 = require("../../../shared/pipes/time.pipe");
var excel_service_1 = require("../../../shared/services/excel.service");
var CourseByMemberReportComponent = (function (_super) {
    __extends(CourseByMemberReportComponent, _super);
    function CourseByMemberReportComponent(reportUtils, excelService, datePipe, timePipe) {
        var _this = _super.call(this) || this;
        _this.reportUtils = reportUtils;
        _this.excelService = excelService;
        _this.datePipe = datePipe;
        _this.timePipe = timePipe;
        _this.GROUP_CATEGORY = constants_1.GROUP_CATEGORY;
        return _this;
    }
    CourseByMemberReportComponent.prototype.export = function () {
        var header = [
            this.translateService.instant('Login'),
            this.translateService.instant('Name'),
            this.translateService.instant('Course code'),
            this.translateService.instant('Course name'),
            this.translateService.instant('Course mode'),
            this.translateService.instant('Register date'),
            this.translateService.instant('First attempt'),
            this.translateService.instant('Last attempt'),
            this.translateService.instant('Enroll status'),
            this.translateService.instant('Time spent')
        ];
        this.excelService.exportAsExcelFile(header.concat(this.records), 'course_by_member_report');
    };
    CourseByMemberReportComponent.prototype.selectUserGroup = function () {
        var _this = this;
        this.groupDialog.show();
        this.groupDialog.onSelectGroup.subscribe(function (group) {
            user_model_1.User.listByGroup(_this, group.id).subscribe(function (users) {
                _this.generateReport(users).subscribe(function (records) {
                    _this.records = records;
                    _this.rowGroupMetadata = _this.reportUtils.createRowGroupMetaData(_this.records, "user_login");
                });
            });
        });
    };
    CourseByMemberReportComponent.prototype.selectIndividualUsers = function () {
        var _this = this;
        this.userDialog.show();
        this.userDialog.onSelectUsers.subscribe(function (users) {
            _this.generateReport(users).subscribe(function (records) {
                _this.records = records;
                _this.rowGroupMetadata = _this.reportUtils.createRowGroupMetaData(_this.records, "user_login");
            });
        });
    };
    CourseByMemberReportComponent.prototype.generateReport = function (users) {
        var _this = this;
        var records = [];
        var subscriptions = [];
        _.each(users, function (user) {
            var subscription = course_member_model_1.CourseMember.listByUser(_this, user.id).flatMap(function (members) {
                return log_model_1.UserLog.userStudyActivity(_this, user.id, null).do(function (logs) {
                    var memberRecords = _.map(members, function (member) {
                        return _this.generateReportRow(member, logs);
                    });
                    records = records.concat(memberRecords);
                });
            });
            subscriptions.push(subscription);
        });
        return Rx_1.Observable.forkJoin.apply(Rx_1.Observable, subscriptions).map(function () {
            return records;
        });
    };
    CourseByMemberReportComponent.prototype.generateReportRow = function (member, logs) {
        var record = {};
        record["user_login"] = member.login;
        record["user_name"] = member.name;
        record["course_name"] = member.course_name;
        record["course_mode"] = this.translateService.instant(constants_1.COURSE_MODE[member.course_mode]);
        record["course_code"] = this.translateService.instant(constants_1.COURSE_MODE[member.course_code]);
        record["enroll_status"] = this.translateService.instant(constants_1.COURSE_MEMBER_ENROLL_STATUS[member.enroll_status]);
        record["first_attempt"] = this.datePipe.transform(member.date_register, constants_1.EXPORT_DATETIME_FORMAT);
        var result = this.reportUtils.analyzeCourseActivity(logs);
        if (result[0] != Infinity)
            record["first_attempt"] = this.datePipe.transform(result[0], constants_1.EXPORT_DATETIME_FORMAT);
        if (result[1] != Infinity)
            record["last_attempt"] = this.datePipe.transform(result[1], constants_1.EXPORT_DATETIME_FORMAT);
        record["time_spent"] = this.timePipe.transform(+result[2], 'min');
        return record;
    };
    __decorate([
        core_1.ViewChild(select_group_dialog_component_1.SelectGroupDialog),
        __metadata("design:type", select_group_dialog_component_1.SelectGroupDialog)
    ], CourseByMemberReportComponent.prototype, "groupDialog", void 0);
    __decorate([
        core_1.ViewChild(select_user_dialog_component_1.SelectUsersDialog),
        __metadata("design:type", select_user_dialog_component_1.SelectUsersDialog)
    ], CourseByMemberReportComponent.prototype, "userDialog", void 0);
    CourseByMemberReportComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-course-by-member-report',
            template: "    <div class=\"ui-g\">         <div class=\"ui-g-12\">         \t<p-toolbar>                 <div class=\"ui-toolbar-group-left\">                 \t<button pButton type=\"button\" label=\"{{'Select user group'|translate}}\"  icon=\"ui-icon-open-in-browser\" class=\"green-btn\" (click)=\"selectUserGroup()\" ></button>                 \t<button pButton type=\"button\" label=\"{{'Select individual users'|translate}}\"  icon=\"ui-icon-open-in-browser\" class=\"green-btn\" (click)=\"selectIndividualUsers()\" ></button>                 </div>                 <div class=\"ui-toolbar-group-right\">                     <button pButton type=\"button\" label=\"{{'Export'|translate}}\"  class=\"purple-btn\" icon=\"ui-icon-file-download\" (click)=\"export()\"></button>                 </div>             </p-toolbar>             <p-table #dataTable [value]=\"records\" [responsive]=\"true\">                 <ng-template pTemplate=\"caption\">                 \t{{'Course by member report'|translate}}                 </ng-template>                 <ng-template pTemplate=\"header\">                     <tr>                         <th colspan=\"2\">{{'Course member'|translate}}</th>                         <th colspan=\"3\">{{'Course'|translate}}</th>                         <th colspan=\"5\">{{'Status'|translate}}</th>                     </tr>                     <tr>                         <th>{{'Login'|translate}}</th>                         <th>{{'Name'|translate}}</th>                         <th>{{'Code'|translate}}</th>                         <th>{{'Name'|translate}}</th>                         <th>{{'Mode'|translate}}</th>                         <th>{{'Register date'|translate}}</th>                         <th>{{'First attempt'|translate}}</th>                         <th>{{'Last attempt'|translate}}</th>                         <th>{{'Enroll status'|translate}}</th>                         <th>{{'Time spent'|translate}}</th>                     </tr>                 </ng-template>                 <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">         \t\t\t<tr>         \t\t\t\t<td *ngIf=\"rowGroupMetadata[rowData.user_login].index === rowIndex\" [attr.rowspan]=\"rowGroupMetadata[rowData.user_login].size\">                 \t\t\t{{rowData.user_login}}            \t\t\t\t </td>                         <td *ngIf=\"rowGroupMetadata[rowData.user_login].index === rowIndex\" [attr.rowspan]=\"rowGroupMetadata[rowData.user_login].size\">                 \t\t\t{{rowData.user_name}}            \t\t\t\t </td>                         <td>{{rowData.course_code}}</td>                         <td>{{rowData.course_name}}</td>                         <td>{{rowData.course_mode}}</td>                         <td>{{rowData.register_date}}</td>                         <td>{{rowData.first_attempt}}</td>                         <td>{{rowData.last_attempt}}</td>                         <td>{{rowData.enroll_status}}</td>                         <td>{{rowData.time_spent}}</td>                     </tr>                 </ng-template>                 <ng-template pTemplate=\"summary\">                     {{'Total records'|translate}} : {{records?.length}}                 </ng-template>                 <ng-template pTemplate=\"emptymessage\">                     <tr>                         <td [attr.colspan]=\"10\">                             {{'No records found'|translate}}                         </td>                     </tr>                 </ng-template>             </p-table>             <etraining-select-user-dialog></etraining-select-user-dialog>             <etraining-select-group-dialog [category]=\"GROUP_CATEGORY.USER\"></etraining-select-group-dialog>         </div>     </div>",
        }),
        report_decorator_1.Report({
            title: 'Course by member report',
            category: constants_1.REPORT_CATEGORY.COURSE
        }),
        __metadata("design:paramtypes", [report_utils_1.ReportUtils, excel_service_1.ExcelService, common_1.DatePipe, time_pipe_1.TimeConvertPipe])
    ], CourseByMemberReportComponent);
    return CourseByMemberReportComponent;
}(base_component_1.BaseComponent));
exports.CourseByMemberReportComponent = CourseByMemberReportComponent;
