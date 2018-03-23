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
var base_model_1 = require("./base.model");
var Rx_1 = require("rxjs/Rx");
var decorator_1 = require("./decorator");
var _ = require("underscore");
var Question = (function (_super) {
    __extends(Question, _super);
    function Question() {
        var _this = _super.call(this) || this;
        _this.title = undefined;
        _this.content = undefined;
        _this.explanation = undefined;
        _this.type = undefined;
        _this.level = undefined;
        _this.group_id = undefined;
        return _this;
    }
    Question_1 = Question;
    Question.listByGroup = function (context, groupId) {
        return Question_1.search(context, [], "[('group_id','='," + groupId + ")]");
    };
    Question.listByGroups = function (context, groupIds) {
        var subscriptions = [];
        _.each(groupIds, function (groupId) {
            subscriptions.push(Question_1.listByGroup(context, groupId));
        });
        return Rx_1.Observable.zip.apply(Rx_1.Observable, subscriptions).map(function (questionArrs) {
            return _.flatten(questionArrs);
        });
    };
    Question = Question_1 = __decorate([
        decorator_1.Model('etraining.question'),
        __metadata("design:paramtypes", [])
    ], Question);
    return Question;
    var Question_1;
}(base_model_1.BaseModel));
exports.Question = Question;
