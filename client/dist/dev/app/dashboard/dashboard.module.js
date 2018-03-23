"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_module_1 = require("../shared/shared.module");
var admin_dashboard_component_1 = require("./admin-dashboard/admin-dashboard.component");
var user_dashboard_component_1 = require("./user-dashboard/user-dashboard.component");
var dashboard_component_1 = require("./dashboard.component");
var assessment_module_1 = require("../assessment/assessment.module");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.ErpSharedModule, assessment_module_1.AssessmentModule],
            declarations: [
                dashboard_component_1.DashboardComponent,
                admin_dashboard_component_1.AdminDashboardComponent,
                user_dashboard_component_1.UserDashboardComponent
            ],
            exports: [dashboard_component_1.DashboardComponent],
            providers: []
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6Qyx5REFBMEQ7QUFDMUQseUZBQXNGO0FBQ3RGLHNGQUFtRjtBQUNuRiw2REFBMEQ7QUFDMUQscUVBQW1FO0FBV25FO0lBQUE7SUFDQSxDQUFDO0lBRFksZUFBZTtRQVQzQixlQUFRLENBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBQywrQkFBZSxFQUFFLG9DQUFnQixDQUFDO1lBQzVDLFlBQVksRUFBRTtnQkFDYix3Q0FBa0I7Z0JBQ2xCLG1EQUF1QjtnQkFDdkIsaURBQXNCO2FBQUM7WUFDeEIsT0FBTyxFQUFFLENBQUMsd0NBQWtCLENBQUM7WUFDN0IsU0FBUyxFQUFFLEVBQUU7U0FDYixDQUFDO09BQ1csZUFBZSxDQUMzQjtJQUFELHNCQUFDO0NBREQsQUFDQyxJQUFBO0FBRFksMENBQWUiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVycFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IEFkbWluRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9hZG1pbi1kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi91c2VyLWRhc2hib2FyZC91c2VyLWRhc2hib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQuY29tcG9uZW50J1xuaW1wb3J0IHsgQXNzZXNzbWVudE1vZHVsZSB9IGZyb20gJy4uL2Fzc2Vzc21lbnQvYXNzZXNzbWVudC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbRXJwU2hhcmVkTW9kdWxlLCBBc3Nlc3NtZW50TW9kdWxlXSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0RGFzaGJvYXJkQ29tcG9uZW50LCBcblx0XHRBZG1pbkRhc2hib2FyZENvbXBvbmVudCwgXG5cdFx0VXNlckRhc2hib2FyZENvbXBvbmVudF0sXG5cdGV4cG9ydHM6IFtEYXNoYm9hcmRDb21wb25lbnRdLFxuXHRwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZE1vZHVsZSB7XG59XG4iXX0=
