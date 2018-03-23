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
var smtp_model_1 = require("../../shared/models/smtp.model");
var SettingMailComponent = (function (_super) {
    __extends(SettingMailComponent, _super);
    function SettingMailComponent() {
        var _this = _super.call(this) || this;
        _this.smtp = new smtp_model_1.SMTP();
        return _this;
    }
    SettingMailComponent.prototype.ngOnInit = function () {
        var _this = this;
        smtp_model_1.SMTP.all(this).subscribe(function (configs) {
            _this.smtp = configs[0];
            _this.originSmtp = new smtp_model_1.SMTP();
            Object.assign(_this.originSmtp, _this.smtp);
        });
    };
    SettingMailComponent.prototype.save = function () {
        var _this = this;
        this.smtp.save(this).subscribe(function () {
            Object.assign(_this.originSmtp, _this.smtp);
            _this.messageService
                .add({ severity: 'success',
                summary: 'Success',
                detail: _this.translateService.instant('Setting saved successfully!') });
        });
    };
    SettingMailComponent.prototype.restore = function () {
        Object.assign(this.smtp, this.originSmtp);
    };
    SettingMailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'setting-mail',
            template: "<div class=\"card card-w-title\">   <h1>{{'Mail setting'|translate}}</h1>   <form novalidate (ngSubmit)=\"save()\" #f=\"ngForm\"  autocomplete=\"off\">     <div class=\"ui-g ui-fluid form-group\">       <div class=\"ui-g-12 \">         <span class=\"md-inputfield\">                             <input type=\"text\" pInputText [(ngModel)]=\"smtp.name\" name=\"name\">                             <label>{{'Name'|translate}}</label>                         </span>       </div>       <div class=\"ui-g-6\">         <span class=\"md-inputfield\">                             <input type=\"text\" pInputText [(ngModel)]=\"smtp.smtp_host\" name=\"host\">                             <label>{{'SMTP Host'|translate}}</label>                         </span>       </div>       <div class=\"ui-g-6\">         <span class=\"md-inputfield\">                             <input type=\"text\" pInputText [(ngModel)]=\"smtp.smtp_port\" name=\"port\"  pKeyFilter=\"int\">                             <label>{{'SMTP Port'|translate}}</label>                         </span>       </div>       <div class=\"ui-g-6\">         <span class=\"md-inputfield\">                             <input type=\"text\" pInputText [(ngModel)]=\"smtp.smtp_user\" name=\"user\">                             <label>{{'SMTP User'|translate}}</label>                         </span>       </div>       <div class=\"ui-g-6\">         <span class=\"md-inputfield\">                             <input type=\"text\" pInputText [(ngModel)]=\"smtp.smtp_pass\" name=\"pass\">                             <label>{{'SMTP Password'|translate}}</label>                         </span>       </div>     </div>     <div class=\"ui-g\">       <div class=\"ui-g-12\" style=\"text-align:right\">         <button pButton type=\"submit\" label=\"{{'Save'|translate}}\" icon=\"fa ui-icon-save\" class=\"purple-btn\"></button>         <button pButton type=\"button\" label=\"{{'Undo'|translate}}\" icon=\"fa ui-icon-restore\" class=\"blue-grey-btn\" (click)=\"restore()\"></button>       </div>   </div>   </form> </div>",
        }),
        __metadata("design:paramtypes", [])
    ], SettingMailComponent);
    return SettingMailComponent;
}(base_component_1.BaseComponent));
exports.SettingMailComponent = SettingMailComponent;
