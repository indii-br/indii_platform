import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { AuthService } from './auth.service';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  constructor(
    private supabaseService: SupabaseService,
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
}
