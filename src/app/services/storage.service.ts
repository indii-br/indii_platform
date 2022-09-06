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

  async createContractorDocuments(file, userData, documentName): Promise<any> {
    return this.supabaseService.supabase.storage
      .from('contractor-documents')
      .upload(`${userData.email}/${documentName}`, file)
  }

  async createNFSeInvoice(file, userData, invoiceId): Promise<any> {
    return this.supabaseService.supabase.storage
      .from('notas-fiscais-invoices')
      .upload(`${userData.email}/${invoiceId}`, file)
  }

  async donwloadFile(fileKey): Promise<any> {
    return this.supabaseService.supabase.storage.from('contracts-self-uploaded').download(fileKey)
  }

  async getSignedUrl(fileKey): Promise<any> {
    return this.supabaseService.supabase.storage.from('contractor-documents').createSignedUrl(fileKey, 1800)
  }

  async getSignedNfseUrl(fileKey): Promise<any> {
    return this.supabaseService.supabase.storage.from('notas-fiscais-invoices').createSignedUrl(fileKey, 1800)
  }
}
