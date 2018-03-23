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
            selector: 'exam-marking-dialog',
            templateUrl: 'exam-marking.dialog.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], ExamMarkingDialog);
    return ExamMarkingDialog;
}(base_component_1.BaseComponent));
exports.ExamMarkingDialog = ExamMarkingDialog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sbXMvZXhhbS9leGFtLW1hcmtpbmcvZXhhbS1tYXJraW5nLmRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWtFO0FBS2xFLGlGQUErRTtBQUUvRSxvRUFBNkQ7QUFDN0QsNEVBQXFFO0FBQ3JFLGtGQUEwRTtBQUMxRSw4RUFBc0U7QUFDdEUsOEJBQWdDO0FBQ2hDLDJHQUE4RjtBQU85RjtJQUF1QyxxQ0FBYTtJQVNoRDtlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUVELGdDQUFJLEdBQUosVUFBSyxJQUFTO1FBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQ0FBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELGdDQUFJLEdBQUo7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekYsQ0FBQztJQUNMLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBQUEsaUJBMkJDO1FBMUJHLGtDQUFZLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsU0FBUztZQUN2RSxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBQyxhQUFhLENBQUMsQ0FBQztZQUNuRCw4QkFBVSxDQUFDLG1CQUFtQixDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE9BQU87Z0JBQ2hFLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLE1BQWlCO29CQUM5Qiw2QkFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFJLEVBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQWlCO3dCQUM1RCxxQkFBTSxDQUFDLFlBQVksQ0FBQyxLQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE9BQU87NEJBQ2xELE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFDLEdBQVU7Z0NBQ25DLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7NEJBQ25ELENBQUMsQ0FBQyxDQUFDOzRCQUNILElBQUksTUFBTSxHQUFHO2dDQUNULElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtnQ0FDakIsMEJBQTBCLEVBQUUsTUFBTSxDQUFDLDBCQUEwQjtnQ0FDN0QsTUFBTSxFQUFFLE1BQU07Z0NBQ2QsT0FBTyxFQUFFLE9BQU87NkJBQ25CLENBQUE7NEJBQ0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQyxHQUFHO2dDQUNoQixNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7NEJBQ3hDLENBQUMsQ0FBQyxDQUFDOzRCQUNILEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUM5QixDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBakRpQztRQUFqQyxnQkFBUyxDQUFDLHlEQUFxQixDQUFDO2tDQUFvQix5REFBcUI7aUVBQUM7SUFQbEUsaUJBQWlCO1FBTDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixXQUFXLEVBQUUsb0NBQW9DO1NBQ3BELENBQUM7O09BQ1csaUJBQWlCLENBeUQ3QjtJQUFELHdCQUFDO0NBekRELEFBeURDLENBekRzQyw4QkFBYSxHQXlEbkQ7QUF6RFksOENBQWlCIiwiZmlsZSI6ImFwcC9sbXMvZXhhbS9leGFtLW1hcmtpbmcvZXhhbS1tYXJraW5nLmRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGV9ICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQVBJU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2dyb3VwLm1vZGVsJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9iYXNlL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IEV4YW0gfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2V4YW0ubW9kZWwnO1xuaW1wb3J0IHsgQW5zd2VyIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9hbnN3ZXIubW9kZWwnO1xuaW1wb3J0IHsgU3VibWlzc2lvbiB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvc3VibWlzc2lvbi5tb2RlbCc7XG5pbXBvcnQgeyBFeGFtUXVlc3Rpb24gfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2V4YW0tcXVlc3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgRXhhbU1lbWJlciB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvZXhhbS1tZW1iZXIubW9kZWwnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7IFF1ZXN0aW9uTWFya2luZ0RpYWxvZyB9IGZyb20gJy4uL3F1ZXN0aW9uLW1hcmtpbmcvcXVlc3Rpb24tbWFya2luZy5kaWFsb2cuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2V4YW0tbWFya2luZy1kaWFsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAnZXhhbS1tYXJraW5nLmRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1NYXJraW5nRGlhbG9nIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cbiAgICBkaXNwbGF5OiBib29sZWFuO1xuICAgIGV4YW06IEV4YW07XG4gICAgcmVjb3JkczogYW55O1xuICAgIHNlbGVjdGVkUmVjb3JkOiBhbnk7XG4gICAgcXVlc3Rpb25zOiBFeGFtUXVlc3Rpb25bXTtcbiAgICBAVmlld0NoaWxkKFF1ZXN0aW9uTWFya2luZ0RpYWxvZykgcXVlc3Rpb25NYXJrRGlhbG9nOlF1ZXN0aW9uTWFya2luZ0RpYWxvZztcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBzaG93KGV4YW06RXhhbSkge1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xuICAgICAgICB0aGlzLmV4YW0gPSBleGFtO1xuICAgICAgICB0aGlzLmxvYWRTY29yZXMoKTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBtYXJrKCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFJlY29yZCkge1xuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbk1hcmtEaWFsb2cuc2hvdyh0aGlzLnNlbGVjdGVkUmVjb3JkLm1lbWJlcix0aGlzLnNlbGVjdGVkUmVjb3JkLmFuc3dlcnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFNjb3JlcygpIHtcbiAgICAgICAgRXhhbVF1ZXN0aW9uLmxpc3RPcGVuUXVlc3Rpb25CeUV4YW0odGhpcywgdGhpcy5leGFtLmlkKS5zdWJzY3JpYmUocXVlc3Rpb25zID0+IHtcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zID0gcXVlc3Rpb25zO1xuICAgICAgICAgICAgdmFyIHF1ZXN0aW9uSWRzID0gXy5wbHVjayhxdWVzdGlvbnMsJ3F1ZXN0aW9uX2lkJyk7XG4gICAgICAgICAgICBFeGFtTWVtYmVyLmxpc3RDYW5kaWRhdGVCeUV4YW0odGhpcywgdGhpcy5leGFtLmlkKS5zdWJzY3JpYmUobWVtYmVycyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRzID0gW107XG4gICAgICAgICAgICAgICAgXy5lYWNoKG1lbWJlcnMsIChtZW1iZXI6RXhhbU1lbWJlcik9PiB7XG4gICAgICAgICAgICAgICAgICAgIFN1Ym1pc3Npb24uYnlNZW1iZXIodGhpcyxtZW1iZXIuaWQpLnN1YnNjcmliZSgoc3VibWl0OlN1Ym1pc3Npb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFuc3dlci5saXN0QnlTdWJtaXQodGhpcywgc3VibWl0LmlkKS5zdWJzY3JpYmUoYW5zd2VycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VycyA9IF8uZmlsdGVyKGFuc3dlcnMsIChvYmo6QW5zd2VyKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF8uY29udGFpbnMocXVlc3Rpb25JZHMsb2JqLnF1ZXN0aW9uX2lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjb3JkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBtZW1iZXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXRyYWluaW5nX2dyb3VwX2lkX19ERVNDX186IG1lbWJlci5ldHJhaW5pbmdfZ3JvdXBfaWRfX0RFU0NfXyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVyOiBtZW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcnM6IGFuc3dlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5lYWNoKGFuc3dlcnMsIChvYmopPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRbb2JqLnF1ZXN0aW9uX2lkXSA9IG9iai5zY29yZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29yZHMucHVzaChyZWNvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4iXX0=
