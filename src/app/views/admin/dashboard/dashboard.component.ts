import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { SELECTORS } from "src/app/stores/selectors";
import { isClient, isContractor } from "src/app/utils/helpers";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {

  user: any;
  isContractor: boolean;
  isClient: boolean;

  constructor(
    private store: Store<any>,
  ) {}

  async ngOnInit() {
    this.store
      .select(SELECTORS.USER)
      .subscribe(res => {
        this.user = res?.userData
        this.isContractor = isContractor(this.user)
        this.isClient = isClient(this.user)
      })
  }
}
