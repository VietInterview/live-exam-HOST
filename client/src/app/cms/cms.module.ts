import { NgModule } from '@angular/core';
import { AuthModule } from '../auth/auth.module';
import { ErpSharedModule } from '../shared/shared.module';
import { CMSComponent } from './cms.component'
import { ExamContentDialog } from './exam/content-dialog/exam-content.dialog.component';
import { ValidateGradePipe } from './exam/grade.pipe';
import { SumPipe } from './exam/sum.pipe';

@NgModule({
	imports: [ErpSharedModule, AuthModule],
	declarations: [CMSComponent, ValidateGradePipe, SumPipe, ExamContentDialog],
	exports: [ExamContentDialog],
	providers: [],
	entryComponents:[]
})
export class CMSModule {
}
