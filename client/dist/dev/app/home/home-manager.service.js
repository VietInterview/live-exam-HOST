"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var Rx_1 = require("rxjs/Rx");
var HomeEventManager = (function () {
    function HomeEventManager() {
        this.showProfileEventReceiver = new Rx_1.Subject();
        this.changePasswordEventReceiver = new Rx_1.Subject();
        this.logoutEventReceiver = new Rx_1.Subject();
        this.menuEventReceiver = new Rx_1.Subject();
        this.topbarMenuEventReceiver = new Rx_1.Subject();
        this.topbarMobileMenuEventReceiver = new Rx_1.Subject();
        this.topbarRootItemEventReceiver = new Rx_1.Subject();
        this.sidebarEventReceiver = new Rx_1.Subject();
        this.toggleMenuEventReceiver = new Rx_1.Subject();
        this.switchViewModeEventReceiver = new Rx_1.Subject();
        this.showProfileEvents = this.showProfileEventReceiver.asObservable();
        this.changePasswordEvents = this.changePasswordEventReceiver.asObservable();
        this.logoutEvents = this.logoutEventReceiver.asObservable();
        this.topbarMenuEvents = this.topbarMenuEventReceiver.asObservable();
        this.topbarMobileMenuEvents = this.topbarMobileMenuEventReceiver.asObservable();
        this.menuEvents = this.menuEventReceiver.asObservable();
        this.topbarRootItemEvents = this.topbarRootItemEventReceiver.asObservable();
        this.sidebarEvents = this.sidebarEventReceiver.asObservable();
        this.toggleMenuEvents = this.toggleMenuEventReceiver.asObservable();
        this.switchViewModeEvents = this.switchViewModeEventReceiver.asObservable();
    }
    HomeEventManager.prototype.showProfile = function () {
        this.showProfileEventReceiver.next();
    };
    HomeEventManager.prototype.changePassword = function () {
        this.changePasswordEventReceiver.next();
    };
    HomeEventManager.prototype.logout = function () {
        this.logoutEventReceiver.next();
    };
    HomeEventManager.prototype.topbarMenuClick = function () {
        this.topbarMenuEventReceiver.next();
    };
    HomeEventManager.prototype.topbarMobileMenuClick = function () {
        this.topbarMobileMenuEventReceiver.next();
    };
    HomeEventManager.prototype.menuClick = function () {
        this.menuEventReceiver.next();
    };
    HomeEventManager.prototype.topbarRootItemClick = function (profile) {
        this.topbarRootItemEventReceiver.next(profile);
    };
    HomeEventManager.prototype.sidebarClick = function () {
        this.sidebarEventReceiver.next();
    };
    HomeEventManager.prototype.toggleMenuClick = function () {
        this.toggleMenuEventReceiver.next();
    };
    HomeEventManager.prototype.swithViewMode = function (isAdmin) {
        this.switchViewModeEventReceiver.next(isAdmin);
    };
    HomeEventManager = __decorate([
        core_1.Injectable()
    ], HomeEventManager);
    return HomeEventManager;
}());
exports.HomeEventManager = HomeEventManager;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUtbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsc0NBQTJDO0FBQzNDLGlDQUErQjtBQUMvQiw4QkFBOEM7QUFHOUM7SUFEQTtRQUVZLDZCQUF3QixHQUFpQixJQUFJLFlBQU8sRUFBRSxDQUFDO1FBQ3ZELGdDQUEyQixHQUFpQixJQUFJLFlBQU8sRUFBRSxDQUFDO1FBQzFELHdCQUFtQixHQUFpQixJQUFJLFlBQU8sRUFBRSxDQUFDO1FBQ2xELHNCQUFpQixHQUFpQixJQUFJLFlBQU8sRUFBRSxDQUFDO1FBQ2hELDRCQUF1QixHQUFpQixJQUFJLFlBQU8sRUFBRSxDQUFDO1FBQ3RELGtDQUE2QixHQUFpQixJQUFJLFlBQU8sRUFBRSxDQUFDO1FBQzVELGdDQUEyQixHQUFpQixJQUFJLFlBQU8sRUFBRSxDQUFDO1FBQzFELHlCQUFvQixHQUFpQixJQUFJLFlBQU8sRUFBRSxDQUFDO1FBQ25ELDRCQUF1QixHQUFpQixJQUFJLFlBQU8sRUFBRSxDQUFDO1FBQ3RELGdDQUEyQixHQUFpQixJQUFJLFlBQU8sRUFBRSxDQUFDO1FBRWxFLHNCQUFpQixHQUFvQixJQUFJLENBQUMsd0JBQXdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEYseUJBQW9CLEdBQW9CLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4RixpQkFBWSxHQUFvQixJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEUscUJBQWdCLEdBQW9CLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNoRiwyQkFBc0IsR0FBb0IsSUFBSSxDQUFDLDZCQUE2QixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVGLGVBQVUsR0FBb0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BFLHlCQUFvQixHQUFvQixJQUFJLENBQUMsMkJBQTJCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEYsa0JBQWEsR0FBb0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFFLHFCQUFnQixHQUFvQixJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDaEYseUJBQW9CLEdBQW9CLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQTRDNUYsQ0FBQztJQXpDRyxzQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRCx5Q0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRCxpQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCwwQ0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxnREFBcUIsR0FBckI7UUFDSSxJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELDhDQUFtQixHQUFuQixVQUFvQixPQUFPO1FBQ3ZCLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHVDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELDBDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELHdDQUFhLEdBQWIsVUFBYyxPQUFlO1FBQ3pCLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQTlEUSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTtPQUNBLGdCQUFnQixDQWlFNUI7SUFBRCx1QkFBQztDQWpFRCxBQWlFQyxJQUFBO0FBakVZLDRDQUFnQiIsImZpbGUiOiJhcHAvaG9tZS9ob21lLW1hbmFnZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIb21lRXZlbnRNYW5hZ2VyIHtcbiAgICBwcml2YXRlIHNob3dQcm9maWxlRXZlbnRSZWNlaXZlcjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgICBwcml2YXRlIGNoYW5nZVBhc3N3b3JkRXZlbnRSZWNlaXZlcjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgICBwcml2YXRlIGxvZ291dEV2ZW50UmVjZWl2ZXI6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gICAgcHJpdmF0ZSBtZW51RXZlbnRSZWNlaXZlcjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgICBwcml2YXRlIHRvcGJhck1lbnVFdmVudFJlY2VpdmVyOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICAgIHByaXZhdGUgdG9wYmFyTW9iaWxlTWVudUV2ZW50UmVjZWl2ZXI6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gICAgcHJpdmF0ZSB0b3BiYXJSb290SXRlbUV2ZW50UmVjZWl2ZXI6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gICAgcHJpdmF0ZSBzaWRlYmFyRXZlbnRSZWNlaXZlcjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgICBwcml2YXRlIHRvZ2dsZU1lbnVFdmVudFJlY2VpdmVyOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICAgIHByaXZhdGUgc3dpdGNoVmlld01vZGVFdmVudFJlY2VpdmVyOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgc2hvd1Byb2ZpbGVFdmVudHM6T2JzZXJ2YWJsZTxhbnk+ID0gIHRoaXMuc2hvd1Byb2ZpbGVFdmVudFJlY2VpdmVyLmFzT2JzZXJ2YWJsZSgpO1xuICAgIGNoYW5nZVBhc3N3b3JkRXZlbnRzOk9ic2VydmFibGU8YW55PiA9ICB0aGlzLmNoYW5nZVBhc3N3b3JkRXZlbnRSZWNlaXZlci5hc09ic2VydmFibGUoKTtcbiAgICBsb2dvdXRFdmVudHM6T2JzZXJ2YWJsZTxhbnk+ID0gIHRoaXMubG9nb3V0RXZlbnRSZWNlaXZlci5hc09ic2VydmFibGUoKTtcbiAgICB0b3BiYXJNZW51RXZlbnRzOk9ic2VydmFibGU8YW55PiA9ICB0aGlzLnRvcGJhck1lbnVFdmVudFJlY2VpdmVyLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHRvcGJhck1vYmlsZU1lbnVFdmVudHM6T2JzZXJ2YWJsZTxhbnk+ID0gIHRoaXMudG9wYmFyTW9iaWxlTWVudUV2ZW50UmVjZWl2ZXIuYXNPYnNlcnZhYmxlKCk7XG4gICAgbWVudUV2ZW50czpPYnNlcnZhYmxlPGFueT4gPSAgdGhpcy5tZW51RXZlbnRSZWNlaXZlci5hc09ic2VydmFibGUoKTtcbiAgICB0b3BiYXJSb290SXRlbUV2ZW50czpPYnNlcnZhYmxlPGFueT4gPSAgdGhpcy50b3BiYXJSb290SXRlbUV2ZW50UmVjZWl2ZXIuYXNPYnNlcnZhYmxlKCk7XG4gICAgc2lkZWJhckV2ZW50czpPYnNlcnZhYmxlPGFueT4gPSAgdGhpcy5zaWRlYmFyRXZlbnRSZWNlaXZlci5hc09ic2VydmFibGUoKTtcbiAgICB0b2dnbGVNZW51RXZlbnRzOk9ic2VydmFibGU8YW55PiA9ICB0aGlzLnRvZ2dsZU1lbnVFdmVudFJlY2VpdmVyLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHN3aXRjaFZpZXdNb2RlRXZlbnRzOk9ic2VydmFibGU8YW55PiA9ICB0aGlzLnN3aXRjaFZpZXdNb2RlRXZlbnRSZWNlaXZlci5hc09ic2VydmFibGUoKTtcblxuXG4gICAgc2hvd1Byb2ZpbGUoKSB7XG4gICAgICAgIHRoaXMuc2hvd1Byb2ZpbGVFdmVudFJlY2VpdmVyLm5leHQoKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VQYXNzd29yZCgpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VQYXNzd29yZEV2ZW50UmVjZWl2ZXIubmV4dCgpO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5sb2dvdXRFdmVudFJlY2VpdmVyLm5leHQoKTtcbiAgICB9XG5cbiAgICB0b3BiYXJNZW51Q2xpY2soKSB7XG4gICAgICAgIHRoaXMudG9wYmFyTWVudUV2ZW50UmVjZWl2ZXIubmV4dCgpO1xuICAgIH1cblxuICAgIHRvcGJhck1vYmlsZU1lbnVDbGljaygpIHtcbiAgICAgICAgdGhpcy50b3BiYXJNb2JpbGVNZW51RXZlbnRSZWNlaXZlci5uZXh0KCk7XG4gICAgfVxuXG4gICAgbWVudUNsaWNrKCkge1xuICAgICAgICB0aGlzLm1lbnVFdmVudFJlY2VpdmVyLm5leHQoKTtcbiAgICB9XG5cbiAgICB0b3BiYXJSb290SXRlbUNsaWNrKHByb2ZpbGUpIHtcbiAgICAgICAgdGhpcy50b3BiYXJSb290SXRlbUV2ZW50UmVjZWl2ZXIubmV4dChwcm9maWxlKTtcbiAgICB9XG5cbiAgICBzaWRlYmFyQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2lkZWJhckV2ZW50UmVjZWl2ZXIubmV4dCgpO1xuICAgIH1cblxuICAgIHRvZ2dsZU1lbnVDbGljaygpIHtcbiAgICAgICAgdGhpcy50b2dnbGVNZW51RXZlbnRSZWNlaXZlci5uZXh0KCk7XG4gICAgfVxuXG4gICAgc3dpdGhWaWV3TW9kZShpc0FkbWluOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hWaWV3TW9kZUV2ZW50UmVjZWl2ZXIubmV4dChpc0FkbWluKTtcbiAgICB9XG5cblxufVxuIl19
