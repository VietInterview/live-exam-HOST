import { NgModule } from '@angular/core';
import { AuthModule } from '../auth/auth.module';
import { ErpSharedModule } from '../shared/shared.module';
import { ReportComponent } from './report.component'
import { ExamResultReportComponent } from './exam-result-report/exam-result-report.component';
import { ReportContainerDirective } from './report-container.directive';
import { DatePipe } from '@angular/common';
import { ReportUtils } from '../shared/helpers/report.utils';
import { TimeConvertPipe} from '../shared/pipes/time.pipe';

@NgModule({
	imports: [ErpSharedModule, AuthModule],
	declarations: [
	ReportComponent, 
	ExamResultReportComponent,
	ReportContainerDirective],
	entryComponents: [
        ExamResultReportComponent,
    ],
	exports: [],
	providers: [DatePipe, ReportUtils, TimeConvertPipe]
})
export class ReportModule {
}
