import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractService } from 'src/app/services/contract.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { MilestoneService } from 'src/app/services/milestone.service';
import { CONTRACT_STATUS, CONTRACT_TYPES, DUE_DATE_LIMIT, INVOICE_STATUS, PAYMENT_CYCLES, RATE_TYPE } from 'src/app/utils/constants';
import { convertArrayInObject, getDueDateColor } from 'src/app/utils/helpers';
import { CHECK_INVOICE } from 'src/app/utils/invoicesUtil';

@Component({
  selector: 'app-my-contract',
  templateUrl: './my-contract.component.html',
  styleUrls: ['./my-contract.component.less']
})
export class MyContractComponent implements OnInit {

  contractData: any;

  contractToSaveOrUpdate: any;
  selectedContractType: any;

  rateTypes: any = RATE_TYPE;
  contractStatus: any = CONTRACT_STATUS;
  invoiceStatus: any = INVOICE_STATUS;

  paymentCyclesValues: any = convertArrayInObject(PAYMENT_CYCLES)

  dueDateLimitValues: any = convertArrayInObject(DUE_DATE_LIMIT)

  getDueDateColor: any = getDueDateColor;

  invoicesListByContract: Array<any>;
  milestonesListByContracts: Array<any>;

  checkInvoice: any = CHECK_INVOICE;

  constructor(
    private contractService: ContractService,
    private invoiceService: InvoiceService,
    private milestoneService: MilestoneService,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      const contractId = params['id'];
      if (contractId) {
        const { data: contractData, errorContract } = await this.contractService.getContractById(contractId)

        if (contractData) {
          this.contractData = contractData;
          this.contractToSaveOrUpdate = contractData;
          this.selectedContractType = contractData.contractType
        }

        const { data: invoiceListByContractData, errorInvoices } = await this.invoiceService.getInvoiceByContract(contractId)
        this.invoicesListByContract = invoiceListByContractData;

        const { data: milestonesListByContracts, errorMilestones } = await this.milestoneService.getMilestonesByContract(contractId)
        this.milestonesListByContracts = milestonesListByContracts;
      }
    })
  }

  documentNameFormat(documentFullName: string) {
    const splitedDocumenName = documentFullName.split("/");
    return splitedDocumenName[splitedDocumenName.length - 1]
  }

  isMilestone(contractType) {
    return contractType === CONTRACT_TYPES.MILESTONE
  }
}
