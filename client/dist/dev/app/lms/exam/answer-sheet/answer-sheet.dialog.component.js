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
            selector: 'answer-sheet-dialog',
            templateUrl: 'answer-sheet.dialog.component.html',
        }),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
    ], AnswerSheetDialog);
    return AnswerSheetDialog;
}(base_component_1.BaseComponent));
exports.AnswerSheetDialog = AnswerSheetDialog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sbXMvZXhhbS9hbnN3ZXItc2hlZXQvYW5zd2VyLXNoZWV0LmRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQThGO0FBQzlGLDhDQUE2QztBQUk3QyxpRkFBK0U7QUFDL0UsZ0VBQXlEO0FBQ3pELGtGQUEwRTtBQUMxRSxvRUFBNkQ7QUFDN0QsNEVBQXFFO0FBQ3JFLHdFQUFpRTtBQUdqRSw0SEFBeUg7QUFFekgsd0dBQXFHO0FBQ3JHLHFDQUFtQztBQUFDLDhCQUFnQztBQU9wRTtJQUF1QyxxQ0FBYTtJQWVoRCwyQkFBb0Isd0JBQWtEO1FBQXRFLFlBQ0ksaUJBQU8sU0FPVjtRQVJtQiw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBRWxFLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLEtBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFDdkIsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGtDQUFZLEVBQUUsQ0FBQztRQUMxQyxLQUFJLENBQUMsYUFBYSxHQUFJLElBQUkscUJBQU0sRUFBRSxDQUFDOztJQUN2QyxDQUFDO0lBRUQsZ0NBQUksR0FBSixVQUFLLElBQVUsRUFBRSxNQUFrQjtRQUFuQyxpQkFXQztRQVZHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLDZCQUFVLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFD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dkdZLDhDQUFpQiIsImZpbGUiOiJhcHAvbG1zL2V4YW0vYW5zd2VyLXNoZWV0L2Fuc3dlci1zaGVldC5kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBBUElTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvZ3JvdXAubW9kZWwnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2Jhc2UvYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhhbSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvZXhhbS5tb2RlbCc7XG5pbXBvcnQgeyBFeGFtUXVlc3Rpb24gfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2V4YW0tcXVlc3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgQW5zd2VyIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9hbnN3ZXIubW9kZWwnO1xuaW1wb3J0IHsgU3VibWlzc2lvbiB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvc3VibWlzc2lvbi5tb2RlbCc7XG5pbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvcXVlc3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgRXhhbU1lbWJlciB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvZXhhbS1tZW1iZXIubW9kZWwnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFF1ZXN0aW9uQ29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vYXNzZXNzbWVudC9xdWVzdGlvbi9xdWVzdGlvbi10ZW1wbGF0ZS9xdWVzdGlvbi1jb250YWluZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IElRdWVzdGlvbiB9IGZyb20gJy4uLy4uLy4uL2Fzc2Vzc21lbnQvcXVlc3Rpb24vcXVlc3Rpb24tdGVtcGxhdGUvcXVlc3Rpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IFF1ZXN0aW9uUmVnaXN0ZXIgfSBmcm9tICcuLi8uLi8uLi9hc3Nlc3NtZW50L3F1ZXN0aW9uL3F1ZXN0aW9uLXRlbXBsYXRlL3F1ZXN0aW9uLmRlY29yYXRvcic7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGltZXInOyBpbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYW5zd2VyLXNoZWV0LWRpYWxvZycsXG4gICAgdGVtcGxhdGVVcmw6ICdhbnN3ZXItc2hlZXQuZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQW5zd2VyU2hlZXREaWFsb2cgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuICAgIGRpc3BsYXk6IGJvb2xlYW47XG4gICAgcUluZGV4OiBudW1iZXI7XG4gICAgZXhhbVF1ZXN0aW9uczogRXhhbVF1ZXN0aW9uW107XG4gICAgYW5zd2VyczogQW5zd2VyW107XG4gICAgbWVtYmVyOiBFeGFtTWVtYmVyO1xuICAgIGV4YW06IEV4YW07XG4gICAgY3VycmVudEFuc3dlcjogQW5zd2VyO1xuICAgIGN1cnJlbnRRdWVzdGlvbjogRXhhbVF1ZXN0aW9uO1xuICAgIHN1Ym1pc3Npb246IFN1Ym1pc3Npb247XG5cbiAgICBAVmlld0NoaWxkKFF1ZXN0aW9uQ29udGFpbmVyRGlyZWN0aXZlKSBxdWVzdGlvbkhvc3Q6IFF1ZXN0aW9uQ29udGFpbmVyRGlyZWN0aXZlO1xuICAgIGNvbXBvbmVudFJlZjogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5leGFtUXVlc3Rpb25zID0gW107XG4gICAgICAgIHRoaXMuYW5zd2VycyA9IFtdO1xuICAgICAgICB0aGlzLmV4YW0gPSBuZXcgRXhhbSgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbiA9IG5ldyBFeGFtUXVlc3Rpb24oKTtcbiAgICAgICAgdGhpcy5jdXJyZW50QW5zd2VyID0gIG5ldyBBbnN3ZXIoKTtcbiAgICB9XG5cbiAgICBzaG93KGV4YW06IEV4YW0sIG1lbWJlcjogRXhhbU1lbWJlcikge1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xuICAgICAgICB0aGlzLmV4YW0gPSBleGFtO1xuICAgICAgICB0aGlzLm1lbWJlciA9IG1lbWJlcjtcbiAgICAgICAgdGhpcy5xSW5kZXggPSAwO1xuICAgICAgICBTdWJtaXNzaW9uLmJ5TWVtYmVyKHRoaXMsIHRoaXMubWVtYmVyLmlkKS5zdWJzY3JpYmUoKHN1Ym1pdDpTdWJtaXNzaW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3VibWl0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXNzaW9uID0gc3VibWl0O1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRSZXZpZXcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZmV0Y2hBbnN3ZXJzKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGlmICh0aGlzLnN1Ym1pc3Npb24uaWQpXG4gICAgICAgICAgICByZXR1cm4gQW5zd2VyLmxpc3RCeVN1Ym1pdCh0aGlzLCB0aGlzLnN1Ym1pc3Npb24uaWQpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihbXSk7XG4gICAgfVxuXG4gICAgc3RhcnRSZXZpZXcoKSB7XG4gICAgICAgIEV4YW1RdWVzdGlvbi5saXN0QnlFeGFtKHRoaXMsIHRoaXMuZXhhbS5pZCkuc3Vic2NyaWJlKGV4YW1RdWVzdGlvbnMgPT4ge1xuICAgICAgICAgICAgdGhpcy5leGFtUXVlc3Rpb25zID0gXy5zaHVmZmxlKGV4YW1RdWVzdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5mZXRjaEFuc3dlcnMoKS5zdWJzY3JpYmUoYW5zd2VycyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJzID0gYW5zd2VycztcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlRdWVzdGlvbigwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcmVwYXJlUXVlc3Rpb24ocXVlc3Rpb246IEV4YW1RdWVzdGlvbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiBRdWVzdGlvbi5nZXQodGhpcywgcXVlc3Rpb24ucXVlc3Rpb25faWQpO1xuICAgIH1cblxuICAgIHByZXBhcmVBbnN3ZXIocXVlc3Rpb246IEV4YW1RdWVzdGlvbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHZhciBhbnN3ZXIgPSBfLmZpbmQodGhpcy5hbnN3ZXJzLCAoYW5zOiBBbnN3ZXIpPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFucy5xdWVzdGlvbl9pZCA9PSBxdWVzdGlvbi5xdWVzdGlvbl9pZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghYW5zd2VyKVxuICAgICAgICAgICAgYW5zd2VyID0gbmV3IEFuc3dlcigpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihhbnN3ZXIpO1xuICAgIH1cblxuICAgIGRpc3BsYXlRdWVzdGlvbihpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucUluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uID0gdGhpcy5leGFtUXVlc3Rpb25zW2luZGV4XTtcbiAgICAgICAgdGhpcy5wcmVwYXJlUXVlc3Rpb24odGhpcy5jdXJyZW50UXVlc3Rpb24pLnN1YnNjcmliZShxdWVzdGlvbiA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZXBhcmVBbnN3ZXIodGhpcy5jdXJyZW50UXVlc3Rpb24pLnN1YnNjcmliZShhbnN3ZXIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFuc3dlciA9IGFuc3dlcjtcbiAgICAgICAgICAgICAgICB2YXIgZGV0YWlsQ29tcG9uZW50ID0gUXVlc3Rpb25SZWdpc3Rlci5JbnN0YW5jZS5sb29rdXAocXVlc3Rpb24udHlwZSk7XG4gICAgICAgICAgICAgICAgbGV0IHZpZXdDb250YWluZXJSZWYgPSB0aGlzLnF1ZXN0aW9uSG9zdC52aWV3Q29udGFpbmVyUmVmO1xuICAgICAgICAgICAgICAgIGlmIChkZXRhaWxDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShkZXRhaWxDb21wb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG4gICAgICAgICAgICAgICAgICAgICg8SVF1ZXN0aW9uPnRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlKS5tb2RlID0gJ3Jldmlldyc7XG4gICAgICAgICAgICAgICAgICAgICg8SVF1ZXN0aW9uPnRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlKS5yZW5kZXIocXVlc3Rpb24sIHRoaXMuY3VycmVudEFuc3dlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIGlmICh0aGlzLnFJbmRleCA8IHRoaXMuZXhhbVF1ZXN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlRdWVzdGlvbih0aGlzLnFJbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJldigpIHtcbiAgICAgICAgaWYgKHRoaXMucUluZGV4ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5UXVlc3Rpb24odGhpcy5xSW5kZXggLSAxKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4iXX0=
