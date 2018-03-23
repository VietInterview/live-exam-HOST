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
var exercise_question_model_1 = require("../../../../shared/models/exercise-question.model");
var base_component_1 = require("../../../../shared/components/base/base.component");
var _ = require("underscore");
var unit_decorator_1 = require("../unit.decorator");
var tree_utils_1 = require("../../../../shared/helpers/tree.utils");
var select_question_dialog_component_1 = require("../../../../shared/components/select-question-dialog/select-question-dialog.component");
var ExerciseCourseUnitComponent = (function (_super) {
    __extends(ExerciseCourseUnitComponent, _super);
    function ExerciseCourseUnitComponent(treeUtils) {
        var _this = _super.call(this) || this;
        _this.treeUtils = treeUtils;
        _this.exerciseQuestions = [];
        return _this;
    }
    ExerciseCourseUnitComponent.prototype.render = function (unit) {
        var _this = this;
        this.unit = unit;
        if (unit.id)
            exercise_question_model_1.ExerciseQuestion.listByExercise(this, unit.id).subscribe(function (exerciseQuestions) {
                _this.exerciseQuestions = exerciseQuestions;
            });
    };
    ExerciseCourseUnitComponent.prototype.removeOldQuestions = function () {
        var _this = this;
        if (this.unit.id) {
            var delSubscriptions = [];
            _.each(this.exerciseQuestions, function (question) {
                delSubscriptions.push(question.delete(_this));
            });
            if (delSubscriptions.length)
                return Rx_1.Observable.forkJoin.apply(Rx_1.Observable, delSubscriptions);
            else
                return Rx_1.Observable.of(null);
        }
        else {
            this.exerciseQuestions = [];
            return Rx_1.Observable.of(null);
        }
    };
    ExerciseCourseUnitComponent.prototype.saveEditor = function () {
        var _this = this;
        return this.unit.save(this).flatMap(function () {
            var updateSubscriptions = _.map(_this.exerciseQuestions, function (exerciseQuestion) {
                exerciseQuestion.unit_id = _this.unit.id;
                return exerciseQuestion.save(_this);
            });
            return Rx_1.Observable.forkJoin.apply(Rx_1.Observable, updateSubscriptions);
        });
    };
    ExerciseCourseUnitComponent.prototype.selectQuestion = function () {
        var _this = this;
        this.removeOldQuestions().subscribe(function () {
            _this.questionDialog.show();
            _this.questionDialog.onSelectQuestions.subscribe(function (questions) {
                _this.createExerciseQuestionFromQuestionBank(questions).subscribe(function (examQuestions) {
                    _this.exerciseQuestions = examQuestions;
                });
            });
        });
    };
    ExerciseCourseUnitComponent.prototype.createExerciseQuestionFromQuestionBank = function (questions) {
        var _this = this;
        if (this.unit.id) {
            var createSubscriptions = _.map(questions, function (question) {
                var exerciseQuestion = new exercise_question_model_1.ExerciseQuestion();
                exerciseQuestion.unit_id = _this.unit.id;
                exerciseQuestion.question_id = question.id;
                exerciseQuestion.type = question.type;
                exerciseQuestion.title = question.title;
                return exerciseQuestion.save(_this);
            });
            return Rx_1.Observable.forkJoin.apply(Rx_1.Observable, createSubscriptions);
        }
        else {
            return Rx_1.Observable.of(_.map(questions, function (question) {
                var exerciseQuestion = new exercise_question_model_1.ExerciseQuestion();
                exerciseQuestion.question_id = question.id;
                return exerciseQuestion;
            }));
        }
    };
    __decorate([
        core_1.ViewChild(select_question_dialog_component_1.SelectQuestionsDialog),
        __metadata("design:type", select_question_dialog_component_1.SelectQuestionsDialog)
    ], ExerciseCourseUnitComponent.prototype, "questionDialog", void 0);
    ExerciseCourseUnitComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-exercise-course-unit',
            template: "<button pButton type=\"button\" label=\"{{'Select questions'|translate}}\" class=\"orange-btn\" icon=\"ui-icon-near-me\" (click)=\"selectQuestion()\"></button> <p-table #questionTable [value]=\"exerciseQuestions\" [responsive]=\"true\">   <ng-template pTemplate=\"header\">     <tr>       <th>#</th>       <th>         {{'Title'|translate}}       </th>       <th>         {{'Group'|translate}}       </th>     </tr>   </ng-template>   <ng-template pTemplate=\"body\" let-question let-rowIndex=\"rowIndex\">     <tr>       <td>{{rowIndex+1}}</td>       <td>{{question.title}}</td>       <td>{{question.group_id__DESC__}}</td>     </tr>   </ng-template> </p-table> <etraining-select-question-dialog></etraining-select-question-dialog>",
        }),
        unit_decorator_1.CourseUnitTemplate({
            type: 'exercise'
        }),
        __metadata("design:paramtypes", [tree_utils_1.TreeUtils])
    ], ExerciseCourseUnitComponent);
    return ExerciseCourseUnitComponent;
}(base_component_1.BaseComponent));
exports.ExerciseCourseUnitComponent = ExerciseCourseUnitComponent;
