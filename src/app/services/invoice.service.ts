import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
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
        contract!inner(*, paymentConfig!inner(*)), 
        company!inner(*),
        contractor!inner(id, full_name, email, avatar)
      `)
      .eq('company.id', companyId)
  }

  async getInvoicetByContractor(contractorUserId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('invoices')
      .select(`*, 
        contract!inner(*, paymentConfig!inner(*)), 
        company!inner(*),
        contractor!inner(id, full_name, email, avatar)
      `)
      .eq('contractor.id', contractorUserId)
  }

  async getInvoiceByContract(contractId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('invoices')
      .select(`*, 
        contract!inner(*, paymentConfig!inner(*)), 
        company!inner(*),
        contractor!inner(id, full_name, email, avatar)
      `)
      .eq('contract.id', contractId)
  }

  async getInvoicetById(invoiceId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('invoices')
      .select(`*, 
        contract!inner(*, paymentConfig!inner(*)), 
        company!inner(*),
        contractor!inner(id, full_name, email, avatar)
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

  async updateNFSeInvoice(nfseAttachment: any, id: string): Promise<any> {
    return this.supabaseService.supabase
      .from('invoices')
      .update({ nfseAttachment: nfseAttachment })
      .eq("id", id)
  }
}
