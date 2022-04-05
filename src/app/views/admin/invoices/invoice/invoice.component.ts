import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from 'src/app/services/invoice.service';
import { INVOICE_STATUS, PAYMENT_CYCLES, RATE_TYPE } from 'src/app/utils/constants';
import { convertArrayInObject } from 'src/app/utils/helpers';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.less']
})
export class InvoiceComponent implements OnInit {

  invoiceData: any;
  invoiceStatus: any = INVOICE_STATUS;
  rateTypes: any = RATE_TYPE;
  paymentCyclesValues: any = convertArrayInObject(PAYMENT_CYCLES)

  constructor(
    private route: ActivatedRoute,
    private invoiceService: InvoiceService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      const invoiceID = params['id'];

      if(invoiceID){
        const { data, error } = await this.invoiceService.getInvoicetById(invoiceID);
        this.invoiceData = data[0];
      }
    })
    
  }

}
