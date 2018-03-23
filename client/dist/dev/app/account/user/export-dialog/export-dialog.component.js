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
var base_component_1 = require("../../../shared/components/base/base.component");
var _ = require("underscore");
var excel_service_1 = require("../../../shared/services/excel.service");
var constants_1 = require("../../../shared/models/constants");
var UserExportDialog = (function (_super) {
    __extends(UserExportDialog, _super);
    function UserExportDialog(excelService) {
        var _this = _super.call(this) || this;
        _this.excelService = excelService;
        _this.users = [];
        _this.fields = [
            { value: 'name', label: _this.translateService.instant('Name') },
            { value: 'email', label: _this.translateService.instant('Email') },
            { value: 'login', label: _this.translateService.instant('Login') },
            { value: 'group_code', label: _this.translateService.instant('Group') }
        ];
        _this.selectedFields = [];
        _this.display = false;
        return _this;
    }
    UserExportDialog.prototype.show = function (users) {
        var _this = this;
        this.users = users;
        this.display = true;
        group_model_1.Group.listByCategory(this, constants_1.GROUP_CATEGORY.USER).subscribe(function (groups) {
            _.each(_this.users, function (user) {
                if (user.etraining_group_id) {
                    var group = _.find(groups, function (obj) {
                        return obj.id == user.class_id;
                    });
                    if (group)
                        user['group_code'] = group.code;
                }
            });
        });
    };
    UserExportDialog.prototype.hide = function () {
        this.display = false;
    };
    UserExportDialog.prototype.export = function () {
        var _this = this;
        var data = _.map(this.users, function (user) {
            var userData = {};
            _.each(_this.selectedFields, function (field) {
                userData[field] = user[field];
            });
            return userData;
        });
        this.excelService.exportAsExcelFile(data, 'users');
        this.hide();
    };
    UserExportDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-export-dialog',
            templateUrl: 'export-dialog.component.html',
        }),
        __metadata("design:paramtypes", [excel_service_1.ExcelService])
    ], UserExportDialog);
    return UserExportDialog;
}(base_component_1.BaseComponent));
exports.UserExportDialog = UserExportDialog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hY2NvdW50L3VzZXIvZXhwb3J0LWRpYWxvZy9leHBvcnQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUQ7QUFJekQsa0VBQTJEO0FBQzNELGlGQUErRTtBQUUvRSw4QkFBZ0M7QUFDaEMsd0VBQXNFO0FBRXRFLDhEQUFrRTtBQU9sRTtJQUFzQyxvQ0FBYTtJQU9sRCwwQkFBb0IsWUFBMEI7UUFBOUMsWUFDQyxpQkFBTyxTQVVQO1FBWG1CLGtCQUFZLEdBQVosWUFBWSxDQUFjO1FBRTdDLEtBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEtBQUksQ0FBQyxNQUFNLEdBQUc7WUFDYixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDL0QsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqRSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7U0FDdEUsQ0FBQztRQUNGLEtBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDOztJQUN0QixDQUFDO0lBRUQsK0JBQUksR0FBSixVQUFLLEtBQVM7UUFBZCxpQkFjSTtRQWJHLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLG1CQUFLLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSwwQkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDckUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFFLFVBQUMsSUFBSTtnQkFDdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztvQkFDN0IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFTO3dCQUNwQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUNoQyxDQUFDLENBQUMsQ0FBQztvQkFDSCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ2xDLENBQUM7WUFDRixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0QsQ0FBQztJQUVELCtCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBRUosaUNBQU0sR0FBTjtRQUFBLGlCQVVDO1FBVEEsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQUMsSUFBSTtZQUNqQyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsY0FBYyxFQUFFLFVBQUMsS0FBSztnQkFDakMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDYixDQUFDO0lBbERXLGdCQUFnQjtRQUw1QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLDhCQUE4QjtTQUMzQyxDQUFDO3lDQVFpQyw0QkFBWTtPQVBsQyxnQkFBZ0IsQ0FvRDVCO0lBQUQsdUJBQUM7Q0FwREQsQUFvREMsQ0FwRHFDLDhCQUFhLEdBb0RsRDtBQXBEWSw0Q0FBZ0IiLCJmaWxlIjoiYXBwL2FjY291bnQvdXNlci9leHBvcnQtZGlhbG9nL2V4cG9ydC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEFQSVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9ncm91cC5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYmFzZS9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy91c2VyLm1vZGVsJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgeyBFeGNlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZXhjZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTZWxlY3RJdGVtIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgR1JPVVBfQ0FURUdPUlkgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2NvbnN0YW50cyc7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ3VzZXItZXhwb3J0LWRpYWxvZycsXG5cdHRlbXBsYXRlVXJsOiAnZXhwb3J0LWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJFeHBvcnREaWFsb2cgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuXHR1c2VyczogVXNlcltdO1xuXHRmaWVsZHM6IFNlbGVjdEl0ZW1bXTtcblx0c2VsZWN0ZWRGaWVsZHM6IHN0cmluZ1tdO1xuXHRkaXNwbGF5OmJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBleGNlbFNlcnZpY2U6IEV4Y2VsU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy51c2VycyA9IFtdO1xuXHRcdHRoaXMuZmllbGRzID0gW1xuXHRcdFx0eyB2YWx1ZTogJ25hbWUnLCBsYWJlbDogdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ05hbWUnKSB9LFxuXHRcdFx0eyB2YWx1ZTogJ2VtYWlsJywgbGFiZWw6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdFbWFpbCcpIH0sXG5cdFx0XHR7IHZhbHVlOiAnbG9naW4nLCBsYWJlbDogdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ0xvZ2luJykgfSxcblx0XHRcdHsgdmFsdWU6ICdncm91cF9jb2RlJywgbGFiZWw6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdHcm91cCcpIH1cblx0XHRdO1xuXHRcdHRoaXMuc2VsZWN0ZWRGaWVsZHMgPSBbXTtcblx0XHR0aGlzLmRpc3BsYXkgPSBmYWxzZTtcblx0fVxuXG5cdHNob3codXNlcnM6YW55KSB7XG4gICAgICAgIHRoaXMudXNlcnMgPSB1c2VycztcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcbiAgICAgICAgR3JvdXAubGlzdEJ5Q2F0ZWdvcnkodGhpcywgR1JPVVBfQ0FURUdPUlkuVVNFUikuc3Vic2NyaWJlKGdyb3VwcyA9PiB7XG5cdFx0XHRfLmVhY2godGhpcy51c2VycywgKHVzZXIpPT4ge1xuXHRcdFx0XHRpZiAodXNlci5ldHJhaW5pbmdfZ3JvdXBfaWQpIHtcblx0XHRcdFx0XHR2YXIgZ3JvdXAgPSBfLmZpbmQoZ3JvdXBzLCAob2JqOkdyb3VwKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gb2JqLmlkID09IHVzZXIuY2xhc3NfaWQ7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0aWYgKGdyb3VwKVxuXHRcdFx0XHRcdFx0dXNlclsnZ3JvdXBfY29kZSddID0gZ3JvdXAuY29kZTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gZmFsc2U7XG4gICAgfVxuXG5cdGV4cG9ydCgpIHtcblx0XHR2YXIgZGF0YSA9IF8ubWFwKHRoaXMudXNlcnMsICh1c2VyKT0+IHtcblx0XHRcdHZhciB1c2VyRGF0YSA9IHt9O1xuXHRcdFx0Xy5lYWNoKHRoaXMuc2VsZWN0ZWRGaWVsZHMsIChmaWVsZCkgPT4ge1xuXHRcdFx0XHR1c2VyRGF0YVtmaWVsZF0gPSB1c2VyW2ZpZWxkXTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHVzZXJEYXRhO1xuXHRcdH0pO1xuXHRcdHRoaXMuZXhjZWxTZXJ2aWNlLmV4cG9ydEFzRXhjZWxGaWxlKGRhdGEsICd1c2VycycpO1xuXHRcdHRoaXMuaGlkZSgpO1xuXHR9XG5cbn1cblxuIl19
