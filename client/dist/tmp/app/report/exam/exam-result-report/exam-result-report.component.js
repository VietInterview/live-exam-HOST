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
var exam_model_1 = require("../../../shared/models/exam.model");
var base_component_1 = require("../../../shared/components/base/base.component");
var log_model_1 = require("../../../shared/models/log.model");
var exam_grade_model_1 = require("../../../shared/models/exam-grade.model");
var submission_model_1 = require("../../../shared/models/submission.model");
var answer_model_1 = require("../../../shared/models/answer.model");
var exam_member_model_1 = require("../../../shared/models/exam-member.model");
var _ = require("underscore");
var constants_1 = require("../../../shared/models/constants");
var report_decorator_1 = require("../../report.decorator");
var excel_service_1 = require("../../../shared/services/excel.service");
var ExamResultReportComponent = (function (_super) {
    __extends(ExamResultReportComponent, _super);
    function ExamResultReportComponent(reportUtils, excelService, datePipe) {
        var _this = _super.call(this) || this;
        _this.reportUtils = reportUtils;
        _this.excelService = excelService;
        _this.datePipe = datePipe;
        return _this;
    }
    ExamResultReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        exam_model_1.Exam.all(this).subscribe(function (exams) {
            _this.exams = exams;
        });
    };
    ExamResultReportComponent.prototype.export = function () {
        var header = [
            this.translateService.instant('Name'),
            this.translateService.instant('Login'),
            this.translateService.instant('User group'),
            this.translateService.instant('Attempt date'),
            this.translateService.instant('Score'),
            this.translateService.instant('Result'),
        ];
        this.excelService.exportAsExcelFile(header.concat(this.records), 'course_by_member_report');
    };
    ExamResultReportComponent.prototype.selectExam = function () {
        var _this = this;
        if (this.selectedExam) {
            exam_member_model_1.ExamMember.listByExam(this, this.selectedExam.id).subscribe(function (members) {
                exam_grade_model_1.ExamGrade.listByExam(_this, _this.selectedExam.id).subscribe(function (grades) {
                    _this.generateReport(_this.selectedExam, grades, members).subscribe(function (records) {
                        _this.records = records;
                    });
                });
            });
        }
    };
    ExamResultReportComponent.prototype.generateReport = function (exam, grades, members) {
        var _this = this;
        var subscriptions = [];
        _.each(members, function (member) {
            var subscription = log_model_1.UserLog.userExamActivity(_this, member.user_id, exam.id).flatMap(function (logs) {
                return submission_model_1.Submission.byMember(_this, member.id).flatMap(function (submit) {
                    if (!submit)
                        return Rx_1.Observable.of([]);
                    return answer_model_1.Answer.listBySubmit(_this, submit.id).map(function (answers) {
                        return _this.generateReportRow(exam, grades, member, answers, logs);
                    });
                });
            });
            subscriptions.push(subscription);
        });
        return Rx_1.Observable.zip.apply(Rx_1.Observable, subscriptions);
    };
    ExamResultReportComponent.prototype.generateReportRow = function (exam, grades, member, answers, logs) {
        var record = {};
        record["user_login"] = member.login;
        record["user_name"] = member.name;
        record["user_group"] = member.etraining_group_id__DESC__;
        record["score"] = _.reduce(answers, function (sum, ans) {
            return sum + ans.score;
        }, 0);
        var result = this.reportUtils.analyzeExamActivity(logs);
        if (result[0] != Infinity)
            record["date_attempt"] = this.datePipe.transform(result[0], constants_1.EXPORT_DATETIME_FORMAT);
        var grade = _.find(grades, function (obj) {
            return obj.min_score <= record["score"] && obj.max_score >= record["score"];
        });
        if (grade)
            record["grade"] = grade.name;
        return record;
    };
    ExamResultReportComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-exam-result-report',
            template: "    <div class=\"ui-g\">         <div class=\"ui-g-12\">         \t<p-toolbar>                 <div class=\"ui-toolbar-group-left\">                 \t<p-dropdown [options]=\"exams\" [(ngModel)]=\"selectedExam\" placeholder=\"Select an exam\" (onChange)=\"selectExam()\" optionLabel=\"name\"></p-dropdown>                 </div>                 <div class=\"ui-toolbar-group-right\">                     <button pButton type=\"button\" label=\"{{'Export'|translate}}\"  class=\"purple-btn\" icon=\"ui-icon-file-download\" (click)=\"export()\"></button>                 </div>             </p-toolbar>             <p-table #dataTable [value]=\"records\" [responsive]=\"true\">                 <ng-template pTemplate=\"caption\">                 \t{{'Exam result report'|translate}}                 </ng-template>                 <ng-template pTemplate=\"header\">                     <tr>                         <th>{{'User name'|translate}}</th>                         <th>{{'User login'|translate}}</th>                         <th>{{'User group'|translate}}</th>                         <th>{{'Attempt date'|translate}}</th>                         <th>{{'Score'|translate}}</th>                         <th>{{'Grade'|translate}}</th>                     </tr>                 </ng-template>                 <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">         \t\t\t<tr>                         <td>{{rowData.user_name}}</td>                         <td>{{rowData.user_login}}</td>                         <td>{{rowData.user_group}}</td>                         <td>{{rowData.date_attempt}}</td>                         <td>{{rowData.score}}</td>                         <td>{{rowData.grade}}</td>                     </tr>                 </ng-template>                 <ng-template pTemplate=\"summary\">                     {{'Total records'|translate}} : {{records?.length}}                 </ng-template>                 <ng-template pTemplate=\"emptymessage\">                     <tr>                         <td [attr.colspan]=\"6\">                             {{'No records found'|translate}}                         </td>                     </tr>                 </ng-template>             </p-table>         </div>     </div>",
        }),
        report_decorator_1.Report({
            title: 'Exam result report',
            category: constants_1.REPORT_CATEGORY.EXAM
        }),
        __metadata("design:paramtypes", [report_utils_1.ReportUtils, excel_service_1.ExcelService, common_1.DatePipe])
    ], ExamResultReportComponent);
    return ExamResultReportComponent;
}(base_component_1.BaseComponent));
exports.ExamResultReportComponent = ExamResultReportComponent;
