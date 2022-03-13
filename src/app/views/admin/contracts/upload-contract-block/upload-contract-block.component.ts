import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContractService } from 'src/app/services/contract.service';
import { StorageService } from 'src/app/services/storage.service';
import { downloadBlob } from 'src/app/utils/helpers';

@Component({
  selector: 'app-upload-contract-block',
  templateUrl: './upload-contract-block.component.html',
  styleUrls: ['./upload-contract-block.component.less']
})
export class UploadContractBlockComponent implements OnInit {

  @Input("contractData") contractData;

  constructor(
    private toastrService: ToastrService,
    private contractService: ContractService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void { }

  async uploadedFile(event) {
    const contractFile = event.target.files[0]

    const isPDF = contractFile.type === 'application/pdf';

    if (!isPDF) {
      this.toastrService.warning("Insira um Contrato em .PDF");
      return;
    }

    if (contractFile) {
      const { data: fileUploaded, error } = await this.storageService.createContractSelfUploaded(contractFile, this.contractData)

      if (error) {
        this.toastrService.error("Erro ao carregar contrato!");
        console.error(error)
      }

      if (fileUploaded) {
        const { data: contractResponse, errorContract } = await this.contractService.changeSelfUploadedContractStateContractUploaded(this.contractData.id, fileUploaded.Key)
        
        if (contractResponse) {
          this.toastrService.success("Contrato carregado com sucesso!");
        }

        if (errorContract) {
          this.toastrService.error("Erro ao atualizar contrato - Upload!");
          console.error(error)
        }
      }
    }
  }

  async downloadContract() {
    const filePath = this.contractData.contractSelfUploaded.replace("contracts-self-uploaded/", '');
    
    const { data: file, error } = await this.storageService.donwloadFile(filePath)

    if (error) {
      this.toastrService.error("Erro ao baixar Contrato!");
      console.error(error)
    }

    if(file){
      downloadBlob(file, `contrato_${this.contractData.id}.pdf`)
    }
  }

}
