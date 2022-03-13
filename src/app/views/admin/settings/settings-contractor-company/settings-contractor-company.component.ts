import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-settings-contractor-company',
  templateUrl: './settings-contractor-company.component.html',
  styleUrls: ['./settings-contractor-company.component.less']
})
export class SettingsContractorCompanyComponent implements OnInit {

  editingSettingCompany: boolean = false;

  selectedCompanyType: string;
  companyTypeOptions: Array<string> = [
    "MEI",
    "EIRELI",
    "Empresário Individual",
    "Sociedade Empresária Limitada",
    "Sociedade Simples",
    "Sociedade Anônima",
    "Sociedade Limitada Unipessoal"
  ];

  companyData: any;
  companyToUpdate: any = {};

  constructor(
    private companyService: CompanyService,
    private toastrService: ToastrService
  ) { }

  async ngOnInit() {
    const { data, error } = await this.companyService.getCompanyByUser()

    if (data) {
      this.companyData = data;
      this.selectedCompanyType = data.type;
    }
  }

  setEditing(ev) {
    this.editingSettingCompany = ev;
  }

  setValue(key: string, value: string) {
    this.companyToUpdate[key] = value;
  }

  async updateCompany() {
    const { data, error } = await this.companyService.updateCompaniesData(this.companyToUpdate, this.companyData.id)

    if (data) {
      this.companyData = data[0];
      this.editingSettingCompany = false;
      this.toastrService.success('Editado com sucesso!')
    }
    if (error) {
      console.log(error)
      this.editingSettingCompany = true;
      this.toastrService.error('Erro ao atualizar empresa')
    }
  }

}
