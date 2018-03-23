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
var base_dialog_1 = require("../../components/base/base.dialog");
var group_model_1 = require("../../models/group.model");
var tree_utils_1 = require("../../helpers/tree.utils");
var GroupDialog = (function (_super) {
    __extends(GroupDialog, _super);
    function GroupDialog() {
        var _this = _super.call(this) || this;
        _this.treeUtils = new tree_utils_1.TreeUtils();
        return _this;
    }
    GroupDialog.prototype.nodeSelect = function (event) {
        if (this.selectedNode) {
            this.object.parent_id = this.selectedNode.data.id;
        }
    };
    GroupDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.onShow.subscribe(function (object) {
            group_model_1.Group.listByCategory(_this, object.category).subscribe(function (groups) {
                _this.tree = _this.treeUtils.buildTree(groups);
                if (object.id) {
                    var node = _this.treeUtils.findTreeNode(_this.tree, object.id);
                    node.selectable = false;
                }
                if (object.parent_id) {
                    _this.selectedNode = _this.treeUtils.findTreeNode(_this.tree, object.parent_id);
                }
            });
        });
    };
    GroupDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'group-dialog',
            templateUrl: 'group-dialog.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], GroupDialog);
    return GroupDialog;
}(base_dialog_1.BaseDialog));
exports.GroupDialog = GroupDialog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy9ncm91cC1kaWFsb2cvZ3JvdXAtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUQ7QUFHekQsaUVBQStEO0FBQy9ELHdEQUFpRDtBQUVqRCx1REFBcUQ7QUFRckQ7SUFBaUMsK0JBQWlCO0lBTWpEO1FBQUEsWUFDQyxpQkFBTyxTQUVQO1FBREEsS0FBSSxDQUFDLFNBQVMsR0FBSSxJQUFJLHNCQUFTLEVBQUUsQ0FBQzs7SUFDbkMsQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBVyxLQUFTO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNuRCxDQUFDO0lBQ0YsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpBLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMzQixtQkFBSyxDQUFDLGNBQWMsQ0FBQyxLQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBQzNELEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzdDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNmLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM3RCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDekIsQ0FBQztnQkFDRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDOUUsQ0FBQztZQUNGLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBOUJXLFdBQVc7UUFMdkIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNkJBQTZCO1NBQzFDLENBQUM7O09BQ1csV0FBVyxDQWdDdkI7SUFBRCxrQkFBQztDQWhDRCxBQWdDQyxDQWhDZ0Msd0JBQVUsR0FnQzFDO0FBaENZLGtDQUFXIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29tcG9uZW50cy9ncm91cC1kaWFsb2cvZ3JvdXAtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQVBJU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEJhc2VEaWFsb2cgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Jhc2UvYmFzZS5kaWFsb2cnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ3JvdXAubW9kZWwnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7IFRyZWVVdGlscyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdHJlZS51dGlscyc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnZ3JvdXAtZGlhbG9nJyxcblx0dGVtcGxhdGVVcmw6ICdncm91cC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBHcm91cERpYWxvZyBleHRlbmRzIEJhc2VEaWFsb2c8R3JvdXA+IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHR0cmVlOiBUcmVlTm9kZVtdO1xuICAgIHNlbGVjdGVkTm9kZTogVHJlZU5vZGU7XG4gICAgdHJlZVV0aWxzOiBUcmVlVXRpbHM7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnRyZWVVdGlscyA9ICBuZXcgVHJlZVV0aWxzKCk7XG5cdH1cblxuXHRub2RlU2VsZWN0KGV2ZW50OmFueSkge1xuXHRcdGlmICh0aGlzLnNlbGVjdGVkTm9kZSkge1xuXHRcdFx0dGhpcy5vYmplY3QucGFyZW50X2lkID0gdGhpcy5zZWxlY3RlZE5vZGUuZGF0YS5pZDtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm9uU2hvdy5zdWJzY3JpYmUob2JqZWN0ID0+IHtcblx0XHRcdEdyb3VwLmxpc3RCeUNhdGVnb3J5KHRoaXMsIG9iamVjdC5jYXRlZ29yeSkuc3Vic2NyaWJlKGdyb3VwcyA9PiB7XG5cdFx0XHRcdHRoaXMudHJlZSA9IHRoaXMudHJlZVV0aWxzLmJ1aWxkVHJlZShncm91cHMpO1xuXHRcdFx0XHRpZiAob2JqZWN0LmlkKSB7XG5cdFx0XHRcdFx0dmFyIG5vZGUgPSB0aGlzLnRyZWVVdGlscy5maW5kVHJlZU5vZGUodGhpcy50cmVlLCBvYmplY3QuaWQpO1xuXHRcdFx0XHRcdG5vZGUuc2VsZWN0YWJsZSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvYmplY3QucGFyZW50X2lkKSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZE5vZGUgPSB0aGlzLnRyZWVVdGlscy5maW5kVHJlZU5vZGUodGhpcy50cmVlLCBvYmplY3QucGFyZW50X2lkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XHRcdFxuXHRcdH0pO1xuXHR9XG5cbn1cblxuXG4iXX0=
