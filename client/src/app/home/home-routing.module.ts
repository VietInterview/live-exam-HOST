import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { AccountRoutes } from '../account/account-routing';
import { AssessmentRoutes } from '../assessment/assessment-routing';
import { ReportRoutes } from '../report/report-routing';
import { LMSRoutes } from '../lms/lms-routing';
import { DashboardRoutes } from '../dashboard/dashboard-routing';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
          ...DashboardRoutes,
          ...AccountRoutes,
          ...AssessmentRoutes,
          ...ReportRoutes,
          ...LMSRoutes
        ]
      },
      {path: '**', redirectTo: ''}
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
