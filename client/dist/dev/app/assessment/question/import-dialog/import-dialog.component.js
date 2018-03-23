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
var Rx_1 = require("rxjs/Rx");
var group_model_1 = require("../../../shared/models/group.model");
var base_component_1 = require("../../../shared/components/base/base.component");
var question_model_1 = require("../../../shared/models/question.model");
var option_model_1 = require("../../../shared/models/option.model");
var _ = require("underscore");
var constants_1 = require("../../../shared/models/constants");
var excel_service_1 = require("../../../shared/services/excel.service");
var QuestionImportDialog = (function (_super) {
    __extends(QuestionImportDialog, _super);
    function QuestionImportDialog(excelService) {
        var _this = _super.call(this) || this;
        _this.excelService = excelService;
        _this.onImportCompleteReceiver = new Rx_1.Subject();
        _this.onImportComplete = _this.onImportCompleteReceiver.asObservable();
        _this.display = false;
        _this.importing = false;
        _this.records = [];
        _this.fileType = excel_service_1.EXCEL_TYPE;
        return _this;
    }
    QuestionImportDialog.prototype.show = function () {
        this.display = true;
    };
    QuestionImportDialog.prototype.hide = function () {
        this.importing = false;
        this.display = false;
    };
    QuestionImportDialog.prototype.import = function () {
        var _this = this;
        var subscriptions = [];
        group_model_1.Group.listByCategory(this, constants_1.GROUP_CATEGORY.QUESTION).subscribe(function (groups) {
            _this.importing = true;
            for (var i = 0; i < _this.records.length;) {
                var record = _this.records[i];
                var question = new question_model_1.Question();
                Object.assign(question, record);
                var group = _.find(groups, function (obj) {
                    return obj.code == record["group_code"];
                });
                var type = record["type"];
                if (group && type) {
                    question.group_id = group.id;
                    var options = [];
                    var optionLength = record["option"] ? +record["option"] : 0;
                    if (type == "sc" && optionLength) {
                        for (var j = 1; j <= optionLength && i < _this.records.length; j++) {
                            var optionRecord = _this.records[j + i];
                            var option = new option_model_1.QuestionOption();
                            option.is_correct = j == 0;
                            option.content = optionRecord["option"];
                            options.push(option);
                        }
                        var subscription = question.save(_this).flatMap(function () {
                            var optionSubscription = [];
                            _.each(options, function (obj) {
                                obj.question_id = question.id;
                                optionSubscription.push(option.save(_this));
                            });
                            return Rx_1.Observable.forkJoin.apply(Rx_1.Observable, optionSubscription);
                        });
                        subscriptions.push(subscription);
                    }
                    else
                        subscriptions.push(question.save(_this));
                    i += optionLength + 1;
                }
                else
                    i++;
            }
            Rx_1.Observable.forkJoin.apply(Rx_1.Observable, subscriptions).subscribe(function () {
                _this.importing = false;
                _this.hide();
                _this.onImportCompleteReceiver.next();
            });
        });
    };
    QuestionImportDialog.prototype.changeListner = function (event) {
        var _this = this;
        var file = event.files[0];
        this.fileName = file.name;
        this.excelService.importFromExcelFile(file).subscribe(function (data) {
            _this.records = data;
        });
    };
    QuestionImportDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-question-import-dialog',
            templateUrl: 'import-dialog.component.html',
        }),
        __metadata("design:paramtypes", [excel_service_1.ExcelService])
    ], QuestionImportDialog);
    return QuestionImportDialog;
}(base_component_1.BaseComponent));
exports.QuestionImportDialog = QuestionImportDialog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3Nlc3NtZW50L3F1ZXN0aW9uL2ltcG9ydC1kaWFsb2cvaW1wb3J0LWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlEO0FBQ3pELDhCQUE4QztBQUc5QyxrRUFBMkQ7QUFDM0QsaUZBQStFO0FBQy9FLHdFQUFpRTtBQUNqRSxvRUFBcUU7QUFDckUsOEJBQWdDO0FBQ2hDLDhEQUFvRjtBQUVwRix3RUFBa0Y7QUFRbEY7SUFBMEMsd0NBQWE7SUFXdEQsOEJBQW9CLFlBQTBCO1FBQTlDLFlBQ0MsaUJBQU8sU0FLUDtRQU5tQixrQkFBWSxHQUFaLFlBQVksQ0FBYztRQUh0Qyw4QkFBd0IsR0FBaUIsSUFBSSxZQUFPLEVBQUUsQ0FBQztRQUM1RCxzQkFBZ0IsR0FBb0IsS0FBSSxDQUFDLHdCQUF3QixDQUFDLFlBQVksRUFBRSxDQUFDO1FBSW5GLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEtBQUksQ0FBQyxRQUFRLEdBQUcsMEJBQVUsQ0FBQzs7SUFDNUIsQ0FBQztJQUVELG1DQUFJLEdBQUo7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsbUNBQUksR0FBSjtRQUNDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxxQ0FBTSxHQUFOO1FBQUEsaUJBOENDO1FBN0NBLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN2QixtQkFBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsMEJBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ25FLEtB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Qy9DLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1osS0FBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsNENBQWEsR0FBYixVQUFjLEtBQVU7UUFBeEIsaUJBTUM7UUFMQSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDekQsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBbEZXLG9CQUFvQjtRQUxoQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQ0FBa0M7WUFDNUMsV0FBVyxFQUFFLDhCQUE4QjtTQUMzQyxDQUFDO3lDQVlpQyw0QkFBWTtPQVhsQyxvQkFBb0IsQ0FxRmhDO0lBQUQsMkJBQUM7Q0FyRkQsQUFxRkMsQ0FyRnlDLDhCQUFhLEdBcUZ0RDtBQXJGWSxvREFBb0IiLCJmaWxlIjoiYXBwL2Fzc2Vzc21lbnQvcXVlc3Rpb24vaW1wb3J0LWRpYWxvZy9pbXBvcnQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgQVBJU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2dyb3VwLm1vZGVsJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9iYXNlL2Jhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9xdWVzdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBRdWVzdGlvbk9wdGlvbiB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvb3B0aW9uLm1vZGVsJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgeyBERUZBVUxUX1BBU1NXT1JELCBHUk9VUF9DQVRFR09SWSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgRXhjZWxTZXJ2aWNlLCBFWENFTF9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2V4Y2VsLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ2V0cmFpbmluZy1xdWVzdGlvbi1pbXBvcnQtZGlhbG9nJyxcblx0dGVtcGxhdGVVcmw6ICdpbXBvcnQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25JbXBvcnREaWFsb2cgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuXHRkaXNwbGF5OiBib29sZWFuO1xuXHRmaWxlVHlwZTogc3RyaW5nO1xuXHRmaWxlTmFtZTogc3RyaW5nO1xuXHRyZWNvcmRzOiBhbnlbXTtcblx0aW1wb3J0aW5nOiBib29sZWFuO1xuXG5cdHByaXZhdGUgb25JbXBvcnRDb21wbGV0ZVJlY2VpdmVyOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICAgIG9uSW1wb3J0Q29tcGxldGU6T2JzZXJ2YWJsZTxhbnk+ID0gIHRoaXMub25JbXBvcnRDb21wbGV0ZVJlY2VpdmVyLmFzT2JzZXJ2YWJsZSgpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZXhjZWxTZXJ2aWNlOiBFeGNlbFNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuZGlzcGxheSA9IGZhbHNlO1xuXHRcdHRoaXMuaW1wb3J0aW5nID0gZmFsc2U7XG5cdFx0dGhpcy5yZWNvcmRzID0gW107XG5cdFx0dGhpcy5maWxlVHlwZSA9IEVYQ0VMX1RZUEU7XG5cdH1cblxuXHRzaG93KCkge1xuXHRcdHRoaXMuZGlzcGxheSA9IHRydWU7XG5cdH1cblxuXHRoaWRlKCkge1xuXHRcdHRoaXMuaW1wb3J0aW5nID0gZmFsc2U7XG5cdFx0dGhpcy5kaXNwbGF5ID0gZmFsc2U7XG5cdH1cblxuXHRpbXBvcnQoKSB7XG5cdFx0dmFyIHN1YnNjcmlwdGlvbnMgPSBbXTtcblx0XHRHcm91cC5saXN0QnlDYXRlZ29yeSh0aGlzLCBHUk9VUF9DQVRFR09SWS5RVUVTVElPTikuc3Vic2NyaWJlKGdyb3VwcyA9PiB7XG5cdFx0XHR0aGlzLmltcG9ydGluZyA9IHRydWU7XG5cdFx0XHRmb3IgKHZhciBpPTA7IGkgPCB0aGlzLnJlY29yZHMubGVuZ3RoOykge1xuXHRcdFx0XHR2YXIgcmVjb3JkID0gdGhpcy5yZWNvcmRzW2ldO1xuXHRcdFx0XHR2YXIgcXVlc3Rpb24gPSBuZXcgUXVlc3Rpb24oKTtcblx0XHRcdFx0T2JqZWN0LmFzc2lnbihxdWVzdGlvbiwgcmVjb3JkKTtcblx0XHRcdFx0dmFyIGdyb3VwID0gXy5maW5kKGdyb3VwcywgKG9iajpHcm91cCk9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIG9iai5jb2RlID09IHJlY29yZFtcImdyb3VwX2NvZGVcIl07XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR2YXIgdHlwZSA9IHJlY29yZFtcInR5cGVcIl07XG5cdFx0XHRcdGlmIChncm91cCAmJiB0eXBlKSB7XG5cdFx0XHRcdFx0cXVlc3Rpb24uZ3JvdXBfaWQgPSBncm91cC5pZDtcblx0XHRcdFx0XHR2YXIgb3B0aW9ucyA9IFtdO1xuXHRcdFx0XHRcdHZhciBvcHRpb25MZW5ndGggPXJlY29yZFtcIm9wdGlvblwiXT8gK3JlY29yZFtcIm9wdGlvblwiXTowO1xuXHRcdFx0XHRcdGlmICh0eXBlID09XCJzY1wiICYmIG9wdGlvbkxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaj0xO2o8PSBvcHRpb25MZW5ndGggJiYgaSA8IHRoaXMucmVjb3Jkcy5sZW5ndGg7aisrKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBvcHRpb25SZWNvcmQgPSB0aGlzLnJlY29yZHNbaitpXTtcblx0XHRcdFx0XHRcdFx0dmFyIG9wdGlvbiA9IG5ldyBRdWVzdGlvbk9wdGlvbigpO1xuXHRcdFx0XHRcdFx0XHRvcHRpb24uaXNfY29ycmVjdCA9IGo9PTA7XG5cdFx0XHRcdFx0XHRcdG9wdGlvbi5jb250ZW50ID0gb3B0aW9uUmVjb3JkW1wib3B0aW9uXCJdO1xuXHRcdFx0XHRcdFx0XHRvcHRpb25zLnB1c2gob3B0aW9uKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHZhciBzdWJzY3JpcHRpb24gPSAgcXVlc3Rpb24uc2F2ZSh0aGlzKS5mbGF0TWFwKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0dmFyIG9wdGlvblN1YnNjcmlwdGlvbiA9IFtdO1xuXHRcdFx0XHRcdFx0XHRfLmVhY2gob3B0aW9ucywgKG9iajpRdWVzdGlvbk9wdGlvbik9PiB7XG5cdFx0XHRcdFx0XHRcdFx0b2JqLnF1ZXN0aW9uX2lkID0gIHF1ZXN0aW9uLmlkO1xuXHRcdFx0XHRcdFx0XHRcdG9wdGlvblN1YnNjcmlwdGlvbi5wdXNoKG9wdGlvbi5zYXZlKHRoaXMpKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLmZvcmtKb2luKC4uLm9wdGlvblN1YnNjcmlwdGlvbik7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHN1YnNjcmlwdGlvbnMucHVzaChzdWJzY3JpcHRpb24pO1xuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0c3Vic2NyaXB0aW9ucy5wdXNoKHF1ZXN0aW9uLnNhdmUodGhpcykpO1xuXHRcdFx0XHRcdGkgKz0gb3B0aW9uTGVuZ3RoICsgMTtcblx0XHRcdFx0fSBlbHNlXG5cdFx0XHRcdFx0aSsrO1xuXHRcdFx0fVxuXHRcdFx0T2JzZXJ2YWJsZS5mb3JrSm9pbiguLi5zdWJzY3JpcHRpb25zKS5zdWJzY3JpYmUoKCk9PiB7XG5cdFx0XHRcdHRoaXMuaW1wb3J0aW5nID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLm9uSW1wb3J0Q29tcGxldGVSZWNlaXZlci5uZXh0KCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdGNoYW5nZUxpc3RuZXIoZXZlbnQ6IGFueSkge1xuXHRcdHZhciBmaWxlID0gZXZlbnQuZmlsZXNbMF07XG5cdFx0dGhpcy5maWxlTmFtZSA9IGZpbGUubmFtZTtcblx0XHR0aGlzLmV4Y2VsU2VydmljZS5pbXBvcnRGcm9tRXhjZWxGaWxlKGZpbGUpLnN1YnNjcmliZShkYXRhID0+IHtcblx0XHRcdHRoaXMucmVjb3JkcyA9IGRhdGE7XG5cdFx0fSlcblx0fVxuXG5cbn1cblxuIl19
