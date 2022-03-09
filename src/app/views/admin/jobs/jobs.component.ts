import { Component, OnInit } from '@angular/core';
import { AppliesService } from 'src/app/services/applies.service';
import { CompanyService } from 'src/app/services/company.service';
import { JobService } from 'src/app/services/job.service';
import { JOB_STATUS } from 'src/app/utils/constants';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.less']
})
export class JobsComponent implements OnInit {


  loading: boolean = false;
  companyData: any;
  jobsList: Array<any>;
  jobStatusList: any;

  appliesListByCompany: Array<any>;

  constructor(
    private jobService: JobService,
    private appliesService: AppliesService,
    private companyService: CompanyService,
  ) {
    this.jobStatusList = JOB_STATUS;
  }

  async ngOnInit() {
    const { data: company, error } = await this.companyService.getCompanyByUser()
    if (company) {
      this.companyData = company;

      const { data: applies, errorApplies } = await this.appliesService.getAppliesByCompany(company.id)

      this.appliesListByCompany = applies;

      const { data: jobsList, errorCompany } = await this.jobService.getJobsByCompany(company.id)

      this.jobsList = jobsList;
      this.loading = true;
    }
  }

  getCountApplies(jobId, appliesListByCompany) {
    if(!appliesListByCompany){
      return '<span>--</span>';
    }
    const countApplies = appliesListByCompany.filter(apply => apply.job.id === jobId).length;
    const appliesEl = (countApplies === 0) ? `<span>0</span>` : `<strong>${countApplies}</strong>`;
    return appliesEl;
  }

}
