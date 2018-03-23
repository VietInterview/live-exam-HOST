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
var base_component_1 = require("../../shared/components/base/base.component");
var ChangePasswordDialog = (function (_super) {
    __extends(ChangePasswordDialog, _super);
    function ChangePasswordDialog() {
        var _this = _super.call(this) || this;
        _this.new_pass = '';
        _this.old_pass = '';
        _this.display = false;
        return _this;
    }
    ChangePasswordDialog.prototype.ngOnInit = function () {
    };
    ChangePasswordDialog.prototype.show = function () {
        this.display = true;
    };
    ChangePasswordDialog.prototype.hide = function () {
        this.display = false;
    };
    ChangePasswordDialog.prototype.changePass = function () {
        var _this = this;
        this.authService.changePass(this.old_pass, this.new_pass).subscribe(function (resp) {
            if (resp.success) {
                _this.hide();
            }
            else {
                _this.messageService
                    .add({
                    severity: 'error',
                    summary: 'Error',
                    detail: _this.translateService.instant('Error change password!')
                });
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ChangePasswordDialog.prototype, "old_pass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ChangePasswordDialog.prototype, "new_pass", void 0);
    ChangePasswordDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'change-password-dialog',
            templateUrl: 'change-password-dialog.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], ChangePasswordDialog);
    return ChangePasswordDialog;
}(base_component_1.BaseComponent));
exports.ChangePasswordDialog = ChangePasswordDialog;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlEO0FBRXpELDhFQUE0RTtBQVE1RTtJQUEwQyx3Q0FBYTtJQU1uRDtRQUFBLFlBQ0ksaUJBQU8sU0FJVjtRQUhHLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDOztJQUN6QixDQUFDO0lBR0QsdUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxtQ0FBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELG1DQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBRUQseUNBQVUsR0FBVjtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNyRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDZixLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUksQ0FBQyxjQUFjO3FCQUNsQixHQUFHLENBQ0E7b0JBQ0ksUUFBUSxFQUFFLE9BQU87b0JBQ2pCLE9BQU8sRUFBRSxPQUFPO29CQUNoQixNQUFNLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQztpQkFBRSxDQUFDLENBQUM7WUFDL0UsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXBDUTtRQUFSLFlBQUssRUFBRTs7MERBQWtCO0lBQ2pCO1FBQVIsWUFBSyxFQUFFOzswREFBa0I7SUFIakIsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxXQUFXLEVBQUUsdUNBQXVDO1NBQ3ZELENBQUM7O09BRVcsb0JBQW9CLENBd0NoQztJQUFELDJCQUFDO0NBeENELEFBd0NDLENBeEN5Qyw4QkFBYSxHQXdDdEQ7QUF4Q1ksb0RBQW9CIiwiZmlsZSI6ImFwcC9ob21lL2NoYW5nZS1wYXNzd29yZC1kaWFsb2cvY2hhbmdlLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2Jhc2UvYmFzZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnY2hhbmdlLXBhc3N3b3JkLWRpYWxvZycsXG4gICAgdGVtcGxhdGVVcmw6ICdjaGFuZ2UtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZERpYWxvZyBleHRlbmRzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgb2xkX3Bhc3M6IHN0cmluZztcbiAgICBASW5wdXQoKSBuZXdfcGFzczogc3RyaW5nO1xuICAgIGRpc3BsYXk6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uZXdfcGFzcyA9ICcnO1xuICAgICAgICB0aGlzLm9sZF9wYXNzID0gJyc7XG4gICAgICAgIHRoaXMuZGlzcGxheSA9IGZhbHNlO1xuICAgIH1cblxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjaGFuZ2VQYXNzKCkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmNoYW5nZVBhc3ModGhpcy5vbGRfcGFzcywgdGhpcy5uZXdfcGFzcykuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2VcbiAgICAgICAgICAgICAgICAuYWRkKFxuICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V2ZXJpdHk6ICdlcnJvcicsIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VtbWFyeTogJ0Vycm9yJywgXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdFcnJvciBjaGFuZ2UgcGFzc3dvcmQhJykgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19
