"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_component_1 = require("./auth.component");
var login_component_1 = require("./login/login.component");
var recover_password_component_1 = require("./recover/recover-password.component");
var AuthRoutingModule = (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    {
                        path: 'auth',
                        component: auth_component_1.AuthComponent,
                        children: [
                            { path: '', pathMatch: 'full', component: login_component_1.LoginComponent },
                            { path: 'login', component: login_component_1.LoginComponent },
                            { path: 'recover-password', component: recover_password_component_1.RecoverPasswordComponent },
                        ]
                    }
                ])
            ],
            exports: [router_1.RouterModule]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());
exports.AuthRoutingModule = AuthRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2F1dGgtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLG1EQUFpRDtBQUNqRCwyREFBeUQ7QUFDekQsbUZBQWdGO0FBa0JoRjtJQUFBO0lBQ0EsQ0FBQztJQURZLGlCQUFpQjtRQWhCN0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZLENBQUMsUUFBUSxDQUFDO29CQUNsQjt3QkFDSSxJQUFJLEVBQUUsTUFBTTt3QkFDWixTQUFTLEVBQUUsOEJBQWE7d0JBQ3hCLFFBQVEsRUFBRTs0QkFDTixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBQzs0QkFDeEQsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFDOzRCQUMxQyxFQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUscURBQXdCLEVBQUM7eUJBQ2xFO3FCQUNKO2lCQUNKLENBQUM7YUFDTDtZQUNELE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7U0FDMUIsQ0FBQztPQUNXLGlCQUFpQixDQUM3QjtJQUFELHdCQUFDO0NBREQsQUFDQyxJQUFBO0FBRFksOENBQWlCIiwiZmlsZSI6ImFwcC9hdXRoL2F1dGgtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tICcuL2F1dGguY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVjb3ZlclBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9yZWNvdmVyL3JlY292ZXItcGFzc3dvcmQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJ2F1dGgnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogQXV0aENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7cGF0aDogJycsIHBhdGhNYXRjaDogJ2Z1bGwnLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50fSxcbiAgICAgICAgICAgICAgICAgICAge3BhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnR9LFxuICAgICAgICAgICAgICAgICAgICB7cGF0aDogJ3JlY292ZXItcGFzc3dvcmQnLCBjb21wb25lbnQ6IFJlY292ZXJQYXNzd29yZENvbXBvbmVudH0sXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXV0aFJvdXRpbmdNb2R1bGUge1xufVxuIl19
