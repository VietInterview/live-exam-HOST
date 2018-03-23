"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lms_component_1 = require("./lms.component");
var exam_list_component_1 = require("./exam/exam-list/exam-list.component");
var course_list_component_1 = require("./course/course-list/course-list.component");
var conference_list_component_1 = require("./conference/conference-list/conference-list.component");
exports.LMSRoutes = [
    {
        path: "lms",
        component: lms_component_1.LMSComponent,
        data: {
            breadcrumb: 'LMS'
        },
        children: [
            {
                path: "exams",
                component: exam_list_component_1.ExamListComponent,
                data: {
                    breadcrumb: 'My exams'
                }
            },
            {
                path: "courses",
                component: course_list_component_1.CourseListComponent,
                data: {
                    breadcrumb: 'My courses'
                }
            },
            {
                path: "meetings",
                component: conference_list_component_1.ConferenceListComponent,
                data: {
                    breadcrumb: 'My conferences'
                }
            },
        ]
    }
];
