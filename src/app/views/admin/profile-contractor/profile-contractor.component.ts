import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProfileService } from 'src/app/services/profile.service';
import { SELECTORS } from 'src/app/stores/selectors';
import { RATE_TYPE } from 'src/app/utils/constants';

@Component({
  selector: 'app-profile-contractor',
  templateUrl: './profile-contractor.component.html',
  styleUrls: ['./profile-contractor.component.less']
})
export class ProfileContractorComponent implements OnInit {

  editingProfile: boolean = false;
  loaded: boolean = false;

  profileData: any = {};
  workingExperienceList: Array<any>;
  profileToUpdate: any = {};
  workingExpToUpdate: any = {};

  availabilityType: Array<string> = [
    'FULL-TIME',
    'PART-TIME',
  ]

  rateTypeList: Array<string> = [
    'HOURLY',
    'FIXED',
  ]

  rateTypeLabels = RATE_TYPE;

  selectedAvailabilityType: string;
  selectedRateType: string;
  selectedSkillsList: any;

  selectedMinRate: any;
  selectedMaxRate: any;

  constructor(private profileService: ProfileService) { }

  setEditing(ev) {
    this.editingProfile = ev;

    this.setInitValues();
  }

  setValue(key: string, value: string) {
    this.profileToUpdate[key] = value;
  }

  setValueToWorkingExp(key: string, value: string) {
    this.workingExpToUpdate[key] = value;
  }

  async ngOnInit() {
    const { data: profileData, error } = await this.profileService.getProfileByUserUuid();

    if (profileData && profileData) {
      this.profileData = profileData
      this.setInitValues();

      const { data: workingExperienceList, errorWE } = await this.profileService.getWorkExpByUser(profileData.user.id)

      if (workingExperienceList) {
        this.workingExperienceList = workingExperienceList;
      }

      this.loaded = true;
    } else {
      this.editingProfile = true;
    }
  }

  setInitValues() {
    this.selectedAvailabilityType = this.profileData.availability;
    this.selectedRateType = this.profileData.typeRate;
    this.selectedMinRate = this.profileData.minRate
    this.selectedMaxRate = this.profileData.maxRate
    this.selectedSkillsList = JSON.parse(this.profileData.skills);
  }

  updateOrSaveProfile() {

  }

  updateOrSaveWorkingEx() {

  }
}
