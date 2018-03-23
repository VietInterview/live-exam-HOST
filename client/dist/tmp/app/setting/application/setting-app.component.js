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
var base_component_1 = require("../../shared/components/base/base.component");
var company_model_1 = require("../../shared/models/company.model");
var SettingAppComponent = (function (_super) {
    __extends(SettingAppComponent, _super);
    function SettingAppComponent() {
        return _super.call(this) || this;
    }
    SettingAppComponent.prototype.ngOnInit = function () {
        this.company = this.cacheService.UserCompany;
        this.originCompany = new company_model_1.Company();
        Object.assign(this.originCompany, this.company);
    };
    SettingAppComponent.prototype.save = function () {
        var _this = this;
        this.company.save(this).subscribe(function () {
            Object.assign(_this.originCompany, _this.company);
            _this.cacheService.UserCompany = _this.company;
            _this.messageService
                .add({ severity: 'success',
                summary: 'Success',
                detail: _this.translateService.instant('Setting saved successfully!') });
        });
    };
    SettingAppComponent.prototype.restore = function () {
        Object.assign(this.company, this.originCompany);
    };
    SettingAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'setting-app',
            template: "<div class=\"card card-w-title\">        <h1> {{'Application setting'|translate}}</h1> <form novalidate (ngSubmit)=\"save()\" #f=\"ngForm\"  autocomplete=\"off\">                           <div class=\"ui-g form-group ui-fluid\">                     <div class=\"ui-g-12 \">                         <span class=\"md-inputfield\">                             <input type=\"text\" pInputText [(ngModel)]=\"company.name\" name=\"companyName\">                             <label>{{'Name'|translate}}</label>                         </span>                     </div>                     <div class=\"ui-g-12 \">                         <div class=\"ui-g-3\">                             <label>{{'Logo'|translate}}</label>                             <image-base64 [(src64)]=\"company.logo\"></image-base64>                         </div>                     </div>                 </div>                     <div class=\"ui-g\">           <div class=\"ui-g-12\" style=\"text-align:right\">               <button pButton type=\"submit\" label=\"{{'Save'|translate}}\" icon=\"fa ui-icon-save\" class=\"purple-btn\"></button>                          <button pButton type=\"button\" label=\"{{'Undo'|translate}}\" icon=\"fa ui-icon-restore\" class=\"blue-grey-btn\" (click)=\"restore()\"></button>       </div>     </div> </form> </div>",
        }),
        __metadata("design:paramtypes", [])
    ], SettingAppComponent);
    return SettingAppComponent;
}(base_component_1.BaseComponent));
exports.SettingAppComponent = SettingAppComponent;
