import { Component, Input, OnInit } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';
import { PAYMENT_CYCLES, RATE_TYPE, SUBMIT_DOCUMENT_LIMIT, DUE_DATE_LIMIT } from 'src/app/types/constants';

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
  submitDocumentsLimit: any = SUBMIT_DOCUMENT_LIMIT
  dueDateLimit: any = DUE_DATE_LIMIT
  paymentData: any = {}
  paymentToSaveOrUpdate: any = {};

  @Input("contractData") contractData;

  constructor(
    private contractService: ContractService
  ) { }

  ngOnInit(): void {}

  setEditing(ev) {
    this.editingPaymentContract = ev;
    this.hideCancel = false;
  }

  triggerSaveOrEdit(){
    this.savePaymentConfig();
  }

  savePaymentConfig(){
    const paymentConfigToSave = Object.assign({
      rate: this.selectedRate,
      company: this.contractData.id
    }, this.paymentToSaveOrUpdate)

    console.log(paymentConfigToSave)
  }

  setValue(key: string, value: string) {
    this.paymentToSaveOrUpdate[key] = value;
  }

  isFixed(){
    return this.contractData.contractType === 'FIXED'
  }

  isWeekly(){
    return this.selectedPaymentCycle === 'WEEKLY'
  }

  isBiWeekly(){
    return this.selectedPaymentCycle === 'BIWEEKLY'
  }

  isMonthly(){
    return this.selectedPaymentCycle === 'MONTHLY'
  }

}
