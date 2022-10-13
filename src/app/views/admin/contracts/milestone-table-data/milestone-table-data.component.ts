import { Component, Input, OnInit } from '@angular/core';
import { MilestoneService } from 'src/app/services/milestone.service';

@Component({
  selector: 'app-milestone-table-data',
  templateUrl: './milestone-table-data.component.html',
  styleUrls: ['./milestone-table-data.component.less']
})
export class MilestoneTableDataComponent implements OnInit {

  @Input('contractId') contractId

  milestoneConfigValue: string;
  milestonesData: Array<any>;

  constructor(
    private milestoneService: MilestoneService
  ) { }

  async ngOnInit() {
    const { data, error } = await this.milestoneService.getMilestonesByContract(this.contractId)
    
    if (data && data.length !== 0) {
      this.milestonesData = data
    }

    if(!data || data.length === 0) {
      this.milestoneConfigValue = 'Aguardando Configuração'
    }
  }

  getAmountMilestones(){
    return this.milestonesData.reduce((acc, milestone) => parseFloat(acc) + parseFloat(milestone.amount), 0);
  }

}
