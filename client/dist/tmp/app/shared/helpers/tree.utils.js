"use strict";
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
var _ = require("underscore");
var core_1 = require("@angular/core");
var TreeUtils = (function () {
    function TreeUtils() {
    }
    TreeUtils.prototype.buildTree = function (groups) {
        return this.buildSubTree(null, groups);
    };
    TreeUtils.prototype.getSubGroup = function (groups, parentId) {
        var _this = this;
        return _.filter(groups, function (group) {
            return _this.isSubGroup(groups, group, parentId);
        });
    };
    TreeUtils.prototype.isSubGroup = function (groups, target, parentId) {
        while (target) {
            if (target.id == parentId)
                return true;
            if (target.parent_id)
                target = _.find(groups, function (group) {
                    return group.id == target.parent_id;
                });
        }
        return false;
    };
    TreeUtils.prototype.buildSubTree = function (parentGroup, groups) {
        var _this = this;
        var subTrees = [];
        var directChilds = [];
        if (!parentGroup)
            directChilds = _.filter(groups, function (group) {
                return !group.parent_id;
            });
        else {
            directChilds = _.filter(groups, function (group) {
                return parentGroup.id == group.parent_id;
            });
        }
        _.each(directChilds, function (group) {
            subTrees.push({
                data: group,
                label: group.name,
                expanded: true,
                expandedIcon: "ui-icon-folder-open",
                collapsedIcon: "ui-icon-folder",
                children: _this.buildSubTree(group, groups)
            });
        });
        return subTrees;
    };
    TreeUtils.prototype.findTreeNode = function (tree, groupId) {
        for (var i = 0; i < tree.length; i++) {
            var node = tree[i];
            var found = this.findTreeSubNode(node, groupId);
            if (found)
                return found;
        }
        return null;
    };
    TreeUtils.prototype.findTreeSubNode = function (node, groupId) {
        if (node.data.id == groupId)
            return node;
        for (var i = 0; i < node.children.length; i++) {
            var childNode = node.children[i];
            var found = this.findTreeSubNode(childNode, groupId);
            if (found)
                return found;
        }
        return null;
    };
    TreeUtils = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], TreeUtils);
    return TreeUtils;
}());
exports.TreeUtils = TreeUtils;
