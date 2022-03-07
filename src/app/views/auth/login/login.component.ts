import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/services/auth.service";

declare var Swal: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void { }

  async signInWithEmail(email: string, pass: string) {
    if (!email || !pass) {
      alert('Insira o seu usuário e senha')
      return;
    }

    const { user, error } = await this.authService.signInWithEmail(email, pass)

    if (error) {
      alert('Erro ao efetuar login')
    }

    if (user) {
      this.router.navigate(['admin/dashboard'])
    }
  }

  async openChangePass(email) {
    Swal.fire({
      title: 'Alterar Senha',
      text: `Você receberá um link para alterar sua senha no email: ${email}!`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Enviar link para alterar senha!',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data, error } = await this.authService.sendEmailChangePassword(email);

        if (error) {
          this.toastrService.error("Ops! Erro ao enviar email")
        }

        if (data) {
          this.toastrService.success("Email enviado com sucesso!")
        }
      }
    })
  }

}
