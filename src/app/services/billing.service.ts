import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(
    private supabaseService: SupabaseService,
    private authService: AuthService
  ) { }

  async getBillingByCompany(companyId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('billing')
      .select("*")
      .eq('company', companyId)
  }

  async getBillingById(billingId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('billing')
      .select("*")
      .eq('id', billingId)
  }
}

