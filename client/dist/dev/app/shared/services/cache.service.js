"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/mergeMap");
var company_model_1 = require("../models/company.model");
var map_utils_1 = require("../helpers/map.utils");
var CacheService = (function () {
    function CacheService() {
    }
    Object.defineProperty(CacheService.prototype, "UserCompany", {
        get: function () {
            if (localStorage.getItem('userCompany'))
                return map_utils_1.MapUtils.deserialize(company_model_1.Company, JSON.parse(decodeURIComponent(escape(atob(localStorage.getItem('userCompany'))))));
            else
                return new company_model_1.Company();
        },
        set: function (comp) {
            localStorage.setItem('userCompany', btoa(unescape(encodeURIComponent(JSON.stringify(comp)))));
        },
        enumerable: true,
        configurable: true
    });
    CacheService = __decorate([
        core_1.Injectable()
    ], CacheService);
    return CacheService;
}());
exports.CacheService = CacheService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvY2FjaGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUEyQztBQUUzQyxzQ0FBb0M7QUFFcEMseURBQWtEO0FBQ2xELGtEQUFnRDtBQUtoRDtJQUFBO0lBaUJBLENBQUM7SUFkQSxzQkFBSSxxQ0FBVzthQUlmO1lBQ0UsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDakMsTUFBTSxDQUFDLG9CQUFRLENBQUMsV0FBVyxDQUFDLHVCQUFPLEVBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RixJQUFJO2dCQUNBLE1BQU0sQ0FBQyxJQUFJLHVCQUFPLEVBQUUsQ0FBQztRQUM5QixDQUFDO2FBVkQsVUFBZ0IsSUFBYTtZQUN6QixZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRyxDQUFDOzs7T0FBQTtJQUxXLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTtPQUNBLFlBQVksQ0FpQnhCO0lBQUQsbUJBQUM7Q0FqQkQsQUFpQkMsSUFBQTtBQWpCWSxvQ0FBWSIsImZpbGUiOiJhcHAvc2hhcmVkL3NlcnZpY2VzL2NhY2hlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwJztcbmltcG9ydCB7IENyZWRlbnRpYWwgfSBmcm9tICcuLi9tb2RlbHMvY3JlZGVudGlhbC5tb2RlbCc7XG5pbXBvcnQgeyBDb21wYW55IH0gZnJvbSAnLi4vbW9kZWxzL2NvbXBhbnkubW9kZWwnO1xuaW1wb3J0IHsgTWFwVXRpbHMgfSBmcm9tICcuLi9oZWxwZXJzL21hcC51dGlscyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJ1xuaW1wb3J0IHsgQVBJU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYWNoZVNlcnZpY2Uge1xuXG5cblx0c2V0IFVzZXJDb21wYW55KGNvbXA6IENvbXBhbnkpIHtcblx0ICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyQ29tcGFueScsIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNvbXApKSkpKTtcblx0fVxuXG5cdGdldCBVc2VyQ29tcGFueSgpOkNvbXBhbnkge1xuXHRcdCBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJDb21wYW55JykpXG5cdFx0ICAgICAgICByZXR1cm4gTWFwVXRpbHMuZGVzZXJpYWxpemUoQ29tcGFueSwgXG5cdFx0ICAgICAgICBcdEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZShhdG9iKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyQ29tcGFueScpKSkpKSk7XG5cdFx0ICAgIGVsc2Vcblx0XHQgICAgICAgIHJldHVybiBuZXcgQ29tcGFueSgpO1xuXHR9XG5cblxuXG59XG4iXX0=
