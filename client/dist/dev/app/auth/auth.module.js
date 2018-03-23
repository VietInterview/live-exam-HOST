"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var login_component_1 = require("./login/login.component");
var recover_password_component_1 = require("./recover/recover-password.component");
var shared_module_1 = require("../shared/shared.module");
var auth_routing_module_1 = require("./auth-routing.module");
var core_1 = require("@angular/core");
var auth_component_1 = require("./auth.component");
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, auth_routing_module_1.AuthRoutingModule, shared_module_1.ErpSharedModule],
            declarations: [login_component_1.LoginComponent, recover_password_component_1.RecoverPasswordComponent, auth_component_1.AuthComponent],
            exports: []
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2F1dGgubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsMENBQStDO0FBQy9DLDJEQUF5RDtBQUN6RCxtRkFBZ0Y7QUFDaEYseURBQTBEO0FBQzFELDZEQUEwRDtBQUMxRCxzQ0FBOEQ7QUFDOUQsbURBQWlEO0FBT2pEO0lBQUE7SUFFQSxDQUFDO0lBRlksVUFBVTtRQUx0QixlQUFRLENBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLHVDQUFpQixFQUFFLCtCQUFlLENBQUM7WUFDM0QsWUFBWSxFQUFFLENBQUMsZ0NBQWMsRUFBRSxxREFBd0IsRUFBRSw4QkFBYSxDQUFDO1lBQ3ZFLE9BQU8sRUFBRSxFQUFFO1NBQ1gsQ0FBQztPQUNXLFVBQVUsQ0FFdEI7SUFBRCxpQkFBQztDQUZELEFBRUMsSUFBQTtBQUZZLGdDQUFVIiwiZmlsZSI6ImFwcC9hdXRoL2F1dGgubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVjb3ZlclBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9yZWNvdmVyL3JlY292ZXItcGFzc3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IEVycFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IEF1dGhSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hdXRoLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEF1dGhSb3V0aW5nTW9kdWxlLCBFcnBTaGFyZWRNb2R1bGVdLFxuXHRkZWNsYXJhdGlvbnM6IFtMb2dpbkNvbXBvbmVudCwgUmVjb3ZlclBhc3N3b3JkQ29tcG9uZW50LCBBdXRoQ29tcG9uZW50XSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgQXV0aE1vZHVsZSB7XG5cbn1cbiJdfQ==
