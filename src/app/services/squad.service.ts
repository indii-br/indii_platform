import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class SquadService {
  constructor(
    private supabaseService: SupabaseService,
  ) { }

  async getSquadsByCompany(companyId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('squads')
      .select("*")
      .eq('company', companyId)
  }

  async requestNewSquad(title: any, description: any, companyId: any): Promise<any> {
    return this.supabaseService.supabase
      .from('squads')
      .insert({
        projectName: title,
        description: description,
        company: companyId
      })
  }

}
