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
var lang_service_1 = require("../../shared/services/lang.service");
var base_component_1 = require("../../shared/components/base/base.component");
var NavbarComponent = (function (_super) {
    __extends(NavbarComponent, _super);
    function NavbarComponent(langService, parent, eventManager) {
        var _this = _super.call(this) || this;
        _this.langService = langService;
        _this.parent = parent;
        _this.eventManager = eventManager;
        _this.langs = [
            { label: 'English', value: 'gb' },
            { label: 'Vietnamese', value: 'vn' }
        ];
        _this.selectedLang = _this.langService.Lang;
        _this.isAdmin = _this.authService.CurrentUser.is_admin || _this.authService.CurrentUser.login == 'admin';
        _this.viewMode = _this.isAdmin;
        return _this;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.user = this.authService.CurrentUser;
    };
    NavbarComponent.prototype.selectLang = function ($event) {
        this.langService.Lang = $event.value;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "selectedLang", void 0);
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-navbar',
            template: "<div class=\"layout-topbar\">   <img alt=\"logo\" src=\"assets/layout/images/logo-slim.png\" class=\"mobile-logo\" />   <a class=\"menu-btn\" (click)=\"eventManager.menuClick()\">         <i class=\"material-icons\">&#xE5D2;</i>     </a>   <a class=\"topbar-menu-btn\" (click)=\"eventManager.topbarMobileMenuClick()\">         <i class=\"material-icons\">&#xE853;</i>     </a>   <div class=\"layout-topbar-menu-wrapper\">     <ul class=\"topbar-menu fadeInDown\" [ngClass]=\"{'topbar-menu-active': parent.topbarMenuActive}\" (click)=\"eventManager.topbarMenuClick()\">       <li #profile class=\"profile-item\" [ngClass]=\"{'active-topmenuitem': parent.activeTopbarItem === profile}\" (click)=\"eventManager.topbarRootItemClick(profile)\">         <a>             <span class=\"profile-image-wrapper\">                 <img [src]='user.image | imageBase64'/>             </span>             <span class=\"topbar-item-name profile-name\">{{user.display_name}}</span>         </a>         <ul class=\"fadeInDown\">           <li role=\"menuitem\">             <a  (click)=\"eventManager.showProfile()\">                 <i class=\"material-icons\">account_circle</i>                 <span>{{'User Profile'|translate}}</span>             </a>           </li>           <li role=\"menuitem\">             <a  (click)=\"eventManager.changePassword()\">                 <i class=\"material-icons\">verified_user</i>                 <span>{{'Change Password'|translate}}</span>             </a>           </li>           <li role=\"menuitem\">             <a  (click)=\"eventManager.logout()\">                 <i class=\"material-icons\" >exit_to_app</i>                 <span>{{'Log out'|translate}}</span>             </a>           </li>         </ul>       </li>        <li #language [ngClass]=\"{'active-topmenuitem':parent.activeTopbarItem === language}\" (click)=\"eventManager.topbarRootItemClick( language)\">         <p-dropdown [options]=\"langs\" (onChange)=\"selectLang($event)\" [(ngModel)]=\"selectedLang\">           <ng-template let-item pTemplate=\"selectedItem\">             <div class=\"ui-helper-clearfix\" style=\"position: relative;height: 25px;\">               <span class=\"flag-icon\" style=\"margin-top:4px;vertical-align:middle;float: left\" [ngClass]=\"'flag-icon-'+item.value\"></span>               <div style=\"font-size:14px;float:left; margin-left: 5px; margin-top:4px;vertical-align:middle\">{{item.label}}</div>             </div>           </ng-template>           <ng-template let-item pTemplate=\"item\">             <div class=\"ui-helper-clearfix\" style=\"position: relative;height: 25px;\">               <span class=\"flag-icon\" style=\"vertical-align:middle\" [ngClass]=\"'flag-icon-'+item.value\"></span>               <div style=\"font-size:14px;float:right;margin-top:4px;vertical-align:middle\">{{item.label}}</div>             </div>           </ng-template>         </p-dropdown>       </li>        <li #mode [ngClass]=\"{'active-topmenuitem':parent.activeTopbarItem === mode}\" (click)=\"eventManager.topbarRootItemClick( mode)\">         <p-toggleButton [(ngModel)]=\"viewMode\" onLabel=\"{{'Admin mode'|translate}}\" offLabel=\"{{'Learning mode'|translate}}\" *ngIf=\"isAdmin\" (onChange)=\"settingService.setAdminMode($event.checked)\"  [style]=\"{'width':'150px'}\"></p-toggleButton>       </li>     </ul>   </div> </div>",
        }),
        __metadata("design:paramtypes", [lang_service_1.LangService, home_component_1.HomeComponent, home_manager_service_1.HomeEventManager])
    ], NavbarComponent);
    return NavbarComponent;
}(base_component_1.BaseComponent));
exports.NavbarComponent = NavbarComponent;
