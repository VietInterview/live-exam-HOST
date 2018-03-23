"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setting_app_component_1 = require("./application/setting-app.component");
var setting_mail_component_1 = require("./mail/setting-mail.component");
var setting_component_1 = require("./setting.component");
var admin_guard_1 = require("../shared/guards/admin.guard");
exports.SettingRoutes = [
    {
        path: "setting",
        component: setting_component_1.SettingComponent,
        canActivate: [admin_guard_1.AdminGuard],
        data: {
            breadcrumb: 'Setting'
        },
        children: [
            {
                path: "app",
                component: setting_app_component_1.SettingAppComponent,
                data: {
                    breadcrumb: 'Application'
                }
            },
            {
                path: "mail",
                component: setting_mail_component_1.SettingMailComponent,
                data: {
                    breadcrumb: 'Mail'
                }
            }
        ]
    }
];
