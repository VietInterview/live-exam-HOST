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
var base_component_1 = require("../../../shared/components/base/base.component");
var _ = require("underscore");
var constants_1 = require("../../../shared/models/constants");
var exam_model_1 = require("../../../shared/models/exam.model");
var exam_dialog_component_1 = require("../exam-dialog/exam-dialog.component");
var enrollment_dialog_component_1 = require("../enrollment-dialog/enrollment-dialog.component");
var ExamListComponent = (function (_super) {
    __extends(ExamListComponent, _super);
    function ExamListComponent() {
        var _this = _super.call(this) || this;
        _this.EXAM_STATUS = constants_1.EXAM_STATUS;
        _this.viewModes = [{
                label: _this.translateService.instant('Calendar'), value: 'cal'
            }, {
                label: _this.translateService.instant('List'), value: 'list'
            }];
        _this.viewMode = 'list';
        _this.header = {
            left: 'prev, today, next',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
        return _this;
    }
    ExamListComponent.prototype.enroll = function () {
        if (this.selectedExam)
            this.examEnrollDialog.enroll(this.selectedExam);
    };
    ExamListComponent.prototype.ngOnInit = function () {
        this.loadExams();
    };
    ExamListComponent.prototype.add = function () {
        var _this = this;
        var exam = new exam_model_1.Exam();
        this.examDialog.show(exam);
        this.examDialog.onCreateComplete.subscribe(function () {
            _this.loadExams();
        });
    };
    ExamListComponent.prototype.edit = function () {
        var _this = this;
        if (this.selectedExam)
            this.examDialog.show(this.selectedExam);
        this.examDialog.onUpdateComplete.subscribe(function () {
            _this.loadExams();
        });
    };
    ExamListComponent.prototype.delete = function () {
        var _this = this;
        if (this.selectedExam)
            this.confirmationService.confirm({
                message: this.translateService.instant('Are you sure to delete ?'),
                accept: function () {
                    _this.selectedExam.delete(_this).subscribe(function () {
                        _this.loadExams();
                        _this.selectedExam = null;
                    });
                }
            });
    };
    ExamListComponent.prototype.onDayClick = function () {
        this.add();
    };
    ExamListComponent.prototype.onEventClick = function (event) {
        var examId = event.calEvent.id;
        this.selectedExam = _.find(this.exams, function (exam) {
            return exam.id == examId;
        });
        this.edit();
    };
    ExamListComponent.prototype.loadExams = function () {
        var _this = this;
        exam_model_1.Exam.all(this).subscribe(function (exams) {
            _this.exams = exams;
            _this.events = _.map(exams, function (exam) {
                return {
                    title: exam.name,
                    start: exam.start,
                    send: exam.end,
                    id: exam.id,
                    allDay: true
                };
            });
        });
    };
    __decorate([
        core_1.ViewChild(exam_dialog_component_1.ExamDialog),
        __metadata("design:type", exam_dialog_component_1.ExamDialog)
    ], ExamListComponent.prototype, "examDialog", void 0);
    __decorate([
        core_1.ViewChild(enrollment_dialog_component_1.ExamEnrollDialog),
        __metadata("design:type", enrollment_dialog_component_1.ExamEnrollDialog)
    ], ExamListComponent.prototype, "examEnrollDialog", void 0);
    ExamListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-exam-list',
            template: "<div class=\"card card-w-title\">     <h1>{{'Exams'|translate}}</h1>     <div class=\"ui-g\">         <div class=\"ui-g-12\">             <p-toolbar>                 <div class=\"ui-toolbar-group-left\">                     <button pButton type=\"button\" label=\"{{'New'|translate}}\" class=\"green-btn\" (click)=\"add()\" icon=\"ui-icon-add\"></button>                     <button pButton type=\"button\" label=\"{{'Edit'|translate}}\" class=\"purple-btn\" icon=\"ui-icon-mode-edit\" (click)=\"edit()\" [disabled]=\"!selectedExam\"></button>                     <button pButton type=\"button\" label=\"{{'Delete'|translate}}\" class=\"red-btn\" icon=\"ui-icon-delete\" (click)=\"delete()\" [disabled]=\"!selectedExam\"></button>                     <button pButton type=\"button\" label=\"{{'Enroll'|translate}}\" class=\"green-btn\" icon=\"ui-icon-people\" (click)=\"enroll()\" [disabled]=\"!selectedExam\"></button>                 </div>                 <div class=\"ui-toolbar-group-right\">                     <p-selectButton [options]=\"viewModes\" [(ngModel)]=\"viewMode\" name=\"view\" ></p-selectButton>                 </div>             </p-toolbar>             <p-schedule #examSchedule [events]=\"events\" [hidden]=\"viewMode!='cal'\" (onDayClick)=\"onDayClick($event)\" [header]=\"header\"  [editable]=\"true\" (onEventClick)=\"onEventClick($event)\"></p-schedule>             <p-table #examTable [value]=\"exams\" [paginator]=\"true\" [rows]=\"10\" selectionMode=\"single\" [hidden]=\"viewMode!='list'\"             [(selection)]=\"selectedExam\" [responsive]=\"true\">                 <ng-template pTemplate=\"header\">                     <tr>                         <th [pSortableColumn]=\"'name'\">                             {{'Name'|translate}}                             <p-sortIcon [field]=\"'name'\"></p-sortIcon>                         </th>                         <th>                             {{'Summary'|translate}}                         </th>                         <th>                             {{'Start'|translate}}                         </th>                         <th>                             {{'End'|translate}}                         </th>                         <th [pSortableColumn]=\"'status'\">                             {{'Status'|translate}}                             <p-sortIcon [field]=\"'status'\"></p-sortIcon>                         </th>                     </tr>                 </ng-template>                 <ng-template pTemplate=\"body\" let-exam>                     <tr [pSelectableRow]=\"exam\">                         <td>{{exam.name}}</td>                         <td>{{exam.summary}}</td>                         <td>{{exam.start | date : \"dd/MM/yyyy\"}}</td>                         <td>{{exam.end | date : \"dd/MM/yyyy\"}}</td>                         <td>{{EXAM_STATUS[exam.status] | translate}}</td>                     </tr>                 </ng-template>                 <ng-template pTemplate=\"summary\">                     {{'Total records'|translate}} : {{exams?.length}}                 </ng-template>                 <ng-template pTemplate=\"emptymessage\" >                     <tr>                         <td [attr.colspan]=\"5\">                             {{'No records found'|translate}}                         </td>                     </tr>                 </ng-template>             </p-table>             <etraining-exam-enrollment-dialog></etraining-exam-enrollment-dialog>             <etraining-exam-dialog></etraining-exam-dialog>         </div>     </div> </div>",
            styles: [".mrg-bt{margin-bottom:15px}"],
        }),
        __metadata("design:paramtypes", [])
    ], ExamListComponent);
    return ExamListComponent;
}(base_component_1.BaseComponent));
exports.ExamListComponent = ExamListComponent;
