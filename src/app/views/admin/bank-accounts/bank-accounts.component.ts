import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { BankService } from 'src/app/services/bank.service';
import { WepayoutService } from 'src/app/services/wepayout.service';
import { SELECTORS } from 'src/app/stores/selectors';

declare var Swal: any;

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.less']
})
export class BankAccountsComponent implements OnInit {

  loading: boolean = true;
  editingBankAccount: boolean;
  hideCancel: boolean = true;

  myBankAccounts: Array<any>;

  userData: any;
  bankAccountData: any
  bankAccountToSaveOrUpdate: any = {};
  banksList: Array<any>;

  selectedBankAccount: any = { name: '' };

  selectedAccountType: any;
  selectedAccountTypeList: Array<any> = [{
    key: 'c',
    value: 'Conta Corrente'
  },
  {
    key: 'p',
    value: 'Conta Poupança'
  }];

  accountTypeNames: any = {
    c: 'Conta Corrente',
    p: 'Conta Poupança'
  }

  selectedDocumentType: any;
  selectedDocumentTypeList: Array<any> = [{
    key: 'cpf',
    value: 'CPF'
  },
  {
    key: 'cnpj',
    value: 'CNPJ'
  }];


  setEditing(ev) {
    this.editingBankAccount = ev;
    this.hideCancel = false;
  }

  constructor(
    private wepayoutService: WepayoutService,
    private toastrService: ToastrService,
    private bankService: BankService,
    private store: Store<any>
  ) { }

  async ngOnInit() {
    this.editingBankAccount = !this.myBankAccounts || this.myBankAccounts.length === 0;

    this.store
      .select(SELECTORS.USER)
      .subscribe(async res => {
        this.userData = res?.userData

        this.getAllBankAccounts(this.userData.id);
      })
  }

  async getAllBankAccounts(userId: string) {
    const { data, error } = await this.bankService.getBanksByUser(userId)

    if (data && data.length !== 0) {
      this.myBankAccounts = data;
      this.setBankAccountToEdit(this.myBankAccounts[0]);
      this.editingBankAccount = false;
    }
  }

  getTitle() {
    if (this.bankAccountToSaveOrUpdate && this.bankAccountToSaveOrUpdate.id) {
      return 'Editar Conta bancária'
    }

    return 'Adicionar Conta bancária';
  }

  setBankAccountToEdit(bankToEdit: any) {
    this.bankAccountToSaveOrUpdate = bankToEdit;
    this.bankAccountData = bankToEdit;
    this.selectedBankAccount = {
      name: this.bankAccountToSaveOrUpdate.bankName,
      code: this.bankAccountToSaveOrUpdate.bankCode,
    }
    this.selectedAccountType = this.bankAccountToSaveOrUpdate.accountType;
    this.selectedDocumentType = this.bankAccountToSaveOrUpdate.documentType;
  }

  setHideCancel() {
    return !this.bankAccountData || !this.bankAccountData.id
  }

  updateOrSaveBankAccount() {
    if (this.bankAccountToSaveOrUpdate && this.bankAccountToSaveOrUpdate.id) {
      this.editBankAccount()
    } else {
      this.saveNewBankAccount();
    }
  }

  saveNewBankAccount() {
    const bankDataToSave = {
      "name": `#${this.userData.id} | ${this.selectedBankAccount.name}`,
      "bank_code": this.selectedBankAccount.code,
      "bank_branch": this.bankAccountToSaveOrUpdate.bankBranch,
      "bank_branch_digit": this.bankAccountToSaveOrUpdate.bankBranchDigit,
      "account": this.bankAccountToSaveOrUpdate.account,
      "account_digit": this.bankAccountToSaveOrUpdate.accountDigit,
      "account_type": this.bankAccountToSaveOrUpdate.accountType,
      "pix_key": this.bankAccountToSaveOrUpdate.pixKey,
      "email": this.userData.email,
      "document": this.bankAccountToSaveOrUpdate.document,
      "document_type": this.bankAccountToSaveOrUpdate.documentType
    }

    if (this.checkBankDataToSave(bankDataToSave)) {
      const bankToSave = {
        // "wepayout_id": res.data.id,
        // "wallet_uuid": res.data.wallet_uuid,
        "bankCode": bankDataToSave.bank_code,
        "bankName": this.selectedBankAccount.name,
        "bankBranch": bankDataToSave.bank_branch,
        "bankBranchDigit": bankDataToSave.bank_branch_digit,
        "account": bankDataToSave.account,
        "accountDigit": bankDataToSave.account_digit,
        "accountType": bankDataToSave.account_type,
        "pixKey": bankDataToSave.pix_key,
        "document": bankDataToSave.document,
        "documentType": bankDataToSave.document_type,
        "email": bankDataToSave.email,
        "user": this.userData.id,
      }

      this.bankService
        .saveNewBankAccount(bankToSave)
        .then(res => {
          if (res) {
            this.toastrService.success('Conta Bancária Cadastrada com sucesso!')
            this.getAllBankAccounts(this.userData.id);
          }
        })
        .catch(err => {
          console.error(err);
          this.toastrService.error('Erro ao cadastrar conta bancária!')
        })
    }
  }

