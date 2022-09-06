import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrasilApiService {

  constructor(private http: HttpClient) { }

  url: string = 'https://brasilapi.com.br/api';

  async getUpcomingHolidays(): Promise<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })

    return this.http
      .get(`${this.url}/feriados/v1/${new Date().getFullYear()}`, { headers: headers })
      .toPromise()
  }

  async getCnpj(cnpj: string): Promise<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })

    return this.http
      .get(`${this.url}/cnpj/v1/${cnpj}`, { headers: headers })
      .toPromise()
  }
}
