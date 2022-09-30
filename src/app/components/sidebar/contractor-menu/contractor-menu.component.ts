import { Component, Input, OnInit } from '@angular/core';
import { CONFIG_KEYS } from 'src/app/utils/configKeys';

@Component({
  selector: 'app-contractor-menu',
  templateUrl: './contractor-menu.component.html',
  styleUrls: ['./contractor-menu.component.less']
})
export class ContractorMenuComponent implements OnInit {

  @Input('configs') configs: any;

  constructor() { }

  ngOnInit(): void {}

  isJobsEnabled() {
    return this.configs[CONFIG_KEYS.enableJobsContractor]?.enabled
  }

  isContractsEnabled() {
    return this.configs[CONFIG_KEYS.enableContractsContractor]?.enabled
  }

  isComplianceEnabled() {
    return this.configs[CONFIG_KEYS.enableComplianceContractor]?.enabled
  }

  isInvoiceEnabled() {
    return this.configs[CONFIG_KEYS.enableInvoicesContractor]?.enabled
  }

}
