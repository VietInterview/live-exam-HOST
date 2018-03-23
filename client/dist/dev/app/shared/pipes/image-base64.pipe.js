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
var platform_browser_1 = require("@angular/platform-browser");
var ImageBase64Pipe = (function () {
    function ImageBase64Pipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ImageBase64Pipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return value ? this.sanitizer.bypassSecurityTrustUrl("data:image/png;base64," + value) : "";
    };
    ImageBase64Pipe = __decorate([
        core_1.Pipe({ name: 'imageBase64', pure: true }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], ImageBase64Pipe);
    return ImageBase64Pipe;
}());
exports.ImageBase64Pipe = ImageBase64Pipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGlwZXMvaW1hZ2UtYmFzZTY0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBb0Q7QUFDcEQsOERBQXlEO0FBR3pEO0lBQ0MseUJBQXFCLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFBRyxDQUFDO0lBQy9DLG1DQUFTLEdBQVQsVUFBVSxLQUFVLEVBQUUsSUFBa0I7UUFBbEIscUJBQUEsRUFBQSxXQUFrQjtRQUN0QyxNQUFNLENBQUMsS0FBSyxDQUFBLENBQUMsQ0FBQSxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLHdCQUF3QixHQUFDLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQSxFQUFFLENBQUE7SUFDdkYsQ0FBQztJQUpVLGVBQWU7UUFEM0IsV0FBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7eUNBRVYsK0JBQVk7T0FEaEMsZUFBZSxDQUszQjtJQUFELHNCQUFDO0NBTEQsQUFLQyxJQUFBO0FBTFksMENBQWUiLCJmaWxlIjoiYXBwL3NoYXJlZC9waXBlcy9pbWFnZS1iYXNlNjQucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AUGlwZSh7IG5hbWU6ICdpbWFnZUJhc2U2NCcsICBwdXJlOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgSW1hZ2VCYXNlNjRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cdGNvbnN0cnVjdG9yKCBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKXsgfVxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJnczogYW55W10gPSBudWxsKTogYW55IHtcbiAgICByZXR1cm4gdmFsdWU/dGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFVybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxcIit2YWx1ZSk6XCJcIlxuICB9XG59XG5cbiJdfQ==
