import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InvoiceService } from 'src/app/services/invoice.service';
import { SELECTORS } from 'src/app/stores/selectors';
import { INVOICE_STATUS, PAYMENT_CYCLES, RATE_TYPE } from 'src/app/utils/constants';
import { convertArrayInObject, getDueDateColor } from 'src/app/utils/helpers';

@Component({
  selector: 'app-dash-invoices',
  templateUrl: './dash-invoices.component.html',
  styleUrls: ['./dash-invoices.component.less']
})
export class DashInvoicesComponent implements OnInit {

  invoicesList: Array<any>;
  invoicesListSize: number;
  loading: boolean =  false;

  invoiceStatus: any = INVOICE_STATUS;
  rateTypes: any = RATE_TYPE;
  paymentCyclesValues: any = convertArrayInObject(PAYMENT_CYCLES)

  getDueDateColor: any = getDueDateColor;

  constructor(
    private store: Store<any>,
    private invoiceService: InvoiceService
    ) { }

  async ngOnInit() {
    this.store
      .select(SELECTORS.COMPANY)
      .subscribe(async res => {
        const company = res?.companyData

        if (company) {
          const { data: invoicesList, error: errorContractList } = await this.invoiceService.getInvoicetByCompany(company.id)

          this.invoicesListSize = invoicesList.length;
          this.invoicesList = invoicesList.slice(0, 5);
          this.loading = true;
        }
      })
  }

}
