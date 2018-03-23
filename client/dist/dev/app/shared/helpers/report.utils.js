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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaGVscGVycy9yZXBvcnQudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQSw4QkFBZ0M7QUFDaEMsc0NBQTJDO0FBRzNDO0lBRUM7SUFDQSxDQUFDO0lBRUQsNENBQXNCLEdBQXRCLFVBQXVCLE9BQVksRUFBRSxHQUFXO1FBQy9DLElBQUksZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDYixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDekMsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNaLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQy9DLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLENBQUM7b0JBQ0wsSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDckMsSUFBSSxnQkFBZ0IsR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzVDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxnQkFBZ0IsQ0FBQzt3QkFDOUIsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzlCLElBQUk7d0JBQ0gsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFDaEQsQ0FBQztZQUNGLENBQUM7UUFDRixDQUFDO1FBQ0QsTUFBTSxDQUFDLGdCQUFnQixDQUFDO0lBQ3pCLENBQUM7SUFFRCx5Q0FBbUIsR0FBbkIsVUFBb0IsSUFBZTtRQUNsQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFVBQUMsR0FBRztZQUM1QyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFHLFlBQVksQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFHO1lBQzFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUcsYUFBYSxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxVQUFDLEdBQUc7WUFDbEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLFVBQUMsR0FBRztZQUNqRCxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUNILENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQUMsR0FBRztZQUNoQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLGFBQWEsQ0FBQztnQkFDN0IsTUFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDL0IsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxZQUFZLENBQUM7Z0JBQzVCLE1BQU0sSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBaERXLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTs7T0FDQSxXQUFXLENBa0R2QjtJQUFELGtCQUFDO0NBbERELEFBa0RDLElBQUE7QUFsRFksa0NBQVciLCJmaWxlIjoiYXBwL3NoYXJlZC9oZWxwZXJzL3JlcG9ydC51dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzL1J4J1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi9tb2RlbHMvZ3JvdXAubW9kZWwnO1xuaW1wb3J0IHsgRXhhbUxvZyB9IGZyb20gJy4uL21vZGVscy9sb2cubW9kZWwnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlcG9ydFV0aWxzIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdGNyZWF0ZVJvd0dyb3VwTWV0YURhdGEocmVjb3JkczogYW55LCBrZXk6IHN0cmluZykge1xuXHRcdHZhciByb3dHcm91cE1ldGFkYXRhID0ge307XG5cdFx0aWYgKHJlY29yZHMpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgcm93RGF0YSA9IHJlY29yZHNbaV07XG5cdFx0XHRcdGxldCB2YWx1ZSA9IHJvd0RhdGFba2V5XTtcblx0XHRcdFx0aWYgKGkgPT0gMCkge1xuXHRcdFx0XHRcdHJvd0dyb3VwTWV0YWRhdGFba2V5XSA9IHsgaW5kZXg6IDAsIHNpemU6IDEgfTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRsZXQgcHJldmlvdXNSb3dEYXRhID0gcmVjb3Jkc1tpIC0gMV07XG5cdFx0XHRcdFx0bGV0IHByZXZpb3VzUm93R3JvdXAgPSBwcmV2aW91c1Jvd0RhdGFba2V5XTtcblx0XHRcdFx0XHRpZiAodmFsdWUgPT09IHByZXZpb3VzUm93R3JvdXApXG5cdFx0XHRcdFx0XHRyb3dHcm91cE1ldGFkYXRhW2tleV0uc2l6ZSsrO1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHJvd0dyb3VwTWV0YWRhdGFba2V5XSA9IHsgaW5kZXg6IGksIHNpemU6IDEgfTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcm93R3JvdXBNZXRhZGF0YTtcblx0fVxuXG5cdGFuYWx5emVFeGFtQWN0aXZpdHkobG9nczogRXhhbUxvZ1tdKSB7XG5cdFx0dmFyIG9uVGltZSA9IDA7XG5cdFx0dmFyIHN0YXJ0Q291cnNlVW5pdExvZ3MgPSBfLmZpbHRlcihsb2dzLCAobG9nKT0+IHtcblx0XHRcdHJldHVybiBsb2cuc3RhcnQgJiYgbG9nLmNvZGUgPT0nU1RBUlRfRVhBTSc7XG5cdFx0fSk7XG5cdFx0dmFyIGVuZENvdXJzZVVuaXRMb2dzID0gXy5maWx0ZXIobG9ncywgKGxvZyk9PiB7XG5cdFx0XHRyZXR1cm4gbG9nLnN0YXJ0ICYmIGxvZy5jb2RlID09J0ZJTklTSF9FWEFNJztcblx0XHR9KTtcblx0XHR2YXIgZmlyc3RfYXR0ZW1wdCA9IF8ubWluKHN0YXJ0Q291cnNlVW5pdExvZ3MsIChsb2cpPT4ge1xuXHRcdFx0cmV0dXJuIGxvZy5zdGFydC5nZXRUaW1lKCk7XG5cdFx0fSk7XG5cdFx0dmFyIGxhc3RfYXR0ZW1wdCA9IF8ubWF4KHN0YXJ0Q291cnNlVW5pdExvZ3MsIChsb2cpPT4ge1xuXHRcdFx0cmV0dXJuIGxvZy5zdGFydC5nZXRUaW1lKCk7XG5cdFx0fSk7XG5cdFx0Xy5lYWNoKGxvZ3MsIChsb2cpPT4ge1xuXHRcdFx0aWYgKGxvZy5jb2RlID09ICdGSU5JU0hfRVhBTScpXG5cdFx0XHRcdG9uVGltZSArPSBsb2cuc3RhcnQuZ2V0VGltZSgpO1xuXHRcdFx0aWYgKGxvZy5jb2RlID09ICdTVEFSVF9FWEFNJylcblx0XHRcdFx0b25UaW1lIC09IGxvZy5zdGFydC5nZXRUaW1lKCk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIFtmaXJzdF9hdHRlbXB0LCBsYXN0X2F0dGVtcHQsIG9uVGltZV07XG5cdH1cblxufVxuIl19
