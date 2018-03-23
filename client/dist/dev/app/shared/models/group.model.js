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
var Group = (function (_super) {
    __extends(Group, _super);
    function Group() {
        var _this = _super.call(this) || this;
        _this.name = undefined;
        _this.category = undefined;
        _this.order = undefined;
        _this.code = undefined;
        _this.parent_id = undefined;
        return _this;
    }
    Group_1 = Group;
    Group.listByCategory = function (context, category) {
        return Group_1.search(context, [], "[('category','=','" + category + "')]");
    };
    Group = Group_1 = __decorate([
        decorator_1.Model('res.groups'),
        __metadata("design:paramtypes", [])
    ], Group);
    return Group;
    var Group_1;
}(base_model_1.BaseModel));
exports.Group = Group;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWxzL2dyb3VwLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUF5QztBQUV6Qyx5Q0FBb0M7QUFLcEM7SUFBMkIseUJBQVM7SUFHaEM7UUFBQSxZQUNJLGlCQUFPLFNBT2I7UUFMQSxLQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN0QixLQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUMxQixLQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN2QixLQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUNoQixLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzs7SUFDbEMsQ0FBQztjQVhXLEtBQUs7SUFtQlAsb0JBQWMsR0FBckIsVUFBc0IsT0FBa0IsRUFBRSxRQUFRO1FBQzlDLE1BQU0sQ0FBQyxPQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUUsb0JBQW9CLEdBQUMsUUFBUSxHQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFyQlEsS0FBSztRQURqQixpQkFBSyxDQUFDLFlBQVksQ0FBQzs7T0FDUCxLQUFLLENBdUJqQjtJQUFELFlBQUM7O0NBdkJELEFBdUJDLENBdkIwQixzQkFBUyxHQXVCbkM7QUF2Qlksc0JBQUsiLCJmaWxlIjoiYXBwL3NoYXJlZC9tb2RlbHMvZ3JvdXAubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHUk9VUF9DQVRFR09SWX0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi9iYXNlLm1vZGVsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi9kZWNvcmF0b3InO1xuaW1wb3J0IHsgQVBJQ29udGV4dCB9IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5ATW9kZWwoJ3Jlcy5ncm91cHMnKVxuZXhwb3J0IGNsYXNzIEdyb3VwIGV4dGVuZHMgQmFzZU1vZGVse1xuXG4gICAgLy8gRGVmYXVsdCBjb25zdHJ1Y3RvciB3aWxsIGJlIGNhbGxlZCBieSBtYXBwZXJcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuXHRcdFxuXHRcdHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcblx0XHR0aGlzLmNhdGVnb3J5ID0gdW5kZWZpbmVkO1xuXHRcdHRoaXMub3JkZXIgPSB1bmRlZmluZWQ7XG5cdFx0dGhpcy5jb2RlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnBhcmVudF9pZCA9IHVuZGVmaW5lZDtcblx0fVxuXG4gICAgbmFtZTpzdHJpbmc7XG4gICAgY2F0ZWdvcnk6IHN0cmluZztcbiAgICBjb2RlOiBzdHJpbmc7XG4gICAgb3JkZXI6IHN0cmluZztcbiAgICBwYXJlbnRfaWQ6IG51bWJlcjtcblxuICAgIHN0YXRpYyBsaXN0QnlDYXRlZ29yeShjb250ZXh0OkFQSUNvbnRleHQsIGNhdGVnb3J5KTpPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gR3JvdXAuc2VhcmNoKGNvbnRleHQsW10sIFwiWygnY2F0ZWdvcnknLCc9JywnXCIrY2F0ZWdvcnkrXCInKV1cIik7XG4gICAgfVxuXG59XG4iXX0=
