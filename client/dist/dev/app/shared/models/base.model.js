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
        if (!this.id)
            return context.apiService.create(model, map_utils_1.MapUtils.serialize(this)).map(function (data) {
                _this.id = data.id;
                return _this;
            });
        else
            return context.apiService.update(model, this.id, map_utils_1.MapUtils.serialize(this));
    };
    BaseModel.prototype.delete = function (context) {
        var model = this.Model;
        return context.apiService.delete(model, this.id);
    };
    BaseModel.get = function (context, id) {
        var model = this.Model;
        return context.apiService.get(model, id, []).map(function (item) {
            return map_utils_1.MapUtils.deserializeModel(model, item);
        });
    };
    BaseModel.count = function (context, domain) {
        var domain = domain ? domain : "[]";
        var model = this.Model;
        return context.apiService.count(model, domain);
    };
    BaseModel.search = function (context, fields, domain) {
        var model = this.Model;
        return context.apiService.search(model, fields, domain).map(function (items) {
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
        return context.apiService.list(model, ids, []).map(function (items) {
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
        return context.apiService.execute(model, method, paramsList, paramsDict);
    };
    return BaseModel;
}());
exports.BaseModel = BaseModel;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWxzL2Jhc2UubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxrREFBaUQ7QUFDakQsOEJBQThDO0FBQzlDLHlDQUFnRTtBQUNoRSw4QkFBZ0M7QUFHaEM7SUFVSTtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUksU0FBUyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUksU0FBUyxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUksU0FBUyxDQUFDO1FBQzdCLElBQUksQ0FBQyxrQkFBa0IsR0FBSSxTQUFTLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBSSxTQUFTLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBSSxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixHQUFJLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsc0JBQVcsa0JBQUs7YUFBaEI7WUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyw4QkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RCxDQUFDOzs7T0FBQTtJQUVBLHNCQUFJLDRCQUFLO2FBQVQ7WUFDRyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyw4QkFBa0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckUsQ0FBQzs7O09BQUE7SUFFRCx3QkFBSSxHQUFKLFVBQUssT0FBa0I7UUFBdkIsaUJBU0M7UUFSQSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNaLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsb0JBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxJ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Q0FBQyxDQUFDO1FBQUEsQ0FBQztJQUNSLENBQUM7SUFFTSx5QkFBZSxHQUF0QixVQUF1QixPQUFrQjtRQUNyQyxJQUFJLE1BQU0sR0FBRyxnREFBZ0QsQ0FBQztRQUM5RCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFHTSx1QkFBYSxHQUFwQixVQUFxQixPQUFrQixFQUFFLE1BQWEsRUFBRSxVQUFvQixFQUFFLFVBQWU7UUFDekYsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVMLGdCQUFDO0FBQUQsQ0E5RkEsQUE4RkMsSUFBQTtBQTlGcUIsOEJBQVMiLCJmaWxlIjoiYXBwL3NoYXJlZC9tb2RlbHMvYmFzZS5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQVBJQ29udGV4dCB9IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQgeyBNYXBVdGlscyB9ICBmcm9tICcuLi9oZWxwZXJzL21hcC51dGlscyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBNT0RFTF9NRVRBREFUQV9LRVksIE1vZGVsUmVnaXN0ZXIgfSBmcm9tICcuL2RlY29yYXRvcic7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlTW9kZWwge1xuICAgIGlkXHRcdDpcdG51bWJlcjtcbiAgICBjcmVhdGVfZGF0ZTogc3RyaW5nO1xuICAgIGNyZWF0ZV91aWQ6IG51bWJlcjtcbiAgICBjcmVhdGVfdWlkX19ERVNDX186IHN0cmluZztcbiAgICB3cml0ZV9kYXRlOiBzdHJpbmc7XG4gICAgd3JpdGVfdWlkOiBudW1iZXI7XG4gICAgd3JpdGVfdWlkX19ERVNDX186IHN0cmluZztcbiAgICBhY3RpdmUgICAgOiAgICBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaWQgPSAgdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jcmVhdGVfZGF0ZSA9ICB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY3JlYXRlX3VpZCA9ICB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY3JlYXRlX3VpZF9fREVTQ19fID0gIHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy53cml0ZV9kYXRlID0gIHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy53cml0ZV91aWQgPSAgdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLndyaXRlX3VpZF9fREVTQ19fID0gIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IE1vZGVsKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0TWV0YWRhdGEoTU9ERUxfTUVUQURBVEFfS0VZLCB0aGlzKTtcbiAgICB9XG5cbiAgICAgZ2V0IE1vZGVsKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0TWV0YWRhdGEoTU9ERUxfTUVUQURBVEFfS0VZLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICBzYXZlKGNvbnRleHQ6QVBJQ29udGV4dCk6T2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBcdHZhciBtb2RlbCA9IHRoaXMuTW9kZWw7XG4gICAgXHRpZiAoIXRoaXMuaWQpXG4gICAgXHRcdHJldHVybiBjb250ZXh0LmFwaVNlcnZpY2UuY3JlYXRlKG1vZGVsLCBNYXBVdGlscy5zZXJpYWxpemUodGhpcykpLm1hcChkYXRhPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgXHRyZXR1cm4gY29udGV4dC5hcGlTZXJ2aWNlLnVwZGF0ZShtb2RlbCwgdGhpcy5pZCwgTWFwVXRpbHMuc2VyaWFsaXplKHRoaXMpKTtcbiAgICB9XG5cbiAgICBkZWxldGUoY29udGV4dDpBUElDb250ZXh0KTpPYnNlcnZhYmxlPGFueT4ge1xuICAgIFx0dmFyIG1vZGVsID0gdGhpcy5Nb2RlbDtcbiAgICBcdHJldHVybiBjb250ZXh0LmFwaVNlcnZpY2UuZGVsZXRlKG1vZGVsLCB0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0KGNvbnRleHQ6QVBJQ29udGV4dCxpZDpudW1iZXIpOk9ic2VydmFibGU8YW55PiB7XG4gICAgXHR2YXIgbW9kZWwgPSB0aGlzLk1vZGVsO1xuICAgIFx0cmV0dXJuIGNvbnRleHQuYXBpU2VydmljZS5nZXQobW9kZWwsIGlkLCBbXSkubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgIHJldHVybiAgIE1hcFV0aWxzLmRlc2VyaWFsaXplTW9kZWwobW9kZWwsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY291bnQoY29udGV4dDpBUElDb250ZXh0LCBkb21haW4/OnN0cmluZyk6T2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgICAgICB2YXIgZG9tYWluID0gZG9tYWluP2RvbWFpbjpcIltdXCI7XG4gICAgICAgIHZhciBtb2RlbCA9IHRoaXMuTW9kZWw7XG4gICAgICAgIHJldHVybiBjb250ZXh0LmFwaVNlcnZpY2UuY291bnQobW9kZWwsIGRvbWFpbik7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgc2VhcmNoKGNvbnRleHQ6QVBJQ29udGV4dCwgZmllbGRzOnN0cmluZ1tdLCBkb21haW46c3RyaW5nKTpPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgICAgIHZhciBtb2RlbCA9IHRoaXMuTW9kZWw7XG4gICAgICAgIHJldHVybiBjb250ZXh0LmFwaVNlcnZpY2Uuc2VhcmNoKG1vZGVsLCBmaWVsZHMsIGRvbWFpbikubWFwKGl0ZW1zID0+IHtcbiAgICAgICAgICAgIHJldHVybiBfLm1hcChpdGVtcywgKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgcmV0dXJuICBNYXBVdGlscy5kZXNlcmlhbGl6ZU1vZGVsKG1vZGVsLCBpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWxsKCBjb250ZXh0OkFQSUNvbnRleHQpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaChjb250ZXh0LFtdLCdbXScpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhcnJheShjb250ZXh0OkFQSUNvbnRleHQsaWRzOiBudW1iZXJbXSk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICAgICAgaWYgKGlkcy5sZW5ndGggPT0gMClcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKFtdKTtcbiAgICAgICAgdmFyIG1vZGVsID0gdGhpcy5Nb2RlbDtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuYXBpU2VydmljZS5saXN0KG1vZGVsLGlkcyxbXSkubWFwKGl0ZW1zID0+IHtcbiAgICAgICAgICAgIHJldHVybiBfLm1hcChpdGVtcywgKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgcmV0dXJuICBNYXBVdGlscy5kZXNlcmlhbGl6ZU1vZGVsKG1vZGVsLCBpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTs7XG4gICAgfVxuXG4gICAgc3RhdGljIGFsbFdpdGhJbmFjdGl2ZShjb250ZXh0OkFQSUNvbnRleHQpOk9ic2VydmFibGU8YW55W10+IHtcbiAgICAgICAgdmFyIGRvbWFpbiA9IFwiWyd8JywoJ2FjdGl2ZScsJz0nLFRydWUpLCgnYWN0aXZlJywnPScsRmFsc2UpXVwiO1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2goY29udGV4dCxbXSwgZG9tYWluKTtcbiAgICB9XG5cblxuICAgIHN0YXRpYyBleGVjdXRlUmVtb3RlKGNvbnRleHQ6QVBJQ29udGV4dCwgbWV0aG9kOnN0cmluZywgcGFyYW1zTGlzdDogc3RyaW5nW10sIHBhcmFtc0RpY3Q6IGFueSk6T2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgdmFyIG1vZGVsID0gdGhpcy5Nb2RlbDtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuYXBpU2VydmljZS5leGVjdXRlKG1vZGVsLCBtZXRob2QsIHBhcmFtc0xpc3QsIHBhcmFtc0RpY3QpO1xuICAgIH1cblxufVxuIl19
