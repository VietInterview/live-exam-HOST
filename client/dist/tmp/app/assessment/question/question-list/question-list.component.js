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
var constants_1 = require("../../../shared/models/constants");
var question_model_1 = require("../../../shared/models/question.model");
var group_model_1 = require("../../../shared/models/group.model");
var question_dialog_component_1 = require("../question-dialog/question-dialog.component");
var tree_utils_1 = require("../../../shared/helpers/tree.utils");
var import_dialog_component_1 = require("../import-dialog/import-dialog.component");
var QuestionListComponent = (function (_super) {
    __extends(QuestionListComponent, _super);
    function QuestionListComponent(treeUtils) {
        var _this = _super.call(this) || this;
        _this.treeUtils = treeUtils;
        _this.QUESTION_TYPE = constants_1.QUESTION_TYPE;
        return _this;
    }
    QuestionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        group_model_1.Group.listByCategory(this, constants_1.GROUP_CATEGORY.QUESTION).subscribe(function (groups) {
            _this.tree = _this.treeUtils.buildTree(groups);
        });
        this.loadQuestions();
        this.items = [
            { label: this.translateService.instant(constants_1.QUESTION_TYPE['sc']), command: function () { _this.add('sc'); } },
            { label: this.translateService.instant(constants_1.QUESTION_TYPE['ext']), command: function () { _this.add('ext'); } },
        ];
    };
    QuestionListComponent.prototype.add = function (type) {
        var _this = this;
        var question = new question_model_1.Question();
        question.type = type;
        this.questionDialog.show(question);
        this.questionDialog.onCreateComplete.subscribe(function () {
            _this.loadQuestions();
        });
    };
    QuestionListComponent.prototype.edit = function () {
        var _this = this;
        if (this.selectedQuestion)
            this.questionDialog.show(this.selectedQuestion);
        this.questionDialog.onUpdateComplete.subscribe(function () {
            _this.loadQuestions();
        });
    };
    QuestionListComponent.prototype.delete = function () {
        var _this = this;
        if (this.selectedQuestion)
            this.confirmationService.confirm({
                message: this.translateService.instant('Are you sure to delete ?'),
                accept: function () {
                    _this.selectedQuestion.delete(_this).subscribe(function () {
                        _this.loadQuestions();
                        _this.selectedQuestion = null;
                    });
                }
            });
    };
    QuestionListComponent.prototype.loadQuestions = function () {
        var _this = this;
        if (this.selectedNode)
            question_model_1.Question.listByGroup(this, this.selectedNode.data.id).subscribe(function (questions) {
                _this.questions = questions;
            });
        else
            question_model_1.Question.all(this).subscribe(function (questions) {
                _this.questions = questions;
            });
    };
    QuestionListComponent.prototype.nodeSelect = function (event) {
        this.loadQuestions();
    };
    QuestionListComponent.prototype.import = function () {
        var _this = this;
        this.questionImportDialog.show();
        this.questionImportDialog.onImportComplete.subscribe(function () {
            _this.loadQuestions();
        });
    };
    __decorate([
        core_1.ViewChild(question_dialog_component_1.QuestionDialog),
        __metadata("design:type", question_dialog_component_1.QuestionDialog)
    ], QuestionListComponent.prototype, "questionDialog", void 0);
    __decorate([
        core_1.ViewChild(import_dialog_component_1.QuestionImportDialog),
        __metadata("design:type", import_dialog_component_1.QuestionImportDialog)
    ], QuestionListComponent.prototype, "questionImportDialog", void 0);
    QuestionListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-question-list',
            template: "<div class=\"card card-w-title\">     <h1>{{'Question bank'|translate}}</h1>     <div class=\"ui-g\">       <div class=\"ui-g-12\">         <label>{{'Question group'|translate}}</label>         <p-tree [value]=\"tree\" selectionMode=\"single\" [(selection)]=\"selectedNode\" (onNodeSelect)=\"nodeSelect($event)\"></p-tree>       </div>         <div class=\"ui-g-12\">             <p-toolbar>                 <div class=\"ui-toolbar-group-left\">                     <p-splitButton label=\"{{'Add'|translate}}\"icon=\"ui-icon-add\" [model]=\"items\" styleClass=\"ui-button-success\"></p-splitButton>                     <button pButton type=\"button\" label=\"{{'Edit'|translate}}\" class=\"purple-btn\" icon=\"ui-icon-mode-edit\" (click)=\"edit()\" [disabled]=\"!selectedQuestion\"></button>                     <button pButton type=\"button\" label=\"{{'Delete'|translate}}\" class=\"red-btn\" icon=\"ui-icon-delete\" (click)=\"delete()\" [disabled]=\"!selectedQuestion\"></button>                                       </div>                 <div class=\"ui-toolbar-group-right\">                     <button pButton type=\"button\" label=\"{{'Import'|translate}}\"  class=\"purple-btn\" icon=\"ui-icon-file-upload\" (click)=\"import()\"></button>                 </div>             </p-toolbar>             <p-table #questionTable [value]=\"questions\" [paginator]=\"true\" [rows]=\"10\" selectionMode=\"single\"              [(selection)]=\"selectedQuestion\" [responsive]=\"true\">                 <ng-template pTemplate=\"header\">                     <tr>                         <th [pSortableColumn]=\"'title'\">                             {{'Title'|translate}}                             <p-sortIcon [field]=\"'title'\"></p-sortIcon>                         </th>                         <th [pSortableColumn]=\"'level'\">                             {{'Level'|translate}}                             <p-sortIcon [field]=\"'level'\"></p-sortIcon>                         </th>                         <th [pSortableColumn]=\"'type'\">                             {{'Type'|translate}}                             <p-sortIcon [field]=\"'type'\"></p-sortIcon>                         </th>                     </tr>                 </ng-template>                 <ng-template pTemplate=\"body\" let-question>                     <tr [pSelectableRow]=\"question\">                         <td>{{question.title}}</td>                         <td>{{question.level}}</td>                         <td>{{QUESTION_TYPE[question.type] | translate}}</td>                     </tr>                 </ng-template>                 <ng-template pTemplate=\"summary\">                     {{'Total records'|translate}} : {{questions?.length}}                 </ng-template>                 <ng-template pTemplate=\"emptymessage\" >                     <tr>                         <td [attr.colspan]=\"3\">                             {{'No records found'|translate}}                         </td>                     </tr>                 </ng-template>             </p-table>             <etraining-question-dialog></etraining-question-dialog>             <etraining-question-import-dialog></etraining-question-import-dialog>         </div>     </div> </div>",
            styles: [".mrg-bt{margin-bottom:15px}"],
        }),
        __metadata("design:paramtypes", [tree_utils_1.TreeUtils])
    ], QuestionListComponent);
    return QuestionListComponent;
}(base_component_1.BaseComponent));
exports.QuestionListComponent = QuestionListComponent;
