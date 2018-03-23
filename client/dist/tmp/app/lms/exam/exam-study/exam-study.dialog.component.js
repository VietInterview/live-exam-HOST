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
var Rx_1 = require("rxjs/Rx");
var base_component_1 = require("../../../shared/components/base/base.component");
var _ = require("underscore");
var exam_model_1 = require("../../../shared/models/exam.model");
var submission_model_1 = require("../../../shared/models/submission.model");
var question_model_1 = require("../../../shared/models/question.model");
var answer_model_1 = require("../../../shared/models/answer.model");
var exam_question_model_1 = require("../../../shared/models/exam-question.model");
var log_model_1 = require("../../../shared/models/log.model");
var question_container_directive_1 = require("../../../assessment/question/question-template/question-container.directive");
var question_decorator_1 = require("../../../assessment/question/question-template/question.decorator");
require("rxjs/add/observable/timer");
var ExamStudyDialog = (function (_super) {
    __extends(ExamStudyDialog, _super);
    function ExamStudyDialog(componentFactoryResolver) {
        var _this = _super.call(this) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.display = false;
        _this.examQuestions = [];
        _this.answers = [];
        _this.exam = new exam_model_1.Exam();
        _this.currentQuestion = new exam_question_model_1.ExamQuestion();
        _this.timeLeft = 0;
        _this.progress = 0;
        return _this;
    }
    ExamStudyDialog.prototype.show = function (exam, member) {
        var _this = this;
        this.display = true;
        this.exam = exam;
        this.member = member;
        this.qIndex = 0;
        submission_model_1.Submission.byMember(this, this.member.id).subscribe(function (submit) {
            if (!submit) {
                submit = new submission_model_1.Submission();
                submit.member_id = member.id;
                submit.start = new Date();
                submit.save(_this).subscribe(function () {
                    _this.submission = submit;
                    log_model_1.UserLog.startExam(_this, _this.member.user_id, submit);
                    _this.member.enroll_status = 'in-progress';
                    _this.member.save(_this).subscribe(function () {
                        _this.startExam();
                    });
                });
            }
            else {
                _this.submission = submit;
                _this.startExam();
            }
        });
    };
    ExamStudyDialog.prototype.hide = function () {
        this.display = false;
    };
    ExamStudyDialog.prototype.fetchAnswers = function () {
        if (this.submission.id)
            return answer_model_1.Answer.listBySubmit(this, this.submission.id);
        else
            return Rx_1.Observable.of([]);
    };
    ExamStudyDialog.prototype.startExam = function () {
        var _this = this;
        exam_question_model_1.ExamQuestion.listByExam(this, this.exam.id).subscribe(function (examQuestions) {
            _this.examQuestions = _.shuffle(examQuestions);
            _this.fetchAnswers().subscribe(function (answers) {
                _this.answers = answers;
                _this.startTimer();
                _this.displayQuestion(0);
            });
        });
    };
    ExamStudyDialog.prototype.finishExam = function () {
        var _this = this;
        var subscriptions = [];
        this.member.enroll_status = 'completed';
        this.submission.end = new Date();
        subscriptions.push(this.member.save(this));
        subscriptions.push(this.submission.save(this));
        Rx_1.Observable.forkJoin.apply(Rx_1.Observable, subscriptions).subscribe(function () {
            log_model_1.UserLog.finishExam(_this, _this.member.user_id, _this.submission);
            _this.hide();
        });
    };
    ExamStudyDialog.prototype.prepareAnswer = function (question) {
        var _this = this;
        var answer = _.find(this.answers, function (ans) {
            return ans.question_id == question.question_id;
        });
        if (!answer) {
            var answer = new answer_model_1.Answer();
            answer.submission_id = this.submission.id;
            answer.question_id = question.question_id;
            return answer.save(this).do(function (ans) {
                _this.answers.push(answer);
            });
        }
        else
            return Rx_1.Observable.of(answer);
    };
    ExamStudyDialog.prototype.prepareQuestion = function (question) {
        return question_model_1.Question.get(this, question.question_id);
    };
    ExamStudyDialog.prototype.updateProgress = function () {
        var validAnswers = _.filter(this.answers, function (ans) {
            return ans.option_id != null || ans.text != null;
        });
        if (this.examQuestions.length)
            this.progress = Math.floor(validAnswers.length / this.examQuestions.length * 100);
    };
    ExamStudyDialog.prototype.displayQuestion = function (index) {
        var _this = this;
        this.qIndex = index;
        this.currentQuestion = this.examQuestions[index];
        this.prepareQuestion(this.currentQuestion).subscribe(function (question) {
            _this.prepareAnswer(_this.currentQuestion).subscribe(function (answer) {
                log_model_1.UserLog.startAnswer(_this, _this.member.user_id, answer);
                _this.currentAnswer = answer;
                var detailComponent = question_decorator_1.QuestionRegister.Instance.lookup(question.type);
                var viewContainerRef = _this.questionHost.viewContainerRef;
                if (detailComponent) {
                    var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(detailComponent);
                    viewContainerRef.clear();
                    _this.componentRef = viewContainerRef.createComponent(componentFactory);
                    _this.componentRef.instance.mode = 'study';
                    _this.componentRef.instance.render(question, _this.currentAnswer);
                    _this.updateProgress();
                }
            });
        });
    };
    ExamStudyDialog.prototype.submitAnswer = function () {
        var _this = this;
        this.componentRef.instance.concludeAnswer();
        if (this.currentAnswer.is_correct) {
            this.currentAnswer.score = this.currentQuestion.score;
        }
        else
            this.currentAnswer.score = 0;
        return this.currentAnswer.save(this).do(function () {
            log_model_1.UserLog.finishAnswer(_this, _this.member.user_id, _this.currentAnswer);
        });
    };
    ExamStudyDialog.prototype.next = function () {
        var _this = this;
        this.submitAnswer().subscribe(function () {
            if (_this.qIndex < _this.examQuestions.length - 1) {
                _this.displayQuestion(_this.qIndex + 1);
            }
        });
    };
    ExamStudyDialog.prototype.prev = function () {
        var _this = this;
        this.submitAnswer().subscribe(function () {
            if (_this.qIndex > 0) {
                _this.displayQuestion(_this.qIndex - 1);
            }
        });
    };
    ExamStudyDialog.prototype.submitExam = function () {
        var _this = this;
        this.submitAnswer().subscribe(function () {
            _this.confirmationService.confirm({
                message: _this.translateService.instant('Are you sure to submit ?'),
                accept: function () {
                    _this.timerSubject.next();
                    _this.finishExam();
                }
            });
        });
    };
    ExamStudyDialog.prototype.startTimer = function () {
        var _this = this;
        this.timerSubject = new Rx_1.Subject();
        var now = new Date();
        var elapse = Math.floor((now.getTime() - this.submission.start.getTime()));
        this.timeLeft = this.exam.duration * 60 * 1000 - elapse;
        if (this.timeLeft <= 0)
            this.finishExam();
        else {
            this.timer = Rx_1.Observable.timer(0, 1000);
            this.timer
                .takeUntil(this.timerSubject)
                .subscribe(function () {
                _this.timeLeft -= 1000;
                if (_this.timeLeft <= 0)
                    _this.finishExam();
            });
        }
    };
    __decorate([
        core_1.ViewChild(question_container_directive_1.QuestionContainerDirective),
        __metadata("design:type", question_container_directive_1.QuestionContainerDirective)
    ], ExamStudyDialog.prototype, "questionHost", void 0);
    ExamStudyDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-exam-study-dialog',
            template: "<p-dialog header=\"{{exam.name}}\" [(visible)]=\"display\" modal=\"true\" width=\"960\" [responsive]=\"true\" [closeOnEscape]=\"false\" [closable]=\"false\">     <p-card>       <p-header>         <span class=\"exam-question-title\">           {{'Question'|translate}} {{(qIndex+1) +'/' + examQuestions.length}} {{'-' + currentQuestion.title}}         </span>         <span class=\"exam-timer\"><i class=\"material-icons\">access_time</i> {{ timeLeft | clock  }}</span>         <p-progressBar [value]=\"progress\"></p-progressBar>       </p-header>         <ng-template question-container></ng-template>       <p-footer>           <button pButton type=\"button\" icon=\"ui-icon-navigate-before\" title=\"{{'Previous'|translate}}\" label=\"{{'Previous'|translate}}\" class=\" purple-btn\" style=\"margin-right:4px;\" (click)=\"prev()\" *ngIf=\"qIndex >0 \"></button>           <button pButton type=\"button\" icon=\"ui-icon-navigate-next\" title=\"{{'Next'|translate}}\" label=\"{{'Next'|translate}}\" class=\" purple-btn\" style=\"margin-right:4px;\" (click)=\"next()\" *ngIf=\"qIndex < examQuestions.length-1\"></button>           <button pButton type=\"button\" icon=\"ui-icon-check\" title=\"{{'Submit'|translate}}\" label=\"{{'Submit'|translate}}\" class=\" green-btn\" style=\"margin-right:4px;\" (click)=\"submitExam()\" *ngIf=\"qIndex==examQuestions.length-1\"></button>       </p-footer>     </p-card> </p-dialog>",
        }),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
    ], ExamStudyDialog);
    return ExamStudyDialog;
}(base_component_1.BaseComponent));
exports.ExamStudyDialog = ExamStudyDialog;
