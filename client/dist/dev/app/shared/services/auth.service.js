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
var AuthService = (function () {
    function AuthService(apiService) {
        this.apiService = apiService;
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
    AuthService.prototype.login = function (info) {
        var _this = this;
        return this.apiService.login(info.username, info.password).map(function (user) {
            _this.CurrentUser = map_utils_1.MapUtils.deserialize(user_model_1.User, user);
            return _this.CurrentUser;
        });
    };
    AuthService.prototype.resetPass = function (email) {
        return this.apiService.resetPass(email);
    };
    AuthService.prototype.changePass = function (old_pass, new_pass) {
        return this.apiService.changePass(this.CurrentUser.id, old_pass, new_pass);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        if (!this.Remember)
            this.StoredCredential = new credential_model_1.Credential();
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [api_service_1.APIService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBRTNDLHNDQUFvQztBQUNwQywrREFBd0Q7QUFDeEQsbURBQTRDO0FBQzVDLGtEQUFnRDtBQUNoRCw2Q0FBMEM7QUFHMUM7SUFFSSxxQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUMxQyxDQUFDO0lBRUQsc0JBQUkseUNBQWdCO2FBQXBCO1lBQ0ksRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLG9CQUFRLENBQUMsV0FBVyxDQUFDLDZCQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRyxJQUFJO2dCQUNBLE1BQU0sQ0FBQyxJQUFJLDZCQUFVLEVBQUUsQ0FBQztRQUNoQyxDQUFDO2FBRUQsVUFBcUIsVUFBc0I7WUFDdkMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7OztPQUpBO0lBTUQsc0JBQUksb0NBQVc7YUFBZjtZQUNJLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3BDLE1BQU0sQ0FBQyxvQkFBUSxDQUFDLFdBQVcsQ0FBQyxpQkFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0YsSUFBSTtnQkFDQSxNQUFNLENBQUMsSUFBSSxpQkFBSSxFQUFFLENBQUM7UUFDMUIsQ0FBQzthQUVELFVBQWdCLElBQVU7WUFDdEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7OztPQUpBO0lBTUQsc0JBQUksaUNBQVE7YUFBWjtZQUNJLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2pDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFFLE1BQU0sQ0FBQztZQUNwRCxJQUFJO2dCQUNBLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDckIsQ0FBQzthQUVELFVBQWEsR0FBWTtZQUNyQixZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNyRCxDQUFDOzs7T0FKQTtJQU1ELG9DQUFjLEdBQWQsVUFBZSxJQUFnQixFQUFFLFFBQWlCO1FBQzlDLElBQUksQ0FBQyxnQkFBZ0IsR0FBSSxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxJQUFnQjtRQUF0QixpQkFLQztRQUpHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQy9ELEtBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQVEsQ0FBQyxXQUFXLENBQUMsaUJBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwRCxNQUFNLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsS0FBYTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBVyxRQUFnQixFQUFFLFFBQWdCO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDSSxZQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNmLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLDZCQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBOURRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FHdUIsd0JBQVU7T0FGakMsV0FBVyxDQWtFdkI7SUFBRCxrQkFBQztDQWxFRCxBQWtFQyxJQUFBO0FBbEVZLGtDQUFXIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcCc7XG5pbXBvcnQgeyBDcmVkZW50aWFsIH0gZnJvbSAnLi4vbW9kZWxzL2NyZWRlbnRpYWwubW9kZWwnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVscy91c2VyLm1vZGVsJztcbmltcG9ydCB7IE1hcFV0aWxzIH0gZnJvbSAnLi4vaGVscGVycy9tYXAudXRpbHMnO1xuaW1wb3J0IHsgQVBJU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFQSVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBnZXQgU3RvcmVkQ3JlZGVudGlhbCgpOiBDcmVkZW50aWFsIHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjcmVkZW50aWFsJykpXG4gICAgICAgICAgICByZXR1cm4gTWFwVXRpbHMuZGVzZXJpYWxpemUoQ3JlZGVudGlhbCwgSlNPTi5wYXJzZShhdG9iKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjcmVkZW50aWFsJykpKSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3JlZGVudGlhbCgpO1xuICAgIH1cblxuICAgIHNldCBTdG9yZWRDcmVkZW50aWFsKGNyZWRlbnRpYWw6IENyZWRlbnRpYWwpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NyZWRlbnRpYWwnLCBidG9hKEpTT04uc3RyaW5naWZ5KGNyZWRlbnRpYWwpKSk7XG4gICAgfVxuXG4gICAgZ2V0IEN1cnJlbnRVc2VyKCk6IFVzZXIge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRVc2VyJykpXG4gICAgICAgICAgICByZXR1cm4gTWFwVXRpbHMuZGVzZXJpYWxpemUoVXNlciwgSlNPTi5wYXJzZShhdG9iKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VXNlcicpKSkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gbmV3IFVzZXIoKTtcbiAgICB9XG5cbiAgICBzZXQgQ3VycmVudFVzZXIodXNlcjogVXNlcikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFVzZXInLCBidG9hKEpTT04uc3RyaW5naWZ5KHVzZXIpKSk7XG4gICAgfVxuXG4gICAgZ2V0IFJlbWVtYmVyKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlbWVtYmVyJykpXG4gICAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlbWVtYmVyJyk9PSd0cnVlJztcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHNldCBSZW1lbWJlcih2YWw6IGJvb2xlYW4pIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlbWVtYmVyJywgdmFsLnRvU3RyaW5nKCkpO1xuICAgIH1cblxuICAgIHNhdmVDcmVkZW50aWFsKGluZm86IENyZWRlbnRpYWwsIHJlbWVtYmVyOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuU3RvcmVkQ3JlZGVudGlhbCA9ICBpbmZvO1xuICAgICAgICB0aGlzLlJlbWVtYmVyID0gcmVtZW1iZXI7XG4gICAgfVxuXG4gICAgbG9naW4oaW5mbzogQ3JlZGVudGlhbCk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmxvZ2luKGluZm8udXNlcm5hbWUsIGluZm8ucGFzc3dvcmQpLm1hcCh1c2VyID0+IHtcbiAgICAgICAgICAgIHRoaXMuQ3VycmVudFVzZXIgPSBNYXBVdGlscy5kZXNlcmlhbGl6ZShVc2VyLCB1c2VyKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkN1cnJlbnRVc2VyO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNldFBhc3MoZW1haWw6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwaVNlcnZpY2UucmVzZXRQYXNzKGVtYWlsKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VQYXNzKG9sZF9wYXNzOiBzdHJpbmcsIG5ld19wYXNzOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLmNoYW5nZVBhc3ModGhpcy5DdXJyZW50VXNlci5pZCwgb2xkX3Bhc3MsIG5ld19wYXNzKTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXJyZW50VXNlcicpO1xuICAgICAgICBpZiAoIXRoaXMuUmVtZW1iZXIpXG4gICAgICAgICAgICB0aGlzLlN0b3JlZENyZWRlbnRpYWwgPSBuZXcgQ3JlZGVudGlhbCgpO1xuICAgIH1cblxuXG5cbn1cbiJdfQ==
