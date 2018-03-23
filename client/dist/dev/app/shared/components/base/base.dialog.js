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
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/map");
var Rx_1 = require("rxjs/Rx");
var base_component_1 = require("../base/base.component");
var BaseDialog = (function (_super) {
    __extends(BaseDialog, _super);
    function BaseDialog() {
        var _this = _super.call(this) || this;
        _this.onCreateCompleteReceiver = new Rx_1.Subject();
        _this.onUpdateCompleteReceiver = new Rx_1.Subject();
        _this.onShowReceiver = new Rx_1.Subject();
        _this.onHideReceiver = new Rx_1.Subject();
        _this.onCreateComplete = _this.onCreateCompleteReceiver.asObservable();
        _this.onUpdateComplete = _this.onUpdateCompleteReceiver.asObservable();
        _this.onShow = _this.onShowReceiver.asObservable();
        _this.onHide = _this.onHideReceiver.asObservable();
        _this.display = false;
        _this.object = {};
        return _this;
    }
    BaseDialog.prototype.show = function (object) {
        this.object = object;
        this.display = true;
        this.onShowReceiver.next(object);
    };
    BaseDialog.prototype.hide = function () {
        this.display = false;
        this.onHideReceiver.next();
    };
    BaseDialog.prototype.save = function () {
        var _this = this;
        if (!this.object.id) {
            this.object.save(this).subscribe(function () {
                _this.hide();
                _this.onCreateCompleteReceiver.next(_this.object);
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: _this.translateService.instant('Object created successfully.') });
            });
        }
        else {
            this.object.save(this).subscribe(function () {
                _this.hide();
                _this.onUpdateCompleteReceiver.next(_this.object);
                _this.messageService.add({ severity: 'success', summary: 'Success', detail: _this.translateService.instant('Object saved successfully.') });
            });
        }
    };
    return BaseDialog;
}(base_component_1.BaseComponent));
exports.BaseDialog = BaseDialog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy9iYXNlL2Jhc2UuZGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLGlDQUErQjtBQUMvQiw4QkFBOEM7QUFDOUMseURBQXVEO0FBTXZEO0lBQThELDhCQUFhO0lBYXZFO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBYk8sOEJBQXdCLEdBQWlCLElBQUksWUFBTyxFQUFFLENBQUM7UUFDdkQsOEJBQXdCLEdBQWlCLElBQUksWUFBTyxFQUFFLENBQUM7UUFDdkQsb0JBQWMsR0FBaUIsSUFBSSxZQUFPLEVBQUUsQ0FBQztRQUM3QyxvQkFBYyxHQUFpQixJQUFJLFlBQU8sRUFBRSxDQUFDO1FBQ3JELHNCQUFnQixHQUFvQixLQUFJLENBQUMsd0JBQXdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakYsc0JBQWdCLEdBQW9CLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqRixZQUFNLEdBQW9CLEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0QsWUFBTSxHQUFvQixLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBSXpELEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDOztJQUNyQixDQUFDO0lBR0QseUJBQUksR0FBSixVQUFLLE1BQVc7UUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQseUJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELHlCQUFJLEdBQUo7UUFBQSxpQkFlQztRQWRHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNaLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoRCxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoSixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNaLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoRCxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5SSxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQS9DQSxBQStDQyxDQS9DNkQsOEJBQWEsR0ErQzFFO0FBL0NxQixnQ0FBVSIsImZpbGUiOiJhcHAvc2hhcmVkL2NvbXBvbmVudHMvYmFzZS9iYXNlLmRpYWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UubW9kZWwnO1xuaW1wb3J0IHsgQVBJU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VEaWFsb2c8VCBleHRlbmRzIEJhc2VNb2RlbD4gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuICAgIG9iamVjdDogYW55O1xuICAgIGRpc3BsYXk6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBvbkNyZWF0ZUNvbXBsZXRlUmVjZWl2ZXI6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gICAgcHJpdmF0ZSBvblVwZGF0ZUNvbXBsZXRlUmVjZWl2ZXI6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gICAgcHJpdmF0ZSBvblNob3dSZWNlaXZlcjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgICBwcml2YXRlIG9uSGlkZVJlY2VpdmVyOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICAgIG9uQ3JlYXRlQ29tcGxldGU6IE9ic2VydmFibGU8YW55PiA9IHRoaXMub25DcmVhdGVDb21wbGV0ZVJlY2VpdmVyLmFzT2JzZXJ2YWJsZSgpO1xuICAgIG9uVXBkYXRlQ29tcGxldGU6IE9ic2VydmFibGU8YW55PiA9IHRoaXMub25VcGRhdGVDb21wbGV0ZVJlY2VpdmVyLmFzT2JzZXJ2YWJsZSgpO1xuICAgIG9uU2hvdzogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5vblNob3dSZWNlaXZlci5hc09ic2VydmFibGUoKTtcbiAgICBvbkhpZGU6IE9ic2VydmFibGU8YW55PiA9IHRoaXMub25IaWRlUmVjZWl2ZXIuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMub2JqZWN0ID0ge307XG4gICAgfVxuXG5cbiAgICBzaG93KG9iamVjdDogYW55KSB7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uU2hvd1JlY2VpdmVyLm5leHQob2JqZWN0KTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkhpZGVSZWNlaXZlci5uZXh0KCk7XG4gICAgfVxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9iamVjdC5pZCkge1xuICAgICAgICAgICAgdGhpcy5vYmplY3Quc2F2ZSh0aGlzKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMub25DcmVhdGVDb21wbGV0ZVJlY2VpdmVyLm5leHQodGhpcy5vYmplY3QpO1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHsgc2V2ZXJpdHk6ICdzdWNjZXNzJywgc3VtbWFyeTogJ1N1Y2Nlc3MnLCBkZXRhaWw6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdPYmplY3QgY3JlYXRlZCBzdWNjZXNzZnVsbHkuJykgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vYmplY3Quc2F2ZSh0aGlzKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMub25VcGRhdGVDb21wbGV0ZVJlY2VpdmVyLm5leHQodGhpcy5vYmplY3QpO1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHsgc2V2ZXJpdHk6ICdzdWNjZXNzJywgc3VtbWFyeTogJ1N1Y2Nlc3MnLCBkZXRhaWw6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdPYmplY3Qgc2F2ZWQgc3VjY2Vzc2Z1bGx5LicpIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19
