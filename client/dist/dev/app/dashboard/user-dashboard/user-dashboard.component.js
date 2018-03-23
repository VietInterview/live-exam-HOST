"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserDashboardComponent = (function () {
    function UserDashboardComponent() {
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#FFC107'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#03A9F4'
                }
            ]
        };
        this.items = [
            { label: 'Save', icon: 'ui-icon-check' },
            { label: 'Update', icon: 'ui-icon-refresh' },
            { label: 'Delete', icon: 'ui-icon-delete' }
        ];
    };
    UserDashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-dashboard',
            templateUrl: 'user-dashboard.component.html'
        })
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());
exports.UserDashboardComponent = UserDashboardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvdXNlci1kYXNoYm9hcmQvdXNlci1kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQTBFO0FBZTFFO0lBQUE7SUEyQ0EsQ0FBQztJQTdCRCx5Q0FBUSxHQUFSO1FBR1EsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNiLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztZQUN4RSxRQUFRLEVBQUU7Z0JBQ047b0JBQ0ksS0FBSyxFQUFFLGVBQWU7b0JBQ3RCLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztvQkFDbEMsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsV0FBVyxFQUFFLFNBQVM7aUJBQ3pCO2dCQUNEO29CQUNJLEtBQUssRUFBRSxnQkFBZ0I7b0JBQ3ZCLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztvQkFDbEMsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsV0FBVyxFQUFFLFNBQVM7aUJBQ3pCO2FBQ0o7U0FDSixDQUFDO1FBRUYsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUM7WUFDMUMsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBQztTQUM1QyxDQUFDO0lBRU4sQ0FBQztJQXpDUSxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSwrQkFBK0I7U0FFL0MsQ0FBQztPQUNXLHNCQUFzQixDQTJDbEM7SUFBRCw2QkFBQztDQTNDRCxBQTJDQyxJQUFBO0FBM0NZLHdEQUFzQiIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL3VzZXItZGFzaGJvYXJkL3VzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01lbnVJdGVtfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2Jhc2UvYmFzZS5jb21wb25lbnQnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAndXNlci1kYXNoYm9hcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAndXNlci1kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnXG5cbn0pXG5leHBvcnQgY2xhc3MgVXNlckRhc2hib2FyZENvbXBvbmVudCB7XG5cdGNpdGllczogYW55W107XG5cbiAgICBjYXJzOiBhbnlbXTtcblxuICAgIGNoYXJ0RGF0YTogYW55O1xuXG4gICAgZXZlbnRzOiBhbnlbXTtcblxuXG4gICAgaXRlbXM6IE1lbnVJdGVtW107XG5cbiAgICBoZWFkZXI6IGFueTtcblxubmdPbkluaXQoKSB7XG5cblxuICAgICAgICB0aGlzLmNoYXJ0RGF0YSA9IHtcbiAgICAgICAgICAgIGxhYmVsczogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknXSxcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0ZpcnN0IERhdGFzZXQnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbNjUsIDU5LCA4MCwgODEsIDU2LCA1NSwgNDBdLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjRkZDMTA3J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NlY29uZCBEYXRhc2V0JyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWzI4LCA0OCwgNDAsIDE5LCA4NiwgMjcsIDkwXSxcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzAzQTlGNCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pdGVtcyA9IFtcbiAgICAgICAgICAgIHtsYWJlbDogJ1NhdmUnLCBpY29uOiAndWktaWNvbi1jaGVjayd9LFxuICAgICAgICAgICAge2xhYmVsOiAnVXBkYXRlJywgaWNvbjogJ3VpLWljb24tcmVmcmVzaCd9LFxuICAgICAgICAgICAge2xhYmVsOiAnRGVsZXRlJywgaWNvbjogJ3VpLWljb24tZGVsZXRlJ31cbiAgICAgICAgXTtcblxuICAgIH1cblxufVxuXG4iXX0=
