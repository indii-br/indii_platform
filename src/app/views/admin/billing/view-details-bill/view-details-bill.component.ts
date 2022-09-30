import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillingService } from 'src/app/services/billing.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { BILLING_STATUS_CODE, INVOICE_STATUS } from 'src/app/utils/constants';
import { getDueDateColor } from 'src/app/utils/helpers';
import { CHECK_INVOICE } from 'src/app/utils/invoicesUtil';

@Component({
  selector: 'app-view-details-bill',
  templateUrl: './view-details-bill.component.html',
  styleUrls: ['./view-details-bill.component.less']
})
export class ViewDetailsBillComponent implements OnInit {

  billingID: string;
  billingData: any;

  billingInvoiceList: any;

  getDueDateColor: any = getDueDateColor
  billingStatusCode: any = BILLING_STATUS_CODE

  checkInvoice: any = CHECK_INVOICE
  invoiceStatus: any = INVOICE_STATUS;

  constructor(
    private route: ActivatedRoute,
    private billingService: BillingService,
    private invoiceService: InvoiceService
  ) { }

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.billingID = params['id'];

      if (this.billingID) {
        const { data: billingData, error } = await this.billingService.getBillingById(this.billingID);

        if (billingData && billingData.length !== 0) {
          this.billingData = billingData[0];

          const { data: invoicesList, error: invoicesListError } = await this.invoiceService.getListOfInvoicesQuery(this.billingData.invoicesToBill);
        
          if(invoicesList) {
            this.billingInvoiceList = invoicesList
          }
        }
      }
    })
  }
}
