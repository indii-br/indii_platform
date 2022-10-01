import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SquadService } from 'src/app/services/squad.service';
import { SELECTORS } from 'src/app/stores/selectors';
import { SQUADS_STATUS_CODE } from 'src/app/utils/constants';

@Component({
  selector: 'app-squads',
  templateUrl: './squads.component.html',
  styleUrls: ['./squads.component.less']
})
export class SquadsComponent implements OnInit {

  squadsList: Array<any>

  constructor(
    private squadService: SquadService,
    private store: Store<any>
  ) { }

  squadsStatusCode: any = SQUADS_STATUS_CODE

  async ngOnInit() {
    this.store
      .select(SELECTORS.COMPANY)
      .subscribe(async res => {
        const companyData = res?.companyData

        const { data, error } = await this.squadService.getSquadsByCompany(companyData.id)
        if (data) {
          this.squadsList = data;
        }

        if (error) {
          console.error(error)
        }
      })
  }

}
