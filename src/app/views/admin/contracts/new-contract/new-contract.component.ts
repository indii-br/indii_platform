import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/services/company.service';
import { ContractService } from 'src/app/services/contract.service';
import { CONTRACT_MODEL_TYPE, RATE_TYPE } from 'src/app/utils/constants';

@Component({
  selector: 'app-new-contract',
  templateUrl: './new-contract.component.html',
  styleUrls: ['./new-contract.component.less']
})
export class NewContractComponent implements OnInit {

  selectedContractType: string;
  selectedModelOfContract: string = 'SELF_UPLOADED_CONTRACT';
  selectedSeniorityLevel: string;

  hasEndDate: boolean = false;

  contractData: any;
  contractToSaveOrUpdate: any = {};

  editingNewContract: boolean = true;
  hideCancel: boolean = true;
  companyData: any;

  rateType: any = RATE_TYPE
  contractModelType: any = CONTRACT_MODEL_TYPE

  seniorityLevelList: Array<string> = [
    'Não se aplica',
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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      const contractId = params['id'];
      if (contractId) {
        this.editingNewContract = false;

        const { data: contractData, error } = await this.contractService.getContractById(contractId)

        if (contractData) {
          this.contractData = contractData;
          this.contractToSaveOrUpdate = contractData;
          this.selectedContractType = contractData.contractType
        }
      }
    });

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
    this.hideCancel = false;
    this.selectedSeniorityLevel = this.contractData?.seniorityLevel;
  }

  setValue(key: string, value: string) {
    this.contractToSaveOrUpdate[key] = value;
  }

  triggerSaveOrEdit() {
    if (this.contractData && this.contractData?.id) {
      this.editContractInfo();
    } else {
      this.saveNewContract();
    }
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
      status: status,
      isSelfUploaded: isSelfUploaded
    }, this.contractToSaveOrUpdate)

    const { data, error } = await this.contractService.saveNewContract(contractToSave)


    if (error) {
      this.toastrService.error("Erro ao salvar contrato!")
      console.error(error)
    }

    if (data) {
      this.toastrService.success("Contrato criado com sucesso!")
      this.router.navigate(["/admin/editar-contrato", data[0].id])
    }
  }

  async editContractInfo() {

    let contractToUpdate = Object.assign({}, this.contractToSaveOrUpdate);

    delete contractToUpdate.inviteContractor;
    delete contractToUpdate.paymentConfig;
    delete contractToUpdate.contractor;
    delete contractToUpdate.company;

    const { data, error } = await this.contractService.updateContractData(contractToUpdate, this.contractToSaveOrUpdate.id)
    if (data) {
      this.contractData = data[0];
      this.contractToSaveOrUpdate = data[0];
      this.editingNewContract = false;
      this.toastrService.success('Editado com sucesso!')
    }
    if (error) {
      console.log(error)
      this.editingNewContract = true;
      this.toastrService.error('Erro ao Editar!')
    }
  }

  getTitlePanel() {
    if (this.contractData && this.companyData?.id) {
      return this.contractData.contractName
    }

    return 'Novo Contrato - ' + RATE_TYPE[this.selectedContractType].label
  }

  isMilestone() {
    return this.selectedContractType && this.selectedContractType === 'MILESTONE';
  }

  isFixed() {
    return this.selectedContractType && this.selectedContractType === 'FIXED';
  }

  showForm() {
    if (this.editingNewContract) {
      return !!this.selectedContractType;
    } else {
      return !!this.contractData;
    }
  }

  setEndDate() {
    this.hasEndDate = true;
    this.editingNewContract = true;
    this.hideCancel = false;
  }

  showPaymentBlock(){
    return this.contractData &&
    this.contractData.id &&
    this.contractData.contractType !== 'MILESTONE';
  }

  showContractorBlock(){
    return this.contractData &&
    this.contractData.id &&
    this.contractData.paymentConfig &&
    this.contractData.contractType !== 'MILESTONE';
  }

  showImportContractBlock(){
    return this.contractData &&
    this.contractData.id &&
    this.contractData.paymentConfig &&
    (this.contractData.inviteContractor || this.contractData.contractor) &&
    this.contractData.contractType !== 'MILESTONE';
  }
}
