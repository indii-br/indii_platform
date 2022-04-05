import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WepayoutService {

  constructor(private http: HttpClient) { }

  async getBankListByName(bankName: string): Promise<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.wepayoutKey}`
    })

    return this.http
      .get(`${environment.wepayoutUrl}/payout/banks?name=${bankName}`, { headers: headers })
      .toPromise()
  }

  async createNewRecipient(recipientData: any): Promise<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.wepayoutKey}`
    })
    return this.http
      .post(`${environment.wepayoutUrl}/payin/clients/${environment.wepayoutClientId}/recipients`, recipientData, { headers: headers })
      .toPromise()
  }
  
  async updateRecipient(recipientData: any, recipientId: string): Promise<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.wepayoutKey}`
    })
    return this.http
      .patch(`${environment.wepayoutUrl}/payin/clients/${environment.wepayoutClientId}/recipients/${recipientId}`, recipientData, { headers: headers })
      .toPromise()
  }
}
