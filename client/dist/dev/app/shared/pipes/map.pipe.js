"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ValuesPipe = (function () {
    function ValuesPipe() {
    }
    ValuesPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return Object.keys(value).map(function (key) { return value[key]; });
    };
    ValuesPipe = __decorate([
        core_1.Pipe({ name: 'values', pure: false })
    ], ValuesPipe);
    return ValuesPipe;
}());
exports.ValuesPipe = ValuesPipe;
var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return Object.keys(value);
    };
    KeysPipe = __decorate([
        core_1.Pipe({ name: 'keys', pure: false })
    ], KeysPipe);
    return KeysPipe;
}());
exports.KeysPipe = KeysPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGlwZXMvbWFwLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBb0Q7QUFHcEQ7SUFBQTtJQUlBLENBQUM7SUFIQyw4QkFBUyxHQUFULFVBQVUsS0FBVSxFQUFFLElBQWtCO1FBQWxCLHFCQUFBLEVBQUEsV0FBa0I7UUFDdEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFIVSxVQUFVO1FBRHRCLFdBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO09BQzFCLFVBQVUsQ0FJdEI7SUFBRCxpQkFBQztDQUpELEFBSUMsSUFBQTtBQUpZLGdDQUFVO0FBT3ZCO0lBQUE7SUFJQSxDQUFDO0lBSEMsNEJBQVMsR0FBVCxVQUFVLEtBQVUsRUFBRSxJQUFrQjtRQUFsQixxQkFBQSxFQUFBLFdBQWtCO1FBQ3RDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFIVSxRQUFRO1FBRHBCLFdBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUcsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO09BQ3hCLFFBQVEsQ0FJcEI7SUFBRCxlQUFDO0NBSkQsQUFJQyxJQUFBO0FBSlksNEJBQVEiLCJmaWxlIjoiYXBwL3NoYXJlZC9waXBlcy9tYXAucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoeyBuYW1lOiAndmFsdWVzJywgIHB1cmU6IGZhbHNlIH0pXG5leHBvcnQgY2xhc3MgVmFsdWVzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJnczogYW55W10gPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLm1hcChrZXkgPT4gdmFsdWVba2V5XSk7XG4gIH1cbn1cblxuQFBpcGUoeyBuYW1lOiAna2V5cycsICBwdXJlOiBmYWxzZSB9KVxuZXhwb3J0IGNsYXNzIEtleXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhcmdzOiBhbnlbXSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gIH1cbn0iXX0=
