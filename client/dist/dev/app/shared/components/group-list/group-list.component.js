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
    function GroupListComponent(route) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.treeUtils = new tree_utils_1.TreeUtils();
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
            selector: 'group-list',
            templateUrl: 'group-list.component.html',
            styleUrls: ['group-list.component.css'],
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], GroupListComponent);
    return GroupListComponent;
}(base_component_1.BaseComponent));
exports.GroupListComponent = GroupListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy9ncm91cC1saXN0L2dyb3VwLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFtRjtBQUNuRiwwQ0FBaUQ7QUFLakQsd0RBQWlEO0FBQ2pELHlEQUF1RDtBQUN2RCx1REFBcUQ7QUFFckQsaUZBQXFFO0FBU3JFO0lBQXdDLHNDQUFhO0lBS2pELDRCQUFxQixLQUFxQjtRQUExQyxZQUNJLGlCQUFPLFNBRVY7UUFIb0IsV0FBSyxHQUFMLEtBQUssQ0FBZ0I7UUFFdEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHNCQUFTLEVBQUUsQ0FBQzs7SUFDckMsQ0FBQztJQVFELHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNwRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGdDQUFHLEdBQUg7UUFBQSxpQkFPQztRQU5HLElBQUksS0FBSyxHQUFJLElBQUksbUJBQUssRUFBRSxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztZQUN4QyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsaUNBQUksR0FBSjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQztZQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQztZQUNsRSxNQUFNLEVBQUU7Z0JBQ0osS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQztvQkFDMUMsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUN0QixDQUFDLENBQUMsQ0FBQTtZQUNOLENBQUM7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQVUsR0FBVjtRQUFBLGlCQUtDO1FBSkcsbUJBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3RELEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBakR1QjtRQUF2QixnQkFBUyxDQUFDLG9DQUFXLENBQUM7a0NBQWMsb0NBQVc7MkRBQUM7SUFGeEMsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUMxQyxDQUFDO3lDQU04Qix1QkFBYztPQUxqQyxrQkFBa0IsQ0FzRDlCO0lBQUQseUJBQUM7Q0F0REQsQUFzREMsQ0F0RHVDLDhCQUFhLEdBc0RwRDtBQXREWSxnREFBa0IiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb21wb25lbnRzL2dyb3VwLWxpc3QvZ3JvdXAtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBBUElTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2dyb3VwLm1vZGVsJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IFRyZWVVdGlscyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdHJlZS51dGlscyc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IEdyb3VwRGlhbG9nIH0gZnJvbSAnLi4vZ3JvdXAtZGlhbG9nL2dyb3VwLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR1JPVVBfQ0FURUdPUll9IGZyb20gJy4uLy4uL21vZGVscy9jb25zdGFudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZ3JvdXAtbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICdncm91cC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnZ3JvdXAtbGlzdC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEdyb3VwTGlzdENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQFZpZXdDaGlsZChHcm91cERpYWxvZykgZ3JvdXBEaWFsb2c6IEdyb3VwRGlhbG9nO1xuICAgIHRyZWVVdGlsczogVHJlZVV0aWxzO1xuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHJlZVV0aWxzID0gbmV3IFRyZWVVdGlscygpO1xuICAgIH1cblxuICAgIHRyZWU6IFRyZWVOb2RlW107XG4gICAgc2VsZWN0ZWROb2RlOiBUcmVlTm9kZTtcbiAgICBncm91cHM6IEdyb3VwW107XG4gICAgY2F0ZWdvcnk6IHN0cmluZztcblxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSB0aGlzLnJvdXRlLnNuYXBzaG90LmRhdGFbJ2NhdGVnb3J5J11cbiAgICAgICAgdGhpcy5sb2FkR3JvdXBzKCk7XG4gICAgfVxuXG4gICAgYWRkKCkge1xuICAgICAgICB2YXIgZ3JvdXAgPSAgbmV3IEdyb3VwKCk7XG4gICAgICAgIGdyb3VwLmNhdGVnb3J5ID0gdGhpcy5jYXRlZ29yeTtcbiAgICAgICAgdGhpcy5ncm91cERpYWxvZy5zaG93KGdyb3VwKTtcbiAgICAgICAgdGhpcy5ncm91cERpYWxvZy5vbkNyZWF0ZUNvbXBsZXRlLnN1YnNjcmliZSgoKT0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZEdyb3VwcygpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGVkaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZSlcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBEaWFsb2cuc2hvdyh0aGlzLnNlbGVjdGVkTm9kZS5kYXRhKTtcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMuY29uZmlybWF0aW9uU2VydmljZS5jb25maXJtKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdBcmUgeW91IHN1cmUgdG8gZGVsZXRlID8nKSxcbiAgICAgICAgICAgIGFjY2VwdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWROb2RlLmRhdGEuZGVsZXRlKHRoaXMpLnN1YnNjcmliZSgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkR3JvdXBzKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZEdyb3VwcygpIHtcbiAgICAgICAgR3JvdXAubGlzdEJ5Q2F0ZWdvcnkodGhpcywgdGhpcy5jYXRlZ29yeSkuc3Vic2NyaWJlKGdyb3VwcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmdyb3VwcyA9IGdyb3VwcztcbiAgICAgICAgICAgIHRoaXMudHJlZSA9IHRoaXMudHJlZVV0aWxzLmJ1aWxkVHJlZShncm91cHMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG5cbn1cbiJdfQ==
