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
var option_model_1 = require("../../../../shared/models/option.model");
var base_component_1 = require("../../../../shared/components/base/base.component");
var _ = require("underscore");
var question_decorator_1 = require("../question.decorator");
var SingleChoiceQuestionComponent = (function (_super) {
    __extends(SingleChoiceQuestionComponent, _super);
    function SingleChoiceQuestionComponent() {
        var _this = _super.call(this) || this;
        _this.options = [];
        return _this;
    }
    SingleChoiceQuestionComponent.prototype.render = function (question, answer) {
        var _this = this;
        this.question = question;
        this.answer = answer;
        if (this.question.id)
            option_model_1.QuestionOption.listByQuestion(this, question.id).subscribe(function (options) {
                _this.options = options;
            });
    };
    SingleChoiceQuestionComponent.prototype.saveEditor = function () {
        var _this = this;
        return this.question.save(this).flatMap(function () {
            var subscriptions = [];
            _.each(_this.options, function (option) {
                option.question_id = _this.question.id;
                subscriptions.push(option.save(_this));
            });
            return Rx_1.Observable.forkJoin.apply(Rx_1.Observable, subscriptions);
        });
    };
    SingleChoiceQuestionComponent.prototype.concludeAnswer = function () {
        var _this = this;
        var option = _.find(this.options, function (obj) {
            return obj.id == _this.answer.option_id;
        });
        if (option)
            this.answer.is_correct = option.is_correct;
    };
    SingleChoiceQuestionComponent.prototype.addOption = function () {
        this.options.push(new option_model_1.QuestionOption());
    };
    SingleChoiceQuestionComponent.prototype.setOptionCorrect = function (option) {
        if (option.is_correct) {
            _.each(this.options, function (option) {
                option.is_correct = false;
            });
            option.is_correct = true;
        }
    };
    SingleChoiceQuestionComponent.prototype.removeOption = function (option) {
        var _this = this;
        if (option.id) {
            option.delete(this).subscribe(function () {
                _this.options = _.reject(_this.options, function (obj) {
                    return obj == option;
                });
            });
        }
        else
            this.options = _.reject(this.options, function (obj) {
                return obj == option;
            });
    };
    SingleChoiceQuestionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-single-choice-question',
            template: "<div *ngIf=\"mode=='edit'\">   <div class=\"ui-g-12 \">     <label>{{'Content'|translate}}</label>     <p-editor [(ngModel)]=\"question.content\" [style]=\"{'height':'120px'}\" name=\"content\">     </p-editor>   </div>   <div class=\"ui-g-12\">     <p-panel header=\"{{'Options'|translate}}\">       <button pButton type=\"button\" icon=\"ui-icon-add\" class=\"secondary-btn\" (click)=\"addOption()\" pTooltip=\"{{'Add option'|translate}}\"></button>       <ul class=\"options-question\">         <li *ngFor=\"let option of options\">           <p-checkbox (click)=\"setOptionCorrect(option)\" binary=\"true\" name=\"option_is_correct\"></p-checkbox>           <span class=\"md-inputfield\">             <input type=\"text\" pInputText [(ngModel)]=\"option.content\" name=\"option_content\">             <label>{{'Content'|translate}}</label>         </span>           <button pButton type=\"button\" icon=\"ui-icon-close\" title=\"{{Remove|translate}}\" (click)=\"removeOption(option)\" class=\"remove-btn\"></button>         </li>       </ul>     </p-panel>   </div>   <div class=\"ui-g-12 \">     <label>{{'Explanation'|translate}}</label>     <p-editor [(ngModel)]=\"question.explanation\" [style]=\"{'height':'120px'}\" name=\"explanation\">     </p-editor>   </div> </div> <div *ngIf=\"mode=='study'\">     <div class=\"ui-g-12 \">     <label>{{'Content'|translate}}</label>     <p [innerHTML]=\"question.content\"></p>   </div>   <div class=\"ui-g-12\">     <p-fieldset legend=\"{{'Options'|translate}}\">       <ul class=\"options-question\">         <li *ngFor=\"let option of options\">           <p-radioButton [(ngModel)]=\"answer.option_id\" [disabled]=\"true\" value=\"{{option.id}}\" name=\"option_answer\" label=\"{{option.content}}\"></p-radioButton>           <i class=\"material-icons\" *ngIf=\"answer.is_correct\">done</i>         </li>       </ul>     </p-fieldset>   </div> </div> <div *ngIf=\"mode=='review'\"> </div>",
            styles: [".options-question li{margin-bottom:10px;list-style:none}.options-question p-checkbox{float:left}.options-question .md-inputfield{float:left;margin-left:5px}.options-question .ui-button.ui-button-icon-only{margin-left:10px;width:2em;height:2em}"],
        }),
        question_decorator_1.QuestionTemplate({
            type: 'sc'
        }),
        __metadata("design:paramtypes", [])
    ], SingleChoiceQuestionComponent);
    return SingleChoiceQuestionComponent;
}(base_component_1.BaseComponent));
exports.SingleChoiceQuestionComponent = SingleChoiceQuestionComponent;
