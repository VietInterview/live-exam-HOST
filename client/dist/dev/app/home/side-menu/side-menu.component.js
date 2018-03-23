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
var home_manager_service_1 = require("../home-manager.service");
var home_component_1 = require("../home.component");
var base_component_1 = require("../../shared/components/base/base.component");
var SideMenuComponent = (function (_super) {
    __extends(SideMenuComponent, _super);
    function SideMenuComponent(app, eventManager) {
        var _this = _super.call(this) || this;
        _this.app = app;
        _this.eventManager = eventManager;
        return _this;
    }
    SideMenuComponent.prototype.ngOnInit = function () {
        this.company = this.cacheService.UserCompany;
        if (this.authService.CurrentUser.login == 'admin' || this.authService.CurrentUser.is_admin) {
            this.setAdminMenu();
        }
        else {
            this.setUserMenu();
        }
    };
    SideMenuComponent.prototype.setAdminMenu = function () {
        this.model = [
            { label: 'Dashboard', icon: 'dashboard', routerLink: ['/dashboard'] },
            { label: '', separator: true, styleClass: 'menu-separator' },
            {
                label: 'Assessment', icon: 'grade',
                items: [
                    { label: 'Question banks', routerLink: ['/assessment/questions'] },
                    { label: 'Question category', routerLink: ['/assessment/groups'] },
                    { label: 'Exam', routerLink: ['/assessment/exams'] }
                ]
            },
            {
                label: 'Report', icon: 'pie_chart', routerLink: ['/reports']
            },
            {
                label: 'Accounts', icon: 'people',
                items: [
                    { label: 'Administrator', routerLink: ['/account/admins'] },
                    { label: 'Teacher', routerLink: ['/account/teachers'] },
                    { label: 'Student', routerLink: ['/account/students'] },
                    { label: 'Class tree', routerLink: ['/account/groups'] }
                ]
            }
        ];
    };
    SideMenuComponent.prototype.setUserMenu = function () {
        this.model = [
            { label: 'Dashboard', icon: 'dashboard', routerLink: ['/dashboard'] },
            { label: '', separator: true, styleClass: 'menu-separator' },
            { label: 'My exam', icon: 'alarm_add', routerLink: ['/lms/exams'] },
        ];
    };
    SideMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.layoutMenuScroller = this.layoutMenuScrollerViewChild.nativeElement;
        setTimeout(function () {
            jQuery(_this.layoutMenuScroller).nanoScroller({ flash: true });
        }, 10);
    };
    SideMenuComponent.prototype.updateNanoScroll = function () {
        var _this = this;
        setTimeout(function () {
            jQuery(_this.layoutMenuScroller).nanoScroller();
        }, 500);
    };
    SideMenuComponent.prototype.ngOnDestroy = function () {
        jQuery(this.layoutMenuScroller).nanoScroller({ flash: true });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], SideMenuComponent.prototype, "reset", void 0);
    __decorate([
        core_1.ViewChild('layoutMenuScroller'),
        __metadata("design:type", core_1.ElementRef)
    ], SideMenuComponent.prototype, "layoutMenuScrollerViewChild", void 0);
    SideMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'menu',
            templateUrl: 'side-menu.component.html',
            styleUrls: ['side-menu.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [home_component_1.HomeComponent, home_manager_service_1.HomeEventManager])
    ], SideMenuComponent);
    return SideMenuComponent;
}(base_component_1.BaseComponent));
exports.SideMenuComponent = SideMenuComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF1STtBQUt2SSxnRUFBMkQ7QUFDM0Qsb0RBQWtEO0FBRWxELDhFQUE0RTtBQWM1RTtJQUF1QyxxQ0FBYTtJQVNoRCwyQkFBbUIsR0FBa0IsRUFBVSxZQUE4QjtRQUE3RSxZQUNJLGlCQUFPLFNBQ1Y7UUFGa0IsU0FBRyxHQUFILEdBQUcsQ0FBZTtRQUFVLGtCQUFZLEdBQVosWUFBWSxDQUFrQjs7SUFFN0UsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDO1FBQzlDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBRSxPQUFPLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN2RixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7SUFDTCxDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDTCxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNyRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUU7WUFDNUQ7Z0JBQ0ksS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsT0FBTztnQkFDbEMsS0FBSyxFQUFFO29CQUNILEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLFVBQVUs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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIEVsZW1lbnRSZWYsIFJlbmRlcmVyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcbmltcG9ydCB7IEhvbWVFdmVudE1hbmFnZXIgfSBmcm9tICcuLi9ob21lLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi4vaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3JlZGVudGlhbCB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvY3JlZGVudGlhbC5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYmFzZS9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wYW55IH0gZnJvbSAnLi4vLi4vc2hhcmVkL21vZGVscy9jb21wYW55Lm1vZGVsJztcbmltcG9ydCB7IENhY2hlU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9jYWNoZS5zZXJ2aWNlJztcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdtZW51JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3NpZGUtbWVudS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3NpZGUtbWVudS5jb21wb25lbnQuY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcblxuZXhwb3J0IGNsYXNzIFNpZGVNZW51Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSByZXNldDogYm9vbGVhbjtcbiAgICBjb21wYW55OiBDb21wYW55O1xuICAgIG1vZGVsOiBhbnlbXTtcbiAgICBjcmVkZW50aWFsOiBDcmVkZW50aWFsXG4gICAgbGF5b3V0TWVudVNjcm9sbGVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBAVmlld0NoaWxkKCdsYXlvdXRNZW51U2Nyb2xsZXInKSBsYXlvdXRNZW51U2Nyb2xsZXJWaWV3Q2hpbGQ6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwOiBIb21lQ29tcG9uZW50LCBwcml2YXRlIGV2ZW50TWFuYWdlcjogSG9tZUV2ZW50TWFuYWdlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNvbXBhbnkgPSAgdGhpcy5jYWNoZVNlcnZpY2UuVXNlckNvbXBhbnk7XG4gICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLkN1cnJlbnRVc2VyLmxvZ2luPT0nYWRtaW4nIHx8IHRoaXMuYXV0aFNlcnZpY2UuQ3VycmVudFVzZXIuaXNfYWRtaW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QWRtaW5NZW51KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFVzZXJNZW51KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRBZG1pbk1lbnUoKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBbXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogJ0Rhc2hib2FyZCcsIGljb246ICdkYXNoYm9hcmQnLCByb3V0ZXJMaW5rOiBbJy9kYXNoYm9hcmQnXSB9LFxuICAgICAgICAgICAgICAgIHsgbGFiZWw6ICcnLCBzZXBhcmF0b3I6IHRydWUsIHN0eWxlQ2xhc3M6ICdtZW51LXNlcGFyYXRvcicgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQXNzZXNzbWVudCcsIGljb246ICdncmFkZScsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnUXVlc3Rpb24gYmFua3MnLCByb3V0ZXJMaW5rOiBbJy9hc3Nlc3NtZW50L3F1ZXN0aW9ucyddIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnUXVlc3Rpb24gY2F0ZWdvcnknLCByb3V0ZXJMaW5rOiBbJy9hc3Nlc3NtZW50L2dyb3VwcyddIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnRXhhbScsIHJvdXRlckxpbms6IFsnL2Fzc2Vzc21lbnQvZXhhbXMnXSB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdSZXBvcnQnLCBpY29uOiAncGllX2NoYXJ0Jyxyb3V0ZXJMaW5rOiBbJy9yZXBvcnRzJ11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdBY2NvdW50cycsIGljb246ICdwZW9wbGUnLFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0FkbWluaXN0cmF0b3InLCByb3V0ZXJMaW5rOiBbJy9hY2NvdW50L2FkbWlucyddIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnVGVhY2hlcicsIHJvdXRlckxpbms6IFsnL2FjY291bnQvdGVhY2hlcnMnXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ1N0dWRlbnQnLCByb3V0ZXJMaW5rOiBbJy9hY2NvdW50L3N0dWRlbnRzJ10gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdDbGFzcyB0cmVlJywgcm91dGVyTGluazogWycvYWNjb3VudC9ncm91cHMnXSB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuICAgIH1cblxuICAgIHNldFVzZXJNZW51KCkge1xuICAgICAgICB0aGlzLm1vZGVsID0gW1xuICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdEYXNoYm9hcmQnLCBpY29uOiAnZGFzaGJvYXJkJywgcm91dGVyTGluazogWycvZGFzaGJvYXJkJ10gfSxcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAnJywgc2VwYXJhdG9yOiB0cnVlLCBzdHlsZUNsYXNzOiAnbWVudS1zZXBhcmF0b3InIH0sXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogJ015IGV4YW0nLCBpY29uOiAnYWxhcm1fYWRkJywgcm91dGVyTGluazogWycvbG1zL2V4YW1zJ10gfSxcbiAgICAgICAgICAgIF07XG4gICAgfVxuXG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMubGF5b3V0TWVudVNjcm9sbGVyID0gPEhUTUxEaXZFbGVtZW50PnRoaXMubGF5b3V0TWVudVNjcm9sbGVyVmlld0NoaWxkLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBqUXVlcnkodGhpcy5sYXlvdXRNZW51U2Nyb2xsZXIpLm5hbm9TY3JvbGxlcih7IGZsYXNoOiB0cnVlIH0pO1xuICAgICAgICB9LCAxMCk7XG4gICAgfVxuXG5cbiAgICB1cGRhdGVOYW5vU2Nyb2xsKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzLmxheW91dE1lbnVTY3JvbGxlcikubmFub1Njcm9sbGVyKCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGpRdWVyeSh0aGlzLmxheW91dE1lbnVTY3JvbGxlcikubmFub1Njcm9sbGVyKHsgZmxhc2g6IHRydWUgfSk7XG4gICAgfVxufVxuIl19
