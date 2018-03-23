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
var base_component_1 = require("../shared/components/base/base.component");
var _ = require("underscore");
var report_decorator_1 = require("./report.decorator");
var report_container_directive_1 = require("./report-container.directive");
var ReportComponent = (function (_super) {
    __extends(ReportComponent, _super);
    function ReportComponent(componentFactoryResolver) {
        var _this = _super.call(this) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        return _this;
    }
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = _.map(report_decorator_1.ReportRegister.Instance.lookup('exam'), function (report) {
            return {
                label: _this.translateService.instant(report["title"]),
                value: report["component"]
            };
        });
    };
    ReportComponent.prototype.renderReportComponent = function (component) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        var viewContainerRef = this.container.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
    };
    ReportComponent.prototype.selectReport = function () {
        if (this.selectedItem)
            this.renderReportComponent(this.selectedItem);
    };
    __decorate([
        core_1.ViewChild(report_container_directive_1.ReportContainerDirective),
        __metadata("design:type", report_container_directive_1.ReportContainerDirective)
    ], ReportComponent.prototype, "container", void 0);
    ReportComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'report',
            templateUrl: 'report.component.html'
        }),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
    ], ReportComponent);
    return ReportComponent;
}(base_component_1.BaseComponent));
exports.ReportComponent = ReportComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBdUY7QUFFdkYsMkVBQXlFO0FBQ3pFLDhCQUFnQztBQUVoQyx1REFBb0Q7QUFDcEQsMkVBQXdFO0FBU3hFO0lBQXFDLG1DQUFhO0lBTWpELHlCQUFvQix3QkFBa0Q7UUFBdEUsWUFDQyxpQkFBTyxTQUNQO1FBRm1CLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7O0lBRXRFLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOTSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsaUNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFVBQUMsTUFBTTtZQUN2RSxNQUFNLENBQUM7Z0JBQ04sS0FBSyxFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNyRCxLQUFLLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQzthQUN6QixDQUFBO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsK0NBQXFCLEdBQXJCLFVBQXNCLFNBQVM7UUFDOUIsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEYsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDO1FBQ3ZELGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLElBQUksWUFBWSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQ0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNyQixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUF6Qm9DO1FBQXBDLGdCQUFTLENBQUMscURBQXdCLENBQUM7a0NBQVkscURBQXdCO3NEQUFDO0lBSjdELGVBQWU7UUFMM0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3BDLENBQUM7eUNBTzZDLCtCQUF3QjtPQU4xRCxlQUFlLENBZ0MzQjtJQUFELHNCQUFDO0NBaENELEFBZ0NDLENBaENvQyw4QkFBYSxHQWdDakQ7QUFoQ1ksMENBQWUiLCJmaWxlIjoiYXBwL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9zaGFyZWQvY29tcG9uZW50cy9iYXNlL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgeyBTZWxlY3RJdGVtIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgUmVwb3J0UmVnaXN0ZXIgfSBmcm9tICcuL3JlcG9ydC5kZWNvcmF0b3InO1xuaW1wb3J0IHsgUmVwb3J0Q29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9yZXBvcnQtY29udGFpbmVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBSRVBPUlRfQ0FURUdPUlkgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWxzL2NvbnN0YW50cydcblxuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdyZXBvcnQnLFxuXHR0ZW1wbGF0ZVVybDogJ3JlcG9ydC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUmVwb3J0Q29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0aXRlbXM6IFNlbGVjdEl0ZW1bXTtcblx0c2VsZWN0ZWRJdGVtOiBhbnk7XG5cdEBWaWV3Q2hpbGQoUmVwb3J0Q29udGFpbmVyRGlyZWN0aXZlKSBjb250YWluZXI6IFJlcG9ydENvbnRhaW5lckRpcmVjdGl2ZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gXy5tYXAoUmVwb3J0UmVnaXN0ZXIuSW5zdGFuY2UubG9va3VwKCdleGFtJyksIChyZXBvcnQpPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0bGFiZWw6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KHJlcG9ydFtcInRpdGxlXCJdKSxcblx0XHRcdFx0dmFsdWU6IHJlcG9ydFtcImNvbXBvbmVudFwiXVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fVxuXG5cdHJlbmRlclJlcG9ydENvbXBvbmVudChjb21wb25lbnQpIHtcblx0XHRsZXQgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG5cdFx0bGV0IHZpZXdDb250YWluZXJSZWYgPSB0aGlzLmNvbnRhaW5lci52aWV3Q29udGFpbmVyUmVmO1xuXHRcdHZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcblx0XHRsZXQgY29tcG9uZW50UmVmID0gdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG5cdH1cblxuXHRzZWxlY3RSZXBvcnQoKSB7XG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRJdGVtKVxuXHRcdFx0dGhpcy5yZW5kZXJSZXBvcnRDb21wb25lbnQodGhpcy5zZWxlY3RlZEl0ZW0pO1xuXHR9XG5cblxufVxuIl19
