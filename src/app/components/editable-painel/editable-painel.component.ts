import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editable-painel',
  templateUrl: './editable-painel.component.html',
  styleUrls: ['./editable-painel.component.less']
})
export class EditablePainelComponent implements OnInit {

  @Input('title') title: string = '';
  @Input('editing') editing: boolean = false;
  @Input('hideCancel') hideCancel: boolean;
  @Output() isEditing: EventEmitter<boolean> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  toggleEditing(){
    this.editing = !this.editing;
    this.isEditing.emit(this.editing);
  }

  saveEmitter() {
    this.onSave.emit();
  }

}
