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
var group_model_1 = require("../../../shared/models/group.model");
var base_dialog_1 = require("../../../shared/components/base/base.dialog");
var tree_utils_1 = require("../../../shared/helpers/tree.utils");
var constants_1 = require("../../../shared/models/constants");
var UserProfileDialog = (function (_super) {
    __extends(UserProfileDialog, _super);
    function UserProfileDialog() {
        var _this = _super.call(this) || this;
        _this.members = [];
        _this.treeUtils = new tree_utils_1.TreeUtils();
        return _this;
    }
    UserProfileDialog.prototype.nodeSelect = function (event) {
        if (this.selectedNode) {
            this.object.class_id = this.selectedNode.data.id;
        }
    };
    UserProfileDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.onShow.subscribe(function (object) {
            group_model_1.Group.listByCategory(_this, constants_1.GROUP_CATEGORY.USER).subscribe(function (groups) {
                _this.tree = _this.treeUtils.buildTree(groups);
                if (object.class_id) {
                    _this.selectedNode = _this.treeUtils.findTreeNode(_this.tree, object.class_id);
                }
            });
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], UserProfileDialog.prototype, "role", void 0);
    UserProfileDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-profile-dialog',
            templateUrl: 'profile-dialog.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileDialog);
    return UserProfileDialog;
}(base_dialog_1.BaseDialog));
exports.UserProfileDialog = UserProfileDialog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hY2NvdW50L3VzZXIvcHJvZmlsZS1kaWFsb2cvcHJvZmlsZS1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF3RDtBQUl4RCxrRUFBMkQ7QUFDM0QsMkVBQXlFO0FBR3pFLGlFQUErRDtBQUUvRCw4REFBa0U7QUFRbEU7SUFBdUMscUNBQWdCO0lBUXREO1FBQUEsWUFDQyxpQkFBTyxTQUdQO1FBRkEsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHNCQUFTLEVBQUUsQ0FBQzs7SUFDbEMsQ0FBQztJQUVELHNDQUFVLEdBQVYsVUFBVyxLQUFTO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNsRCxDQUFDO0lBQ0YsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJBLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMzQixtQkFBSyxDQUFDLGNBQWMsQ0FBQyxLQUFJLEVBQUUsMEJBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO2dCQUMvRCxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM3QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDckIsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0UsQ0FBQztZQUNGLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBeEJXO1FBQVIsWUFBSyxFQUFFOzttREFBYztJQUxiLGlCQUFpQjtRQUw3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsV0FBVyxFQUFFLCtCQUErQjtTQUMvQyxDQUFDOztPQUNXLGlCQUFpQixDQWdDN0I7SUFBRCx3QkFBQztDQWhDRCxBQWdDQyxDQWhDc0Msd0JBQVUsR0FnQ2hEO0FBaENZLDhDQUFpQiIsImZpbGUiOiJhcHAvYWNjb3VudC91c2VyL3Byb2ZpbGUtZGlhbG9nL3Byb2ZpbGUtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlfSAgICAgZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEFQSVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9ncm91cC5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlRGlhbG9nIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYmFzZS9iYXNlLmRpYWxvZyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy91c2VyLm1vZGVsJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgeyBUcmVlVXRpbHMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaGVscGVycy90cmVlLnV0aWxzJztcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgR1JPVVBfQ0FURUdPUlkgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2NvbnN0YW50cyc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3VzZXItcHJvZmlsZS1kaWFsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAncHJvZmlsZS1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyUHJvZmlsZURpYWxvZyBleHRlbmRzIEJhc2VEaWFsb2c8VXNlcj4ge1xuXG4gICAgdHJlZTogVHJlZU5vZGVbXTtcbiAgICBzZWxlY3RlZE5vZGU6IFRyZWVOb2RlO1xuICAgIG1lbWJlcnM6IENvdXJzZU1lbWJlcltdO1xuICAgIEBJbnB1dCgpIHJvbGU6IHN0cmluZztcbiAgICB0cmVlVXRpbHM6IFRyZWVVdGlscztcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMubWVtYmVycyA9IFtdO1xuXHRcdHRoaXMudHJlZVV0aWxzID0gbmV3IFRyZWVVdGlscygpO1xuXHR9XG5cblx0bm9kZVNlbGVjdChldmVudDphbnkpIHtcblx0XHRpZiAodGhpcy5zZWxlY3RlZE5vZGUpIHtcblx0XHRcdHRoaXMub2JqZWN0LmNsYXNzX2lkID0gdGhpcy5zZWxlY3RlZE5vZGUuZGF0YS5pZDtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm9uU2hvdy5zdWJzY3JpYmUob2JqZWN0ID0+IHtcblx0XHRcdEdyb3VwLmxpc3RCeUNhdGVnb3J5KHRoaXMsIEdST1VQX0NBVEVHT1JZLlVTRVIpLnN1YnNjcmliZShncm91cHMgPT4ge1xuXHRcdFx0XHR0aGlzLnRyZWUgPSB0aGlzLnRyZWVVdGlscy5idWlsZFRyZWUoZ3JvdXBzKTtcblx0XHRcdFx0aWYgKG9iamVjdC5jbGFzc19pZCkge1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWROb2RlID0gdGhpcy50cmVlVXRpbHMuZmluZFRyZWVOb2RlKHRoaXMudHJlZSwgb2JqZWN0LmNsYXNzX2lkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXG59XG5cbiJdfQ==
