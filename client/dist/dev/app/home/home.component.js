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
var router_1 = require("@angular/router");
var change_password_dialog_component_1 = require("./change-password-dialog/change-password-dialog.component");
var base_component_1 = require("../shared/components/base/base.component");
var home_manager_service_1 = require("./home-manager.service");
var profile_dialog_component_1 = require("../account/user/profile-dialog/profile-dialog.component");
var HomeComponent = (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(router, eventManager) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.eventManager = eventManager;
        return _this;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/dashboard']);
    };
    HomeComponent.prototype.onWrapperClick = function () {
        if (!this.menuClick && !this.menuButtonClick) {
            this.mobileMenuActive = false;
        }
        if (!this.topbarMenuClick && !this.topbarMenuButtonClick) {
            this.topbarMenuActive = false;
            this.activeTopbarItem = null;
        }
        this.menuClick = false;
        this.menuButtonClick = false;
        this.topbarMenuClick = false;
        this.topbarMenuButtonClick = false;
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.eventManager.changePasswordEvents.subscribe(function () {
            _this.passwordDialog.show();
        });
        this.eventManager.showProfileEvents.subscribe(function () {
            var user = _this.authService.CurrentUser;
            _this.userProfileDialog.show(user);
        });
        this.eventManager.logoutEvents.subscribe(function () {
            _this.authService.logout();
            _this.router.navigate(['/auth']);
        });
        this.eventManager.topbarMenuEvents.subscribe(function () {
            _this.topbarMenuClick = true;
        });
        this.eventManager.topbarRootItemEvents.subscribe(function (item) {
            if (_this.activeTopbarItem === item) {
                _this.activeTopbarItem = null;
            }
            else {
                _this.activeTopbarItem = item;
            }
        });
        this.eventManager.menuEvents.subscribe(function () {
            _this.menuButtonClick = true;
            if (_this.isMobile()) {
                _this.mobileMenuActive = !_this.mobileMenuActive;
            }
        });
        this.eventManager.topbarMobileMenuEvents.subscribe(function () {
            _this.topbarMenuButtonClick = true;
            _this.topbarMenuActive = !_this.topbarMenuActive;
        });
        this.eventManager.sidebarEvents.subscribe(function () {
            _this.menuClick = true;
        });
        this.eventManager.toggleMenuEvents.subscribe(function () {
            _this.layoutStatic = !_this.layoutStatic;
        });
    };
    HomeComponent.prototype.isMobile = function () {
        return window.innerWidth < 640;
    };
    __decorate([
        core_1.ViewChild(change_password_dialog_component_1.ChangePasswordDialog),
        __metadata("design:type", change_password_dialog_component_1.ChangePasswordDialog)
    ], HomeComponent.prototype, "passwordDialog", void 0);
    __decorate([
        core_1.ViewChild(profile_dialog_component_1.UserProfileDialog),
        __metadata("design:type", profile_dialog_component_1.UserProfileDialog)
    ], HomeComponent.prototype, "userProfileDialog", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: 'home.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, home_manager_service_1.HomeEventManager])
    ], HomeComponent);
    return HomeComponent;
}(base_component_1.BaseComponent));
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFrRztBQUNsRywwQ0FBeUQ7QUFDekQsOEdBQWlHO0FBRWpHLDJFQUF5RTtBQUV6RSwrREFBMEQ7QUFDMUQsb0dBQTRGO0FBUzVGO0lBQW1DLGlDQUFhO0lBaUI1Qyx1QkFBcUIsTUFBYyxFQUFVLFlBQThCO1FBQTNFLFlBQ0ksaUJBQU8sU0FDVjtRQUZvQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsa0JBQVksR0FBWixZQUFZLENBQWtCOztJQUUzRSxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNLLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsc0NBQWMsR0FBZDtRQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLENBQUM7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQUEsaUJBc0NDO1FBckNH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LEdBcUYvQztBQXJGWSxzQ0FBYSIsImZpbGUiOiJhcHAvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgUmVuZGVyZXIsIE9uSW5pdCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkRGlhbG9nIH0gZnJvbSAnLi9jaGFuZ2UtcGFzc3dvcmQtZGlhbG9nL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL2NvbXBvbmVudHMvYmFzZS9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IHsgSG9tZUV2ZW50TWFuYWdlciB9IGZyb20gJy4vaG9tZS1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVEaWFsb2cgfSBmcm9tICcuLi9hY2NvdW50L3VzZXIvcHJvZmlsZS1kaWFsb2cvcHJvZmlsZS1kaWFsb2cuY29tcG9uZW50Jztcbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnaG9tZScsXG4gICAgdGVtcGxhdGVVcmw6ICdob21lLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKENoYW5nZVBhc3N3b3JkRGlhbG9nKSBwYXNzd29yZERpYWxvZzogQ2hhbmdlUGFzc3dvcmREaWFsb2c7XG4gICAgQFZpZXdDaGlsZChVc2VyUHJvZmlsZURpYWxvZykgdXNlclByb2ZpbGVEaWFsb2c6IFVzZXJQcm9maWxlRGlhbG9nO1xuXG4gICAgbWVudUNsaWNrOiBib29sZWFuO1xuICAgIG1lbnVCdXR0b25DbGljazogYm9vbGVhbjtcbiAgICB0b3BiYXJNZW51QnV0dG9uQ2xpY2s6IGJvb2xlYW47XG4gICAgdG9wYmFyTWVudUNsaWNrOiBib29sZWFuO1xuICAgIHRvcGJhck1lbnVBY3RpdmU6IGJvb2xlYW47XG4gICAgYWN0aXZlVG9wYmFySXRlbTogRWxlbWVudDtcbiAgICBsYXlvdXRTdGF0aWM6IGJvb2xlYW47XG4gICAgc2lkZWJhckFjdGl2ZTogYm9vbGVhbjtcbiAgICBtb2JpbGVNZW51QWN0aXZlOiBib29sZWFuO1xuICAgIGRhcmtNZW51OiBib29sZWFuO1xuXG5cbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBldmVudE1hbmFnZXIgOkhvbWVFdmVudE1hbmFnZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Rhc2hib2FyZCddKTtcbiAgICB9XG5cbiAgICBvbldyYXBwZXJDbGljaygpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1lbnVDbGljayAmJiAhdGhpcy5tZW51QnV0dG9uQ2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMubW9iaWxlTWVudUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnRvcGJhck1lbnVDbGljayAmJiAhdGhpcy50b3BiYXJNZW51QnV0dG9uQ2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMudG9wYmFyTWVudUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVUb3BiYXJJdGVtID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1lbnVDbGljayA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lbnVCdXR0b25DbGljayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRvcGJhck1lbnVDbGljayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRvcGJhck1lbnVCdXR0b25DbGljayA9IGZhbHNlO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuY2hhbmdlUGFzc3dvcmRFdmVudHMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmREaWFsb2cuc2hvdygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuc2hvd1Byb2ZpbGVFdmVudHMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHZhciB1c2VyID0gdGhpcy5hdXRoU2VydmljZS5DdXJyZW50VXNlcjtcbiAgICAgICAgICAgIHRoaXMudXNlclByb2ZpbGVEaWFsb2cuc2hvdyh1c2VyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmxvZ291dEV2ZW50cy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgnXSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci50b3BiYXJNZW51RXZlbnRzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvcGJhck1lbnVDbGljayA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci50b3BiYXJSb290SXRlbUV2ZW50cy5zdWJzY3JpYmUoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlVG9wYmFySXRlbSA9PT0gaXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlVG9wYmFySXRlbSA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlVG9wYmFySXRlbSA9IGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5tZW51RXZlbnRzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1lbnVCdXR0b25DbGljayA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5pc01vYmlsZSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2JpbGVNZW51QWN0aXZlID0gIXRoaXMubW9iaWxlTWVudUFjdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLnRvcGJhck1vYmlsZU1lbnVFdmVudHMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9wYmFyTWVudUJ1dHRvbkNsaWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudG9wYmFyTWVudUFjdGl2ZSA9ICF0aGlzLnRvcGJhck1lbnVBY3RpdmU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5zaWRlYmFyRXZlbnRzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1lbnVDbGljayA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci50b2dnbGVNZW51RXZlbnRzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxheW91dFN0YXRpYyA9ICF0aGlzLmxheW91dFN0YXRpYztcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBpc01vYmlsZSgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDwgNjQwO1xuICAgIH1cblxufVxuIl19
