"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var decorator_1 = require("./decorator");
var base_model_1 = require("./base.model");
var User = (function (_super) {
    __extends(User, _super);
    function User() {
        var _this = _super.call(this) || this;
        _this.image = undefined;
        _this.display_name = undefined;
        _this.name = undefined;
        _this.email = undefined;
        _this.class_id = undefined;
        _this.class_id__DESC__ = undefined;
        _this.login = undefined;
        _this.phone = undefined;
        _this.is_admin = undefined;
        _this.banned = undefined;
        _this.role = undefined;
        return _this;
    }
    User_1 = User;
    User.countAll = function (context) {
        return User_1.count(context, "[('login','!=','admin')]");
    };
    User.countAdmin = function (context) {
        return User_1.count(context, "[('is_admin','=',True)]");
    };
    User.countStudent = function (context) {
        return User_1.count(context, "[('role','=','student')]");
    };
    User.countTeacher = function (context) {
        return User_1.count(context, "[('role','=','teacher')]");
    };
    User.listAdmin = function (context) {
        return User_1.search(context, [], "[('is_admin','=',True)]");
    };
    User.listStudent = function (context) {
        return User_1.search(context, [], "[('role','=','student')]");
    };
    User.listTeacher = function (context) {
        return User_1.search(context, [], "[('role','=','teacher')]");
    };
    User.listByClass = function (context, classId) {
        return User_1.search(context, [], "[('class_id','='," + classId + ")]");
    };
    User = User_1 = __decorate([
        decorator_1.Model('res.users'),
        __metadata("design:paramtypes", [])
    ], User);
    return User;
    var User_1;
}(base_model_1.BaseModel));
exports.User = User;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWxzL3VzZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEseUNBQW9DO0FBRXBDLDJDQUF5QztBQUt6QztJQUEwQix3QkFBUztJQUcvQjtRQUFBLFlBQ0ksaUJBQU8sU0FhYjtRQVhBLEtBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLEtBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQzVCLEtBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQzFCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7UUFDeEMsS0FBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDakIsS0FBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDdkIsS0FBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDMUIsS0FBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDOUIsS0FBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7O0lBQ3ZCLENBQUM7YUFqQlcsSUFBSTtJQStCTixhQUFRLEdBQWYsVUFBaUIsT0FBa0I7UUFDL0IsTUFBTSxDQUFDLE1BQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLGVBQVUsR0FBakIsVUFBa0IsT0FBa0I7UUFDaEMsTUFBTSxDQUFDLE1BQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLHlCQUF5QixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLGlCQUFZLEdBQW5CLFVBQW9CLE9BQWtCO1FBQ2xDLE1BQU0sQ0FBQyxNQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFTSxpQkFBWSxHQUFuQixVQUFvQixPQUFrQjtRQUNsQyxNQUFNLENBQUMsTUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU0sY0FBUyxHQUFoQixVQUFpQixPQUFrQjtRQUMvQixNQUFNLENBQUMsTUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVNLGdCQUFXLEdBQWxCLFVBQW1CLE9BQWtCO1FBQ2pDLE1BQU0sQ0FBQyxNQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU0sZ0JBQVcsR0FBbEIsVUFBbUIsT0FBa0I7UUFDakMsTUFBTSxDQUFDLE1BQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSxnQkFBVyxHQUFsQixVQUFtQixPQUFrQixFQUFFLE9BQU87UUFDMUMsTUFBTSxDQUFDLE1BQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQUUsRUFBRSxtQkFBbUIsR0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQTdEUSxJQUFJO1FBRGhCLGlCQUFLLENBQUMsV0FBVyxDQUFDOztPQUNOLElBQUksQ0ErRGhCO0lBQUQsV0FBQzs7Q0EvREQsQUErREMsQ0EvRHlCLHNCQUFTLEdBK0RsQztBQS9EWSxvQkFBSSIsImZpbGUiOiJhcHAvc2hhcmVkL21vZGVscy91c2VyLm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vZGVjb3JhdG9yJztcbmltcG9ydCB7IEFQSUNvbnRleHQgfSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi9iYXNlLm1vZGVsJztcbmltcG9ydCB7IENvbXBhbnkgfSBmcm9tICcuL2NvbXBhbnkubW9kZWwnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuQE1vZGVsKCdyZXMudXNlcnMnKVxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBCYXNlTW9kZWx7XG5cbiAgICAvLyBEZWZhdWx0IGNvbnN0cnVjdG9yIHdpbGwgYmUgY2FsbGVkIGJ5IG1hcHBlclxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG5cdFx0XG5cdFx0dGhpcy5pbWFnZSA9IHVuZGVmaW5lZDtcblx0XHR0aGlzLmRpc3BsYXlfbmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xuXHRcdHRoaXMuZW1haWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY2xhc3NfaWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY2xhc3NfaWRfX0RFU0NfXyA9IHVuZGVmaW5lZDtcblx0XHR0aGlzLmxvZ2luID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnBob25lID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmlzX2FkbWluID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmJhbm5lZCA9IHVuZGVmaW5lZDtcblx0XHR0aGlzLnJvbGUgPSB1bmRlZmluZWQ7XG5cdH1cblxuICAgIGltYWdlOnN0cmluZztcbiAgICBuYW1lOnN0cmluZztcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIGNsYXNzX2lkOiBudW1iZXI7XG4gICAgY2xhc3NfaWRfX0RFU0NfXzogc3RyaW5nO1xuICAgIGxvZ2luOiBzdHJpbmc7XG4gICAgcGhvbmU6IHN0cmluZztcbiAgICBpc19hZG1pbjogYm9vbGVhbjtcbiAgICBiYW5uZWQ6IGJvb2xlYW47XG4gICAgZGlzcGxheV9uYW1lOiBzdHJpbmc7XG4gICAgcm9sZTogc3RyaW5nO1xuXG4gICAgc3RhdGljIGNvdW50QWxsKCBjb250ZXh0OkFQSUNvbnRleHQpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgICAgIHJldHVybiBVc2VyLmNvdW50KGNvbnRleHQsXCJbKCdsb2dpbicsJyE9JywnYWRtaW4nKV1cIik7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvdW50QWRtaW4oY29udGV4dDpBUElDb250ZXh0KTpPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gVXNlci5jb3VudChjb250ZXh0LCBcIlsoJ2lzX2FkbWluJywnPScsVHJ1ZSldXCIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb3VudFN0dWRlbnQoY29udGV4dDpBUElDb250ZXh0KTpPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gVXNlci5jb3VudChjb250ZXh0LCBcIlsoJ3JvbGUnLCc9Jywnc3R1ZGVudCcpXVwiKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY291bnRUZWFjaGVyKGNvbnRleHQ6QVBJQ29udGV4dCk6T2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIFVzZXIuY291bnQoY29udGV4dCwgXCJbKCdyb2xlJywnPScsJ3RlYWNoZXInKV1cIik7XG4gICAgfVxuXG4gICAgc3RhdGljIGxpc3RBZG1pbihjb250ZXh0OkFQSUNvbnRleHQpOk9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiBVc2VyLnNlYXJjaChjb250ZXh0LCBbXSxcIlsoJ2lzX2FkbWluJywnPScsVHJ1ZSldXCIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBsaXN0U3R1ZGVudChjb250ZXh0OkFQSUNvbnRleHQpOk9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiBVc2VyLnNlYXJjaChjb250ZXh0LCBbXSwgXCJbKCdyb2xlJywnPScsJ3N0dWRlbnQnKV1cIik7XG4gICAgfVxuXG4gICAgc3RhdGljIGxpc3RUZWFjaGVyKGNvbnRleHQ6QVBJQ29udGV4dCk6T2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIFVzZXIuc2VhcmNoKGNvbnRleHQsIFtdLCBcIlsoJ3JvbGUnLCc9JywndGVhY2hlcicpXVwiKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbGlzdEJ5Q2xhc3MoY29udGV4dDpBUElDb250ZXh0LCBjbGFzc0lkKTpPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gVXNlci5zZWFyY2goY29udGV4dCxbXSwgXCJbKCdjbGFzc19pZCcsJz0nLFwiK2NsYXNzSWQrXCIpXVwiKTtcbiAgICB9XG5cbn1cbiJdfQ==
