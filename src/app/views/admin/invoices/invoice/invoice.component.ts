import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InvoiceService } from 'src/app/services/invoice.service';
import { StorageService } from 'src/app/services/storage.service';
import { WepayoutService } from 'src/app/services/wepayout.service';
import { INVOICE_STATUS, PAYMENT_CYCLES, RATE_TYPE } from 'src/app/utils/constants';
import { convertArrayInObject } from 'src/app/utils/helpers';
import { CHECK_INVOICE } from 'src/app/utils/invoicesUtil';
import { environment } from 'src/environments/environment';

declare var Swal: any;

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.less']
})
export class InvoiceComponent implements OnInit {

  invoiceData: any;
  checkInvoice: any = CHECK_INVOICE;
  wePayoutInvoiceData: any;
  invoiceID: string;
  invoiceStatus: any = INVOICE_STATUS;
  rateTypes: any = RATE_TYPE;
  paymentCyclesValues: any = convertArrayInObject(PAYMENT_CYCLES)

  constructor(
    private route: ActivatedRoute,
    private storageService: StorageService,
    private toastrService: ToastrService,
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
      // this.getWepayoutInvoiceData(this.invoiceData.wePayoutKey)
    }

    if (error) {
      this.toastr.error('Erro ao carregar Invoice | Fale com Suporte!')
    }
  }

  getWepayoutInvoiceData(key: string) {
    this.wepayoutService
      .getInvoiceByKey(key)
      .then(res => {
        console.log(res)
        this.wePayoutInvoiceData = res;
      })
      .catch(err => {
        console.error(err);
        if (err.status === 404) {

        }
      })
  }

  goToPayment(invoice: any) {
    // if (invoice.wePayoutKey) {
    //   this.goToInvoiceHtml(invoice.wePayoutKey)
    // } else {
    //   this.invoiceService.goToPaymentInvoice(
    //     invoice.id,
    //   ).then(res => {
    //     if (!res.data) {
    //       console.error(res);
    //       this.toastr.warning('Erro ao gerar Invoice | Fale com Suporte!')
    //     } else {
    //       this.goToInvoiceHtml(invoice.wePayoutKey)
    //     }
    //   })
    //     .catch(err => {
    //       console.error(err);
    //       this.toastr.error('Erro ao gerar Invoice | Fale com Suporte!')
    //     })
    // }
  }

  goToInvoiceHtml(wePayoutKey: string) {
    window.open(`${environment.wepayoutInvoicePage}${wePayoutKey}`)
  }

  isHourly() {
    return this.invoiceData.contract?.contractType === 'HOURLY';
  }

  async viewNFSe(fileToDonwload) {
    const filePath = fileToDonwload.replace("notas-fiscais-invoices/", '');
    const { data: file, error } = await this.storageService.getSignedNfseUrl(filePath)

    if (error) {
      this.toastrService.error("Erro ao baixar Nota Fiscal!");
      console.error(error)
    }

    if (file) {
      window.open(file.signedURL)
    }
  }

  async approveInvoice(id: string) {
    const { data, error } = await this.invoiceService.approveInvoice(id)

    if (data) {
      this.getInvoiceById(id)
      this.toastrService.success('Fatura aprovada com sucesso!')
    }
    if (error) {
      console.log(error)
      this.toastrService.error('Erro ao aprovar fatura!')
    }
  }

  async removeApproval(id: string) {
    Swal.fire({
      title: 'Você tem certeza disso?',
      text: "Ao remover a aprovação a fatura volta para EM ABERTO e sai do ciclo de cobranças!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, remover aprovação!',
      cancelButtonText: 'Não'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data, error } = await this.invoiceService.removeApprovalInvoice(id)

        if (data) {
          this.getInvoiceById(id)
          this.toastrService.success('Aprovação removida com sucesso!')
        }
        if (error) {
          console.log(error)
          this.toastrService.error('Erro ao remover aprovação fatura!')
        }
      }
    })
  }

  async archiveInvoice(id: string) {
    Swal.fire({
      title: 'Você tem certeza disso?',
      text: "Para reativar a fatura arquivada entre em contato com o suporte!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, arquivar fatura!',
      cancelButtonText: 'Não'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data, error } = await this.invoiceService.archiveInvoice(id)

        if (data) {
          this.getInvoiceById(id)
          this.toastrService.success('Arquivado com sucesso!')
        }
        if (error) {
          console.log(error)
          this.toastrService.error('Erro ao arquivar fatura!')
        }
      }
    })
  }

}
