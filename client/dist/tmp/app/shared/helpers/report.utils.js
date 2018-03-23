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
var _ = require("underscore");
var core_1 = require("@angular/core");
var ReportUtils = (function () {
    function ReportUtils() {
    }
    ReportUtils.prototype.createRowGroupMetaData = function (records, key) {
        var rowGroupMetadata = {};
        if (records) {
            for (var i = 0; i < records.length; i++) {
                var rowData = records[i];
                var value = rowData[key];
                if (i == 0) {
                    rowGroupMetadata[key] = { index: 0, size: 1 };
                }
                else {
                    var previousRowData = records[i - 1];
                    var previousRowGroup = previousRowData[key];
                    if (value === previousRowGroup)
                        rowGroupMetadata[key].size++;
                    else
                        rowGroupMetadata[key] = { index: i, size: 1 };
                }
            }
        }
        return rowGroupMetadata;
    };
    ReportUtils.prototype.analyzeCourseActivity = function (logs) {
        var onTime = 0;
        var startCourseUnitLogs = _.filter(logs, function (log) {
            return log.start != null && log.code == 'START_COURSE_UNIT';
        });
        var endCourseUnitLogs = _.filter(logs, function (log) {
            return log.start != null && log.code == 'FINISH_COURSE_UNIT';
        });
        var first_attempt = _.min(startCourseUnitLogs, function (log) {
            return log.start.getTime();
        });
        var last_attempt = _.max(startCourseUnitLogs, function (log) {
            return log.start.getTime();
        });
        _.each(logs, function (log) {
            if (log.code == 'FINISH_COURSE_UNIT')
                onTime += log.start.getTime();
            if (log.code == 'START_COURSE_UNIT')
                onTime -= log.start.getTime();
        });
        return [first_attempt, last_attempt, onTime];
    };
    ReportUtils.prototype.analyzeExamActivity = function (logs) {
        var onTime = 0;
        var startCourseUnitLogs = _.filter(logs, function (log) {
            return log.start && log.code == 'START_EXAM';
        });
        var endCourseUnitLogs = _.filter(logs, function (log) {
            return log.start && log.code == 'FINISH_EXAM';
        });
        var first_attempt = _.min(startCourseUnitLogs, function (log) {
            return log.start.getTime();
        });
        var last_attempt = _.max(startCourseUnitLogs, function (log) {
            return log.start.getTime();
        });
        _.each(logs, function (log) {
            if (log.code == 'FINISH_EXAM')
                onTime += log.start.getTime();
            if (log.code == 'START_EXAM')
                onTime -= log.start.getTime();
        });
        return [first_attempt, last_attempt, onTime];
    };
    ReportUtils = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ReportUtils);
    return ReportUtils;
}());
exports.ReportUtils = ReportUtils;
