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
var AdminUserListComponent = (function (_super) {
    __extends(AdminUserListComponent, _super);
    function AdminUserListComponent() {
        return _super.call(this) || this;
    }
    AdminUserListComponent.prototype.ngOnInit = function () {
        this.loadUsers();
    };
    AdminUserListComponent.prototype.add = function () {
        var _this = this;
        var user = new user_model_1.User();
        user.is_admin = true;
        this.userDialog.show(user);
        this.userDialog.onCreateComplete.subscribe(function () {
            _this.loadUsers();
        });
    };
    AdminUserListComponent.prototype.delete = function () {
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
    AdminUserListComponent.prototype.loadUsers = function () {
        var _this = this;
        user_model_1.User.listAdmin(this).subscribe(function (users) {
            _this.users = users;
        });
    };
    __decorate([
        core_1.ViewChild(user_dialog_component_1.UserDialog),
        __metadata("design:type", user_dialog_component_1.UserDialog)
    ], AdminUserListComponent.prototype, "userDialog", void 0);
    AdminUserListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-user-list',
            templateUrl: 'user-list.component.html',
            styleUrls: ['user-list.component.css'],
        }),
        __metadata("design:paramtypes", [])
    ], AdminUserListComponent);
    return AdminUserListComponent;
}(base_component_1.BaseComponent));
exports.AdminUserListComponent = AdminUserListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hY2NvdW50L3VzZXIvYWRtaW4tdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQW9FO0FBRXBFLGlGQUErRTtBQUsvRSxnRUFBeUQ7QUFFekQsOEVBQWtFO0FBUWxFO0lBQTRDLDBDQUFhO0lBT3JEO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsb0NBQUcsR0FBSDtRQUFBLGlCQU9DO1FBTkcsSUFBSSxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7WUFDdkMsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHVDQUFNLEdBQU47UUFBQSxpQkFXQztRQVZHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDbEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQztnQkFDN0IsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUM7Z0JBQ2xFLE1BQU0sRUFBRTtvQkFDSixLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsQ0FBQyxTQUFTLENBQUM7d0JBQ3JDLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3QkFDakIsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQzdCLENBQUMsQ0FBQyxDQUFBO2dCQUNOLENBQUM7YUFDSixDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsMENBQVMsR0FBVDtRQUFBLGlCQUlDO1FBSEcsaUJBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNoQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF2Q3NCO1FBQXRCLGdCQUFTLENBQUMsa0NBQVUsQ0FBQztrQ0FBYSxrQ0FBVTs4REFBQztJQUZyQyxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDekMsQ0FBQzs7T0FDVyxzQkFBc0IsQ0E0Q2xDO0lBQUQsNkJBQUM7Q0E1Q0QsQUE0Q0MsQ0E1QzJDLDhCQUFhLEdBNEN4RDtBQTVDWSx3REFBc0IiLCJmaWxlIjoiYXBwL2FjY291bnQvdXNlci9hZG1pbi11c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9iYXNlL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IEFQSVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgeyBVU0VSX1NUQVRVUywgR1JPVVBfQ0FURUdPUlkgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2NvbnN0YW50cydcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2dyb3VwLm1vZGVsJztcbmltcG9ydCB7IFVzZXJEaWFsb2cgfSBmcm9tICcuLi91c2VyLWRpYWxvZy91c2VyLWRpYWxvZy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYWRtaW4tdXNlci1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3VzZXItbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3VzZXItbGlzdC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEFkbWluVXNlckxpc3RDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuICAgIEBWaWV3Q2hpbGQoVXNlckRpYWxvZykgdXNlckRpYWxvZzogVXNlckRpYWxvZztcblxuICAgIHNlbGVjdGVkVXNlcjogVXNlcjtcbiAgICB1c2VyczogVXNlcltdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubG9hZFVzZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkKCkge1xuICAgICAgICB2YXIgdXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgIHVzZXIuaXNfYWRtaW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnVzZXJEaWFsb2cuc2hvdyh1c2VyKTtcbiAgICAgICAgdGhpcy51c2VyRGlhbG9nLm9uQ3JlYXRlQ29tcGxldGUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZFVzZXJzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRVc2VyKVxuICAgICAgICAgICAgdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlLmNvbmZpcm0oe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdBcmUgeW91IHN1cmUgdG8gZGVsZXRlID8nKSxcbiAgICAgICAgICAgICAgICBhY2NlcHQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFVzZXIuZGVsZXRlKHRoaXMpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRVc2VycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFVzZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRVc2VycygpIHtcbiAgICAgICAgVXNlci5saXN0QWRtaW4odGhpcykuc3Vic2NyaWJlKHVzZXJzID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlcnMgPSB1c2VycztcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbn1cbiJdfQ==
