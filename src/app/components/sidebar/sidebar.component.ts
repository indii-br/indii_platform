import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { SELECTORS } from "src/app/stores/selectors";
import { CONFIG_KEYS } from "src/app/utils/configKeys";
import { USER_TYPES } from "src/app/utils/constants";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  collapseShow = "hidden";
  user: any
  configs: any

  constructor(private store: Store<any>) { }

  async ngOnInit() {
    this.store
      .select(SELECTORS.USER)
      .subscribe(res => this.user = res?.userData)

    this.store
      .select(SELECTORS.CONFIG)
      .subscribe(res => this.configs = res?.configData)
  }

  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }

  isBankAccountEnabled(){
    return this.configs[CONFIG_KEYS.enableBankAccountContractor]?.enabled
  }

  isClient() {
    return this.user.userType === USER_TYPES.CLIENT;
  }

  isContractor() {
    return this.user.userType === USER_TYPES.CONTRACTOR;
  }
}
