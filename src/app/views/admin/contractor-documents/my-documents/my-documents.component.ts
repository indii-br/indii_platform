import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { DocumentService } from 'src/app/services/document.service';
import { StorageService } from 'src/app/services/storage.service';
import { SELECTORS } from 'src/app/stores/selectors';
import { downloadBlob } from 'src/app/utils/helpers';

@Component({
  selector: 'app-my-documents',
  templateUrl: './my-documents.component.html',
  styleUrls: ['./my-documents.component.less']
})
export class MyDocumentsComponent implements OnInit {

  documentData: any = {};
  userData: any;

  loading: boolean = true;

  documentsToUpload: Array<any> = [
    {
      title: 'Identidade',
      subtitle: 'Insira o RG, CNH ou Passaporte',
      id: 'idDocument'
    },
    {
      title: 'CNPJ',
      subtitle: 'Insira seu Cartão de CNPJ',
      id: 'cnpjDocument'
    }
  ]

  constructor(
    private documentService: DocumentService,
    private store: Store<any>,
    private toastrService: ToastrService,
    private storageService: StorageService
  ) { }

  async ngOnInit() {
    this.store
      .select(SELECTORS.USER)
      .subscribe(async res => {
        this.userData = res?.userData

        if (this.userData) {
          this.getDocumentsData(this.userData.id)
        }
      })
  }

  async getDocumentsData(userDataId) {
    const { data: documentResponse, error: errorContractList } = await this.documentService.getDocumentsByContractor(userDataId)

    const documentData = documentResponse[0]
    this.documentData = (documentData) ? documentData : {};
    this.loading = false;
  }

  async uploadedDocumentFile(event, documentType) {
    const file = event.target.files[0]

    if (file) {
      const { data: fileUploaded, error } = await this.storageService.createContractorDocuments(file, this.userData, documentType)

      if (error) {
        this.toastrService.error("Erro ao carregar documento!");
        console.error(error)
      }

      if (fileUploaded) {
        let documentResponse;
        let errorResponse;

        this.documentData[documentType] = fileUploaded.Key;

        if (this.documentData && this.documentData.id) {
          const { data, error } = await this.documentService.updateDocument(this.documentData, this.documentData.id)
          documentResponse = data;
          errorResponse = error;
        } else {
          this.documentData["contractor"] = this.userData.id;
          const { data, error } = await this.documentService.saveNewDocument(this.documentData)
          documentResponse = data;
          errorResponse = error;
        }

        if (documentResponse) {
          this.getDocumentsData(this.userData.id)
          this.toastrService.success("Documento carregado com sucesso!");
        }

        if (errorResponse) {
          this.toastrService.error("Erro ao atualizar Documento - Upload!");
          console.error(errorResponse)
        }
      }
    }
  }

  async viewDocument(fileToDonwload) {
    const filePath = fileToDonwload.replace("contractor-documents/", '');
    const { data: file, error } = await this.storageService.getSignedUrl(filePath)

    if (error) {
      this.toastrService.error("Erro ao baixar Documento!");
      console.error(error)
    }

    if(file){
      window.open(file.signedURL)
    }
  }
}
