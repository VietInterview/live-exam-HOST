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
var credential_model_1 = require("../models/credential.model");
var user_model_1 = require("../models/user.model");
var map_utils_1 = require("../helpers/map.utils");
var api_service_1 = require("./api.service");
var setting_service_1 = require("./setting.service");
var AuthService = (function () {
    function AuthService(apiService, settingService) {
        this.apiService = apiService;
        this.settingService = settingService;
    }
    Object.defineProperty(AuthService.prototype, "StoredCredential", {
        get: function () {
            if (localStorage.getItem('credential'))
                return map_utils_1.MapUtils.deserialize(credential_model_1.Credential, JSON.parse(atob(localStorage.getItem('credential'))));
            else
                return new credential_model_1.Credential();
        },
        set: function (credential) {
            localStorage.setItem('credential', btoa(JSON.stringify(credential)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "CurrentUser", {
        get: function () {
            if (localStorage.getItem('currentUser'))
                return map_utils_1.MapUtils.deserialize(user_model_1.User, JSON.parse(atob(localStorage.getItem('currentUser'))));
            else
                return new user_model_1.User();
        },
        set: function (user) {
            localStorage.setItem('currentUser', btoa(JSON.stringify(user)));
            if (user.is_admin || user.login == 'admin')
                this.settingService.setAdminMode(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "Remember", {
        get: function () {
            if (localStorage.getItem('remember'))
                return localStorage.getItem('remember') == 'true';
            else
                return false;
        },
        set: function (val) {
            localStorage.setItem('remember', val.toString());
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.saveCredential = function (info, remember) {
        this.StoredCredential = info;
        this.Remember = remember;
    };
    AuthService.prototype.login = function (info, code) {
        var _this = this;
        return this.apiService.cloudInfo(code).mergeMap(function (acc) {
            info.cloud_account = acc;
            return _this.apiService.login(info.username, info.password, info.cloud_account.id, info.cloud_account.api_endpoint).map(function (user) {
                _this.CurrentUser = map_utils_1.MapUtils.deserialize(user_model_1.User, user);
                return _this.CurrentUser;
            });
        });
    };
    AuthService.prototype.resetPass = function (email, code) {
        var _this = this;
        return this.apiService.cloudInfo(code).flatMap(function (acc) {
            return _this.apiService.resetPass(email, acc.id, acc.api_endpoint);
        });
    };
    AuthService.prototype.changePass = function (old_pass, new_pass) {
        var cloud_acc = this.StoredCredential.cloud_account;
        return this.apiService.changePass(this.CurrentUser.id, old_pass, new_pass, cloud_acc.id, cloud_acc.api_endpoint);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        if (!this.Remember)
            this.StoredCredential = new credential_model_1.Credential();
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [api_service_1.APIService, setting_service_1.SettingService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
