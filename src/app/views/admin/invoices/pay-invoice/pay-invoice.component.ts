import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WepayoutService } from 'src/app/services/wepayout.service';

@Component({
  selector: 'app-pay-invoice',
  templateUrl: './pay-invoice.component.html',
  styleUrls: ['./pay-invoice.component.less']
})
export class PayInvoiceComponent implements OnInit {

  payinHtml: string;
  loading: true;
  key: string

  constructor(
    private wepayoutService: WepayoutService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      this.key = params['key'];

      if (this.key) {
        this.wepayoutService
          .getInvoiceByKey(this.key)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.error(err);
            this.toastr.error('Erro ao recuperar Invoice | Entre em contato com o Suporte!')
          })
      }
    })
  }

}
