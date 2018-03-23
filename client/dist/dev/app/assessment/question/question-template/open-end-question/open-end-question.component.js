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
var base_component_1 = require("../../../../shared/components/base/base.component");
var question_decorator_1 = require("../question.decorator");
var OpenEndQuestionComponent = (function (_super) {
    __extends(OpenEndQuestionComponent, _super);
    function OpenEndQuestionComponent() {
        return _super.call(this) || this;
    }
    OpenEndQuestionComponent.prototype.render = function (question, answer) {
        this.question = question;
        this.answer = answer;
    };
    OpenEndQuestionComponent.prototype.saveEditor = function () {
        return this.question.save(this);
    };
    OpenEndQuestionComponent.prototype.concludeAnswer = function () {
        return;
    };
    OpenEndQuestionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-open-end-question',
            templateUrl: 'open-end-question.component.html',
            styleUrls: ['open-end-question.component.css'],
        }),
        question_decorator_1.QuestionTemplate({
            type: 'ext'
        }),
        __metadata("design:paramtypes", [])
    ], OpenEndQuestionComponent);
    return OpenEndQuestionComponent;
}(base_component_1.BaseComponent));
exports.OpenEndQuestionComponent = OpenEndQuestionComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3Nlc3NtZW50L3F1ZXN0aW9uL3F1ZXN0aW9uLXRlbXBsYXRlL29wZW4tZW5kLXF1ZXN0aW9uL29wZW4tZW5kLXF1ZXN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUQ7QUFLekQsb0ZBQWtGO0FBSWxGLDREQUF5RDtBQVl6RDtJQUE4Qyw0Q0FBYTtJQU0xRDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQztJQUVELHlDQUFNLEdBQU4sVUFBTyxRQUFRLEVBQUUsTUFBTztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBRUQsNkNBQVUsR0FBVjtRQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsaURBQWMsR0FBZDtRQUNDLE1BQU0sQ0FBQztJQUNSLENBQUM7SUFyQlcsd0JBQXdCO1FBVHBDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQzlDLENBQUM7UUFDRCxxQ0FBZ0IsQ0FBQztZQUNqQixJQUFJLEVBQUMsS0FBSztTQUNWLENBQUM7O09BQ1csd0JBQXdCLENBdUJwQztJQUFELCtCQUFDO0NBdkJELEFBdUJDLENBdkI2Qyw4QkFBYSxHQXVCMUQ7QUF2QlksNERBQXdCIiwiZmlsZSI6ImFwcC9hc3Nlc3NtZW50L3F1ZXN0aW9uL3F1ZXN0aW9uLXRlbXBsYXRlL29wZW4tZW5kLXF1ZXN0aW9uL29wZW4tZW5kLXF1ZXN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvbW9kZWxzL3F1ZXN0aW9uLm1vZGVsJztcbmltcG9ydCB7IFF1ZXN0aW9uT3B0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9vcHRpb24ubW9kZWwnO1xuaW1wb3J0IHsgQW5zd2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9hbnN3ZXIubW9kZWwnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2Jhc2UvYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7IERFRkFVTFRfUEFTU1dPUkQsIEdST1VQX0NBVEVHT1JZIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBRdWVzdGlvblRlbXBsYXRlIH0gZnJvbSAnLi4vcXVlc3Rpb24uZGVjb3JhdG9yJztcbmltcG9ydCB7IElRdWVzdGlvbiB9IGZyb20gJy4uL3F1ZXN0aW9uLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ2V0cmFpbmluZy1vcGVuLWVuZC1xdWVzdGlvbicsXG5cdHRlbXBsYXRlVXJsOiAnb3Blbi1lbmQtcXVlc3Rpb24uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnb3Blbi1lbmQtcXVlc3Rpb24uY29tcG9uZW50LmNzcyddLFxufSlcbkBRdWVzdGlvblRlbXBsYXRlKHtcblx0dHlwZTonZXh0J1xufSlcbmV4cG9ydCBjbGFzcyBPcGVuRW5kUXVlc3Rpb25Db21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgSVF1ZXN0aW9ue1xuXG5cdG1vZGU6YW55O1xuXHRxdWVzdGlvbjpRdWVzdGlvbjtcblx0YW5zd2VyOiBBbnN3ZXI7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHJlbmRlcihxdWVzdGlvbiwgYW5zd2VyPykge1xuXHRcdHRoaXMucXVlc3Rpb24gPSBxdWVzdGlvbjtcblx0XHR0aGlzLmFuc3dlciA9IGFuc3dlcjtcblx0fVxuXHRcblx0c2F2ZUVkaXRvcigpOk9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMucXVlc3Rpb24uc2F2ZSh0aGlzKTtcblx0fVxuXG5cdGNvbmNsdWRlQW5zd2VyKCkge1xuXHRcdHJldHVybjtcblx0fVxuXG59XG5cbiJdfQ==
