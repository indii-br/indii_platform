import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.less']
})
export class ContractsComponent implements OnInit {

  contractList: Array<any> = [{}];
  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
