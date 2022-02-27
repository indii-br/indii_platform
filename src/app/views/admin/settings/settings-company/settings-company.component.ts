import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/services/company.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-settings-company',
  templateUrl: './settings-company.component.html'
})
export class SettingsCompanyComponent implements OnInit {

  editingSettingCompany: boolean = false;

  selectedCompanyType: string;
  companyTypeOptions: Array<string> = [
    'Startup',
    'Pequena/Média Empresa',
    'Grande Empresa',
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

  setEditing(ev){
    this.editingSettingCompany = ev;
  }

  setValue(key: string, value: string){
    this.companyToUpdate[key] = value;
  }

  async updateCompany(){
     const { data, error } = await this.companyService.updateCompaniesData(this.companyToUpdate, this.companyData.id)

     if(data) {
       this.companyData = data[0];
        this.editingSettingCompany = false;
       this.toastrService.success('Editado com sucesso!')
     }
     if(error){
       console.log(error)
       this.editingSettingCompany = true;
       this.toastrService.error('Erro ao atualizar empresa')
     }
  }

}
