import { Injectable } from '@angular/core';
import { AuthChangeEvent, Session } from '@supabase/supabase-js';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private supabaseService: SupabaseService) { }

  async signInWithEmail(email: string, pass: string): Promise<any> {
    return this.supabaseService.supabase.auth.signIn({
      email: email,
      password: pass,
    })
  }

  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabaseService.supabase.auth.onAuthStateChange(callback);
  }

  get session() {
    return this.supabaseService.supabase.auth.session();
  }

  get user() {
    return this.supabaseService.supabase.auth.user();
  }

  async signOut() {
    const { error } = await this.supabaseService.supabase.auth.signOut()

    if (!error) {
      window.location.replace('/')
    }
  }

  async sendEmailChangePassword(email): Promise<any> {
    return this.supabaseService.supabase.auth.api.resetPasswordForEmail(email)
  }

  async updatePasswordUser(email, password): Promise<any> {
    return this.supabaseService.supabase.auth.update({
      email: email,
      password: password
    })
  }

  async forceUpdatePassword(access_token, new_password) {
    const { error, data } = await this.supabaseService.supabase.auth.api
      .updateUser(access_token, { password: new_password })
  }

  async createUser(email, password) {
    await this.supabaseService.supabase.auth.signOut()
    
    return this.supabaseService.supabase.auth.signUp({
      email: email,
      password: password,
    })
  }
}
