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
var map_utils_1 = require("../helpers/map.utils");
var Company = (function (_super) {
    __extends(Company, _super);
    function Company() {
        var _this = _super.call(this) || this;
        _this.logo = undefined;
        _this.bank_account = undefined;
        _this.email = undefined;
        _this.name = undefined;
        _this.country_id = undefined;
        _this.currency_id = undefined;
        _this.fax = undefined;
        _this.phone = undefined;
        _this.street = undefined;
        _this.state_id = undefined;
        _this.city = undefined;
        _this.vat = undefined;
        _this.website = undefined;
        _this.registry = undefined;
        _this.mobile = undefined;
        return _this;
    }
    Company_1 = Company;
    Company.default = function (context) {
        var model = this.Model;
        return Company_1.executeRemote(context, "defaultCompany")
            .map(function (profiles) {
            if (profiles.length)
                return map_utils_1.MapUtils.deserializeModel(model, profiles[0]);
            else
                return null;
        });
    };
    Company = Company_1 = __decorate([
        decorator_1.Model('res.company'),
        __metadata("design:paramtypes", [])
    ], Company);
    return Company;
    var Company_1;
}(base_model_1.BaseModel));
exports.Company = Company;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWxzL2NvbXBhbnkubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkNBQXlDO0FBQ3pDLHlDQUF3RDtBQUV4RCxrREFBaUQ7QUFJakQ7SUFBNkIsMkJBQVM7SUFJbEM7UUFBQSxZQUNJLGlCQUFPLFNBaUJWO1FBZkcsS0FBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsS0FBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7UUFDOUIsS0FBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDdkIsS0FBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsS0FBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDN0IsS0FBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7UUFDckIsS0FBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDdkIsS0FBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDeEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDMUIsS0FBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdEIsS0FBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7UUFDckIsS0FBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDekIsS0FBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDMUIsS0FBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7O0lBQzVCLENBQUM7Z0JBdEJRLE9BQU87SUF3Q1QsZUFBTyxHQUFkLFVBQWdCLE9BQWtCO1FBQzlCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdkIsTUFBTSxDQUFDLFNBQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFDLGdCQUFnQixDQUFDO2FBQ3JELEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDVCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUNoQixNQUFNLENBQUcsb0JBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsSUFBSTtnQkFDQSxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWpEUSxPQUFPO1FBRG5CLGlCQUFLLENBQUMsYUFBYSxDQUFDOztPQUNSLE9BQU8sQ0FrRG5CO0lBQUQsY0FBQzs7Q0FsREQsQUFrREMsQ0FsRDRCLHNCQUFTLEdBa0RyQztBQWxEWSwwQkFBTyIsImZpbGUiOiJhcHAvc2hhcmVkL21vZGVscy9jb21wYW55Lm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuL2Jhc2UubW9kZWwnO1xuaW1wb3J0IHsgTU9ERUxfTUVUQURBVEFfS0VZLCBNb2RlbCB9IGZyb20gJy4vZGVjb3JhdG9yJztcbmltcG9ydCB7IEFQSUNvbnRleHQgfSBmcm9tICcuL2NvbnRleHQnO1xuaW1wb3J0IHsgTWFwVXRpbHMgfSAgZnJvbSAnLi4vaGVscGVycy9tYXAudXRpbHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMvUngnO1xuXG5ATW9kZWwoJ3Jlcy5jb21wYW55JylcbmV4cG9ydCBjbGFzcyBDb21wYW55IGV4dGVuZHMgQmFzZU1vZGVse1xuXG5cbiAgICAvLyBEZWZhdWx0IGNvbnN0cnVjdG9yIHdpbGwgYmUgY2FsbGVkIGJ5IG1hcHBlclxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxvZ28gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuYmFua19hY2NvdW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmVtYWlsID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY291bnRyeV9pZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jdXJyZW5jeV9pZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5mYXggPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucGhvbmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuc3RyZWV0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnN0YXRlX2lkID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmNpdHkgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMudmF0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLndlYnNpdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucmVnaXN0cnkgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubW9iaWxlID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGxvZ286c3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgYmFua19hY2NvdW50OiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGNvdW50cnlfaWQ6IG51bWJlcjtcbiAgICBjdXJyZW5jeV9pZDogbnVtYmVyO1xuICAgIGZheDpzdHJpbmc7XG4gICAgcGhvbmU6IHN0cmluZztcbiAgICBzdGF0ZV9pZDogbnVtYmVyO1xuICAgIGNpdHk6c3RyaW5nO1xuICAgIHN0cmVldDogc3RyaW5nO1xuICAgIHZhdDogc3RyaW5nO1xuICAgIHdlYnNpdGU6IHN0cmluZztcbiAgICByZWdpc3RyeTogc3RyaW5nO1xuICAgIG1vYmlsZTogc3RyaW5nO1xuXG4gICAgc3RhdGljIGRlZmF1bHQoIGNvbnRleHQ6QVBJQ29udGV4dCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHZhciBtb2RlbCA9IHRoaXMuTW9kZWw7XG4gICAgICAgIHJldHVybiBDb21wYW55LmV4ZWN1dGVSZW1vdGUoY29udGV4dCxcImRlZmF1bHRDb21wYW55XCIpXG4gICAgICAgIC5tYXAocHJvZmlsZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2ZpbGVzLmxlbmd0aClcbiAgICAgICAgICAgICAgICByZXR1cm4gICBNYXBVdGlscy5kZXNlcmlhbGl6ZU1vZGVsKG1vZGVsLCBwcm9maWxlc1swXSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==
