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
var base_dialog_1 = require("../../../shared/components/base/base.dialog");
var http_1 = require("@angular/http");
var constants_1 = require("../../../shared/models/constants");
var _ = require("underscore");
var ExamDialog = (function (_super) {
    __extends(ExamDialog, _super);
    function ExamDialog(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.locale = constants_1.DEFAULT_DATE_LOCALE;
        _this.examStatus = _.map(constants_1.EXAM_STATUS, function (val, key) {
            return {
                label: val,
                value: key
            };
        });
        return _this;
    }
    ExamDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.onShow.subscribe(function (object) {
            if (object.start && object.end) {
                _this.rangeDates = [object.start, object.end];
            }
            var lang = _this.translateService.currentLang;
            _this.http.get("/assets/i18n/calendar." + lang + ".json")
                .subscribe(function (res) {
                _this.locale = res.json();
            });
        });
    };
    ExamDialog.prototype.onDateSelect = function ($event) {
        if (this.rangeDates[0] && this.rangeDates[1]) {
            this.object.start = this.rangeDates[0];
            this.object.end = this.rangeDates[1];
        }
    };
    ExamDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-exam-dialog',
            template: "<form novalidate (ngSubmit)=\"f.form.valid && save()\" #f=\"ngForm\"  autocomplete=\"off\">   <p-dialog header=\"{{'Exam'|translate}}\" [(visible)]=\"display\" modal=\"false\" width=\"960\"  [responsive]=\"true\">      <p-scrollPanel [style]=\"{width: '100%', height: '520px'}\">     <div class=\"ui-g ui-fluid form-group\">       <div class=\"ui-g-12\">       <p-selectButton [options]=\"examStatus\" [(ngModel)]=\"object.status\" name=\"status\"></p-selectButton>       </div>       <div class=\"ui-g-6\">         <span class=\"md-inputfield\">             <input type=\"text\" pInputText [(ngModel)]=\"object.name\" #name=\"ngModel\" name=\"name\" required>             <label>{{'Name'|translate}}</label>             <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"                class=\"ui-message ui-messages-error ui-corner-all\">               <div *ngIf=\"name.errors.required\">                   {{'Name is required' | translate}}               </div>             </div>         </span>       </div>       <div class=\"ui-g-6\">         <span class=\"md-inputfield\">             <input type=\"text\" pInputText [(ngModel)]=\"object.summary\" name=\"summary\">             <label>{{'Summary'|translate}}</label>         </span>       </div>       <div class=\"ui-g-7\">         <label>{{'Instruction'|translate}}</label>         <p-editor [(ngModel)]=\"object.instruction\" [style]=\"{'height':'120px'}\" name=\"instruction\">         </p-editor>       </div>        <div class=\"ui-g-5\">         <label>{{'Datetime'|translate}}</label>          <p-calendar [(ngModel)]=\"rangeDates\" selectionMode=\"range\" readonlyInput=\"true\" name=\"date\" required [inline]=\"true\" [locale]=\"locale\" (onSelect)=\"onDateSelect($event)\"></p-calendar>       </div>       <div class=\"ui-g-6\">         <span class=\"md-inputfield\">             <input type=\"text\" pInputText [(ngModel)]=\"object.duration\" #duration=\"ngModel\" name=\"duration\" pKeyFilter=\"pint\" required>             <label>{{'Duration (in minutes)'|translate}}</label>             <div *ngIf=\"duration.invalid && (duration.dirty || duration.touched)\"                class=\"ui-message ui-messages-error ui-corner-all\">               <div *ngIf=\"duration.errors.required\">                   {{'Duration is required' | translate}}               </div>             </div>         </span>       </div>     </div> </p-scrollPanel>     <p-footer>       <button type=\"submit\" pButton icon=\"fa-check\" label=\"{{'Save'|translate}}\"></button>       <button type=\"button\" pButton icon=\"fa-close\" (click)=\"hide()\" label=\"{{'Close'|translate}}\"></button>     </p-footer>     <etraining-exam-member-dialog></etraining-exam-member-dialog>       <etraining-select-user-dialog></etraining-select-user-dialog>   </p-dialog> </form>",
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], ExamDialog);
    return ExamDialog;
}(base_dialog_1.BaseDialog));
exports.ExamDialog = ExamDialog;
