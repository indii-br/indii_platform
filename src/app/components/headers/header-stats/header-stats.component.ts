import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as moment from "moment";
import { ContractService } from "src/app/services/contract.service";
import { InvoiceService } from "src/app/services/invoice.service";
import { JobService } from "src/app/services/job.service";
import { SELECTORS } from "src/app/stores/selectors";
import { INVOICE_STATUS } from "src/app/utils/constants";

@Component({
  selector: "app-header-stats",
  templateUrl: "./header-stats.component.html",
})
export class HeaderStatsComponent implements OnInit {

  loading: boolean = true;

  dashInfos: any = {
    PAID: {
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
    },
    JOBS: {
      value: 0,
      color: 'dash-stats-default-text',
      icon: 'fa-wind',
      bg: 'dash-stats-default-bg'
    }
  }


  constructor(
    private store: Store<any>,
    private jobService: JobService,
    private invoiceService: InvoiceService
  ) { }

  async ngOnInit() {
    this.store
      .select(SELECTORS.COMPANY)
      .subscribe(async res => {
        const company = res?.companyData

        if (company) {
          const { data: invoiceList, error: errorInvoiceList } = await this.invoiceService.getInvoicetByCompany(company.id)

          const { data: jobsList, error: errorJobsList } = await this.jobService.getAllOpen()

          if (jobsList && jobsList.length !== 0) {
            this.dashInfos.JOBS.value = jobsList.length;
            this.dashInfos.JOBS.icon = 'fa-exclamation';
          }

          if (invoiceList && invoiceList.length !== 0) {

            let PENDING = 0;
            let PAID = 0;

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

            if (PAID !== 0) {
              this.dashInfos.PAID.value = PAID;
              this.dashInfos.PAID.icon = 'fa-check';
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
