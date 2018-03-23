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
var log_model_1 = require("../models/log.model");
var _ = require("underscore");
var moment = require("moment");
var constants_1 = require("../models/constants");
var core_1 = require("@angular/core");
var StatsUtils = (function () {
    function StatsUtils() {
    }
    StatsUtils.prototype.courseStatisticByDate = function (context, startDate, endDate) {
        var cloud_acc = context.authService.StoredCredential.cloud_account;
        var startDateStr = moment(startDate).format(constants_1.SERVER_DATETIME_FORMAT);
        var endDateStr = moment(endDate).format(constants_1.SERVER_DATETIME_FORMAT);
        return context.apiService.search(log_model_1.UserLog.Model, [], "[('start','>=','" + startDateStr + "'),('start','<=','" + endDateStr + "'),('res_model','=','etraining.course')]", cloud_acc.id, cloud_acc.api_endpoint).map(function (logs) {
            var dayLengthMills = 1000 * 60 * 60 * 24;
            var slots = [];
            var starTimeMillis = startDate.getTime();
            var endTimeMills = endDate.getTime();
            for (var i = 0; starTimeMillis + i * dayLengthMills < endTimeMills; i++)
                slots.push(0);
            _.each(logs, function (log) {
                var start = new Date(log.start);
                var index = Math.floor((start.getTime() - starTimeMillis) / dayLengthMills);
                slots[index]++;
            });
            return slots;
        });
    };
    StatsUtils = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], StatsUtils);
    return StatsUtils;
}());
exports.StatsUtils = StatsUtils;
