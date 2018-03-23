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
var Observable_1 = require("rxjs/Observable");
var syllabus_utils_1 = require("../../../shared/helpers/syllabus.utils");
var base_component_1 = require("../../../shared/components/base/base.component");
var course_unit_model_1 = require("../../../shared/models/course-unit.model");
var constants_1 = require("../../../shared/models/constants");
var course_unit_dialog_component_1 = require("../course-unit-dialog/course-unit-dialog.component");
var _ = require("underscore");
var CourseSyllabusDialog = (function (_super) {
    __extends(CourseSyllabusDialog, _super);
    function CourseSyllabusDialog(sylUtils) {
        var _this = _super.call(this) || this;
        _this.sylUtils = sylUtils;
        _this.items = [
            { label: _this.translateService.instant(constants_1.COURSE_UNIT_TYPE['folder']), command: function () { _this.add('folder'); } },
            { label: _this.translateService.instant(constants_1.COURSE_UNIT_TYPE['html']), command: function () { _this.add('html'); } },
            { label: _this.translateService.instant(constants_1.COURSE_UNIT_TYPE['video']), command: function () { _this.add('video'); } },
            { label: _this.translateService.instant(constants_1.COURSE_UNIT_TYPE['exercise']), command: function () { _this.add('exercise'); } },
        ];
        return _this;
    }
    CourseSyllabusDialog.prototype.show = function (syl) {
        this.display = true;
        this.syl = syl;
        this.buildCourseTree();
    };
    CourseSyllabusDialog.prototype.buildCourseTree = function () {
        var _this = this;
        if (this.syl)
            course_unit_model_1.CourseUnit.listBySyllabus(this, this.syl.id).subscribe(function (units) {
                _this.units = units;
                _this.tree = _this.sylUtils.buildTree(units);
            });
    };
    CourseSyllabusDialog.prototype.add = function (type) {
        var _this = this;
        if (this.selectedNode && this.selectedNode.data.type != 'folder') {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: this.translateService.instant('You can only add course unit to a folder.') });
            return;
        }
        var maxOrderNode = _.max(this.selectedNode.children, function (obj) { return obj.data.order; });
        var unit = new course_unit_model_1.CourseUnit();
        var maxOrderNode = _.max(this.selectedNode.children, function (obj) { return obj.data.order; });
        unit.syllabus_id = this.syl.id;
        unit.icon = constants_1.COURSE_UNIT_ICON[type];
        unit.type = type;
        unit.name = 'New unit';
        unit.parent_id = this.selectedNode ? this.selectedNode.data.id : null;
        unit.order = this.selectedNode ? maxOrderNode.data.order : 0;
        unit.save(this).subscribe(function () {
            if (_this.selectedNode)
                _this.sylUtils.addChildNode(_this.selectedNode, unit);
            else
                _this.sylUtils.addRootNode(_this.tree, unit);
        });
    };
    CourseSyllabusDialog.prototype.edit = function () {
        var _this = this;
        if (this.selectedNode) {
            this.unitDialog.show(this.selectedNode.data);
            this.unitDialog.onUpdateComplete.subscribe(function () {
                _this.buildCourseTree();
            });
        }
    };
    CourseSyllabusDialog.prototype.delete = function () {
    };
    CourseSyllabusDialog.prototype.hide = function () {
        this.display = false;
    };
    CourseSyllabusDialog.prototype.moveUp = function () {
        var _this = this;
        if (this.selectedNode) {
            var unit = this.selectedNode.data;
            this.sylUtils.moveUp(this.tree, this.selectedNode);
            var subscriptions = _.map(this.units, function (unit) {
                return unit.save(_this);
            });
            Observable_1.Observable.forkJoin(subscriptions).subscribe();
        }
    };
    CourseSyllabusDialog.prototype.moveDown = function () {
        var _this = this;
        if (this.selectedNode) {
            var unit = this.selectedNode.data;
            this.sylUtils.moveDown(this.tree, this.selectedNode);
            var subscriptions = _.map(this.units, function (unit) {
                return unit.save(_this);
            });
            Observable_1.Observable.forkJoin(subscriptions).subscribe();
        }
    };
    __decorate([
        core_1.ViewChild(course_unit_dialog_component_1.CourseUnitDialog),
        __metadata("design:type", course_unit_dialog_component_1.CourseUnitDialog)
    ], CourseSyllabusDialog.prototype, "unitDialog", void 0);
    CourseSyllabusDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-course-syllabus-dialog',
            template: "<p-dialog header=\"{{'Course syllabus'|translate}}\" [(visible)]=\"display\" modal=\"false\" width=\"960\" [responsive]=\"true\">   <p-scrollPanel [style]=\"{width: '100%', height: '480px'}\">     <div class=\"ui-g\">       <div class=\"ui-g-12\">         <p-toolbar>           <div class=\"ui-toolbar-group-left\">             <p-splitButton label=\"{{'Add'|translate}}\" icon=\"ui-icon-add\" [model]=\"items\" styleClass=\"ui-button-success\"></p-splitButton>             <button pButton type=\"button\" label=\"{{'Edit'|translate}}\" class=\"purple-btn\" icon=\"ui-icon-mode-edit\" (click)=\"edit()\" [disabled]=\"!selectedNode\"></button>             <button pButton type=\"button\" pTooltip=\"{{'Move up'|translate}}\" class=\"purple-btn\" icon=\"ui-icon-arrow-upward\" (click)=\"moveUp()\" [disabled]=\"!selectedNode\"></button>             <button pButton type=\"button\" pTooltip=\"{{'Move down'|translate}}\" class=\"purple-btn\" icon=\"ui-icon-arrow-downward\" (click)=\"moveDown()\" [disabled]=\"!selectedNode\"></button>             <button pButton type=\"button\" pTooltip=\"{{'Delete'|translate}}\" class=\"red-btn\" icon=\"ui-icon-delete\" (click)=\"delete()\" [disabled]=\"!selectedNode\"></button>           </div>           <div class=\"ui-toolbar-group-right\">             <button pButton type=\"button\" label=\"{{'Clear selection'|translate}}\" class=\"orange-btn\" icon=\"ui-icon-clear\" (click)=\"selectedNode=null\" [disabled]=\"!selectedNode\"></button>           </div>         </p-toolbar>         <div class=\"ui-g-12\">           <label>{{'Course structure'|translate}}</label>           <p-tree [value]=\"tree\" selectionMode=\"single\" [(selection)]=\"selectedNode\"></p-tree>         </div>       </div>     </div>   </p-scrollPanel>   <etraining-course-unit-dialog></etraining-course-unit-dialog>   <p-footer>     <button type=\"button\" pButton icon=\"fa-close\" (click)=\"hide()\" label=\"{{'Close'|translate}}\"></button>   </p-footer> </p-dialog>",
        }),
        __metadata("design:paramtypes", [syllabus_utils_1.SyllabusUtils])
    ], CourseSyllabusDialog);
    return CourseSyllabusDialog;
}(base_component_1.BaseComponent));
exports.CourseSyllabusDialog = CourseSyllabusDialog;
