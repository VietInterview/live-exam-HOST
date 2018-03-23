"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assessment_component_1 = require("./assessment.component");
var question_list_component_1 = require("./question/question-list/question-list.component");
var admin_guard_1 = require("../shared/guards/admin.guard");
var group_list_component_1 = require("../shared/components/group-list/group-list.component");
var exam_list_component_1 = require("./exam/exam-list/exam-list.component");
exports.AssessmentRoutes = [
    {
        path: "assessment",
        component: assessment_component_1.AssessmentComponent,
        data: {
            breadcrumb: 'Assessment'
        },
        canActivate: [admin_guard_1.AdminGuard],
        children: [
            {
                path: "exams",
                component: exam_list_component_1.ExamListComponent,
            },
            {
                path: "questions",
                component: question_list_component_1.QuestionListComponent,
            },
            {
                path: "groups",
                component: group_list_component_1.GroupListComponent,
                data: {
                    breadcrumb: 'Groups',
                    category: 'question'
                },
            }
        ]
    }
];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3Nlc3NtZW50L2Fzc2Vzc21lbnQtcm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLCtEQUE0RDtBQUM1RCw0RkFBeUY7QUFFekYsNERBQTBEO0FBQzFELDZGQUEwRjtBQUMxRiw0RUFBeUU7QUFFNUQsUUFBQSxnQkFBZ0IsR0FBVztJQUN0QztRQUNFLElBQUksRUFBRSxZQUFZO1FBQ2xCLFNBQVMsRUFBRSwwQ0FBbUI7UUFDOUIsSUFBSSxFQUFFO1lBQ0osVUFBVSxFQUFFLFlBQVk7U0FDekI7UUFDRCxXQUFXLEVBQUUsQ0FBQyx3QkFBVSxDQUFDO1FBQ3pCLFFBQVEsRUFDUjtZQUNFO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLFNBQVMsRUFBRSx1Q0FBaUI7YUFDN0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsV0FBVztnQkFDakIsU0FBUyxFQUFFLCtDQUFxQjthQUNqQztZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSx5Q0FBa0I7Z0JBQzdCLElBQUksRUFBRTtvQkFDSixVQUFVLEVBQUUsUUFBUTtvQkFDcEIsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCO2FBQ0Y7U0FHRjtLQUNGO0NBRUYsQ0FBQSIsImZpbGUiOiJhcHAvYXNzZXNzbWVudC9hc3Nlc3NtZW50LXJvdXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFzc2Vzc21lbnRDb21wb25lbnQgfSBmcm9tICcuL2Fzc2Vzc21lbnQuY29tcG9uZW50J1xuaW1wb3J0IHsgUXVlc3Rpb25MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9xdWVzdGlvbi9xdWVzdGlvbi1saXN0L3F1ZXN0aW9uLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFF1ZXN0aW9uRGlhbG9nIH0gZnJvbSAnLi9xdWVzdGlvbi9xdWVzdGlvbi1kaWFsb2cvcXVlc3Rpb24tZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pbkd1YXJkIH0gZnJvbSAnLi4vc2hhcmVkL2d1YXJkcy9hZG1pbi5ndWFyZCc7XG5pbXBvcnQgeyBHcm91cExpc3RDb21wb25lbnQgfSBmcm9tICcuLi9zaGFyZWQvY29tcG9uZW50cy9ncm91cC1saXN0L2dyb3VwLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEV4YW1MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9leGFtL2V4YW0tbGlzdC9leGFtLWxpc3QuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEFzc2Vzc21lbnRSb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6IFwiYXNzZXNzbWVudFwiLFxuICAgIGNvbXBvbmVudDogQXNzZXNzbWVudENvbXBvbmVudCxcbiAgICBkYXRhOiB7XG4gICAgICBicmVhZGNydW1iOiAnQXNzZXNzbWVudCdcbiAgICB9LFxuICAgIGNhbkFjdGl2YXRlOiBbQWRtaW5HdWFyZF0sXG4gICAgY2hpbGRyZW46XG4gICAgW1xuICAgICAge1xuICAgICAgICBwYXRoOiBcImV4YW1zXCIsXG4gICAgICAgIGNvbXBvbmVudDogRXhhbUxpc3RDb21wb25lbnQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcInF1ZXN0aW9uc1wiLFxuICAgICAgICBjb21wb25lbnQ6IFF1ZXN0aW9uTGlzdENvbXBvbmVudCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiZ3JvdXBzXCIsXG4gICAgICAgIGNvbXBvbmVudDogR3JvdXBMaXN0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYnJlYWRjcnVtYjogJ0dyb3VwcycsXG4gICAgICAgICAgY2F0ZWdvcnk6ICdxdWVzdGlvbidcbiAgICAgICAgfSxcbiAgICAgIH1cblxuXG4gICAgXVxuICB9XG5cbl1cbiJdfQ==
