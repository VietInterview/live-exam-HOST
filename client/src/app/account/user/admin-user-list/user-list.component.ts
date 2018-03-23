import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { APIService } from '../../../shared/services/api.service';
import { AuthService } from '../../../shared/services/auth.service';
import * as _ from 'underscore';
import { USER_STATUS, GROUP_CATEGORY } from '../../../shared/models/constants'
import { User } from '../../../shared/models/user.model';
import { Group } from '../../../shared/models/group.model';
import { UserDialog } from '../user-dialog/user-dialog.component';

@Component({
    moduleId: module.id,
    selector: 'admin-user-list',
    templateUrl: 'user-list.component.html',
    styleUrls: ['user-list.component.css'],
})
export class AdminUserListComponent extends BaseComponent {

    @ViewChild(UserDialog) userDialog: UserDialog;

    selectedUser: User;
    users: User[];

    constructor() {
        super();
    }

    ngOnInit() {
        this.loadUsers();
    }

    add() {
        var user = new User();
        user.is_admin = true;
        this.userDialog.show(user);
        this.userDialog.onCreateComplete.subscribe(() => {
            this.loadUsers();
        });
    }

    delete() {
        if (this.selectedUser)
            this.confirmationService.confirm({
                message: this.translateService.instant('Are you sure to delete ?'),
                accept: () => {
                    this.selectedUser.delete(this).subscribe(() => {
                        this.loadUsers();
                        this.selectedUser = null;
                    })
                }
            });
    }

    loadUsers() {
        User.listAdmin(this).subscribe(users => {
            this.users = users;
        });
    }


}
