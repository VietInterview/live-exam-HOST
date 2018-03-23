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
var http_1 = require("@angular/http");
var env_config_1 = require("../../env.config");
require("rxjs/add/operator/map");
var Rx_1 = require("rxjs/Rx");
var APIService = (function () {
    function APIService(http) {
        this.http = http;
    }
    APIService.prototype.cloudInfo = function (code) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(env_config_1.Config.CLOUD_ENDPOINT + '/cloud/account', JSON.stringify({ code: code }), options)
            .map(function (response) { return response.json(); });
    };
    APIService.prototype.login = function (username, password, cloudid, api_endpoint) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(api_endpoint + '/api/login', JSON.stringify({ username: username, password: password, cloudid: cloudid }), options)
            .map(function (response) { return response.json(); });
    };
    APIService.prototype.resetPass = function (email, cloudid, api_endpoint) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(api_endpoint + '/api/resetpass', JSON.stringify({ email: email, cloudid: cloudid }), options)
            .map(function (response) { return response.json(); });
    };
    APIService.prototype.changePass = function (user_id, old_pass, new_pass, cloudid, api_endpoint) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(api_endpoint + '/api/changepass', JSON.stringify({ user_id: user_id, old_pass: old_pass, new_pass: new_pass, cloudid: cloudid }), options)
            .map(function (response) { return response.json(); });
    };
    APIService.prototype.create = function (model, object, cloudid, api_endpoint) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(api_endpoint + '/api/create', JSON.stringify({ model: model, values: object, cloudid: cloudid }), options)
            .map(function (response) { return response.json(); });
    };
    APIService.prototype.update = function (model, id, object, cloudid, api_endpoint) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(api_endpoint + '/api/update', JSON.stringify({ model: model, values: object, id: id, cloudid: cloudid }), options)
            .map(function (response) { return response.json(); });
    };
    APIService.prototype.delete = function (model, id, cloudid, api_endpoint) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(api_endpoint + '/api/delete', JSON.stringify({ model: model, id: id, cloudid: cloudid }), options)
            .map(function (response) { return response.json(); });
    };
    APIService.prototype.search = function (model, fields, domain, cloudid, api_endpoint) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(api_endpoint + '/api/search_read', JSON.stringify({ model: model, fields: fields, domain: domain, cloudid: cloudid }), options)
            .map(function (response) { return response.json(); });
    };
    APIService.prototype.count = function (model, domain, cloudid, api_endpoint) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(api_endpoint + '/api/search_count', JSON.stringify({ model: model, domain: domain, cloudid: cloudid }), options)
            .map(function (response) { return response.json(); });
    };
    APIService.prototype.get = function (model, id, fields, cloudid, api_endpoint) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(api_endpoint + '/api/read', JSON.stringify({ model: model, fields: fields, ids: [id], cloudid: cloudid }), options)
            .map(function (response) { return response.json()[0]; });
    };
    APIService.prototype.list = function (model, ids, fields, cloudid, api_endpoint) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(api_endpoint + '/api/read', JSON.stringify({ model: model, fields: fields, ids: ids, cloudid: cloudid }), options)
            .map(function (response) { return response.json(); });
    };
    APIService.prototype.execute = function (model, method, paramList, paramdDict, cloudid, api_endpoint) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(api_endpoint + '/api/execute', JSON.stringify({ model: model, method: method, paramList: paramList, paramdDict: paramdDict, cloudid: cloudid }), options)
            .map(function (response) {
            return response.json();
        });
    };
    APIService.prototype.upload = function (file, cloudid) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('cloudid', cloudid.toString());
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(env_config_1.Config.CLOUD_ENDPOINT + "/cloud/file", formData, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error); });
    };
    APIService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], APIService);
    return APIService;
}());
exports.APIService = APIService;
