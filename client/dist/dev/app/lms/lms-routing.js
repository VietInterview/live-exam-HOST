"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lms_component_1 = require("./lms.component");
var exam_list_component_1 = require("./exam/exam-list/exam-list.component");
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
        ]
    }
];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sbXMvbG1zLXJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxpREFBK0M7QUFDL0MsNEVBQXdFO0FBRTNELFFBQUEsU0FBUyxHQUFXO0lBQzdCO1FBQ0csSUFBSSxFQUFFLEtBQUs7UUFDWCxTQUFTLEVBQUUsNEJBQVk7UUFDdkIsSUFBSSxFQUFFO1lBQ0osVUFBVSxFQUFDLEtBQUs7U0FDakI7UUFDRCxRQUFRLEVBQ1I7WUFDSTtnQkFDSSxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsdUNBQWlCO2dCQUM1QixJQUFJLEVBQUU7b0JBQ0osVUFBVSxFQUFDLFVBQVU7aUJBQ3RCO2FBQ0g7U0FDTDtLQUNIO0NBRUosQ0FBQSIsImZpbGUiOiJhcHAvbG1zL2xtcy1yb3V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMTVNDb21wb25lbnQgfSBmcm9tICcuL2xtcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhhbUxpc3RDb21wb25lbnR9IGZyb20gJy4vZXhhbS9leGFtLWxpc3QvZXhhbS1saXN0LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBMTVNSb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgcGF0aDogXCJsbXNcIixcbiAgICAgICBjb21wb25lbnQ6IExNU0NvbXBvbmVudCxcbiAgICAgICBkYXRhOiB7XG4gICAgICAgICBicmVhZGNydW1iOidMTVMnXG4gICAgICAgfSxcbiAgICAgICBjaGlsZHJlbjpcbiAgICAgICBbXG4gICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIHBhdGg6IFwiZXhhbXNcIixcbiAgICAgICAgICAgICAgIGNvbXBvbmVudDogRXhhbUxpc3RDb21wb25lbnQsXG4gICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgIGJyZWFkY3J1bWI6J015IGV4YW1zJ1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICBdXG4gICAgfVxuXG5dXG4iXX0=
