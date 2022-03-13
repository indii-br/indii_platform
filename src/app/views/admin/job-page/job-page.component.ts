import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { AppliesService } from 'src/app/services/applies.service';
import { JobService } from 'src/app/services/job.service';
import { SELECTORS } from 'src/app/stores/selectors';

@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html',
  styleUrls: ['./job-page.component.less']
})
export class JobPageComponent implements OnInit {

  jobData: any;
  appliedData: any;
  profileData: any;
  loaded: boolean = false;

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private store: Store<any>,
    private appliesService: AppliesService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      const jobId = params['id'];

      const { data: jobData, error } = await this.jobService.getJobById(jobId);

      if (jobData) {
        this.jobData = jobData;
      }

      if (error) {
        console.error(error);
        this.toastrService.error("Erro ao carregar oportunidade!");
      }

      this.store
        .select(SELECTORS.PROFILE)
        .subscribe(async res => {
          this.profileData = res?.profileData

          if (this.profileData) {
            const { data: appliedData, errorApplied } = await this.appliesService.getAppliesByJobAndProfile(this.profileData.id, jobId);

            if (appliedData) {
              this.appliedData = appliedData[0];
              this.loaded = true;
            }

            if (errorApplied) {
              this.loaded = true;
              console.error(errorApplied);
              this.toastrService.error("Erro ao carregar candidaturas!");
            }
          }
        })
    })
  }

  async removeApply() {
    const { data: appliedData, errorApplied } = await this.appliesService.cancelApply(this.appliedData.id)

    if (appliedData) {
      this.toastrService.success("Candidatura removida com sucesso!");
      this.router.navigate(["/admin/oportunidades-abertas"]);
    }

    if (errorApplied) {
      console.error(errorApplied);
      this.toastrService.error("Erro ao remover candidatura!");
    }
  }

  async createApply() {
    const applyToSave = {
      job: this.jobData.id,
      profile: this.profileData.id
    }

    const { data: appliedData, errorApplied } = await this.appliesService.saveNewApply(applyToSave)

    if (appliedData) {
      this.toastrService.success("Candidatura criada com sucesso!");
      this.router.navigate(["/admin/oportunidades-abertas"]);
    }

    if (errorApplied) {
      console.error(errorApplied);
      this.toastrService.error("Erro ao remover candidatura!");
    }
  }

  getArray(array): Array<any> {
    return JSON.parse(array)
  }

}
