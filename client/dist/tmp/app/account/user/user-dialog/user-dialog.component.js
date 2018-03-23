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
var UserDialog = (function (_super) {
    __extends(UserDialog, _super);
    function UserDialog(treeUtils) {
        var _this = _super.call(this) || this;
        _this.treeUtils = treeUtils;
        return _this;
    }
    UserDialog.prototype.nodeSelect = function (event) {
        if (this.selectedNode) {
            this.object.etraining_group_id = this.selectedNode.data.id;
        }
    };
    UserDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.onShow.subscribe(function (object) {
            group_model_1.Group.listByCategory(_this, constants_1.GROUP_CATEGORY.USER).subscribe(function (groups) {
                _this.tree = _this.treeUtils.buildTree(groups);
                if (object.etraining_group_id) {
                    _this.selectedNode = _this.treeUtils.findTreeNode(_this.tree, object.etraining_group_id);
                }
            });
        });
    };
    UserDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-user-dialog',
            template: "<form novalidate (ngSubmit)=\"f.form.valid && save()\" #f=\"ngForm\" autocomplete=\"off\"> <p-dialog header=\"{{'User account'|translate}}\" [(visible)]=\"display\" modal=\"true\" width=\"600\" [responsive]=\"true\">     <div class=\"ui-g ui-fluid form-group\">       <div class=\"ui-g-12\">         <label>{{'Parent group'|translate}}</label>         <p-tree [value]=\"tree\" selectionMode=\"single\" [(selection)]=\"selectedNode\" (onNodeSelect)=\"nodeSelect($event)\"></p-tree>       </div>       <div class=\"ui-g-12 \">         <span class=\"md-inputfield\">             <input type=\"text\" pInputText [(ngModel)]=\"object.name\" #name=\"ngModel\" name=\"name\" required>             <label>{{'Name'|translate}}</label>             <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"               class=\"ui-message ui-messages-error ui-corner-all\">                 <div *ngIf=\"name.errors.required\">                     {{'Name is required' | translate}}                 </div>             </div>         </span>       </div>       <div class=\"ui-g-6\">         <span class=\"md-inputfield\">             <input type=\"text\" pInputText [(ngModel)]=\"object.login\" #login=\"ngModel\" name=\"login\" required>             <label>{{'Login'|translate}}</label>             <div *ngIf=\"login.invalid && (login.dirty || login.touched)\"               class=\"ui-message ui-messages-error ui-corner-all\">                 <div *ngIf=\"login.errors.required\">                     {{'Login is required' | translate}}                 </div>             </div>         </span>       </div>       <div class=\"ui-g-6\">           <span class=\"md-inputfield\">               <input type=\"password\" pPassword [(ngModel)]=\"object.password\" #password=\"ngModel\" name=\"password\" required>               <label>{{'Password'|translate}}</label>               <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"               class=\"ui-message ui-messages-error ui-corner-all\">                 <div *ngIf=\"password.errors.required\">                     {{'Password is required' | translate}}                 </div>             </div>           </span>       </div>        <div class=\"ui-g-6\">         <span class=\"md-inputfield\">             <input type=\"text\" pInputText [(ngModel)]=\"object.email\" name=\"email\">             <label>{{'Email'|translate}}</label>         </span>       </div>        <div class=\"ui-g-6\">         <span class=\"md-inputfield\">             <input type=\"text\" pInputText [(ngModel)]=\"object.phone\" name=\"phone\">             <label>{{'Phone'|translate}}</label>         </span>       </div>        <div class=\"ui-g-12\">         <p-checkbox name=\"admin\" binary=\"true\" label=\"{{'Admin user'|translate}}\" [(ngModel)]=\"object.is_admin\"></p-checkbox>       </div>       <div class=\"ui-g-12\">         <p-checkbox name=\"banned\" binary=\"true\" label=\"{{'Banned from access'|translate}}\" [(ngModel)]=\"object.banned\"></p-checkbox>       </div>     </div>     <p-footer>       <button type=\"submit\" pButton icon=\"fa-check\" label=\"{{'Save'|translate}}\"></button>       <button type=\"button\" pButton icon=\"fa-close\" (click)=\"hide()\" label=\"{{'Close'|translate}}\"></button>     </p-footer> </p-dialog>  </form>",
        }),
        __metadata("design:paramtypes", [tree_utils_1.TreeUtils])
    ], UserDialog);
    return UserDialog;
}(base_dialog_1.BaseDialog));
exports.UserDialog = UserDialog;
