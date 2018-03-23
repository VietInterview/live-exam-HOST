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
var Observable_1 = require("rxjs/Observable");
var base_component_1 = require("../../../shared/components/base/base.component");
var exam_model_1 = require("../../../shared/models/exam.model");
var exam_question_model_1 = require("../../../shared/models/exam-question.model");
var answer_model_1 = require("../../../shared/models/answer.model");
var submission_model_1 = require("../../../shared/models/submission.model");
var question_model_1 = require("../../../shared/models/question.model");
var question_container_directive_1 = require("../../../assessment/question/question-template/question-container.directive");
var question_decorator_1 = require("../../../assessment/question/question-template/question.decorator");
require("rxjs/add/observable/timer");
var _ = require("underscore");
var AnswerSheetDialog = (function (_super) {
    __extends(AnswerSheetDialog, _super);
    function AnswerSheetDialog(componentFactoryResolver) {
        var _this = _super.call(this) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.display = false;
        _this.examQuestions = [];
        _this.answers = [];
        _this.exam = new exam_model_1.Exam();
        _this.currentQuestion = new exam_question_model_1.ExamQuestion();
        _this.currentAnswer = new answer_model_1.Answer();
        return _this;
    }
    AnswerSheetDialog.prototype.show = function (exam, member) {
        var _this = this;
        this.display = true;
        this.exam = exam;
        this.member = member;
        this.qIndex = 0;
        submission_model_1.Submission.byMember(this, this.member.id).subscribe(function (submit) {
            if (submit) {
                _this.submission = submit;
                _this.startReview();
            }
        });
    };
    AnswerSheetDialog.prototype.hide = function () {
        this.display = false;
    };
    AnswerSheetDialog.prototype.fetchAnswers = function () {
        if (this.submission.id)
            return answer_model_1.Answer.listBySubmit(this, this.submission.id);
        else
            return Observable_1.Observable.of([]);
    };
    AnswerSheetDialog.prototype.startReview = function () {
        var _this = this;
        exam_question_model_1.ExamQuestion.listByExam(this, this.exam.id).subscribe(function (examQuestions) {
            _this.examQuestions = _.shuffle(examQuestions);
            _this.fetchAnswers().subscribe(function (answers) {
                _this.answers = answers;
                _this.displayQuestion(0);
            });
        });
    };
    AnswerSheetDialog.prototype.prepareQuestion = function (question) {
        return question_model_1.Question.get(this, question.question_id);
    };
    AnswerSheetDialog.prototype.prepareAnswer = function (question) {
        var answer = _.find(this.answers, function (ans) {
            return ans.question_id == question.question_id;
        });
        if (!answer)
            answer = new answer_model_1.Answer();
        return Observable_1.Observable.of(answer);
    };
    AnswerSheetDialog.prototype.displayQuestion = function (index) {
        var _this = this;
        this.qIndex = index;
        this.currentQuestion = this.examQuestions[index];
        this.prepareQuestion(this.currentQuestion).subscribe(function (question) {
            _this.prepareAnswer(_this.currentQuestion).subscribe(function (answer) {
                _this.currentAnswer = answer;
                var detailComponent = question_decorator_1.QuestionRegister.Instance.lookup(question.type);
                var viewContainerRef = _this.questionHost.viewContainerRef;
                if (detailComponent) {
                    var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(detailComponent);
                    viewContainerRef.clear();
                    _this.componentRef = viewContainerRef.createComponent(componentFactory);
                    _this.componentRef.instance.mode = 'review';
                    _this.componentRef.instance.render(question, _this.currentAnswer);
                }
            });
        });
    };
    AnswerSheetDialog.prototype.next = function () {
        if (this.qIndex < this.examQuestions.length - 1) {
            this.displayQuestion(this.qIndex + 1);
        }
    };
    AnswerSheetDialog.prototype.prev = function () {
        if (this.qIndex > 0) {
            this.displayQuestion(this.qIndex - 1);
        }
    };
    __decorate([
        core_1.ViewChild(question_container_directive_1.QuestionContainerDirective),
        __metadata("design:type", question_container_directive_1.QuestionContainerDirective)
    ], AnswerSheetDialog.prototype, "questionHost", void 0);
    AnswerSheetDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-answer-sheet-dialog',
            template: "<p-dialog header=\"{{exam.name}}\" [(visible)]=\"display\" modal=\"true\" width=\"960\" [responsive]=\"true\" appendTo=\"body\">   <p-card>     <p-header>       <span class=\"exam-question-title\">           {{'Question'|translate}} {{(qIndex+1) +'/' + examQuestions.length}} {{'-' + currentQuestion.title}}         </span>       <span class=\"question-score\">           {{'Score'|translate}} {{':'+ currentAnswer.score+'/'+currentQuestion.score}}         </span>     </p-header>     <ng-template question-container></ng-template>     <p-footer>       <button pButton type=\"button\" icon=\"ui-icon-navigate-before\" title=\"{{'Previous'|translate}}\" label=\"{{'Previous'|translate}}\" class=\" purple-btn\" style=\"margin-right:4px;\" (click)=\"prev()\" *ngIf=\"qIndex >0 \"></button>       <button pButton type=\"button\" icon=\"ui-icon-navigate-next\" title=\"{{'Next'|translate}}\" label=\"{{'Next'|translate}}\" class=\" purple-btn\" style=\"margin-right:4px;\" (click)=\"next()\" *ngIf=\"qIndex < examQuestions.length-1\"></button>     </p-footer>   </p-card>   <p-footer>     <button type=\"button\" pButton icon=\"fa-close\" (click)=\"hide()\" label=\"{{'Close'|translate}}\"></button>   </p-footer> </p-dialog>",
        }),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
    ], AnswerSheetDialog);
    return AnswerSheetDialog;
}(base_component_1.BaseComponent));
exports.AnswerSheetDialog = AnswerSheetDialog;
