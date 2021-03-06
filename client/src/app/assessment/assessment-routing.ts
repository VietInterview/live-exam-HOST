import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AssessmentComponent } from './assessment.component'
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionDialog } from './question/question-dialog/question-dialog.component';
import { AdminGuard } from '../shared/guards/admin.guard';
import { GroupListComponent } from '../shared/components/group-list/group-list.component';
import { ExamListComponent } from './exam/exam-list/exam-list.component';

export const AssessmentRoutes: Routes = [
  {
    path: "assessment",
    component: AssessmentComponent,
    data: {
      breadcrumb: 'Assessment'
    },
    canActivate: [AdminGuard],
    children:
    [
      {
        path: "exams",
        component: ExamListComponent,
      },
      {
        path: "questions",
        component: QuestionListComponent,
      },
      {
        path: "groups",
        component: GroupListComponent,
        data: {
          breadcrumb: 'Groups',
          category: 'question'
        },
      }


    ]
  }

]
