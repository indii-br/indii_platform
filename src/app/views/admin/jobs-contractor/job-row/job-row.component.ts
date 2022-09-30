import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-row',
  templateUrl: './job-row.component.html',
  styleUrls: ['./job-row.component.less']
})
export class JobRowComponent implements OnInit {

  @Input("job") job;

  constructor() { }

  ngOnInit(): void {
  }

}
