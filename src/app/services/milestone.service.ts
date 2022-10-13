import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class MilestoneService {
  constructor(
    private supabaseService: SupabaseService,
  ) { }

  async getMilestoneById(milestoneId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('milestones')
      .select("*")
      .eq('id', milestoneId)
      .single()
  }

  async getMilestonesByCompany(companyId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('milestones')
      .select("*, company!inner(*)")
      .eq('company.id', companyId)
      .lt('statusCode', 400)
  }

  async getMilestonesByContract(contractId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('milestones')
      .select("*, contract!inner(*)")
      .eq('contract.id', contractId)
      .lt('statusCode', 400)
  }

  async updateMilestoneData(milestoneToUpdate: any, id: string): Promise<any> {
    return this.supabaseService.supabase
      .from('milestones')
      .update(milestoneToUpdate)
      .eq("id", id)
  }

  async saveMilestone(milestoneToUpdate: any): Promise<any> {
    return this.supabaseService.supabase
      .from('milestones')
      .insert(milestoneToUpdate)
  }
}
