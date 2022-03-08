import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editable-input-block',
  templateUrl: './editable-input-block.component.html',
  styleUrls: ['./editable-input-block.component.less']
})
export class EditableInputBlockComponent implements OnInit {

  @Input('editing') editing: boolean = false;
  @Input('isCurrency') isCurrency: boolean;
  @Input('isDate') isDate: boolean;
  
  @Input('value') value: string = null;
  @Input('title') title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
