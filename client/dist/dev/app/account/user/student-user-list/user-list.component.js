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
var base_component_1 = require("../../../shared/components/base/base.component");
var constants_1 = require("../../../shared/models/constants");
var user_model_1 = require("../../../shared/models/user.model");
var group_model_1 = require("../../../shared/models/group.model");
var user_dialog_component_1 = require("../user-dialog/user-dialog.component");
var export_dialog_component_1 = require("../export-dialog/export-dialog.component");
var import_dialog_component_1 = require("../import-dialog/import-dialog.component");
var profile_dialog_component_1 = require("../profile-dialog/profile-dialog.component");
var tree_utils_1 = require("../../../shared/helpers/tree.utils");
var StudentUserListComponent = (function (_super) {
    __extends(StudentUserListComponent, _super);
    function StudentUserListComponent() {
        var _this = _super.call(this) || this;
        _this.filterGroups = [];
        _this.treeUtils = new tree_utils_1.TreeUtils();
        return _this;
    }
    StudentUserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        group_model_1.Group.listByCategory(this, constants_1.GROUP_CATEGORY.USER).subscribe(function (groups) {
            _this.tree = _this.treeUtils.buildTree(groups);
        });
        this.loadUsers();
    };
    StudentUserListComponent.prototype.add = function () {
        var _this = this;
        var user = new user_model_1.User();
        user.role = 'student';
        this.userDialog.show(user);
        this.userDialog.onCreateComplete.subscribe(function () {
            _this.loadUsers();
        });
    };
    StudentUserListComponent.prototype.showProfile = function () {
        var _this = this;
        if (this.selectedUser)
            this.userProfileDialog.show(this.selectedUser);
        this.userProfileDialog.onUpdateComplete.subscribe(function () {
            _this.loadUsers();
        });
    };
    StudentUserListComponent.prototype.delete = function () {
        var _this = this;
        if (this.selectedUser)
            this.confirmationService.confirm({
                message: this.translateService.instant('Are you sure to delete ?'),
                accept: function () {
                    _this.selectedUser.delete(_this).subscribe(function () {
                        _this.loadUsers();
                        _this.selectedUser = null;
                    });
                }
            });
    };
    StudentUserListComponent.prototype.export = function () {
        this.userExportDialog.show(this.users);
    };
    StudentUserListComponent.prototype.import = function () {
        var _this = this;
        this.userImportDialog.show();
        this.userImportDialog.onImportComplete.subscribe(function () {
            _this.loadUsers();
        });
    };
    StudentUserListComponent.prototype.loadUsers = function () {
        var _this = this;
        user_model_1.User.listStudent(this).subscribe(function (users) {
            _this.users = users;
        });
    };
    __decorate([
        core_1.ViewChild(user_dialog_component_1.UserDialog),
        __metadata("design:type", user_dialog_component_1.UserDialog)
    ], StudentUserListComponent.prototype, "userDialog", void 0);
    __decorate([
        core_1.ViewChild(export_dialog_component_1.UserExportDialog),
        __metadata("design:type", export_dialog_component_1.UserExportDialog)
    ], StudentUserListComponent.prototype, "userExportDialog", void 0);
    __decorate([
        core_1.ViewChild(import_dialog_component_1.UserImportDialog),
        __metadata("design:type", import_dialog_component_1.UserImportDialog)
    ], StudentUserListComponent.prototype, "userImportDialog", void 0);
    __decorate([
        core_1.ViewChild(profile_dialog_component_1.UserProfileDialog),
        __metadata("design:type", profile_dialog_component_1.UserProfileDialog)
    ], StudentUserListComponent.prototype, "userProfileDialog", void 0);
    StudentUserListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-list',
            templateUrl: 'user-list.component.html',
            styleUrls: ['user-list.component.css'],
        }),
        __metadata("design:paramtypes", [])
    ], StudentUserListComponent);
    return StudentUserListComponent;
}(base_component_1.BaseComponent));
exports.StudentUserListComponent = StudentUserListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hY2NvdW50L3VzZXIvc3R1ZGVudC11c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBb0U7QUFFcEUsaUZBQStFO0FBSS9FLDhEQUE4RTtBQUM5RSxnRUFBeUQ7QUFDekQsa0VBQTJEO0FBQzNELDhFQUFrRTtBQUNsRSxvRkFBNEU7QUFDNUUsb0ZBQTRFO0FBQzVFLHVGQUErRTtBQUMvRSxpRUFBK0Q7QUFTL0Q7SUFBOEMsNENBQWE7SUFjdkQ7UUFBQSxZQUNJLGlCQUFPLFNBR1Y7UUFGRyxLQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDOztJQUNyQyxDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsbUJBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFDLDBCQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMzRCxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQ0FBRyxHQUFIO1FBQUEsaUJBT0M7UUFORyxJQUFJLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztZQUN2QyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsOENBQVcsR0FBWDtRQUFBLGlCQU1DO1FBTEcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNsQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx5Q0FBTSxHQUFOO1FBQUEsaUJBV0M7UUFWRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDO2dCQUNsRSxNQUFNLEVBQUU7b0JBQ0osS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLENBQUMsU0FBUyxDQUFDO3dCQUNyQyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7d0JBQ2pCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUM3QixDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2FBQ0osQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHlDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQseUNBQU0sR0FBTjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7WUFDN0MsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDRDQUFTLEdBQVQ7UUFBQSxpQkFJQztRQUhHLGlCQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDbEMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBdEVzQjtRQUF0QixnQkFBUyxDQUFDLGtDQUFVLENBQUM7a0NBQWEsa0NBQVU7Z0VBQUM7SUFDakI7UUFBNUIsZ0JBQVMsQ0FBQywwQ0FBZ0IsQ0FBQztrQ0FBbUIsMENBQWdCO3NFQUFDO0lBQ25DO1FBQTVCLGdCQUFTLENBQUMsMENBQWdCLENBQUM7a0NBQW1CLDBDQUFnQjtzRUFBQztJQUNsQztRQUE3QixnQkFBUyxDQUFDLDRDQUFpQixDQUFDO2tDQUFvQiw0Q0FBaUI7dUVBQUM7SUFMMUQsd0JBQXdCO1FBTnBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFDOztPQUNXLHdCQUF3QixDQTJFcEM7SUFBRCwrQkFBQztDQTNFRCxBQTJFQyxDQTNFNkMsOEJBQWEsR0EyRTFEO0FBM0VZLDREQUF3QiIsImZpbGUiOiJhcHAvYWNjb3VudC91c2VyL3N0dWRlbnQtdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYmFzZS9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBUElTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IHsgVVNFUl9TVEFUVVMsIEdST1VQX0NBVEVHT1JZIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9jb25zdGFudHMnXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy91c2VyLm1vZGVsJztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9ncm91cC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyRGlhbG9nIH0gZnJvbSAnLi4vdXNlci1kaWFsb2cvdXNlci1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJFeHBvcnREaWFsb2cgfSBmcm9tICcuLi9leHBvcnQtZGlhbG9nL2V4cG9ydC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJJbXBvcnREaWFsb2cgfSBmcm9tICcuLi9pbXBvcnQtZGlhbG9nL2ltcG9ydC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJQcm9maWxlRGlhbG9nIH0gZnJvbSAnLi4vcHJvZmlsZS1kaWFsb2cvcHJvZmlsZS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFRyZWVVdGlscyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9oZWxwZXJzL3RyZWUudXRpbHMnO1xuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICd1c2VyLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAndXNlci1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsndXNlci1saXN0LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU3R1ZGVudFVzZXJMaXN0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cbiAgICBAVmlld0NoaWxkKFVzZXJEaWFsb2cpIHVzZXJEaWFsb2c6IFVzZXJEaWFsb2c7XG4gICAgQFZpZXdDaGlsZChVc2VyRXhwb3J0RGlhbG9nKSB1c2VyRXhwb3J0RGlhbG9nOiBVc2VyRXhwb3J0RGlhbG9nO1xuICAgIEBWaWV3Q2hpbGQoVXNlckltcG9ydERpYWxvZykgdXNlckltcG9ydERpYWxvZzogVXNlckltcG9ydERpYWxvZztcbiAgICBAVmlld0NoaWxkKFVzZXJQcm9maWxlRGlhbG9nKSB1c2VyUHJvZmlsZURpYWxvZzogVXNlclByb2ZpbGVEaWFsb2c7XG5cbiAgICB0cmVlOiBUcmVlTm9kZVtdO1xuICAgIHNlbGVjdGVkVXNlcjogVXNlcjtcbiAgICB1c2VyczogVXNlcltdO1xuICAgIGZpbHRlckdyb3VwczogR3JvdXBbXTtcbiAgICBzZWxlY3RlZEdyb3VwTm9kZXM6IFRyZWVOb2RlW107XG4gICAgdHJlZVV0aWxzOiBUcmVlVXRpbHM7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5maWx0ZXJHcm91cHMgPSBbXTtcbiAgICAgICAgdGhpcy50cmVlVXRpbHMgPSBuZXcgVHJlZVV0aWxzKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIEdyb3VwLmxpc3RCeUNhdGVnb3J5KHRoaXMsR1JPVVBfQ0FURUdPUlkuVVNFUikuc3Vic2NyaWJlKGdyb3VwcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnRyZWUgPSB0aGlzLnRyZWVVdGlscy5idWlsZFRyZWUoZ3JvdXBzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubG9hZFVzZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkKCkge1xuICAgICAgICB2YXIgdXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgIHVzZXIucm9sZSA9ICdzdHVkZW50JztcbiAgICAgICAgdGhpcy51c2VyRGlhbG9nLnNob3codXNlcik7XG4gICAgICAgIHRoaXMudXNlckRpYWxvZy5vbkNyZWF0ZUNvbXBsZXRlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRVc2VycygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93UHJvZmlsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRVc2VyKVxuICAgICAgICAgICAgdGhpcy51c2VyUHJvZmlsZURpYWxvZy5zaG93KHRoaXMuc2VsZWN0ZWRVc2VyKTtcbiAgICAgICAgdGhpcy51c2VyUHJvZmlsZURpYWxvZy5vblVwZGF0ZUNvbXBsZXRlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRVc2VycygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkVXNlcilcbiAgICAgICAgICAgIHRoaXMuY29uZmlybWF0aW9uU2VydmljZS5jb25maXJtKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCgnQXJlIHlvdSBzdXJlIHRvIGRlbGV0ZSA/JyksXG4gICAgICAgICAgICAgICAgYWNjZXB0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRVc2VyLmRlbGV0ZSh0aGlzKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVXNlcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRVc2VyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBvcnQoKSB7XG4gICAgICAgIHRoaXMudXNlckV4cG9ydERpYWxvZy5zaG93KHRoaXMudXNlcnMpO1xuICAgIH1cblxuICAgIGltcG9ydCgpIHtcbiAgICAgICAgdGhpcy51c2VySW1wb3J0RGlhbG9nLnNob3coKTtcbiAgICAgICAgdGhpcy51c2VySW1wb3J0RGlhbG9nLm9uSW1wb3J0Q29tcGxldGUuc3Vic2NyaWJlKCgpPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkVXNlcnMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZFVzZXJzKCkge1xuICAgICAgICBVc2VyLmxpc3RTdHVkZW50KHRoaXMpLnN1YnNjcmliZSh1c2VycyA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXJzID0gdXNlcnM7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG59XG4iXX0=
