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
var animations_1 = require("@angular/animations");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var home_component_1 = require("../home.component");
var SubMenuComponent = (function () {
    function SubMenuComponent(app, router, location) {
        this.app = app;
        this.router = router;
        this.location = location;
    }
    SubMenuComponent.prototype.itemClick = function (event, item, index) {
        if (item.disabled) {
            event.preventDefault();
            return true;
        }
        if (item.routerLink || item.items || item.command || item.url) {
            this.activeIndex = (this.activeIndex === index) ? null : index;
        }
        if (item.command) {
            item.command({ originalEvent: event, item: item });
        }
        if (item.items || (!item.url && !item.routerLink)) {
            event.preventDefault();
        }
        if (!item.items) {
            if (this.app.isMobile()) {
                this.app.sidebarActive = false;
                this.app.mobileMenuActive = false;
            }
        }
        return true;
    };
    SubMenuComponent.prototype.isActive = function (index) {
        return this.activeIndex === index;
    };
    Object.defineProperty(SubMenuComponent.prototype, "reset", {
        get: function () {
            return this._reset;
        },
        set: function (val) {
            this._reset = val;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SubMenuComponent.prototype, "item", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], SubMenuComponent.prototype, "root", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], SubMenuComponent.prototype, "visible", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SubMenuComponent.prototype, "reset", null);
    SubMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '[submenu]',
            templateUrl: 'sub-menu.component.html',
            animations: [
                animations_1.trigger('children', [
                    animations_1.state('visible', animations_1.style({
                        height: '*'
                    })),
                    animations_1.state('hidden', animations_1.style({
                        height: '0px'
                    })),
                    animations_1.transition('visible => hidden', animations_1.animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                    animations_1.transition('hidden => visible', animations_1.animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [home_component_1.HomeComponent, router_1.Router, common_1.Location])
    ], SubMenuComponent);
    return SubMenuComponent;
}());
exports.SubMenuComponent = SubMenuComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL3NpZGUtbWVudS9zdWItbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBb0g7QUFDcEgsa0RBQWlGO0FBQ2pGLDBDQUEyQztBQUMzQywwQ0FBeUM7QUFFekMsb0RBQWtEO0FBb0JsRDtJQVNJLDBCQUFtQixHQUFrQixFQUFTLE1BQWMsRUFBUyxRQUFrQjtRQUFwRSxRQUFHLEdBQUgsR0FBRyxDQUFlO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBSSxDQUFDO0lBRTVGLG9DQUFTLEdBQVQsVUFBVSxLQUFZLEVBQUUsSUFBYyxFQUFFLEtBQWE7UUFFakQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUdELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNuRSxDQUFDO1FBR0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBR0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNCLENBQUM7UUFHRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztnQkFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDdEMsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxtQ0FBUSxHQUFSLFVBQVMsS0FBYTtRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUVRLHNCQUFJLG1DQUFLO2FBQVQ7WUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVSxHQUFZO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLENBQUM7OztPQUpBO0lBL0NRO1FBQVIsWUFBSyxFQUFFOztrREFBZ0I7SUFDZjtRQUFSLFlBQUssRUFBRTs7a0RBQWU7SUFDZDtRQUFSLFlBQUssRUFBRTs7cURBQWtCO0lBMkNqQjtRQUFSLFlBQUssRUFBRTs7O2lEQUVQO0lBakRRLGdCQUFnQjtRQWpCNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFVBQVUsRUFBRTtnQkFDUixvQkFBTyxDQUFDLFVBQVUsRUFBRTtvQkFDaEIsa0JBQUssQ0FBQyxTQUFTLEVBQUUsa0JBQUssQ0FBQzt3QkFDbkIsTUFBTSxFQUFFLEdBQUc7cUJBQ2QsQ0FBQyxDQUFDO29CQUNILGtCQUFLLENBQUMsUUFBUSxFQUFFLGtCQUFLLENBQUM7d0JBQ2xCLE1BQU0sRUFBRSxLQUFLO3FCQUNoQixDQUFDLENBQUM7b0JBQ0gsdUJBQVUsQ0FBQyxtQkFBbUIsRUFBRSxvQkFBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7b0JBQ2hGLHVCQUFVLENBQUMsbUJBQW1CLEVBQUUsb0JBQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO2lCQUNuRixDQUFDO2FBQ0w7U0FDSixDQUFDO3lDQVUwQiw4QkFBYSxFQUFpQixlQUFNLEVBQW1CLGlCQUFRO09BVDlFLGdCQUFnQixDQXNENUI7SUFBRCx1QkFBQztDQXRERCxBQXNEQyxJQUFBO0FBdERZLDRDQUFnQiIsImZpbGUiOiJhcHAvaG9tZS9zaWRlLW1lbnUvc3ViLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIEVsZW1lbnRSZWYsIFJlbmRlcmVyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuLi9ob21lLmNvbXBvbmVudCc7XG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ1tzdWJtZW51XScsXG4gICAgdGVtcGxhdGVVcmw6ICdzdWItbWVudS5jb21wb25lbnQuaHRtbCcsXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdjaGlsZHJlbicsIFtcbiAgICAgICAgICAgIHN0YXRlKCd2aXNpYmxlJywgc3R5bGUoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogJyonXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBzdGF0ZSgnaGlkZGVuJywgc3R5bGUoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogJzBweCdcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3Zpc2libGUgPT4gaGlkZGVuJywgYW5pbWF0ZSgnNDAwbXMgY3ViaWMtYmV6aWVyKDAuODYsIDAsIDAuMDcsIDEpJykpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHZpc2libGUnLCBhbmltYXRlKCc0MDBtcyBjdWJpYy1iZXppZXIoMC44NiwgMCwgMC4wNywgMSknKSlcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1Yk1lbnVDb21wb25lbnQge1xuXG4gICAgQElucHV0KCkgaXRlbTogTWVudUl0ZW07XG4gICAgQElucHV0KCkgcm9vdDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSB2aXNpYmxlOiBib29sZWFuO1xuICAgIF9yZXNldDogYm9vbGVhbjtcbiAgICBhY3RpdmVJbmRleDogbnVtYmVyO1xuICAgIGhvdmVyOiBib29sZWFuO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhcHA6IEhvbWVDb21wb25lbnQsIHB1YmxpYyByb3V0ZXI6IFJvdXRlciwgcHVibGljIGxvY2F0aW9uOiBMb2NhdGlvbikgeyB9XG5cbiAgICBpdGVtQ2xpY2soZXZlbnQ6IEV2ZW50LCBpdGVtOiBNZW51SXRlbSwgaW5kZXg6IG51bWJlcikgwqB7XG4gICAgICAgIC8vIGF2b2lkIHByb2Nlc3NpbmcgZGlzYWJsZWQgaXRlbXNcbiAgICAgICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFjdGl2YXRlIGN1cnJlbnQgaXRlbSBhbmQgZGVhY3RpdmF0ZSBhY3RpdmUgc2libGluZyBpZiBhbnlcbiAgICAgICAgaWYgKGl0ZW0ucm91dGVyTGluayB8fCBpdGVtLml0ZW1zIHx8IGl0ZW0uY29tbWFuZCB8fCBpdGVtLnVybCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9ICh0aGlzLmFjdGl2ZUluZGV4ID09PSBpbmRleCkgPyBudWxsIDogaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBleGVjdXRlIGNvbW1hbmRcbiAgICAgICAgaWYgKGl0ZW0uY29tbWFuZCkge1xuICAgICAgICAgICAgaXRlbS5jb21tYW5kKHsgb3JpZ2luYWxFdmVudDogZXZlbnQsIGl0ZW06IGl0ZW0gfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcmV2ZW50IGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChpdGVtLml0ZW1zIHx8ICghaXRlbS51cmwgJiYgIWl0ZW0ucm91dGVyTGluaykpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoaWRlIG1lbnVcbiAgICAgICAgaWYgKCFpdGVtLml0ZW1zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHAuaXNNb2JpbGUoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwLnNpZGViYXJBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5tb2JpbGVNZW51QWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaXNBY3RpdmUoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVJbmRleCA9PT0gaW5kZXg7XG4gICAgfVxuXG4gICAgQElucHV0KCkgZ2V0IHJlc2V0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzZXQ7XG4gICAgfVxuXG4gICAgc2V0IHJlc2V0KHZhbDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9yZXNldCA9IHZhbDtcbiAgICB9XG59Il19
