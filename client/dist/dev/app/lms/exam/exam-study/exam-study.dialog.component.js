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
                    log_model_1.ExamLog.startExam(_this, _this.member.user_id, exam.id, submit);
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
            log_model_1.ExamLog.finishExam(_this, _this.member.user_id, _this.exam.id, _this.submission);
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
                log_model_1.ExamLog.startAnswer(_this, _this.member.user_id, _this.exam.id, answer);
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
            log_model_1.ExamLog.finishAnswer(_this, _this.member.user_id, _this.exam.id, _this.currentAnswer);
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
            selector: 'exam-study-dialog',
            templateUrl: 'exam-study.dialog.component.html',
        }),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
    ], ExamStudyDialog);
    return ExamStudyDialog;
}(base_component_1.BaseComponent));
exports.ExamStudyDialog = ExamStudyDialog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sbXMvZXhhbS9leGFtLXN0dWR5L2V4YW0tc3R1ZHkuZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBOEY7QUFDOUYsOEJBQThDO0FBQzlDLGlGQUErRTtBQUcvRSw4QkFBZ0M7QUFFaEMsZ0VBQXlEO0FBQ3pELDRFQUFxRTtBQUNyRSx3RUFBaUU7QUFDakUsb0VBQTZEO0FBQzdELGtGQUEwRTtBQUcxRSw4REFBMkQ7QUFHM0QsNEhBQXlIO0FBRXpILHdHQUFxRztBQUNyRyxxQ0FBbUM7QUFPbkM7SUFBcUMsbUNBQWE7SUFtQmpELHlCQUFvQix3QkFBa0Q7UUFBdEUsWUFDQyxpQkFBTyxTQVFQO1FBVG1CLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFFckUsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsS0FBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUN2QixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksa0NBQVksRUFBRSxDQUFDO1FBQzFDLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDOztJQUNuQixDQUFDO0lBRUQsOEJBQUksR0FBSixVQUFLLElBQVUsRUFBRSxNQUFrQjtRQUFuQyxpQkF1QkM7UUF0QkEsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsNkJBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxF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QUFDO0NBcE1ELEFBb01DLENBcE1vQyw4QkFBYSxHQW9NakQ7QUFwTVksMENBQWUiLCJmaWxlIjoiYXBwL2xtcy9leGFtL2V4YW0tc3R1ZHkvZXhhbS1zdHVkeS5kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2Jhc2UvYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQVBJU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7IEdST1VQX0NBVEVHT1JZLCBFWEFNX1NUQVRVUyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvY29uc3RhbnRzJ1xuaW1wb3J0IHsgRXhhbSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvZXhhbS5tb2RlbCc7XG5pbXBvcnQgeyBTdWJtaXNzaW9uIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9zdWJtaXNzaW9uLm1vZGVsJztcbmltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9xdWVzdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBBbnN3ZXIgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2Fuc3dlci5tb2RlbCc7XG5pbXBvcnQgeyBFeGFtUXVlc3Rpb24gfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2V4YW0tcXVlc3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgRXhhbU1lbWJlciB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvZXhhbS1tZW1iZXIubW9kZWwnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2dyb3VwLm1vZGVsJztcbmltcG9ydCB7IEV4YW1Mb2cgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2xvZy5tb2RlbCc7XG5pbXBvcnQgeyBDbG9ja1BpcGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvcGlwZXMvdGltZS5waXBlJztcbmltcG9ydCB7IFNlbGVjdEl0ZW0gfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBRdWVzdGlvbkNvbnRhaW5lckRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uLy4uL2Fzc2Vzc21lbnQvcXVlc3Rpb24vcXVlc3Rpb24tdGVtcGxhdGUvcXVlc3Rpb24tY29udGFpbmVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJUXVlc3Rpb24gfSBmcm9tICcuLi8uLi8uLi9hc3Nlc3NtZW50L3F1ZXN0aW9uL3F1ZXN0aW9uLXRlbXBsYXRlL3F1ZXN0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBRdWVzdGlvblJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vLi4vYXNzZXNzbWVudC9xdWVzdGlvbi9xdWVzdGlvbi10ZW1wbGF0ZS9xdWVzdGlvbi5kZWNvcmF0b3InO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3RpbWVyJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnZXhhbS1zdHVkeS1kaWFsb2cnLFxuXHR0ZW1wbGF0ZVVybDogJ2V4YW0tc3R1ZHkuZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRXhhbVN0dWR5RGlhbG9nIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cblx0ZGlzcGxheTogYm9vbGVhbjtcblx0ZXhhbTogRXhhbTtcblx0bWVtYmVyOiBFeGFtTWVtYmVyO1xuXHRxSW5kZXg6IG51bWJlcjtcblx0ZXhhbVF1ZXN0aW9uczogRXhhbVF1ZXN0aW9uW107XG5cdGFuc3dlcnM6IEFuc3dlcltdO1xuXHRzdWJtaXNzaW9uOiBTdWJtaXNzaW9uO1xuXHR0aW1lcjogYW55O1xuXHR0aW1lclN1YmplY3Q6IGFueTtcblx0Y3VycmVudEFuc3dlcjogQW5zd2VyO1xuXHRjdXJyZW50UXVlc3Rpb246IEV4YW1RdWVzdGlvbjtcblx0dGltZUxlZnQ6IG51bWJlcjtcblx0cHJvZ3Jlc3M6IG51bWJlcjtcblxuXHRAVmlld0NoaWxkKFF1ZXN0aW9uQ29udGFpbmVyRGlyZWN0aXZlKSBxdWVzdGlvbkhvc3Q6IFF1ZXN0aW9uQ29udGFpbmVyRGlyZWN0aXZlO1xuXHRjb21wb25lbnRSZWY6IGFueTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmRpc3BsYXkgPSBmYWxzZTtcblx0XHR0aGlzLmV4YW1RdWVzdGlvbnMgPSBbXTtcblx0XHR0aGlzLmFuc3dlcnMgPSBbXTtcblx0XHR0aGlzLmV4YW0gPSBuZXcgRXhhbSgpO1xuXHRcdHRoaXMuY3VycmVudFF1ZXN0aW9uID0gbmV3IEV4YW1RdWVzdGlvbigpO1xuXHRcdHRoaXMudGltZUxlZnQgPSAwO1xuXHRcdHRoaXMucHJvZ3Jlc3MgPSAwO1xuXHR9XG5cblx0c2hvdyhleGFtOiBFeGFtLCBtZW1iZXI6IEV4YW1NZW1iZXIpIHtcblx0XHR0aGlzLmRpc3BsYXkgPSB0cnVlO1xuXHRcdHRoaXMuZXhhbSA9IGV4YW07XG5cdFx0dGhpcy5tZW1iZXIgPSBtZW1iZXI7XG5cdFx0dGhpcy5xSW5kZXggPSAwO1xuXHRcdFN1Ym1pc3Npb24uYnlNZW1iZXIodGhpcywgdGhpcy5tZW1iZXIuaWQpLnN1YnNjcmliZSgoc3VibWl0OlN1Ym1pc3Npb24pID0+IHtcblx0XHRcdGlmICghc3VibWl0KSB7XG5cdFx0XHRcdHN1Ym1pdCA9IG5ldyBTdWJtaXNzaW9uKCk7XG5cdFx0XHRcdHN1Ym1pdC5tZW1iZXJfaWQgPSBtZW1iZXIuaWQ7XG5cdFx0XHRcdHN1Ym1pdC5zdGFydCA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdHN1Ym1pdC5zYXZlKHRoaXMpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zdWJtaXNzaW9uID0gc3VibWl0O1xuXHRcdFx0XHRcdEV4YW1Mb2cuc3RhcnRFeGFtKHRoaXMsIHRoaXMubWVtYmVyLnVzZXJfaWQsIGV4YW0uaWQsIHN1Ym1pdCk7XG5cdFx0XHRcdFx0dGhpcy5tZW1iZXIuZW5yb2xsX3N0YXR1cyA9ICdpbi1wcm9ncmVzcyc7XG5cdFx0XHRcdFx0dGhpcy5tZW1iZXIuc2F2ZSh0aGlzKS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5zdGFydEV4YW0oKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN1Ym1pc3Npb24gPSBzdWJtaXQ7XG5cdFx0XHRcdHRoaXMuc3RhcnRFeGFtKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRoaWRlKCkge1xuXHRcdHRoaXMuZGlzcGxheSA9IGZhbHNlO1xuXHR9XG5cblx0ZmV0Y2hBbnN3ZXJzKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0aWYgKHRoaXMuc3VibWlzc2lvbi5pZClcblx0XHRcdHJldHVybiBBbnN3ZXIubGlzdEJ5U3VibWl0KHRoaXMsIHRoaXMuc3VibWlzc2lvbi5pZCk7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIE9ic2VydmFibGUub2YoW10pO1xuXHR9XG5cblx0c3RhcnRFeGFtKCkge1xuXHRcdEV4YW1RdWVzdGlvbi5saXN0QnlFeGFtKHRoaXMsIHRoaXMuZXhhbS5pZCkuc3Vic2NyaWJlKGV4YW1RdWVzdGlvbnMgPT4ge1xuXHRcdFx0dGhpcy5leGFtUXVlc3Rpb25zID0gXy5zaHVmZmxlKGV4YW1RdWVzdGlvbnMpO1xuXHRcdFx0dGhpcy5mZXRjaEFuc3dlcnMoKS5zdWJzY3JpYmUoYW5zd2VycyA9PiB7XG5cdFx0XHRcdHRoaXMuYW5zd2VycyA9IGFuc3dlcnM7XG5cdFx0XHRcdHRoaXMuc3RhcnRUaW1lcigpO1xuXHRcdFx0XHR0aGlzLmRpc3BsYXlRdWVzdGlvbigwKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0ZmluaXNoRXhhbSgpIHtcblx0XHR2YXIgc3Vic2NyaXB0aW9ucyA9IFtdO1xuXHRcdHRoaXMubWVtYmVyLmVucm9sbF9zdGF0dXMgPSAnY29tcGxldGVkJztcblx0XHR0aGlzLnN1Ym1pc3Npb24uZW5kID0gbmV3IERhdGUoKTtcblx0XHRzdWJzY3JpcHRpb25zLnB1c2godGhpcy5tZW1iZXIuc2F2ZSh0aGlzKSk7XG5cdFx0c3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuc3VibWlzc2lvbi5zYXZlKHRoaXMpKTtcblx0XHRPYnNlcnZhYmxlLmZvcmtKb2luKC4uLnN1YnNjcmlwdGlvbnMpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRFeGFtTG9nLmZpbmlzaEV4YW0odGhpcywgdGhpcy5tZW1iZXIudXNlcl9pZCwgdGhpcy5leGFtLmlkLCB0aGlzLnN1Ym1pc3Npb24pO1xuXHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcmVwYXJlQW5zd2VyKHF1ZXN0aW9uOiBFeGFtUXVlc3Rpb24pOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHZhciBhbnN3ZXIgPSBfLmZpbmQodGhpcy5hbnN3ZXJzLCAoYW5zOiBBbnN3ZXIpPT4ge1xuXHRcdFx0cmV0dXJuIGFucy5xdWVzdGlvbl9pZCA9PSBxdWVzdGlvbi5xdWVzdGlvbl9pZDtcblx0XHR9KTtcblx0XHRpZiAoIWFuc3dlcikge1xuXHRcdFx0dmFyIGFuc3dlciA9IG5ldyBBbnN3ZXIoKTtcblx0XHRcdGFuc3dlci5zdWJtaXNzaW9uX2lkID0gdGhpcy5zdWJtaXNzaW9uLmlkO1xuXHRcdFx0YW5zd2VyLnF1ZXN0aW9uX2lkID0gcXVlc3Rpb24ucXVlc3Rpb25faWQ7XG5cdFx0XHRyZXR1cm4gYW5zd2VyLnNhdmUodGhpcykuZG8oYW5zID0+IHtcblx0XHRcdFx0dGhpcy5hbnN3ZXJzLnB1c2goYW5zd2VyKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZVxuXHRcdFx0cmV0dXJuIE9ic2VydmFibGUub2YoYW5zd2VyKTtcblx0fVxuXG5cdHByZXBhcmVRdWVzdGlvbihxdWVzdGlvbjogRXhhbVF1ZXN0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gUXVlc3Rpb24uZ2V0KHRoaXMsIHF1ZXN0aW9uLnF1ZXN0aW9uX2lkKTtcblx0fVxuXG5cdHVwZGF0ZVByb2dyZXNzKCkge1xuXHRcdHZhciB2YWxpZEFuc3dlcnMgPSBfLmZpbHRlcih0aGlzLmFuc3dlcnMsIChhbnM6QW5zd2VyKT0+IHtcblx0XHRcdHJldHVybiBhbnMub3B0aW9uX2lkIT1udWxsIHx8IGFucy50ZXh0IT1udWxsO1xuXHRcdH0pO1xuXHRcdGlmICh0aGlzLmV4YW1RdWVzdGlvbnMubGVuZ3RoKVxuXHRcdFx0dGhpcy5wcm9ncmVzcyA9IE1hdGguZmxvb3IodmFsaWRBbnN3ZXJzLmxlbmd0aCAvIHRoaXMuZXhhbVF1ZXN0aW9ucy5sZW5ndGggKiAxMDApXG5cdH1cblxuXHRkaXNwbGF5UXVlc3Rpb24oaW5kZXg6IG51bWJlcikge1xuXHRcdHRoaXMucUluZGV4ID0gaW5kZXg7XG5cdFx0dGhpcy5jdXJyZW50UXVlc3Rpb24gPSB0aGlzLmV4YW1RdWVzdGlvbnNbaW5kZXhdO1xuXHRcdHRoaXMucHJlcGFyZVF1ZXN0aW9uKHRoaXMuY3VycmVudFF1ZXN0aW9uKS5zdWJzY3JpYmUocXVlc3Rpb24gPT4ge1xuXHRcdFx0dGhpcy5wcmVwYXJlQW5zd2VyKHRoaXMuY3VycmVudFF1ZXN0aW9uKS5zdWJzY3JpYmUoYW5zd2VyID0+IHtcblx0XHRcdFx0RXhhbUxvZy5zdGFydEFuc3dlcih0aGlzLCB0aGlzLm1lbWJlci51c2VyX2lkLHRoaXMuZXhhbS5pZCwgYW5zd2VyKTtcblx0XHRcdFx0dGhpcy5jdXJyZW50QW5zd2VyID0gYW5zd2VyO1xuXHRcdFx0XHR2YXIgZGV0YWlsQ29tcG9uZW50ID0gUXVlc3Rpb25SZWdpc3Rlci5JbnN0YW5jZS5sb29rdXAocXVlc3Rpb24udHlwZSk7XG5cdFx0XHRcdGxldCB2aWV3Q29udGFpbmVyUmVmID0gdGhpcy5xdWVzdGlvbkhvc3Qudmlld0NvbnRhaW5lclJlZjtcblx0XHRcdFx0aWYgKGRldGFpbENvbXBvbmVudCkge1xuXHRcdFx0XHRcdGxldCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoZGV0YWlsQ29tcG9uZW50KTtcblx0XHRcdFx0XHR2aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cdFx0XHRcdFx0dGhpcy5jb21wb25lbnRSZWYgPSB2aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcblx0XHRcdFx0XHQoPElRdWVzdGlvbj50aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSkubW9kZSA9ICdzdHVkeSc7XG5cdFx0XHRcdFx0KDxJUXVlc3Rpb24+dGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnJlbmRlcihxdWVzdGlvbiwgdGhpcy5jdXJyZW50QW5zd2VyKTtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZVByb2dyZXNzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdFxuXHR9XG5cblx0c3VibWl0QW5zd2VyKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0KDxJUXVlc3Rpb24+dGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UpLmNvbmNsdWRlQW5zd2VyKCk7XG5cdFx0aWYgKHRoaXMuY3VycmVudEFuc3dlci5pc19jb3JyZWN0KSB7XG5cdFx0XHR0aGlzLmN1cnJlbnRBbnN3ZXIuc2NvcmUgPSB0aGlzLmN1cnJlbnRRdWVzdGlvbi5zY29yZTtcblx0XHR9IGVsc2Vcblx0XHRcdHRoaXMuY3VycmVudEFuc3dlci5zY29yZSA9IDA7XG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudEFuc3dlci5zYXZlKHRoaXMpLmRvKCgpID0+IHtcblx0XHRcdEV4YW1Mb2cuZmluaXNoQW5zd2VyKHRoaXMsIHRoaXMubWVtYmVyLnVzZXJfaWQsIHRoaXMuZXhhbS5pZCwgdGhpcy5jdXJyZW50QW5zd2VyKTtcblx0XHR9KTtcblx0fVxuXG5cdG5leHQoKSB7XG5cdFx0dGhpcy5zdWJtaXRBbnN3ZXIoKS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMucUluZGV4IDwgdGhpcy5leGFtUXVlc3Rpb25zLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0dGhpcy5kaXNwbGF5UXVlc3Rpb24odGhpcy5xSW5kZXggKyAxKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHByZXYoKSB7XG5cdFx0dGhpcy5zdWJtaXRBbnN3ZXIoKS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMucUluZGV4ID4gMCkge1xuXHRcdFx0XHR0aGlzLmRpc3BsYXlRdWVzdGlvbih0aGlzLnFJbmRleCAtIDEpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0c3VibWl0RXhhbSgpIHtcblx0XHR0aGlzLnN1Ym1pdEFuc3dlcigpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHR0aGlzLmNvbmZpcm1hdGlvblNlcnZpY2UuY29uZmlybSh7XG5cdFx0XHRcdG1lc3NhZ2U6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdBcmUgeW91IHN1cmUgdG8gc3VibWl0ID8nKSxcblx0XHRcdFx0YWNjZXB0OiAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy50aW1lclN1YmplY3QubmV4dCgpO1xuXHRcdFx0XHRcdHRoaXMuZmluaXNoRXhhbSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdHN0YXJ0VGltZXIoKSB7XG5cdFx0dGhpcy50aW1lclN1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xuXHRcdHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdHZhciBlbGFwc2UgPSBNYXRoLmZsb29yKChub3cuZ2V0VGltZSgpIC0gdGhpcy5zdWJtaXNzaW9uLnN0YXJ0LmdldFRpbWUoKSkpO1xuXHRcdHRoaXMudGltZUxlZnQgPSB0aGlzLmV4YW0uZHVyYXRpb24gKiA2MCAqIDEwMDAgLSBlbGFwc2U7XG5cdFx0aWYgKHRoaXMudGltZUxlZnQgPD0gMClcblx0XHRcdHRoaXMuZmluaXNoRXhhbSgpO1xuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy50aW1lciA9IE9ic2VydmFibGUudGltZXIoMCwgMTAwMCk7XG5cdFx0XHR0aGlzLnRpbWVyXG5cdFx0XHRcdC50YWtlVW50aWwodGhpcy50aW1lclN1YmplY3QpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMudGltZUxlZnQgLT0gMTAwMDtcblx0XHRcdFx0XHRpZiAodGhpcy50aW1lTGVmdCA8PSAwKVxuXHRcdFx0XHRcdFx0dGhpcy5maW5pc2hFeGFtKCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHR9XG59Il19
