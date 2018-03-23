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
var user_dialog_component_1 = require("./user/user-dialog/user-dialog.component");
var export_dialog_component_1 = require("./user/export-dialog/export-dialog.component");
var import_dialog_component_1 = require("./user/import-dialog/import-dialog.component");
var profile_dialog_component_1 = require("./user/profile-dialog/profile-dialog.component");
var user_list_component_1 = require("./user/admin-user-list/user-list.component");
var user_list_component_2 = require("./user/student-user-list/user-list.component");
var user_list_component_3 = require("./user/teacher-user-list/user-list.component");
var AccountModule = (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.ErpSharedModule, auth_module_1.AuthModule],
            declarations: [user_list_component_1.AdminUserListComponent, user_list_component_2.StudentUserListComponent, user_list_component_3.TeacherUserListComponent, user_dialog_component_1.UserDialog,
                export_dialog_component_1.UserExportDialog, import_dialog_component_1.UserImportDialog, profile_dialog_component_1.UserProfileDialog],
            exports: [profile_dialog_component_1.UserProfileDialog],
            providers: []
        })
    ], AccountModule);
    return AccountModule;
}());
exports.AccountModule = AccountModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hY2NvdW50L2FjY291bnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLG1EQUFpRDtBQUNqRCx5REFBMEQ7QUFDMUQsa0ZBQXNFO0FBQ3RFLHdGQUFnRjtBQUNoRix3RkFBZ0Y7QUFDaEYsMkZBQW1GO0FBQ25GLGtGQUFvRjtBQUNwRixvRkFBd0Y7QUFDeEYsb0ZBQXdGO0FBU3hGO0lBQUE7SUFDQSxDQUFDO0lBRFksYUFBYTtRQVB6QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQywrQkFBZSxFQUFFLHdCQUFVLENBQUM7WUFDdEMsWUFBWSxFQUFFLENBQUUsNENBQXNCLEVBQUUsOENBQXdCLEVBQUMsOENBQXdCLEVBQUUsa0NBQVU7Z0JBQ2pHLDBDQUFnQixFQUFDLDBDQUFnQixFQUFDLDRDQUFpQixDQUFDO1lBQ3hELE9BQU8sRUFBRSxDQUFDLDRDQUFpQixDQUFDO1lBQzVCLFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQUM7T0FDVyxhQUFhLENBQ3pCO0lBQUQsb0JBQUM7Q0FERCxBQUNDLElBQUE7QUFEWSxzQ0FBYSIsImZpbGUiOiJhcHAvYWNjb3VudC9hY2NvdW50Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoTW9kdWxlIH0gZnJvbSAnLi4vYXV0aC9hdXRoLm1vZHVsZSc7XG5pbXBvcnQgeyBFcnBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBVc2VyRGlhbG9nIH0gZnJvbSAnLi91c2VyL3VzZXItZGlhbG9nL3VzZXItZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyRXhwb3J0RGlhbG9nIH0gZnJvbSAnLi91c2VyL2V4cG9ydC1kaWFsb2cvZXhwb3J0LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlckltcG9ydERpYWxvZyB9IGZyb20gJy4vdXNlci9pbXBvcnQtZGlhbG9nL2ltcG9ydC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJQcm9maWxlRGlhbG9nIH0gZnJvbSAnLi91c2VyL3Byb2ZpbGUtZGlhbG9nL3Byb2ZpbGUtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pblVzZXJMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi91c2VyL2FkbWluLXVzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFN0dWRlbnRVc2VyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vdXNlci9zdHVkZW50LXVzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFRlYWNoZXJVc2VyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vdXNlci90ZWFjaGVyLXVzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbRXJwU2hhcmVkTW9kdWxlLCBBdXRoTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFsgQWRtaW5Vc2VyTGlzdENvbXBvbmVudCwgU3R1ZGVudFVzZXJMaXN0Q29tcG9uZW50LFRlYWNoZXJVc2VyTGlzdENvbXBvbmVudCwgVXNlckRpYWxvZyxcbiAgICBcdFx0XHRcdFVzZXJFeHBvcnREaWFsb2csVXNlckltcG9ydERpYWxvZyxVc2VyUHJvZmlsZURpYWxvZ10sXG4gICAgZXhwb3J0czogW1VzZXJQcm9maWxlRGlhbG9nXSxcbiAgICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEFjY291bnRNb2R1bGUge1xufVxuIl19
