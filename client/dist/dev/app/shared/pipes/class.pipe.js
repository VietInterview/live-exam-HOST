"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ClassPipe = (function () {
    function ClassPipe() {
    }
    ClassPipe.prototype.transform = function (items, filterGroups) {
        if (!items) {
            return [];
        }
        else if (!filterGroups) {
            return items;
        }
        else {
            var result = items.filter(function (item) {
                var found = filterGroups.find(function (element) {
                    return element.data.id == item.class_id;
                });
                return found;
            });
            return result;
        }
    };
    ClassPipe = __decorate([
        core_1.Pipe({ name: 'byClass', pure: false })
    ], ClassPipe);
    return ClassPipe;
}());
exports.ClassPipe = ClassPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGlwZXMvY2xhc3MucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUFvRDtBQUlwRDtJQUFBO0lBdUJBLENBQUM7SUF0QkMsNkJBQVMsR0FBVCxVQUFVLEtBQVksRUFBRSxZQUFtQjtRQUN6QyxFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUNWLENBQUM7WUFDQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ1osQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUN0QixDQUFDO1lBQ0MsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7UUFDRCxJQUFJLENBQ0osQ0FBQztZQUNDLElBQUksTUFBTSxHQUFFLEtBQUssQ0FBQyxNQUFNLENBQUUsVUFBQSxJQUFJO2dCQUU1QixJQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVMsT0FBTztvQkFDNUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQzFDLENBQUMsQ0FBQyxDQUFDO2dCQUNILE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFFZixDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUF0QlUsU0FBUztRQUZyQixXQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFHLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztPQUUzQixTQUFTLENBdUJyQjtJQUFELGdCQUFDO0NBdkJELEFBdUJDLElBQUE7QUF2QlksOEJBQVMiLCJmaWxlIjoiYXBwL3NoYXJlZC9waXBlcy9jbGFzcy5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICdieUNsYXNzJywgIHB1cmU6IGZhbHNlIH0pXG5cbmV4cG9ydCBjbGFzcyBDbGFzc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGl0ZW1zOiBhbnlbXSwgZmlsdGVyR3JvdXBzOiBhbnlbXSk6IGFueSB7XG4gICAgaWYoIWl0ZW1zKSBcbiAgICB7IFxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBlbHNlIGlmKCFmaWx0ZXJHcm91cHMpIFxuICAgIHtcbiAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHZhciByZXN1bHQ9IGl0ZW1zLmZpbHRlciggaXRlbSA9PlxuICAgICAgeyAgICAgIFxuICAgICAgICB2YXIgZm91bmQgPSBmaWx0ZXJHcm91cHMuZmluZChmdW5jdGlvbihlbGVtZW50KXtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudC5kYXRhLmlkID09IGl0ZW0uY2xhc3NfaWQ7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZm91bmQ7XG5cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IFxuICB9XG59XG5cblxuIl19
