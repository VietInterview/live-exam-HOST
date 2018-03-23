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
var base_dialog_1 = require("../../../shared/components/base/base.dialog");
var http_1 = require("@angular/http");
var constants_1 = require("../../../shared/models/constants");
var _ = require("underscore");
var ExamDialog = (function (_super) {
    __extends(ExamDialog, _super);
    function ExamDialog(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.locale = constants_1.DEFAULT_DATE_LOCALE;
        _this.examStatus = _.map(constants_1.EXAM_STATUS, function (val, key) {
            return {
                label: val,
                value: key
            };
        });
        return _this;
    }
    ExamDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.onShow.subscribe(function (object) {
            if (object.start && object.end) {
                _this.rangeDates = [object.start, object.end];
            }
            var lang = _this.translateService.currentLang;
            _this.http.get("/assets/i18n/calendar." + lang + ".json")
                .subscribe(function (res) {
                _this.locale = res.json();
            });
        });
    };
    ExamDialog.prototype.onDateSelect = function ($event) {
        if (this.rangeDates[0] && this.rangeDates[1]) {
            this.object.start = this.rangeDates[0];
            this.object.end = this.rangeDates[1];
        }
    };
    ExamDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'exam-dialog',
            templateUrl: 'exam-dialog.component.html',
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], ExamDialog);
    return ExamDialog;
}(base_dialog_1.BaseDialog));
exports.ExamDialog = ExamDialog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3Nlc3NtZW50L2V4YW0vZXhhbS1kaWFsb2cvZXhhbS1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFrRTtBQUtsRSwyRUFBeUU7QUFHekUsc0NBQStDO0FBQy9DLDhEQUF5SDtBQUV6SCw4QkFBZ0M7QUFVaEM7SUFBZ0MsOEJBQWdCO0lBTTVDLG9CQUFvQixJQUFVO1FBQTlCLFlBQ0ksaUJBQU8sU0FRVjtRQVRtQixVQUFJLEdBQUosSUFBSSxDQUFNO1FBRTFCLEtBQUksQ0FBQyxNQUFNLEdBQUcsK0JBQW1CLENBQUM7UUFDbEMsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLHVCQUFXLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUMxQyxNQUFNLENBQUM7Z0JBQ0gsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsS0FBSyxFQUFFLEdBQUc7YUFDYixDQUFBO1FBQ0wsQ0FBQyxDQUFDLENBQUM7O0lBQ1AsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUN4QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixLQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEQsQ0FBQztZQUNELElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7WUFDN0MsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQXlCLElBQUksVUFBTyxDQUFDO2lCQUNsRCxTQUFTLENBQUMsVUFBQyxHQUFhO2dCQUNyQixLQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGlDQUFZLEdBQVosVUFBYSxNQUFNO1FBQ2YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQztJQUNMLENBQUM7SUFuQ1EsVUFBVTtRQUx0QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSw0QkFBNEI7U0FDNUMsQ0FBQzt5Q0FPNEIsV0FBSTtPQU5yQixVQUFVLENBcUN0QjtJQUFELGlCQUFDO0NBckNELEFBcUNDLENBckMrQix3QkFBVSxHQXFDekM7QUFyQ1ksZ0NBQVUiLCJmaWxlIjoiYXBwL2Fzc2Vzc21lbnQvZXhhbS9leGFtLWRpYWxvZy9leGFtLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGV9ICAgICBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQVBJU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2dyb3VwLm1vZGVsJztcbmltcG9ydCB7IEJhc2VEaWFsb2cgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9iYXNlL2Jhc2UuZGlhbG9nJztcbmltcG9ydCB7IEV4YW0gfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2V4YW0ubW9kZWwnO1xuaW1wb3J0IHsgRXhhbU1lbWJlciB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvZXhhbS1tZW1iZXIubW9kZWwnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IERFRkFVTFRfREFURV9MT0NBTEUsIEVYQU1fU1RBVFVTLCBFWEFNX01FTUJFUl9ST0xFLCBFWEFNX01FTUJFUl9TVEFUVVMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2NvbnN0YW50cydcbmltcG9ydCB7U2VsZWN0SXRlbSwgTWVudUl0ZW19IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgeyBFeGFtTWVtYmVyRGlhbG9nIH0gZnJvbSAnLi4vbWVtYmVyLWRpYWxvZy9tZW1iZXItZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RVc2Vyc0RpYWxvZyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3NlbGVjdC11c2VyLWRpYWxvZy9zZWxlY3QtdXNlci1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYlBhbmVsIH0gZnJvbSAncHJpbWVuZy90YWJ2aWV3JztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2V4YW0tZGlhbG9nJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2V4YW0tZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRXhhbURpYWxvZyBleHRlbmRzIEJhc2VEaWFsb2c8RXhhbT4ge1xuXG4gICAgcmFuZ2VEYXRlczogRGF0ZVtdO1xuICAgIGxvY2FsZTphbnk7XG4gICAgZXhhbVN0YXR1czogU2VsZWN0SXRlbVtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubG9jYWxlID0gREVGQVVMVF9EQVRFX0xPQ0FMRTtcbiAgICAgICAgdGhpcy5leGFtU3RhdHVzID0gXy5tYXAoRVhBTV9TVEFUVVMsICh2YWwsIGtleSk9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxhYmVsOiB2YWwsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGtleVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5vblNob3cuc3Vic2NyaWJlKG9iamVjdCA9PiB7XG4gICAgICAgICAgICBpZiAob2JqZWN0LnN0YXJ0ICYmIG9iamVjdC5lbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmdlRGF0ZXMgPSBbb2JqZWN0LnN0YXJ0LG9iamVjdC5lbmRdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxhbmcgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmc7XG4gICAgICAgICAgICB0aGlzLmh0dHAuZ2V0KGAvYXNzZXRzL2kxOG4vY2FsZW5kYXIuJHtsYW5nfS5qc29uYClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25EYXRlU2VsZWN0KCRldmVudCkge1xuICAgICAgICBpZiAodGhpcy5yYW5nZURhdGVzWzBdICYmIHRoaXMucmFuZ2VEYXRlc1sxXSkge1xuICAgICAgICAgICAgdGhpcy5vYmplY3Quc3RhcnQgPSB0aGlzLnJhbmdlRGF0ZXNbMF07XG4gICAgICAgICAgICB0aGlzLm9iamVjdC5lbmQgPSB0aGlzLnJhbmdlRGF0ZXNbMV07XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG4iXX0=
