"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var group_list_component_1 = require("../shared/components/group-list/group-list.component");
var user_list_component_1 = require("./user/admin-user-list/user-list.component");
var user_list_component_2 = require("./user/student-user-list/user-list.component");
var user_list_component_3 = require("./user/teacher-user-list/user-list.component");
var admin_guard_1 = require("../shared/guards/admin.guard");
exports.AccountRoutes = [
    {
        path: "account",
        data: {
            breadcrumb: 'Account'
        },
        canActivate: [admin_guard_1.AdminGuard],
        children: [
            {
                path: "groups",
                component: group_list_component_1.GroupListComponent,
                data: {
                    title: 'Class tree',
                    category: 'organization'
                },
            },
            {
                path: "admins",
                component: user_list_component_1.AdminUserListComponent,
            },
            {
                path: "students",
                component: user_list_component_2.StudentUserListComponent,
            },
            {
                path: "teachers",
                component: user_list_component_3.TeacherUserListComponent,
            }
        ]
    }
];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hY2NvdW50L2FjY291bnQtcm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDZGQUEwRjtBQUMxRixrRkFBb0Y7QUFDcEYsb0ZBQXdGO0FBQ3hGLG9GQUF3RjtBQUN4Riw0REFBMEQ7QUFFN0MsUUFBQSxhQUFhLEdBQVc7SUFDbkM7UUFDRSxJQUFJLEVBQUUsU0FBUztRQUNmLElBQUksRUFBRTtZQUNKLFVBQVUsRUFBRSxTQUFTO1NBQ3RCO1FBQ0QsV0FBVyxFQUFFLENBQUMsd0JBQVUsQ0FBQztRQUN6QixRQUFRLEVBQ1I7WUFDRTtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxTQUFTLEVBQUUseUNBQWtCO2dCQUM3QixJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLFlBQVk7b0JBQ25CLFFBQVEsRUFBQyxjQUFjO2lCQUN4QjthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsU0FBUyxFQUFFLDRDQUFzQjthQUNsQztZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixTQUFTLEVBQUUsOENBQXdCO2FBQ3BDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSw4Q0FBd0I7YUFDcEM7U0FFRjtLQUNGO0NBRUYsQ0FBQSIsImZpbGUiOiJhcHAvYWNjb3VudC9hY2NvdW50LXJvdXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEdyb3VwTGlzdENvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9jb21wb25lbnRzL2dyb3VwLWxpc3QvZ3JvdXAtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRtaW5Vc2VyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vdXNlci9hZG1pbi11c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHVkZW50VXNlckxpc3RDb21wb25lbnQgfSBmcm9tICcuL3VzZXIvc3R1ZGVudC11c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZWFjaGVyVXNlckxpc3RDb21wb25lbnQgfSBmcm9tICcuL3VzZXIvdGVhY2hlci11c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZG1pbkd1YXJkIH0gZnJvbSAnLi4vc2hhcmVkL2d1YXJkcy9hZG1pbi5ndWFyZCc7XG5cbmV4cG9ydCBjb25zdCBBY2NvdW50Um91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiBcImFjY291bnRcIixcbiAgICBkYXRhOiB7XG4gICAgICBicmVhZGNydW1iOiAnQWNjb3VudCdcbiAgICB9LFxuICAgIGNhbkFjdGl2YXRlOiBbQWRtaW5HdWFyZF0sXG4gICAgY2hpbGRyZW46XG4gICAgW1xuICAgICAge1xuICAgICAgICBwYXRoOiBcImdyb3Vwc1wiLFxuICAgICAgICBjb21wb25lbnQ6IEdyb3VwTGlzdENvbXBvbmVudCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRpdGxlOiAnQ2xhc3MgdHJlZScsXG4gICAgICAgICAgY2F0ZWdvcnk6J29yZ2FuaXphdGlvbidcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiYWRtaW5zXCIsXG4gICAgICAgIGNvbXBvbmVudDogQWRtaW5Vc2VyTGlzdENvbXBvbmVudCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwic3R1ZGVudHNcIixcbiAgICAgICAgY29tcG9uZW50OiBTdHVkZW50VXNlckxpc3RDb21wb25lbnQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcInRlYWNoZXJzXCIsXG4gICAgICAgIGNvbXBvbmVudDogVGVhY2hlclVzZXJMaXN0Q29tcG9uZW50LFxuICAgICAgfVxuXG4gICAgXVxuICB9XG5cbl1cbiJdfQ==
