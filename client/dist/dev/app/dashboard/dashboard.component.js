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
var base_component_1 = require("../shared/components/base/base.component");
var home_manager_service_1 = require("../home/home-manager.service");
var DashboardComponent = (function (_super) {
    __extends(DashboardComponent, _super);
    function DashboardComponent(eventManager) {
        var _this = _super.call(this) || this;
        _this.eventManager = eventManager;
        return _this;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.isAdmin = this.authService.CurrentUser.login == 'admin' || this.authService.CurrentUser.is_admin;
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dashboard',
            templateUrl: 'dashboard.component.html'
        }),
        __metadata("design:paramtypes", [home_manager_service_1.HomeEventManager])
    ], DashboardComponent);
    return DashboardComponent;
}(base_component_1.BaseComponent));
exports.DashboardComponent = DashboardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEU7QUFDMUUsMkVBQXlFO0FBQ3pFLHFFQUFnRTtBQVFoRTtJQUF3QyxzQ0FBYTtJQUlqRCw0QkFBb0IsWUFBOEI7UUFBbEQsWUFDSSxpQkFBTyxTQUNWO1FBRm1CLGtCQUFZLEdBQVosWUFBWSxDQUFrQjs7SUFFbEQsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBRSxPQUFPLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO0lBQ3JHLENBQUM7SUFWUSxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsMEJBQTBCO1NBRTFDLENBQUM7eUNBS29DLHVDQUFnQjtPQUp6QyxrQkFBa0IsQ0FZOUI7SUFBRCx5QkFBQztDQVpELEFBWUMsQ0FadUMsOEJBQWEsR0FZcEQ7QUFaWSxnREFBa0IiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9zaGFyZWQvY29tcG9uZW50cy9iYXNlL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVFdmVudE1hbmFnZXIgfSBmcm9tICcuLi9ob21lL2hvbWUtbWFuYWdlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2Rhc2hib2FyZCcsXG4gICAgdGVtcGxhdGVVcmw6ICdkYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnXG5cbn0pXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICAgIGlzQWRtaW46Ym9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBIb21lRXZlbnRNYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgXHR0aGlzLmlzQWRtaW4gPSB0aGlzLmF1dGhTZXJ2aWNlLkN1cnJlbnRVc2VyLmxvZ2luPT0nYWRtaW4nIHx8IHRoaXMuYXV0aFNlcnZpY2UuQ3VycmVudFVzZXIuaXNfYWRtaW47XG4gICAgfVxuXG59XG5cbiJdfQ==
