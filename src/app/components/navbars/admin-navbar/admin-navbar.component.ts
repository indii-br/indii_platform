import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-admin-navbar",
  templateUrl: "./admin-navbar.component.html",
})
export class AdminNavbarComponent implements OnInit {
  constructor(private userService: UserService) {}

  user: any = null;

  async ngOnInit() {
    const { data, error } = await this.userService.getUserByUUID()

    if(data){
      this.user = data;
    }
  }
}
