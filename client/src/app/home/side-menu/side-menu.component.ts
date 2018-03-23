import { Component, ViewEncapsulation, Input, OnInit, AfterViewInit, OnDestroy, ElementRef, Renderer, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { HomeEventManager } from '../home-manager.service';
import { HomeComponent } from '../home.component';
import { Credential } from '../../shared/models/credential.model';
import { BaseComponent } from '../../shared/components/base/base.component';
import { Company } from '../../shared/models/company.model';
import { CacheService } from '../../shared/services/cache.service';
declare var jQuery: any;


@Component({
    moduleId: module.id,
    selector: 'menu',
    templateUrl: 'side-menu.component.html',
    styleUrls: ['side-menu.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class SideMenuComponent extends BaseComponent implements OnInit {

    @Input() reset: boolean;
    company: Company;
    model: any[];
    credential: Credential
    layoutMenuScroller: HTMLDivElement;
    @ViewChild('layoutMenuScroller') layoutMenuScrollerViewChild: ElementRef;

    constructor(public app: HomeComponent, private eventManager: HomeEventManager) {
        super();
    }

    ngOnInit() {
        this.company =  this.cacheService.UserCompany;
        if (this.authService.CurrentUser.login=='admin' || this.authService.CurrentUser.is_admin) {
            this.setAdminMenu();
        } else {
            this.setUserMenu();
        }
    }

    setAdminMenu() {
        this.model = [
                { label: 'Dashboard', icon: 'dashboard', routerLink: ['/dashboard'] },
                { label: '', separator: true, styleClass: 'menu-separator' },
                {
                    label: 'Assessment', icon: 'grade',
                    items: [
                        { label: 'Question banks', routerLink: ['/assessment/questions'] },
                        { label: 'Question category', routerLink: ['/assessment/groups'] },
                        { label: 'Exam', routerLink: ['/assessment/exams'] }
                    ]
                },
                {
                    label: 'Report', icon: 'pie_chart',routerLink: ['/reports']
                },
                {
                    label: 'Accounts', icon: 'people',
                    items: [
                        { label: 'Administrator', routerLink: ['/account/admins'] },
                        { label: 'Teacher', routerLink: ['/account/teachers'] },
                        { label: 'Student', routerLink: ['/account/students'] },
                        { label: 'Class tree', routerLink: ['/account/groups'] }
                    ]
                }
            ];
    }

    setUserMenu() {
        this.model = [
                { label: 'My exam', icon: 'alarm_add', routerLink: ['/lms/exams'] },
            ];
    }


    ngAfterViewInit() {
        this.layoutMenuScroller = <HTMLDivElement>this.layoutMenuScrollerViewChild.nativeElement;

        setTimeout(() => {
            jQuery(this.layoutMenuScroller).nanoScroller({ flash: true });
        }, 10);
    }


    updateNanoScroll() {
        setTimeout(() => {
            jQuery(this.layoutMenuScroller).nanoScroller();
        }, 500);
    }

    ngOnDestroy() {
        jQuery(this.layoutMenuScroller).nanoScroller({ flash: true });
    }
}
