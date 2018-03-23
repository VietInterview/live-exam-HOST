"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _ = require("underscore");
var SumPipe = (function () {
    function SumPipe() {
    }
    SumPipe.prototype.transform = function (questions) {
        return _.reduce(questions, function (memo, q) { return memo + +q.score; }, 0);
    };
    SumPipe = __decorate([
        core_1.Pipe({ name: 'sum', pure: false })
    ], SumPipe);
    return SumPipe;
}());
exports.SumPipe = SumPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jbXMvZXhhbS9zdW0ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUFvRDtBQUNwRCw4QkFBZ0M7QUFHaEM7SUFBQTtJQU1BLENBQUM7SUFKQywyQkFBUyxHQUFULFVBQVUsU0FBZ0I7UUFDekIsTUFBTSxDQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFVBQUMsSUFBSSxFQUFFLENBQUMsSUFBSyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUV4RSxDQUFDO0lBTFUsT0FBTztRQURuQixXQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFHLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztPQUN2QixPQUFPLENBTW5CO0lBQUQsY0FBQztDQU5ELEFBTUMsSUFBQTtBQU5ZLDBCQUFPIiwiZmlsZSI6ImFwcC9jbXMvZXhhbS9zdW0ucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ3N1bScsICBwdXJlOiBmYWxzZSB9KVxuZXhwb3J0IGNsYXNzIFN1bVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblx0Ly8gcmV0dXJuIHRydWUgaWYgdmFsaWRhdGlvbiBmYWlsZWRcbiAgdHJhbnNmb3JtKHF1ZXN0aW9uczogYW55W10pOiBhbnkge1xuICBcdHJldHVybiAgXy5yZWR1Y2UocXVlc3Rpb25zLCAobWVtbywgcSk9PnsgcmV0dXJuIG1lbW8gKyArcS5zY29yZTsgfSwgMCk7XG4gICAgXG4gIH1cbn0iXX0=
