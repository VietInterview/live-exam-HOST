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
var Rx_1 = require("rxjs/Rx");
var group_model_1 = require("../../models/group.model");
var base_component_1 = require("../base/base.component");
var tree_utils_1 = require("../../../shared/helpers/tree.utils");
var SelectGroupDialog = (function (_super) {
    __extends(SelectGroupDialog, _super);
    function SelectGroupDialog(treeUtils) {
        var _this = _super.call(this) || this;
        _this.treeUtils = treeUtils;
        _this.onSelectGroupReceiver = new Rx_1.Subject();
        _this.onSelectGroup = _this.onSelectGroupReceiver.asObservable();
        _this.display = false;
        return _this;
    }
    SelectGroupDialog.prototype.hide = function () {
        this.display = false;
    };
    SelectGroupDialog.prototype.show = function () {
        var _this = this;
        this.display = true;
        group_model_1.Group.listByCategory(this, this.category).subscribe(function (groups) {
            _this.tree = _this.treeUtils.buildTree(groups);
        });
    };
    SelectGroupDialog.prototype.select = function () {
        this.onSelectGroupReceiver.next(this.selectedNode.data);
        this.hide();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SelectGroupDialog.prototype, "category", void 0);
    SelectGroupDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-select-group-dialog',
            template: "<p-dialog header=\"{{'Select group'|translate}}\" [(visible)]=\"display\" modal=\"true\" width=\"300\" height=\"100%\" [responsive]=\"true\" appendTo=\"body\">   <div class=\"ui-g ui-fluid form-group\">     <div class=\"ui-g-12\">       <p-tree [value]=\"tree\" selectionMode=\"single\" [(selection)]=\"selectedNode\" ></p-tree>     </div>   </div>   <p-footer>     <button type=\"button\" [disabled]=\"!selectedNode || !selectedNode.data\" pButton icon=\"fa-check\" label=\"{{'OK'|translate}}\" (click)=\"select()\"></button>     <button type=\"button\" pButton icon=\"fa-close\" (click)=\"hide()\" label=\"{{'Close'|translate}}\"></button>   </p-footer> </p-dialog>",
        }),
        __metadata("design:paramtypes", [tree_utils_1.TreeUtils])
    ], SelectGroupDialog);
    return SelectGroupDialog;
}(base_component_1.BaseComponent));
exports.SelectGroupDialog = SelectGroupDialog;
