import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_INDII_API } from '../utils/constants';
import { AuthService } from './auth.service';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private supabaseService: SupabaseService,
    private authService: AuthService,
    private http: HttpClient
  ) { }

  async getUserByUUID(): Promise<any> {
    if (!this.authService.user) {
      window.location.replace("/")
      return
    }

    return this.supabaseService.supabase
      .from('users')
      .select("*")
      .eq('uuid', this.authService.user.id)
      .single()
  }

  async updateUserData(userToUpdate: any, id: string): Promise<any> {
    return this.supabaseService.supabase
      .from('users')
      .update(userToUpdate)
      .eq("id", id)
  }

  async createUser(userToSave: any): Promise<any> {
    return this.supabaseService.supabase
      .from('users')
      .insert(userToSave)
  }

  async getOnboardingData(userId: string) {
    return this.http
      .get(`${URL_INDII_API}/onboarding/${userId}`, {
        headers: { 'Content-Type': 'application/json' }
      })
      .toPromise()
  }
}
