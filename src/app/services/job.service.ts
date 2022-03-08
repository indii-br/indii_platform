import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(
    private supabaseService: SupabaseService,
    private authService: AuthService
  ) { }

  async getJobById(jobId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('jobs')
      .select("*")
      .eq('id', jobId)
      .single()
  }

  async getJobsByCompany(companyId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('jobs')
      .select("*, company!inner(*)")
      .eq('company.id', companyId)
  }

  async updateJobData(jobToUpdate: any, id: string): Promise<any> {
    return this.supabaseService.supabase
      .from('jobs')
      .update(jobToUpdate)
      .eq("id", id)
  }

  async saveNewJob(jobToUpdate: any): Promise<any> {
    return this.supabaseService.supabase
      .from('jobs')
      .insert(jobToUpdate)
  }

  async closeJob(jobid: any): Promise<any> {
    return this.supabaseService.supabase
      .from('jobs')
      .update({ status: 'ARCHIVED' })
      .eq("id", jobid)
  }
}