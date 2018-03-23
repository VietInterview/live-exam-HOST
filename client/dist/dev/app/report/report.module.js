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
var report_component_1 = require("./report.component");
var exam_result_report_component_1 = require("./exam-result-report/exam-result-report.component");
var report_container_directive_1 = require("./report-container.directive");
var common_1 = require("@angular/common");
var report_utils_1 = require("../shared/helpers/report.utils");
var time_pipe_1 = require("../shared/pipes/time.pipe");
var ReportModule = (function () {
    function ReportModule() {
    }
    ReportModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.ErpSharedModule, auth_module_1.AuthModule],
            declarations: [
                report_component_1.ReportComponent,
                exam_result_report_component_1.ExamResultReportComponent,
                report_container_directive_1.ReportContainerDirective
            ],
            entryComponents: [
                exam_result_report_component_1.ExamResultReportComponent,
            ],
            exports: [],
            providers: [common_1.DatePipe, report_utils_1.ReportUtils, time_pipe_1.TimeConvertPipe]
        })
    ], ReportModule);
    return ReportModule;
}());
exports.ReportModule = ReportModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvcnQvcmVwb3J0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QyxtREFBaUQ7QUFDakQseURBQTBEO0FBQzFELHVEQUFvRDtBQUNwRCxrR0FBOEY7QUFDOUYsMkVBQXdFO0FBQ3hFLDBDQUEyQztBQUMzQywrREFBNkQ7QUFDN0QsdURBQTJEO0FBYzNEO0lBQUE7SUFDQSxDQUFDO0lBRFksWUFBWTtRQVp4QixlQUFRLENBQUM7WUFDVCxPQUFPLEVBQUUsQ0FBQywrQkFBZSxFQUFFLHdCQUFVLENBQUM7WUFDdEMsWUFBWSxFQUFFO2dCQUNkLGtDQUFlO2dCQUNmLHdEQUF5QjtnQkFDekIscURBQXdCO2FBQUM7WUFDekIsZUFBZSxFQUFFO2dCQUNWLHdEQUF5QjthQUM1QjtZQUNKLE9BQU8sRUFBRSxFQUFFO1lBQ1gsU0FBUyxFQUFFLENBQUMsaUJBQVEsRUFBRSwwQkFBVyxFQUFFLDJCQUFlLENBQUM7U0FDbkQsQ0FBQztPQUNXLFlBQVksQ0FDeEI7SUFBRCxtQkFBQztDQURELEFBQ0MsSUFBQTtBQURZLG9DQUFZIiwiZmlsZSI6ImFwcC9yZXBvcnQvcmVwb3J0Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoTW9kdWxlIH0gZnJvbSAnLi4vYXV0aC9hdXRoLm1vZHVsZSc7XG5pbXBvcnQgeyBFcnBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXBvcnRDb21wb25lbnQgfSBmcm9tICcuL3JlcG9ydC5jb21wb25lbnQnXG5pbXBvcnQgeyBFeGFtUmVzdWx0UmVwb3J0Q29tcG9uZW50IH0gZnJvbSAnLi9leGFtLXJlc3VsdC1yZXBvcnQvZXhhbS1yZXN1bHQtcmVwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXBvcnRDb250YWluZXJEaXJlY3RpdmUgfSBmcm9tICcuL3JlcG9ydC1jb250YWluZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlcG9ydFV0aWxzIH0gZnJvbSAnLi4vc2hhcmVkL2hlbHBlcnMvcmVwb3J0LnV0aWxzJztcbmltcG9ydCB7IFRpbWVDb252ZXJ0UGlwZX0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL3RpbWUucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtFcnBTaGFyZWRNb2R1bGUsIEF1dGhNb2R1bGVdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0UmVwb3J0Q29tcG9uZW50LCBcblx0RXhhbVJlc3VsdFJlcG9ydENvbXBvbmVudCxcblx0UmVwb3J0Q29udGFpbmVyRGlyZWN0aXZlXSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIEV4YW1SZXN1bHRSZXBvcnRDb21wb25lbnQsXG4gICAgXSxcblx0ZXhwb3J0czogW10sXG5cdHByb3ZpZGVyczogW0RhdGVQaXBlLCBSZXBvcnRVdGlscywgVGltZUNvbnZlcnRQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBSZXBvcnRNb2R1bGUge1xufVxuIl19
