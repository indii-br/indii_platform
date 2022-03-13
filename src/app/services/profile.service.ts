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
      .single()
  }

  async getProfileByUserUuid(): Promise<any> {
    return this.supabaseService.supabase
      .from('profiles')
      .select("*, user!inner(*)")
      .eq('user.uuid', this.authService.session.user.id)
      .single()
  }

  async getWorkExpByUser(userId): Promise<any> {
    return this.supabaseService.supabase
      .from('working_experience')
      .select("*, user!inner(*)")
      .eq('user.id', userId)
  }
}
