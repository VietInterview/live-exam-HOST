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
var Rx_1 = require("rxjs/Rx");
var group_model_1 = require("../../models/group.model");
var base_component_1 = require("../base/base.component");
var user_model_1 = require("../../../shared/models/user.model");
var tree_utils_1 = require("../../../shared/helpers/tree.utils");
var constants_1 = require("../../../shared/models/constants");
var SelectStudentsDialog = (function (_super) {
    __extends(SelectStudentsDialog, _super);
    function SelectStudentsDialog() {
        var _this = _super.call(this) || this;
        _this.onSelectUsersReceiver = new Rx_1.Subject();
        _this.onSelectUsers = _this.onSelectUsersReceiver.asObservable();
        _this.display = false;
        _this.selectedUsers = [];
        _this.treeUtils = new tree_utils_1.TreeUtils();
        return _this;
    }
    SelectStudentsDialog.prototype.hide = function () {
        this.display = false;
    };
    SelectStudentsDialog.prototype.nodeSelect = function (event) {
        var _this = this;
        if (this.selectedNode) {
            user_model_1.User.listByClass(this, this.selectedNode.data.id).subscribe(function (users) {
                _this.users = users;
            });
        }
    };
    SelectStudentsDialog.prototype.show = function () {
        var _this = this;
        this.display = true;
        group_model_1.Group.listByCategory(this, constants_1.GROUP_CATEGORY.USER).subscribe(function (groups) {
            _this.tree = _this.treeUtils.buildTree(groups);
        });
    };
    SelectStudentsDialog.prototype.select = function () {
        this.onSelectUsersReceiver.next(this.selectedUsers);
        this.hide();
    };
    SelectStudentsDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'select-student-dialog',
            templateUrl: 'select-student-dialog.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], SelectStudentsDialog);
    return SelectStudentsDialog;
}(base_component_1.BaseComponent));
exports.SelectStudentsDialog = SelectStudentsDialog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy9zZWxlY3Qtc3R1ZGVudC1kaWFsb2cvc2VsZWN0LXN0dWRlbnQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUQ7QUFDekQsOEJBQThDO0FBRzlDLHdEQUFpRDtBQUNqRCx5REFBdUQ7QUFDdkQsZ0VBQXlEO0FBRXpELGlFQUErRDtBQUUvRCw4REFBaUU7QUFRakU7SUFBMEMsd0NBQWE7SUFZdEQ7UUFBQSxZQUNDLGlCQUFPLFNBSVA7UUFSTywyQkFBcUIsR0FBaUIsSUFBSSxZQUFPLEVBQUUsQ0FBQztRQUN6RCxtQkFBYSxHQUFvQixLQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFJN0UsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsS0FBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHNCQUFTLEVBQUUsQ0FBQzs7SUFDbEMsQ0FBQztJQUVELG1DQUFJLEdBQUo7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQseUNBQVUsR0FBVixVQUFXLEtBQVU7UUFBckIsaUJBTUM7UUFMQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN2QixpQkFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztnQkFDL0QsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDO0lBQ0YsQ0FBQztJQUVELG1DQUFJLEdBQUo7UUFBQSxpQkFLQztRQUpBLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLG1CQUFLLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSwwQkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDL0QsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxxQ0FBTSxHQUFOO1FBQ0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQXpDVyxvQkFBb0I7UUFMaEMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFdBQVcsRUFBRSxzQ0FBc0M7U0FDbkQsQ0FBQzs7T0FDVyxvQkFBb0IsQ0E0Q2hDO0lBQUQsMkJBQUM7Q0E1Q0QsQUE0Q0MsQ0E1Q3lDLDhCQUFhLEdBNEN0RDtBQTVDWSxvREFBb0IiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb21wb25lbnRzL3NlbGVjdC1zdHVkZW50LWRpYWxvZy9zZWxlY3Qtc3R1ZGVudC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBBUElTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ3JvdXAubW9kZWwnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IHsgVHJlZVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2hlbHBlcnMvdHJlZS51dGlscyc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IEdST1VQX0NBVEVHT1JZIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9jb25zdGFudHMnXG5pbXBvcnQgeyBTZWxlY3RJdGVtIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdzZWxlY3Qtc3R1ZGVudC1kaWFsb2cnLFxuXHR0ZW1wbGF0ZVVybDogJ3NlbGVjdC1zdHVkZW50LWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdFN0dWRlbnRzRGlhbG9nIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cblx0dHJlZTogVHJlZU5vZGVbXTtcblx0c2VsZWN0ZWROb2RlOiBUcmVlTm9kZTtcblx0c2VsZWN0ZWRVc2VyczogVXNlcltdO1xuXHR1c2VyczpVc2VyW107XG5cdGRpc3BsYXk6IGJvb2xlYW47XG5cdHRyZWVVdGlsczogVHJlZVV0aWxzO1xuXG5cdHByaXZhdGUgb25TZWxlY3RVc2Vyc1JlY2VpdmVyOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICAgIG9uU2VsZWN0VXNlcnM6T2JzZXJ2YWJsZTxhbnk+ID0gIHRoaXMub25TZWxlY3RVc2Vyc1JlY2VpdmVyLmFzT2JzZXJ2YWJsZSgpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5kaXNwbGF5ID0gZmFsc2U7XG5cdFx0dGhpcy5zZWxlY3RlZFVzZXJzID0gW107XG5cdFx0dGhpcy50cmVlVXRpbHMgPSBuZXcgVHJlZVV0aWxzKCk7XG5cdH1cblxuXHRoaWRlKCkge1xuXHRcdHRoaXMuZGlzcGxheSA9IGZhbHNlO1xuXHR9XG5cblx0bm9kZVNlbGVjdChldmVudDogYW55KSB7XG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWROb2RlKSB7XG5cdFx0XHRVc2VyLmxpc3RCeUNsYXNzKHRoaXMsdGhpcy5zZWxlY3RlZE5vZGUuZGF0YS5pZCkuc3Vic2NyaWJlKHVzZXJzID0+IHtcblx0XHRcdFx0dGhpcy51c2VycyA9IHVzZXJzO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0c2hvdygpIHtcblx0XHR0aGlzLmRpc3BsYXkgPSB0cnVlO1xuXHRcdEdyb3VwLmxpc3RCeUNhdGVnb3J5KHRoaXMsIEdST1VQX0NBVEVHT1JZLlVTRVIpLnN1YnNjcmliZShncm91cHMgPT4ge1xuXHRcdFx0dGhpcy50cmVlID0gdGhpcy50cmVlVXRpbHMuYnVpbGRUcmVlKGdyb3Vwcyk7XG5cdFx0fSk7XG5cdH1cblxuXHRzZWxlY3QoKSB7XG5cdFx0dGhpcy5vblNlbGVjdFVzZXJzUmVjZWl2ZXIubmV4dCh0aGlzLnNlbGVjdGVkVXNlcnMpO1xuXHRcdHRoaXMuaGlkZSgpO1xuXHR9XG5cblxufVxuXG4iXX0=
