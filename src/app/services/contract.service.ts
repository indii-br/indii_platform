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

  async getAllByCompany(companyId: string): Promise<any> {
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

  async saveNewPaymentConfig(paymentConfigToSave: any): Promise<any> {
    return this.supabaseService.supabase
      .from('contract_payment_config')
      .insert(paymentConfigToSave)
  }

  async updateContractData(contractToUpdate: any, id: string): Promise<any> {
    return this.supabaseService.supabase
      .from('contracts')
      .update(contractToUpdate)
      .eq("id", id)
  }

  async updatePaymentConfigData(paymentConfigToUpdate: any, id: string): Promise<any> {
    return this.supabaseService.supabase
      .from('contract_payment_config')
      .update(paymentConfigToUpdate)
      .eq("id", id)
  }

  async changeSelfUploadedContractStatePaymentConfig(contractId: any, paymentConfigId: any): Promise<any> {
    return this.supabaseService.supabase
      .from('contracts')
      .update({ 
        status: 'SELF_UPLOADED_WAITING_CONTRACTOR',
        paymentConfig: paymentConfigId
       })
      .eq("id", contractId)
  }
}
