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
var group_model_1 = require("../../models/group.model");
var base_component_1 = require("../base/base.component");
var question_model_1 = require("../../models/question.model");
var tree_utils_1 = require("../../helpers/tree.utils");
var constants_1 = require("../../../shared/models/constants");
var SelectQuestionsDialog = (function (_super) {
    __extends(SelectQuestionsDialog, _super);
    function SelectQuestionsDialog() {
        var _this = _super.call(this) || this;
        _this.QUESTION_TYPE = constants_1.QUESTION_TYPE;
        _this.onSelectQuestionsReceiver = new Rx_1.Subject();
        _this.onSelectQuestions = _this.onSelectQuestionsReceiver.asObservable();
        _this.treeUtils = new tree_utils_1.TreeUtils();
        _this.display = false;
        _this.selectedQuestions = [];
        _this.questions = [];
        return _this;
    }
    SelectQuestionsDialog.prototype.hide = function () {
        this.display = false;
    };
    SelectQuestionsDialog.prototype.nodeSelect = function (event) {
        var _this = this;
        if (this.selectedNode) {
            question_model_1.Question.listByGroup(this, this.selectedNode.data.id).subscribe(function (questions) {
                _this.questions = questions;
            });
        }
    };
    SelectQuestionsDialog.prototype.show = function () {
        var _this = this;
        this.display = true;
        group_model_1.Group.listByCategory(this, constants_1.GROUP_CATEGORY.QUESTION).subscribe(function (groups) {
            _this.tree = _this.treeUtils.buildTree(groups);
        });
    };
    SelectQuestionsDialog.prototype.selectCourse = function () {
        this.onSelectQuestionsReceiver.next(this.selectedQuestions);
        this.hide();
    };
    SelectQuestionsDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'select-question-dialog',
            templateUrl: 'select-question-dialog.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], SelectQuestionsDialog);
    return SelectQuestionsDialog;
}(base_component_1.BaseComponent));
exports.SelectQuestionsDialog = SelectQuestionsDialog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy9zZWxlY3QtcXVlc3Rpb24tZGlhbG9nL3NlbGVjdC1xdWVzdGlvbi1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF5RDtBQUN6RCw4QkFBOEM7QUFDOUMsd0RBQWlEO0FBQ2pELHlEQUF1RDtBQUN2RCw4REFBdUQ7QUFFdkQsdURBQXFEO0FBRXJELDhEQUFnRjtBQVFoRjtJQUEyQyx5Q0FBYTtJQWF2RDtRQUFBLFlBQ0MsaUJBQU8sU0FLUDtRQVpELG1CQUFhLEdBQUkseUJBQWEsQ0FBQztRQUd2QiwrQkFBeUIsR0FBaUIsSUFBSSxZQUFPLEVBQUUsQ0FBQztRQUM3RCx1QkFBaUIsR0FBb0IsS0FBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRSxDQUFDO1FBSXJGLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxzQkFBUyxFQUFFLENBQUM7UUFDakMsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsS0FBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUM1QixLQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzs7SUFDckIsQ0FBQztJQUVELG9DQUFJLEdBQUo7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsMENBQVUsR0FBVixVQUFXLEtBQVU7UUFBckIsaUJBTUM7UUFMQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN2Qix5QkFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsU0FBUztnQkFDdkUsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDO0lBQ0YsQ0FBQztJQUVELG9DQUFJLEdBQUo7UUFBQSxpQkFLQztRQUpBLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLG1CQUFLLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSwwQkFBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDbkUsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCw0Q0FBWSxHQUFaO1FBQ0MsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDYixDQUFDO0lBM0NXLHFCQUFxQjtRQUxqQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsV0FBVyxFQUFFLHVDQUF1QztTQUNwRCxDQUFDOztPQUNXLHFCQUFxQixDQThDakM7SUFBRCw0QkFBQztDQTlDRCxBQThDQyxDQTlDMEMsOEJBQWEsR0E4Q3ZEO0FBOUNZLHNEQUFxQiIsImZpbGUiOiJhcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VsZWN0LXF1ZXN0aW9uLWRpYWxvZy9zZWxlY3QtcXVlc3Rpb24tZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ3JvdXAubW9kZWwnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvcXVlc3Rpb24ubW9kZWwnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7IFRyZWVVdGlscyB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdHJlZS51dGlscyc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IEdST1VQX0NBVEVHT1JZLCBRVUVTVElPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9jb25zdGFudHMnXG5pbXBvcnQgeyBTZWxlY3RJdGVtIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdzZWxlY3QtcXVlc3Rpb24tZGlhbG9nJyxcblx0dGVtcGxhdGVVcmw6ICdzZWxlY3QtcXVlc3Rpb24tZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0UXVlc3Rpb25zRGlhbG9nIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cblx0dHJlZTogVHJlZU5vZGVbXTtcblx0c2VsZWN0ZWROb2RlOiBUcmVlTm9kZTtcblx0c2VsZWN0ZWRRdWVzdGlvbnM6IFF1ZXN0aW9uW107XG5cdHF1ZXN0aW9uczpRdWVzdGlvbltdO1xuXHRkaXNwbGF5OiBib29sZWFuO1xuXHRRVUVTVElPTl9UWVBFID0gIFFVRVNUSU9OX1RZUEU7XG5cdHRyZWVVdGlsczogVHJlZVV0aWxzO1xuXG5cdHByaXZhdGUgb25TZWxlY3RRdWVzdGlvbnNSZWNlaXZlcjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgICBvblNlbGVjdFF1ZXN0aW9uczpPYnNlcnZhYmxlPGFueT4gPSAgdGhpcy5vblNlbGVjdFF1ZXN0aW9uc1JlY2VpdmVyLmFzT2JzZXJ2YWJsZSgpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy50cmVlVXRpbHMgPSBuZXcgVHJlZVV0aWxzKCk7XG5cdFx0dGhpcy5kaXNwbGF5ID0gZmFsc2U7XG5cdFx0dGhpcy5zZWxlY3RlZFF1ZXN0aW9ucyA9IFtdO1xuXHRcdHRoaXMucXVlc3Rpb25zID0gW107XG5cdH1cblxuXHRoaWRlKCkge1xuXHRcdHRoaXMuZGlzcGxheSA9IGZhbHNlO1xuXHR9XG5cblx0bm9kZVNlbGVjdChldmVudDogYW55KSB7XG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWROb2RlKSB7XG5cdFx0XHRRdWVzdGlvbi5saXN0QnlHcm91cCh0aGlzLHRoaXMuc2VsZWN0ZWROb2RlLmRhdGEuaWQpLnN1YnNjcmliZShxdWVzdGlvbnMgPT4ge1xuXHRcdFx0XHR0aGlzLnF1ZXN0aW9ucyA9IHF1ZXN0aW9ucztcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHNob3coKSB7XG5cdFx0dGhpcy5kaXNwbGF5ID0gdHJ1ZTtcblx0XHRHcm91cC5saXN0QnlDYXRlZ29yeSh0aGlzLCBHUk9VUF9DQVRFR09SWS5RVUVTVElPTikuc3Vic2NyaWJlKGdyb3VwcyA9PiB7XG5cdFx0XHR0aGlzLnRyZWUgPSB0aGlzLnRyZWVVdGlscy5idWlsZFRyZWUoZ3JvdXBzKTtcblx0XHR9KTtcblx0fVxuXG5cdHNlbGVjdENvdXJzZSgpIHtcblx0XHR0aGlzLm9uU2VsZWN0UXVlc3Rpb25zUmVjZWl2ZXIubmV4dCh0aGlzLnNlbGVjdGVkUXVlc3Rpb25zKTtcblx0XHR0aGlzLmhpZGUoKTtcblx0fVxuXG5cbn1cblxuIl19
