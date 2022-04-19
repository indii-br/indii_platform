import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  constructor(
    private supabaseService: SupabaseService,
    private http: HttpClient
  ) { }

  async getInvoicetByCompany(companyId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('invoices')
      .select(`*, 
        contract->contracts(*, paymentConfig->contract_payment_config(*)), 
        company->companies(*),
        contractor->users(id, full_name, email, avatar)
      `)
      .eq('company.id', companyId)
  }

  async getInvoicetById(invoiceId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('invoices')
      .select(`*, 
        contract->contracts(*, paymentConfig->contract_payment_config(*)), 
        company->companies(*),
        contractor->users(id, full_name, email, avatar)
      `)
      .eq('id', invoiceId)
  }

  async goToPaymentInvoice(invoiceId: string): Promise<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })

    const data = {
      invoiceId: invoiceId,
    }

    return this.http
      .post(`${environment.api}/invoice/generate-payin-wepayout`, data, { headers: headers })
      .toPromise()
  }
}
