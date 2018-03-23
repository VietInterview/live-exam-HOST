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
var home_manager_service_1 = require("../home-manager.service");
var home_component_1 = require("../home.component");
var lang_service_1 = require("../../shared/services/lang.service");
var base_component_1 = require("../../shared/components/base/base.component");
var NavbarComponent = (function (_super) {
    __extends(NavbarComponent, _super);
    function NavbarComponent(langService, parent, eventManager) {
        var _this = _super.call(this) || this;
        _this.langService = langService;
        _this.parent = parent;
        _this.eventManager = eventManager;
        _this.langs = [
            { label: 'English', value: 'gb' },
            { label: 'Vietnamese', value: 'vn' }
        ];
        _this.selectedLang = _this.langService.Lang;
        _this.isAdmin = _this.authService.CurrentUser.is_admin || _this.authService.CurrentUser.login == 'admin';
        _this.viewMode = _this.isAdmin;
        return _this;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.user = this.authService.CurrentUser;
    };
    NavbarComponent.prototype.selectLang = function ($event) {
        this.langService.Lang = $event.value;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "selectedLang", void 0);
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navbar',
            templateUrl: 'navbar.component.html',
        }),
        __metadata("design:paramtypes", [lang_service_1.LangService, home_component_1.HomeComponent, home_manager_service_1.HomeEventManager])
    ], NavbarComponent);
    return NavbarComponent;
}(base_component_1.BaseComponent));
exports.NavbarComponent = NavbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF5RDtBQUt6RCxnRUFBMkQ7QUFDM0Qsb0RBQWtEO0FBQ2xELG1FQUFpRTtBQUVqRSw4RUFBNEU7QUFRNUU7SUFBcUMsbUNBQWE7SUFRakQseUJBQW9CLFdBQXdCLEVBQVMsTUFBb0IsRUFBVSxZQUE4QjtRQUFqSCxZQUNDLGlCQUFPLFNBUVA7UUFUbUIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFBUyxZQUFNLEdBQU4sTUFBTSxDQUFjO1FBQVUsa0JBQVksR0FBWixZQUFZLENBQWtCO1FBRWhILEtBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtZQUNqQyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtTQUNwQyxDQUFDO1FBQ0YsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQTtRQUN6QyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDO1FBQ3RHLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQzs7SUFDOUIsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO0lBQzFDLENBQUM7SUFFRCxvQ0FBVSxHQUFWLFVBQVcsTUFBVztRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFyQlE7UUFBUixZQUFLLEVBQUU7O3lEQUFzQjtJQUpsQixlQUFlO1FBTDNCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLHVCQUF1QjtTQUNwQyxDQUFDO3lDQVNnQywwQkFBVyxFQUFnQiw4QkFBYSxFQUF3Qix1Q0FBZ0I7T0FSckcsZUFBZSxDQTBCM0I7SUFBRCxzQkFBQztDQTFCRCxBQTBCQyxDQTFCb0MsOEJBQWEsR0EwQmpEO0FBMUJZLDBDQUFlIiwiZmlsZSI6ImFwcC9ob21lL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBUElTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBIb21lRXZlbnRNYW5hZ2VyIH0gZnJvbSAnLi4vaG9tZS1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4uL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IExhbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2xhbmcuc2VydmljZSc7XG5pbXBvcnQgeyBTZWxlY3RJdGVtIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29tcG9uZW50cy9iYXNlL2Jhc2UuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICduYXZiYXInLFxuXHR0ZW1wbGF0ZVVybDogJ25hdmJhci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHVzZXI6IFVzZXI7XG5cdGxhbmdzOiBTZWxlY3RJdGVtW107XG5cdEBJbnB1dCgpIHNlbGVjdGVkTGFuZzogc3RyaW5nO1xuXHRpc0FkbWluOiBib29sZWFuO1xuXHR2aWV3TW9kZTogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGxhbmdTZXJ2aWNlOiBMYW5nU2VydmljZSxwcml2YXRlIHBhcmVudDpIb21lQ29tcG9uZW50LCBwcml2YXRlIGV2ZW50TWFuYWdlcjogSG9tZUV2ZW50TWFuYWdlcikge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5sYW5ncyA9IFtcblx0XHRcdHsgbGFiZWw6ICdFbmdsaXNoJywgdmFsdWU6ICdnYicgfSxcblx0XHRcdHsgbGFiZWw6ICdWaWV0bmFtZXNlJywgdmFsdWU6ICd2bicgfVxuXHRcdF07XG5cdFx0dGhpcy5zZWxlY3RlZExhbmcgPSB0aGlzLmxhbmdTZXJ2aWNlLkxhbmdcblx0XHR0aGlzLmlzQWRtaW4gPSB0aGlzLmF1dGhTZXJ2aWNlLkN1cnJlbnRVc2VyLmlzX2FkbWluIHx8IHRoaXMuYXV0aFNlcnZpY2UuQ3VycmVudFVzZXIubG9naW4gPT0gJ2FkbWluJztcblx0XHR0aGlzLnZpZXdNb2RlID0gdGhpcy5pc0FkbWluO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy51c2VyID0gdGhpcy5hdXRoU2VydmljZS5DdXJyZW50VXNlcjtcblx0fVxuXG5cdHNlbGVjdExhbmcoJGV2ZW50OiBhbnkpIHtcblx0XHR0aGlzLmxhbmdTZXJ2aWNlLkxhbmcgPSAkZXZlbnQudmFsdWU7XG5cdH1cbn1cblxuXG4iXX0=
