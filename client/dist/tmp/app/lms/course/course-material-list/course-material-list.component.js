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
var base_component_1 = require("../../../shared/components/base/base.component");
var course_material_model_1 = require("../../../shared/models/course-material.model");
var course_material_dialog_component_1 = require("../course-material/course-material.dialog.component");
var CourseMaterialListDialog = (function (_super) {
    __extends(CourseMaterialListDialog, _super);
    function CourseMaterialListDialog() {
        var _this = _super.call(this) || this;
        _this.display = false;
        _this.materials = [];
        return _this;
    }
    CourseMaterialListDialog.prototype.show = function (course) {
        this.display = true;
        this.course = course;
        this.loadMaterials();
    };
    CourseMaterialListDialog.prototype.loadMaterials = function () {
        var _this = this;
        course_material_model_1.CourseMaterial.listByCourse(this, this.course.id)
            .subscribe(function (materials) {
            _this.materials = materials;
        });
    };
    CourseMaterialListDialog.prototype.hide = function () {
        this.display = false;
    };
    CourseMaterialListDialog.prototype.add = function () {
        var _this = this;
        var material = new course_material_model_1.CourseMaterial();
        material.course_id = this.course.id;
        this.materialDialog.show(material);
        this.materialDialog.onCreateComplete.subscribe(function () {
            _this.loadMaterials();
        });
    };
    CourseMaterialListDialog.prototype.edit = function () {
        var _this = this;
        if (this.selectedMaterial)
            this.materialDialog.show(this.selectedMaterial);
        this.materialDialog.onUpdateComplete.subscribe(function () {
            _this.loadMaterials();
        });
    };
    CourseMaterialListDialog.prototype.delete = function () {
        var _this = this;
        if (this.selectedMaterial)
            this.confirmationService.confirm({
                message: this.translateService.instant('Are you sure to delete ?'),
                accept: function () {
                    _this.selectedMaterial.delete(_this).subscribe(function () {
                        _this.loadMaterials();
                        _this.selectedMaterial = null;
                    });
                }
            });
    };
    __decorate([
        core_1.ViewChild(course_material_dialog_component_1.CourseMaterialDialog),
        __metadata("design:type", course_material_dialog_component_1.CourseMaterialDialog)
    ], CourseMaterialListDialog.prototype, "materialDialog", void 0);
    CourseMaterialListDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-course-material-list-dialog',
            template: "<div class=\"card card-w-title\">     <h1>{{'Course materials'|translate}}</h1>     <div class=\"ui-g\">         <div class=\"ui-g-12\">             <p-toolbar>                 <div class=\"ui-toolbar-group-left\">                     <button pButton type=\"button\" label=\"{{'New'|translate}}\" class=\"green-btn\" (click)=\"add()\" icon=\"ui-icon-add\"></button>                     <button pButton type=\"button\" label=\"{{'Edit'|translate}}\" class=\"purple-btn\" icon=\"ui-icon-mode-edit\" (click)=\"edit()\" [disabled]=\"!selectedMaterial\"></button>                     <button pButton type=\"button\" label=\"{{'Delete'|translate}}\" class=\"red-btn\" icon=\"ui-icon-delete\" (click)=\"delete()\" [disabled]=\"!selectedMaterial\"></button>                 </div>             </p-toolbar>             <p-table #materialTable [value]=\"materials\" [paginator]=\"true\" [rows]=\"10\" selectionMode=\"single\"              [(selection)]=\"selectedMaterial\" [responsive]=\"true\">                 <ng-template pTemplate=\"header\">                     <tr>                         <th [pSortableColumn]=\"'name'\">                             {{'Name'|translate}}                             <p-sortIcon [field]=\"'name'\"></p-sortIcon>                         </th>                         <th [pSortableColumn]=\"'type'\">                             {{'Type'|translate}}                             <p-sortIcon [field]=\"'type'\"></p-sortIcon>                         </th>                         <th>                             {{'URL'|translate}}                         </th>                     </tr>                 </ng-template>                 <ng-template pTemplate=\"body\" let-material>                     <tr [pSelectableRow]=\"material\">                         <td>{{material.name}}</td>                         <td>{{material.type}}</td>                         <td>{{material.url}}</td>                     </tr>                 </ng-template>                 <ng-template pTemplate=\"summary\">                     {{'Total records'|translate}} : {{materials?.length}}                 </ng-template>                 <ng-template pTemplate=\"emptymessage\" >                     <tr>                         <td [attr.colspan]=\"3\">                             {{'No records found'|translate}}                         </td>                     </tr>                 </ng-template>             </p-table>             <etraining-course-material-dialog></etraining-course-material-dialog>         </div>     </div> </div>",
        }),
        __metadata("design:paramtypes", [])
    ], CourseMaterialListDialog);
    return CourseMaterialListDialog;
}(base_component_1.BaseComponent));
exports.CourseMaterialListDialog = CourseMaterialListDialog;
