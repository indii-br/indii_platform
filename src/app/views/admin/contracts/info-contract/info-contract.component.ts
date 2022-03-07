import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-contract',
  templateUrl: './info-contract.component.html',
  styleUrls: ['./info-contract.component.less']
})
export class InfoContractComponent implements OnInit {

  STATUS_LIST = [
    "Informações do Contrato",
    "Informações de Pagamento",
    "Convidar Profissional",
    "Carregar Contrato"
  ];

  statusListToShow: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
    this.statusListToShow = this.STATUS_LIST
  }

}
