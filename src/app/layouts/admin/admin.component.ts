import { Component, OnInit } from "@angular/core";
import { Session } from "@supabase/supabase-js";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
})
export class AdminComponent implements OnInit {
  session: Session

  constructor(private authService: AuthService) {
    this.session = this.authService.session
  }

  ngOnInit() {
    this.authService.authChanges((_, session) => this.session = session);
  }
}