  async editBankAccount() {
    const wepayoutBankToUpdate = {
      "name": `#${this.userData.id} | ${this.selectedBankAccount.name}`,
      "bank_code": this.selectedBankAccount.code,
      "bank_branch": this.bankAccountToSaveOrUpdate.bankBranch,
      "bank_branch_digit": this.bankAccountToSaveOrUpdate.bankBranchDigit,
      "account": this.bankAccountToSaveOrUpdate.account,
      "account_digit": this.bankAccountToSaveOrUpdate.accountDigit,
      "account_type": this.bankAccountToSaveOrUpdate.accountType,
      "pix_key": this.bankAccountToSaveOrUpdate.pixKey,
      "email": this.userData.email,
      "document": this.bankAccountToSaveOrUpdate.document,
      "document_type": this.bankAccountToSaveOrUpdate.documentType
    }

    delete this.bankAccountToSaveOrUpdate.user;

    if (this.checkBankDataToSave(wepayoutBankToUpdate)) {
      this.bankService
        .updateBankAccount(this.bankAccountToSaveOrUpdate, this.bankAccountToSaveOrUpdate.id)
        .then(res => {
          if (res) {
            this.toastrService.success('Conta Bancária editada com sucesso!')
            this.getAllBankAccounts(this.userData.id);
          }
        })
        .catch(err => {
          console.error(err);
          this.toastrService.error('Erro ao editar conta bancária!')
        })
    }
  }

  checkBankDataToSave(bankToCheck) {
    let checked = true;

    Object.keys(bankToCheck)
      .some(k => {
        if (!bankToCheck[k] || bankToCheck[k] === '') {
          this.toastrService.warning("Preencha todos os campos para salvar!");
          checked = false
          return true;
        }
      })

    return checked;
  }

  setValue(key: string, value: string) {
    this.bankAccountToSaveOrUpdate[key] = value;
  }

  async bankModal() {
    const { value: bankName } = await Swal.fire({
      title: 'Selecionar Banco',
      input: 'text',
      inputLabel: 'Pesquisar banco por nome',
      inputPlaceholder: 'Insira o nome do banco',
      confirmButtonText: 'Pesquisar'
    })

    if (bankName) {
      this.wepayoutService
        .getBankListByName(bankName)
        .then(res => {
          if (!res || res.length === 0) {
            Swal.close()
            this.toastrService.warning('Banco não encontrado!')
            return;
          }

          this.banksList = res.reduce((result, item, index, array) => {
            result[item.code] = item.name;
            return result;
          }, {})

          this.openSelectBankModal(this.banksList, res);

        })
        .catch(err => {
          Swal.close()
          console.error(err)
        })
    }
  }

  async openSelectBankModal(bankList, bankListArray) {
    const { value: selectedBank, key } = await Swal.fire({
      title: 'Selecionar Banco',
      input: 'select',
      inputOptions: bankList,
      inputPlaceholder: 'Selecione um Banco',
      confirmButtonText: 'Selecionar',
      cancelButtonText: 'Fechar',
      showCancelButton: true,
    })

    if (selectedBank) {
      this.selectedBankAccount = bankListArray.filter(bank => bank.code === selectedBank)[0];
    }
  }

  async deactivateBankAccount(bankAccountId) {
    Swal.fire({
      title: 'Você tem certeza disso?',
      text: "Para reativar a conta bancária entre em contato com o suporte!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'tomato',
      confirmButtonText: 'Sim, Desativar Conta Bancária!',
      cancelButtonText: 'Não'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data, error } = await this.bankService.deactivateBankAccount(bankAccountId)
        if (data) {
          this.toastrService.success('Conta Desativada com sucesso!')
          this.getAllBankAccounts(this.userData.id);
        }
        if (error) {
          console.log(error)
          this.toastrService.error('Erro ao Desativar Conta!')
        }
      }
    })
  }

}

