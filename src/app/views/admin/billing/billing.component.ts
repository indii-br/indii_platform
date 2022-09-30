import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { BillingService } from 'src/app/services/billing.service';
import { SELECTORS } from 'src/app/stores/selectors';
import { BILLING_STATUS_CODE } from 'src/app/utils/constants';
import { getDueDateColor } from 'src/app/utils/helpers';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.less']
})
export class BillingComponent implements OnInit {

  billingList: Array<any>;
  getDueDateColor: any = getDueDateColor
  billingStatusCode: any = BILLING_STATUS_CODE

  constructor(
    private billingService: BillingService,
    private store: Store<any>,
    private toastrService: ToastrService
  ) { }

  loaded: boolean = false

  async ngOnInit() {
    this.store
      .select(SELECTORS.COMPANY)
      .subscribe(async res => {
        const company = res?.companyData

        if (company) {
          this.getBillingList(company.id)
        }
      })
  }

  async getBillingList(companyId: string) {
    const { data, error } = await this.billingService.getBillingByCompany(companyId)

    if (data) {
      this.billingList = data;
    }

    if (error) {
      this.toastrService.error('Erro ao carregar cobranças! Entre em contato com o suporte!')
    }

    this.loaded = true;
  }

}
