import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContractService } from 'src/app/services/contract.service';
import { MilestoneService } from 'src/app/services/milestone.service';

@Component({
  selector: 'app-milestone-block',
  templateUrl: './milestone-block.component.html',
  styleUrls: ['./milestone-block.component.less']
})
export class MilestoneBlockComponent implements OnInit {

  @Input('milestoneData') milestoneData: any;
  @Input("contractData") contractData;

  @Output() onSaveMilestone: EventEmitter<any> = new EventEmitter();

  editMilestone: boolean = true;
  hideCancel: boolean = true;
  selectedAmount: any;

  milestoneToSaveOrUpdate: any = {};

  constructor(
    private milestoneService: MilestoneService,
    private toastrService: ToastrService,
    private contractService: ContractService
  ) { }

  ngOnInit(): void {
    this.milestoneToSaveOrUpdate = this.milestoneData;

    if(this.milestoneData && this.milestoneData.id){
      this.editMilestone = false;
    }
  }

  triggerSaveOrEdit() {
    const milestoneToSaveOrUpdate = Object.assign(this.milestoneToSaveOrUpdate, {
      amount: this.selectedAmount,
      contract: this.contractData.id
    })

    this.saveMilestoneConfig(milestoneToSaveOrUpdate)
  }

  async saveMilestoneConfig(milestoneToSaveOrUpdate) {
    const { data, error } = await this.milestoneService.saveMilestone(milestoneToSaveOrUpdate)

    if (error) {
      console.error(error)
      this.toastrService.error("Erro ao configurar Milestone/Entrega!")
    }

    if (data) {
      const { data: dataUpdateContract, error: errorOnUpdateContract } = await this.contractService.changeSelfUploadedContractStateMilestone(this.contractData.id)

      if (dataUpdateContract) {
        this.toastrService.success("Milestone/Entrega configurada com sucesso!")
        this.onSaveMilestone.emit(true);
      }

      if (errorOnUpdateContract) {
        console.error(errorOnUpdateContract)
        this.toastrService.error("Erro ao atualizar status do contrato!")
      }

    }
  }

  setEditing(ev) {
    this.editMilestone = ev;
    this.hideCancel = false;
  }

  setValue(key: string, value: string) {
    this.milestoneToSaveOrUpdate[key] = value;
  }

  getTitle() {
    if(this.milestoneData && this.milestoneData.id){
      return this.milestoneData.title;
    }

    return "Nova Entrega";
  }

}
