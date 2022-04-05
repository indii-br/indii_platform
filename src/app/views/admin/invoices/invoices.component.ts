import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { InvoiceService } from 'src/app/services/invoice.service';
import { SELECTORS } from 'src/app/stores/selectors';
import { INVOICE_STATUS, PAYMENT_CYCLES, RATE_TYPE } from 'src/app/utils/constants';
import { convertArrayInObject, getDueDateColor } from 'src/app/utils/helpers';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.less']
})
export class InvoicesComponent implements OnInit {
  loading: boolean = true;

  invoicesList: Array<any> = [{}];
  company: any;

  rateTypes: any = RATE_TYPE;
  paymentCyclesValues: any = convertArrayInObject(PAYMENT_CYCLES)

  invoiceStatus: any = INVOICE_STATUS;
  getDueDateColor: any = getDueDateColor;

  constructor(
    private store: Store<any>,
    private invoiceService: InvoiceService,
    private toastrService: ToastrService
    ) { }

  async ngOnInit() {
    this.store
      .select(SELECTORS.COMPANY)
      .subscribe(res => {
        this.company = res?.companyData
        this.getAllInvoices(this.company)
      })
  }

  async getAllInvoices(company: any){
    if(company){
      const {data: invoicesList, error} = await this.invoiceService.getInvoicetByCompany(company.id);
      this.loading = false;
      if(invoicesList){
        console.log(invoicesList)
        this.invoicesList = invoicesList;
      }

      if(error){
        console.error(error)
        this.toastrService.error("Erro ao recuperar Pagamentos!")
      }
    }
  }
}
