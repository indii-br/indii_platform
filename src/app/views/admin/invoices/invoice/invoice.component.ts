import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InvoiceService } from 'src/app/services/invoice.service';
import { WepayoutService } from 'src/app/services/wepayout.service';
import { INVOICE_STATUS, PAYMENT_CYCLES, RATE_TYPE } from 'src/app/utils/constants';
import { convertArrayInObject } from 'src/app/utils/helpers';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.less']
})
export class InvoiceComponent implements OnInit {

  invoiceData: any;
  wePayoutInvoiceData: any;
  invoiceID: string;
  invoiceStatus: any = INVOICE_STATUS;
  rateTypes: any = RATE_TYPE;
  paymentCyclesValues: any = convertArrayInObject(PAYMENT_CYCLES)

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private wepayoutService: WepayoutService,
    private invoiceService: InvoiceService,
    private toastr: ToastrService
  ) { }

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.invoiceID = params['id'];

      if (this.invoiceID) {
        this.getInvoiceById(this.invoiceID)
      }
    })
  }

  async getInvoiceById(invoiceID: string) {
    const { data, error } = await this.invoiceService.getInvoicetById(invoiceID);
    if (data && data[0]) {
      this.invoiceData = data[0];
      this.getWepayoutInvoiceData(this.invoiceData.wePayoutKey)
    }

    if (error) {
      this.toastr.error('Erro ao carregar Invoice | Fale com Suporte!')
    }
  }

  getWepayoutInvoiceData(key: string){
    this.wepayoutService
    .getInvoiceByKey(key)
    .then(res => {
      console.log(res)
      this.wePayoutInvoiceData = res;
    })
    .catch(err => {
      console.error(err);
      this.toastr.error('Erro ao recuperar Invoice | Entre em contato com o Suporte!')
    })
  }

  goToPayment(invoice: any) {
    if (invoice.wePayoutKey) {
      this.goToInvoiceHtml(invoice.wePayoutKey)
    } else {
      this.invoiceService.goToPaymentInvoice(
        invoice.id,
      ).then(res => {
        if (!res.data) {
          console.error(res);
          this.toastr.warning('Erro ao gerar Invoice | Fale com Suporte!')
        } else {
          this.goToInvoiceHtml(invoice.wePayoutKey)
        }
      })
        .catch(err => {
          console.error(err);
          this.toastr.error('Erro ao gerar Invoice | Fale com Suporte!')
        })
    }
  }

  goToInvoiceHtml(wePayoutKey: string) {
    window.open(`${environment.wepayoutInvoicePage}${wePayoutKey}`)
  }

  goToReceipt(invoice: any) {

  }
}
