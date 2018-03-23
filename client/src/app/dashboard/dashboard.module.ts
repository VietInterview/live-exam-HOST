import { NgModule } from '@angular/core';
import { ErpSharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component'
import { AssessmentModule } from '../assessment/assessment.module';

@NgModule({
	imports: [ErpSharedModule, AssessmentModule],
	declarations: [
		DashboardComponent],
	exports: [DashboardComponent],
	providers: []
})
export class DashboardModule {
}
