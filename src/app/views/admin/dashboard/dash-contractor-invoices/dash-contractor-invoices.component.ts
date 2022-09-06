import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { InvoiceService } from 'src/app/services/invoice.service';
import { SELECTORS } from 'src/app/stores/selectors';
import { INVOICE_STATUS, PAYMENT_CYCLES, RATE_TYPE } from 'src/app/utils/constants';
import { convertArrayInObject, getDueDateColor } from 'src/app/utils/helpers';
import { CHECK_INVOICE } from 'src/app/utils/invoicesUtil';

@Component({
  selector: 'app-dash-contractor-invoices',
  templateUrl: './dash-contractor-invoices.component.html',
  styleUrls: ['./dash-contractor-invoices.component.less']
})
export class DashContractorInvoicesComponent implements OnInit {
  loading: boolean = true;

  myInvoicesList: Array<any> = [];
  myInvoicesListSize: any;
  user: any;

  rateTypes: any = RATE_TYPE;
  paymentCyclesValues: any = convertArrayInObject(PAYMENT_CYCLES)

  invoiceStatus: any = INVOICE_STATUS;
  getDueDateColor: any = getDueDateColor;

  checkInvoice: any = CHECK_INVOICE;
  
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
      const {data: myInvoicesList, error} = await this.invoiceService.getInvoicetByContractor(company.id);
      this.loading = false;
      if(myInvoicesList){
        this.myInvoicesList = myInvoicesList;
        this.myInvoicesListSize = myInvoicesList.length;
      }

      if(error){
        console.error(error)
        this.toastrService.error("Erro ao recuperar seus pagamentos!")
      }
    }
  }
}

