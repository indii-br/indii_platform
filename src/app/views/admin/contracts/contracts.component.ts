import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { ContractService } from 'src/app/services/contract.service';
import { CONTRACT_STATUS, DUE_DATE_LIMIT, PAYMENT_CYCLES, RATE_TYPE, SUBMIT_DOCUMENT_LIMIT } from 'src/app/utils/constants';
import { convertArrayInObject } from 'src/app/utils/helpers';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.less']
})
export class ContractsComponent implements OnInit {

  contractList: Array<any> = [];
  loading: boolean = false;

  rateTypes: any = RATE_TYPE;
  contractStatus: any = CONTRACT_STATUS;

  paymentCyclesValues: any = convertArrayInObject(PAYMENT_CYCLES)

  submitDocumentsLimitValues: any = convertArrayInObject(SUBMIT_DOCUMENT_LIMIT)

  dueDateLimitValues: any = convertArrayInObject(DUE_DATE_LIMIT)

  constructor(
    private contractService: ContractService,
    private companyService: CompanyService,
  ) { }

  async ngOnInit() {
    const { data: company, errorCompany } = await this.companyService.getCompanyByUser()

    if (company) {
      const { data: contractsList, error: errorContractList } = await this.contractService.getAllByCompany(company.id)
      
      this.contractList = contractsList
      this.loading = true;
    }
  }

}
