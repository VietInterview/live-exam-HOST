"use strict";
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
require("rxjs/add/operator/mergeMap");
var core_2 = require("@ngx-translate/core");
var LangService = (function () {
    function LangService(translationService) {
        this.translationService = translationService;
    }
    LangService.prototype.initSetting = function () {
        this.translationService.setDefaultLang('vn');
        var defaultLang = localStorage.getItem('language') ? localStorage.getItem('language') : 'vn';
        this.translationService.use(defaultLang);
    };
    Object.defineProperty(LangService.prototype, "Lang", {
        get: function () {
            return localStorage.getItem('language') ? localStorage.getItem('language') : 'vi';
        },
        set: function (lang) {
            localStorage.setItem('language', lang);
            this.translationService.use(lang);
        },
        enumerable: true,
        configurable: true
    });
    LangService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_2.TranslateService])
    ], LangService);
    return LangService;
}());
exports.LangService = LangService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvbGFuZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBRTNDLHNDQUFvQztBQUtwQyw0Q0FBdUQ7QUFJdkQ7SUFFSSxxQkFBb0Isa0JBQW9DO1FBQXBDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBa0I7SUFDeEQsQ0FBQztJQUVELGlDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksV0FBVyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQztRQUMxRixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxzQkFBSSw2QkFBSTthQUtUO1lBQ0ksTUFBTSxDQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQztRQUNwRixDQUFDO2FBUEEsVUFBUyxJQUFZO1lBQ2pCLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFkUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBRytCLHVCQUFnQjtPQUYvQyxXQUFXLENBc0J2QjtJQUFELGtCQUFDO0NBdEJELEFBc0JDLElBQUE7QUF0Qlksa0NBQVciLCJmaWxlIjoiYXBwL3NoYXJlZC9zZXJ2aWNlcy9sYW5nLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwJztcbmltcG9ydCB7IENyZWRlbnRpYWwgfSBmcm9tICcuLi9tb2RlbHMvY3JlZGVudGlhbC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgTWFwVXRpbHMgfSBmcm9tICcuLi9oZWxwZXJzL21hcC51dGlscyc7XG5pbXBvcnQgeyBBUElTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSdcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGFuZ1NlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBpbml0U2V0dGluZygpIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvblNlcnZpY2Uuc2V0RGVmYXVsdExhbmcoJ3ZuJyk7XG4gICAgICAgIHZhciBkZWZhdWx0TGFuZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5ndWFnZScpPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ3VhZ2UnKTondm4nO1xuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS51c2UoZGVmYXVsdExhbmcpO1xuICAgIH1cblxuICAgIHNldCBMYW5nKGxhbmc6IHN0cmluZykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZ3VhZ2UnLCBsYW5nKTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvblNlcnZpY2UudXNlKGxhbmcpO1xuICAgIH1cblxuICAgZ2V0IExhbmcoKTpzdHJpbmcge1xuICAgICAgIHJldHVybiAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmd1YWdlJyk/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5ndWFnZScpOid2aSc7XG4gICB9XG5cblxuXG59XG4iXX0=
