import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContractService } from 'src/app/services/contract.service';
import { MilestoneService } from 'src/app/services/milestone.service';

declare var Swal: any;

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

  hideEdit: boolean = false;

  milestoneToSaveOrUpdate: any = {};

  constructor(
    private milestoneService: MilestoneService,
    private toastrService: ToastrService,
    private contractService: ContractService
  ) { }

  ngOnInit(): void {
    this.milestoneToSaveOrUpdate = this.milestoneData;

    if (this.milestoneData && this.milestoneData.id) {
      if (this.isMilestoneDone(this.milestoneData.statusCode)) {
        this.hideEdit = true;
      }

      this.editMilestone = false;
    }
  }

  triggerSaveOrEdit() {
    const milestoneToSaveOrUpdate = Object.assign(this.milestoneToSaveOrUpdate, {
      amount: this.selectedAmount,
      contract: this.contractData.id
    })

    if (milestoneToSaveOrUpdate && milestoneToSaveOrUpdate.id) {
      this.updateMilestone(milestoneToSaveOrUpdate)
    } else {
      this.saveMilestoneConfig(milestoneToSaveOrUpdate)
    }

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

  async updateMilestone(milestoneToSaveOrUpdate) {
    const { data, error } = await this.milestoneService.updateMilestoneData(milestoneToSaveOrUpdate, milestoneToSaveOrUpdate.id)

    if (data) {
      this.toastrService.success("Milestone/Entrega atualizado com sucesso!")
      this.onSaveMilestone.emit(true);
    }

    if (error) {
      this.toastrService.error("Erro ao atualizar Milestone/Entrega!")
    }
  }

  setEditing(ev) {
    this.editMilestone = ev;
    this.hideCancel = false;
    this.selectedAmount = this.milestoneData.amount
  }

  setValue(key: string, value: string) {
    this.milestoneToSaveOrUpdate[key] = value;
  }

  getTitle() {
    if (this.milestoneData && this.milestoneData.id) {
      return this.milestoneData.title;
    }

    return "Nova Entrega";
  }

  async archiveMilestone(id: string) {
    Swal.fire({
      title: 'Você tem certeza disso?',
      text: "Delete a fatura gerada para esta entrega manualmente caso necessário!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, arquivar entrega!',
      cancelButtonText: 'Não'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data, error } = await this.milestoneService.archiveMilestone(id)

        if (data) {
          this.onSaveMilestone.emit(true);
          this.toastrService.success('Arquivado com sucesso!')
        }
        if (error) {
          console.log(error)
          this.toastrService.error('Erro ao arquivar milestone!')
        }
      }
    })
  }

  async doneMilestone(id: string) {
    Swal.fire({
      title: 'Concluir Entrega?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, concluir entrega!',
      cancelButtonText: 'Não'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data, error } = await this.milestoneService.doneMilestone(id)

        if (data) {
          this.onSaveMilestone.emit(true);
          this.toastrService.success('Concluído com sucesso!')
        }
        if (error) {
          console.log(error)
          this.toastrService.error('Erro ao concluir entrega!')
        }
      }
    })
  }


  async openMilestoneAgain(id: string) {
    Swal.fire({
      title: 'Reverter conclusão da entrega?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, Abrir entrega novamente!',
      cancelButtonText: 'Não'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data, error } = await this.milestoneService.reOpenMilestone(id)

        if (data) {
          this.onSaveMilestone.emit(true);
          this.toastrService.success('Concluído com sucesso!')
        }
        if (error) {
          console.log(error)
          this.toastrService.error('Erro ao reverter conclusão da entrega!')
        }
      }
    })
  }

  isMilestoneDone(statusCode) {
    return statusCode === 300;
  }

}
