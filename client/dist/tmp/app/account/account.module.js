"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_module_1 = require("../auth/auth.module");
var shared_module_1 = require("../shared/shared.module");
var user_list_component_1 = require("./user/user-list/user-list.component");
var user_dialog_component_1 = require("./user/user-dialog/user-dialog.component");
var export_dialog_component_1 = require("./user/export-dialog/export-dialog.component");
var import_dialog_component_1 = require("./user/import-dialog/import-dialog.component");
var profile_dialog_component_1 = require("./user/profile-dialog/profile-dialog.component");
var AccountModule = (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.ErpSharedModule, auth_module_1.AuthModule],
            declarations: [user_list_component_1.UserListComponent, user_dialog_component_1.UserDialog,
                export_dialog_component_1.UserExportDialog, import_dialog_component_1.UserImportDialog, profile_dialog_component_1.UserProfileDialog],
            exports: [profile_dialog_component_1.UserProfileDialog],
            providers: []
        })
    ], AccountModule);
    return AccountModule;
}());
exports.AccountModule = AccountModule;
