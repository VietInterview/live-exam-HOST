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
var company_model_1 = require("./company.model");
var User = (function (_super) {
    __extends(User, _super);
    function User() {
        var _this = _super.call(this) || this;
        _this.image = undefined;
        _this.display_name = undefined;
        _this.name = undefined;
        _this.email = undefined;
        _this.etraining_group_id = undefined;
        _this.etraining_group_id__DESC__ = undefined;
        _this.login = undefined;
        _this.phone = undefined;
        _this.is_admin = undefined;
        _this.banned = undefined;
        _this.company_id = undefined;
        return _this;
    }
    User_1 = User;
    User.prototype.getCompany = function (context) {
        return company_model_1.Company.get(context, this.company_id);
    };
    User.all = function (context) {
        return User_1.search(context, [], "[('login','!=','admin')]");
    };
    User.listByGroup = function (context, groupId) {
        return User_1.search(context, [], "[('etraining_group_id','='," + groupId + ")]");
    };
    User = User_1 = __decorate([
        decorator_1.Model('res.users'),
        __metadata("design:paramtypes", [])
    ], User);
    return User;
    var User_1;
}(base_model_1.BaseModel));
exports.User = User;
