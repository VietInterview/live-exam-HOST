import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { APIService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Group } from '../../models/group.model';
import { BaseComponent } from '../base/base.component';
import { User } from '../../../shared/models/user.model';
import * as _ from 'underscore';
import { TreeUtils } from '../../../shared/helpers/tree.utils';
import { TreeNode } from 'primeng/api';
import { GROUP_CATEGORY } from '../../../shared/models/constants'
import { SelectItem } from 'primeng/api';

@Component({
	moduleId: module.id,
	selector: 'select-teacher-dialog',
	templateUrl: 'select-teacher-dialog.component.html',
})
export class SelectTeachersDialog extends BaseComponent {

	selectedUsers: User[];
	users:User[];
	display: boolean;

	private onSelectUsersReceiver: Subject<any> = new Subject();
    onSelectUsers:Observable<any> =  this.onSelectUsersReceiver.asObservable();

	constructor() {
		super();
		this.display = false;
		this.selectedUsers = [];
	}

	hide() {
		this.display = false;
	}


	show() {
		this.display = true;
		User.listTeacher(this).subscribe((users)=> {
			this.users = users;
		});
	}

	select() {
		this.onSelectUsersReceiver.next(this.selectedUsers);
		this.selectedUsers=[];
		this.hide();
	}


}

