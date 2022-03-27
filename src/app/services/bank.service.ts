import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { AuthService } from './auth.service';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  constructor(
    private supabaseService: SupabaseService,
  ) { }

  async getBanksByUser(userId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('bank_accounts')
      .select(`*, 
        user->users(id, full_name, email, avatar)
      `)
      .is('active', true)
      .eq('user.id', userId)
  }

  async updateBankAccount(bankToUpdate: any, id: string): Promise<any> {
    return this.supabaseService.supabase
      .from('bank_accounts')
      .update(bankToUpdate)
      .eq("id", id)
  }

  async saveNewBankAccount(bankToCreate: any): Promise<any> {
    return this.supabaseService.supabase
      .from('bank_accounts')
      .insert(bankToCreate)
  }

  async deactivateBankAccount(bankAccountId: any): Promise<any> {
    return this.supabaseService.supabase
      .from('bank_accounts')
      .update({ active: false })
      .eq("id", bankAccountId)
  }
}
