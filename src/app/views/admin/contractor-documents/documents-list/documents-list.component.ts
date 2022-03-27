import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  constructor(
    private documentService: DocumentService,
    private storageService: StorageService,
    private toastrService: ToastrService
  ) { }

  async ngOnInit() {
    if (this.contract && this.contract.id) {
      const { data, error } = await this.documentService.getDocumentsByContractor(this.contract.contractor.id)

      if (data && data[0]) {
        this.documentData = data[0];
      }
    }
  }

  getDocumentStatus(documentData) {
    if (documentData && documentData.idDocument && documentData.cnpjDocument && documentData.idAndPhoto) {
      return {
        status: 'CONCLUIDO',
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
