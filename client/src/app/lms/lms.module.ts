import { NgModule } from '@angular/core';
import { AuthModule } from '../auth/auth.module';
import { ErpSharedModule } from '../shared/shared.module';
import { AssessmentModule } from '../assessment/assessment.module';
import { CMSModule } from '../cms/cms.module';
import { LMSComponent } from './lms.component';
import { ExamListComponent} from './exam/exam-list/exam-list.component';
import { ExamStudyDialog} from './exam/exam-study/exam-study.dialog.component';
import { ExamScoreDialog } from './exam/exam-score/exam-score.dialog.component';
import { CheckinSheetDialog } from './exam/checkin-sheet/checkin-sheet.dialog.component';
import { ExamPrintDialog } from './exam/exam-print/exam-print.dialog.component';
import { AnswerPrintDialog } from './exam/answer-print/answer-print.dialog.component';

@NgModule({
    imports: [ErpSharedModule, CMSModule, AssessmentModule, AuthModule],
    declarations: [LMSComponent, ExamListComponent, ExamStudyDialog, AnswerPrintDialog, 
					 ExamScoreDialog, CheckinSheetDialog, ExamPrintDialog],
    exports: [],
    providers: []
})
export class LMSModule {
}
