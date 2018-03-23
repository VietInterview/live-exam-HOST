"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var map_utils_1 = require("../helpers/map.utils");
var Rx_1 = require("rxjs/Rx");
var decorator_1 = require("./decorator");
var _ = require("underscore");
var BaseModel = (function () {
    function BaseModel() {
        this.id = undefined;
        this.active = undefined;
        this.create_date = undefined;
        this.create_uid = undefined;
        this.create_uid__DESC__ = undefined;
        this.write_date = undefined;
        this.write_uid = undefined;
        this.write_uid__DESC__ = undefined;
    }
    Object.defineProperty(BaseModel, "Model", {
        get: function () {
            return Reflect.getMetadata(decorator_1.MODEL_METADATA_KEY, this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseModel.prototype, "Model", {
        get: function () {
            return Reflect.getMetadata(decorator_1.MODEL_METADATA_KEY, this.constructor);
        },
        enumerable: true,
        configurable: true
    });
    BaseModel.prototype.save = function (context) {
        var _this = this;
        var model = this.Model;
        var cloud_acc = context.authService.StoredCredential.cloud_account;
        if (!this.id)
            return context.apiService.create(model, map_utils_1.MapUtils.serialize(this), cloud_acc.id, cloud_acc.api_endpoint).map(function (data) {
                _this.id = data.id;
                return _this;
            });
        else
            return context.apiService.update(model, this.id, map_utils_1.MapUtils.serialize(this), cloud_acc.id, cloud_acc.api_endpoint);
    };
    BaseModel.prototype.delete = function (context) {
        var model = this.Model;
        var cloud_acc = context.authService.StoredCredential.cloud_account;
        return context.apiService.delete(model, this.id, cloud_acc.id, cloud_acc.api_endpoint);
    };
    BaseModel.get = function (context, id) {
        var model = this.Model;
        var cloud_acc = context.authService.StoredCredential.cloud_account;
        return context.apiService.get(model, id, [], cloud_acc.id, cloud_acc.api_endpoint).map(function (item) {
            return map_utils_1.MapUtils.deserializeModel(model, item);
        });
    };
    BaseModel.count = function (context, domain) {
        var domain = domain ? domain : "[]";
        var model = this.Model;
        var cloud_acc = context.authService.StoredCredential.cloud_account;
        return context.apiService.count(model, domain, cloud_acc.id, cloud_acc.api_endpoint);
    };
    BaseModel.search = function (context, fields, domain) {
        var model = this.Model;
        var cloud_acc = context.authService.StoredCredential.cloud_account;
        return context.apiService.search(model, fields, domain, cloud_acc.id, cloud_acc.api_endpoint).map(function (items) {
            return _.map(items, function (item) {
                return map_utils_1.MapUtils.deserializeModel(model, item);
            });
        });
    };
    BaseModel.all = function (context) {
        return this.search(context, [], '[]');
    };
    BaseModel.array = function (context, ids) {
        if (ids.length == 0)
            return Rx_1.Observable.of([]);
        var model = this.Model;
        var cloud_acc = context.authService.StoredCredential.cloud_account;
        return context.apiService.list(model, ids, [], cloud_acc.id, cloud_acc.api_endpoint).map(function (items) {
            return _.map(items, function (item) {
                return map_utils_1.MapUtils.deserializeModel(model, item);
            });
        });
        ;
    };
    BaseModel.allWithInactive = function (context) {
        var domain = "['|',('active','=',True),('active','=',False)]";
        return this.search(context, [], domain);
    };
    BaseModel.executeRemote = function (context, method, paramsList, paramsDict) {
        var model = this.Model;
        var cloud_acc = context.authService.StoredCredential.cloud_account;
        return context.apiService.execute(model, method, paramsList, paramsDict, cloud_acc.id, cloud_acc.api_endpoint);
    };
    return BaseModel;
}());
exports.BaseModel = BaseModel;
