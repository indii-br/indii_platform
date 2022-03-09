import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-settings-client',
  templateUrl: './settings-client.component.html'
})
export class SettingsClientComponent implements OnInit {

  editingSettingClient: boolean = false;
  userRoleOptions: Array<string> = [
    "CEO / Fundador(a)",
    "CTO / Diretor(a) de TI",
    "Analista de RH",
    "Gerente de RH",
    "Diretor(a) de RH",
    "Analista de TI",
    "Gerente de TI",
    "Outros",
    "Financeiro"
  ];
  selectedUseRole: string;

  userData: any;
  userToUpdate: any = {};

  constructor(
    private userService: UserService,
    private toastrService: ToastrService
    ) { }

  async ngOnInit() {
   const { data, error } = await this.userService.getUserByUUID()
    
   if (data) {
     this.userData = data;
     this.selectedUseRole = this.userData.position;
   }
  }

  setEditing(ev){
    this.editingSettingClient = ev;
  }

  setValue(key: string, value: string){
    this.userToUpdate[key] = value;
  }

  async updateClientComponent(){
     const { data, error } = await this.userService.updateUserData(this.userToUpdate, this.userData.id)

     if(data) {
       this.userData = data[0];
       this.editingSettingClient = false;
       this.toastrService.success('Editado com sucesso!')
     }
     if(error){
       console.log(error)
       this.editingSettingClient = true;
       this.toastrService.error('Erro ao atualizar usuário')
     }
  }
}
