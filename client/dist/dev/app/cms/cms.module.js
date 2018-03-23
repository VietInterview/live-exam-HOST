"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_module_1 = require("../auth/auth.module");
var shared_module_1 = require("../shared/shared.module");
var cms_component_1 = require("./cms.component");
var exam_content_dialog_component_1 = require("./exam/content-dialog/exam-content.dialog.component");
var grade_pipe_1 = require("./exam/grade.pipe");
var sum_pipe_1 = require("./exam/sum.pipe");
var CMSModule = (function () {
    function CMSModule() {
    }
    CMSModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.ErpSharedModule, auth_module_1.AuthModule],
            declarations: [cms_component_1.CMSComponent, grade_pipe_1.ValidateGradePipe, sum_pipe_1.SumPipe, exam_content_dialog_component_1.ExamContentDialog],
            exports: [exam_content_dialog_component_1.ExamContentDialog],
            providers: [],
            entryComponents: []
        })
    ], CMSModule);
    return CMSModule;
}());
exports.CMSModule = CMSModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jbXMvY21zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QyxtREFBaUQ7QUFDakQseURBQTBEO0FBQzFELGlEQUE4QztBQUM5QyxxR0FBd0Y7QUFDeEYsZ0RBQXNEO0FBQ3RELDRDQUEwQztBQVMxQztJQUFBO0lBQ0EsQ0FBQztJQURZLFNBQVM7UUFQckIsZUFBUSxDQUFDO1lBQ1QsT0FBTyxFQUFFLENBQUMsK0JBQWUsRUFBRSx3QkFBVSxDQUFDO1lBQ3RDLFlBQVksRUFBRSxDQUFDLDRCQUFZLEVBQUUsOEJBQWlCLEVBQUUsa0JBQU8sRUFBRSxpREFBaUIsQ0FBQztZQUMzRSxPQUFPLEVBQUUsQ0FBQyxpREFBaUIsQ0FBQztZQUM1QixTQUFTLEVBQUUsRUFBRTtZQUNiLGVBQWUsRUFBQyxFQUFFO1NBQ2xCLENBQUM7T0FDVyxTQUFTLENBQ3JCO0lBQUQsZ0JBQUM7Q0FERCxBQUNDLElBQUE7QUFEWSw4QkFBUyIsImZpbGUiOiJhcHAvY21zL2Ntcy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aE1vZHVsZSB9IGZyb20gJy4uL2F1dGgvYXV0aC5tb2R1bGUnO1xuaW1wb3J0IHsgRXJwU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ01TQ29tcG9uZW50IH0gZnJvbSAnLi9jbXMuY29tcG9uZW50J1xuaW1wb3J0IHsgRXhhbUNvbnRlbnREaWFsb2cgfSBmcm9tICcuL2V4YW0vY29udGVudC1kaWFsb2cvZXhhbS1jb250ZW50LmRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmFsaWRhdGVHcmFkZVBpcGUgfSBmcm9tICcuL2V4YW0vZ3JhZGUucGlwZSc7XG5pbXBvcnQgeyBTdW1QaXBlIH0gZnJvbSAnLi9leGFtL3N1bS5waXBlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW0VycFNoYXJlZE1vZHVsZSwgQXV0aE1vZHVsZV0sXG5cdGRlY2xhcmF0aW9uczogW0NNU0NvbXBvbmVudCwgVmFsaWRhdGVHcmFkZVBpcGUsIFN1bVBpcGUsIEV4YW1Db250ZW50RGlhbG9nXSxcblx0ZXhwb3J0czogW0V4YW1Db250ZW50RGlhbG9nXSxcblx0cHJvdmlkZXJzOiBbXSxcblx0ZW50cnlDb21wb25lbnRzOltdXG59KVxuZXhwb3J0IGNsYXNzIENNU01vZHVsZSB7XG59XG4iXX0=
