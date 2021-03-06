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
	selector: 'select-student-dialog',
	templateUrl: 'select-student-dialog.component.html',
	styleUrls: ['select-student-dialog.component.css'],
})
export class SelectStudentsDialog extends BaseComponent {

	tree: TreeNode[];
	selectedNode: TreeNode;
	selectedUsers: User[];
	users:User[];
	display: boolean;
	treeUtils: TreeUtils;

	private onSelectUsersReceiver: Subject<any> = new Subject();
    onSelectUsers:Observable<any> =  this.onSelectUsersReceiver.asObservable();

	constructor() {
		super();
		this.display = false;
		this.selectedUsers = [];
		this.treeUtils = new TreeUtils();
	}

	hide() {
		this.display = false;
	}

	nodeSelect(event: any) {
		if (this.selectedNode) {
			User.listByClass(this,this.selectedNode.data.id).subscribe(users => {
				this.users = users;
			});
		}
	}

	show() {
		this.display = true;
		Group.listByCategory(this, GROUP_CATEGORY.USER).subscribe(groups => {
			this.tree = this.treeUtils.buildTree(groups);
		});
	}

	select() {
		this.onSelectUsersReceiver.next(this.selectedUsers);
		this.selectedUsers=[];
		this.hide();
	}


}

