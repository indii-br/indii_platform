import { Component, Input, OnInit } from '@angular/core';
import { AppliesService } from 'src/app/services/applies.service';

@Component({
  selector: 'app-profile-applied',
  templateUrl: './profile-applied.component.html',
  styleUrls: ['./profile-applied.component.less']
})
export class ProfileAppliedComponent implements OnInit {

  @Input('jobId') jobId;
  appliesList: Array<any>;

  loading: boolean = false;

  constructor(private appliesService: AppliesService) { }

  async ngOnInit() {
    const { data: applies, error } = await this.appliesService.getAppliesByJob(this.jobId)

    if (applies) {
      this.appliesList = applies;
      this.loading = true;
    }

    if(error){
      this.loading = true;
    }
  }
}
