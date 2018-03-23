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
var base_dialog_1 = require("../../shared/components/base/base.dialog");
var CourseMemberDialog = (function (_super) {
    __extends(CourseMemberDialog, _super);
    function CourseMemberDialog() {
        return _super.call(this) || this;
    }
    CourseMemberDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-course-member-dialog',
            template: "<form novalidate (ngSubmit)=\"save()\" #f=\"ngForm\"  autocomplete=\"off\"> <p-dialog header=\"{{'Course member'|translate}}\" [(visible)]=\"display\" modal=\"true\" width=\"300\" [responsive]=\"true\" appendTo=\"body\">     <div class=\"ui-g ui-fluid form-group\">        <div class=\"ui-g-12\">         <label>{{'Name'|translate}} : {{object.name}}</label>       </div>       <div class=\"ui-g-12\">         <label>{{'Register date'|translate}} : {{object.date_register}}</label>       </div>       <div class=\"ui-g-12 \">         <label>{{'Role'|translate}}</label>           <p-radioButton name=\"role\" value=\"student\"  label=\"{{'Student'|translate}}\" [(ngModel)]=\"object.role\" inputId=\"opt1\"></p-radioButton>           <p-radioButton name=\"role\" value=\"teacher\"  label=\"{{'Teacher'|translate}}\" [(ngModel)]=\"object.role\" inputId=\"opt2\"></p-radioButton>       </div>     </div>     <p-footer>       <button type=\"submit\" pButton icon=\"fa-check\" label=\"{{'Save'|translate}}\"></button>       <button type=\"button\" pButton icon=\"fa-close\" (click)=\"hide()\" label=\"{{'Close'|translate}}\"></button>     </p-footer>    </p-dialog> </form>",
        }),
        __metadata("design:paramtypes", [])
    ], CourseMemberDialog);
    return CourseMemberDialog;
}(base_dialog_1.BaseDialog));
exports.CourseMemberDialog = CourseMemberDialog;
