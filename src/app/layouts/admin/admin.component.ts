import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Session } from "@supabase/supabase-js";
import * as LogRocket from 'logrocket';

import { AuthService } from "src/app/services/auth.service";
import { CompanyService } from "src/app/services/company.service";
import { ConfigService } from "src/app/services/config.service";
import { ProfileService } from "src/app/services/profile.service";
import { UserService } from "src/app/services/user.service";
import { hydrateCompany } from "src/app/stores/company.actions";
import { hydrateConfig } from "src/app/stores/config.actions";
import { hydrateProfile } from "src/app/stores/profile.actions";
import { hydrateUser } from "src/app/stores/user.actions";
import { USER_TYPES } from "src/app/utils/constants";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
})
export class AdminComponent implements OnInit {
  session: Session
  userData: any

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private companyService: CompanyService,
    private configService: ConfigService,
    private profileService: ProfileService,
    private store: Store<any>
  ) {
    this.session = this.authService.session
  }

  async ngOnInit() {
    this.authService.authChanges((_, session) => this.session = session);
    
    if (environment.production) {
      LogRocket.init('dtcuec/indii');
    }

    this.populateStores()
  }

  async populateStores() {
    const { data: userData, error } = await this.userService.getUserByUUID()

    if (userData) {
      this.userData = userData;
      this.store.dispatch(hydrateUser(userData));

      if (this.isContractor()) {
        const { data: profilesData, errorProfile } = await this.profileService.getProfileByUserUuid()

        if (profilesData && profilesData.length !== 0) {
          const profileData = profilesData[0];

          this.store.dispatch(hydrateProfile(profileData));
        }
      }
    }

    const { data: companyData, errorCompany } = await this.companyService.getCompanyByUser()

    if (companyData) {
      this.store.dispatch(hydrateCompany(companyData));
    }

    const { data: configsData, error: configError } = await this.configService.getAllConfigs()

    let configFormatted: any = {};

    if (configsData) {
      configsData.forEach((item) => {
        configFormatted[item.key] = {
          enabled: item.enabled,
          metadata: item.metadata
        }
      });

      this.store.dispatch(hydrateConfig(configFormatted));
    }
  }

  isClient() {
    return this.userData.userType === USER_TYPES.CLIENT;
  }

  isContractor() {
    return this.userData.userType === USER_TYPES.CONTRACTOR;
  }

  onActivate(event) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }
}
