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
var group_model_1 = require("../../models/group.model");
var base_component_1 = require("../base/base.component");
var tree_utils_1 = require("../../helpers/tree.utils");
var group_dialog_component_1 = require("../group-dialog/group-dialog.component");
var GroupListComponent = (function (_super) {
    __extends(GroupListComponent, _super);
    function GroupListComponent(treeUtils, route) {
        var _this = _super.call(this) || this;
        _this.treeUtils = treeUtils;
        _this.route = route;
        return _this;
    }
    GroupListComponent.prototype.ngOnInit = function () {
        this.category = this.route.snapshot.data['category'];
        this.loadGroups();
    };
    GroupListComponent.prototype.add = function () {
        var _this = this;
        var group = new group_model_1.Group();
        group.category = this.category;
        this.groupDialog.show(group);
        this.groupDialog.onCreateComplete.subscribe(function () {
            _this.loadGroups();
        });
    };
    GroupListComponent.prototype.edit = function () {
        if (this.selectedNode)
            this.groupDialog.show(this.selectedNode.data);
    };
    GroupListComponent.prototype.delete = function () {
        var _this = this;
        if (this.selectedNode)
            this.confirmationService.confirm({
                message: this.translateService.instant('Are you sure to delete ?'),
                accept: function () {
                    _this.selectedNode.data.delete(_this).subscribe(function () {
                        _this.loadGroups();
                    });
                }
            });
    };
    GroupListComponent.prototype.loadGroups = function () {
        var _this = this;
        group_model_1.Group.listByCategory(this, this.category).subscribe(function (groups) {
            _this.groups = groups;
            _this.tree = _this.treeUtils.buildTree(groups);
        });
    };
    __decorate([
        core_1.ViewChild(group_dialog_component_1.GroupDialog),
        __metadata("design:type", group_dialog_component_1.GroupDialog)
    ], GroupListComponent.prototype, "groupDialog", void 0);
    GroupListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-group-list',
            template: "<div class=\"card card-w-title\">   <h1>{{'Groups'|translate}}</h1>   <div class=\"ui-g\">     <div class=\"ui-g-12\">       <p-toolbar>         <div class=\"ui-toolbar-group-left\">           <button pButton type=\"button\" label=\"{{'New'|translate}}\" class=\"green-btn\" (click)=\"add()\" icon=\"ui-icon-add\"></button>           <button pButton type=\"button\" label=\"{{'Edit'|translate}}\"  class=\"purple-btn\" icon=\"ui-icon-mode-edit\" (click)=\"edit()\" [disabled]=\"!selectedNode\"></button>           <button pButton type=\"button\" label=\"{{'Delete'|translate}}\"  class=\"red-btn\" icon=\"ui-icon-delete\" (click)=\"delete()\" [disabled]=\"!selectedNode\"></button>         </div>                </p-toolbar>       <p-treeTable [value]=\"tree\" selectionMode=\"single\" [(selection)]=\"selectedNode\">         <p-column field=\"name\" header=\"{{'Name'|translate}}\"></p-column>         <p-column field=\"code\" header=\"{{'Code'|translate}}\"></p-column>       </p-treeTable>       <etraining-group-dialog></etraining-group-dialog>       <p-confirmDialog header=\"{{'Confirmation'|translate}}\"  width=\"300\"></p-confirmDialog>     </div>   </div> </div>",
            styles: [".mrg-bt{margin-bottom:15px}"],
        }),
        __metadata("design:paramtypes", [tree_utils_1.TreeUtils, router_1.ActivatedRoute])
    ], GroupListComponent);
    return GroupListComponent;
}(base_component_1.BaseComponent));
exports.GroupListComponent = GroupListComponent;
