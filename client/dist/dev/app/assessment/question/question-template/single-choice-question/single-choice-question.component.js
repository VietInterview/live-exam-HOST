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
var option_model_1 = require("../../../../shared/models/option.model");
var base_component_1 = require("../../../../shared/components/base/base.component");
var _ = require("underscore");
var question_decorator_1 = require("../question.decorator");
var SingleChoiceQuestionComponent = (function (_super) {
    __extends(SingleChoiceQuestionComponent, _super);
    function SingleChoiceQuestionComponent() {
        var _this = _super.call(this) || this;
        _this.options = [];
        return _this;
    }
    SingleChoiceQuestionComponent.prototype.render = function (question, answer) {
        var _this = this;
        this.question = question;
        this.answer = answer;
        if (this.question.id)
            option_model_1.QuestionOption.listByQuestion(this, question.id).subscribe(function (options) {
                _this.options = options;
            });
    };
    SingleChoiceQuestionComponent.prototype.saveEditor = function () {
        var _this = this;
        return this.question.save(this).flatMap(function () {
            var subscriptions = [];
            _.each(_this.options, function (option) {
                option.question_id = _this.question.id;
                subscriptions.push(option.save(_this));
            });
            return Rx_1.Observable.forkJoin.apply(Rx_1.Observable, subscriptions);
        });
    };
    SingleChoiceQuestionComponent.prototype.concludeAnswer = function () {
        var _this = this;
        var option = _.find(this.options, function (obj) {
            return obj.id == _this.answer.option_id;
        });
        if (option)
            this.answer.is_correct = option.is_correct;
    };
    SingleChoiceQuestionComponent.prototype.addOption = function () {
        this.options.push(new option_model_1.QuestionOption());
    };
    SingleChoiceQuestionComponent.prototype.setOptionCorrect = function (option) {
        if (option.is_correct) {
            _.each(this.options, function (option) {
                option.is_correct = false;
            });
            option.is_correct = true;
        }
    };
    SingleChoiceQuestionComponent.prototype.removeOption = function (option) {
        var _this = this;
        if (option.id) {
            option.delete(this).subscribe(function () {
                _this.options = _.reject(_this.options, function (obj) {
                    return obj == option;
                });
            });
        }
        else
            this.options = _.reject(this.options, function (obj) {
                return obj == option;
            });
    };
    SingleChoiceQuestionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-single-choice-question',
            templateUrl: 'single-choice-question.component.html',
            styleUrls: ['single-choice-question.component.css'],
        }),
        question_decorator_1.QuestionTemplate({
            type: 'sc'
        }),
        __metadata("design:paramtypes", [])
    ], SingleChoiceQuestionComponent);
    return SingleChoiceQuestionComponent;
}(base_component_1.BaseComponent));
exports.SingleChoiceQuestionComponent = SingleChoiceQuestionComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3Nlc3NtZW50L3F1ZXN0aW9uL3F1ZXN0aW9uLXRlbXBsYXRlL3NpbmdsZS1jaG9pY2UtcXVlc3Rpb24vc2luZ2xlLWNob2ljZS1xdWVzdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlEO0FBQ3pELDhCQUE4QztBQUU5Qyx1RUFBd0U7QUFFeEUsb0ZBQWtGO0FBQ2xGLDhCQUFnQztBQUdoQyw0REFBeUQ7QUFZekQ7SUFBbUQsaURBQWE7SUFPL0Q7UUFBQSxZQUNDLGlCQUFPLFNBRVA7UUFEQSxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzs7SUFDbkIsQ0FBQztJQUVELDhDQUFNLEdBQU4sVUFBTyxRQUFRLEVBQUUsTUFBTztRQUF4QixpQkFPQztRQU5BLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUksTUFBTSxDQUFDO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ3BCLDZCQUFjLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsT0FBeUI7Z0JBQ3BGLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGtEQUFVLEdBQVY7UUFBQSxpQkFTQztRQVJBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDdkMsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLE1BQXNCO2dCQUMzQyxNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2dCQUN0QyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxlQUFVLENBQUMsUUFBUSxPQUFuQixlQUFVLEVBQWEsYUFBYSxFQUFFO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELHNEQUFjLEdBQWQ7UUFBQSxpQkFNQztRQUxBLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLEdBQUc7WUFDckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBSSxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQzlDLENBQUM7SUFFRCxpREFBUyxHQUFUO1FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSw2QkFBYyxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsd0RBQWdCLEdBQWhCLFVBQWlCLE1BQU07UUFDdEIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUMsTUFBTTtnQkFDM0IsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDO0lBQ0YsQ0FBQztJQUVELG9EQUFZLEdBQVosVUFBYSxNQUFzQjtRQUFuQyxpQkFXQztRQVZBLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLFVBQUMsR0FBRztvQkFDekMsTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUE7UUFDSCxDQUFDO1FBQUMsSUFBSTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDekMsTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBaEVXLDZCQUE2QjtRQVR6QyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQ0FBa0M7WUFDNUMsV0FBVyxFQUFFLHVDQUF1QztZQUNwRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQztTQUNuRCxDQUFDO1FBQ0QscUNBQWdCLENBQUM7WUFDakIsSUFBSSxFQUFFLElBQUk7U0FDVixDQUFDOztPQUNXLDZCQUE2QixDQWlFekM7SUFBRCxvQ0FBQztDQWpFRCxBQWlFQyxDQWpFa0QsOEJBQWEsR0FpRS9EO0FBakVZLHNFQUE2QiIsImZpbGUiOiJhcHAvYXNzZXNzbWVudC9xdWVzdGlvbi9xdWVzdGlvbi10ZW1wbGF0ZS9zaW5nbGUtY2hvaWNlLXF1ZXN0aW9uL3NpbmdsZS1jaG9pY2UtcXVlc3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvcXVlc3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgUXVlc3Rpb25PcHRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvbW9kZWxzL29wdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBBbnN3ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2Fuc3dlci5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvYmFzZS9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IHsgREVGQVVMVF9QQVNTV09SRCwgR1JPVVBfQ0FURUdPUlkgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IFF1ZXN0aW9uVGVtcGxhdGUgfSBmcm9tICcuLi9xdWVzdGlvbi5kZWNvcmF0b3InO1xuaW1wb3J0IHsgSVF1ZXN0aW9uIH0gZnJvbSAnLi4vcXVlc3Rpb24uaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnZXRyYWluaW5nLXNpbmdsZS1jaG9pY2UtcXVlc3Rpb24nLFxuXHR0ZW1wbGF0ZVVybDogJ3NpbmdsZS1jaG9pY2UtcXVlc3Rpb24uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnc2luZ2xlLWNob2ljZS1xdWVzdGlvbi5jb21wb25lbnQuY3NzJ10sXG59KVxuQFF1ZXN0aW9uVGVtcGxhdGUoe1xuXHR0eXBlOiAnc2MnXG59KVxuZXhwb3J0IGNsYXNzIFNpbmdsZUNob2ljZVF1ZXN0aW9uQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIElRdWVzdGlvbiB7XG5cblx0bW9kZTogYW55O1xuXHRxdWVzdGlvbjogUXVlc3Rpb247XG5cdGFuc3dlcjogQW5zd2VyO1xuXHRvcHRpb25zOiBRdWVzdGlvbk9wdGlvbltdO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5vcHRpb25zID0gW107XG5cdH1cblxuXHRyZW5kZXIocXVlc3Rpb24sIGFuc3dlcj8pIHtcblx0XHR0aGlzLnF1ZXN0aW9uID0gcXVlc3Rpb247XG5cdFx0dGhpcy5hbnN3ZXIgPSAgYW5zd2VyO1xuXHRcdGlmICh0aGlzLnF1ZXN0aW9uLmlkKVxuXHRcdFx0UXVlc3Rpb25PcHRpb24ubGlzdEJ5UXVlc3Rpb24odGhpcywgcXVlc3Rpb24uaWQpLnN1YnNjcmliZSgob3B0aW9uczogUXVlc3Rpb25PcHRpb25bXSkgPT4ge1xuXHRcdFx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRzYXZlRWRpdG9yKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMucXVlc3Rpb24uc2F2ZSh0aGlzKS5mbGF0TWFwKCgpID0+IHtcblx0XHRcdHZhciBzdWJzY3JpcHRpb25zID0gW107XG5cdFx0XHRfLmVhY2godGhpcy5vcHRpb25zLCAob3B0aW9uOiBRdWVzdGlvbk9wdGlvbik9PiB7XG5cdFx0XHRcdG9wdGlvbi5xdWVzdGlvbl9pZCA9IHRoaXMucXVlc3Rpb24uaWQ7XG5cdFx0XHRcdHN1YnNjcmlwdGlvbnMucHVzaChvcHRpb24uc2F2ZSh0aGlzKSk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBPYnNlcnZhYmxlLmZvcmtKb2luKC4uLnN1YnNjcmlwdGlvbnMpO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uY2x1ZGVBbnN3ZXIoKSB7XG5cdFx0dmFyIG9wdGlvbiA9IF8uZmluZCh0aGlzLm9wdGlvbnMsIChvYmopPT4ge1xuXHRcdFx0cmV0dXJuIG9iai5pZCA9PSB0aGlzLmFuc3dlci5vcHRpb25faWQ7XG5cdFx0fSk7XG5cdFx0aWYgKG9wdGlvbilcblx0XHRcdHRoaXMuYW5zd2VyLmlzX2NvcnJlY3QgPSAgb3B0aW9uLmlzX2NvcnJlY3Q7XG5cdH1cblxuXHRhZGRPcHRpb24oKSB7XG5cdFx0dGhpcy5vcHRpb25zLnB1c2gobmV3IFF1ZXN0aW9uT3B0aW9uKCkpO1xuXHR9XG5cblx0c2V0T3B0aW9uQ29ycmVjdChvcHRpb24pIHtcblx0XHRpZiAob3B0aW9uLmlzX2NvcnJlY3QpIHtcblx0XHRcdF8uZWFjaCh0aGlzLm9wdGlvbnMsIChvcHRpb24pPT4ge1xuXHRcdFx0XHRvcHRpb24uaXNfY29ycmVjdCA9IGZhbHNlO1xuXHRcdFx0fSk7XG5cdFx0XHRvcHRpb24uaXNfY29ycmVjdCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0cmVtb3ZlT3B0aW9uKG9wdGlvbjogUXVlc3Rpb25PcHRpb24pIHtcblx0XHRpZiAob3B0aW9uLmlkKSB7XG5cdFx0XHRvcHRpb24uZGVsZXRlKHRoaXMpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMub3B0aW9ucyA9IF8ucmVqZWN0KHRoaXMub3B0aW9ucywgKG9iaik9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIG9iaiA9PSBvcHRpb247XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSlcblx0XHR9IGVsc2Vcblx0XHRcdHRoaXMub3B0aW9ucyA9IF8ucmVqZWN0KHRoaXMub3B0aW9ucywgKG9iaik9PiB7XG5cdFx0XHRcdHJldHVybiBvYmogPT0gb3B0aW9uO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuIl19
