import { NgModule } from '@angular/core';
import { AuthModule } from '../auth/auth.module';
import { ErpSharedModule } from '../shared/shared.module';
import { UserDialog } from './user/user-dialog/user-dialog.component';
import { UserExportDialog } from './user/export-dialog/export-dialog.component';
import { UserImportDialog } from './user/import-dialog/import-dialog.component';
import { UserProfileDialog } from './user/profile-dialog/profile-dialog.component';
import { AdminUserListComponent } from './user/admin-user-list/user-list.component';
import { StudentUserListComponent } from './user/student-user-list/user-list.component';
import { TeacherUserListComponent } from './user/teacher-user-list/user-list.component';

@NgModule({
    imports: [ErpSharedModule, AuthModule],
    declarations: [ AdminUserListComponent, StudentUserListComponent,TeacherUserListComponent, UserDialog,
    				UserExportDialog,UserImportDialog,UserProfileDialog],
    exports: [UserProfileDialog],
    providers: []
})
export class AccountModule {
}
