import { Component, Input, OnInit } from '@angular/core';
import { CONTRACT_STATUS } from 'src/app/types/constants';

@Component({
  selector: 'app-info-contract',
  templateUrl: './info-contract.component.html',
  styleUrls: ['./info-contract.component.less']
})
export class InfoContractComponent implements OnInit {

  STATUS_LIST = [
    {
      label: "Informações do Contrato",
      position: 1
    },
    {
      label: "Informações de Pagamento",
      position: 2
    },
    {
      label: "Convidar Profissional",
      position: 3
    },
    {
      label: "Carregar Contrato",
      position: 4
    }
  ];

  statusListToShow: Array<any> = [];
  contractStatus: any = CONTRACT_STATUS;
  position: number;

  @Input("contractData") contractData: any;

  constructor() { }

  ngOnInit(): void {
    this.statusListToShow = this.STATUS_LIST
    this.position = (!this.contractData || !this.contractData?.id) ? 1 : CONTRACT_STATUS[this.contractData.status].position;
  }

  getPositionClass(position, contractData) {
    if (!contractData) {
      return '';
    }
    if (position < CONTRACT_STATUS[contractData.status].position) {
      return 'li-done';
    }
  }

}
