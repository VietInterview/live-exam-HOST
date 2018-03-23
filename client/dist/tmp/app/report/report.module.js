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
var exam_result_report_component_1 = require("./exam/exam-result-report/exam-result-report.component");
var course_by_member_report_component_1 = require("./course/course-by-member-report/course-by-member-report.component");
var member_by_course_report_component_1 = require("./course/member-by-course-report/member-by-course-report.component");
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
                course_by_member_report_component_1.CourseByMemberReportComponent,
                member_by_course_report_component_1.MemberByCourseReportComponent,
                report_container_directive_1.ReportContainerDirective
            ],
            entryComponents: [
                exam_result_report_component_1.ExamResultReportComponent,
                course_by_member_report_component_1.CourseByMemberReportComponent,
                member_by_course_report_component_1.MemberByCourseReportComponent
            ],
            exports: [],
            providers: [common_1.DatePipe, report_utils_1.ReportUtils, time_pipe_1.TimeConvertPipe]
        })
    ], ReportModule);
    return ReportModule;
}());
exports.ReportModule = ReportModule;
