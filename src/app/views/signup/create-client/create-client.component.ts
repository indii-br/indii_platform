import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { BrasilApiService } from 'src/app/services/brasil-api.service';
import { CompanyService } from 'src/app/services/company.service';
import { UserService } from 'src/app/services/user.service';
import { MAGIC_WORDS } from 'src/app/utils/constants';

declare var Swal: any;

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.less']
})
export class CreateClientComponent implements OnInit {

  companyData: any;
  companyDataError: any = false;

  onlyAdmin: boolean = true

  constructor(
    private brasilApiService: BrasilApiService,
    private toastrService: ToastrService,
    private authService: AuthService,
    private userService: UserService,
    private companyService: CompanyService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  searchCNPJ(cnpj: string) {
    const formattedCnpj = cnpj.replace(/[^a-zA-Z0-9 ]/g, '')

    this.brasilApiService
      .getCnpj(formattedCnpj)
      .then(res => {
        this.companyDataError = false;
        this.companyData = res;
      })
      .catch(err => {
        this.companyData = null;
        this.companyDataError = true;
        this.toastrService.warning('Ops... CNPJ inválido!')
      })
  }

  createAccount(fullName: string, cpf: string, phone: string, email: string, password: string, confirmPassword: string) {
    if (
      !this.companyData ||
      !fullName || fullName === '' ||
      !cpf || cpf === '' ||
      !phone || phone === '' ||
      !email || email === '' ||
      !password || password === '' ||
      !confirmPassword || confirmPassword === ''
    ) {
      this.toastrService.warning('Ops... Preencha todos os campos!')
      return;
    }

    if (confirmPassword !== password) {
      this.toastrService.warning('Ops... Senha diferente da confirmação de senha!')
      return;
    }

    const companyToSave = {
      name: this.companyData.nome_fantasia,
      razaoSocial: this.companyData.razao_social,
      cnpj: this.companyData.cnpj,
      email: email,
      city: this.companyData.municipio,
      state: this.companyData.uf,
      isContractorCompany: true
    }

    const userToSave = {
      full_name: fullName,
      email: email,
      phone: phone,
      cpf: cpf,
      userType: 'CLIENT',
      city: this.companyData.municipio,
      state: this.companyData.uf,
    }

    const authUserToSave = {
      email: email,
      password: password
    }

    this.saveClientAccount(companyToSave, userToSave, authUserToSave)
  }

  async saveClientAccount(companyToSave: any, userToSave: any, authUserToSave: any) {
    Swal.fire({
      title: 'Aguarde... Criando conta!',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      },
    });

    const { user: userAuth, session, error: errorAuth } = await this.authService.createUser(authUserToSave.email, authUserToSave.password)

    if (userAuth) {
      userToSave.uuid = userAuth.id
      const { data: userCreateRes, error: errorUserCreate } = await this.userService.createUser(userToSave)

      if (errorUserCreate) {
        Swal.close()
        this.toastrService.error('Ops... Erro ao criar usuário!')
      }

      if (userCreateRes) {
        companyToSave.owner = userCreateRes[0].id;

        const { error: errorCompanyCreate } = await this.companyService.createCompany(companyToSave)

        Swal.close()

        if (errorCompanyCreate) {
          this.toastrService.error('Ops... Erro ao criar Empresa!')
        }

        this.route.navigate(["/admin/dashboard"]);
      }
    }

    if (errorAuth) {
      Swal.close()
      this.toastrService.error('Ops... Erro ao criar conta!')
    }
  }

  accessCreateAccountToAdmin(){
    Swal.fire({
      title: 'Admin Magic Word',
      input: 'password',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Access Create Account',
      showLoaderOnConfirm: true,
      preConfirm: (pass) => {
        return pass === MAGIC_WORDS
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.onlyAdmin = true;
      }
    })
  }

}
