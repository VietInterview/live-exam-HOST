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
var UserDialog = (function (_super) {
    __extends(UserDialog, _super);
    function UserDialog() {
        var _this = _super.call(this) || this;
        _this.treeUtils = new tree_utils_1.TreeUtils();
        return _this;
    }
    UserDialog.prototype.nodeSelect = function (event) {
        if (this.selectedNode) {
            this.object.class_id = this.selectedNode.data.id;
        }
    };
    UserDialog.prototype.ngOnInit = function () {
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
    UserDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-dialog',
            templateUrl: 'user-dialog.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], UserDialog);
    return UserDialog;
}(base_dialog_1.BaseDialog));
exports.UserDialog = UserDialog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hY2NvdW50L3VzZXIvdXNlci1kaWFsb2cvdXNlci1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF3RDtBQUl4RCxrRUFBMkQ7QUFDM0QsMkVBQXlFO0FBR3pFLGlFQUErRDtBQUUvRCw4REFBa0U7QUFRbEU7SUFBZ0MsOEJBQWdCO0lBTS9DO1FBQUEsWUFDQyxpQkFBTyxTQUVQO1FBREEsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHNCQUFTLEVBQUUsQ0FBQzs7SUFDbEMsQ0FBQztJQUVELCtCQUFVLEdBQVYsVUFBVyxLQUFTO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNsRCxDQUFDO0lBQ0YsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJBLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMzQixtQkFBSyxDQUFDLGNBQWMsQ0FBQyxLQUFJLEVBQUUsMEJBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO2dCQUMvRCxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM3QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDckIsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0UsQ0FBQztZQUNGLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBMUJXLFVBQVU7UUFMdEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsNEJBQTRCO1NBQzVDLENBQUM7O09BQ1csVUFBVSxDQTZCdEI7SUFBRCxpQkFBQztDQTdCRCxBQTZCQyxDQTdCK0Isd0JBQVUsR0E2QnpDO0FBN0JZLGdDQUFVIiwiZmlsZSI6ImFwcC9hY2NvdW50L3VzZXIvdXNlci1kaWFsb2cvdXNlci1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGV9ICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQVBJU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2dyb3VwLm1vZGVsJztcbmltcG9ydCB7IEJhc2VEaWFsb2cgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9iYXNlL2Jhc2UuZGlhbG9nJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL3VzZXIubW9kZWwnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7IFRyZWVVdGlscyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9oZWxwZXJzL3RyZWUudXRpbHMnO1xuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBHUk9VUF9DQVRFR09SWSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvY29uc3RhbnRzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAndXNlci1kaWFsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAndXNlci1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyRGlhbG9nIGV4dGVuZHMgQmFzZURpYWxvZzxVc2VyPiB7XG5cbiAgICB0cmVlOiBUcmVlTm9kZVtdO1xuICAgIHNlbGVjdGVkTm9kZTogVHJlZU5vZGU7XG4gICAgdHJlZVV0aWxzOiBUcmVlVXRpbHM7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnRyZWVVdGlscyA9IG5ldyBUcmVlVXRpbHMoKTtcblx0fVxuXG5cdG5vZGVTZWxlY3QoZXZlbnQ6YW55KSB7XG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWROb2RlKSB7XG5cdFx0XHR0aGlzLm9iamVjdC5jbGFzc19pZCA9IHRoaXMuc2VsZWN0ZWROb2RlLmRhdGEuaWQ7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5vblNob3cuc3Vic2NyaWJlKG9iamVjdCA9PiB7XG5cdFx0XHRHcm91cC5saXN0QnlDYXRlZ29yeSh0aGlzLCBHUk9VUF9DQVRFR09SWS5VU0VSKS5zdWJzY3JpYmUoZ3JvdXBzID0+IHtcblx0XHRcdFx0dGhpcy50cmVlID0gdGhpcy50cmVlVXRpbHMuYnVpbGRUcmVlKGdyb3Vwcyk7XG5cdFx0XHRcdGlmIChvYmplY3QuY2xhc3NfaWQpIHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkTm9kZSA9IHRoaXMudHJlZVV0aWxzLmZpbmRUcmVlTm9kZSh0aGlzLnRyZWUsIG9iamVjdC5jbGFzc19pZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1x0XHRcblx0XHR9KTtcblx0fVxuXG5cbn1cblxuIl19
