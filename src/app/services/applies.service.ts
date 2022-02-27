import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AppliesService {
  constructor(
    private supabaseService: SupabaseService,
  ) { }

  async getAppliesByProfile(profileId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('applications')
      .select("*, job!inner(*), profile!inner(*)")
      .eq('profile.id', profileId)
      .single()
  }

  async getAppliesByJob(jobId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('applications')
      .select("*, job!inner(*), profile!inner(*, user!inner(*))")
      .eq('job.id', jobId)
  }

   async getAppliesByCompany(companyId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('applications')
      .select("*, job!inner(*, company!inner(*)), profile!inner(*)")
      .eq('job.company.id', companyId)
  }
}
