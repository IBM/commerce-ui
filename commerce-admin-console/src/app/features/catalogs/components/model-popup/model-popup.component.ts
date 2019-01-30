import { Component, OnInit,Output,EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import {  Modal } from 'carbon-components-angular';
import { TableModel, TableItem, TableHeaderItem, DialogModule } from 'carbon-components-angular';


@Component({
  selector: 'ac-model-popup',
  templateUrl: './model-popup.component.html',
  styleUrls: ['./model-popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModelPopupComponent implements OnInit {

  @Input() model = new TableModel();
  @Input() size = 'md';
  @Input() showSelectionColumn = true;
  @Input() striped = true;
  availableRows = 0;
  totalRows = 0;
  @Input() modalListitems = [
    {
      content: "Show All",
      selected: true
    },
    {
      content: "Object Error Messages",
      selected: false,
    },
    {
      content: "System Error Messages",
      selected: false
    },
    {
      content: "Status Messages",
      selected: false
    }
  ];
  
  close = new EventEmitter<boolean>();
	closeModal(event: any): void {
		this.close.emit();
	}

  constructor() { }

  ngOnInit() {
  
  this.model.header = [
    new TableHeaderItem({ data: "Message" }),
    new TableHeaderItem({ data: "Object" }),
    new TableHeaderItem({ data: "Date and Time" }),
  ];
  // this.model.data = [
  //   [new TableItem({data: " "}), new TableItem({data: " "}), new TableItem({data: " "})]
  // ];
}
}
