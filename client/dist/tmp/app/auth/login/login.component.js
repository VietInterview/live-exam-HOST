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
var base_component_1 = require("../../shared/components/base/base.component");
var LoginComponent = (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(route, router) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.router = router;
        _this.mode = 'prod';
        return _this;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.credential = this.authService.StoredCredential;
        console.log(this.credential);
        this.remember = this.authService.Remember;
        this.company = this.cacheService.UserCompany;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.credential, this.cloudid)
            .subscribe(function (user) {
            _this.authService.saveCredential(_this.credential, _this.remember);
            _this.authService.CurrentUser.getCompany(_this).subscribe(function (company) {
                _this.cacheService.UserCompany = company;
            });
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.messageService.add({ severity: 'error', summary: 'Error', detail: _this.translateService.instant('Login failed.') });
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], LoginComponent.prototype, "remember", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LoginComponent.prototype, "cloudid", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-login',
            template: "<div class=\"login-body\">     <div class=\"login-panel ui-fluid\">         <div class=\"login-panel-header\">             <img [src]='company.logo | imageBase64'>         </div>         <div class=\"login-panel-content\">             <form class=\"form-horizontal form-simple\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate  autocomplete=\"off\">                 <div class=\"ui-g\">                     <div class=\" ui-g-12 \">                         <h1>{{company.name}}</h1>                     </div>                     <div class=\" ui-g-12 \"[hidden]=\"mode=='prod'\" >                         <span class=\"md-inputfield\">                             <input type=\"text\"  pInputText name=\"cloudid\" [(ngModel)]=\"cloudid\">                             <label for=\"cloudid\">{{'Cloud ID' | translate}}</label>                         </span>                     </div>                     <div class=\" ui-g-12 \">                         <span class=\"md-inputfield\">                             <input type=\"text\" pInputText name=\"username\"                             [(ngModel)]=\"credential.username\" #username=\"ngModel\"                             required>                             <label for=\"username\">{{'Username'|translate}}</label>                             <div *ngIf=\"username.invalid && (username.dirty || username.touched)\"                                 class=\"ui-message ui-messages-error ui-corner-all\">                                 <div *ngIf=\"username.errors.required\">                                     {{'Username is required' | translate}}                                 </div>                             </div>                         </span>                     </div>                     <div class=\" ui-g-12 \">                         <span class=\"md-inputfield\">                             <input type=\"password\" pInputText autocomplete=\"off\" name=\"password\"                             [(ngModel)]=\"credential.password\" #password=\"ngModel\"                             required>                             <label for=\"password\">{{'Password'|translate}}</label>                             <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"                                 class=\"ui-message ui-messages-error ui-corner-all\">                                 <div *ngIf=\"password.errors.required\">                                     {{'Password is required' | translate}}                                 </div>                             </div>                         </span>                     </div>                     <div class=\"ui-g-12\">                         <p-checkbox name=\"remember\" binary=\"true\" label=\"{{'Remember password'|translate}}\" [(ngModel)]=\"remember\"></p-checkbox>                     </div>                     <div class=\"ui-g-12\">                         <button pButton type=\"submit\" icon=\"fa ui-icon-person\" label=\"{{'Sign in'|translate}}\"></button>                     </div>                     <div class=\"ui-g-12\">                         <a routerLink=\"/auth/recover-password\">{{'Forgot your password ?'|translate}}</a>                     </div>                 </div>             </form>         </div>     </div> </div>"
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}(base_component_1.BaseComponent));
exports.LoginComponent = LoginComponent;
