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
var group_model_1 = require("../../../shared/models/group.model");
var base_component_1 = require("../../../shared/components/base/base.component");
var user_model_1 = require("../../../shared/models/user.model");
var _ = require("underscore");
var constants_1 = require("../../../shared/models/constants");
var excel_service_1 = require("../../../shared/services/excel.service");
var UserImportDialog = (function (_super) {
    __extends(UserImportDialog, _super);
    function UserImportDialog(excelService) {
        var _this = _super.call(this) || this;
        _this.excelService = excelService;
        _this.onImportCompleteReceiver = new Rx_1.Subject();
        _this.onImportComplete = _this.onImportCompleteReceiver.asObservable();
        _this.display = false;
        _this.importing = false;
        _this.records = [];
        _this.fileType = excel_service_1.EXCEL_TYPE;
        return _this;
    }
    UserImportDialog.prototype.show = function () {
        this.display = true;
    };
    UserImportDialog.prototype.hide = function () {
        this.display = false;
    };
    UserImportDialog.prototype.import = function () {
        var _this = this;
        var subscriptions = [];
        group_model_1.Group.listByCategory(this, constants_1.GROUP_CATEGORY.USER).subscribe(function (groups) {
            _this.importing = true;
            _.each(_this.records, function (record) {
                var user = new user_model_1.User();
                Object.assign(user, record);
                user["password"] = constants_1.DEFAULT_PASSWORD;
                var group = _.find(groups, function (obj) {
                    return obj.code == record["group_code"];
                });
                if (group && _this.role == 'student') {
                    user.class_id = group.id;
                    subscriptions.push(user.save(_this));
                }
            });
            Rx_1.Observable.forkJoin.apply(Rx_1.Observable, subscriptions).subscribe(function () {
                _this.importing = false;
                _this.onImportCompleteReceiver.next();
                _this.hide();
            });
        });
    };
    UserImportDialog.prototype.changeListner = function (event) {
        var _this = this;
        var file = event.files[0];
        this.fileName = file.name;
        this.excelService.importFromExcelFile(file).subscribe(function (data) {
            _this.records = data;
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], UserImportDialog.prototype, "role", void 0);
    UserImportDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-import-dialog',
            templateUrl: 'import-dialog.component.html',
        }),
        __metadata("design:paramtypes", [excel_service_1.ExcelService])
    ], UserImportDialog);
    return UserImportDialog;
}(base_component_1.BaseComponent));
exports.UserImportDialog = UserImportDialog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hY2NvdW50L3VzZXIvaW1wb3J0LWRpYWxvZy9pbXBvcnQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUQ7QUFDekQsOEJBQThDO0FBRzlDLGtFQUEyRDtBQUMzRCxpRkFBK0U7QUFDL0UsZ0VBQXlEO0FBQ3pELDhCQUFnQztBQUNoQyw4REFBb0Y7QUFFcEYsd0VBQWtGO0FBUWxGO0lBQXNDLG9DQUFhO0lBWWxELDBCQUFvQixZQUEwQjtRQUE5QyxZQUNDLGlCQUFPLFNBS1A7UUFObUIsa0JBQVksR0FBWixZQUFZLENBQWM7UUFIdEMsOEJBQXdCLEdBQWlCLElBQUksWUFBTyxFQUFFLENBQUM7UUFDNUQsc0JBQWdCLEdBQW9CLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUluRixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixLQUFJLENBQUMsUUFBUSxHQUFHLDBCQUFVLENBQUM7O0lBQzVCLENBQUM7SUFFRCwrQkFBSSxHQUFKO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELCtCQUFJLEdBQUo7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsaUNBQU0sR0FBTjtRQUFBLGlCQXNCQztRQXJCQSxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDdkIsbUJBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLDBCQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMvRCxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQyxNQUFNO2dCQUMzQixJQUFJLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztnQkFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyw0QkFBZ0IsQ0FBQztnQkFDcEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFTO29CQUNwQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3pDLENBQUMsQ0FBQyxDQUFDO2dCQUNILEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFJLENBQUMsSUFBSSxJQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDekIsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7WUFDRixDQUFDLENBQUMsQ0FBQztZQUNILGVBQVUsQ0FBQyxRQUFRLE9BQW5CLGVBQVUsRUFBYSxhQUFhLEVBQUUsU0FBUyxDQUFDO2dCQUMvQyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsS0FBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyQyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDYixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELHdDQUFhLEdBQWIsVUFBYyxLQUFVO1FBQXhCLGlCQU1DO1FBTEEsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ3pELEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQW5EUTtRQUFSLFlBQUssRUFBRTs7a0RBQWE7SUFQVCxnQkFBZ0I7UUFMNUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSw4QkFBOEI7U0FDM0MsQ0FBQzt5Q0FhaUMsNEJBQVk7T0FabEMsZ0JBQWdCLENBNkQ1QjtJQUFELHVCQUFDO0NBN0RELEFBNkRDLENBN0RxQyw4QkFBYSxHQTZEbEQ7QUE3RFksNENBQWdCIiwiZmlsZSI6ImFwcC9hY2NvdW50L3VzZXIvaW1wb3J0LWRpYWxvZy9pbXBvcnQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgQVBJU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2dyb3VwLm1vZGVsJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9iYXNlL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL3VzZXIubW9kZWwnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7IERFRkFVTFRfUEFTU1dPUkQsIEdST1VQX0NBVEVHT1JZIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBFeGNlbFNlcnZpY2UsIEVYQ0VMX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvZXhjZWwuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAndXNlci1pbXBvcnQtZGlhbG9nJyxcblx0dGVtcGxhdGVVcmw6ICdpbXBvcnQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlckltcG9ydERpYWxvZyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXG5cdGRpc3BsYXk6IGJvb2xlYW47XG5cdGZpbGVUeXBlOiBzdHJpbmc7XG5cdGZpbGVOYW1lOiBzdHJpbmc7XG5cdHJlY29yZHM6IGFueVtdO1xuXHRpbXBvcnRpbmc6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHJvbGU6c3RyaW5nO1xuXG5cdHByaXZhdGUgb25JbXBvcnRDb21wbGV0ZVJlY2VpdmVyOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICAgIG9uSW1wb3J0Q29tcGxldGU6T2JzZXJ2YWJsZTxhbnk+ID0gIHRoaXMub25JbXBvcnRDb21wbGV0ZVJlY2VpdmVyLmFzT2JzZXJ2YWJsZSgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZXhjZWxTZXJ2aWNlOiBFeGNlbFNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuZGlzcGxheSA9IGZhbHNlO1xuXHRcdHRoaXMuaW1wb3J0aW5nID0gZmFsc2U7XG5cdFx0dGhpcy5yZWNvcmRzID0gW107XG5cdFx0dGhpcy5maWxlVHlwZSA9IEVYQ0VMX1RZUEU7XG5cdH1cblxuXHRzaG93KCkge1xuXHRcdHRoaXMuZGlzcGxheSA9IHRydWU7XG5cdH1cblxuXHRoaWRlKCkge1xuXHRcdHRoaXMuZGlzcGxheSA9IGZhbHNlO1xuXHR9XG5cblx0aW1wb3J0KCkge1xuXHRcdHZhciBzdWJzY3JpcHRpb25zID0gW107XG5cdFx0R3JvdXAubGlzdEJ5Q2F0ZWdvcnkodGhpcywgR1JPVVBfQ0FURUdPUlkuVVNFUikuc3Vic2NyaWJlKGdyb3VwcyA9PiB7XG5cdFx0XHR0aGlzLmltcG9ydGluZyA9IHRydWU7XG5cdFx0XHRfLmVhY2godGhpcy5yZWNvcmRzLCAocmVjb3JkKT0+IHtcblx0XHRcdFx0dmFyIHVzZXIgPSBuZXcgVXNlcigpO1xuXHRcdFx0XHRPYmplY3QuYXNzaWduKHVzZXIsIHJlY29yZCk7XG5cdFx0XHRcdHVzZXJbXCJwYXNzd29yZFwiXSA9IERFRkFVTFRfUEFTU1dPUkQ7XG5cdFx0XHRcdHZhciBncm91cCA9IF8uZmluZChncm91cHMsIChvYmo6R3JvdXApPT4ge1xuXHRcdFx0XHRcdHJldHVybiBvYmouY29kZSA9PSByZWNvcmRbXCJncm91cF9jb2RlXCJdO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKGdyb3VwICYmIHRoaXMucm9sZT09J3N0dWRlbnQnKSB7XG5cdFx0XHRcdFx0dXNlci5jbGFzc19pZCA9IGdyb3VwLmlkO1xuXHRcdFx0XHRcdHN1YnNjcmlwdGlvbnMucHVzaCh1c2VyLnNhdmUodGhpcykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdE9ic2VydmFibGUuZm9ya0pvaW4oLi4uc3Vic2NyaXB0aW9ucykuc3Vic2NyaWJlKCgpPT4ge1xuXHRcdFx0XHR0aGlzLmltcG9ydGluZyA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLm9uSW1wb3J0Q29tcGxldGVSZWNlaXZlci5uZXh0KCk7XG5cdFx0XHRcdHRoaXMuaGlkZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRjaGFuZ2VMaXN0bmVyKGV2ZW50OiBhbnkpIHtcblx0XHR2YXIgZmlsZSA9IGV2ZW50LmZpbGVzWzBdO1xuXHRcdHRoaXMuZmlsZU5hbWUgPSBmaWxlLm5hbWU7XG5cdFx0dGhpcy5leGNlbFNlcnZpY2UuaW1wb3J0RnJvbUV4Y2VsRmlsZShmaWxlKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG5cdFx0XHR0aGlzLnJlY29yZHMgPSBkYXRhO1xuXHRcdH0pXG5cdH1cblxuXG59XG5cbiJdfQ==
