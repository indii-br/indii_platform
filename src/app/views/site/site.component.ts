import { HttpClient, HttpParams } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

declare var Swal: any;

@Component({
  selector: "app-site",
  templateUrl: "./site.component.html",
})
export class SiteComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  submitForm(name: string, email: string, subject: string, contactForm: any) {

    if (name && name !== '' &&
      email && email !== '' &&
      subject && subject !== '') {

      const body = new HttpParams()
        .set('form-name', 'contact')
        .append('name', name)
        .append('email', email)
        .append('subject', subject)

      this.http
        .post('/', body.toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
        .toPromise()
        .then(res => this.successFormMsg())
        .catch(err => console.log(err))

    } else {
      Swal.fire({
        title: 'Preencha todos os campos para enviar!',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonText: 'Voltar',
      })
    }
  }

  successFormMsg() {
    Swal.fire({
      title: 'Contato enviado com sucesso!',
      text: `Retornaremos em até 24 horas.`,
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'Voltar',
    })
  }
}
