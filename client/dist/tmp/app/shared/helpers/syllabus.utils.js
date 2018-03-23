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
var SyllabusUtils = (function () {
    function SyllabusUtils() {
    }
    SyllabusUtils.prototype.buildTree = function (units) {
        return this.buildSubTree(null, units);
    };
    SyllabusUtils.prototype.getSubGroup = function (units, parentId) {
        var _this = this;
        var subUnits = _.filter(units, function (unit) {
            return _this.isSubUnit(units, unit, parentId);
        });
    };
    SyllabusUtils.prototype.isSubUnit = function (units, target, parentId) {
        while (target) {
            if (target.id == parentId)
                return true;
            if (target.parent_id)
                target = _.find(units, function (unit) {
                    return unit.id == target.parent_id;
                });
        }
        return false;
    };
    SyllabusUtils.prototype.buildSubTree = function (parentUnit, units) {
        var _this = this;
        var subTrees = [];
        var directChilds = [];
        if (!parentUnit)
            directChilds = _.filter(units, function (unit) {
                return !unit.parent_id;
            });
        else {
            directChilds = _.filter(units, function (unit) {
                return parentUnit.id == unit.parent_id;
            });
        }
        _.each(directChilds, function (unit) {
            var children = _this.buildSubTree(unit, units);
            children = _.sortBy(children, function (obj) { return obj.data.order; });
            subTrees.push({
                data: unit,
                label: unit.name,
                icon: unit.icon,
                children: children
            });
        });
        subTrees = _.sortBy(subTrees, function (obj) { return obj.data.order; });
        return subTrees;
    };
    SyllabusUtils.prototype.moveUp = function (tree, node) {
        var siblings = [];
        if (!node.parent_id) {
            siblings = tree;
        }
        else {
            var parentNode = this.findTreeNode(tree, node.parent_id);
            siblings = parentNode.children;
        }
        var curIndex = _.findIndex(siblings, function (obj) { return obj.data.id == node.data.id; });
        if (curIndex > 0) {
            var prevNode = siblings[curIndex - 1];
            var prevData = prevNode.data;
            var currentData = node.data;
            var tmp = prevData.order;
            prevData.order = currentData.order;
            currentData.order = tmp;
            siblings[curIndex] = prevNode;
            siblings[curIndex - 1] = node;
        }
    };
    SyllabusUtils.prototype.moveDown = function (tree, node) {
        var siblings = [];
        if (!node.parent_id) {
            siblings = tree;
        }
        else {
            var parentNode = this.findTreeNode(tree, node.parent_id);
            siblings = parentNode.children;
        }
        var curIndex = _.findIndex(siblings, function (obj) { return obj.data.id == node.data.id; });
        if (curIndex < siblings.length - 1) {
            var nextNode = siblings[curIndex + 1];
            var nextData = nextNode.data;
            var currentData = node.data;
            var tmp = nextData.order;
            nextData.order = currentData.order;
            currentData.order = tmp;
            siblings[curIndex] = nextNode;
            siblings[curIndex + 1] = node;
        }
    };
    SyllabusUtils.prototype.addRootNode = function (tree, unit) {
        tree.push({
            data: unit,
            label: unit.name,
            icon: unit.icon,
            children: []
        });
    };
    SyllabusUtils.prototype.addChildNode = function (parentNode, unit) {
        parentNode.children.push({
            data: unit,
            label: unit.name,
            icon: unit.icon,
            children: []
        });
    };
    SyllabusUtils.prototype.findTreeNode = function (tree, unitId) {
        for (var i = 0; i < tree.length; i++) {
            var node = tree[i];
            var found = this.findTreeSubNode(node, unitId);
            if (found)
                return found;
        }
        return null;
    };
    SyllabusUtils.prototype.findTreeSubNode = function (node, unitId) {
        if (node.data.id == unitId)
            return node;
        for (var i = 0; i < node.children.length; i++) {
            var childNode = node.children[i];
            var found = this.findTreeSubNode(childNode, unitId);
            if (found)
                return found;
        }
        return null;
    };
    SyllabusUtils = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SyllabusUtils);
    return SyllabusUtils;
}());
exports.SyllabusUtils = SyllabusUtils;
