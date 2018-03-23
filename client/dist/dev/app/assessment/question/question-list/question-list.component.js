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
var constants_1 = require("../../../shared/models/constants");
var question_model_1 = require("../../../shared/models/question.model");
var group_model_1 = require("../../../shared/models/group.model");
var question_dialog_component_1 = require("../question-dialog/question-dialog.component");
var tree_utils_1 = require("../../../shared/helpers/tree.utils");
var import_dialog_component_1 = require("../import-dialog/import-dialog.component");
var QuestionListComponent = (function (_super) {
    __extends(QuestionListComponent, _super);
    function QuestionListComponent() {
        var _this = _super.call(this) || this;
        _this.QUESTION_TYPE = constants_1.QUESTION_TYPE;
        _this.treeUtils = new tree_utils_1.TreeUtils();
        return _this;
    }
    QuestionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        group_model_1.Group.listByCategory(this, constants_1.GROUP_CATEGORY.QUESTION).subscribe(function (groups) {
            _this.tree = _this.treeUtils.buildTree(groups);
        });
        this.loadQuestions();
        this.items = [
            { label: this.translateService.instant(constants_1.QUESTION_TYPE['sc']), command: function () { _this.add('sc'); } },
            { label: this.translateService.instant(constants_1.QUESTION_TYPE['ext']), command: function () { _this.add('ext'); } },
        ];
    };
    QuestionListComponent.prototype.add = function (type) {
        var _this = this;
        var question = new question_model_1.Question();
        question.type = type;
        this.questionDialog.show(question);
        this.questionDialog.onCreateComplete.subscribe(function () {
            _this.loadQuestions();
        });
    };
    QuestionListComponent.prototype.edit = function () {
        var _this = this;
        if (this.selectedQuestion)
            this.questionDialog.show(this.selectedQuestion);
        this.questionDialog.onUpdateComplete.subscribe(function () {
            _this.loadQuestions();
        });
    };
    QuestionListComponent.prototype.delete = function () {
        var _this = this;
        if (this.selectedQuestion)
            this.confirmationService.confirm({
                message: this.translateService.instant('Are you sure to delete ?'),
                accept: function () {
                    _this.selectedQuestion.delete(_this).subscribe(function () {
                        _this.loadQuestions();
                        _this.selectedQuestion = null;
                    });
                }
            });
    };
    QuestionListComponent.prototype.loadQuestions = function () {
        var _this = this;
        if (this.selectedNode)
            question_model_1.Question.listByGroup(this, this.selectedNode.data.id).subscribe(function (questions) {
                _this.questions = questions;
            });
        else
            question_model_1.Question.all(this).subscribe(function (questions) {
                _this.questions = questions;
            });
    };
    QuestionListComponent.prototype.nodeSelect = function (event) {
        this.loadQuestions();
    };
    QuestionListComponent.prototype.import = function () {
        var _this = this;
        this.questionImportDialog.show();
        this.questionImportDialog.onImportComplete.subscribe(function () {
            _this.loadQuestions();
        });
    };
    __decorate([
        core_1.ViewChild(question_dialog_component_1.QuestionDialog),
        __metadata("design:type", question_dialog_component_1.QuestionDialog)
    ], QuestionListComponent.prototype, "questionDialog", void 0);
    __decorate([
        core_1.ViewChild(import_dialog_component_1.QuestionImportDialog),
        __metadata("design:type", import_dialog_component_1.QuestionImportDialog)
    ], QuestionListComponent.prototype, "questionImportDialog", void 0);
    QuestionListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'etraining-question-list',
            templateUrl: 'question-list.component.html',
            styleUrls: ['question-list.component.css'],
        }),
        __metadata("design:paramtypes", [])
    ], QuestionListComponent);
    return QuestionListComponent;
}(base_component_1.BaseComponent));
exports.QuestionListComponent = QuestionListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hc3Nlc3NtZW50L3F1ZXN0aW9uL3F1ZXN0aW9uLWxpc3QvcXVlc3Rpb24tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQW9FO0FBRXBFLGlGQUErRTtBQUkvRSw4REFBZ0Y7QUFDaEYsd0VBQWlFO0FBQ2pFLGtFQUEyRDtBQUMzRCwwRkFBOEU7QUFDOUUsaUVBQStEO0FBRS9ELG9GQUFnRjtBQVFoRjtJQUEyQyx5Q0FBYTtJQWFwRDtRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQU5ELG1CQUFhLEdBQUcseUJBQWEsQ0FBQztRQUsxQixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDOztJQUNyQyxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsbUJBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFDLDBCQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUMvRCxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLHlCQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsY0FBTyxLQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUEsQ0FBQyxFQUFDO1lBQzVGLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMseUJBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxjQUFPLEtBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxD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QztTQUM3QyxDQUFDOztPQUNXLHFCQUFxQixDQWlGakM7SUFBRCw0QkFBQztDQWpGRCxBQWlGQyxDQWpGMEMsOEJBQWEsR0FpRnZEO0FBakZZLHNEQUFxQiIsImZpbGUiOiJhcHAvYXNzZXNzbWVudC9xdWVzdGlvbi9xdWVzdGlvbi1saXN0L3F1ZXN0aW9uLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2Jhc2UvYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQVBJU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7IFFVRVNUSU9OX1RZUEUsIEdST1VQX0NBVEVHT1JZIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9jb25zdGFudHMnXG5pbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvcXVlc3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2dyb3VwLm1vZGVsJztcbmltcG9ydCB7IFF1ZXN0aW9uRGlhbG9nIH0gZnJvbSAnLi4vcXVlc3Rpb24tZGlhbG9nL3F1ZXN0aW9uLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2hlbHBlcnMvdHJlZS51dGlscyc7XG5pbXBvcnQgeyBUcmVlTm9kZSwgTWVudUl0ZW0gfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBRdWVzdGlvbkltcG9ydERpYWxvZyB9IGZyb20gJy4uL2ltcG9ydC1kaWFsb2cvaW1wb3J0LWRpYWxvZy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZXRyYWluaW5nLXF1ZXN0aW9uLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAncXVlc3Rpb24tbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3F1ZXN0aW9uLWxpc3QuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkxpc3RDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuICAgIEBWaWV3Q2hpbGQoUXVlc3Rpb25EaWFsb2cpIHF1ZXN0aW9uRGlhbG9nOiBRdWVzdGlvbkRpYWxvZztcbiAgICBAVmlld0NoaWxkKFF1ZXN0aW9uSW1wb3J0RGlhbG9nKSBxdWVzdGlvbkltcG9ydERpYWxvZzogUXVlc3Rpb25JbXBvcnREaWFsb2c7XG5cbiAgICB0cmVlOiBUcmVlTm9kZVtdO1xuICAgIGl0ZW1zOiBNZW51SXRlbVtdO1xuICAgIHNlbGVjdGVkUXVlc3Rpb246IFF1ZXN0aW9uO1xuICAgIHF1ZXN0aW9uczogUXVlc3Rpb25bXTtcbiAgICBzZWxlY3RlZE5vZGU6IFRyZWVOb2RlO1xuICAgIFFVRVNUSU9OX1RZUEUgPSBRVUVTVElPTl9UWVBFO1xuICAgIHRyZWVVdGlsczogVHJlZVV0aWxzO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHJlZVV0aWxzID0gbmV3IFRyZWVVdGlscygpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBHcm91cC5saXN0QnlDYXRlZ29yeSh0aGlzLEdST1VQX0NBVEVHT1JZLlFVRVNUSU9OKS5zdWJzY3JpYmUoZ3JvdXBzID0+IHtcbiAgICAgICAgICAgIHRoaXMudHJlZSA9IHRoaXMudHJlZVV0aWxzLmJ1aWxkVHJlZShncm91cHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sb2FkUXVlc3Rpb25zKCk7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXG4gICAgICAgICAgICB7bGFiZWw6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KFFVRVNUSU9OX1RZUEVbJ3NjJ10pLCBjb21tYW5kOiAoKT0+IHsgdGhpcy5hZGQoJ3NjJyl9fSxcbiAgICAgICAgICAgIHtsYWJlbDogdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoUVVFU1RJT05fVFlQRVsnZXh0J10pLCBjb21tYW5kOiAoKT0+IHsgdGhpcy5hZGQoJ2V4dCcpfX0sXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgYWRkKHR5cGU6c3RyaW5nKSB7XG4gICAgICAgIHZhciBxdWVzdGlvbiA9IG5ldyBRdWVzdGlvbigpO1xuICAgICAgICBxdWVzdGlvbi50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbkRpYWxvZy5zaG93KHF1ZXN0aW9uKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbkRpYWxvZy5vbkNyZWF0ZUNvbXBsZXRlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRRdWVzdGlvbnMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZWRpdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRRdWVzdGlvbilcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25EaWFsb2cuc2hvdyh0aGlzLnNlbGVjdGVkUXVlc3Rpb24pO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uRGlhbG9nLm9uVXBkYXRlQ29tcGxldGUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZFF1ZXN0aW9ucygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkUXVlc3Rpb24pXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1hdGlvblNlcnZpY2UuY29uZmlybSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ0FyZSB5b3Ugc3VyZSB0byBkZWxldGUgPycpLFxuICAgICAgICAgICAgICAgIGFjY2VwdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkUXVlc3Rpb24uZGVsZXRlKHRoaXMpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRRdWVzdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRRdWVzdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZFF1ZXN0aW9ucygpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWROb2RlKVxuICAgICAgICAgICAgUXVlc3Rpb24ubGlzdEJ5R3JvdXAodGhpcywgdGhpcy5zZWxlY3RlZE5vZGUuZGF0YS5pZCkuc3Vic2NyaWJlKHF1ZXN0aW9ucyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSBxdWVzdGlvbnM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgUXVlc3Rpb24uYWxsKHRoaXMpLnN1YnNjcmliZShxdWVzdGlvbnMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zID0gcXVlc3Rpb25zO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm9kZVNlbGVjdChldmVudDphbnkpIHtcbiAgICAgICAgdGhpcy5sb2FkUXVlc3Rpb25zKCk7XG4gICAgfVxuXG4gICAgaW1wb3J0KCkge1xuICAgICAgICB0aGlzLnF1ZXN0aW9uSW1wb3J0RGlhbG9nLnNob3coKTtcbiAgICAgICAgdGhpcy5xdWVzdGlvbkltcG9ydERpYWxvZy5vbkltcG9ydENvbXBsZXRlLnN1YnNjcmliZSgoKT0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZFF1ZXN0aW9ucygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn0iXX0=
