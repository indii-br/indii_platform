import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(
    private supabaseService: SupabaseService,
  ) { }

  async getDocumentsByContractor(contractorId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('contractor_documents')
      .select(`*, 
        contractor!inner(*)
      `)
      .eq('contractor.id', contractorId)
  }

  async updateDocument(documentToUpdate: any, id: string): Promise<any> {
    return this.supabaseService.supabase
      .from('contractor_documents')
      .update(documentToUpdate)
      .eq("id", id)
  }

  async saveNewDocument(documentToCreate: any): Promise<any> {
    return this.supabaseService.supabase
      .from('contractor_documents')
      .insert(documentToCreate)
  }
}
