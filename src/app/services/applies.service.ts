import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { AuthService } from './auth.service';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AppliesService {
  constructor(
    private supabaseService: SupabaseService,
  ) { }

  async getAppliesByJob(jobId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('applications')
      .select("*, job!inner(*), profile!inner(*, user!inner(*))")
      .eq('job.id', jobId)
      .is('canceledAt', null)

  }

   async getAppliesByCompany(companyId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('applications')
      .select("*, job!inner(*, company!inner(*)), profile!inner(*)")
      .eq('job.company.id', companyId)
      .is('canceledAt', null)
  }

  // CONTRACTOR AREA

  async getAppliesByProfile(profileId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('applications')
      .select("*, job!inner(*, company!inner(*)), profile!inner(*)")
      .eq('profile.id', profileId)
      .is('canceledAt', null)
  }

  async getAppliesByJobAndProfile(profileId: string, JobId): Promise<any> {
    return this.supabaseService.supabase
      .from('applications')
      .select("*, job!inner(*), profile!inner(*)")
      .eq('profile.id', profileId)
      .eq('job.id', JobId)
      .is('canceledAt', null)
  }

  async saveNewApply(applyToUpdate: any): Promise<any> {
    return this.supabaseService.supabase
      .from('applications')
      .insert(applyToUpdate)
  }

  async cancelApply(applyId: any): Promise<any> {
    return this.supabaseService.supabase
      .from('applications')
      .update({ canceledAt: moment().format("YYYY-MM-DD hh:mm:ss") })
      .eq("id", applyId)
  }

}
