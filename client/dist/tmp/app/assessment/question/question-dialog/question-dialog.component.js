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
var group_model_1 = require("../../../shared/models/group.model");
var base_dialog_1 = require("../../../shared/components/base/base.dialog");
var tree_utils_1 = require("../../../shared/helpers/tree.utils");
var constants_1 = require("../../../shared/models/constants");
var question_container_directive_1 = require("../question-template/question-container.directive");
var question_decorator_1 = require("../question-template/question.decorator");
var QuestionDialog = (function (_super) {
    __extends(QuestionDialog, _super);
    function QuestionDialog(treeUtils, componentFactoryResolver) {
        var _this = _super.call(this) || this;
        _this.treeUtils = treeUtils;
        _this.componentFactoryResolver = componentFactoryResolver;
        return _this;
    }
    QuestionDialog.prototype.nodeSelect = function (event) {
        if (this.selectedNode) {
            this.object.group_id = this.selectedNode.data.id;
        }
    };
    QuestionDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.onShow.subscribe(function (object) {
            group_model_1.Group.listByCategory(_this, constants_1.GROUP_CATEGORY.QUESTION).subscribe(function (groups) {
                _this.tree = _this.treeUtils.buildTree(groups);
                if (object.group_id) {
                    _this.selectedNode = _this.treeUtils.findTreeNode(_this.tree, object.group_id);
                }
            });
            var detailComponent = question_decorator_1.QuestionRegister.Instance.lookup(object.type);
            var viewContainerRef = _this.questionHost.viewContainerRef;
            if (detailComponent) {
                var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(detailComponent);
                viewContainerRef.clear();
                _this.componentRef = viewContainerRef.createComponent(componentFactory);
                _this.componentRef.instance.mode = 'edit';
                _this.componentRef.instance.render(object);
            }
            else {
                viewContainerRef.clear();
                _this.componentRef = null;
            }
        });
        this.onUpdateComplete.subscribe(function (object) {
            if (_this.componentRef)
                _this.componentRef.instance.saveEditor().subscribe(function () {
                    _this.messageService.add({ severity: 'success', summary: 'Success', detail: _this.translateService.instant('Question saved.') });
                });
        });
    };
    __decorate([
        core_1.ViewChild(question_container_directive_1.QuestionContainerDirective),
        __metadata("design:type", question_container_directive_1.QuestionContainerDirective)
    ], QuestionDialog.prototype, "questionHost", void 0);
    QuestionDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-question-dialog',
            template: "<form novalidate (ngSubmit)=\"f.form.valid && save()\" #f=\"ngForm\"  autocomplete=\"off\">   <p-dialog header=\"{{'Question'|translate}}\" [(visible)]=\"display\" modal=\"true\" width=\"800\" [responsive]=\"true\">     <p-scrollPanel [style]=\"{width: '100%', height: '480px'}\">       <p-tabView>       <p-tabPanel header=\"{{'General'|translate}}\" leftIcon=\"ui-icon-info\">     <div class=\"ui-g ui-fluid form-group\">       <div class=\"ui-g-12\">         <label>{{'Group'|translate}}</label>         <p-tree [value]=\"tree\" selectionMode=\"single\" required [(selection)]=\"selectedNode\" (onNodeSelect)=\"nodeSelect($event)\"></p-tree>       </div>       <div class=\"ui-g-6\">         <label>{{'Title'|translate}}</label>         <textarea pInputTextarea [(ngModel)]=\"object.title\" #title=\"ngModel\" required name=\"title\"></textarea>         <div *ngIf=\"title.invalid && (title.dirty || title.touched)\"           class=\"ui-message ui-messages-error ui-corner-all\">             <div *ngIf=\"title.errors.required\">                 {{'Title is required' | translate}}             </div>         </div>       </div>       <div class=\"ui-g-6\">         <label>{{'Level'|translate}}</label>         <div style=\"margin-top: 20px;\">           <div style=\"float: left;\">             <p-radioButton name=\"mode\" value=\"easy\" [disabled]=\"object.id\" label=\"{{'Easy'|translate}}\" [(ngModel)]=\"object.mode\" inputId=\"opt1\"></p-radioButton>           </div>           <div style=\"float: left; margin-left:30px\">             <p-radioButton name=\"mode\" value=\"medium\" [disabled]=\"object.id\" label=\"{{'Medium'|translate}}\" [(ngModel)]=\"object.mode\" inputId=\"opt2\"></p-radioButton>           </div>           <div style=\"float: left; margin-left:30px\">             <p-radioButton name=\"mode\" value=\"difficult\" [disabled]=\"object.id\" label=\"{{'Difficult'|translate}}\" [(ngModel)]=\"object.mode\" inputId=\"opt3\"></p-radioButton>           </div>         </div>       </div>     </div>   </p-tabPanel>   <p-tabPanel header=\"{{'Details'|translate}}\" leftIcon=\"ui-icon-details\" [hidden]=\"!componentRef\">       <ng-template question-container></ng-template>   </p-tabPanel> </p-tabView> </p-scrollPanel>     <p-footer>       <button type=\"submit\" pButton icon=\"fa-check\" label=\"{{'Save'|translate}}\"></button>       <button type=\"button\" pButton icon=\"fa-close\" (click)=\"hide()\" label=\"{{'Close'|translate}}\"></button>     </p-footer>   </p-dialog> </form>",
        }),
        __metadata("design:paramtypes", [tree_utils_1.TreeUtils, core_1.ComponentFactoryResolver])
    ], QuestionDialog);
    return QuestionDialog;
}(base_dialog_1.BaseDialog));
exports.QuestionDialog = QuestionDialog;
