import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-job-wrapper]',
  templateUrl: './job-wrapper.component.html',
  styleUrls: ['./job-wrapper.component.less']
})
export class JobWrapperComponent implements OnInit {

  @Input("job") job;
  
  constructor() { }

  ngOnInit(): void {
  }

}
