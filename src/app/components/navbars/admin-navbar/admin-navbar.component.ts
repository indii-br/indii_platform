import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { SELECTORS } from "src/app/stores/selectors";
import { USER_TYPES } from "src/app/utils/constants";

@Component({
  selector: "app-admin-navbar",
  templateUrl: "./admin-navbar.component.html",
})
export class AdminNavbarComponent implements OnInit {
  constructor(private store: Store<any>) { }

  user: any;

  async ngOnInit() {
    this.store
      .select(SELECTORS.USER)
      .subscribe(res => this.user = res?.userData)
  }

  isClient() {
    return this.user.userType === USER_TYPES.CLIENT;
  }

  isContractor() {
    return this.user.userType ===  USER_TYPES.CONTRACTOR;
  }
}
