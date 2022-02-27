import { Component, OnInit } from "@angular/core";
import { Session } from "@supabase/supabase-js";
import { AuthService } from "src/app/services/auth.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-auth-navbar",
  templateUrl: "./auth-navbar.component.html",
})
export class AuthNavbarComponent implements OnInit {
  navbarOpen = false;
  session: Session;
  user: any = null;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  async ngOnInit() {
    this.session = this.authService.session;

    const { data, error } = await this.userService.getUserByUUID()
    
    if (data) {
      this.user = data;
    }
  }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}
