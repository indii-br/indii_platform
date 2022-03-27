import { HttpClient, HttpParams } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

declare var Swal: any;

@Component({
  selector: "app-site",
  templateUrl: "./site.component.html",
})
export class SiteComponent implements OnInit {
  constructor(private http: HttpClient) { }

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void { }

  onSubmit() {
    if (!this.contactForm.valid) {
      Swal.fire({
        title: 'Preencha todos os campos para enviar!',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonText: 'Voltar',
      })
      return;
    }
    const body = new HttpParams()
      .set('form-name', 'contact')
      .append('name', this.contactForm.value.name)
      .append('email', this.contactForm.value.email)
      .append('message', this.contactForm.value.message)

    this.http.post('/', body.toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
      .subscribe(
        res => {
          if (res) {
            this.successFormMsg();
          }
        },
        err => {
          if (err instanceof ErrorEvent) {
            //client side error
            this.errorMsg()
            console.error(err.error.message);
          } else {
            //backend error. If status is 200, then the message successfully sent
            if (err.status === 200) {
              this.successFormMsg();
            } else {
              this.errorMsg()
              console.error('Error status:');
              console.error(err.status);
              console.error('Error body:');
              console.error(err.error);
            };
          };
        }
      );
  };

  successFormMsg() {
    Swal.fire({
      title: 'Contato enviado com sucesso!',
      text: `Retornaremos em até 24 horas.`,
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'Voltar',
    })
  }

  errorMsg() {
    Swal.fire({
      title: 'Erro ao enviar contato!',
      text: `contato@indii.com.br`,
      icon: 'warning',
      showCancelButton: false,
      confirmButtonText: 'Voltar',
    })
  }
}
