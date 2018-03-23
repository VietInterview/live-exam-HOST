import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { GroupListComponent } from '../shared/components/group-list/group-list.component';
import { AdminUserListComponent } from './user/admin-user-list/user-list.component';
import { StudentUserListComponent } from './user/student-user-list/user-list.component';
import { TeacherUserListComponent } from './user/teacher-user-list/user-list.component';
import { AdminGuard } from '../shared/guards/admin.guard';

export const AccountRoutes: Routes = [
  {
    path: "account",
    data: {
      breadcrumb: 'Account'
    },
    canActivate: [AdminGuard],
    children:
    [
      {
        path: "groups",
        component: GroupListComponent,
        data: {
          title: 'Class tree',
          category:'organization'
        },
      },
      {
        path: "admins",
        component: AdminUserListComponent,
      },
      {
        path: "students",
        component: StudentUserListComponent,
      },
      {
        path: "teachers",
        component: TeacherUserListComponent,
      }

    ]
  }

]
