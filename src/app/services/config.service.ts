import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private supabaseService: SupabaseService,
    private authService: AuthService
  ) { }

  async getAllConfigs(): Promise<any> {
    return this.supabaseService.supabase
      .from('configs')
      .select("*")
  }
}
