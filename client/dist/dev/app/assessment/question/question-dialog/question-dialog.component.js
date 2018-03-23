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
var question_container_directive_1 = require("../question-template/question-container.directive");
var question_decorator_1 = require("../question-template/question.decorator");
var QuestionDialog = (function (_super) {
    __extends(QuestionDialog, _super);
    function QuestionDialog(componentFactoryResolver) {
        var _this = _super.call(this) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        _this.treeUtils = new tree_utils_1.TreeUtils();
        return _this;
    }
    QuestionDialog.prototype.nodeSelect = function (event) {
        if (this.selectedNode) {
            this.object.group_id = this.selectedNode.data.id;
        }
    };
    QuestionDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.onShow.subscribe(function (object) {
            group_model_1.Group.listByCategory(_this, constants_1.GROUP_CATEGORY.QUESTION).subscribe(function (groups) {
                _this.tree = _this.treeUtils.buildTree(groups);
                if (object.group_id) {
                    _this.selectedNode = _this.treeUtils.findTreeNode(_this.tree, object.group_id);
                }
            });
            var detailComponent = question_decorator_1.QuestionRegister.Instance.lookup(object.type);
            var viewContainerRef = _this.questionHost.viewContainerRef;
            if (detailComponent) {
                var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(detailComponent);
                viewContainerRef.clear();
                _this.componentRef = viewContainerRef.createComponent(componentFactory);
                _this.componentRef.instance.mode = 'edit';
                _this.componentRef.instance.render(object);
            }
            else {
                viewContainerRef.clear();
                _this.componentRef = null;
            }
        });
        this.onUpdateComplete.subscribe(function (object) {
            if (_this.componentRef)
                _this.componentRef.instance.saveEditor().subscribe(function () {
                    _this.messageService.add({ severity: 'success', summary: 'Success', detail: _this.translateService.instant('Question saved.') });
                });
        });
    };
    __decorate([
        core_1.ViewChild(question_container_directive_1.QuestionContainerDirective),
        __metadata("design:type", question_container_directive_1.QuestionContainerDirective)
    ], QuestionDialog.prototype, "questionHost", void 0);
    QuestionDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-question-dialog',
            templateUrl: 'question-dialog.component.html',
        }),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
    ], QuestionDialog);
    return QuestionDialog;
}(base_dialog_1.BaseDialog));
exports.QuestionDialog = QuestionDialog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3Nlc3NtZW50L3F1ZXN0aW9uL3F1ZXN0aW9uLWRpYWxvZy9xdWVzdGlvbi1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUE4RjtBQUk5RixrRUFBMkQ7QUFDM0QsMkVBQXlFO0FBR3pFLGlFQUErRDtBQUUvRCw4REFBa0U7QUFDbEUsa0dBQStGO0FBRS9GLDhFQUEyRTtBQU8zRTtJQUFvQyxrQ0FBb0I7SUFRdkQsd0JBQW9CLHdCQUFrRDtRQUF0RSxZQUNDLGlCQUFPLFNBRVA7UUFIbUIsOEJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUVyRSxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDOztJQUNsQyxDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLEtBQVU7UUFDcEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2xELENBQUM7SUFDRixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUFBLGlCQTRCQztRQTNCQSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDM0IsbUJBQUssQ0FBQyxjQUFjLENBQUMsS0FBSSxFQUFFLDBCQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtnQkFDbkUsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDN0MsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzdFLENBQUM7WUFDRixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksZUFBZSxHQUFHLHFDQUFnQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BFLElBQUksZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztZQUMxRCxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLGdCQUFnQixHQUFHLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDOUYsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzNELEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4RCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ1AsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQzFCLENBQUM7UUFFRixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3JDLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUM5RCxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDaEksQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7SUEzQ3NDO1FBQXRDLGdCQUFTLENBQUMseURBQTBCLENBQUM7a0NBQWUseURBQTBCO3dEQUFDO0lBSnBFLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7U0FDN0MsQ0FBQzt5Q0FTNkMsK0JBQXdCO09BUjFELGNBQWMsQ0FrRDFCO0lBQUQscUJBQUM7Q0FsREQsQUFrREMsQ0FsRG1DLHdCQUFVLEdBa0Q3QztBQWxEWSx3Q0FBYyIsImZpbGUiOiJhcHAvYXNzZXNzbWVudC9xdWVzdGlvbi9xdWVzdGlvbi1kaWFsb2cvcXVlc3Rpb24tZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQVBJU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2dyb3VwLm1vZGVsJztcbmltcG9ydCB7IEJhc2VEaWFsb2cgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9iYXNlL2Jhc2UuZGlhbG9nJztcbmltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9xdWVzdGlvbi5tb2RlbCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IHsgVHJlZVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2hlbHBlcnMvdHJlZS51dGlscyc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IEdST1VQX0NBVEVHT1JZIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgUXVlc3Rpb25Db250YWluZXJEaXJlY3RpdmUgfSBmcm9tICcuLi9xdWVzdGlvbi10ZW1wbGF0ZS9xdWVzdGlvbi1jb250YWluZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IElRdWVzdGlvbiB9IGZyb20gJy4uL3F1ZXN0aW9uLXRlbXBsYXRlL3F1ZXN0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBRdWVzdGlvblJlZ2lzdGVyIH0gZnJvbSAnLi4vcXVlc3Rpb24tdGVtcGxhdGUvcXVlc3Rpb24uZGVjb3JhdG9yJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnZXRyYWluaW5nLXF1ZXN0aW9uLWRpYWxvZycsXG5cdHRlbXBsYXRlVXJsOiAncXVlc3Rpb24tZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25EaWFsb2cgZXh0ZW5kcyBCYXNlRGlhbG9nPFF1ZXN0aW9uPiB7XG5cblx0dHJlZTogVHJlZU5vZGVbXTtcblx0c2VsZWN0ZWROb2RlOiBUcmVlTm9kZTtcblx0QFZpZXdDaGlsZChRdWVzdGlvbkNvbnRhaW5lckRpcmVjdGl2ZSkgcXVlc3Rpb25Ib3N0OiBRdWVzdGlvbkNvbnRhaW5lckRpcmVjdGl2ZTtcblx0Y29tcG9uZW50UmVmOiBhbnk7XG5cdHRyZWVVdGlsczogVHJlZVV0aWxzO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudHJlZVV0aWxzID0gbmV3IFRyZWVVdGlscygpO1xuXHR9XG5cblx0bm9kZVNlbGVjdChldmVudDogYW55KSB7XG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWROb2RlKSB7XG5cdFx0XHR0aGlzLm9iamVjdC5ncm91cF9pZCA9IHRoaXMuc2VsZWN0ZWROb2RlLmRhdGEuaWQ7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5vblNob3cuc3Vic2NyaWJlKG9iamVjdCA9PiB7XG5cdFx0XHRHcm91cC5saXN0QnlDYXRlZ29yeSh0aGlzLCBHUk9VUF9DQVRFR09SWS5RVUVTVElPTikuc3Vic2NyaWJlKGdyb3VwcyA9PiB7XG5cdFx0XHRcdHRoaXMudHJlZSA9IHRoaXMudHJlZVV0aWxzLmJ1aWxkVHJlZShncm91cHMpO1xuXHRcdFx0XHRpZiAob2JqZWN0Lmdyb3VwX2lkKSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZE5vZGUgPSB0aGlzLnRyZWVVdGlscy5maW5kVHJlZU5vZGUodGhpcy50cmVlLCBvYmplY3QuZ3JvdXBfaWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHZhciBkZXRhaWxDb21wb25lbnQgPSBRdWVzdGlvblJlZ2lzdGVyLkluc3RhbmNlLmxvb2t1cChvYmplY3QudHlwZSk7XG5cdFx0XHRsZXQgdmlld0NvbnRhaW5lclJlZiA9IHRoaXMucXVlc3Rpb25Ib3N0LnZpZXdDb250YWluZXJSZWY7XG5cdFx0XHRpZiAoZGV0YWlsQ29tcG9uZW50KSB7XG5cdFx0XHRcdGxldCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoZGV0YWlsQ29tcG9uZW50KTtcblx0XHRcdFx0dmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXHRcdFx0XHR0aGlzLmNvbXBvbmVudFJlZiA9IHZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuXHRcdFx0XHQoPElRdWVzdGlvbj50aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSkubW9kZSA9ICdlZGl0Jztcblx0XHRcdFx0KDxJUXVlc3Rpb24+dGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnJlbmRlcihvYmplY3QpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXHRcdFx0XHR0aGlzLmNvbXBvbmVudFJlZiA9IG51bGw7XG5cdFx0XHR9XG5cblx0XHR9KTtcblx0XHR0aGlzLm9uVXBkYXRlQ29tcGxldGUuc3Vic2NyaWJlKG9iamVjdCA9PiB7XG5cdFx0XHRpZiAodGhpcy5jb21wb25lbnRSZWYpXG5cdFx0XHRcdCg8SVF1ZXN0aW9uPnRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlKS5zYXZlRWRpdG9yKCkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZCh7IHNldmVyaXR5OiAnc3VjY2VzcycsIHN1bW1hcnk6ICdTdWNjZXNzJywgZGV0YWlsOiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCgnUXVlc3Rpb24gc2F2ZWQuJykgfSk7XG5cdFx0XHRcdH0pO1xuXHRcdH0pXG5cdH1cblxuXG59XG5cblxuIl19
