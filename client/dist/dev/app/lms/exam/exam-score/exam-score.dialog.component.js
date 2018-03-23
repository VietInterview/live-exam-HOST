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
var exam_grade_model_1 = require("../../../shared/models/exam-grade.model");
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
                    member.examScore(_this, _this.exam.id).subscribe(function (score) {
                        record["score"] = score;
                        var grade = member.examGrade(grades, score);
                        if (grade)
                            record["grade"] = grade.name;
                        _this.records.push(record);
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
            selector: 'exam-score-dialog',
            templateUrl: 'exam-score.dialog.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], ExamScoreDialog);
    return ExamScoreDialog;
}(base_component_1.BaseComponent));
exports.ExamScoreDialog = ExamScoreDialog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sbXMvZXhhbS9leGFtLXNjb3JlL2V4YW0tc2NvcmUuZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBb0U7QUFLcEUsaUZBQStFO0FBRy9FLDRFQUFvRTtBQUVwRSw4RUFBc0U7QUFFdEUsK0ZBQWtGO0FBQ2xGLDhCQUFnQztBQU9oQztJQUFxQyxtQ0FBYTtJQVM5QztlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUVELDhCQUFJLEdBQUosVUFBSyxJQUFVO1FBQ1gsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELHlDQUFlLEdBQWY7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQUEsaUJBZUM7UUFkRyw0QkFBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3JELDhCQUFVLENBQUMsbUJBQW1CLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTztnQkFDaEUsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUMsTUFBa0I7b0JBQy9CLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSzt3QkFDaEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQzt3QkFDeEIsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQzVDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQzs0QkFDRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDakMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2xDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFwQzZCO1FBQTdCLGdCQUFTLENBQUMsaURBQWlCLENBQUM7a0NBQW1CLGlEQUFpQjs4REFBQztJQVB6RCxlQUFlO1FBTDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsa0NBQWtDO1NBQ2xELENBQUM7O09BQ1csZUFBZSxDQTZDM0I7SUFBRCxzQkFBQztDQTdDRCxBQTZDQyxDQTdDb0MsOEJBQWEsR0E2Q2pEO0FBN0NZLDBDQUFlIiwiZmlsZSI6ImFwcC9sbXMvZXhhbS9leGFtLXNjb3JlL2V4YW0tc2NvcmUuZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEFQSVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9ncm91cC5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYmFzZS9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeGFtIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9leGFtLm1vZGVsJztcbmltcG9ydCB7IEFuc3dlciB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvYW5zd2VyLm1vZGVsJztcbmltcG9ydCB7IEV4YW1HcmFkZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvZXhhbS1ncmFkZS5tb2RlbCc7XG5pbXBvcnQgeyBTdWJtaXNzaW9uIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9zdWJtaXNzaW9uLm1vZGVsJztcbmltcG9ydCB7IEV4YW1NZW1iZXIgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2V4YW0tbWVtYmVyLm1vZGVsJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBBbnN3ZXJTaGVldERpYWxvZyB9IGZyb20gJy4uL2Fuc3dlci1zaGVldC9hbnN3ZXItc2hlZXQuZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZXhhbS1zY29yZS1kaWFsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAnZXhhbS1zY29yZS5kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBFeGFtU2NvcmVEaWFsb2cgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuICAgIGRpc3BsYXk6IGJvb2xlYW47XG4gICAgZXhhbTogRXhhbTtcbiAgICByZWNvcmRzOiBhbnk7XG4gICAgc2VsZWN0ZWRSZWNvcmQ6IGFueTtcblxuICAgIEBWaWV3Q2hpbGQoQW5zd2VyU2hlZXREaWFsb2cpIGFuc3dlclNoZWV0RGlhbG9nOkFuc3dlclNoZWV0RGlhbG9nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgc2hvdyhleGFtOiBFeGFtKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheSA9IHRydWU7XG4gICAgICAgIHRoaXMuZXhhbSA9IGV4YW07XG4gICAgICAgIHRoaXMubG9hZEFuc3dlcnMoKTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2aWV3QW5zd2VyU2hlZXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkUmVjb3JkKVxuICAgICAgICAgICAgdGhpcy5hbnN3ZXJTaGVldERpYWxvZy5zaG93KHRoaXMuZXhhbSwgdGhpcy5zZWxlY3RlZFJlY29yZC5tZW1iZXIpO1xuICAgIH1cblxuICAgIGxvYWRBbnN3ZXJzKCkge1xuICAgICAgICBFeGFtR3JhZGUubGlzdEJ5RXhhbSh0aGlzLCB0aGlzLmV4YW0uaWQpLnN1YnNjcmliZShncmFkZXMgPT4ge1xuICAgICAgICAgICAgRXhhbU1lbWJlci5saXN0Q2FuZGlkYXRlQnlFeGFtKHRoaXMsIHRoaXMuZXhhbS5pZCkuc3Vic2NyaWJlKG1lbWJlcnMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IFtdO1xuICAgICAgICAgICAgICAgIF8uZWFjaChtZW1iZXJzLCAobWVtYmVyOiBFeGFtTWVtYmVyKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyLmV4YW1TY29yZSh0aGlzLCB0aGlzLmV4YW0uaWQpLnN1YnNjcmliZShzY29yZT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZFtcInNjb3JlXCJdID0gc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ3JhZGUgPSBtZW1iZXIuZXhhbUdyYWRlKGdyYWRlcywgc2NvcmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyYWRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRbXCJncmFkZVwiXSA9IGdyYWRlLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRzLnB1c2gocmVjb3JkKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbiJdfQ==
