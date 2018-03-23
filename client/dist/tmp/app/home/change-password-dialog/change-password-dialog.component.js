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
var ChangePasswordDialog = (function (_super) {
    __extends(ChangePasswordDialog, _super);
    function ChangePasswordDialog() {
        var _this = _super.call(this) || this;
        _this.new_pass = '';
        _this.old_pass = '';
        _this.display = false;
        return _this;
    }
    ChangePasswordDialog.prototype.ngOnInit = function () {
    };
    ChangePasswordDialog.prototype.show = function () {
        this.display = true;
    };
    ChangePasswordDialog.prototype.hide = function () {
        this.display = false;
    };
    ChangePasswordDialog.prototype.changePass = function () {
        var _this = this;
        this.authService.changePass(this.old_pass, this.new_pass).subscribe(function (resp) {
            if (resp.success) {
                _this.hide();
            }
            else {
                _this.messageService
                    .add({
                    severity: 'error',
                    summary: 'Error',
                    detail: _this.translateService.instant('Error change password!')
                });
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ChangePasswordDialog.prototype, "old_pass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ChangePasswordDialog.prototype, "new_pass", void 0);
    ChangePasswordDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'change-password-dialog',
            template: "<p-dialog header=\"{{'Change password'|translate}}\" [(visible)]=\"display\" modal=\"true\" width=\"300\" [responsive]=\"true\">     <div class=\"ui-dialog-content\" >         <form class=\"form-horizontal form-simple\" (ngSubmit)=\"f.form.valid && changePass()\" id=\"changPassForm\" #f=\"ngForm\" novalidate  autocomplete=\"off\">             <div class=\"ui-g form-group ui-fluid\">                 <div class=\"ui-g-12\">                     <span class=\"md-inputfield\">                         <input type=\"password\" pInputText  name=\"old-pass\" [(ngModel)]=\"old_pass\" required #old_pass_input=\"ngModel\">                         <label>{{'Old password'|translate}}: </label>                     </span>                     <div *ngIf=\"old_pass_input.invalid && (old_pass_input.dirty || old_pass_input.touched)\"                         class=\"ui-message ui-messages-error ui-corner-all\">                         <div *ngIf=\"old_pass_input.errors.required\">                             {{'Old password is requried'|translate}}                         </div>                     </div>                 </div>                 <div class=\"ui-g-12\">                     <span class=\"md-inputfield\">                         <input type=\"password\" pInputText  name=\"new-pass\" [(ngModel)]=\"new_pass\" required #new_pass_input=\"ngModel\">                         <label>{{'New password'|translate}}: </label>                     </span>                     <div *ngIf=\"new_pass_input.invalid && (new_pass_input.dirty || new_pass_input.touched)\"                         class=\"ui-message ui-messages-error ui-corner-all\">                         <div *ngIf=\"new_pass_input.errors.required\">                             {{'New password is requried'|translate}}                         </div>                     </div>                 </div>                 <div class=\"ui-g-12\">                     <span class=\"md-inputfield\">                         <input type=\"password\" pInputText   name=\"confirm-pass\" required [(ngModel)]=\"confirm_pass\" #confirm_pass_input=\"ngModel\" matchInput={{new_pass}}>                         <label>{{'Confirm new password'|translate}}: </label>                     </span>                     <div *ngIf=\"confirm_pass_input.invalid && (confirm_pass_input.dirty || confirm_pass_input.touched)\"                         class=\"ui-message ui-messages-error ui-corner-all\">                         <div *ngIf=\"confirm_pass_input.errors.matchInput\">                             {{'Password not matching'|translate}}                         </div>                     </div>                 </div>             </div>         </form>     </div>     <p-footer>                 <button pButton type=\"button\" icon=\"ui-icon-check\" title=\"{{'Save'|translate}}\" label=\"{{'Save'|translate}}\" class=\" flat\"></button>          <button pButton type=\"button\" icon=\"ui-icon-close\" title=\"{{'Close'|translate}}\" label=\"{{'Close'|translate}}\" class=\" flat\" style=\"margin-right:4px;\" (click)=\"hide()\"></button>     </p-footer> </p-dialog>",
        }),
        __metadata("design:paramtypes", [])
    ], ChangePasswordDialog);
    return ChangePasswordDialog;
}(base_component_1.BaseComponent));
exports.ChangePasswordDialog = ChangePasswordDialog;
