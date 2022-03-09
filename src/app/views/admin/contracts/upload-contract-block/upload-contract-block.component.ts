import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-contract-block',
  templateUrl: './upload-contract-block.component.html',
  styleUrls: ['./upload-contract-block.component.less']
})
export class UploadContractBlockComponent implements OnInit {

  @Input("contractData") contractData;

  constructor() { }

  ngOnInit(): void {}

  uploadedFile(file){
    console.log(file)
  }

}
