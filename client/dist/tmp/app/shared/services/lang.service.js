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
