import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Session } from "@supabase/supabase-js";
import { AuthService } from "src/app/services/auth.service";
import { ProfileService } from "src/app/services/profile.service";
import { UserService } from "src/app/services/user.service";
import { hydrateProfile } from "src/app/stores/profile.actions";
import { hydrateUser } from "src/app/stores/user.actions";
import { USER_TYPES } from "src/app/utils/constants";

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
    private profileService: ProfileService,
    private store: Store<any>
  ) {
    this.session = this.authService.session
  }

  async ngOnInit() {
    this.authService.authChanges((_, session) => this.session = session);

    this.populateStores()
  }

  async populateStores() {
    const { data: userData, error } = await this.userService.getUserByUUID()

    if (userData) {
      this.userData = userData;
      this.store.dispatch(hydrateUser(userData));

      if (this.isContractor()) {
        const { data: profileData, error } = await this.profileService.getProfileByUserUuid()

        if (profileData) {
          this.store.dispatch(hydrateProfile(profileData));
        }
      }
    }
  }

  isClient() {
    return this.userData.userType === USER_TYPES.CLIENT;
  }

  isContractor() {
    return this.userData.userType === USER_TYPES.CONTRACTOR;
  }
}
