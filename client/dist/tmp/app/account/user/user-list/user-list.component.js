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
var user_model_1 = require("../../../shared/models/user.model");
var group_model_1 = require("../../../shared/models/group.model");
var user_dialog_component_1 = require("../user-dialog/user-dialog.component");
var export_dialog_component_1 = require("../export-dialog/export-dialog.component");
var import_dialog_component_1 = require("../import-dialog/import-dialog.component");
var profile_dialog_component_1 = require("../profile-dialog/profile-dialog.component");
var tree_utils_1 = require("../../../shared/helpers/tree.utils");
var UserListComponent = (function (_super) {
    __extends(UserListComponent, _super);
    function UserListComponent(treeUtils) {
        var _this = _super.call(this) || this;
        _this.treeUtils = treeUtils;
        _this.filterGroups = [];
        return _this;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        group_model_1.Group.listByCategory(this, constants_1.GROUP_CATEGORY.USER).subscribe(function (groups) {
            _this.tree = _this.treeUtils.buildTree(groups);
        });
        this.loadUsers();
    };
    UserListComponent.prototype.add = function () {
        var _this = this;
        var user = new user_model_1.User();
        this.userDialog.show(user);
        this.userDialog.onCreateComplete.subscribe(function () {
            _this.loadUsers();
        });
    };
    UserListComponent.prototype.showProfile = function () {
        var _this = this;
        if (this.selectedUser)
            this.userProfileDialog.show(this.selectedUser);
        this.userProfileDialog.onUpdateComplete.subscribe(function () {
            _this.loadUsers();
        });
    };
    UserListComponent.prototype.delete = function () {
        var _this = this;
        if (this.selectedUser)
            this.confirmationService.confirm({
                message: this.translateService.instant('Are you sure to delete ?'),
                accept: function () {
                    _this.selectedUser.delete(_this).subscribe(function () {
                        _this.loadUsers();
                        _this.selectedUser = null;
                    });
                }
            });
    };
    UserListComponent.prototype.export = function () {
        this.userExportDialog.show(this.users);
    };
    UserListComponent.prototype.import = function () {
        var _this = this;
        this.userImportDialog.show();
        this.userImportDialog.onImportComplete.subscribe(function () {
            _this.loadUsers();
        });
    };
    UserListComponent.prototype.loadUsers = function () {
        var _this = this;
        user_model_1.User.all(this).subscribe(function (users) {
            _this.users = users;
        });
    };
    __decorate([
        core_1.ViewChild(user_dialog_component_1.UserDialog),
        __metadata("design:type", user_dialog_component_1.UserDialog)
    ], UserListComponent.prototype, "userDialog", void 0);
    __decorate([
        core_1.ViewChild(export_dialog_component_1.UserExportDialog),
        __metadata("design:type", export_dialog_component_1.UserExportDialog)
    ], UserListComponent.prototype, "userExportDialog", void 0);
    __decorate([
        core_1.ViewChild(import_dialog_component_1.UserImportDialog),
        __metadata("design:type", import_dialog_component_1.UserImportDialog)
    ], UserListComponent.prototype, "userImportDialog", void 0);
    __decorate([
        core_1.ViewChild(profile_dialog_component_1.UserProfileDialog),
        __metadata("design:type", profile_dialog_component_1.UserProfileDialog)
    ], UserListComponent.prototype, "userProfileDialog", void 0);
    UserListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-user-list',
            template: "<div class=\"card card-w-title\">     <h1>{{'Users'|translate}}</h1>     <div class=\"ui-g\">       <div class=\"ui-g-12\">         <label>{{'Organization'|translate}}</label>         <p-tree [value]=\"tree\" selectionMode=\"checkbox\" [(selection)]=\"selectedGroupNodes\" ></p-tree>       </div>         <div class=\"ui-g-12\">             <p-toolbar>                 <div class=\"ui-toolbar-group-left\">                     <button pButton type=\"button\" label=\"{{'New'|translate}}\" class=\"green-btn\" (click)=\"add()\" icon=\"ui-icon-add\"></button>                     <button pButton type=\"button\" label=\"{{'Edit'|translate}}\" class=\"purple-btn\" icon=\"ui-icon-mode-edit\" (click)=\"showProfile()\" [disabled]=\"!selectedUser\"></button>                     <button pButton type=\"button\" label=\"{{'Delete'|translate}}\" class=\"red-btn\" icon=\"ui-icon-delete\" (click)=\"delete()\" [disabled]=\"!selectedUser\"></button>                                      </div>                 <div class=\"ui-toolbar-group-right\">                     <button pButton type=\"button\" label=\"{{'Export'|translate}}\"  class=\"purple-btn\" icon=\"ui-icon-file-download\" (click)=\"export()\"></button>                     <button pButton type=\"button\" label=\"{{'Import'|translate}}\"  class=\"purple-btn\" icon=\"ui-icon-file-upload\" (click)=\"import()\"></button>                 </div>             </p-toolbar>             <p-table #userTable [value]=\"users | groups:selectedGroupNodes\" [paginator]=\"true\" [rows]=\"10\" selectionMode=\"single\" [(selection)]=\"selectedUser\" [responsive]=\"true\">                 <ng-template pTemplate=\"header\">                     <tr>                         <th [pSortableColumn]=\"'name'\">                             {{'Name'|translate}}                             <p-sortIcon [field]=\"'name'\"></p-sortIcon>                         </th>                         <th [pSortableColumn]=\"'login'\">                             {{'Login'|translate}}                             <p-sortIcon [field]=\"'login'\"></p-sortIcon>                         </th>                         <th [pSortableColumn]=\"'email'\">                             {{'Email'|translate}}                             <p-sortIcon [field]=\"'email'\"></p-sortIcon>                         </th>                         <th>{{'Phone'|translate}}</th>                         <th [pSortableColumn]=\"'etraining_group_id__DESC__'\">                             {{'Group'|translate}}                             <p-sortIcon [field]=\"'etraining_group_id__DESC__'\"></p-sortIcon>                         </th>                     </tr>                 </ng-template>                 <ng-template pTemplate=\"body\" let-user>                     <tr [pSelectableRow]=\"user\">                         <td>{{user.name}}</td>                         <td>{{user.login}}</td>                         <td>{{user.email}}</td>                         <td>{{user.phone}}</td>                         <td>{{user.etraining_group_id__DESC__}}</td>                     </tr>                 </ng-template>                 <ng-template pTemplate=\"summary\">                     {{'Total records'|translate}} : {{users?.length}}                 </ng-template>                 <ng-template pTemplate=\"emptymessage\">                     <tr>                         <td [attr.colspan]=\"5\">                             {{'No records found'|translate}}                         </td>                     </tr>                 </ng-template>             </p-table>             <etraining-user-dialog></etraining-user-dialog>             <etraining-user-export-dialog></etraining-user-export-dialog>             <etraining-user-import-dialog></etraining-user-import-dialog>             <etraining-user-profile-dialog></etraining-user-profile-dialog>         </div>     </div> </div>",
            styles: [".mrg-bt{margin-bottom:15px}"],
        }),
        __metadata("design:paramtypes", [tree_utils_1.TreeUtils])
    ], UserListComponent);
    return UserListComponent;
}(base_component_1.BaseComponent));
exports.UserListComponent = UserListComponent;
