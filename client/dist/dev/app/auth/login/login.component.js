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
var base_component_1 = require("../../shared/components/base/base.component");
var company_model_1 = require("../../shared/models/company.model");
var LoginComponent = (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(route, router) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.router = router;
        _this.company = new company_model_1.Company();
        return _this;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.credential = this.authService.StoredCredential;
        this.remember = this.authService.Remember;
        company_model_1.Company.default(this).subscribe(function (profile) {
            _this.company = profile;
            console.log(profile);
            _this.cacheService.UserCompany = profile;
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.credential)
            .subscribe(function (user) {
            _this.authService.saveCredential(_this.credential, _this.remember);
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.messageService.add({ severity: 'error', summary: 'Error', detail: _this.translateService.instant('Login failed.') });
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], LoginComponent.prototype, "remember", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}(base_component_1.BaseComponent));
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUQ7QUFDekQsMENBQXlEO0FBQ3pELDhFQUE0RTtBQUc1RSxtRUFBNEQ7QUFRNUQ7SUFBb0Msa0NBQWE7SUFPN0Msd0JBQ1ksS0FBcUIsRUFDckIsTUFBYztRQUYxQixZQUdJLGlCQUFPLFNBRVY7UUFKVyxXQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXRCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSx1QkFBTyxFQUFFLENBQUM7O0lBQ2pDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDckUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDMUMsdUJBQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNuQyxLQUFJLENBQUMsT0FBTyxHQUFJLE9BQU8sQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxHQUFJLE9BQU8sQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ2xDLFNBQVMsQ0FDVixVQUFBLElBQUk7WUFDQSxLQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzNDLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0gsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBOUJRO1FBQVIsWUFBSyxFQUFFOztvREFBbUI7SUFMbEIsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSxzQkFBc0I7U0FDdEMsQ0FBQzt5Q0FVcUIsdUJBQWM7WUFDYixlQUFNO09BVGpCLGNBQWMsQ0FvQzFCO0lBQUQscUJBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQ21DLDhCQUFhLEdBb0NoRDtBQXBDWSx3Q0FBYyIsImZpbGUiOiJhcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2Jhc2UvYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3JlZGVudGlhbCB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvY3JlZGVudGlhbC5tb2RlbCc7XG5pbXBvcnQgeyBDYWNoZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvY2FjaGUuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wYW55IH0gZnJvbSAnLi4vLi4vc2hhcmVkL21vZGVscy9jb21wYW55Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2xvZ2luJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2xvZ2luLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY3JlZGVudGlhbDogQ3JlZGVudGlhbDtcbiAgICBjb21wYW55OiBDb21wYW55O1xuICAgIHJldHVyblVybDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgcmVtZW1iZXI6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb21wYW55ID0gbmV3IENvbXBhbnkoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZXR1cm5VcmwgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zWydyZXR1cm5VcmwnXSB8fCAnLyc7XG4gICAgICAgIHRoaXMuY3JlZGVudGlhbCA9IHRoaXMuYXV0aFNlcnZpY2UuU3RvcmVkQ3JlZGVudGlhbDtcbiAgICAgICAgdGhpcy5yZW1lbWJlciA9IHRoaXMuYXV0aFNlcnZpY2UuUmVtZW1iZXI7XG4gICAgICAgIENvbXBhbnkuZGVmYXVsdCh0aGlzKS5zdWJzY3JpYmUocHJvZmlsZT0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcGFueSA9ICBwcm9maWxlO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZmlsZSk7XG4gICAgICAgICAgICB0aGlzLmNhY2hlU2VydmljZS5Vc2VyQ29tcGFueSA9ICBwcm9maWxlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dpbih0aGlzLmNyZWRlbnRpYWwpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgdXNlciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zYXZlQ3JlZGVudGlhbCh0aGlzLmNyZWRlbnRpYWwsIHRoaXMucmVtZW1iZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnJldHVyblVybF0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZCh7IHNldmVyaXR5OiAnZXJyb3InLCBzdW1tYXJ5OiAnRXJyb3InLCBkZXRhaWw6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdMb2dpbiBmYWlsZWQuJykgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuIl19
