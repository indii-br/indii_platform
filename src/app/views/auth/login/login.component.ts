import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
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

}
