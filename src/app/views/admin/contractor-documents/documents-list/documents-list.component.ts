import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/services/company.service';
import { DocumentService } from 'src/app/services/document.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: '[app-documents-list]',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.less']
})
export class DocumentsListComponent implements OnInit {

  @Input("contract") contract;

  documentData: any = {};
  contractorCompany: any;
  loaded: boolean = false;

  constructor(
    private documentService: DocumentService,
    private companyService: CompanyService,
    private storageService: StorageService,
    private toastrService: ToastrService
  ) { }

  async ngOnInit() {
    if (this.contract && this.contract.id) {
      const { data, error } = await this.documentService.getDocumentsByContractor(this.contract.contractor.id)

      this.loaded = true;

      if (data && data[0]) {
        this.documentData = data[0];
      }

      const { data: contractorCompany, error: errorContractorCompany } = await this.companyService.getCompanyByContractor(this.contract.contractor.id);

      if (contractorCompany && contractorCompany.length !== 0) {
        this.contractorCompany = contractorCompany[0];
      }
    }
  }

  getDocumentStatus(documentData) {
    if (documentData && documentData.idDocument && documentData.cnpjDocument && documentData.idAndPhoto && this.contractorCompany) {
      return {
        status: 'OK',
        color: 'text-teal-500'
      }
    }

    return {
      status: 'PENDENTE',
      color: 'text-red-500'
    }
  }

  async viewDocument(fileToDonwload) {
    const filePath = fileToDonwload.replace("contractor-documents/", '');
    const { data: file, error } = await this.storageService.getSignedUrl(filePath)

    if (error) {
      this.toastrService.error("Erro ao baixar Documento!");
      console.error(error)
    }

    if (file) {
      window.open(file.signedURL)
    }
  }

}
