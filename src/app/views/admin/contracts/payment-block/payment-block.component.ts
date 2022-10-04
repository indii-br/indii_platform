import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContractService } from 'src/app/services/contract.service';
import { PAYMENT_CYCLES, RATE_TYPE, SUBMIT_DOCUMENT_LIMIT, DUE_DATE_LIMIT } from 'src/app/utils/constants';
import { convertArrayInObject } from 'src/app/utils/helpers';

@Component({
  selector: 'app-payment-block',
  templateUrl: './payment-block.component.html',
  styleUrls: ['./payment-block.component.less']
})
export class PaymentBlockComponent implements OnInit {

  hideCancel: boolean = true;
  editingPaymentContract: boolean = true;

  selectedRate: string;
  selectedPaymentCycle: string;
  selectedSubmitLimit: string;
  selectedDueDate: string;

  rateType: any = RATE_TYPE

  paymentCycles: any = PAYMENT_CYCLES
  paymentCyclesValues: any = convertArrayInObject(PAYMENT_CYCLES)

  submitDocumentsLimit: any = SUBMIT_DOCUMENT_LIMIT
  submitDocumentsLimitValues: any = convertArrayInObject(SUBMIT_DOCUMENT_LIMIT)

  // TODO: FIXO EM 3 DIAS [3_DAYS] no BANCO DE DADOS
  // dueDateLimitValues: any = convertArrayInObject(DUE_DATE_LIMIT)
  // dueDateLimit: any = DUE_DATE_LIMIT[3]

  paymentData: any = {}
  paymentToSaveOrUpdate: any = {};

  @Input("contractData") contractData;

  constructor(
    private contractService: ContractService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    if(this.contractData && this.contractData.paymentConfig){
      this.editingPaymentContract = false;
      this.paymentData = this.contractData.paymentConfig;
      this.paymentToSaveOrUpdate = this.contractData.paymentConfig;
    }
  }

  setEditing(ev) {
    this.editingPaymentContract = ev;
    this.hideCancel = false;
    this.selectedRate = this.paymentData.rate;
    this.selectedPaymentCycle = this.paymentData.paymentCycle;
    this.selectedDueDate = this.paymentData.dueDate;
  }

  triggerSaveOrEdit() {
    if(this.paymentData && this.paymentData?.id){
      // TODO
    }else{
      this.savePaymentConfig();
    }
  }

  async savePaymentConfig() {
    const paymentConfigToSave = Object.assign({
      rate: this.selectedRate,
      contract: this.contractData.id
    }, this.paymentToSaveOrUpdate)

    const { data, error } = await this.contractService.saveNewPaymentConfig(paymentConfigToSave)

    if (error) {
      console.error(error)
      this.toastrService.error("Erro ao configurar pagamento!")
    }

    if (data) {
      const { data: dataUpdateContract, error: errorOnUpdateContract } = await this.contractService.changeSelfUploadedContractStatePaymentConfig(this.contractData.id, data[0].id)
     
      if (dataUpdateContract) {
        this.toastrService.success("Pagamento configurado com sucesso!")
        this.paymentData = data;
        this.paymentToSaveOrUpdate = data;
        this.editingPaymentContract = false;
      }

      if (errorOnUpdateContract) {
        console.error(errorOnUpdateContract)
        this.toastrService.error("Erro ao atualizar status do contrato!")
      }

    }
  }

  setValue(key: string, value: string) {
    this.paymentToSaveOrUpdate[key] = value;
  }

  isFixed() {
    return this.contractData.contractType === 'FIXED'
  }

  isWeekly() {
    return this.selectedPaymentCycle === 'WEEKLY'
  }

  isBiWeekly() {
    return this.selectedPaymentCycle === 'BIWEEKLY'
  }

  isMonthly() {
    return this.selectedPaymentCycle === 'MONTHLY'
  }
}
