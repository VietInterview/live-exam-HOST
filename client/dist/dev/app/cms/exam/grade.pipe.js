"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ValidateGradePipe = (function () {
    function ValidateGradePipe() {
    }
    ValidateGradePipe.prototype.transform = function (grades, scale) {
        if (scale === void 0) { scale = null; }
        if (!scale || !grades || !grades.length)
            return false;
        for (var i = 0; i < grades.length; i++) {
            var grade = grades[i];
            if (grade.min_score == null || grade.max_score == null)
                return true;
            if (+grade.min_score < 0)
                return true;
            if (+grade.max_score > +scale)
                return true;
            if (+grade.max_score < +grade.min_score)
                return true;
            var prevGrade = i > 0 ? grades[i - 1] : null;
            if (prevGrade && +prevGrade.max_score + 1 != +grade.min_score)
                return true;
        }
        return false;
    };
    ValidateGradePipe = __decorate([
        core_1.Pipe({ name: 'validateGrade', pure: false })
    ], ValidateGradePipe);
    return ValidateGradePipe;
}());
exports.ValidateGradePipe = ValidateGradePipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jbXMvZXhhbS9ncmFkZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQW9EO0FBSXBEO0lBQUE7SUFxQkEsQ0FBQztJQW5CQyxxQ0FBUyxHQUFULFVBQVUsTUFBYSxFQUFFLEtBQWlCO1FBQWpCLHNCQUFBLEVBQUEsWUFBaUI7UUFDekMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBRSxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3hDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDYixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRSxDQUFDLEVBQUMsQ0FBQyxHQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNuQyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUM7Z0JBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDYixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUUsQ0FBQyxDQUFDO2dCQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2IsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2IsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztnQkFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNiLElBQUksU0FBUyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFBLE1BQU0sQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQztZQUNyQyxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7Z0JBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFwQlUsaUJBQWlCO1FBRDdCLFdBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUcsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO09BQ2pDLGlCQUFpQixDQXFCN0I7SUFBRCx3QkFBQztDQXJCRCxBQXFCQyxJQUFBO0FBckJZLDhDQUFpQiIsImZpbGUiOiJhcHAvY21zL2V4YW0vZ3JhZGUucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ3ZhbGlkYXRlR3JhZGUnLCAgcHVyZTogZmFsc2UgfSlcbmV4cG9ydCBjbGFzcyBWYWxpZGF0ZUdyYWRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXHQvLyByZXR1cm4gdHJ1ZSBpZiB2YWxpZGF0aW9uIGZhaWxlZFxuICB0cmFuc2Zvcm0oZ3JhZGVzOiBhbnlbXSwgc2NhbGU6IGFueSA9IG51bGwpOiBhbnkge1xuICBcdGlmICghc2NhbGUgfHwgISBncmFkZXMgfHwgIWdyYWRlcy5sZW5ndGgpXG4gIFx0XHRyZXR1cm4gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9MDtpPGdyYWRlcy5sZW5ndGg7aSsrKSB7XG4gICAgXHR2YXIgZ3JhZGUgPSBncmFkZXNbaV07XG4gICAgXHRpZiAoZ3JhZGUubWluX3Njb3JlID09IG51bGwgfHwgZ3JhZGUubWF4X3Njb3JlID09IG51bGwpXG4gICAgXHRcdHJldHVybiB0cnVlO1xuICAgIFx0aWYgKCtncmFkZS5taW5fc2NvcmUgPDApXG4gICAgXHRcdHJldHVybiB0cnVlO1xuICAgIFx0aWYgKCtncmFkZS5tYXhfc2NvcmUgPiArc2NhbGUpXG4gICAgXHRcdHJldHVybiB0cnVlO1xuICAgIFx0aWYgKCtncmFkZS5tYXhfc2NvcmUgPCArZ3JhZGUubWluX3Njb3JlKVxuICAgIFx0XHRyZXR1cm4gdHJ1ZTtcbiAgICBcdHZhciBwcmV2R3JhZGUgPSBpPjA/Z3JhZGVzW2ktMV06bnVsbDtcbiAgICBcdGlmIChwcmV2R3JhZGUgJiYgK3ByZXZHcmFkZS5tYXhfc2NvcmUrMSAhPSArZ3JhZGUubWluX3Njb3JlKVxuICAgIFx0XHRyZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59Il19
