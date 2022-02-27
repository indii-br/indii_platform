import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { RATE_TYPE } from 'src/app/types/constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  profileData: any;
  rateTypeLabels: any;
  workingExperienceList: Array<any>;

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute
  ) {
    this.rateTypeLabels = RATE_TYPE;
   }

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      const profileId = params['id'];

      const { data: profile, error } = await this.profileService.getProfileById(profileId);

      if (profile) {
        this.profileData = profile;

        const { data: workingExperienceList, errorWE } = await this.profileService.getWorkExpByUser(profile.user.id)

        this.workingExperienceList = workingExperienceList;
      }
    })
  }
}
