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
var env_config_1 = require("./env.config");
require("./operators");
var lang_service_1 = require("./shared/services/lang.service");
var AppComponent = (function () {
    function AppComponent(langService) {
        this.langService = langService;
        langService.initSetting();
        console.log('Environment config', env_config_1.Config);
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'live-exam-app',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [lang_service_1.LangService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLDJDQUFzQztBQUN0Qyx1QkFBcUI7QUFDckIsK0RBQTZEO0FBUzdEO0lBRUMsc0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQzNDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLG1CQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBTFcsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxpQ0FBaUM7U0FDM0MsQ0FBQzt5Q0FHZ0MsMEJBQVc7T0FGaEMsWUFBWSxDQVF4QjtJQUFELG1CQUFDO0NBUkQsQUFRQyxJQUFBO0FBUlksb0NBQVkiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vZW52LmNvbmZpZyc7XG5pbXBvcnQgJy4vb3BlcmF0b3JzJztcbmltcG9ydCB7IExhbmdTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvc2VydmljZXMvbGFuZy5zZXJ2aWNlJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC9jb21wb25lbnRzL2Jhc2UvYmFzZS5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ2xpdmUtZXhhbS1hcHAnLFxuXHR0ZW1wbGF0ZTogYDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5gXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBsYW5nU2VydmljZTogTGFuZ1NlcnZpY2UpIHtcblx0XHRsYW5nU2VydmljZS5pbml0U2V0dGluZygpO1xuXHRcdGNvbnNvbGUubG9nKCdFbnZpcm9ubWVudCBjb25maWcnLCBDb25maWcpO1xuXHR9XG5cblxufVxuIl19
