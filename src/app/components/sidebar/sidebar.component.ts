import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  collapseShow = "hidden";
  user: any = null;
  
  constructor(private userService: UserService) {}

  async ngOnInit() {
    const { data, error } = await this.userService.getUserByUUID()
    
    if (data) {
      this.user = data;
    }
  }
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
}
