"use strict";
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
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var core_2 = require("@ngx-translate/core");
var app_routing_module_1 = require("./app-routing.module");
var auth_module_1 = require("./auth/auth.module");
var home_module_1 = require("./home/home.module");
var shared_module_1 = require("./shared/shared.module");
var account_module_1 = require("./account/account.module");
var assessment_module_1 = require("./assessment/assessment.module");
var report_module_1 = require("./report/report.module");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var cms_module_1 = require("./cms/cms.module");
var lms_module_1 = require("./lms/lms.module");
var intercept_http_1 = require("./shared/helpers/intercept.http");
var service_locator_1 = require("./service.locator");
var app_component_1 = require("./app.component");
var translation_loader_1 = require("./shared/helpers/translation.loader");
var AppModule = (function () {
    function AppModule(injector) {
        service_locator_1.ServiceLocator.injector = injector;
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                auth_module_1.AuthModule,
                home_module_1.HomeModule.forRoot(),
                dashboard_module_1.DashboardModule,
                account_module_1.AccountModule,
                assessment_module_1.AssessmentModule,
                report_module_1.ReportModule,
                cms_module_1.CMSModule,
                lms_module_1.LMSModule,
                shared_module_1.ErpSharedModule.forRoot(),
                core_2.TranslateModule.forRoot({
                    loader: { provide: core_2.TranslateLoader, useClass: translation_loader_1.CustomTranslationLoader }
                })
            ],
            declarations: [app_component_1.AppComponent],
            providers: [
                {
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                },
                http_1.BaseRequestOptions,
                {
                    provide: http_1.Http,
                    useFactory: function (options, realBackend) {
                        return new intercept_http_1.InterceptHttp(realBackend, options);
                    },
                    deps: [http_1.BaseRequestOptions, http_1.XHRBackend]
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        }),
        __metadata("design:paramtypes", [core_1.Injector])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQW1FO0FBQ25FLDhEQUEwRDtBQUMxRCxtRUFBK0U7QUFDL0UsMENBQWdEO0FBQ2hELHNDQUFpRjtBQUNqRiw0Q0FBdUU7QUFDdkUsMkRBQXdEO0FBQ3hELGtEQUFnRDtBQUNoRCxrREFBZ0Q7QUFDaEQsd0RBQXlEO0FBQ3pELDJEQUF5RDtBQUN6RCxvRUFBa0U7QUFDbEUsd0RBQXNEO0FBQ3RELGlFQUErRDtBQUMvRCwrQ0FBNkM7QUFDN0MsK0NBQTZDO0FBQzdDLGtFQUFnRTtBQUNoRSxxREFBbUQ7QUFDbkQsaURBQStDO0FBQy9DLDBFQUE4RTtBQXdDOUU7SUFFSSxtQkFBWSxRQUFrQjtRQUMxQixnQ0FBYyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDdkMsQ0FBQztJQUpRLFNBQVM7UUF0Q3JCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxnQ0FBYTtnQkFDYixvQ0FBdUI7Z0JBQ3ZCLGlCQUFVO2dCQUNWLHFDQUFnQjtnQkFDaEIsd0JBQVU7Z0JBQ1Ysd0JBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BCLGtDQUFlO2dCQUNmLDhCQUFhO2dCQUNiLG9DQUFnQjtnQkFDaEIsNEJBQVk7Z0JBQ1osc0JBQVM7Z0JBQ1Qsc0JBQVM7Z0JBQ1QsK0JBQWUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pCLHNCQUFlLENBQUMsT0FBTyxDQUFDO29CQUNwQixNQUFNLEVBQUUsRUFBQyxPQUFPLEVBQUUsc0JBQWUsRUFBRSxRQUFRLEVBQUUsNENBQXVCLEVBQUM7aUJBQ3hFLENBQUM7YUFDTDtZQUNELFlBQVksRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDNUIsU0FBUyxFQUFFO2dCQUNQO29CQUNJLE9BQU8sRUFBRSxzQkFBYTtvQkFDdEIsUUFBUSxFQUFFLGlCQUFpQjtpQkFDOUI7Z0JBQ0QseUJBQWtCO2dCQUNsQjtvQkFDSSxPQUFPLEVBQUUsV0FBSTtvQkFDYixVQUFVLEVBQUUsVUFBQyxPQUEyQixFQUFFLFdBQXVCO3dCQUM3RCxNQUFNLENBQUMsSUFBSSw4QkFBYSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDbkQsQ0FBQztvQkFDRCxJQUFJLEVBQUUsQ0FBQyx5QkFBa0IsRUFBRSxpQkFBVSxDQUFDO2lCQUV6QzthQUNKO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUU1QixDQUFDO3lDQUd3QixlQUFRO09BRnJCLFNBQVMsQ0FLckI7SUFBRCxnQkFBQztDQUxELEFBS0MsSUFBQTtBQUxZLDhCQUFTIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdG9yLCBBcHBsaWNhdGlvblJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlLCBIdHRwLCBCYXNlUmVxdWVzdE9wdGlvbnMsIFhIUkJhY2tlbmQgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQXV0aE1vZHVsZSB9IGZyb20gJy4vYXV0aC9hdXRoLm1vZHVsZSc7XG5pbXBvcnQgeyBIb21lTW9kdWxlIH0gZnJvbSAnLi9ob21lL2hvbWUubW9kdWxlJztcbmltcG9ydCB7IEVycFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQWNjb3VudE1vZHVsZSB9IGZyb20gJy4vYWNjb3VudC9hY2NvdW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBBc3Nlc3NtZW50TW9kdWxlIH0gZnJvbSAnLi9hc3Nlc3NtZW50L2Fzc2Vzc21lbnQubW9kdWxlJztcbmltcG9ydCB7IFJlcG9ydE1vZHVsZSB9IGZyb20gJy4vcmVwb3J0L3JlcG9ydC5tb2R1bGUnO1xuaW1wb3J0IHsgRGFzaGJvYXJkTW9kdWxlIH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBDTVNNb2R1bGUgfSBmcm9tICcuL2Ntcy9jbXMubW9kdWxlJztcbmltcG9ydCB7IExNU01vZHVsZSB9IGZyb20gJy4vbG1zL2xtcy5tb2R1bGUnO1xuaW1wb3J0IHsgSW50ZXJjZXB0SHR0cCB9IGZyb20gJy4vc2hhcmVkL2hlbHBlcnMvaW50ZXJjZXB0Lmh0dHAnO1xuaW1wb3J0IHsgU2VydmljZUxvY2F0b3IgfSBmcm9tICcuL3NlcnZpY2UubG9jYXRvcic7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tVHJhbnNsYXRpb25Mb2FkZXIgfSBmcm9tICcuL3NoYXJlZC9oZWxwZXJzL3RyYW5zbGF0aW9uLmxvYWRlcic7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBCcm93c2VyTW9kdWxlLFxuICAgICAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICAgICAgSHR0cE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgQXV0aE1vZHVsZSxcbiAgICAgICAgSG9tZU1vZHVsZS5mb3JSb290KCksXG4gICAgICAgIERhc2hib2FyZE1vZHVsZSxcbiAgICAgICAgQWNjb3VudE1vZHVsZSxcbiAgICAgICAgQXNzZXNzbWVudE1vZHVsZSxcbiAgICAgICAgUmVwb3J0TW9kdWxlLFxuICAgICAgICBDTVNNb2R1bGUsXG4gICAgICAgIExNU01vZHVsZSxcbiAgICAgICAgRXJwU2hhcmVkTW9kdWxlLmZvclJvb3QoKSxcbiAgICAgICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgICAgICAgbG9hZGVyOiB7cHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLCB1c2VDbGFzczogQ3VzdG9tVHJhbnNsYXRpb25Mb2FkZXJ9XG4gICAgICAgIH0pXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLFxuICAgICAgICAgICAgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nXG4gICAgICAgIH0sXG4gICAgICAgIEJhc2VSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogSHR0cCxcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IChvcHRpb25zOiBCYXNlUmVxdWVzdE9wdGlvbnMsIHJlYWxCYWNrZW5kOiBYSFJCYWNrZW5kKT0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEludGVyY2VwdEh0dHAocmVhbEJhY2tlbmQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlcHM6IFtCYXNlUmVxdWVzdE9wdGlvbnMsIFhIUkJhY2tlbmRdXG5cbiAgICAgICAgfVxuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxuXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAgICAgU2VydmljZUxvY2F0b3IuaW5qZWN0b3IgPSBpbmplY3RvcjtcbiAgICB9XG59Il19
