import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contractor-block',
  templateUrl: './contractor-block.component.html',
  styleUrls: ['./contractor-block.component.less']
})
export class ContractorBlockComponent implements OnInit {

  hideCancel: boolean = false;
  editingPaymentContract: boolean = true;

  @Input("contractData") contractData;

  constructor() { }

  ngOnInit(): void {
  }

  setEditing(ev) {
    this.editingPaymentContract = ev;
    this.hideCancel = false;
  }

  triggerSaveOrEdit(){}

}
