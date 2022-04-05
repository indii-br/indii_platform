import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppliesService } from 'src/app/services/applies.service';
import { SELECTORS } from 'src/app/stores/selectors';

@Component({
  selector: 'app-dash-applies',
  templateUrl: './dash-applies.component.html',
  styleUrls: ['./dash-applies.component.less']
})
export class DashAppliesComponent implements OnInit {

  appliesList: Array<any>;
  appliesSize: number;
  loading: boolean =  false;

  constructor(
    private appliesService: AppliesService,
    private store: Store<any>
    ) { }

  async ngOnInit() {
    this.store
      .select(SELECTORS.COMPANY)
      .subscribe(async res => {
        const company = res?.companyData

        if (company) {
          const { data: appliesList, error: errorContractList } = await this.appliesService.getAppliesByCompany(company.id)

          this.appliesSize = appliesList.length;
          this.appliesList = appliesList.slice(0, 4);
          this.loading = true;
        }
      })
  }

}
