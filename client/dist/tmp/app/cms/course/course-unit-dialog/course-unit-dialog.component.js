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
var base_dialog_1 = require("../../../shared/components/base/base.dialog");
var tree_utils_1 = require("../../../shared/helpers/tree.utils");
var unit_decorator_1 = require("../course-unit-template/unit.decorator");
var unit_container_directive_1 = require("../course-unit-template/unit-container.directive");
var CourseUnitDialog = (function (_super) {
    __extends(CourseUnitDialog, _super);
    function CourseUnitDialog(treeUtils, componentFactoryResolver) {
        var _this = _super.call(this) || this;
        _this.treeUtils = treeUtils;
        _this.componentFactoryResolver = componentFactoryResolver;
        return _this;
    }
    CourseUnitDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.onShow.subscribe(function (object) {
            var detailComponent = unit_decorator_1.CourseUnitRegister.Instance.lookup(object.type);
            var viewContainerRef = _this.unitHost.viewContainerRef;
            if (detailComponent) {
                var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(detailComponent);
                viewContainerRef.clear();
                _this.componentRef = viewContainerRef.createComponent(componentFactory);
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
                    _this.messageService.add({ severity: 'success', summary: 'Success', detail: _this.translateService.instant('Course unit saved.') });
                });
        });
    };
    __decorate([
        core_1.ViewChild(unit_container_directive_1.CourseUnitContainerDirective),
        __metadata("design:type", unit_container_directive_1.CourseUnitContainerDirective)
    ], CourseUnitDialog.prototype, "unitHost", void 0);
    CourseUnitDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-course-unit-dialog',
            template: "<form novalidate (ngSubmit)=\"save()\" #f=\"ngForm\"  autocomplete=\"off\">   <p-dialog header=\"{{'Course unit'|translate}}\" [(visible)]=\"display\" modal=\"true\" width=\"800\" [responsive]=\"true\" appendTo=\"body\">     <p-scrollPanel [style]=\"{width: '100%', height: '480px'}\">       <div class=\"ui-g ui-fluid form-group\">         <div class=\" ui-g-12 \">           <span class=\"md-inputfield\">               <input type=\"text\"  pInputText name=\"name\"[(ngModel)]=\"object.name\">               <label for=\"name\">{{'Name' | translate}}</label>           </span>         </div>         <div class=\" ui-g-12 \">           <ng-template course-unit-container></ng-template>         </div>       </div>          </p-scrollPanel>     <p-footer>       <button type=\"button\" (click)=\"f.ngSubmit.emit()\" pButton icon=\"fa-check\" label=\"{{'Save'|translate}}\"></button>       <button type=\"button\" pButton icon=\"fa-close\" (click)=\"hide()\" label=\"{{'Close'|translate}}\"></button>     </p-footer>   </p-dialog> </form>",
        }),
        __metadata("design:paramtypes", [tree_utils_1.TreeUtils, core_1.ComponentFactoryResolver])
    ], CourseUnitDialog);
    return CourseUnitDialog;
}(base_dialog_1.BaseDialog));
exports.CourseUnitDialog = CourseUnitDialog;
