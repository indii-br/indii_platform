import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private supabaseService: SupabaseService,
    private authService: AuthService
  ) { }

  async getProfileById(profileId): Promise<any> {
    return this.supabaseService.supabase
      .from('profiles')
      .select("*, user!inner(*)")
      .eq('id', profileId)
  }

  async getProfileByUserUuid(): Promise<any> {
    return this.supabaseService.supabase
      .from('profiles')
      .select("*, user!inner(*)")
      .eq('user.uuid', this.authService.session.user.id)
  }

  async updateProfileData(profileToUpdate: any, id: string): Promise<any> {
    return this.supabaseService.supabase
      .from('profiles')
      .update(profileToUpdate)
      .eq("id", id)
  }

  async saveProfileData(profileToSave: any): Promise<any> {
    return this.supabaseService.supabase
      .from('profiles')
      .insert(profileToSave)
  }

  // WORKING EXPERIENCE AREA
  // DEPRECATED
  async getWorkExpByUser(userId): Promise<any> {
    return this.supabaseService.supabase
      .from('_deprecated_working_experience')
      .select("*, user!inner(*)")
      .eq('user.id', userId)
      .order('startedAt', { ascending: true })
  }
  async saveWorkExpData(WorkExpToSave: any): Promise<any> {
    return this.supabaseService.supabase
      .from('_deprecated_working_experience')
      .insert(WorkExpToSave)
  }
  async updateWorkExpData(WorkExpToUpdate: any, id: string): Promise<any> {
    return this.supabaseService.supabase
      .from('_deprecated_working_experience')
      .update(WorkExpToUpdate)
      .eq("id", id)
  }
  async deleteWorkExpData(id: string): Promise<any> {
    return this.supabaseService.supabase
      .from('_deprecated_working_experience')
      .delete()
      .eq("id", id)
  }
}
