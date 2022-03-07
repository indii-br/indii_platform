import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.less']
})
export class ResetPasswordComponent implements OnInit {

  isLogged: any = false;

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.isLogged = this.authService.session;
  }

  async changePassword(password, confirmPass) {
    if (password !== confirmPass) {
      this.toastrService.warning("A senha e a confirmação da senha devem ser iguais!")
      return;
    }

    if (this.authService.session) {
      const { data, error } = await this.authService
        .updatePasswordUser(this.authService.user.email, password)

      if (error) {
        this.toastrService.error("Erro ao alterar senha!");
      }

      if (data) {
        this.toastrService.success("Senha alterada com sucesso!");
        this.route.navigate(["/admin/dashboard"]);
      }
    }
  }

}
