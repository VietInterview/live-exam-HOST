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
var submission_model_1 = require("../../../shared/models/submission.model");
var exam_question_model_1 = require("../../../shared/models/exam-question.model");
var exam_member_model_1 = require("../../../shared/models/exam-member.model");
var _ = require("underscore");
var question_marking_dialog_component_1 = require("../question-marking/question-marking.dialog.component");
var ExamMarkingDialog = (function (_super) {
    __extends(ExamMarkingDialog, _super);
    function ExamMarkingDialog() {
        return _super.call(this) || this;
    }
    ExamMarkingDialog.prototype.show = function (exam) {
        this.display = true;
        this.exam = exam;
        this.loadScores();
    };
    ExamMarkingDialog.prototype.hide = function () {
        this.display = false;
    };
    ExamMarkingDialog.prototype.mark = function () {
        if (this.selectedRecord) {
            this.questionMarkDialog.show(this.selectedRecord.member, this.selectedRecord.answers);
        }
    };
    ExamMarkingDialog.prototype.loadScores = function () {
        var _this = this;
        exam_question_model_1.ExamQuestion.listOpenQuestionByExam(this, this.exam.id).subscribe(function (questions) {
            _this.questions = questions;
            var questionIds = _.pluck(questions, 'question_id');
            exam_member_model_1.ExamMember.listCandidateByExam(_this, _this.exam.id).subscribe(function (members) {
                _this.records = [];
                _.each(members, function (member) {
                    submission_model_1.Submission.byMember(_this, member.id).subscribe(function (submit) {
                        answer_model_1.Answer.listBySubmit(_this, submit.id).subscribe(function (answers) {
                            answers = _.filter(answers, function (obj) {
                                return _.contains(questionIds, obj.question_id);
                            });
                            var record = {
                                name: member.name,
                                etraining_group_id__DESC__: member.etraining_group_id__DESC__,
                                member: member,
                                answers: answers
                            };
                            _.each(answers, function (obj) {
                                record[obj.question_id] = obj.score;
                            });
                            _this.records.push(record);
                        });
                    });
                });
            });
        });
    };
    __decorate([
        core_1.ViewChild(question_marking_dialog_component_1.QuestionMarkingDialog),
        __metadata("design:type", question_marking_dialog_component_1.QuestionMarkingDialog)
    ], ExamMarkingDialog.prototype, "questionMarkDialog", void 0);
    ExamMarkingDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-exam-marking-dialog',
            template: "<p-dialog header=\"{{'Exam marking'|translate}}\" [(visible)]=\"display\" modal=\"true\" width=\"960\" height=\"100%\" [responsive]=\"true\">   <p-scrollPanel [style]=\"{width: '100%', height: '520px'}\">     <div class=\"ui-g-12 \">       <p-toolbar>         <div class=\"ui-toolbar-group-left \">           <button pButton type=\"button \" label=\"{{ 'Mark'|translate}} \" class=\"purple-btn \" icon=\"ui-icon-local-offer\" (click)=\"mark() \" [disabled]=\"!selectedRecord \"></button>         </div>       </p-toolbar>       <p-table #scoreTable [value]=\"records\" [paginator]=\"true \" [rows]=\"10\" selectionMode=\"single\" [(selection)]=\"selectedRecord \" [responsive]=\"true\" >         <ng-template pTemplate=\"header\">           <tr>             <th [pSortableColumn]=\"'name'\">               {{'Name'|translate}}               <p-sortIcon [field]=\"'name'\"></p-sortIcon>             </th>             <th [pSortableColumn]=\"'etraining_group_id__DESC__'\">               {{'Group'|translate}}               <p-sortIcon [field]=\"'etraining_group_id__DESC__'\"></p-sortIcon>             </th>             <th *ngFor=\"let question of questions\">                 {{question.title}}             </th>           </tr>         </ng-template>         <ng-template pTemplate=\"body\" let-record>           <tr [pSelectableRow]=\"record\">             <td>{{record.name}}</td>             <td>{{record.etraining_group_id__DESC__}}</td>             <td *ngFor=\"let question of questions\">                 {{record[question.question_id]}}             </td>           </tr>         </ng-template>         <ng-template pTemplate=\"summary\">           {{'Total records'|translate}} : {{members?.length}}         </ng-template>       </p-table>     </div>   </p-scrollPanel>   <etraining-question-marking-dialog></etraining-question-marking-dialog>   <p-footer>     <button type=\"button\" pButton icon=\"fa-close\" (click)=\"hide()\" label=\"{{'Close'|translate}}\"></button>   </p-footer>    </p-dialog>",
        }),
        __metadata("design:paramtypes", [])
    ], ExamMarkingDialog);
    return ExamMarkingDialog;
}(base_component_1.BaseComponent));
exports.ExamMarkingDialog = ExamMarkingDialog;
