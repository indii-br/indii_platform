import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { AppliesService } from 'src/app/services/applies.service';
import { JobService } from 'src/app/services/job.service';
import { SELECTORS } from 'src/app/stores/selectors';

@Component({
  selector: 'app-jobs-contractor',
  templateUrl: './jobs-contractor.component.html',
  styleUrls: ['./jobs-contractor.component.less']
})
export class JobsContractorComponent implements OnInit {

  loading: boolean = false
  jobDataList: Array<any>;

  profile: any;
  myAppliesList: Array<any>;

  constructor(
    private jobService: JobService,
    private appliesService: AppliesService,
    private toastrService: ToastrService,
    private store: Store<any>
  ) { }

  async ngOnInit() {
    this.store
      .select(SELECTORS.PROFILE)
      .subscribe(res => {
        this.profile = res?.profileData

        if (this.profile) {
          this.getApplies(this.profile.id)
        }
      })

    this.getJobs()
  }

  async getJobs() {
    const { data: jobDataList, error } = await this.jobService.getAllOpen();

    if (jobDataList) {
      this.jobDataList = jobDataList;
      this.loading = true;
    }

    if (error) {
      console.log(error);
      this.toastrService.error("Erro ao recuperar oportunidades!")
    }
  }

  async getApplies(profileId: string) {
    const { data: myAppliesList, error } = await this.appliesService.getAppliesByProfile(profileId);

    if (myAppliesList) {
      this.myAppliesList = myAppliesList;
      this.loading = true;
    }

    if (error) {
      console.log(error);
      this.toastrService.error("Erro ao recuperar candidaturas!")
    }
  }

}
