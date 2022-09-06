import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { DocumentService } from 'src/app/services/document.service';
import { StorageService } from 'src/app/services/storage.service';
import { SELECTORS } from 'src/app/stores/selectors';
import { InvoiceService } from '../../../../services/invoice.service';
import { INVOICE_STATUS, PAYMENT_CYCLES, RATE_TYPE } from '../../../../utils/constants';
import { convertArrayInObject } from '../../../../utils/helpers';

@Component({
  selector: 'app-contractor-invoice',
  templateUrl: './contractor-invoice.component.html',
  styleUrls: ['./contractor-invoice.component.less']
})
export class ContractorInvoiceComponent implements OnInit {

  invoiceData: any;
  invoiceID: string;
  invoiceStatus: any = INVOICE_STATUS;
  rateTypes: any = RATE_TYPE;
  paymentCyclesValues: any = convertArrayInObject(PAYMENT_CYCLES)

  documentDataNFSe: any = {};

  userData: any;

  constructor(
    private route: ActivatedRoute,
    private storageService: StorageService,
    private toastrService: ToastrService,
    private invoiceService: InvoiceService,
    private toastr: ToastrService,
    private store: Store<any>
  ) { }

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.invoiceID = params['id'];

      if (this.invoiceID) {
        this.getInvoiceById(this.invoiceID)
      }
    })

    this.store
      .select(SELECTORS.USER)
      .subscribe(async res => {
        this.userData = res?.userData
      })
  }

  async getInvoiceById(invoiceID: string) {
    const { data, error } = await this.invoiceService.getInvoicetById(invoiceID);
    if (data && data[0]) {
      this.invoiceData = data[0];
    }

    if (error) {
      this.toastr.error('Erro ao carregar Invoice | Fale com Suporte!')
    }
  }

  async uploadNFSeFile(event) {
    const file = event.target.files[0]

    if (file) {
      const { data: nfeUploaded, error } = await this.storageService.createNFSeInvoice(file, this.userData, this.invoiceID)

      if (error) {
        this.toastrService.error("Erro ao carregar NFSe!");
        console.error(error)
      }

      if (nfeUploaded) {
        let documentResponse;
        let errorResponse;

        this.documentDataNFSe = nfeUploaded.Key;

        if (this.documentDataNFSe) {
          const { data, error } = await this.invoiceService.updateNFSeInvoice(this.documentDataNFSe, this.invoiceID)
          documentResponse = data;
          errorResponse = error;
        }

        if (documentResponse) {
          this.toastrService.success("NFSe carregado com sucesso!");
          this.getInvoiceById(this.invoiceID)
        }

        if (errorResponse) {
          this.toastrService.error("Erro ao carregar NFSe - Upload!");
          console.error(errorResponse)
        }
      }
    }
  }

  async viewNFSe(fileToDonwload) {
    const filePath = fileToDonwload.replace("notas-fiscais-invoices/", '');
    const { data: file, error } = await this.storageService.getSignedNfseUrl(filePath)

    if (error) {
      this.toastrService.error("Erro ao baixar NFSe!");
      console.error(error)
    }

    if (file) {
      window.open(file.signedURL)
    }
  }

}
