import { Component, OnInit } from "@angular/core";

declare var Swal: any;

@Component({
  selector: "app-site",
  templateUrl: "./site.component.html",
})
export class SiteComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  successFormMsg(){
    Swal.fire({
      title: 'Contato enviado com sucesso!',
      text: `Retornaremos em até 24 horas.`,
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'Voltar',
    })
  }
}
