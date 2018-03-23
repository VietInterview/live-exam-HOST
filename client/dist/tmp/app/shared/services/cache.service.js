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
                return map_utils_1.MapUtils.deserialize(company_model_1.Company, JSON.parse(atob(localStorage.getItem('userCompany'))));
            else
                return new company_model_1.Company();
        },
        set: function (comp) {
            localStorage.setItem('userCompany', btoa(JSON.stringify(comp)));
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
