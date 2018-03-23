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
var _ = require("underscore");
var tree_utils_1 = require("../../../shared/helpers/tree.utils");
var constants_1 = require("../../../shared/models/constants");
var select_user_dialog_component_1 = require("../../../shared/components/select-user-dialog/select-user-dialog.component");
var CourseDialog = (function (_super) {
    __extends(CourseDialog, _super);
    function CourseDialog(treeUtils) {
        var _this = _super.call(this) || this;
        _this.treeUtils = treeUtils;
        _this.courseStatus = _.map(constants_1.COURSE_STATUS, function (val, key) {
            return {
                label: val,
                value: key
            };
        });
        return _this;
    }
    CourseDialog.prototype.nodeSelect = function (event) {
        if (this.selectedNode) {
            this.object.group_id = this.selectedNode.data.id;
        }
    };
    CourseDialog.prototype.selectAuthor = function () {
        var _this = this;
        this.usersDialog.show();
        this.usersDialog.onSelectUsers.subscribe(function (users) {
            if (users.length > 1) {
                _this.messageService.add({ severity: 'error', summary: 'Error', detail: _this.translateService.instant('You can select only one author.') });
                return;
            }
            else if (users.length == 1) {
                var author = users[0];
                _this.object.author_id = author.id;
                _this.object.author_name = author.name;
            }
        });
    };
    CourseDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.onShow.subscribe(function (object) {
            group_model_1.Group.listByCategory(_this, constants_1.GROUP_CATEGORY.COURSE).subscribe(function (groups) {
                _this.tree = _this.treeUtils.buildTree(groups);
                if (object.group_id) {
                    _this.selectedNode = _this.treeUtils.findTreeNode(_this.tree, object.group_id);
                }
            });
        });
    };
    __decorate([
        core_1.ViewChild(select_user_dialog_component_1.SelectUsersDialog),
        __metadata("design:type", select_user_dialog_component_1.SelectUsersDialog)
    ], CourseDialog.prototype, "usersDialog", void 0);
    CourseDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-course-dialog',
            template: "<p-dialog header=\"{{'Course'|translate}}\" [(visible)]=\"display\" modal=\"false\" width=\"960\" height=\"100%\" [responsive]=\"true\">   <p-scrollPanel [style]=\"{width: '100%', height: '520px'}\">     <form novalidate (ngSubmit)=\"f.form.valid && save()\" #f=\"ngForm\"  autocomplete=\"off\">       <div class=\"ui-g ui-fluid form-group\">         <div class=\"ui-g-12\">           <p-selectButton [options]=\"courseStatus\" [(ngModel)]=\"object.status\" name=\"status\"></p-selectButton>         </div>         <div class=\"ui-g-12\">           <label>{{'Parent group'|translate}}</label>           <p-tree [value]=\"tree\" selectionMode=\"single\" [(selection)]=\"selectedNode\" (onNodeSelect)=\"nodeSelect($event)\"></p-tree>         </div>         <div class=\"ui-g-6\">           <span class=\"md-inputfield\">             <input type=\"text\" pInputText [(ngModel)]=\"object.name\" #name=\"ngModel\" name=\"name\" required>             <label>{{'Name'|translate}}</label>             <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"               class=\"ui-message ui-messages-error ui-corner-all\">                 <div *ngIf=\"name.errors.required\">                     {{'Name is required' | translate}}                 </div>             </div>           </span>         </div>         <div class=\"ui-g-6\">           <span class=\"md-inputfield\">             <input type=\"text\" pInputText [(ngModel)]=\"object.code\" #code=\"ngModel\" name=\"code\" required>             <label>{{'Code'|translate}}</label>             <div *ngIf=\"code.invalid && (code.dirty || code.touched)\"                class=\"ui-message ui-messages-error ui-corner-all\">               <div *ngIf=\"code.errors.required\">                   {{'Code is required' | translate}}               </div>             </div>           </span>         </div>         <div class=\"ui-g-12 \">           <label>{{'Summary'|translate}}</label>           <textarea pInputTextarea [(ngModel)]=\"object.summary\" name=\"summary\"></textarea>         </div>         <div class=\"ui-g-12 \">           <label>{{'Description'|translate}}</label>           <textarea pInputTextarea [(ngModel)]=\"object.description\" name=\"description\"></textarea>         </div>         <div class=\"ui-g-12 \">           <div class=\"ui-g-6\">             <label>{{'Logo'|translate}}</label>             <image-base64 [(src64)]=\"object.logo\"></image-base64>           </div>           <div class=\"ui-g-6\" style=\"margin-bottom:10px\">             <label>{{'Mode'|translate}}</label>             <div style=\"margin-bottom:10px\">               <p-radioButton name=\"mode\" value=\"self-study\" [disabled]=\"object.id\" label=\"{{'Self-study'|translate}}\" [(ngModel)]=\"object.mode\" inputId=\"opt1\"></p-radioButton>             </div>             <div style=\"margin-bottom:10px\">               <p-radioButton name=\"mode\" value=\"group\" [disabled]=\"object.id\" label=\"{{'Group study'|translate}}\" [(ngModel)]=\"object.mode\" inputId=\"opt2\"></p-radioButton>             </div>           </div>         </div>       </div>     </form>     <div class=\"ui-g ui-fluid form-group\">       <div class=\"ui-g-6\">         <button type=\"buton\" pButton icon=\"ui-icon-change-history\" label=\"{{object.author_id?translateService.instant('Author') +':'+ object.author_name:translateService.instant('Select author')}}\" (click)=\"selectAuthor()\"></button>       </div>     </div>     <etraining-select-user-dialog></etraining-select-user-dialog>   </p-scrollPanel>   <p-footer>     <button type=\"button\" pButton icon=\"fa-check\" label=\"{{'Save'|translate}}\" (click)=\"f.ngSubmit.emit()\"></button>     <button type=\"button\" pButton icon=\"fa-close\" (click)=\"hide()\" label=\"{{'Close'|translate}}\"></button>   </p-footer> </p-dialog>",
        }),
        __metadata("design:paramtypes", [tree_utils_1.TreeUtils])
    ], CourseDialog);
    return CourseDialog;
}(base_dialog_1.BaseDialog));
exports.CourseDialog = CourseDialog;
