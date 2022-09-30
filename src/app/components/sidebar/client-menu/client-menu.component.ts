import { Component, Input, OnInit } from '@angular/core';
import { CONFIG_KEYS } from 'src/app/utils/configKeys';

@Component({
  selector: 'app-client-menu',
  templateUrl: './client-menu.component.html',
  styleUrls: ['./client-menu.component.less']
})
export class ClientMenuComponent implements OnInit {

  @Input('configs') configs: any;

  constructor() { }

  ngOnInit(): void {
  }

  isJobsEnabled() {
    return this.configs[CONFIG_KEYS.enableJobsClient]?.enabled
  }

  isContractsEnabled() {
    return this.configs[CONFIG_KEYS.enableContractsClient]?.enabled
  }

  isComplianceEnabled() {
    return this.configs[CONFIG_KEYS.enableComplianceClient]?.enabled
  }

  isInvoiceEnabled() {
    return this.configs[CONFIG_KEYS.enableInvoicesClient]?.enabled
  }

  isSquadsEnabled() {
    return this.configs[CONFIG_KEYS.enableSquadsClient]?.enabled
  }

}
