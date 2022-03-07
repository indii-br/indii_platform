import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/services/company.service';
import { ContractService } from 'src/app/services/contract.service';
import { RATE_TYPE } from 'src/app/types/constants';

@Component({
  selector: 'app-new-contract',
  templateUrl: './new-contract.component.html',
  styleUrls: ['./new-contract.component.less']
})
export class NewContractComponent implements OnInit {

  selectedContractType: string;
  selectedModelOfContract: string = 'SELF_UPLOADED_CONTRACT';
  selectedSeniorityLevel: string;
  selectedRate: string;

  hasEndDate: boolean = false;

  contractData: any;
  contractToSaveOrUpdate: any = {};

  editingNewContract: boolean = true;
  companyData: any;


  seniorityLevelList: Array<string> = [
    'Não se aplica',
    'Junior',
    'Pleno',
    'Senior',
    'Lead/Leader',
    'Principal / Staff'
  ]

  invoiceCycle: Array<any> = [
    {
      key: 'WEEKLY',
      label: 'Semanal'
    },
    {
      key: 'MONTHLY',
      label: 'Mensal'
    },
    {
      key: 'BIWEEKLY',
      label: 'Quinzenal'
    }
  ]

  constructor(
    private contractService: ContractService,
    private toastrService: ToastrService,
    private companyService: CompanyService,
    private route: Router
  ) {}

  async ngOnInit() {
    const { data, error } = await this.companyService.getCompanyByUser()

    if (data) {
      this.companyData = data;
    }
  }

  setSelectedContractType(ev) {
    this.selectedContractType = ev;
  }

  setEditing(ev) {
    this.editingNewContract = ev;
  }

  setValue(key: string, value: string) {
    this.contractToSaveOrUpdate[key] = value;
  }

  triggerSaveOrEdit() {
    this.saveNewContract();
  }

  async saveNewContract() {
    let status = '';
    let isSelfUploaded = false;

    if (this.selectedModelOfContract === 'SELF_UPLOADED_CONTRACT') {
      status = 'SELF_UPLOADED_WAITING_CONFIG_PAYMENT';
      isSelfUploaded = true;
    } else {
      status = 'WAITING_CONFIG_PAYMENT';
    }

    const contractToSave = Object.assign({
      company: this.companyData.id,
      contractModel: this.selectedModelOfContract,
      contractType: this.selectedContractType,
      status: status
    }, this.contractToSaveOrUpdate)

    const { data, error } = await this.contractService.saveNewContract(contractToSave)


    if(error){
      this.toastrService.error("Erro ao salvar contrato!")
      console.error(error)
    }

    if(data){
      this.toastrService.success("Contrato criado com sucesso!")
      this.route.navigate(["/admin/editar-contrato", data.id])
    }
  }

  getTitlePanel() {
    return 'Novo Contrato | ' + RATE_TYPE[this.selectedContractType].label
  }

  isMilestone() {
    return this.selectedContractType && this.selectedContractType === 'MILESTONE';
  }

  isFixed() {
    return this.selectedContractType && this.selectedContractType === 'FIXED';
  }
}
