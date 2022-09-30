import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/services/user.service';
import { SELECTORS } from 'src/app/stores/selectors';

@Component({
  selector: 'app-dash-contractor-onboarding',
  templateUrl: './dash-contractor-onboarding.component.html',
  styleUrls: ['./dash-contractor-onboarding.component.less']
})
export class DashContractorOnboardingComponent implements OnInit {

  onboardingData: any;
  userData: any
  onboardingComplete: boolean = false;

  constructor(
    private userService: UserService,
    private store: Store<any>
  ) { }

  async ngOnInit() {
    this.store
      .select(SELECTORS.USER)
      .subscribe(async res => {
        this.userData = res?.userData

        const onboardingData = await this.userService.getOnboardingData(this.userData.id)

        if (onboardingData && onboardingData[0]) {
          this.onboardingData = onboardingData[0].json_build_object
          this.onboardingComplete = Object.values(onboardingData[0].json_build_object).filter(val => !val).length !== 0
        }
      })
  }

  checkedValue(key: string) {
    return (this.onboardingData[key]) ? 'checked' : '';
  }

}
