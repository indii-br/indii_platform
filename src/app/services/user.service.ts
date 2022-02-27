import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private supabaseService: SupabaseService,
    private authService: AuthService
  ) { }

  async getUserByUUID(): Promise<any> {
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
}
