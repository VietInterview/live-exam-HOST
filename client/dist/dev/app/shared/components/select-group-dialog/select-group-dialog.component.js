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
    function SelectGroupDialog() {
        var _this = _super.call(this) || this;
        _this.onSelectGroupReceiver = new Rx_1.Subject();
        _this.onSelectGroup = _this.onSelectGroupReceiver.asObservable();
        _this.treeUtils = new tree_utils_1.TreeUtils();
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
            selector: 'select-group-dialog',
            templateUrl: 'select-group-dialog.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], SelectGroupDialog);
    return SelectGroupDialog;
}(base_component_1.BaseComponent));
exports.SelectGroupDialog = SelectGroupDialog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy9zZWxlY3QtZ3JvdXAtZGlhbG9nL3NlbGVjdC1ncm91cC1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF5RDtBQUN6RCw4QkFBOEM7QUFHOUMsd0RBQWlEO0FBQ2pELHlEQUF1RDtBQUd2RCxpRUFBK0Q7QUFVL0Q7SUFBdUMscUNBQWE7SUFXbkQ7UUFBQSxZQUNDLGlCQUFPLFNBR1A7UUFQTywyQkFBcUIsR0FBaUIsSUFBSSxZQUFPLEVBQUUsQ0FBQztRQUN6RCxtQkFBYSxHQUFvQixLQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFJN0UsS0FBSSxDQUFDLFNBQVMsR0FBSSxJQUFJLHNCQUFTLEVBQUUsQ0FBQztRQUNsQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzs7SUFDdEIsQ0FBQztJQUVELGdDQUFJLEdBQUo7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0NBQUksR0FBSjtRQUFBLGlCQUtDO1FBSkEsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsbUJBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3pELEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsa0NBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDYixDQUFDO0lBN0JRO1FBQVIsWUFBSyxFQUFFOzt1REFBa0I7SUFGZCxpQkFBaUI7UUFMN0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFdBQVcsRUFBRSxvQ0FBb0M7U0FDakQsQ0FBQzs7T0FDVyxpQkFBaUIsQ0FrQzdCO0lBQUQsd0JBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ3NDLDhCQUFhLEdBa0NuRDtBQWxDWSw4Q0FBaUIiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb21wb25lbnRzL3NlbGVjdC1ncm91cC1kaWFsb2cvc2VsZWN0LWdyb3VwLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IEFQSVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uLy4uL21vZGVscy9ncm91cC5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy91c2VyLm1vZGVsJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgeyBUcmVlVXRpbHMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaGVscGVycy90cmVlLnV0aWxzJztcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgR1JPVVBfQ0FURUdPUlkgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2NvbnN0YW50cydcbmltcG9ydCB7IFNlbGVjdEl0ZW0gfSBmcm9tICdwcmltZW5nL2FwaSc7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ3NlbGVjdC1ncm91cC1kaWFsb2cnLFxuXHR0ZW1wbGF0ZVVybDogJ3NlbGVjdC1ncm91cC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RHcm91cERpYWxvZyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpIGNhdGVnb3J5OiBzdHJpbmc7XG5cdHRyZWU6IFRyZWVOb2RlW107XG5cdHNlbGVjdGVkTm9kZTogVHJlZU5vZGU7XG5cdHRyZWVVdGlsczogVHJlZVV0aWxzO1xuXHRkaXNwbGF5OiBib29sZWFuO1xuXG5cdHByaXZhdGUgb25TZWxlY3RHcm91cFJlY2VpdmVyOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICAgIG9uU2VsZWN0R3JvdXA6T2JzZXJ2YWJsZTxhbnk+ID0gIHRoaXMub25TZWxlY3RHcm91cFJlY2VpdmVyLmFzT2JzZXJ2YWJsZSgpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy50cmVlVXRpbHMgPSAgbmV3IFRyZWVVdGlscygpO1xuXHRcdHRoaXMuZGlzcGxheSA9IGZhbHNlO1xuXHR9XG5cblx0aGlkZSgpIHtcblx0XHR0aGlzLmRpc3BsYXkgPSBmYWxzZTtcblx0fVxuXG5cdHNob3coKSB7XG5cdFx0dGhpcy5kaXNwbGF5ID0gdHJ1ZTtcblx0XHRHcm91cC5saXN0QnlDYXRlZ29yeSh0aGlzLCB0aGlzLmNhdGVnb3J5KS5zdWJzY3JpYmUoZ3JvdXBzID0+IHtcblx0XHRcdHRoaXMudHJlZSA9IHRoaXMudHJlZVV0aWxzLmJ1aWxkVHJlZShncm91cHMpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2VsZWN0KCkge1xuXHRcdHRoaXMub25TZWxlY3RHcm91cFJlY2VpdmVyLm5leHQodGhpcy5zZWxlY3RlZE5vZGUuZGF0YSk7XG5cdFx0dGhpcy5oaWRlKCk7XG5cdH1cblxuXG59XG5cbiJdfQ==
