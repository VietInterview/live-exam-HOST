import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../../shared/components/base/base.component';
import { Credential } from '../../shared/models/credential.model';
import { CacheService } from '../../shared/services/cache.service';
import { Company } from '../../shared/models/company.model';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent extends BaseComponent implements OnInit {
    credential: Credential;
    company: Company;
    returnUrl: string;

    @Input() remember: boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router) {
        super();
        this.company = new Company();
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.credential = this.authService.StoredCredential;
        this.remember = this.authService.Remember;
        Company.default(this).subscribe(profile=> {
            this.company =  profile;
            console.log(profile);
            this.cacheService.UserCompany =  profile;
        });
    }

    login() {
        this.authService.login(this.credential)
            .subscribe(
            user => {
                this.authService.saveCredential(this.credential, this.remember);
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: this.translateService.instant('Login failed.') });
            });
    }
}


