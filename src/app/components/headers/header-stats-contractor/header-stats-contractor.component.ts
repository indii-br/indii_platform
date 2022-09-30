import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { InvoiceService } from 'src/app/services/invoice.service';
import { SELECTORS } from 'src/app/stores/selectors';
import { INVOICE_STATUS } from 'src/app/utils/constants';

@Component({
  selector: 'app-header-stats-contractor',
  templateUrl: './header-stats-contractor.component.html',
  styleUrls: ['./header-stats-contractor.component.less']
})
export class HeaderStatsContractorComponent implements OnInit {

  loading: boolean = true;

  dashInfos: any = {
    PAID: {
      value: 0,
      color: 'dash-stats-default-text',
      icon: 'fa-wind',
      bg: 'dash-stats-default-bg'
    },
    APPROVED: {
      value: 0,
      color: 'dash-stats-default-text',
      icon: 'fa-wind',
      bg: 'dash-stats-default-bg'
    },
    PENDING: {
      value: 0,
      color: 'dash-stats-default-text',
      icon: 'fa-wind',
      bg: 'dash-stats-default-bg'
    }
  }

  constructor(
    private store: Store<any>,
    private invoiceService: InvoiceService
  ) { }

  async ngOnInit() {
    this.store
      .select(SELECTORS.USER)
      .subscribe(async res => {
        const user = res?.userData

        if (user) {
          const { data: invoiceList, error: errorInvoiceList } = await this.invoiceService.getInvoicesByContractor(user.id)

          if (invoiceList && invoiceList.length !== 0) {

            let PENDING = 0;
            let PAID = 0;
            let APPROVED = 0;

            const PENDING_AMOUNT = invoiceList
              .filter(invoice => {
                return invoice.status === INVOICE_STATUS.PAYIN_CREATED.status
              })
              .map(invoice => invoice.amount)

            if (PENDING_AMOUNT && PENDING_AMOUNT.length !== 0) {
              PENDING = PENDING_AMOUNT.reduce((previousValue, currentValue) => {
                return parseFloat(previousValue) + parseFloat(currentValue)
              })
            }

            const PAID_AMOUNT = invoiceList
              .filter(invoice => {
                return invoice.status === INVOICE_STATUS.PAYIN_PAID.status
              })
              .map(invoice => invoice.amount)

            if (PAID_AMOUNT && PAID_AMOUNT.length !== 0) {
              PAID = PAID_AMOUNT.reduce((previousValue, currentValue) => {
                return parseFloat(previousValue) + parseFloat(currentValue)
              })
            }

            const APPROVED_AMOUNT = invoiceList
              .filter(invoice => {
                return invoice.status === INVOICE_STATUS.APPROVED.status
              })
              .map(invoice => invoice.amount)

            if (APPROVED_AMOUNT && APPROVED_AMOUNT.length !== 0) {
              APPROVED = APPROVED_AMOUNT.reduce((previousValue, currentValue) => {
                return parseFloat(previousValue) + parseFloat(currentValue)
              })
            }

            if (APPROVED !== 0) {
              this.dashInfos.APPROVED.value = APPROVED;
              this.dashInfos.APPROVED.icon = 'fa-check';
            }

            if (PAID !== 0) {
              this.dashInfos.PAID.value = PAID;
              this.dashInfos.PAID.icon = ' fa-dollar-sign';
              this.dashInfos.PAID.color = 'dash-stats-green-text';
              this.dashInfos.PAID.bg = 'dash-stats-green-bg';
            }

            if (PENDING !== 0) {
              this.dashInfos.PENDING.value = PENDING;
              this.dashInfos.PENDING.icon = 'fa-exclamation';
            }
          }

          this.loading = false;
        }
      })
  }

  getMonth() {
    return moment().locale('pt-br').format('MMM')
  }

}
