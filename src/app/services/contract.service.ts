import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { AuthService } from './auth.service';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  constructor(
    private supabaseService: SupabaseService,
    private authService: AuthService
  ) { }

  async getContractById(contractId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('contracts')
      .select(`*, 
        inviteContractor->contractor_invite(*), 
        paymentConfig->contract_payment_config(*),
        company!inner(*),
        contractor->user(id, full_name, email, cpf, city, state, avatar)
      `)
      .eq('id', contractId)
      .single()
  }

  async getAllByCompany(companyId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('contracts')
      .select(`*, 
        company!inner(*), 
        inviteContractor->contractor_invite(*), 
        paymentConfig->contract_payment_config(*),
        contractor->user(id, full_name, email, avatar, cpf)
      `)
      .eq('company.id', companyId)
  }

  async getAllWithContractorByCompany(companyId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('contracts')
      .select(`*, 
        company!inner(*), 
        inviteContractor->contractor_invite(*), 
        paymentConfig->contract_payment_config(*),
        contractor->user(id, full_name, email, avatar)
      `)
      .eq('company.id', companyId)
  }

  async saveNewContract(contractToSave: any): Promise<any> {
    return this.supabaseService.supabase
      .from('contracts')
      .insert(contractToSave)
  }

  async updateContractData(contractToUpdate: any, id: string): Promise<any> {
    return this.supabaseService.supabase
      .from('contracts')
      .update(contractToUpdate)
      .eq("id", id)
  }

  async changeSelfUploadedContractStatePaymentConfig(contractId: any, paymentConfigId: any): Promise<any> {
    return this.supabaseService.supabase
      .from('contracts')
      .update({
        status: 'WAITING_CONTRACTOR',
        paymentConfig: paymentConfigId,
        statusCode: 110,
      })
      .eq("id", contractId)
  }

  async changeSelfUploadedContractStateMilestone(contractId: any): Promise<any> {
    return this.supabaseService.supabase
      .from('contracts')
      .update({
        status: 'WAITING_CONTRACTOR',
        statusCode: 110,
      })
      .eq("id", contractId)
  }

  async saveNewPaymentConfig(paymentConfigToSave: any): Promise<any> {
    return this.supabaseService.supabase
      .from('contract_payment_config')
      .insert(paymentConfigToSave)
  }

  async updatePaymentConfigData(paymentConfigToUpdate: any, id: string): Promise<any> {
    return this.supabaseService.supabase
      .from('contract_payment_config')
      .update(paymentConfigToUpdate)
      .eq("id", id)
  }

  async createContractorInvite(contractId: string, email: string): Promise<any> {
    return this.supabaseService.supabase
      .from('contractor_invite')
      .insert({
        contract: contractId,
        emailContractorToSendInvite: email
      })
  }

  async getContractInviteById(inviteId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('contractor_invite')
      .select("*")
      .eq('id', inviteId)
      .single()
  }

  async changeSelfUploadedContractStateInviteContractor(contractId: any, inviteContractorId: any): Promise<any> {
    return this.supabaseService.supabase
      .from('contracts')
      .update({
        status: 'WAITING_UPLOAD_CONTRACT',
        inviteContractor: inviteContractorId,
        statusCode: 120,
      })
      .eq("id", contractId)
  }

  async changeSelfUploadedContractStateContractUploaded(contractId: any, contractUrl: any): Promise<any> {
    return this.supabaseService.supabase
      .from('contracts')
      .update({
        status: 'PAYMENT_CYCLE',
        contractSelfUploaded: contractUrl,
        statusCode: 200,
      })
      .eq("id", contractId)
  }

  async setContractorInContract(userID: any, contractId: any): Promise<any> {
    return this.supabaseService.supabase
      .from('contracts')
      .update({
        contractor: userID,
      })
      .eq("id", contractId)
  }

  async archiveContract(id: string): Promise<any> {
    return this.supabaseService.supabase
      .from('contracts')
      .update({
        statusCode: 400,
        status: 'ARCHIVED',
        archivedAt: new Date()
      })
      .eq("id", id)
  }

  // CONTRACTOR AREA
  async getAllByContractor(userId: string): Promise<any> {
    return this.supabaseService.supabase
      .from('contracts')
      .select("*, contractor!inner(*), company!inner(*), paymentConfig->contract_payment_config(*), inviteContractor!inner(*)")
      .eq('contractor.id', userId)
  }

  async getAllInvitesByContractorEmail(userEmail: string): Promise<any> {
    return this.supabaseService.supabase
      .from('contractor_invite')
      .select("*, contract!inner(*, company!inner(name))")
      .eq('emailContractorToSendInvite', userEmail)
      .is('joinedAt', null)
  }

  async setContractorInviteToJoined(userID: any, inviteId: any): Promise<any> {
    return this.supabaseService.supabase
      .from('contractor_invite')
      .update({
        user: userID,
        joinedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
      })
      .eq("id", inviteId)
  }

}
