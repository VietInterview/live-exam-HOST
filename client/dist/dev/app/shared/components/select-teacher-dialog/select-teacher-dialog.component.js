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
var base_component_1 = require("../base/base.component");
var user_model_1 = require("../../../shared/models/user.model");
var SelectTeachersDialog = (function (_super) {
    __extends(SelectTeachersDialog, _super);
    function SelectTeachersDialog() {
        var _this = _super.call(this) || this;
        _this.onSelectUsersReceiver = new Rx_1.Subject();
        _this.onSelectUsers = _this.onSelectUsersReceiver.asObservable();
        _this.display = false;
        _this.selectedUsers = [];
        return _this;
    }
    SelectTeachersDialog.prototype.hide = function () {
        this.display = false;
    };
    SelectTeachersDialog.prototype.show = function () {
        var _this = this;
        this.display = true;
        user_model_1.User.listTeacher(this).subscribe(function (users) {
            _this.users = users;
        });
    };
    SelectTeachersDialog.prototype.select = function () {
        this.onSelectUsersReceiver.next(this.selectedUsers);
        this.hide();
    };
    SelectTeachersDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'select-teacher-dialog',
            templateUrl: 'select-teacher-dialog.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], SelectTeachersDialog);
    return SelectTeachersDialog;
}(base_component_1.BaseComponent));
exports.SelectTeachersDialog = SelectTeachersDialog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy9zZWxlY3QtdGVhY2hlci1kaWFsb2cvc2VsZWN0LXRlYWNoZXItZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUQ7QUFDekQsOEJBQThDO0FBSTlDLHlEQUF1RDtBQUN2RCxnRUFBeUQ7QUFZekQ7SUFBMEMsd0NBQWE7SUFTdEQ7UUFBQSxZQUNDLGlCQUFPLFNBR1A7UUFQTywyQkFBcUIsR0FBaUIsSUFBSSxZQUFPLEVBQUUsQ0FBQztRQUN6RCxtQkFBYSxHQUFvQixLQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFJN0UsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsS0FBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7O0lBQ3pCLENBQUM7SUFFRCxtQ0FBSSxHQUFKO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUdELG1DQUFJLEdBQUo7UUFBQSxpQkFLQztRQUpBLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGlCQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQUs7WUFDdEMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQscUNBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNiLENBQUM7SUE5Qlcsb0JBQW9CO1FBTGhDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxXQUFXLEVBQUUsc0NBQXNDO1NBQ25ELENBQUM7O09BQ1csb0JBQW9CLENBaUNoQztJQUFELDJCQUFDO0NBakNELEFBaUNDLENBakN5Qyw4QkFBYSxHQWlDdEQ7QUFqQ1ksb0RBQW9CIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29tcG9uZW50cy9zZWxlY3QtdGVhY2hlci1kaWFsb2cvc2VsZWN0LXRlYWNoZXItZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgQVBJU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dyb3VwLm1vZGVsJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL3VzZXIubW9kZWwnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7IFRyZWVVdGlscyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9oZWxwZXJzL3RyZWUudXRpbHMnO1xuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBHUk9VUF9DQVRFR09SWSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvY29uc3RhbnRzJ1xuaW1wb3J0IHsgU2VsZWN0SXRlbSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnc2VsZWN0LXRlYWNoZXItZGlhbG9nJyxcblx0dGVtcGxhdGVVcmw6ICdzZWxlY3QtdGVhY2hlci1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RUZWFjaGVyc0RpYWxvZyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXG5cdHNlbGVjdGVkVXNlcnM6IFVzZXJbXTtcblx0dXNlcnM6VXNlcltdO1xuXHRkaXNwbGF5OiBib29sZWFuO1xuXG5cdHByaXZhdGUgb25TZWxlY3RVc2Vyc1JlY2VpdmVyOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICAgIG9uU2VsZWN0VXNlcnM6T2JzZXJ2YWJsZTxhbnk+ID0gIHRoaXMub25TZWxlY3RVc2Vyc1JlY2VpdmVyLmFzT2JzZXJ2YWJsZSgpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5kaXNwbGF5ID0gZmFsc2U7XG5cdFx0dGhpcy5zZWxlY3RlZFVzZXJzID0gW107XG5cdH1cblxuXHRoaWRlKCkge1xuXHRcdHRoaXMuZGlzcGxheSA9IGZhbHNlO1xuXHR9XG5cblxuXHRzaG93KCkge1xuXHRcdHRoaXMuZGlzcGxheSA9IHRydWU7XG5cdFx0VXNlci5saXN0VGVhY2hlcih0aGlzKS5zdWJzY3JpYmUoKHVzZXJzKT0+IHtcblx0XHRcdHRoaXMudXNlcnMgPSB1c2Vycztcblx0XHR9KTtcblx0fVxuXG5cdHNlbGVjdCgpIHtcblx0XHR0aGlzLm9uU2VsZWN0VXNlcnNSZWNlaXZlci5uZXh0KHRoaXMuc2VsZWN0ZWRVc2Vycyk7XG5cdFx0dGhpcy5oaWRlKCk7XG5cdH1cblxuXG59XG5cbiJdfQ==
