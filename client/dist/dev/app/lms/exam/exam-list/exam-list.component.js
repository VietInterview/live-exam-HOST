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
var exam_member_model_1 = require("../../../shared/models/exam-member.model");
var exam_question_model_1 = require("../../../shared/models/exam-question.model");
var exam_content_dialog_component_1 = require("../../../cms/exam/content-dialog/exam-content.dialog.component");
var exam_study_dialog_component_1 = require("../exam-study/exam-study.dialog.component");
var exam_marking_dialog_component_1 = require("../exam-marking/exam-marking.dialog.component");
var exam_score_dialog_component_1 = require("../exam-score/exam-score.dialog.component");
var ExamListComponent = (function (_super) {
    __extends(ExamListComponent, _super);
    function ExamListComponent() {
        var _this = _super.call(this) || this;
        _this.EXAM_STATUS = constants_1.EXAM_STATUS;
        _this.exams = [];
        return _this;
    }
    ExamListComponent.prototype.ngOnInit = function () {
        var _this = this;
        exam_member_model_1.ExamMember.listByUser(this, this.authService.CurrentUser.id).subscribe(function (members) {
            var examIds = _.pluck(members, 'exam_id');
            exam_model_1.Exam.array(_this, examIds)
                .subscribe(function (exams) {
                _.each(exams, function (exam) {
                    exam.member = _.find(members, function (member) {
                        return member.exam_id == exam.id;
                    });
                    exam.member.examScore(_this, exam.id).subscribe(function (score) {
                        exam.member.score = score;
                    });
                    exam_question_model_1.ExamQuestion.countByExam(_this, exam.id).subscribe(function (count) {
                        exam.question_count = count;
                    });
                });
                _this.exams = _.filter(exams, function (exam) {
                    return exam.member.role == 'supervisor' || (exam.member.role == 'candidate' && exam.status == 'published');
                });
            });
        });
    };
    ExamListComponent.prototype.markExam = function (exam) {
        var _this = this;
        exam.containsOpenEndQuestion(this).subscribe(function (result) {
            if (result) {
                _this.markingDialog.show(exam);
            }
            else {
                _this.messageService.add({ severity: 'info', summary: 'Exam Info', detail: 'Exam is not available for marking' });
            }
        });
    };
    ExamListComponent.prototype.editContent = function (exam) {
        this.examContentDialog.show(exam);
    };
    ExamListComponent.prototype.viewScore = function (exam) {
        this.scoreDialog.show(exam);
    };
    ExamListComponent.prototype.startExam = function (exam, member) {
        var _this = this;
        this.confirmationService.confirm({
            message: this.translateService.instant('Are you sure to start ?'),
            accept: function () {
                _this.examStudyDialog.show(exam, member);
            }
        });
    };
    __decorate([
        core_1.ViewChild(exam_content_dialog_component_1.ExamContentDialog),
        __metadata("design:type", exam_content_dialog_component_1.ExamContentDialog)
    ], ExamListComponent.prototype, "examContentDialog", void 0);
    __decorate([
        core_1.ViewChild(exam_study_dialog_component_1.ExamStudyDialog),
        __metadata("design:type", exam_study_dialog_component_1.ExamStudyDialog)
    ], ExamListComponent.prototype, "examStudyDialog", void 0);
    __decorate([
        core_1.ViewChild(exam_marking_dialog_component_1.ExamMarkingDialog),
        __metadata("design:type", exam_marking_dialog_component_1.ExamMarkingDialog)
    ], ExamListComponent.prototype, "markingDialog", void 0);
    __decorate([
        core_1.ViewChild(exam_score_dialog_component_1.ExamScoreDialog),
        __metadata("design:type", exam_score_dialog_component_1.ExamScoreDialog)
    ], ExamListComponent.prototype, "scoreDialog", void 0);
    ExamListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lms-exam-list',
            templateUrl: 'exam-list.component.html',
            styleUrls: ['exam-list.component.css'],
        }),
        __metadata("design:paramtypes", [])
    ], ExamListComponent);
    return ExamListComponent;
}(base_component_1.BaseComponent));
exports.ExamListComponent = ExamListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sbXMvZXhhbS9leGFtLWxpc3QvZXhhbS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBb0U7QUFFcEUsaUZBQStFO0FBRy9FLDhCQUFnQztBQUNoQyw4REFBOEU7QUFDOUUsZ0VBQXlEO0FBQ3pELDhFQUFzRTtBQUN0RSxrRkFBMEU7QUFJMUUsZ0hBQW1HO0FBQ25HLHlGQUEyRTtBQUMzRSwrRkFBaUY7QUFDakYseUZBQTRFO0FBUzVFO0lBQXVDLHFDQUFhO0lBU2hEO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBVEQsaUJBQVcsR0FBRyx1QkFBVyxDQUFDO1FBUXRCLEtBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDOztJQUNwQixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUFBLGlCQXFCQztRQXBCRyw4QkFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUMxRSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBQyxTQUFTLENBQUMsQ0FBQztZQUN6QyxpQkFBSSxDQUFDLEtBQUssQ0FBQyxLQUFJLEVBQUUsT0FBTyxDQUFDO2lCQUN4QixTQUFTLENBQUMsVUFBQSxLQUFLO2dCQUNaLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQUMsSUFBSTtvQkFDZixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUMsTUFBaUI7d0JBQzVDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUM7b0JBQ3JDLENBQUMsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUksRUFBRSxJQUFJLENBQUMsRUFB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cHAvbG1zL2V4YW0vZXhhbS1saXN0L2V4YW0tbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYmFzZS9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBUElTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IHsgR1JPVVBfQ0FURUdPUlksIEVYQU1fU1RBVFVTIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9jb25zdGFudHMnXG5pbXBvcnQgeyBFeGFtIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9leGFtLm1vZGVsJztcbmltcG9ydCB7IEV4YW1NZW1iZXIgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2V4YW0tbWVtYmVyLm1vZGVsJztcbmltcG9ydCB7IEV4YW1RdWVzdGlvbiB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvZXhhbS1xdWVzdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvZ3JvdXAubW9kZWwnO1xuaW1wb3J0IHsgU3VibWlzc2lvbiB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvc3VibWlzc2lvbi5tb2RlbCc7XG5pbXBvcnQgeyBTZWxlY3RJdGVtIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgRXhhbUNvbnRlbnREaWFsb2cgfSBmcm9tICcuLi8uLi8uLi9jbXMvZXhhbS9jb250ZW50LWRpYWxvZy9leGFtLWNvbnRlbnQuZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeGFtU3R1ZHlEaWFsb2d9IGZyb20gJy4uL2V4YW0tc3R1ZHkvZXhhbS1zdHVkeS5kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEV4YW1NYXJraW5nRGlhbG9nfSBmcm9tICcuLi9leGFtLW1hcmtpbmcvZXhhbS1tYXJraW5nLmRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhhbVNjb3JlRGlhbG9nIH0gZnJvbSAnLi4vZXhhbS1zY29yZS9leGFtLXNjb3JlLmRpYWxvZy5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdsbXMtZXhhbS1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ2V4YW0tbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2V4YW0tbGlzdC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1MaXN0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBleGFtczogRXhhbVtdO1xuICAgIEVYQU1fU1RBVFVTID0gRVhBTV9TVEFUVVM7XG4gICAgQFZpZXdDaGlsZChFeGFtQ29udGVudERpYWxvZykgZXhhbUNvbnRlbnREaWFsb2c6RXhhbUNvbnRlbnREaWFsb2c7XG4gICAgQFZpZXdDaGlsZChFeGFtU3R1ZHlEaWFsb2cpIGV4YW1TdHVkeURpYWxvZzpFeGFtU3R1ZHlEaWFsb2c7XG4gICAgQFZpZXdDaGlsZChFeGFtTWFya2luZ0RpYWxvZykgbWFya2luZ0RpYWxvZzpFeGFtTWFya2luZ0RpYWxvZztcbiAgICBAVmlld0NoaWxkKEV4YW1TY29yZURpYWxvZykgc2NvcmVEaWFsb2c6RXhhbVNjb3JlRGlhbG9nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZXhhbXMgPSBbXTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgRXhhbU1lbWJlci5saXN0QnlVc2VyKHRoaXMsIHRoaXMuYXV0aFNlcnZpY2UuQ3VycmVudFVzZXIuaWQpLnN1YnNjcmliZShtZW1iZXJzID0+IHtcbiAgICAgICAgICAgIHZhciBleGFtSWRzID0gXy5wbHVjayhtZW1iZXJzLCdleGFtX2lkJyk7XG4gICAgICAgICAgICBFeGFtLmFycmF5KHRoaXMsIGV4YW1JZHMpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGV4YW1zID0+IHtcbiAgICAgICAgICAgICAgICBfLmVhY2goZXhhbXMsIChleGFtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXhhbS5tZW1iZXIgPSBfLmZpbmQobWVtYmVycywgKG1lbWJlcjpFeGFtTWVtYmVyKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZW1iZXIuZXhhbV9pZCA9PSBleGFtLmlkO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZXhhbS5tZW1iZXIuZXhhbVNjb3JlKHRoaXMsIGV4YW0uaWQpLnN1YnNjcmliZShzY29yZT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YW0ubWVtYmVyLnNjb3JlID0gc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBFeGFtUXVlc3Rpb24uY291bnRCeUV4YW0odGhpcywgZXhhbS5pZCkuc3Vic2NyaWJlKGNvdW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YW0ucXVlc3Rpb25fY291bnQgPSBjb3VudDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5leGFtcyA9IF8uZmlsdGVyKGV4YW1zLCAoZXhhbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhhbS5tZW1iZXIucm9sZT09J3N1cGVydmlzb3InIHx8IChleGFtLm1lbWJlci5yb2xlPT0nY2FuZGlkYXRlJyAmJiBleGFtLnN0YXR1cyA9PSAncHVibGlzaGVkJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWFya0V4YW0oZXhhbTpFeGFtKSB7XG4gICAgICAgZXhhbS5jb250YWluc09wZW5FbmRRdWVzdGlvbih0aGlzKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgdGhpcy5tYXJraW5nRGlhbG9nLnNob3coZXhhbSk7XG4gICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoe3NldmVyaXR5OidpbmZvJywgc3VtbWFyeTonRXhhbSBJbmZvJywgZGV0YWlsOiAnRXhhbSBpcyBub3QgYXZhaWxhYmxlIGZvciBtYXJraW5nJ30pO1xuICAgICAgICAgICB9XG4gICAgICAgfSlcbiAgICB9XG5cbiAgICBlZGl0Q29udGVudChleGFtOkV4YW0pIHtcbiAgICAgICAgdGhpcy5leGFtQ29udGVudERpYWxvZy5zaG93KGV4YW0pO1xuICAgIH1cblxuICAgIHZpZXdTY29yZShleGFtOkV4YW0pIHtcbiAgICAgICAgdGhpcy5zY29yZURpYWxvZy5zaG93KGV4YW0pO1xuICAgIH1cblxuICAgIHN0YXJ0RXhhbShleGFtOkV4YW0sIG1lbWJlcjogRXhhbU1lbWJlcikge1xuICAgICAgICB0aGlzLmNvbmZpcm1hdGlvblNlcnZpY2UuY29uZmlybSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ0FyZSB5b3Ugc3VyZSB0byBzdGFydCA/JyksXG4gICAgICAgICAgICAgICAgYWNjZXB0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhhbVN0dWR5RGlhbG9nLnNob3coZXhhbSwgbWVtYmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxufSJdfQ==
