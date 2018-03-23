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
    APIService.prototype.login = function (username, password) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(env_config_1.Config.API_ENDPOINT + '/login', JSON.stringify({ username: username, password: password }), options)
            .map(function (response) { return response.json(); });
    };
    APIService.prototype.resetPass = function (email) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(env_config_1.Config.API_ENDPOINT + '/resetpass', JSON.stringify({ email: email }), options)
            .map(function (response) { return response.json(); });
    };
    APIService.prototype.changePass = function (user_id, old_pass, new_pass) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(env_config_1.Config.API_ENDPOINT + '/changepass', JSON.stringify({ user_id: user_id, old_pass: old_pass, new_pass: new_pass }), options)
            .map(function (response) { return response.json(); });
    };
    APIService.prototype.create = function (model, object) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(env_config_1.Config.API_ENDPOINT + '/create', JSON.stringify({ model: model, values: object }), options)
            .map(function (response) { return response.json(); });
    };
    APIService.prototype.update = function (model, id, object) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(env_config_1.Config.API_ENDPOINT + '/update', JSON.stringify({ model: model, values: object, id: id }), options)
            .map(function (response) { return response.json(); });
    };
    APIService.prototype.delete = function (model, id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(env_config_1.Config.API_ENDPOINT + '/delete', JSON.stringify({ model: model, id: id }), options)
            .map(function (response) { return response.json(); });
    };
    APIService.prototype.search = function (model, fields, domain, cloudid, api_endpoint) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(env_config_1.Config.API_ENDPOINT + '/search_read', JSON.stringify({ model: model, fields: fields, domain: domain }), options)
            .map(function (response) { return response.json(); });
    };
    APIService.prototype.count = function (model, domain, cloudid, api_endpoint) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(env_config_1.Config.API_ENDPOINT + '/search_count', JSON.stringify({ model: model, domain: domain }), options)
            .map(function (response) { return response.json(); });
    };
    APIService.prototype.get = function (model, id, fields) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(env_config_1.Config.API_ENDPOINT + '/read', JSON.stringify({ model: model, fields: fields, ids: [id] }), options)
            .map(function (response) { return response.json()[0]; });
    };
    APIService.prototype.list = function (model, ids, fields) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(env_config_1.Config.API_ENDPOINT + '/read', JSON.stringify({ model: model, fields: fields, ids: ids }), options)
            .map(function (response) { return response.json(); });
    };
    APIService.prototype.execute = function (model, method, paramList, paramdDict) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(env_config_1.Config.API_ENDPOINT + '/execute', JSON.stringify({ model: model, method: method, paramList: paramList, paramdDict: paramdDict }), options)
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
        return this.http.post(env_config_1.Config.API_ENDPOINT + "/file", formData, options)
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdFO0FBQ3hFLCtDQUEwQztBQUMxQyxpQ0FBK0I7QUFDL0IsOEJBQThDO0FBRzlDO0lBQ0ksb0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUksQ0FBQztJQUVuQywwQkFBSyxHQUFMLFVBQU0sUUFBZ0IsRUFBRSxRQUFnQjtRQUNwQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFDbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFNLENBQUMsWUFBWSxHQUFHLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUM7YUFDckgsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBSyxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsOEJBQVMsR0FBVCxVQUFVLEtBQWE7UUFDbkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBTSxDQUFDLFlBQVksR0FBRyxZQUFZLEVBQUUs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QVMsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMvQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBRzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDN0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLG1CQUFNLENBQUMsWUFBWSxVQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQzthQUNsRSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBOUZRLFVBQVU7UUFEdEIsaUJBQVUsRUFBRTt5Q0FFaUIsV0FBSTtPQURyQixVQUFVLENBK0Z0QjtJQUFELGlCQUFDO0NBL0ZELEFBK0ZDLElBQUE7QUEvRlksZ0NBQVUiLCJmaWxlIjoiYXBwL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vZW52LmNvbmZpZyc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBUElTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gICAgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6T2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KENvbmZpZy5BUElfRU5EUE9JTlQgKyAnL2xvZ2luJywgSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZCB9KSwgb3B0aW9ucylcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICB9XG5cbiAgICByZXNldFBhc3MoZW1haWw6IHN0cmluZyk6T2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KENvbmZpZy5BUElfRU5EUE9JTlQgKyAnL3Jlc2V0cGFzcycsIEpTT04uc3RyaW5naWZ5KHsgZW1haWw6IGVtYWlsIH0pLCBvcHRpb25zKVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuICAgIH1cblxuICAgIGNoYW5nZVBhc3ModXNlcl9pZDogbnVtYmVyLCBvbGRfcGFzczogc3RyaW5nLCBuZXdfcGFzczpzdHJpbmcpOk9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChDb25maWcuQVBJX0VORFBPSU5UICsgJy9jaGFuZ2VwYXNzJywgSlNPTi5zdHJpbmdpZnkoeyB1c2VyX2lkOiB1c2VyX2lkLCBvbGRfcGFzczogb2xkX3Bhc3MsIG5ld19wYXNzOiBuZXdfcGFzcyB9KSwgb3B0aW9ucylcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICB9XG5cbiAgICBjcmVhdGUobW9kZWw6c3RyaW5nLCBvYmplY3Q6YW55KTpPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoQ29uZmlnLkFQSV9FTkRQT0lOVCArICcvY3JlYXRlJywgSlNPTi5zdHJpbmdpZnkoeyBtb2RlbDogbW9kZWwsIHZhbHVlczpvYmplY3QgIH0pLCBvcHRpb25zKVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuICAgIH1cblxuICAgIHVwZGF0ZShtb2RlbDpzdHJpbmcsIGlkOm51bWJlciwgb2JqZWN0OmFueSk6T2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KENvbmZpZy5BUElfRU5EUE9JTlQgKyAnL3VwZGF0ZScsIEpTT04uc3RyaW5naWZ5KHsgbW9kZWw6IG1vZGVsLCB2YWx1ZXM6b2JqZWN0LCBpZDppZCAgfSksIG9wdGlvbnMpXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlKG1vZGVsOnN0cmluZywgaWQ6bnVtYmVyKTpPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoQ29uZmlnLkFQSV9FTkRQT0lOVCArICcvZGVsZXRlJywgSlNPTi5zdHJpbmdpZnkoeyBtb2RlbDogbW9kZWwsIGlkOmlkICB9KSwgb3B0aW9ucylcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICB9XG5cbiAgICBzZWFyY2gobW9kZWw6c3RyaW5nLCBmaWVsZHM6c3RyaW5nW10sIGRvbWFpbjpzdHJpbmcsY2xvdWRpZDpudW1iZXIsIGFwaV9lbmRwb2ludDpzdHJpbmcpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChDb25maWcuQVBJX0VORFBPSU5UICsgJy9zZWFyY2hfcmVhZCcsIEpTT04uc3RyaW5naWZ5KHsgbW9kZWw6IG1vZGVsLGZpZWxkczpmaWVsZHMsIGRvbWFpbjogZG9tYWluICB9KSwgb3B0aW9ucylcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICB9XG5cbiAgICBjb3VudChtb2RlbDpzdHJpbmcsIGRvbWFpbjpzdHJpbmcsY2xvdWRpZDpudW1iZXIsIGFwaV9lbmRwb2ludDpzdHJpbmcpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChDb25maWcuQVBJX0VORFBPSU5UICsgJy9zZWFyY2hfY291bnQnLCBKU09OLnN0cmluZ2lmeSh7IG1vZGVsOiBtb2RlbCwgZG9tYWluOiBkb21haW4gIH0pLCBvcHRpb25zKVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuICAgIH1cblxuICAgIGdldChtb2RlbDpzdHJpbmcsIGlkOm51bWJlciwgZmllbGRzOnN0cmluZ1tdKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KENvbmZpZy5BUElfRU5EUE9JTlQgKyAnL3JlYWQnLCBKU09OLnN0cmluZ2lmeSh7IG1vZGVsOiBtb2RlbCxmaWVsZHM6ZmllbGRzLCBpZHM6W2lkXSAgfSksIG9wdGlvbnMpXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKVswXSk7XG4gICAgfVxuXG4gICAgbGlzdChtb2RlbDpzdHJpbmcsIGlkczpudW1iZXJbXSwgZmllbGRzOnN0cmluZ1tdKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KENvbmZpZy5BUElfRU5EUE9JTlQgKyAnL3JlYWQnLCBKU09OLnN0cmluZ2lmeSh7IG1vZGVsOiBtb2RlbCxmaWVsZHM6ZmllbGRzLCBpZHM6aWRzICB9KSwgb3B0aW9ucylcbiAgICAgICAgICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICB9XG5cbiAgICBleGVjdXRlKG1vZGVsOnN0cmluZywgbWV0aG9kIDpzdHJpbmcsIHBhcmFtTGlzdDogc3RyaW5nW10sIHBhcmFtZERpY3Q6IGFueSApOk9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChDb25maWcuQVBJX0VORFBPSU5UICsgJy9leGVjdXRlJywgSlNPTi5zdHJpbmdpZnkoeyBtb2RlbDogbW9kZWwsIG1ldGhvZDogbWV0aG9kLCBwYXJhbUxpc3Q6IHBhcmFtTGlzdCwgcGFyYW1kRGljdDogcGFyYW1kRGljdCAgfSksIG9wdGlvbnMpXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBsb2FkKGZpbGU6IGFueSwgY2xvdWRpZDogbnVtYmVyKTpPYnNlcnZhYmxlPGFueT57XG4gICAgICAgIGxldCBmb3JtRGF0YTpGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlLm5hbWUpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2Nsb3VkaWQnLCBjbG91ZGlkLnRvU3RyaW5nKCkpO1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIC8qKiBObyBuZWVkIHRvIGluY2x1ZGUgQ29udGVudC1UeXBlIGluIEFuZ3VsYXIgNCAqL1xuICAgICAgIC8vIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7Q29uZmlnLkFQSV9FTkRQT0lOVH0vZmlsZWAsIGZvcm1EYXRhLCBvcHRpb25zKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XG4gICAgfVxufVxuIl19
