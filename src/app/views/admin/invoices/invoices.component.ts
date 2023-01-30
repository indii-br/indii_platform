import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { ToastrService } from "ngx-toastr";
import { InvoiceService } from "src/app/services/invoice.service";
import { SELECTORS } from "src/app/stores/selectors";
import {
  CONTRACT_TYPES,
  INVOICE_STATUS,
  PAYMENT_CYCLES,
  RATE_TYPE,
} from "src/app/utils/constants";
import { convertArrayInObject, getDueDateColor } from "src/app/utils/helpers";
import { CHECK_INVOICE } from "src/app/utils/invoicesUtil";

declare var window: any;
@Component({
  selector: "app-invoices",
  templateUrl: "./invoices.component.html",
  styleUrls: ["./invoices.component.less"],
})
export class InvoicesComponent implements OnInit {
  loading: boolean = true;

  invoicesList: Array<any> = [];
  rawInvoiceList: Array<any> = [];
  company: any;

  rateTypes: any = RATE_TYPE;
  paymentCyclesValues: any = convertArrayInObject(PAYMENT_CYCLES);

  invoiceStatus: any = INVOICE_STATUS;
  getDueDateColor: any = getDueDateColor;

  checkInvoice: any = CHECK_INVOICE;

  constructor(
    private store: Store<any>,
    private invoiceService: InvoiceService,
    private toastrService: ToastrService
  ) {}

  async ngOnInit() {
    this.store.select(SELECTORS.COMPANY).subscribe((res) => {
      this.company = res?.companyData;
      this.getAllInvoices(this.company);
    });
  }

  async getAllInvoices(company: any) {
    if (company) {
      const { data: invoicesList, error } =
        await this.invoiceService.getInvoicesByCompany(company.id);
      this.loading = false;
      if (invoicesList) {
        this.invoicesList = invoicesList;
        this.rawInvoiceList = invoicesList;
      }

      if (error) {
        console.error(error);
        this.toastrService.error("Erro ao recuperar Pagamentos!");
      }
    }
  }

  isOpen(invoice: any) {
    return invoice.statusCode < 300;
  }

  isMilestone(contractType) {
    return contractType === CONTRACT_TYPES.MILESTONE;
  }

  applyFilter(filter: string) {
    if (filter === "all") {
      this.getAllInvoices(this.company);
    } else if (filter === "open") {
      this.invoicesList = this.rawInvoiceList.filter(
        (invoice) => invoice.statusCode === 200
      );
    } else if (filter === "approved") {
      this.invoicesList = this.rawInvoiceList.filter(
        (invoice) => invoice.statusCode === 210
      );
    } else if (filter === "paid") {
      this.invoicesList = this.rawInvoiceList.filter(
        (invoice) => invoice.statusCode === 300
      );
    } else if (filter === "archived") {
      this.invoicesList = this.rawInvoiceList.filter(
        (invoice) => invoice.statusCode === 400
      );
    }

    window.document.querySelectorAll(".filter").forEach((element) => {
      element.classList.remove("selectedFilter");
    });

    window.document
      .querySelector(".filter-" + filter)
      .classList.add("selectedFilter");
  }
}
