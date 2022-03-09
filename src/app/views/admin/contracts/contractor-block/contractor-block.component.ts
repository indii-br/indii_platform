import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContractService } from 'src/app/services/contract.service';

declare var Swal: any;

@Component({
  selector: 'app-contractor-block',
  templateUrl: './contractor-block.component.html',
  styleUrls: ['./contractor-block.component.less']
})
export class ContractorBlockComponent implements OnInit {

  showInviteBtn: boolean = true;
  showInvitedBlock: boolean = false;

  @Input("contractData") contractData;

  constructor(
    private contractService: ContractService,
    private toastrService: ToastrService
  ) { }

  async ngOnInit() {
    if(this.contractData && this.contractData?.inviteContractor && !this.contractData?.contractor){
      this.showInviteBtn = false;
      this.showInvitedBlock = true;
    }
  }

  async inviteContractor() {
    const { value: email } = await Swal.fire({
      title: 'Adicionar Profissional',
      input: 'email',
      inputLabel: 'Email do profissional',
      inputPlaceholder: 'Insira o email do profissional'
    })

    if (email) {
      const { data: inviteData, error } = await this.contractService.createContractorInvite(this.contractData.id, email)

      if (inviteData) {
        const { data: dataUpdateContract, errorOnUpdateContract } = await this.contractService.changeSelfUploadedContractStateInviteContractor(this.contractData.id, inviteData[0].id)

        if (dataUpdateContract) {
          this.toastrService.success("Profissional adicionado com sucesso!")
        }

        if (errorOnUpdateContract) {
          console.error(errorOnUpdateContract)
          this.toastrService.error("Erro ao atualizar status do contrato!")
        }
      }

      if (error) {
        this.toastrService.error("Erro ao adicionar profissional!")
      }
    }
  }

}
