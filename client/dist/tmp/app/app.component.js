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
            selector: 'etraining-app',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [lang_service_1.LangService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
