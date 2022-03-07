import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-type-contract',
  templateUrl: './select-type-contract.component.html',
  styleUrls: ['./select-type-contract.component.less']
})
export class SelectTypeContractComponent implements OnInit {

  @Output('selectedTypeContract') selectedTypeContract = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectType(type: string){
    this.selectedTypeContract.emit(type);
  }

}
