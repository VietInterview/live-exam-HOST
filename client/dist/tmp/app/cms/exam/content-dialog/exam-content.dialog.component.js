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
    function ExamContentDialog(treeUtils) {
        var _this = _super.call(this) || this;
        _this.treeUtils = treeUtils;
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
            selector: 'etraining-exam-content-dialog',
            template: "<p-dialog header=\"{{'Exam content'|translate}}\" [(visible)]=\"display\" modal=\"false\" width=\"960\" [responsive]=\"true\">   <p-scrollPanel [style]=\"{width: '100%', height: '480px'}\">     <p-tabView>       <p-tabPanel header=\"{{'Question selection' |translate}}\">         <div class=\"ui-g ui-fluid form-group\">           <div class=\"ui-g-12\">           <p-selectButton [options]=\"examStatus\" [(ngModel)]=\"exam.status\" name=\"status\"></p-selectButton>         </div>           <div class=\"ui-g-6\">             <label>{{'Group'|translate}}</label>             <p-tree [value]=\"tree\" selectionMode=\"single\" [(selection)]=\"selectedNode\" (onNodeSelect)=\"nodeSelect($event)\"></p-tree>             <p-checkbox name=\"include_sub_group\" binary=\"true\" label=\"{{'Include sub-group'|translate}}\" [(ngModel)]=\"selector.include_sub_group\"></p-checkbox>           </div>           <div class=\"ui-g-6\" style=\"margin-bottom:10px\">             <label>{{'Mode'|translate}}</label>             <div style=\"margin-bottom:10px\">               <p-radioButton name=\"mode\" value=\"manual\" label=\"{{'Manual'|translate}}\" [(ngModel)]=\"selector.mode\" inputId=\"opt1\"></p-radioButton>             </div>             <div style=\"margin-bottom:10px\">               <p-radioButton name=\"mode\" value=\"random\" label=\"{{'Random'|translate}}\" [(ngModel)]=\"selector.mode\" inputId=\"opt2\"></p-radioButton>             </div>           </div>           <div class=\"ui-g-6\" [hidden]=\"selector.mode=='manual'\">             <span class=\"md-inputfield\">             <input type=\"text\" pInputText [(ngModel)]=\"selector.number\" name=\"number\" pKeyFilter=\"pint\">             <label>{{'Number of question'|translate}}</label>         </span>           </div>           <div class=\"ui-g-6\" [hidden]=\"selector.mode=='manual'\">             <label>{{'Level'|translate}}</label>             <p-rating [(ngModel)]=\"selector.level\" [stars]=\"5\" name=\"level\"></p-rating>           </div>         </div>         <button pButton type=\"button\" label=\"{{'Generate questions'|translate}}\" class=\"orange-btn\" icon=\"ui-icon-remove-red-eye\" (click)=\"generateQuestion()\" [hidden]=\"selector.mode=='random'\" ></button>         <button pButton type=\"button\" label=\"{{'Select questions'|translate}}\" class=\"orange-btn\" icon=\"ui-icon-near-me\" (click)=\"selectQuestion()\" [hidden]=\"selector.mode=='manual'\" ></button>         <p-table #questionTable [value]=\"questions\" [responsive]=\"true\">           <ng-template pTemplate=\"header\">             <tr>               <th>#</th>               <th>                 {{'Title'|translate}}               </th>               <th>                 {{'Group'|translate}}               </th>               <th>                 {{'Score'|translate}}               </th>             </tr>           </ng-template>           <ng-template pTemplate=\"body\" let-question let-rowIndex=\"rowIndex\">             <tr>               <td>{{rowIndex+1}}</td>               <td>{{question.title}}</td>               <td>{{question.group_id__DESC__}}</td>               <td>                 <p-inplace>                   <span pInplaceDisplay>                     {{question.score}}                 </span>                   <span pInplaceContent>                     <input type=\"text\" pInputText [(ngModel)]=\"question.score\" name=\"number\" pKeyFilter=\"pint\">                 </span>                 </p-inplace>               </td>             </tr>           </ng-template>           <ng-template pTemplate=\"footer\">             <tr>                 <td colspan=\"3\">{{'Total score'|translate}}</td>                 <td>{{questions | sum}}</td>             </tr>         </ng-template>          </p-table>       </p-tabPanel>       <p-tabPanel header=\"{{'Grade'|translate}}\">         <div class=\"ui-g ui-fluid form-group\">           <div class=\"ui-g-12\">             <span class=\"md-inputfield\">               <input type=\"text\"  pInputText name=\"scale\" [(ngModel)]=\"exam.scale\" pKeyFilter=\"pint\">               <label for=\"scale\">{{'Scale' | translate}}</label>           </span>           </div>           <div class=\"ui-g-12\">             <button pButton type=\"button\" icon=\"ui-icon-add\" class=\"secondary-btn\" (click)=\"addGrade()\" pTooltip=\"{{'Add grade'|translate}}\"></button>             <ul class=\"options-question\">               <li *ngFor=\"let grade of grades\">                 <span class=\"md-inputfield\">                   <input type=\"text\" pInputText [(ngModel)]=\"grade.name\" name=\"grade_name\">                    <label for=\"grade_name\">{{'Name' | translate}}</label>               </span>                 <span class=\"md-inputfield\">                   <p-spinner  [(ngModel)]=\"grade.min_score\" name=\"grade_min\"></p-spinner>                   <label for=\"grade_min\">{{'Min' | translate}}</label>               </span>                 <span class=\"md-inputfield\">                 <p-spinner  [(ngModel)]=\"grade.max_score\" name=\"grade_max\"></p-spinner>                   <label for=\"grade_max\">{{'Max' | translate}}</label>               </span>                 <button pButton type=\"button\" icon=\"ui-icon-close\" title=\"{{Remove|translate}}\" (click)=\"removeGrade(grade)\" class=\"remove-btn\"></button>               </li>             </ul>             <div *ngIf=\"grades | validateGrade:exam.scale\" class=\"ui-message ui-messages-error ui-corner-all\">               {{'Invalid grade options' | translate}}             </div>           </div>         </div>       </p-tabPanel>     </p-tabView>   </p-scrollPanel>   <etraining-select-question-dialog></etraining-select-question-dialog>   <p-footer>     <button type=\"button\" pButton icon=\"fa-check\" label=\"{{'Save'|translate}}\" (click)=\"save()\"></button>     <button type=\"button\" pButton icon=\"fa-close\" (click)=\"hide()\" label=\"{{'Close'|translate}}\"></button>   </p-footer> </p-dialog>",
        }),
        __metadata("design:paramtypes", [tree_utils_1.TreeUtils])
    ], ExamContentDialog);
    return ExamContentDialog;
}(base_component_1.BaseComponent));
exports.ExamContentDialog = ExamContentDialog;
