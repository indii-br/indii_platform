import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private supabaseService: SupabaseService) { }

  async createContractSelfUploaded(file, contractData): Promise<any> {
    return this.supabaseService.supabase.storage
      .from('contracts-self-uploaded')
      .upload(`${contractData.company.id}/${contractData.id}/contract_${contractData.id}.pdf`, file)
  }

  async donwloadFile(fileKey): Promise<any> {
    return this.supabaseService.supabase.storage.from('contracts-self-uploaded').download(fileKey)
  }
}
