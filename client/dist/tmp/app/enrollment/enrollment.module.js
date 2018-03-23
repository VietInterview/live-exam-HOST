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
var enrollment_component_1 = require("./enrollment.component");
var course_pipe_1 = require("./course.pipe");
var class_pipe_1 = require("./class.pipe");
var class_list_component_1 = require("./class/class-list/class-list.component");
var class_dialog_component_1 = require("./class/class-dialog/class-dialog.component");
var course_list_component_1 = require("./course/course-list/course-list.component");
var course_dialog_component_1 = require("./course/course-dialog/course-dialog.component");
var member_dialog_component_1 = require("./member-dialog/member-dialog.component");
var enrollment_dialog_component_1 = require("./enrollment-dialog/enrollment-dialog.component");
var EnrollmentModule = (function () {
    function EnrollmentModule() {
    }
    EnrollmentModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.ErpSharedModule, auth_module_1.AuthModule],
            declarations: [enrollment_component_1.EnrollmentComponent, class_dialog_component_1.CourseClassDialog, class_list_component_1.CourseClassListComponent, course_pipe_1.ByCoursePipe, class_pipe_1.ByClassPipe,
                course_list_component_1.CourseListComponent, course_dialog_component_1.CourseDialog, member_dialog_component_1.CourseMemberDialog, enrollment_dialog_component_1.CourseEnrollDialog],
            exports: [],
            providers: []
        })
    ], EnrollmentModule);
    return EnrollmentModule;
}());
exports.EnrollmentModule = EnrollmentModule;
