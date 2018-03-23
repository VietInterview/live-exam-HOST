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
var base_model_1 = require("./base.model");
var decorator_1 = require("./decorator");
var QuestionSelector = (function (_super) {
    __extends(QuestionSelector, _super);
    function QuestionSelector() {
        var _this = _super.call(this) || this;
        _this.number = undefined;
        _this.level = undefined;
        _this.group_id = undefined;
        _this.mode = undefined;
        _this.include_sub_group = undefined;
        return _this;
    }
    QuestionSelector = __decorate([
        decorator_1.Model('liveexam.question_selector'),
        __metadata("design:paramtypes", [])
    ], QuestionSelector);
    return QuestionSelector;
}(base_model_1.BaseModel));
exports.QuestionSelector = QuestionSelector;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWxzL3F1ZXN0aW9uX3NlbGVjdG9yLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUF5QztBQUV6Qyx5Q0FBb0M7QUFJcEM7SUFBc0Msb0NBQVM7SUFFM0M7UUFBQSxZQUNJLGlCQUFPLFNBTVY7UUFMRyxLQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUN4QixLQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN2QixLQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUMxQixLQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN0QixLQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDOztJQUN2QyxDQUFDO0lBVFEsZ0JBQWdCO1FBRDVCLGlCQUFLLENBQUMsNEJBQTRCLENBQUM7O09BQ3ZCLGdCQUFnQixDQWdCNUI7SUFBRCx1QkFBQztDQWhCRCxBQWdCQyxDQWhCcUMsc0JBQVMsR0FnQjlDO0FBaEJZLDRDQUFnQiIsImZpbGUiOiJhcHAvc2hhcmVkL21vZGVscy9xdWVzdGlvbl9zZWxlY3Rvci5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdST1VQX0NBVEVHT1JZfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuL2Jhc2UubW9kZWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL2RlY29yYXRvcic7XG5pbXBvcnQgeyBBUElDb250ZXh0IH0gZnJvbSAnLi9jb250ZXh0JztcblxuQE1vZGVsKCdsaXZlZXhhbS5xdWVzdGlvbl9zZWxlY3RvcicpXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25TZWxlY3RvciBleHRlbmRzIEJhc2VNb2RlbHtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubnVtYmVyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmxldmVsID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmdyb3VwX2lkID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm1vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaW5jbHVkZV9zdWJfZ3JvdXAgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgbW9kZTogc3RyaW5nO1xuICAgIG51bWJlcjogbnVtYmVyO1xuICAgIGxldmVsOiBudW1iZXI7XG4gICAgZ3JvdXBfaWQ6IG51bWJlcjtcbiAgICBpbmNsdWRlX3N1Yl9ncm91cDogYm9vbGVhbjtcbn1cbiJdfQ==
