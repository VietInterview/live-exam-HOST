"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var home_component_1 = require("./home.component");
var home_routing_module_1 = require("./home-routing.module");
var shared_module_1 = require("../shared/shared.module");
var change_password_dialog_component_1 = require("./change-password-dialog/change-password-dialog.component");
var side_menu_component_1 = require("./side-menu/side-menu.component");
var sub_menu_component_1 = require("./side-menu/sub-menu.component");
var footer_component_1 = require("./footer/footer.component");
var navbar_component_1 = require("./navbar/navbar.component");
var home_manager_service_1 = require("./home-manager.service");
var account_module_1 = require("../account/account.module");
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule_1 = HomeModule;
    HomeModule.forRoot = function () {
        return {
            ngModule: HomeModule_1,
            providers: [home_manager_service_1.HomeEventManager]
        };
    };
    HomeModule = HomeModule_1 = __decorate([
        core_1.NgModule({
            imports: [home_routing_module_1.HomeRoutingModule, shared_module_1.ErpSharedModule, account_module_1.AccountModule],
            declarations: [home_component_1.HomeComponent, navbar_component_1.NavbarComponent, side_menu_component_1.SideMenuComponent,
                footer_component_1.FooterComponent, sub_menu_component_1.SubMenuComponent, change_password_dialog_component_1.ChangePasswordDialog],
            exports: [],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
    var HomeModule_1;
}());
exports.HomeModule = HomeModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQThEO0FBQzlELG1EQUFpRDtBQUNqRCw2REFBMEQ7QUFDMUQseURBQTBEO0FBRzFELDhHQUFpRztBQUNqRyx1RUFBb0U7QUFDcEUscUVBQWtFO0FBQ2xFLDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFDNUQsK0RBQTBEO0FBQzFELDREQUEwRDtBQVUxRDtJQUFBO0lBT0EsQ0FBQzttQkFQWSxVQUFVO0lBQ1osa0JBQU8sR0FBZDtRQUNJLE1BQU0sQ0FBQztZQUNOLFFBQVEsRUFBRSxZQUFVO1lBQ2pCLFNBQVMsRUFBRSxDQUFDLHVDQUFnQixDQUFDO1NBQ2hDLENBQUE7SUFDTCxDQUFDO0lBTlEsVUFBVTtRQVJ0QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBRSx1Q0FBaUIsRUFBRSwrQkFBZSxFQUFFLDhCQUFhLENBQUU7WUFDOUQsWUFBWSxFQUFFLENBQUUsOEJBQWEsRUFBRSxrQ0FBZSxFQUFFLHVDQUFpQjtnQkFDakUsa0NBQWUsRUFBQyxxQ0FBZ0IsRUFBQyx1REFBb0IsQ0FBRTtZQUN2RCxPQUFPLEVBQUUsRUFBRTtZQUNYLFNBQVMsRUFBRSxFQUFHO1NBQ2YsQ0FBQztPQUVXLFVBQVUsQ0FPdEI7SUFBRCxpQkFBQzs7Q0FQRCxBQU9DLElBQUE7QUFQWSxnQ0FBVSIsImZpbGUiOiJhcHAvaG9tZS9ob21lLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gJy4vaG9tZS1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBFcnBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuLi9zaGFyZWQvZ3VhcmRzL2F1dGguZ3VhcmQnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkRGlhbG9nIH0gZnJvbSAnLi9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGVNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9zaWRlLW1lbnUvc3ViLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lRXZlbnRNYW5hZ2VyIH0gZnJvbSAnLi9ob21lLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBY2NvdW50TW9kdWxlIH0gZnJvbSAnLi4vYWNjb3VudC9hY2NvdW50Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsgSG9tZVJvdXRpbmdNb2R1bGUsIEVycFNoYXJlZE1vZHVsZSwgQWNjb3VudE1vZHVsZSBdLFxuICBkZWNsYXJhdGlvbnM6IFsgSG9tZUNvbXBvbmVudCwgTmF2YmFyQ29tcG9uZW50LCBTaWRlTWVudUNvbXBvbmVudCwgXG4gIEZvb3RlckNvbXBvbmVudCxTdWJNZW51Q29tcG9uZW50LENoYW5nZVBhc3N3b3JkRGlhbG9nIF0sXG4gIGV4cG9ydHM6IFtdLFxuICBwcm92aWRlcnM6IFsgXVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICBcdG5nTW9kdWxlOiBIb21lTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbSG9tZUV2ZW50TWFuYWdlcl1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4iXX0=
