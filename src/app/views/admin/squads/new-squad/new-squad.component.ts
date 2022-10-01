import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { SquadService } from 'src/app/services/squad.service';
import { SELECTORS } from 'src/app/stores/selectors';

@Component({
  selector: 'app-new-squad',
  templateUrl: './new-squad.component.html',
  styleUrls: ['./new-squad.component.less']
})
export class NewSquadComponent implements OnInit {

  companyId: string;

  constructor(
    private squadService: SquadService,
    private store: Store<any>,
    private route: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.store
      .select(SELECTORS.COMPANY)
      .subscribe(async res => {
        this.companyId = res?.companyData.id
      })
  }

  async requestSquad(title: any, description: any) {
    if (!title || title === '' || !description || description === '') {
      this.toastrService.warning('Preencha todos os campos!')
      return;
    }

    const { data, error } = await this.squadService.requestNewSquad(title, description, this.companyId)

    if (data) {
      this.toastrService.success('Squad solicitado com sucesso!')
      this.route.navigate(["/admin/squads"]);
    }

    if (error) {
      this.toastrService.error('Erro ao solicitar Squad!')
    }
  }
}
