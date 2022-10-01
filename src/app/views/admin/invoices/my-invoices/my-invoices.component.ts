import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { InvoiceService } from 'src/app/services/invoice.service';
import { SELECTORS } from 'src/app/stores/selectors';
import { INVOICE_STATUS, PAYMENT_CYCLES, RATE_TYPE } from 'src/app/utils/constants';
import { convertArrayInObject, getDueDateColor } from 'src/app/utils/helpers';
import { CHECK_INVOICE } from 'src/app/utils/invoicesUtil';

@Component({
  selector: 'app-my-invoices',
  templateUrl: './my-invoices.component.html',
  styleUrls: ['./my-invoices.component.less']
})
export class MyInvoicesComponent implements OnInit {
  loading: boolean = true;

  myInvoicesList: Array<any> = [];
  user: any;

  rateTypes: any = RATE_TYPE;
  paymentCyclesValues: any = convertArrayInObject(PAYMENT_CYCLES)

  invoiceStatus: any = INVOICE_STATUS;
  getDueDateColor: any = getDueDateColor;
  
  checkInvoice: any = CHECK_INVOICE

  constructor(
    private store: Store<any>,
    private invoiceService: InvoiceService,
    private toastrService: ToastrService
    ) { }

  async ngOnInit() {
    this.store
      .select(SELECTORS.USER)
      .subscribe(res => {
        this.user = res?.userData
        this.getAllInvoicesByContractor(this.user)
      })
  }

  async getAllInvoicesByContractor(company: any){
    if(company){
      const {data: myInvoicesList, error} = await this.invoiceService.getInvoicesByContractor(company.id);
      this.loading = false;
      if(myInvoicesList){
        this.myInvoicesList = myInvoicesList;
      }

      if(error){
        console.error(error)
        this.toastrService.error("Erro ao recuperar seus pagamentos!")
      }
    }
  }

  isOpen(invoice: any) {
    return invoice.statusCode < 300;
  }
}
