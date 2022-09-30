import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private supabaseService: SupabaseService,
    private authService: AuthService
  ) { }

  async getCompanyByUser(): Promise<any> {
    return this.supabaseService.supabase
      .from('companies')
      .select("*, owner!inner(*)")
      .eq('owner.uuid', this.authService.user.id)
      .single()
  }

  async getCompanyByContractor(contractorId): Promise<any> {
    return this.supabaseService.supabase
      .from('companies')
      .select("*")
      .eq('owner', contractorId)
  }

  async updateCompaniesData(companiesToUpdate: any, id: string): Promise<any> {
    return this.supabaseService.supabase
      .from('companies')
      .update(companiesToUpdate)
      .eq("id", id)
  }

  async createCompany(companyToSave: any): Promise<any> {
    return this.supabaseService.supabase
      .from('companies')
      .insert(companyToSave)
  }
}
