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
var user_model_1 = require("../../../shared/models/user.model");
var user_dialog_component_1 = require("../user-dialog/user-dialog.component");
var export_dialog_component_1 = require("../export-dialog/export-dialog.component");
var import_dialog_component_1 = require("../import-dialog/import-dialog.component");
var profile_dialog_component_1 = require("../profile-dialog/profile-dialog.component");
var TeacherUserListComponent = (function (_super) {
    __extends(TeacherUserListComponent, _super);
    function TeacherUserListComponent() {
        return _super.call(this) || this;
    }
    TeacherUserListComponent.prototype.ngOnInit = function () {
        this.loadUsers();
    };
    TeacherUserListComponent.prototype.add = function () {
        var _this = this;
        var user = new user_model_1.User();
        user.role = 'teacher';
        this.userDialog.show(user);
        this.userDialog.onCreateComplete.subscribe(function () {
            _this.loadUsers();
        });
    };
    TeacherUserListComponent.prototype.showProfile = function () {
        var _this = this;
        if (this.selectedUser)
            this.userProfileDialog.show(this.selectedUser);
        this.userProfileDialog.onUpdateComplete.subscribe(function () {
            _this.loadUsers();
        });
    };
    TeacherUserListComponent.prototype.delete = function () {
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
    TeacherUserListComponent.prototype.export = function () {
        this.userExportDialog.show(this.users);
    };
    TeacherUserListComponent.prototype.import = function () {
        var _this = this;
        this.userImportDialog.show();
        this.userImportDialog.onImportComplete.subscribe(function () {
            _this.loadUsers();
        });
    };
    TeacherUserListComponent.prototype.loadUsers = function () {
        var _this = this;
        user_model_1.User.listTeacher(this).subscribe(function (users) {
            _this.users = users;
        });
    };
    __decorate([
        core_1.ViewChild(user_dialog_component_1.UserDialog),
        __metadata("design:type", user_dialog_component_1.UserDialog)
    ], TeacherUserListComponent.prototype, "userDialog", void 0);
    __decorate([
        core_1.ViewChild(export_dialog_component_1.UserExportDialog),
        __metadata("design:type", export_dialog_component_1.UserExportDialog)
    ], TeacherUserListComponent.prototype, "userExportDialog", void 0);
    __decorate([
        core_1.ViewChild(import_dialog_component_1.UserImportDialog),
        __metadata("design:type", import_dialog_component_1.UserImportDialog)
    ], TeacherUserListComponent.prototype, "userImportDialog", void 0);
    __decorate([
        core_1.ViewChild(profile_dialog_component_1.UserProfileDialog),
        __metadata("design:type", profile_dialog_component_1.UserProfileDialog)
    ], TeacherUserListComponent.prototype, "userProfileDialog", void 0);
    TeacherUserListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-list',
            templateUrl: 'user-list.component.html',
            styleUrls: ['user-list.component.css'],
        }),
        __metadata("design:paramtypes", [])
    ], TeacherUserListComponent);
    return TeacherUserListComponent;
}(base_component_1.BaseComponent));
exports.TeacherUserListComponent = TeacherUserListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hY2NvdW50L3VzZXIvdGVhY2hlci11c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBb0U7QUFFcEUsaUZBQStFO0FBSy9FLGdFQUF5RDtBQUV6RCw4RUFBa0U7QUFDbEUsb0ZBQTRFO0FBQzVFLG9GQUE0RTtBQUM1RSx1RkFBK0U7QUFTL0U7SUFBOEMsNENBQWE7SUFXdkQ7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQ0FBRyxHQUFIO1FBQUEsaUJBT0M7UUFORyxJQUFJLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztZQUN2QyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsOENBQVcsR0FBWDtRQUFBLGlCQU1DO1FBTEcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNsQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx5Q0FBTSxHQUFOO1FBQUEsaUJBV0M7UUFWRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDO2dCQUNsRSxNQUFNLEVBQUU7b0JBQ0osS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLENBQUMsU0FBUyxDQUFDO3dCQUNyQyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7d0JBQ2pCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUM3QixDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2FBQ0osQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHlDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQseUNBQU0sR0FBTjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7WUFDN0MsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDRDQUFTLEdBQVQ7UUFBQSxpQkFJQztRQUhHLGlCQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDbEMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBOURzQjtRQUF0QixnQkFBUyxDQUFDLGtDQUFVLENBQUM7a0NBQWEsa0NBQVU7Z0VBQUM7SUFDakI7UUFBNUIsZ0JBQVMsQ0FBQywwQ0FBZ0IsQ0FBQztrQ0FBbUIsMENBQWdCO3NFQUFDO0lBQ25DO1FBQTVCLGdCQUFTLENBQUMsMENBQWdCLENBQUM7a0NBQW1CLDBDQUFnQjtzRUFBQztJQUNsQztRQUE3QixnQkFBUyxDQUFDLDRDQUFpQixDQUFDO2tDQUFvQiw0Q0FBaUI7dUVBQUM7SUFMMUQsd0JBQXdCO1FBTnBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFDOztPQUNXLHdCQUF3QixDQW1FcEM7SUFBRCwrQkFBQztDQW5FRCxBQW1FQyxDQW5FNkMsOEJBQWEsR0FtRTFEO0FBbkVZLDREQUF3QiIsImZpbGUiOiJhcHAvYWNjb3VudC91c2VyL3RlYWNoZXItdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYmFzZS9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBUElTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IHsgVVNFUl9TVEFUVVMsIEdST1VQX0NBVEVHT1JZIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9jb25zdGFudHMnXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy91c2VyLm1vZGVsJztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9ncm91cC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyRGlhbG9nIH0gZnJvbSAnLi4vdXNlci1kaWFsb2cvdXNlci1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJFeHBvcnREaWFsb2cgfSBmcm9tICcuLi9leHBvcnQtZGlhbG9nL2V4cG9ydC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJJbXBvcnREaWFsb2cgfSBmcm9tICcuLi9pbXBvcnQtZGlhbG9nL2ltcG9ydC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJQcm9maWxlRGlhbG9nIH0gZnJvbSAnLi4vcHJvZmlsZS1kaWFsb2cvcHJvZmlsZS1kaWFsb2cuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAndXNlci1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3VzZXItbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3VzZXItbGlzdC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRlYWNoZXJVc2VyTGlzdENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXG4gICAgQFZpZXdDaGlsZChVc2VyRGlhbG9nKSB1c2VyRGlhbG9nOiBVc2VyRGlhbG9nO1xuICAgIEBWaWV3Q2hpbGQoVXNlckV4cG9ydERpYWxvZykgdXNlckV4cG9ydERpYWxvZzogVXNlckV4cG9ydERpYWxvZztcbiAgICBAVmlld0NoaWxkKFVzZXJJbXBvcnREaWFsb2cpIHVzZXJJbXBvcnREaWFsb2c6IFVzZXJJbXBvcnREaWFsb2c7XG4gICAgQFZpZXdDaGlsZChVc2VyUHJvZmlsZURpYWxvZykgdXNlclByb2ZpbGVEaWFsb2c6IFVzZXJQcm9maWxlRGlhbG9nO1xuXG4gICAgc2VsZWN0ZWRVc2VyOiBVc2VyO1xuICAgIHVzZXJzOiBVc2VyW107XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmxvYWRVc2VycygpO1xuICAgIH1cblxuICAgIGFkZCgpIHtcbiAgICAgICAgdmFyIHVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICB1c2VyLnJvbGUgPSAndGVhY2hlcic7XG4gICAgICAgIHRoaXMudXNlckRpYWxvZy5zaG93KHVzZXIpO1xuICAgICAgICB0aGlzLnVzZXJEaWFsb2cub25DcmVhdGVDb21wbGV0ZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkVXNlcnMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd1Byb2ZpbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkVXNlcilcbiAgICAgICAgICAgIHRoaXMudXNlclByb2ZpbGVEaWFsb2cuc2hvdyh0aGlzLnNlbGVjdGVkVXNlcik7XG4gICAgICAgIHRoaXMudXNlclByb2ZpbGVEaWFsb2cub25VcGRhdGVDb21wbGV0ZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkVXNlcnMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFVzZXIpXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1hdGlvblNlcnZpY2UuY29uZmlybSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ0FyZSB5b3Ugc3VyZSB0byBkZWxldGUgPycpLFxuICAgICAgICAgICAgICAgIGFjY2VwdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVXNlci5kZWxldGUodGhpcykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFVzZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVXNlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwb3J0KCkge1xuICAgICAgICB0aGlzLnVzZXJFeHBvcnREaWFsb2cuc2hvdyh0aGlzLnVzZXJzKTtcbiAgICB9XG5cbiAgICBpbXBvcnQoKSB7XG4gICAgICAgIHRoaXMudXNlckltcG9ydERpYWxvZy5zaG93KCk7XG4gICAgICAgIHRoaXMudXNlckltcG9ydERpYWxvZy5vbkltcG9ydENvbXBsZXRlLnN1YnNjcmliZSgoKT0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZFVzZXJzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRVc2VycygpIHtcbiAgICAgICAgVXNlci5saXN0VGVhY2hlcih0aGlzKS5zdWJzY3JpYmUodXNlcnMgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VycyA9IHVzZXJzO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxufVxuIl19
