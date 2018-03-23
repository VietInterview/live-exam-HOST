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
var group_model_1 = require("../../../shared/models/group.model");
var base_component_1 = require("../../../shared/components/base/base.component");
var exam_model_1 = require("../../../shared/models/exam.model");
var question_model_1 = require("../../../shared/models/question.model");
var exam_grade_model_1 = require("../../../shared/models/exam-grade.model");
var exam_question_model_1 = require("../../../shared/models/exam-question.model");
var question_selector_model_1 = require("../../../shared/models/question_selector.model");
var constants_1 = require("../../../shared/models/constants");
var _ = require("underscore");
var tree_utils_1 = require("../../../shared/helpers/tree.utils");
var select_question_dialog_component_1 = require("../../../shared/components/select-question-dialog/select-question-dialog.component");
var ExamContentDialog = (function (_super) {
    __extends(ExamContentDialog, _super);
    function ExamContentDialog() {
        var _this = _super.call(this) || this;
        _this.treeUtils = new tree_utils_1.TreeUtils();
        _this.selector = new question_selector_model_1.QuestionSelector();
        _this.grades = [];
        _this.exam = new exam_model_1.Exam();
        _this.questions = [];
        _this.examStatus = _.map(constants_1.EXAM_STATUS, function (val, key) {
            return {
                label: val,
                value: key
            };
        });
        return _this;
    }
    ExamContentDialog.prototype.nodeSelect = function (event) {
        if (this.selectedNode) {
            this.selector.group_id = this.selectedNode.data.id;
        }
    };
    ExamContentDialog.prototype.createExamQuestionFromQuestionBank = function (questions) {
        var _this = this;
        var createSubscriptions = _.map(questions, function (question) {
            var examQuestion = new exam_question_model_1.ExamQuestion();
            examQuestion.exam_id = _this.exam.id;
            examQuestion.question_id = question.id;
            return examQuestion.save(_this);
        });
        return Observable_1.Observable.forkJoin.apply(Observable_1.Observable, createSubscriptions);
    };
    ExamContentDialog.prototype.removeOldQuestions = function () {
        var _this = this;
        var delSubscriptions = [];
        _.each(this.questions, function (question) {
            delSubscriptions.push(question.delete(_this));
        });
        if (delSubscriptions.length)
            return Observable_1.Observable.forkJoin.apply(Observable_1.Observable, delSubscriptions);
        else
            return Observable_1.Observable.of(null);
    };
    ExamContentDialog.prototype.selectQuestion = function () {
        var _this = this;
        this.removeOldQuestions().subscribe(function () {
            _this.questionDialog.show();
            _this.questionDialog.onSelectQuestions.subscribe(function (questions) {
                _this.createExamQuestionFromQuestionBank(questions).subscribe(function (examQuestins) {
                    _this.questions = examQuestins;
                });
            });
        });
    };
    ExamContentDialog.prototype.generateQuestion = function () {
        var _this = this;
        this.removeOldQuestions().subscribe(function () {
            var groupIds = [];
            if (_this.selector.include_sub_group) {
                var selectedGroups = _this.treeUtils.getSubGroup(_this.groups, _this.selector.group_id);
                groupIds = _.pluck(selectedGroups, 'id');
            }
            else
                groupIds = [_this.selector.group_id];
            question_model_1.Question.listByGroups(_this, groupIds).subscribe(function (questions) {
                if (_this.selector.mode == 'random' && _this.selector.number) {
                    questions = _.shuffle(questions);
                    if (_this.selector.level)
                        questions = _.filter(questions, function (obj) {
                            return obj.level == _this.selector.level;
                        });
                    questions = questions.slice(0, _this.selector.number);
                }
                _this.createExamQuestionFromQuestionBank(questions);
            });
        });
    };
    ExamContentDialog.prototype.show = function (exam) {
        var _this = this;
        this.display = true;
        this.exam = exam;
        exam_grade_model_1.ExamGrade.listByExam(this, exam.id).subscribe(function (grades) {
            _this.grades = grades;
        });
        exam_question_model_1.ExamQuestion.listByExam(this, exam.id).subscribe(function (questions) {
            _this.questions = questions;
        });
        this.getQuestionSelector().subscribe(function (selector) {
            _this.selector = selector;
            group_model_1.Group.listByCategory(_this, constants_1.GROUP_CATEGORY.QUESTION).subscribe(function (groups) {
                _this.groups = groups;
                _this.tree = _this.treeUtils.buildTree(groups);
                if (_this.selector.group_id) {
                    _this.selectedNode = _this.treeUtils.findTreeNode(_this.tree, _this.selector.group_id);
                }
            });
        });
    };
    ExamContentDialog.prototype.getQuestionSelector = function () {
        if (this.exam.selector_id) {
            return question_selector_model_1.QuestionSelector.get(this, this.exam.selector_id);
        }
        else {
            return Observable_1.Observable.of(new question_selector_model_1.QuestionSelector());
        }
    };
    ExamContentDialog.prototype.hide = function () {
        this.display = false;
    };
    ExamContentDialog.prototype.save = function () {
        var _this = this;
        var subscriptions = [];
        _.each(this.grades, function (grade) {
            subscriptions.push(grade.save(_this));
        });
        _.each(this.questions, function (question) {
            subscriptions.push(question.save(_this));
        });
        subscriptions.push(this.selector.save(this).flatMap(function () {
            _this.exam.selector_id = _this.selector.id;
            return _this.exam.save(_this);
        }));
        return Observable_1.Observable.forkJoin.apply(Observable_1.Observable, subscriptions).subscribe(function () {
            _this.hide();
            _this.messageService.add({ severity: 'success', summary: 'Success', detail: _this.translateService.instant('Content saved successfully.') });
        });
    };
    ExamContentDialog.prototype.addGrade = function () {
        var grade = new exam_grade_model_1.ExamGrade();
        grade.exam_id = this.exam.id;
        this.grades.push(grade);
    };
    ExamContentDialog.prototype.removeGrade = function (grade) {
        var _this = this;
        if (grade.id) {
            grade.delete(this).subscribe(function () {
                _this.grades = _.reject(_this.grades, function (obj) {
                    return obj == grade;
                });
            });
        }
        else
            this.grades = _.reject(this.grades, function (obj) {
                return obj == grade;
            });
    };
    __decorate([
        core_1.ViewChild(select_question_dialog_component_1.SelectQuestionsDialog),
        __metadata("design:type", select_question_dialog_component_1.SelectQuestionsDialog)
    ], ExamContentDialog.prototype, "questionDialog", void 0);
    ExamContentDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'exam-content-dialog',
            templateUrl: 'exam-content.dialog.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], ExamContentDialog);
    return ExamContentDialog;
}(base_component_1.BaseComponent));
exports.ExamContentDialog = ExamContentDialog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jbXMvZXhhbS9jb250ZW50LWRpYWxvZy9leGFtLWNvbnRlbnQuZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBb0U7QUFDcEUsOENBQTZDO0FBRzdDLGtFQUEyRDtBQUMzRCxpRkFBK0U7QUFDL0UsZ0VBQXlEO0FBQ3pELHdFQUFpRTtBQUNqRSw0RUFBb0U7QUFDcEUsa0ZBQTBFO0FBQzFFLDBGQUFrRjtBQUVsRiw4REFBcUk7QUFFckksOEJBQWdDO0FBQ2hDLGlFQUErRDtBQUMvRCx1SUFBMkg7QUFRM0g7SUFBdUMscUNBQWE7SUFjbkQ7UUFBQSxZQUNDLGlCQUFPLFNBWVA7UUFYQSxLQUFJLENBQUMsU0FBUyxHQUFJLElBQUksc0JBQVMsRUFBRSxDQUFDO1FBQ2xDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSwwQ0FBZ0IsRUFBRSxDQUFDO1FBQ3ZDLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFDdkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLHVCQUFXLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUNwQyxNQUFNLENBQUM7Z0JBQ0gsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsS0FBSyxFQUFFLEdBQUc7YUFDYixDQUFBO1FBQ0wsQ0FBQyxDQUFDLENBQUM7O0lBQ1YsQ0FBQztJQUVELHNDQUFVLEdBQVYsVUFBVyxLQUFVO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNwRCxDQUFDO0lB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LENBQUM7WUFDZCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDNUIsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHO29CQUN2QyxNQUFNLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQztnQkFDckIsQ0FBQyxDQUFDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQTtRQUNILENBQUM7UUFBQyxJQUFJO1lBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHO2dCQUN2QyxNQUFNLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFsSmlDO1FBQWpDLGdCQUFTLENBQUMsd0RBQXFCLENBQUM7a0NBQWtCLHdEQUFxQjs2REFBQztJQVo3RCxpQkFBaUI7UUFMN0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFdBQVcsRUFBRSxvQ0FBb0M7U0FDakQsQ0FBQzs7T0FDVyxpQkFBaUIsQ0FpSzdCO0lBQUQsd0JBQUM7Q0FqS0QsQUFpS0MsQ0FqS3NDLDhCQUFhLEdBaUtuRDtBQWpLWSw4Q0FBaUIiLCJmaWxlIjoiYXBwL2Ntcy9leGFtL2NvbnRlbnQtZGlhbG9nL2V4YW0tY29udGVudC5kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQVBJU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2dyb3VwLm1vZGVsJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9iYXNlL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IEV4YW0gfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2V4YW0ubW9kZWwnO1xuaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL3F1ZXN0aW9uLm1vZGVsJztcbmltcG9ydCB7IEV4YW1HcmFkZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvZXhhbS1ncmFkZS5tb2RlbCc7XG5pbXBvcnQgeyBFeGFtUXVlc3Rpb24gfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2V4YW0tcXVlc3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgUXVlc3Rpb25TZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvcXVlc3Rpb25fc2VsZWN0b3IubW9kZWwnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFFVRVNUSU9OX1NFTEVDVElPTiwgR1JPVVBfQ0FURUdPUlksIEVYQU1fU1RBVFVTLCBRVUVTVElPTl9UWVBFLCBFWEFNX01FTUJFUl9TVEFUVVMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2NvbnN0YW50cydcbmltcG9ydCB7IFNlbGVjdEl0ZW0sIE1lbnVJdGVtIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7IFRyZWVVdGlscyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9oZWxwZXJzL3RyZWUudXRpbHMnO1xuaW1wb3J0IHsgU2VsZWN0UXVlc3Rpb25zRGlhbG9nIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvc2VsZWN0LXF1ZXN0aW9uLWRpYWxvZy9zZWxlY3QtcXVlc3Rpb24tZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnZXhhbS1jb250ZW50LWRpYWxvZycsXG5cdHRlbXBsYXRlVXJsOiAnZXhhbS1jb250ZW50LmRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1Db250ZW50RGlhbG9nIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cblx0ZGlzcGxheTogYm9vbGVhbjtcblx0dHJlZTogVHJlZU5vZGVbXTtcblx0ZXhhbTogRXhhbTtcblx0c2VsZWN0ZWROb2RlOiBUcmVlTm9kZTtcblx0c2VsZWN0b3I6IFF1ZXN0aW9uU2VsZWN0b3I7XG5cdGdyYWRlczogRXhhbUdyYWRlW107XG5cdHF1ZXN0aW9uczogRXhhbVF1ZXN0aW9uW107XG5cdGdyb3VwczogR3JvdXBbXTtcblx0ZXhhbVN0YXR1czogU2VsZWN0SXRlbVtdO1xuXHR0cmVlVXRpbHM6IFRyZWVVdGlscztcblx0QFZpZXdDaGlsZChTZWxlY3RRdWVzdGlvbnNEaWFsb2cpIHF1ZXN0aW9uRGlhbG9nIDogU2VsZWN0UXVlc3Rpb25zRGlhbG9nO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy50cmVlVXRpbHMgPSAgbmV3IFRyZWVVdGlscygpO1xuXHRcdHRoaXMuc2VsZWN0b3IgPSBuZXcgUXVlc3Rpb25TZWxlY3RvcigpO1xuXHRcdHRoaXMuZ3JhZGVzID0gW107XG5cdFx0dGhpcy5leGFtID0gbmV3IEV4YW0oKTtcblx0XHR0aGlzLnF1ZXN0aW9ucyA9IFtdO1xuXHRcdHRoaXMuZXhhbVN0YXR1cyA9IF8ubWFwKEVYQU1fU1RBVFVTLCAodmFsLCBrZXkpPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogdmFsLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBrZXlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cdH1cblxuXHRub2RlU2VsZWN0KGV2ZW50OiBhbnkpIHtcblx0XHRpZiAodGhpcy5zZWxlY3RlZE5vZGUpIHtcblx0XHRcdHRoaXMuc2VsZWN0b3IuZ3JvdXBfaWQgPSB0aGlzLnNlbGVjdGVkTm9kZS5kYXRhLmlkO1xuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZUV4YW1RdWVzdGlvbkZyb21RdWVzdGlvbkJhbmsocXVlc3Rpb25zOiBRdWVzdGlvbltdKTpPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHZhciBjcmVhdGVTdWJzY3JpcHRpb25zID0gXy5tYXAocXVlc3Rpb25zLCAocXVlc3Rpb24pPT4ge1xuXHRcdFx0dmFyIGV4YW1RdWVzdGlvbiA9IG5ldyBFeGFtUXVlc3Rpb24oKTtcblx0XHRcdGV4YW1RdWVzdGlvbi5leGFtX2lkID0gdGhpcy5leGFtLmlkO1xuXHRcdFx0ZXhhbVF1ZXN0aW9uLnF1ZXN0aW9uX2lkID0gcXVlc3Rpb24uaWQ7XG5cdFx0XHRyZXR1cm4gZXhhbVF1ZXN0aW9uLnNhdmUodGhpcyk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIE9ic2VydmFibGUuZm9ya0pvaW4oLi4uY3JlYXRlU3Vic2NyaXB0aW9ucyk7XG5cdH1cblxuXHRyZW1vdmVPbGRRdWVzdGlvbnMoKTpPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHZhciBkZWxTdWJzY3JpcHRpb25zID0gW107XG5cdFx0Xy5lYWNoKHRoaXMucXVlc3Rpb25zLCAocXVlc3Rpb24pPT4ge1xuXHRcdFx0ZGVsU3Vic2NyaXB0aW9ucy5wdXNoKHF1ZXN0aW9uLmRlbGV0ZSh0aGlzKSk7XG5cdFx0fSk7XG5cdFx0aWYgKGRlbFN1YnNjcmlwdGlvbnMubGVuZ3RoKVxuXHRcdFx0cmV0dXJuIE9ic2VydmFibGUuZm9ya0pvaW4oLi4uZGVsU3Vic2NyaXB0aW9ucyk7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIE9ic2VydmFibGUub2YobnVsbCk7XG5cdH1cblxuXHRzZWxlY3RRdWVzdGlvbigpIHtcblx0XHR0aGlzLnJlbW92ZU9sZFF1ZXN0aW9ucygpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHR0aGlzLnF1ZXN0aW9uRGlhbG9nLnNob3coKTtcblx0XHRcdHRoaXMucXVlc3Rpb25EaWFsb2cub25TZWxlY3RRdWVzdGlvbnMuc3Vic2NyaWJlKHF1ZXN0aW9ucyA9PiB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlRXhhbVF1ZXN0aW9uRnJvbVF1ZXN0aW9uQmFuayhxdWVzdGlvbnMpLnN1YnNjcmliZSgoZXhhbVF1ZXN0aW5zKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5xdWVzdGlvbnMgPSBleGFtUXVlc3RpbnM7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRnZW5lcmF0ZVF1ZXN0aW9uKCkge1xuXHRcdHRoaXMucmVtb3ZlT2xkUXVlc3Rpb25zKCkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdHZhciBncm91cElkcz1bXTtcblx0XHRcdGlmICh0aGlzLnNlbGVjdG9yLmluY2x1ZGVfc3ViX2dyb3VwKSB7XG5cdFx0XHRcdHZhciBzZWxlY3RlZEdyb3VwcyA9IHRoaXMudHJlZVV0aWxzLmdldFN1Ykdyb3VwKHRoaXMuZ3JvdXBzLCB0aGlzLnNlbGVjdG9yLmdyb3VwX2lkKTtcblx0XHRcdFx0Z3JvdXBJZHMgPSBfLnBsdWNrKHNlbGVjdGVkR3JvdXBzLCAnaWQnKTtcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdFx0Z3JvdXBJZHMgPSBbdGhpcy5zZWxlY3Rvci5ncm91cF9pZF07XG5cdFx0XHRRdWVzdGlvbi5saXN0QnlHcm91cHModGhpcywgZ3JvdXBJZHMpLnN1YnNjcmliZShxdWVzdGlvbnMgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy5zZWxlY3Rvci5tb2RlID09J3JhbmRvbScgJiYgdGhpcy5zZWxlY3Rvci5udW1iZXIpIHtcblx0XHRcdFx0XHRxdWVzdGlvbnMgPSBfLnNodWZmbGUocXVlc3Rpb25zKTtcblx0XHRcdFx0XHRpZiAodGhpcy5zZWxlY3Rvci5sZXZlbClcblx0XHRcdFx0XHRcdHF1ZXN0aW9ucyA9IF8uZmlsdGVyKHF1ZXN0aW9ucywgKG9iajpRdWVzdGlvbik9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBvYmoubGV2ZWwgPT0gdGhpcy5zZWxlY3Rvci5sZXZlbDtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHF1ZXN0aW9ucyA9IHF1ZXN0aW9ucy5zbGljZSgwLCB0aGlzLnNlbGVjdG9yLm51bWJlcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5jcmVhdGVFeGFtUXVlc3Rpb25Gcm9tUXVlc3Rpb25CYW5rKHF1ZXN0aW9ucyk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdHNob3coZXhhbTogRXhhbSkge1xuXHRcdHRoaXMuZGlzcGxheSA9IHRydWU7XG5cdFx0dGhpcy5leGFtID0gZXhhbTtcblx0XHRFeGFtR3JhZGUubGlzdEJ5RXhhbSh0aGlzLCBleGFtLmlkKS5zdWJzY3JpYmUoZ3JhZGVzID0+IHtcblx0XHRcdHRoaXMuZ3JhZGVzID0gZ3JhZGVzO1xuXHRcdH0pO1xuXHRcdEV4YW1RdWVzdGlvbi5saXN0QnlFeGFtKHRoaXMsIGV4YW0uaWQpLnN1YnNjcmliZShxdWVzdGlvbnMgPT4ge1xuXHRcdFx0dGhpcy5xdWVzdGlvbnMgPSBxdWVzdGlvbnM7XG5cdFx0fSk7XG5cdFx0dGhpcy5nZXRRdWVzdGlvblNlbGVjdG9yKCkuc3Vic2NyaWJlKHNlbGVjdG9yID0+IHtcblx0XHRcdHRoaXMuc2VsZWN0b3IgPSBzZWxlY3Rvcjtcblx0XHRcdEdyb3VwLmxpc3RCeUNhdGVnb3J5KHRoaXMsIEdST1VQX0NBVEVHT1JZLlFVRVNUSU9OKS5zdWJzY3JpYmUoZ3JvdXBzID0+IHtcblx0XHRcdFx0dGhpcy5ncm91cHMgPSBncm91cHM7XG5cdFx0XHRcdHRoaXMudHJlZSA9IHRoaXMudHJlZVV0aWxzLmJ1aWxkVHJlZShncm91cHMpO1xuXHRcdFx0XHRpZiAodGhpcy5zZWxlY3Rvci5ncm91cF9pZCkge1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWROb2RlID0gdGhpcy50cmVlVXRpbHMuZmluZFRyZWVOb2RlKHRoaXMudHJlZSwgdGhpcy5zZWxlY3Rvci5ncm91cF9pZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0Z2V0UXVlc3Rpb25TZWxlY3RvcigpOiBPYnNlcnZhYmxlPFF1ZXN0aW9uU2VsZWN0b3I+IHtcblx0XHRpZiAodGhpcy5leGFtLnNlbGVjdG9yX2lkKSB7XG5cdFx0XHRyZXR1cm4gUXVlc3Rpb25TZWxlY3Rvci5nZXQodGhpcywgdGhpcy5leGFtLnNlbGVjdG9yX2lkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIE9ic2VydmFibGUub2YobmV3IFF1ZXN0aW9uU2VsZWN0b3IoKSk7XG5cdFx0fVxuXHR9XG5cblx0aGlkZSgpIHtcblx0XHR0aGlzLmRpc3BsYXkgPSBmYWxzZTtcblx0fVxuXG5cdHNhdmUoKSB7XG5cdFx0dmFyIHN1YnNjcmlwdGlvbnMgPSBbXTtcblx0XHRfLmVhY2godGhpcy5ncmFkZXMsIChncmFkZSk9PiB7XG5cdFx0XHRzdWJzY3JpcHRpb25zLnB1c2goZ3JhZGUuc2F2ZSh0aGlzKSk7XG5cdFx0fSk7XG5cdFx0Xy5lYWNoKHRoaXMucXVlc3Rpb25zLCAocXVlc3Rpb24pPT4ge1xuXHRcdFx0c3Vic2NyaXB0aW9ucy5wdXNoKHF1ZXN0aW9uLnNhdmUodGhpcykpO1xuXHRcdH0pO1xuXHRcdHN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLnNlbGVjdG9yLnNhdmUodGhpcykuZmxhdE1hcCgoKSA9PiB7XG5cdFx0XHR0aGlzLmV4YW0uc2VsZWN0b3JfaWQgPSB0aGlzLnNlbGVjdG9yLmlkO1xuXHRcdFx0cmV0dXJuIHRoaXMuZXhhbS5zYXZlKHRoaXMpO1xuXHRcdH0pKTtcblx0XHRyZXR1cm4gT2JzZXJ2YWJsZS5mb3JrSm9pbiguLi5zdWJzY3JpcHRpb25zKS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0XHR0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZCh7IHNldmVyaXR5OiAnc3VjY2VzcycsIHN1bW1hcnk6ICdTdWNjZXNzJywgZGV0YWlsOiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCgnQ29udGVudCBzYXZlZCBzdWNjZXNzZnVsbHkuJykgfSk7XG5cdFx0fSk7XG5cdH1cblxuXHRhZGRHcmFkZSgpIHtcblx0XHR2YXIgZ3JhZGUgPSBuZXcgRXhhbUdyYWRlKCk7XG5cdFx0Z3JhZGUuZXhhbV9pZCA9IHRoaXMuZXhhbS5pZDtcblx0XHR0aGlzLmdyYWRlcy5wdXNoKGdyYWRlKTtcblx0fVxuXG5cdHJlbW92ZUdyYWRlKGdyYWRlOiBFeGFtR3JhZGUpIHtcblx0XHRpZiAoZ3JhZGUuaWQpIHtcblx0XHRcdGdyYWRlLmRlbGV0ZSh0aGlzKS5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmdyYWRlcyA9IF8ucmVqZWN0KHRoaXMuZ3JhZGVzLCAob2JqKT0+IHtcblx0XHRcdFx0XHRyZXR1cm4gb2JqID09IGdyYWRlO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pXG5cdFx0fSBlbHNlXG5cdFx0XHR0aGlzLmdyYWRlcyA9IF8ucmVqZWN0KHRoaXMuZ3JhZGVzLCAob2JqKT0+IHtcblx0XHRcdFx0cmV0dXJuIG9iaiA9PSBncmFkZTtcblx0XHRcdH0pO1xuXHR9XG5cblxufSJdfQ==
