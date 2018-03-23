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
var course_faq_model_1 = require("../../../shared/models/course-faq.model");
var course_faq_dialog_component_1 = require("../course-faq/course-faq.dialog.component");
var CourseFaqListDialog = (function (_super) {
    __extends(CourseFaqListDialog, _super);
    function CourseFaqListDialog() {
        var _this = _super.call(this) || this;
        _this.display = false;
        _this.faqs = [];
        return _this;
    }
    CourseFaqListDialog.prototype.show = function (course) {
        this.display = true;
        this.course = course;
        this.loadFaqs();
    };
    CourseFaqListDialog.prototype.loadFaqs = function () {
        var _this = this;
        course_faq_model_1.CourseFaq.listByCourse(this, this.course.id)
            .subscribe(function (faqs) {
            _this.faqs = faqs;
        });
    };
    CourseFaqListDialog.prototype.hide = function () {
        this.display = false;
    };
    CourseFaqListDialog.prototype.add = function () {
        var _this = this;
        var faq = new course_faq_model_1.CourseFaq();
        faq.course_id = this.course.id;
        this.faqDialog.show(faq);
        this.faqDialog.onCreateComplete.subscribe(function () {
            _this.loadFaqs();
        });
    };
    CourseFaqListDialog.prototype.edit = function () {
        var _this = this;
        if (this.selectedFaq)
            this.faqDialog.show(this.selectedFaq);
        this.faqDialog.onUpdateComplete.subscribe(function () {
            _this.loadFaqs();
        });
    };
    CourseFaqListDialog.prototype.delete = function () {
        var _this = this;
        if (this.selectedFaq)
            this.confirmationService.confirm({
                message: this.translateService.instant('Are you sure to delete ?'),
                accept: function () {
                    _this.selectedFaq.delete(_this).subscribe(function () {
                        _this.loadFaqs();
                        _this.selectedFaq = null;
                    });
                }
            });
    };
    __decorate([
        core_1.ViewChild(course_faq_dialog_component_1.CourseFaqDialog),
        __metadata("design:type", course_faq_dialog_component_1.CourseFaqDialog)
    ], CourseFaqListDialog.prototype, "faqDialog", void 0);
    CourseFaqListDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-course-faq-list-dialog',
            template: "<div class=\"card card-w-title\">     <h1>{{'Course materials'|translate}}</h1>     <div class=\"ui-g\">         <div class=\"ui-g-12\">             <p-toolbar>                 <div class=\"ui-toolbar-group-left\">                     <button pButton type=\"button\" label=\"{{'New'|translate}}\" class=\"green-btn\" (click)=\"add()\" icon=\"ui-icon-add\"></button>                     <button pButton type=\"button\" label=\"{{'Edit'|translate}}\" class=\"purple-btn\" icon=\"ui-icon-mode-edit\" (click)=\"edit()\" [disabled]=\"!selectedFaq\"></button>                     <button pButton type=\"button\" label=\"{{'Delete'|translate}}\" class=\"red-btn\" icon=\"ui-icon-delete\" (click)=\"delete()\" [disabled]=\"!selectedFaq\"></button>                 </div>             </p-toolbar>             <p-table #faqTable [value]=\"faqs\" [paginator]=\"true\" [rows]=\"10\" selectionMode=\"single\"              [(selection)]=\"selectedFaq\" [responsive]=\"true\">                 <ng-template pTemplate=\"header\">                     <tr>                         <th>                             {{'Question'|translate}}                         </th>                         <th>                             {{'Answer'|translate}}                         </th>                     </tr>                 </ng-template>                 <ng-template pTemplate=\"body\" let-faq>                     <tr [pSelectableRow]=\"faq\">                         <td>{{faq.question}}</td>                         <td>{{faq.answer}}</td>                     </tr>                 </ng-template>                 <ng-template pTemplate=\"summary\">                     {{'Total records'|translate}} : {{faqs?.length}}                 </ng-template>                 <ng-template pTemplate=\"emptymessage\" >                     <tr>                         <td [attr.colspan]=\"3\">                             {{'No records found'|translate}}                         </td>                     </tr>                 </ng-template>             </p-table>             <etraining-course-faq-dialog></etraining-course-faq-dialog>         </div>     </div> </div>",
        }),
        __metadata("design:paramtypes", [])
    ], CourseFaqListDialog);
    return CourseFaqListDialog;
}(base_dialog_1.BaseDialog));
exports.CourseFaqListDialog = CourseFaqListDialog;
