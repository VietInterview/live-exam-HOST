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
var answer_model_1 = require("../../../shared/models/answer.model");
var exam_grade_model_1 = require("../../../shared/models/exam-grade.model");
var submission_model_1 = require("../../../shared/models/submission.model");
var exam_member_model_1 = require("../../../shared/models/exam-member.model");
var answer_sheet_dialog_component_1 = require("../answer-sheet/answer-sheet.dialog.component");
var _ = require("underscore");
var ExamScoreDialog = (function (_super) {
    __extends(ExamScoreDialog, _super);
    function ExamScoreDialog() {
        return _super.call(this) || this;
    }
    ExamScoreDialog.prototype.show = function (exam) {
        this.display = true;
        this.exam = exam;
        this.loadAnswers();
    };
    ExamScoreDialog.prototype.hide = function () {
        this.display = false;
    };
    ExamScoreDialog.prototype.viewAnswerSheet = function () {
        if (this.selectedRecord)
            this.answerSheetDialog.show(this.exam, this.selectedRecord.member);
    };
    ExamScoreDialog.prototype.loadAnswers = function () {
        var _this = this;
        exam_grade_model_1.ExamGrade.listByExam(this, this.exam.id).subscribe(function (grades) {
            exam_member_model_1.ExamMember.listCandidateByExam(_this, _this.exam.id).subscribe(function (members) {
                _this.records = [];
                _.each(members, function (member) {
                    submission_model_1.Submission.byMember(_this, member.id).subscribe(function (submit) {
                        answer_model_1.Answer.listBySubmit(_this, submit.id).subscribe(function (answers) {
                            var record = {
                                name: member.name,
                                etraining_group_id__DESC__: member.etraining_group_id__DESC__,
                                member: member,
                                answers: answers
                            };
                            record["score"] = _.reduce(answers, function (sum, ans) {
                                return sum + ans.score;
                            }, 0);
                            var grade = _.find(grades, function (obj) {
                                return obj.min_score <= record["score"] && obj.max_score >= record["score"];
                            });
                            if (grade)
                                record["grade"] = grade.name;
                            _this.records.push(record);
                        });
                    });
                });
            });
        });
    };
    __decorate([
        core_1.ViewChild(answer_sheet_dialog_component_1.AnswerSheetDialog),
        __metadata("design:type", answer_sheet_dialog_component_1.AnswerSheetDialog)
    ], ExamScoreDialog.prototype, "answerSheetDialog", void 0);
    ExamScoreDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-exam-score-dialog',
            template: "<p-dialog header=\"{{'Exam score'|translate}}\" [(visible)]=\"display\" modal=\"true\" width=\"960\" height=\"100%\" [responsive]=\"true\">   <p-scrollPanel [style]=\"{width: '100%', height: '520px'}\">     <div class=\"ui-g-12 \">       <p-toolbar>         <div class=\"ui-toolbar-group-left \">           <button pButton type=\"button \" label=\"{{ 'Answer sheet'|translate}} \" class=\"purple-btn \" icon=\"ui-icon-content-paste\" (click)=\"viewAnswerSheet() \" [disabled]=\"!selectedRecord \"></button>         </div>       </p-toolbar>       <p-table #scoreTable [value]=\"records\" [paginator]=\"true \" [rows]=\"10\" selectionMode=\"single\" [(selection)]=\"selectedRecord\" [responsive]=\"true \" sortField=\"role\">         <ng-template pTemplate=\"header\">           <tr>             <th [pSortableColumn]=\"'name'\">               {{'Name'|translate}}               <p-sortIcon [field]=\"'name'\"></p-sortIcon>             </th>             <th [pSortableColumn]=\"'etraining_group__DESC__'\">               {{'Group'|translate}}               <p-sortIcon [field]=\"'etraining_group__DESC__'\"></p-sortIcon>             </th>             <th [pSortableColumn]=\"'score'\">               {{'Role'|translate}}               <p-sortIcon [field]=\"'score'\"></p-sortIcon>             </th>             <th [pSortableColumn]=\"'grade'\">               {{'Grade'|translate}}               <p-sortIcon [field]=\"'grade'\"></p-sortIcon>             </th>           </tr>         </ng-template>         <ng-template pTemplate=\"body\" let-record>           <tr [pSelectableRow]=\"record\">             <td>{{record.name}}</td>             <td>{{record.etraining_group_id__DESC__}}</td>             <td>{{record.score}}</td>             <td>{{record.grade}}</td>           </tr>         </ng-template>         <ng-template pTemplate=\"summary\">           {{'Total records'|translate}} : {{members?.length}}         </ng-template>         <ng-template pTemplate=\"emptymessage\">           <tr>             <td [attr.colspan]=\"4\">               {{'No records found'|translate}}             </td>           </tr>         </ng-template>       </p-table>     </div>   </p-scrollPanel>   <etraining-answer-sheet-dialog></etraining-answer-sheet-dialog>   <p-footer>     <button type=\"button\" pButton icon=\"fa-close\" (click)=\"hide()\" label=\"{{'Close'|translate}}\"></button>   </p-footer>    </p-dialog>",
        }),
        __metadata("design:paramtypes", [])
    ], ExamScoreDialog);
    return ExamScoreDialog;
}(base_component_1.BaseComponent));
exports.ExamScoreDialog = ExamScoreDialog;
