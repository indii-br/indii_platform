import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { ContractService } from 'src/app/services/contract.service';
import { DocumentService } from 'src/app/services/document.service';
import { StorageService } from 'src/app/services/storage.service';
import { SELECTORS } from 'src/app/stores/selectors';
import { CHECK_INVOICE } from 'src/app/utils/invoicesUtil';
import { InvoiceService } from '../../../../services/invoice.service';
import { CONTRACT_TYPES, INVOICE_STATUS, PAYMENT_CYCLES, RATE_TYPE } from '../../../../utils/constants';
import { convertArrayInObject } from '../../../../utils/helpers';

declare var Swal: any;

@Component({
  selector: 'app-contractor-invoice',
  templateUrl: './contractor-invoice.component.html',
  styleUrls: ['./contractor-invoice.component.less']
})
export class ContractorInvoiceComponent implements OnInit {

  invoiceData: any;
  checkInvoice: any = CHECK_INVOICE
  contractData: any;
  invoiceID: string;
  invoiceStatus: any = INVOICE_STATUS;
  rateTypes: any = RATE_TYPE;
  paymentCyclesValues: any = convertArrayInObject(PAYMENT_CYCLES)

  documentDataNFSe: any = {};
  userData: any;

  editingHoursWork: boolean;

  constructor(
    private route: ActivatedRoute,
    private storageService: StorageService,
    private toastrService: ToastrService,
    private invoiceService: InvoiceService,
    private contractService: ContractService,
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
      this.editingHoursWork = !!this.invoiceData?.hoursToInvoice;

      this.getContractData(this.invoiceData.contract.id)
    }

    if (error) {
      this.toastr.error('Erro ao carregar Invoice | Fale com Suporte!')
    }
  }

  async getContractData(contractId: string) {
    const { data, error } = await this.contractService.getContractById(contractId);
    if (data) {
      this.contractData = data;
    }

    if (error) {
      this.toastr.error('Erro ao carregar Contrato | Fale com Suporte!')
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

  isHourly() {
    return this.invoiceData.contract?.contractType === 'HOURLY';
  }

  async editHours(hoursToEdit) {
    if (!hoursToEdit || hoursToEdit === '' || hoursToEdit === 0) {
      this.toastrService.warning("Valor inválido!");
      return
    }

    const maxHoursLimit = this.contractData?.paymentConfig?.maxHoursPerCycle;
    const hoursRate = this.contractData?.paymentConfig?.rate;

    if (hoursToEdit > maxHoursLimit) {
      this.toastrService.warning(`Máximo de horas permitido: ${maxHoursLimit}h`);
      return
    }

    const { data, error } = await this.invoiceService.updateHoursWorked(hoursToEdit, hoursRate, this.invoiceID)

    if (error) {
      this.toastrService.error("Erro ao atualizar horas da fatura!");
    }

    if (data) {
      this.toastrService.success("Fatura atualizada com sucesso!");

      this.editingHoursWork = false;
      this.getInvoiceById(this.invoiceID)
    }
  }

  isOpen(invoice: any) {
    return invoice.statusCode < 400;
  }

  isMilestone(contractType) {
    return contractType === CONTRACT_TYPES.MILESTONE
  }

  addAcceptanceCriteria() {
    Swal.fire({
      title: 'Solicitar análise',
      input: 'textarea',
      showCancelButton: true,
      confirmButtonText: 'Solicitar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.value) {
        const { data, error } = await this.invoiceService.updateAcceptanceCriteria(result.value, this.invoiceID)

        if (error) {
          this.toastrService.error("Erro ao atualizar solicitação de análise!");
        }

        if (data) {
          this.toastrService.success("Fatura atualizada com sucesso!");
          this.getInvoiceById(this.invoiceID)
        }
      }
    })
  }
}
