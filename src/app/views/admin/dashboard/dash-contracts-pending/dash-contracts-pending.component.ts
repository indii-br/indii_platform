import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContractService } from 'src/app/services/contract.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { SELECTORS } from 'src/app/stores/selectors';
import { CONTRACT_STATUS, PAYMENT_CYCLES, RATE_TYPE } from 'src/app/utils/constants';
import { convertArrayInObject } from 'src/app/utils/helpers';

@Component({
  selector: 'app-dash-contracts-pending',
  templateUrl: './dash-contracts-pending.component.html',
  styleUrls: ['./dash-contracts-pending.component.less']
})
export class DashContractsPendingComponent implements OnInit {

  contractsList: Array<any>;
  contractsListSize: number;
  loading: boolean =  true;

  contractStatus: any = CONTRACT_STATUS;
  rateTypes: any = RATE_TYPE;
  paymentCyclesValues: any = convertArrayInObject(PAYMENT_CYCLES)

  constructor(
    private store: Store<any>,
    private contractService: ContractService
    ) { }

  async ngOnInit() {
    this.store
      .select(SELECTORS.COMPANY)
      .subscribe(async res => {
        const company = res?.companyData

        if (company) {
          const { data: contractsList, error: errorContractList } = await this.contractService.getAllByCompany(company.id)

          this.contractsListSize = contractsList.length;
          this.contractsList = contractsList
          .filter(contract => {
            return contract.status !== 'PAYMENT_CYCLE' &&
              contract.status !== 'ARCHIVED' && 
              contract.status !== 'DONE'
          })
          .slice(0, 5);
          this.loading = false;
        }
      })
  }

}

