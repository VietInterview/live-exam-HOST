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
var course_model_1 = require("../../../shared/models/course.model");
var log_model_1 = require("../../../shared/models/log.model");
var course_member_model_1 = require("../../../shared/models/course-member.model");
var _ = require("underscore");
var constants_1 = require("../../../shared/models/constants");
var report_decorator_1 = require("../../report.decorator");
var select_group_dialog_component_1 = require("../../../shared/components/select-group-dialog/select-group-dialog.component");
var select_course_dialog_component_1 = require("../../../shared/components/select-course-dialog/select-course-dialog.component");
var time_pipe_1 = require("../../../shared/pipes/time.pipe");
var excel_service_1 = require("../../../shared/services/excel.service");
var MemberByCourseReportComponent = (function (_super) {
    __extends(MemberByCourseReportComponent, _super);
    function MemberByCourseReportComponent(reportUtils, excelService, datePipe, timePipe) {
        var _this = _super.call(this) || this;
        _this.reportUtils = reportUtils;
        _this.excelService = excelService;
        _this.datePipe = datePipe;
        _this.timePipe = timePipe;
        _this.GROUP_CATEGORY = constants_1.GROUP_CATEGORY;
        _this.records = [];
        _this.summary = _this.generateReportFooter(_this.records);
        return _this;
    }
    MemberByCourseReportComponent.prototype.export = function () {
        var header = [
            this.translateService.instant('Course code'),
            this.translateService.instant('Course name'),
            this.translateService.instant('Total'),
            this.translateService.instant('Total registered'),
            this.translateService.instant('Percentage registered'),
            this.translateService.instant('Total in-progress'),
            this.translateService.instant('Percentage in-progress'),
            this.translateService.instant('Total completed'),
            this.translateService.instant('Percentage completed'),
            this.translateService.instant('Time'),
        ];
        this.excelService.exportAsExcelFile(header.concat(this.records), 'course_by_member_report');
    };
    MemberByCourseReportComponent.prototype.selectCourseGroup = function () {
        var _this = this;
        this.groupDialog.show();
        this.groupDialog.onSelectGroup.subscribe(function (group) {
            _this.summary = {};
            course_model_1.Course.listByGroup(_this, group.id).subscribe(function (courses) {
                _this.generateReport(courses).subscribe(function (records) {
                    _this.records = records;
                    _this.summary = _this.generateReportFooter(records);
                });
            });
        });
    };
    MemberByCourseReportComponent.prototype.selectIndividualCourses = function () {
        var _this = this;
        this.courseDialog.show();
        this.courseDialog.onSelectCourses.subscribe(function (courses) {
            _this.generateReport(courses).subscribe(function (records) {
                _this.records = records;
                _this.summary = _this.generateReportFooter(records);
            });
        });
    };
    MemberByCourseReportComponent.prototype.generateReport = function (courses) {
        var self = this;
        var subscriptions = [];
        _.each(courses, function (course) {
            var subscription = course_member_model_1.CourseMember.listByCourse(self, course.id).flatMap(function (members) {
                return log_model_1.UserLog.courseActivity(self, course.id).map(function (logs) {
                    return self.generateReportRow(course, members, logs);
                });
            });
            subscriptions.push(subscription);
        });
        return Rx_1.Observable.zip.apply(Rx_1.Observable, subscriptions);
    };
    MemberByCourseReportComponent.prototype.generateReportRow = function (course, members, logs) {
        var record = {};
        record["course_name"] = course.name;
        record["course_code"] = course.code;
        record["total_member"] = members.length;
        var registeredMembers = _.filter(members, function (member) {
            return member.enroll_status == 'registered';
        });
        var inprogressMembers = _.filter(members, function (member) {
            return member.enroll_status == 'in-study';
        });
        var completededMembers = _.filter(members, function (member) {
            return member.enroll_status == 'completed';
        });
        record["total_member_registered"] = registeredMembers.length;
        record["percentage_member_registered"] = members.length ? Math.floor(registeredMembers.length / members.length * 100) : 0;
        record["total_member_inprogress"] = inprogressMembers.length;
        record["percentage_member_inprogress"] = members.length ? Math.floor(inprogressMembers.length / members.length * 100) : 0;
        record["total_member_completed"] = completededMembers.length;
        record["percentage_member_completed"] = members.length ? Math.floor(completededMembers.length / members.length * 100) : 0;
        var result = this.reportUtils.analyzeCourseActivity(logs);
        record["time_spent"] = this.timePipe.transform(+result[2], 'min');
        return record;
    };
    MemberByCourseReportComponent.prototype.generateReportFooter = function (records) {
        var summary = {
            total_member: records.length,
            total_member_registered: 0,
            percentage_member_registered: 0,
            total_member_inprogress: 0,
            percentage_member_inprogress: 0,
            total_member_completed: 0,
            percentage_member_completed: 0,
            time_spent: 0
        };
        _.each(records, function (record) {
            _.each(summary, function (key) {
                summary[key] += record[key];
            });
        });
        return summary;
    };
    __decorate([
        core_1.ViewChild(select_group_dialog_component_1.SelectGroupDialog),
        __metadata("design:type", select_group_dialog_component_1.SelectGroupDialog)
    ], MemberByCourseReportComponent.prototype, "groupDialog", void 0);
    __decorate([
        core_1.ViewChild(select_course_dialog_component_1.SelectCoursesDialog),
        __metadata("design:type", select_course_dialog_component_1.SelectCoursesDialog)
    ], MemberByCourseReportComponent.prototype, "courseDialog", void 0);
    MemberByCourseReportComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-member-by-course-report',
            template: "    <div class=\"ui-g\">         <div class=\"ui-g-12\">         \t<p-toolbar>                 <div class=\"ui-toolbar-group-left\">                 \t<button pButton type=\"button\" label=\"{{'Select course group'|translate}}\"  icon=\"ui-icon-open-in-browser\" class=\"green-btn\" (click)=\"selectCourseGroup()\" ></button>                 </div>                 <button pButton type=\"button\" label=\"{{'Select individual courses'|translate}}\"  icon=\"ui-icon-open-in-browser\" class=\"green-btn\" (click)=\"selectIndividualCourses()\" ></button>                 <div class=\"ui-toolbar-group-right\">                     <button pButton type=\"button\" label=\"{{'Export'|translate}}\"  class=\"purple-btn\" icon=\"ui-icon-file-download\" (click)=\"export()\"></button>                 </div>             </p-toolbar>             <p-table #dataTable [value]=\"records\" [responsive]=\"true\">                 <ng-template pTemplate=\"caption\">                 \t{{'Member by course report'|translate}}                 </ng-template>                 <ng-template pTemplate=\"header\">                     <tr>                         <th colspan=\"2\" rowspan=\"2\">{{'Course'|translate}}</th>                         <th colspan=\"7\">{{'Course member'|translate}}</th>                         <th rowspan=\"3\">{{'Time'|translate}}</th>                     </tr>                     <tr>                         <th rowspan=\"2\">{{'Total'|translate}}</th>                         <th colspan=\"2\">{{'Registered'|translate}}</th>                         <th colspan=\"2\">{{'In-progress'|translate}}</th>                         <th colspan=\"2\">{{'Completed'|translate}}</th>                     </tr>                     <tr>                     \t<th>{{'Code'|translate}}</th>                         <th>{{'Name'|translate}}</th>                         <th>{{'Total'|translate}}</th>                         <th>{{'Percentage'|translate}}</th>                         <th>{{'Total'|translate}}</th>                         <th>{{'Percentage'|translate}}</th>                         <th>{{'Total'|translate}}</th>                         <th>{{'Percentage'|translate}}</th>                     </tr>                 </ng-template>                 <ng-template pTemplate=\"body\" let-record>                     <tr [pSelectableRow]=\"record\">                         <td>{{record.course_code}}</td>                         <td>{{record.course_name}}</td>                         <td>{{record.total_member}}</td>                         <td>{{record.total_member_registered}}</td>                         <td>{{record.percentage_member_registered}}</td>                         <td>{{record.total_member_inprogress}}</td>                         <td>{{record.percentage_member_inprogress}}</td>                         <td>{{record.total_member_complete}}</td>                         <td>{{record.percentage_member_complete}}</td>                         <td>{{record.total_time_spent | timeConvert:'min'}}</td>                     </tr>                 </ng-template>                 <ng-template pTemplate=\"footer\">                     <tr>                         <td colspan=\"2\">{{'Total'|translate}}</td>                         <td>{{summary.total_member}}</td>                         <td>{{summary.total_member_registered}}</td>                         <td>{{summary.percentage_member_registered}}</td>                         <td>{{summary.total_member_inprogress}}</td>                         <td>{{summary.percentage_member_inprogress}}</td>                         <td>{{summary.total_member_complete}}</td>                         <td>{{summary.percentage_member_complete}}</td>                         <td>{{summary.total_time_spent | timeConvert:'min'}}</td>                     </tr>                 </ng-template>                 <ng-template pTemplate=\"summary\">                     {{'Total records'|translate}} : {{records?.length}}                 </ng-template>                 <ng-template pTemplate=\"emptymessage\">                     <tr>                         <td [attr.colspan]=\"10\">                             {{'No records found'|translate}}                         </td>                     </tr>                 </ng-template>             </p-table>             <etraining-select-group-dialog [category]=\"GROUP_CATEGORY.COURSE\"></etraining-select-group-dialog>             <etraining-select-course-dialog></etraining-select-course-dialog>         </div>     </div>",
        }),
        report_decorator_1.Report({
            title: 'Member by course report',
            category: constants_1.REPORT_CATEGORY.COURSE
        }),
        __metadata("design:paramtypes", [report_utils_1.ReportUtils, excel_service_1.ExcelService, common_1.DatePipe, time_pipe_1.TimeConvertPipe])
    ], MemberByCourseReportComponent);
    return MemberByCourseReportComponent;
}(base_component_1.BaseComponent));
exports.MemberByCourseReportComponent = MemberByCourseReportComponent;
