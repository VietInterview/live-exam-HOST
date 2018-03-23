"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enrollment_component_1 = require("./enrollment.component");
var class_list_component_1 = require("./class/class-list/class-list.component");
var course_list_component_1 = require("./course/course-list/course-list.component");
var group_list_component_1 = require("../shared/components/group-list/group-list.component");
var admin_guard_1 = require("../shared/guards/admin.guard");
exports.EnrollmentRoutes = [
    {
        path: "enrollment",
        component: enrollment_component_1.EnrollmentComponent,
        data: {
            breadcrumb: 'Enrollment'
        },
        canActivate: [admin_guard_1.AdminGuard],
        children: [
            {
                path: "classes",
                component: class_list_component_1.CourseClassListComponent,
                data: {
                    breadcrumb: 'Classes'
                }
            },
            {
                path: "courses",
                component: course_list_component_1.CourseListComponent,
                data: {
                    breadcrumb: 'Courses'
                }
            },
            {
                path: "groups",
                component: group_list_component_1.GroupListComponent,
                data: {
                    breadcrumb: 'Groups',
                    category: 'course'
                },
            }
        ]
    }
];
