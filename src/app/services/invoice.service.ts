import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  constructor(
    private supabaseService: SupabaseService,
    private http: HttpClient
  ) { }

  async getInvoicesByCompany(companyId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('invoices')
      .select(`*, 
        contract!inner(*, paymentConfig->contract_payment_config(*)), 
        company!inner(*),
        contractor!inner(id, full_name, email, avatar)
      `)
      .eq('company.id', companyId)
      .order('dueDate', { ascending: false })
  }

  async getInvoicesByContractor(contractorUserId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('invoices')
      .select(`*, 
        contract!inner(*, paymentConfig->contract_payment_config(*)), 
        company!inner(*),
        contractor!inner(id, full_name, email, avatar)
      `)
      .eq('contractor.id', contractorUserId)
      .order('dueDate', { ascending: false })
  }

  async getInvoiceByContract(contractId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('invoices')
      .select(`*, 
        contract!inner(*, paymentConfig->contract_payment_config(*)), 
        company!inner(*),
        contractor!inner(id, full_name, email, avatar)
      `)
      .eq('contract.id', contractId)
  }

  async getInvoicetById(invoiceId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('invoices')
      .select(`*, 
        contract!inner(*, paymentConfig->contract_payment_config(*)), 
        company!inner(*),
        contractor!inner(id, full_name, email, avatar)
      `)
      .eq('id', invoiceId)
  }

  async getListOfInvoicesQuery(invoicesList: Array<string>) {
    let queryToBuild = ``;

    invoicesList.forEach((val, i) => {
      const isEndOfList = invoicesList.length === (i + 1);
      queryToBuild += `id.eq.${val}${isEndOfList ? '' : ','}`
    })

    return this.supabaseService.supabase
      .from('invoices')
      .select(`*, contract!inner(*)`)
      .or(queryToBuild)
  }

  // async goToPaymentInvoice(invoiceId: string): Promise<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   })

  //   const data = {
  //     invoiceId: invoiceId,
  //   }

  //   return this.http
  //     .post(`${environment.api}/invoice/generate-payin-wepayout`, data, { headers: headers })
  //     .toPromise()
  // }

  async updateNFSeInvoice(nfseAttachment: any, id: string): Promise<any> {
    return this.supabaseService.supabase
      .from('invoices')
      .update({ nfseAttachment: nfseAttachment })
      .eq("id", id)
  }

  async updateHoursWorked(hoursToInvoice: any, contractValue: number, id: string): Promise<any> {
    const amountUpdated = hoursToInvoice * contractValue

    return this.supabaseService.supabase
      .from('invoices')
      .update({ hoursToInvoice: hoursToInvoice, amount: amountUpdated })
      .eq("id", id)
  }

  async updateAcceptanceCriteria(milestoneAcceptanceCriteria: any, id: string): Promise<any> {
    return this.supabaseService.supabase
      .from('invoices')
      .update({ milestoneAcceptanceCriteria: milestoneAcceptanceCriteria })
      .eq("id", id)
  }

  async archiveInvoice(id: string): Promise<any> {
    return this.supabaseService.supabase
      .from('invoices')
      .update({
        statusCode: 400,
        status: 'ARCHIVED',
        archivedAt: new Date()
      })
      .eq("id", id)
  }

  async approveInvoice(id: string): Promise<any> {
    return this.supabaseService.supabase
      .from('invoices')
      .update({
        statusCode: 210,
        status: 'APPROVED',
        approvedAt: new Date()
      })
      .eq("id", id)
  }

  async removeApprovalInvoice(id: string): Promise<any> {
    return this.supabaseService.supabase
      .from('invoices')
      .update({
        statusCode: 200,
        status: 'PAYIN_CREATED',
        approvedAt: null,
        approvalRemovedAt: new Date()
      })
      .eq("id", id)
  }
}
