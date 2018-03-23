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
var core_1 = require("@angular/core");
var base_component_1 = require("../../../shared/components/base/base.component");
var chart_decorator_1 = require("../../chart.decorator");
var statistics_utils_1 = require("../../../shared/helpers/statistics.utils");
var CourseActivityChartComponent = (function (_super) {
    __extends(CourseActivityChartComponent, _super);
    function CourseActivityChartComponent(statsUtils) {
        var _this = _super.call(this) || this;
        _this.statsUtils = statsUtils;
        return _this;
    }
    CourseActivityChartComponent.prototype.ngOnInit = function () {
        this.drawChart(7);
    };
    CourseActivityChartComponent.prototype.drawChart = function (duration) {
        var _this = this;
        var end = new Date();
        var start = new Date(end.getTime() - duration * 24 * 60 * 60 * 1000);
        start.setHours(0, 0, 0, 0);
        this.statsUtils.courseStatisticByDate(this, start, end).subscribe(function (slots) {
            var labels = [_this.translateService.instant('Today')];
            var data = [slots[0]];
            for (var i = 1; i < slots.length; i++) {
                labels.push(_this.translateService.instant("Day-" + i));
                data.push(slots[i]);
            }
            _this.chartData = {
                labels: labels,
                datasets: [
                    {
                        label: _this.translateService.instant('Course unit attempt'),
                        data: data,
                        fill: false,
                        borderColor: '#FFC107'
                    }
                ]
            };
        });
    };
    CourseActivityChartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-course-activity-chart',
            template: " <div class=\"card\"> <div style=\"overflow:auto\">   <h3>{{'Course activity'|translate}}</h3>   <p-radioButton name=\"monitor_window\" label=\"{{'Last 7 days'|translate}}\" value=\"7\" inputId=\"opt1\" (onClick)=\"drawChart(7)\"></p-radioButton>     <p-radioButton name=\"monitor_window\" label=\"{{'Last 14 days'|translate}}\" value=\"14\"  inputId=\"opt2\" (onClick)=\"drawChart(14)\"></p-radioButton>     <p-radioButton name=\"monitor_window\" label=\"{{'Last 30 days'|translate}}\" value=\"30\" inputId=\"opt3\" (onClick)=\"drawChart(30)\"></p-radioButton>   <p-chart type=\"line\" [data]=\"chartData\" responsive=\"true\"></p-chart> </div> </div>",
        }),
        chart_decorator_1.Chart({
            title: 'Course activity chart',
        }),
        __metadata("design:paramtypes", [statistics_utils_1.StatsUtils])
    ], CourseActivityChartComponent);
    return CourseActivityChartComponent;
}(base_component_1.BaseComponent));
exports.CourseActivityChartComponent = CourseActivityChartComponent;
