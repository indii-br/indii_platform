import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContractService } from 'src/app/services/contract.service';
import { SELECTORS } from 'src/app/stores/selectors';

@Component({
  selector: 'app-contractor-documents',
  templateUrl: './contractor-documents.component.html',
  styleUrls: ['./contractor-documents.component.less']
})
export class ContractorDocumentsComponent implements OnInit {

  loading = false;
  contractList: Array<any>;

  constructor(
    private contractService: ContractService,
    private store: Store<any>
  ) { }

  async ngOnInit() {
    this.store
      .select(SELECTORS.COMPANY)
      .subscribe(async res => {
        const company = res?.companyData

        if (company) {
          const { data: contractsList, error: errorContractList } = await this.contractService.getAllByCompany(company.id)

          this.contractList = contractsList.filter(contract => contract.contractor)
          this.loading = true;
        }
      })
  }
}
