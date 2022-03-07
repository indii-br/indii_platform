import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  constructor(
    private supabaseService: SupabaseService,
    private authService: AuthService
  ) { }

  async getContractById(contractId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('contracts')
      .select("*")
      .eq('id', contractId)
      .single()
  }

  async getJobsByCompany(companyId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('contracts')
      .select("*, company!inner(*)")
      .eq('company.id', companyId)
  }

  async saveNewContract(contractToSave: any): Promise<any> {
    return this.supabaseService.supabase
      .from('contracts')
      .insert(contractToSave)
  }
}
