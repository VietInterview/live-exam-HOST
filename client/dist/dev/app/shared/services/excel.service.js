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
var Rx_1 = require("rxjs/Rx");
var FileSaver = require("file-saver");
var XLSX = require("xlsx");
exports.EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ExcelService = (function () {
    function ExcelService() {
    }
    ExcelService.prototype.exportAsExcelFile = function (json, excelFileName) {
        var worksheet = XLSX.utils.json_to_sheet(json);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    ExcelService.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], {
            type: exports.EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    ExcelService.prototype.importFromExcelFile = function (file) {
        return Rx_1.Observable.create(function (observer) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var data = new Uint8Array(e.target.result);
                data = new Uint8Array(data);
                var workbook = XLSX.read(data, { type: 'array' });
                var sheetName = workbook.SheetNames[0];
                var sheet = workbook.Sheets[sheetName];
                observer.next(XLSX.utils.sheet_to_json(sheet));
                observer.complete();
            };
            reader.readAsArrayBuffer(file);
        });
    };
    ExcelService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ExcelService);
    return ExcelService;
}());
exports.ExcelService = ExcelService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvZXhjZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyw4QkFBOEM7QUFDOUMsc0NBQXdDO0FBQ3hDLDJCQUE2QjtBQUNoQixRQUFBLFVBQVUsR0FBRyxpRkFBaUYsQ0FBQztBQUM1RyxJQUFNLGVBQWUsR0FBRyxPQUFPLENBQUM7QUFHaEM7SUFFRTtJQUFnQixDQUFDO0lBRVYsd0NBQWlCLEdBQXhCLFVBQXlCLElBQVcsRUFBRSxhQUFxQjtRQUN6RCxJQUFNLFNBQVMsR0FBbUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBTSxRQUFRLEdBQWtCLEVBQUUsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDeEYsSUFBTSxXQUFXLEdBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTyxzQ0FBZSxHQUF2QixVQUF3QixNQUFXLEVBQUUsUUFBZ0I7UUFDbkQsSUFBTSxJQUFJLEdBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNwQyxJQUFJLEVBQUUsa0JBQVU7U0FDakIsQ0FBQyxDQUFDO1FBQ0gsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxHQUFHLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLGVBQWUsQ0FBQyxDQUFDO0lBRXpGLENBQUM7SUFFTSwwQ0FBbUIsR0FBMUIsVUFBMkIsSUFBUztRQUNsQyxNQUFNLENBQUMsZUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFTLFFBQVE7WUFDeEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUM5QixNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVMsQ0FBTTtnQkFDN0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM1QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0QixDQUFDLENBQUM7WUFDRixNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBakNVLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTs7T0FDQSxZQUFZLENBb0N4QjtJQUFELG1CQUFDO0NBcENELEFBb0NDLElBQUE7QUFwQ1ksb0NBQVkiLCJmaWxlIjoiYXBwL3NoYXJlZC9zZXJ2aWNlcy9leGNlbC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0ICogYXMgRmlsZVNhdmVyIGZyb20gJ2ZpbGUtc2F2ZXInO1xuaW1wb3J0ICogYXMgWExTWCBmcm9tICd4bHN4JztcbmV4cG9ydCBjb25zdCBFWENFTF9UWVBFID0gJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0O2NoYXJzZXQ9VVRGLTgnO1xuY29uc3QgRVhDRUxfRVhURU5TSU9OID0gJy54bHN4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV4Y2VsU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgZXhwb3J0QXNFeGNlbEZpbGUoanNvbjogYW55W10sIGV4Y2VsRmlsZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHdvcmtzaGVldDogWExTWC5Xb3JrU2hlZXQgPSBYTFNYLnV0aWxzLmpzb25fdG9fc2hlZXQoanNvbik7XG4gICAgY29uc3Qgd29ya2Jvb2s6IFhMU1guV29ya0Jvb2sgPSB7IFNoZWV0czogeyAnZGF0YSc6IHdvcmtzaGVldCB9LCBTaGVldE5hbWVzOiBbJ2RhdGEnXSB9O1xuICAgIGNvbnN0IGV4Y2VsQnVmZmVyOiBhbnkgPSBYTFNYLndyaXRlKHdvcmtib29rLCB7IGJvb2tUeXBlOiAneGxzeCcsIHR5cGU6ICdhcnJheScgfSk7XG4gICAgdGhpcy5zYXZlQXNFeGNlbEZpbGUoZXhjZWxCdWZmZXIsIGV4Y2VsRmlsZU5hbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBzYXZlQXNFeGNlbEZpbGUoYnVmZmVyOiBhbnksIGZpbGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhOiBCbG9iID0gbmV3IEJsb2IoW2J1ZmZlcl0sIHtcbiAgICAgIHR5cGU6IEVYQ0VMX1RZUEVcbiAgICB9KTtcbiAgICBGaWxlU2F2ZXIuc2F2ZUFzKGRhdGEsIGZpbGVOYW1lICsgJ19leHBvcnRfJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgRVhDRUxfRVhURU5TSU9OKTtcbiAgICBcbiAgfVxuXG4gIHB1YmxpYyBpbXBvcnRGcm9tRXhjZWxGaWxlKGZpbGU6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKGZ1bmN0aW9uKG9ic2VydmVyKSB7XG4gICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihlOiBhbnkpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBuZXcgVWludDhBcnJheShlLnRhcmdldC5yZXN1bHQpO1xuICAgICAgICBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gICAgICAgIHZhciB3b3JrYm9vayA9IFhMU1gucmVhZChkYXRhLCB7IHR5cGU6ICdhcnJheScgfSk7XG4gICAgICAgIHZhciBzaGVldE5hbWUgPSB3b3JrYm9vay5TaGVldE5hbWVzWzBdO1xuICAgICAgICB2YXIgc2hlZXQgPSB3b3JrYm9vay5TaGVldHNbc2hlZXROYW1lXTtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChYTFNYLnV0aWxzLnNoZWV0X3RvX2pzb24oc2hlZXQpKTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH07XG4gICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gICAgfSk7XG4gIH1cblxuXG59Il19
