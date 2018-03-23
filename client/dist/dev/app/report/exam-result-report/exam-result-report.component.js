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
var report_utils_1 = require("../../shared/helpers/report.utils");
var exam_model_1 = require("../../shared/models/exam.model");
var base_component_1 = require("../../shared/components/base/base.component");
var log_model_1 = require("../../shared/models/log.model");
var exam_grade_model_1 = require("../../shared/models/exam-grade.model");
var submission_model_1 = require("../../shared/models/submission.model");
var answer_model_1 = require("../../shared/models/answer.model");
var exam_member_model_1 = require("../../shared/models/exam-member.model");
var _ = require("underscore");
var constants_1 = require("../../shared/models/constants");
var report_decorator_1 = require("../report.decorator");
var excel_service_1 = require("../../shared/services/excel.service");
var ExamResultReportComponent = (function (_super) {
    __extends(ExamResultReportComponent, _super);
    function ExamResultReportComponent(excelService, datePipe) {
        var _this = _super.call(this) || this;
        _this.excelService = excelService;
        _this.datePipe = datePipe;
        _this.reportUtils = new report_utils_1.ReportUtils();
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
        this.excelService.exportAsExcelFile(header.concat(this.records), 'exam_result_report');
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
            var subscription = log_model_1.ExamLog.userExamActivity(_this, member.user_id, exam.id).flatMap(function (logs) {
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
            selector: 'exam-result-report',
            templateUrl: 'exam-result-report.component.html',
        }),
        report_decorator_1.Report({
            title: 'Exam result report',
            category: 'exam'
        }),
        __metadata("design:paramtypes", [excel_service_1.ExcelService, common_1.DatePipe])
    ], ExamResultReportComponent);
    return ExamResultReportComponent;
}(base_component_1.BaseComponent));
exports.ExamResultReportComponent = ExamResultReportComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvcnQvZXhhbS1yZXN1bHQtcmVwb3J0L2V4YW0tcmVzdWx0LXJlcG9ydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQW1FO0FBQ25FLDBDQUEyQztBQUMzQyw4QkFBOEM7QUFFOUMsa0VBQWdFO0FBQ2hFLDZEQUFzRDtBQUN0RCw4RUFBNEU7QUFFNUUsMkRBQXdEO0FBQ3hELHlFQUFpRTtBQUNqRSx5RUFBa0U7QUFDbEUsaUVBQTBEO0FBQzFELDJFQUFtRTtBQUNuRSw4QkFBZ0M7QUFDaEMsMkRBQTBHO0FBQzFHLHdEQUE2QztBQUk3QyxxRUFBbUU7QUFZbkU7SUFBK0MsNkNBQWE7SUFPeEQsbUNBQW9CLFlBQTBCLEVBQVUsUUFBa0I7UUFBMUUsWUFDSSxpQkFBTyxTQUVWO1FBSG1CLGtCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUV0RSxLQUFJLENBQUMsV0FBVyxHQUFJLElBQUksMEJBQVcsRUFBRSxDQUFDOztJQUMxQyxDQUFDO0lBRUQsNENBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEEsaUJBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUM3QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCwwQ0FBTSxHQUFOO1FBQ0MsSUFBSSxNQUFNLEdBQUc7WUFDWixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUN0QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUMzQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztZQUM3QyxJQUFJ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RThDLDhCQUFhLEdBK0UzRDtBQS9FWSw4REFBeUIiLCJmaWxlIjoiYXBwL3JlcG9ydC9leGFtLXJlc3VsdC1yZXBvcnQvZXhhbS1yZXN1bHQtcmVwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IEFQSVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVwb3J0VXRpbHMgfSBmcm9tICcuLi8uLi9zaGFyZWQvaGVscGVycy9yZXBvcnQudXRpbHMnO1xuaW1wb3J0IHsgRXhhbSB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvZXhhbS5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYmFzZS9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL21vZGVscy91c2VyLm1vZGVsJztcbmltcG9ydCB7IEV4YW1Mb2cgfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kZWxzL2xvZy5tb2RlbCc7XG5pbXBvcnQgeyBFeGFtR3JhZGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kZWxzL2V4YW0tZ3JhZGUubW9kZWwnO1xuaW1wb3J0IHsgU3VibWlzc2lvbiB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvc3VibWlzc2lvbi5tb2RlbCc7XG5pbXBvcnQgeyBBbnN3ZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kZWxzL2Fuc3dlci5tb2RlbCc7XG5pbXBvcnQgeyBFeGFtTWVtYmVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL21vZGVscy9leGFtLW1lbWJlci5tb2RlbCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IHsgRVhQT1JUX0RBVEVUSU1FX0ZPUk1BVCwgR1JPVVBfQ0FURUdPUlksIEVYUE9SVF9EQVRFX0ZPUk1BVCB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvY29uc3RhbnRzJ1xuaW1wb3J0IHsgUmVwb3J0IH0gZnJvbSAnLi4vcmVwb3J0LmRlY29yYXRvcic7XG5pbXBvcnQgeyBTZWxlY3RHcm91cERpYWxvZyB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3NlbGVjdC1ncm91cC1kaWFsb2cvc2VsZWN0LWdyb3VwLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0VXNlcnNEaWFsb2cgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zZWxlY3QtdXNlci1kaWFsb2cvc2VsZWN0LXVzZXItZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaW1lQ29udmVydFBpcGV9IGZyb20gJy4uLy4uL3NoYXJlZC9waXBlcy90aW1lLnBpcGUnO1xuaW1wb3J0IHsgRXhjZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2V4Y2VsLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdleGFtLXJlc3VsdC1yZXBvcnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnZXhhbS1yZXN1bHQtcmVwb3J0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5AUmVwb3J0KHtcbiAgICB0aXRsZTonRXhhbSByZXN1bHQgcmVwb3J0JyxcbiAgICBjYXRlZ29yeTonZXhhbSdcbn0pXG5leHBvcnQgY2xhc3MgRXhhbVJlc3VsdFJlcG9ydENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgICByZWNvcmRzOiBhbnk7XG4gICAgZXhhbXM6IEV4YW1bXTtcbiAgICBzZWxlY3RlZEV4YW06IGFueTtcbiAgICByZXBvcnRVdGlsczogUmVwb3J0VXRpbHM7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV4Y2VsU2VydmljZTogRXhjZWxTZXJ2aWNlLCBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnJlcG9ydFV0aWxzID0gIG5ldyBSZXBvcnRVdGlscygpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIFx0RXhhbS5hbGwodGhpcykuc3Vic2NyaWJlKGV4YW1zID0+IHtcbiAgICBcdFx0dGhpcy5leGFtcyA9IGV4YW1zO1xuICAgIFx0fSk7XG4gICAgfVxuXG4gICAgZXhwb3J0KCkge1xuICAgIFx0dmFyIGhlYWRlciA9IFtcbiAgICBcdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ05hbWUnKSxcbiAgICBcdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ0xvZ2luJyksXG4gICAgXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdVc2VyIGdyb3VwJyksXG4gICAgXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdBdHRlbXB0IGRhdGUnKSxcbiAgICBcdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ1Njb3JlJyksXG4gICAgXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdSZXN1bHQnKSxcbiAgICBcdF1cbiAgICBcdHRoaXMuZXhjZWxTZXJ2aWNlLmV4cG9ydEFzRXhjZWxGaWxlKGhlYWRlci5jb25jYXQodGhpcy5yZWNvcmRzKSwnZXhhbV9yZXN1bHRfcmVwb3J0Jyk7XG4gICAgfVxuXG4gICAgc2VsZWN0RXhhbSgpIHtcbiAgICBcdGlmICh0aGlzLnNlbGVjdGVkRXhhbSkge1xuICAgIFx0XHRFeGFtTWVtYmVyLmxpc3RCeUV4YW0odGhpcywgdGhpcy5zZWxlY3RlZEV4YW0uaWQpLnN1YnNjcmliZShtZW1iZXJzID0+IHtcblx0XHRcdFx0RXhhbUdyYWRlLmxpc3RCeUV4YW0odGhpcyx0aGlzLnNlbGVjdGVkRXhhbS5pZCkuc3Vic2NyaWJlKGdyYWRlcyA9PiB7XG5cdFx0XHRcdFx0dGhpcy5nZW5lcmF0ZVJlcG9ydCh0aGlzLnNlbGVjdGVkRXhhbSwgZ3JhZGVzLCBtZW1iZXJzKS5zdWJzY3JpYmUocmVjb3JkcyA9PiB7XG5cdFx0ICAgIFx0XHRcdHRoaXMucmVjb3JkcyA9IHJlY29yZHM7XG5cdFx0ICAgIFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcdFxuICAgIFx0fVxuICAgIH1cblxuXG4gICAgZ2VuZXJhdGVSZXBvcnQoZXhhbTogRXhhbSwgZ3JhZGVzOiBFeGFtR3JhZGVbXSwgbWVtYmVyczogRXhhbU1lbWJlcltdKTpPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9ucyA9W107XG4gICAgXHRfLmVhY2gobWVtYmVycywgKG1lbWJlcjpFeGFtTWVtYmVyKT0+IHtcbiAgICBcdFx0dmFyIHN1YnNjcmlwdGlvbiA9IEV4YW1Mb2cudXNlckV4YW1BY3Rpdml0eSh0aGlzLCBtZW1iZXIudXNlcl9pZCwgZXhhbS5pZCkuZmxhdE1hcChsb2dzID0+IHtcbiAgICBcdFx0XHRyZXR1cm4gU3VibWlzc2lvbi5ieU1lbWJlcih0aGlzLCBtZW1iZXIuaWQpLmZsYXRNYXAoKHN1Ym1pdDpTdWJtaXNzaW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc3VibWl0KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YoW10pO1xuICAgIFx0XHRcdFx0cmV0dXJuIEFuc3dlci5saXN0QnlTdWJtaXQodGhpcywgc3VibWl0LmlkKS5tYXAoYW5zd2VycyA9PiB7XG4gICAgXHRcdFx0XHRcdHJldHVybiB0aGlzLmdlbmVyYXRlUmVwb3J0Um93KGV4YW0sIGdyYWRlcywgbWVtYmVyLCBhbnN3ZXJzLCBsb2dzKTtcbiAgICBcdFx0XHRcdH0pO1xuICAgIFx0XHRcdH0pO1xuICAgIFx0XHR9KTtcdFxuICAgIFx0XHRzdWJzY3JpcHRpb25zLnB1c2goc3Vic2NyaXB0aW9uKTtcdFxuICAgIFx0fSk7XHRcdFxuICAgIFx0cmV0dXJuIE9ic2VydmFibGUuemlwKC4uLnN1YnNjcmlwdGlvbnMpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlUmVwb3J0Um93KGV4YW06RXhhbSwgZ3JhZGVzOiBFeGFtR3JhZGVbXSwgbWVtYmVyOiBFeGFtTWVtYmVyLCBhbnN3ZXJzOiBBbnN3ZXJbXSwgbG9nczogRXhhbUxvZ1tdKTphbnkge1xuICAgIFx0dmFyIHJlY29yZCA9IHt9O1xuXHQgICAgcmVjb3JkW1widXNlcl9sb2dpblwiXSA9ICBtZW1iZXIubG9naW47XG5cdCAgICByZWNvcmRbXCJ1c2VyX25hbWVcIl0gPSBtZW1iZXIubmFtZTtcblx0ICAgIHJlY29yZFtcInVzZXJfZ3JvdXBcIl0gPSBtZW1iZXIuZXRyYWluaW5nX2dyb3VwX2lkX19ERVNDX187XG5cdCAgICByZWNvcmRbXCJzY29yZVwiXSA9IF8ucmVkdWNlKGFuc3dlcnMsICAoc3VtLCBhbnMpPT4ge1xuICAgIFx0XHRyZXR1cm4gc3VtICsgYW5zLnNjb3JlO1xuXHRcdH0sMCk7XG5cdCAgICB2YXIgcmVzdWx0ID0gdGhpcy5yZXBvcnRVdGlscy5hbmFseXplRXhhbUFjdGl2aXR5KGxvZ3MpO1xuXHQgICAgaWYgKHJlc3VsdFswXSAhPSBJbmZpbml0eSlcblx0ICAgIFx0cmVjb3JkW1wiZGF0ZV9hdHRlbXB0XCJdID0gIHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKHJlc3VsdFswXSxFWFBPUlRfREFURVRJTUVfRk9STUFUKTtcbiAgICBcdHZhciBncmFkZSA9IF8uZmluZChncmFkZXMsIChvYmopPT4ge1xuICAgIFx0XHRyZXR1cm4gb2JqLm1pbl9zY29yZSA8PSByZWNvcmRbXCJzY29yZVwiXSAmJiBvYmoubWF4X3Njb3JlID49IHJlY29yZFtcInNjb3JlXCJdXG4gICAgXHR9KTtcbiAgICBcdGlmIChncmFkZSlcbiAgICBcdFx0cmVjb3JkW1wiZ3JhZGVcIl0gPSBncmFkZS5uYW1lO1xuXHQgICAgcmV0dXJuIHJlY29yZDtcbiAgICB9XG5cbn1cbiJdfQ==
