"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var group_model_1 = require("../../../shared/models/group.model");
var course_member_model_1 = require("../../../shared/models/course-member.model");
var course_certificate_model_1 = require("../../../shared/models/course-certificate.model");
var base_dialog_1 = require("../../../shared/components/base/base.dialog");
var _ = require("underscore");
var tree_utils_1 = require("../../../shared/helpers/tree.utils");
var constants_1 = require("../../../shared/models/constants");
var UserProfileDialog = (function (_super) {
    __extends(UserProfileDialog, _super);
    function UserProfileDialog(treeUtils) {
        var _this = _super.call(this) || this;
        _this.treeUtils = treeUtils;
        _this.COURSE_MEMBER_ENROLL_STATUS = constants_1.COURSE_MEMBER_ENROLL_STATUS;
        _this.members = [];
        return _this;
    }
    UserProfileDialog.prototype.nodeSelect = function (event) {
        if (this.selectedNode) {
            this.object.etraining_group_id = this.selectedNode.data.id;
        }
    };
    UserProfileDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.onShow.subscribe(function (object) {
            group_model_1.Group.listByCategory(_this, constants_1.GROUP_CATEGORY.USER).subscribe(function (groups) {
                _this.tree = _this.treeUtils.buildTree(groups);
                if (object.etraining_group_id) {
                    _this.selectedNode = _this.treeUtils.findTreeNode(_this.tree, object.etraining_group_id);
                }
            });
            course_member_model_1.CourseMember.listByUser(_this, object.id)
                .map(function (members) {
                return _.filter(members, function (member) {
                    return member.role == 'student';
                });
            })
                .subscribe(function (members) {
                _this.members = members;
                _.each(members, function (member) {
                    course_certificate_model_1.Certificate.byMember(_this, member.id).subscribe(function (cert) {
                        member["certificate"] = cert;
                    });
                });
            });
        });
    };
    UserProfileDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-user-profile-dialog',
            template: "<form novalidate (ngSubmit)=\"save()\" #f=\"ngForm\"  autocomplete=\"off\">   <p-dialog header=\"{{'User profile'|translate}}\" [(visible)]=\"display\" modal=\"true\" width=\"600\" height=\"100%\" [responsive]=\"true\">     <p-tabView>       <p-tabPanel header=\"{{'Account info'|translate}}\" leftIcon=\"ui-icon-people\">         <div class=\"ui-g ui-fluid form-group\">           <div class=\"ui-g-12\">             <label>{{'Parent group'|translate}}</label>             <p-tree [value]=\"tree\" selectionMode=\"single\" [(selection)]=\"selectedNode\" (onNodeSelect)=\"nodeSelect($event)\"></p-tree>           </div>           <div class=\"ui-g-12 \">             <span class=\"md-inputfield\">                 <input type=\"text\" pInputText [(ngModel)]=\"object.name\" name=\"name\">                 <label>{{'Name'|translate}}</label>             </span>           </div>           <div class=\"ui-g-6\">             <span class=\"md-inputfield\">                 <input type=\"text\" pInputText [(ngModel)]=\"object.login\" name=\"login\" [disabled]=\"true\">                 <label>{{'Login'|translate}}</label>             </span>           </div>           <div class=\"ui-g-6\">             <label>{{'Avatar'|translate}}</label>             <image-base64 [(src64)]=\"object.image\"></image-base64>           </div>           <div class=\"ui-g-12\">             <p-checkbox name=\"admin\" binary=\"true\" label=\"{{'Admin user'|translate}}\" [(ngModel)]=\"object.is_admin\"></p-checkbox>           </div>           <div class=\"ui-g-12\">             <p-checkbox name=\"banned\" binary=\"true\" label=\"{{'Banned from access'|translate}}\" [(ngModel)]=\"object.banned\"></p-checkbox>           </div>         </div>       </p-tabPanel>       <p-tabPanel header=\"{{'Contact info'|translate}}\" leftIcon=\"ui-icon-phone\">         <div class=\"ui-g ui-fluid form-group\">           <div class=\"ui-g-6\">             <span class=\"md-inputfield\">                 <input type=\"text\" pInputText [(ngModel)]=\"object.email\" name=\"email\" pKeyFilter=\"email\">                 <label>{{'Email'|translate}}</label>             </span>           </div>           <div class=\"ui-g-6\">             <span class=\"md-inputfield\">                 <input type=\"text\" pInputText [(ngModel)]=\"object.phone\" name=\"phone\">                 <label>{{'Mobile'|translate}}</label>             </span>           </div>         </div>       </p-tabPanel>       <p-tabPanel header=\"{{'Course history'|translate}}\" leftIcon=\"ui-icon-school\">         <p-table [value]=\"members\">           <ng-template pTemplate=\"header\">             <tr>               <th>{{'Course'|translate}}</th>               <th>{{'Register date'|translate}}</th>               <th>{{'Enrollment status'|translate}}</th>               <th>{{'Certificate'|translate}}</th>             </tr>           </ng-template>           <ng-template pTemplate=\"body\" let-member>             <tr>               <td>{{member.course_name}}</td>               <td>{{member.date_register}}</td>               <td>{{COURSE_MEMBER_ENROLL_STATUS[member.enroll_status] | translate}}</td>               <td><a [hidden]=\"!member.certificate\" [href]=\"member.certificate.url\">{{'Download link'|translate}}</a></td>             </tr>           </ng-template>         </p-table>       </p-tabPanel>     </p-tabView>     <p-footer>       <button type=\"submit\" pButton icon=\"fa-check\" label=\"{{'Save'|translate}}\"></button>       <button type=\"button\" pButton icon=\"fa-close\" (click)=\"hide()\" label=\"{{'Close'|translate}}\"></button>     </p-footer>   </p-dialog> </form>",
        }),
        __metadata("design:paramtypes", [tree_utils_1.TreeUtils])
    ], UserProfileDialog);
    return UserProfileDialog;
}(base_dialog_1.BaseDialog));
exports.UserProfileDialog = UserProfileDialog;
