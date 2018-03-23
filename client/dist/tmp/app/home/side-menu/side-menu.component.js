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
        var _this = this;
        this.company = this.cacheService.UserCompany;
        if (this.settingService.adminMode) {
            this.setAdminMenu();
        }
        else {
            this.setUserMenu();
        }
        this.settingService.adminModeEvents.subscribe(function (adminMode) {
            if (adminMode)
                _this.setAdminMenu();
            else
                _this.setUserMenu();
        });
    };
    SideMenuComponent.prototype.setAdminMenu = function () {
        this.model = [
            { label: 'Dashboard', icon: 'dashboard', routerLink: ['/dashboard'] },
            { label: '', separator: true, styleClass: 'menu-separator' },
            {
                label: 'Enrollment', icon: 'school',
                items: [
                    { label: 'Course', routerLink: ['/enrollment/courses'] },
                    { label: 'Course group', routerLink: ['/enrollment/groups'] },
                    { label: 'Class', routerLink: ['/enrollment/classes'] },
                ]
            },
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
                    { label: 'User', routerLink: ['/account/users'] },
                    { label: 'Group', routerLink: ['/account/groups'] }
                ]
            },
            {
                label: 'Setting', icon: 'settings',
                items: [
                    { label: 'Application', routerLink: ['/setting/app'] },
                    { label: 'Mail', routerLink: ['/setting/mail'] }
                ]
            }
        ];
    };
    SideMenuComponent.prototype.setUserMenu = function () {
        this.model = [
            { label: 'Dashboard', icon: 'dashboard', routerLink: ['/dashboard'] },
            { label: '', separator: true, styleClass: 'menu-separator' },
            { label: 'My course', icon: 'school', routerLink: ['/lms/courses'] },
            { label: 'My exam', icon: 'alarm_add', routerLink: ['/lms/exams'] },
            { label: 'Conference', icon: 'perm_phone_msg', routerLink: ['/lms/meetings'] },
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
            selector: 'etraining-menu',
            template: "<style>     .app-name{         font-size: 20px !important;     } </style> <div class=\"layout-sidebar\" [ngClass]=\"{'layout-sidebar-active': app.sidebarActive, 'layout-sidebar-dark': app.darkMenu}\"      (click)=\"eventManager.sidebarClick()\" (mouseover)=\"app.sidebarActive=true\" (mouseleave)=\"app.sidebarActive=false\">     <div class=\"sidebar-logo\">         <a routerLink=\"/dashboard\">             <img [src]='company.logo | imageBase64' width=\"64\" height=\"32\">             <span class=\"app-name\">e-Learning</span>         </a>         <a class=\"sidebar-anchor\" title=\"Toggle Menu\" (click)=\"eventManager.toggleMenuClick()\"></a>     </div>                  <div #layoutMenuScroller class=\"nano\">         <div class=\"nano-content sidebar-scroll-content\">             <div class=\"layout-menu-container\" (click)=\"updateNanoScroll()\">                 <ul etraining-submenu [item]=\"model\" root=\"true\" class=\"layout-menu\" visible=\"true\" [reset]=\"reset\"></ul>             </div>         </div>     </div> </div>",
            styles: [".menu-separator{border-bottom:1px solid #ede9e9}"],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [home_component_1.HomeComponent,
            home_manager_service_1.HomeEventManager])
    ], SideMenuComponent);
    return SideMenuComponent;
}(base_component_1.BaseComponent));
exports.SideMenuComponent = SideMenuComponent;
