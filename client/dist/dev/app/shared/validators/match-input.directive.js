"use strict";
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
var forms_1 = require("@angular/forms");
function matchInputValidator(input) {
    return function (control) {
        return input != control.value ? { 'matchInput': {} } : null;
    };
}
exports.matchInputValidator = matchInputValidator;
var MatchInputValidatorDirective = (function () {
    function MatchInputValidatorDirective() {
    }
    MatchInputValidatorDirective_1 = MatchInputValidatorDirective;
    MatchInputValidatorDirective.prototype.validate = function (control) {
        return this.matchInput ? matchInputValidator(this.matchInput)(control) : null;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MatchInputValidatorDirective.prototype, "matchInput", void 0);
    MatchInputValidatorDirective = MatchInputValidatorDirective_1 = __decorate([
        core_1.Directive({
            selector: '[matchInput]',
            providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: MatchInputValidatorDirective_1, multi: true }]
        })
    ], MatchInputValidatorDirective);
    return MatchInputValidatorDirective;
    var MatchInputValidatorDirective_1;
}());
exports.MatchInputValidatorDirective = MatchInputValidatorDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdmFsaWRhdG9ycy9tYXRjaC1pbnB1dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBMkU7QUFDM0Usd0NBQW9HO0FBRXBHLDZCQUFvQyxLQUFhO0lBQy9DLE1BQU0sQ0FBQyxVQUFDLE9BQXdCO1FBQzlCLE1BQU0sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQyxZQUFZLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM1RCxDQUFDLENBQUM7QUFDSixDQUFDO0FBSkQsa0RBSUM7QUFNRDtJQUFBO0lBTUEsQ0FBQztxQ0FOWSw0QkFBNEI7SUFHdkMsK0NBQVEsR0FBUixVQUFTLE9BQXdCO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNoRixDQUFDO0lBSlE7UUFBUixZQUFLLEVBQUU7O29FQUFvQjtJQURqQiw0QkFBNEI7UUFKeEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLHFCQUFhLEVBQUUsV0FBVyxFQUFFLDhCQUE0QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztTQUM5RixDQUFDO09BQ1csNEJBQTRCLENBTXhDO0lBQUQsbUNBQUM7O0NBTkQsQUFNQyxJQUFBO0FBTlksb0VBQTRCIiwiZmlsZSI6ImFwcC9zaGFyZWQvdmFsaWRhdG9ycy9tYXRjaC1pbnB1dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZuLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hJbnB1dFZhbGlkYXRvcihpbnB1dDogc3RyaW5nKTogVmFsaWRhdG9yRm4ge1xuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcbiAgICByZXR1cm4gaW5wdXQgIT0gY29udHJvbC52YWx1ZSA/IHsnbWF0Y2hJbnB1dCc6IHt9fSA6IG51bGw7XG4gIH07XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYXRjaElucHV0XScsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogTWF0Y2hJbnB1dFZhbGlkYXRvckRpcmVjdGl2ZSwgbXVsdGk6IHRydWV9XVxufSlcbmV4cG9ydCBjbGFzcyBNYXRjaElucHV0VmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgQElucHV0KCkgbWF0Y2hJbnB1dDogc3RyaW5nO1xuXG4gIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICByZXR1cm4gdGhpcy5tYXRjaElucHV0ID8gbWF0Y2hJbnB1dFZhbGlkYXRvcih0aGlzLm1hdGNoSW5wdXQpKGNvbnRyb2wpIDogbnVsbDtcbiAgfVxufVxuIl19
