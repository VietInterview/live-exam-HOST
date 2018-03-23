"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var auth_guard_1 = require("../shared/guards/auth.guard");
var account_routing_1 = require("../account/account-routing");
var assessment_routing_1 = require("../assessment/assessment-routing");
var report_routing_1 = require("../report/report-routing");
var lms_routing_1 = require("../lms/lms-routing");
var dashboard_routing_1 = require("../dashboard/dashboard-routing");
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: home_component_1.HomeComponent,
                        canActivate: [auth_guard_1.AuthGuard],
                        children: dashboard_routing_1.DashboardRoutes.concat(account_routing_1.AccountRoutes, assessment_routing_1.AssessmentRoutes, report_routing_1.ReportRoutes, lms_routing_1.LMSRoutes)
                    },
                    { path: '**', redirectTo: '' }
                ])
            ],
            exports: [router_1.RouterModule]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());
exports.HomeRoutingModule = HomeRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLG1EQUFpRDtBQUNqRCwwREFBd0Q7QUFDeEQsOERBQTJEO0FBQzNELHVFQUFvRTtBQUNwRSwyREFBd0Q7QUFDeEQsa0RBQStDO0FBQy9DLG9FQUFpRTtBQXNCakU7SUFBQTtJQUNBLENBQUM7SUFEWSxpQkFBaUI7UUFwQjdCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBWSxDQUFDLFFBQVEsQ0FBQztvQkFDcEI7d0JBQ0UsSUFBSSxFQUFFLEVBQUU7d0JBQ1IsU0FBUyxFQUFFLDhCQUFhO3dCQUN4QixXQUFXLEVBQUUsQ0FBQyxzQkFBUyxDQUFDO3dCQUN4QixRQUFRLEVBQ0gsbUNBQWUsUUFDZiwrQkFBYSxFQUNiLHFDQUFnQixFQUNoQiw2QkFBWSxFQUNaLHVCQUFTLENBQ2I7cUJBQ0Y7b0JBQ0QsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUM7aUJBQzdCLENBQUM7YUFDSDtZQUNELE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7U0FDeEIsQ0FBQztPQUNXLGlCQUFpQixDQUM3QjtJQUFELHdCQUFDO0NBREQsQUFDQyxJQUFBO0FBRFksOENBQWlCIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4uL3NoYXJlZC9ndWFyZHMvYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBBY2NvdW50Um91dGVzIH0gZnJvbSAnLi4vYWNjb3VudC9hY2NvdW50LXJvdXRpbmcnO1xuaW1wb3J0IHsgQXNzZXNzbWVudFJvdXRlcyB9IGZyb20gJy4uL2Fzc2Vzc21lbnQvYXNzZXNzbWVudC1yb3V0aW5nJztcbmltcG9ydCB7IFJlcG9ydFJvdXRlcyB9IGZyb20gJy4uL3JlcG9ydC9yZXBvcnQtcm91dGluZyc7XG5pbXBvcnQgeyBMTVNSb3V0ZXMgfSBmcm9tICcuLi9sbXMvbG1zLXJvdXRpbmcnO1xuaW1wb3J0IHsgRGFzaGJvYXJkUm91dGVzIH0gZnJvbSAnLi4vZGFzaGJvYXJkL2Rhc2hib2FyZC1yb3V0aW5nJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAuLi5EYXNoYm9hcmRSb3V0ZXMsXG4gICAgICAgICAgLi4uQWNjb3VudFJvdXRlcyxcbiAgICAgICAgICAuLi5Bc3Nlc3NtZW50Um91dGVzLFxuICAgICAgICAgIC4uLlJlcG9ydFJvdXRlcyxcbiAgICAgICAgICAuLi5MTVNSb3V0ZXNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnJ31cbiAgICBdKVxuICBdLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZSB7XG59XG4iXX0=
