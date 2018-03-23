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
var base_component_1 = require("../../shared/components/base/base.component");
var RecoverPasswordComponent = (function (_super) {
    __extends(RecoverPasswordComponent, _super);
    function RecoverPasswordComponent() {
        return _super.call(this) || this;
    }
    RecoverPasswordComponent.prototype.ngOnInit = function () {
        this.company = this.cacheService.UserCompany;
    };
    RecoverPasswordComponent.prototype.recoverPassword = function () {
        var _this = this;
        this.authService.resetPass(this.recover_email).subscribe(function (resp) {
            _this.messageService
                .add({
                severity: 'success',
                summary: 'Success',
                detail: _this.translateService.instant('Password recovery instruction sent to your email')
            });
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RecoverPasswordComponent.prototype, "recover_email", void 0);
    RecoverPasswordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'recover-password',
            templateUrl: 'recover-password.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], RecoverPasswordComponent);
    return RecoverPasswordComponent;
}(base_component_1.BaseComponent));
exports.RecoverPasswordComponent = RecoverPasswordComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3JlY292ZXIvcmVjb3Zlci1wYXNzd29yZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlEO0FBRXpELDhFQUE0RTtBQVM1RTtJQUE4Qyw0Q0FBYTtJQUt2RDtlQUNFLGlCQUFPO0lBQ1QsQ0FBQztJQUVELDJDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDO0lBQ2hELENBQUM7SUFFRCxrREFBZSxHQUFmO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUN4RCxLQUFJLENBQUMsY0FBYztpQkFDbEIsR0FBRyxDQUFDO2dCQUNILFFBQVEsRUFBQyxTQUFTO2dCQUNsQixPQUFPLEVBQUMsU0FBUztnQkFDakIsTUFBTSxFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsa0RBQWtELENBQUM7YUFDMUYsQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBcEJRO1FBQVIsWUFBSyxFQUFFOzttRUFBdUI7SUFGdEIsd0JBQXdCO1FBTnBDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsaUNBQWlDO1NBQy9DLENBQUM7O09BRVcsd0JBQXdCLENBd0JwQztJQUFELCtCQUFDO0NBeEJELEFBd0JDLENBeEI2Qyw4QkFBYSxHQXdCMUQ7QUF4QlksNERBQXdCIiwiZmlsZSI6ImFwcC9hdXRoL3JlY292ZXIvcmVjb3Zlci1wYXNzd29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2Jhc2UvYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcGFueSB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvY29tcGFueS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3JlY292ZXItcGFzc3dvcmQnLFxuICB0ZW1wbGF0ZVVybDogJ3JlY292ZXItcGFzc3dvcmQuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgUmVjb3ZlclBhc3N3b3JkQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSByZWNvdmVyX2VtYWlsOiBzdHJpbmc7XG4gICAgY29tcGFueTogQ29tcGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyBcbiAgICAgIHN1cGVyKCk7IFxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5jb21wYW55ID0gIHRoaXMuY2FjaGVTZXJ2aWNlLlVzZXJDb21wYW55O1xuICAgIH1cblxuICAgIHJlY292ZXJQYXNzd29yZCgpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5yZXNldFBhc3ModGhpcy5yZWNvdmVyX2VtYWlsKS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZVxuICAgICAgICAgICAgICAuYWRkKHtcbiAgICAgICAgICAgICAgICBzZXZlcml0eTonc3VjY2VzcycsIFxuICAgICAgICAgICAgICAgIHN1bW1hcnk6J1N1Y2Nlc3MnLCBcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdQYXNzd29yZCByZWNvdmVyeSBpbnN0cnVjdGlvbiBzZW50IHRvIHlvdXIgZW1haWwnKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbn1cblxuIl19
