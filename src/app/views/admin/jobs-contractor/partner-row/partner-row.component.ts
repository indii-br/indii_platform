import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-row',
  templateUrl: './partner-row.component.html',
  styleUrls: ['./partner-row.component.less']
})
export class PartnerRowComponent implements OnInit {

  @Input("job") job;

  constructor() { }

  ngOnInit(): void {
  }

}
