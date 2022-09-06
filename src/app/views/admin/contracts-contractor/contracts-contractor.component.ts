import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { ContractService } from 'src/app/services/contract.service';
import { SELECTORS } from 'src/app/stores/selectors';
import { CONTRACT_STATUS, DUE_DATE_LIMIT, PAYMENT_CYCLES, RATE_TYPE, SUBMIT_DOCUMENT_LIMIT } from 'src/app/utils/constants';
import { convertArrayInObject } from 'src/app/utils/helpers';

declare var Swal: any;

@Component({
  selector: 'app-contracts-contractor',
  templateUrl: './contracts-contractor.component.html',
  styleUrls: ['./contracts-contractor.component.less']
})
export class ContractsContractorComponent implements OnInit {

  myContractsList: Array<any>;
  myInvitesList: Array<any>;
  user: any;
  loading: boolean = false;

  rateTypes: any = RATE_TYPE;
  contractStatus: any = CONTRACT_STATUS;

  paymentCyclesValues: any = convertArrayInObject(PAYMENT_CYCLES)

  submitDocumentsLimitValues: any = convertArrayInObject(SUBMIT_DOCUMENT_LIMIT)

  dueDateLimitValues: any = convertArrayInObject(DUE_DATE_LIMIT)

  constructor(
    private contractService: ContractService,
    private store: Store<any>,
    private toastrService: ToastrService
  ) { }

  async ngOnInit() {
    this.store
      .select(SELECTORS.USER)
      .subscribe(async res => {
        this.user = res?.userData

        if (this.user) {
          this.getAllContracts(this.user.id)

          const { data: myInvitesList, errorInvites } = await this.contractService.getAllInvitesByContractorEmail(this.user.email)

          if (myInvitesList && myInvitesList.length !== 0) {
            this.myInvitesList = myInvitesList;
            console.log(myInvitesList)

            const contractInvite = myInvitesList[0];

            Swal.fire({
              title: 'Você foi convidado para um contrato!',
              text: `A empresa ${contractInvite.contract.company.name} te convidou para um contrato: ${contractInvite.contract.contractName}`,
              icon: 'warning',
              showCancelButton: false,
              confirmButtonText: 'Entrar no contrato',
            }).then(async (result) => {
              if (result.isConfirmed) {
                const { data: inviteData, error } = await this.contractService.setContractorInviteToJoined(this.user.id, contractInvite.id)

                if (inviteData) {
                  const { data: dataUpdateContract, errorOnUpdateContract } = await this.contractService.setContractorInContract(this.user.id, contractInvite.contract.id)

                  if (dataUpdateContract) {
                    this.toastrService.success("Entrou no projeto!")
                    this.getAllContracts(this.user.id)
                  }

                  if (errorOnUpdateContract) {
                    console.error(errorOnUpdateContract)
                    this.toastrService.error("Erro ao atualizar usuário do contrato!")
                  }
                }

                if (error) {
                  this.toastrService.error("Erro ao entrar no projeto!")
                }
              }
            })
          }

          if (errorInvites) {
            console.error(errorInvites);
            this.toastrService.error("Erro ao carregar convites")
          }
        }
      })
  }

  async getAllContracts(userId: string) {
    const { data: myContractsList, errorContracts } = await this.contractService.getAllByContractor(userId)

    if (myContractsList) {
      this.myContractsList = myContractsList;
      this.loading = true;
    }

    if (errorContracts) {
      console.error(errorContracts);
      this.toastrService.error("Erro ao carregar contratos")
    }
  }
}
