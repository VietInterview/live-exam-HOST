import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../../shared/components/base/base.component';
import { Company } from '../../shared/models/company.model';

@Component({
  moduleId: module.id,
  selector: 'recover-password',
  templateUrl: 'recover-password.component.html'
})

export class RecoverPasswordComponent extends BaseComponent implements OnInit {

    @Input() recover_email: string;
    company: Company;

    constructor() { 
      super(); 
    }

    ngOnInit() {
      this.company =  this.cacheService.UserCompany;
    }

    recoverPassword() {
        this.authService.resetPass(this.recover_email).subscribe((resp) => {
              this.messageService
              .add({
                severity:'success', 
                summary:'Success', 
                detail: this.translateService.instant('Password recovery instruction sent to your email')
              });
        })
    }

}

