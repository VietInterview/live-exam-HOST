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
var chart_container_directive_1 = require("./chart-container.directive");
var course_activity_chart_component_1 = require("./chart/course-activity-chart/course-activity-chart.component");
var statistics_utils_1 = require("../shared/helpers/statistics.utils");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.ErpSharedModule],
            declarations: [
                dashboard_component_1.DashboardComponent,
                admin_dashboard_component_1.AdminDashboardComponent,
                user_dashboard_component_1.UserDashboardComponent,
                chart_container_directive_1.ChartContainerDirective,
                course_activity_chart_component_1.CourseActivityChartComponent
            ],
            exports: [dashboard_component_1.DashboardComponent],
            entryComponents: [course_activity_chart_component_1.CourseActivityChartComponent],
            providers: [statistics_utils_1.StatsUtils]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
