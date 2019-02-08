import { Component, OnInit,Output,EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import {  Modal } from 'carbon-components-angular';
import { TableModel, TableItem, TableHeaderItem, DialogModule } from 'carbon-components-angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ac-model-popup',
  templateUrl: './model-popup.component.html',
  styleUrls: ['./model-popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModelPopupComponent implements OnInit {

  @Input() customModel = new TableModel();
  @Input() size = 'md';
  @Input() showSelectionColumn = false;
  @Input() striped = true;
  availableRows = 0;
  totalRows = 0;
  private readonly headerIndex = {
      '0': {
        'translateId': 'CATALOGS.FOOTR.message'
      },
      '1': {
        'translateId': 'CATALOGS.FOOTR.object'
      },
      '2': {
        'translateId': 'CATALOGS.FOOTR.date_and_time'
      }
    }

  @Input() modalListitems = [
    {
      content: 'Show All',
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
 
  constructor(private translate: TranslateService) { }
  private translationSubscription: Subscription;
  ngOnInit() {
    this.populateTableHeader();
    this.customModel.data = [
      [new TableItem({data: ''}),
      new TableItem({data: ''}),
      new TableItem({data: ''})]
    ];

    // this.customModel.data = [
    //   [new TableItem({data: ""}),new TableItem({data: " "}), new TableItem({data: " "})]
    // ];

}
populateTableHeader() {
  this.translationSubscription = this.translate.get([this.headerIndex['0'].translateId,
  this.headerIndex['1'].translateId,
  this.headerIndex['2'].translateId
  ]).subscribe((result: object) => {
    this.customModel.header = [
      new TableHeaderItem({ data: result[this.headerIndex['0'].translateId] }),
      new TableHeaderItem({ data: result[this.headerIndex['1'].translateId] }),
      new TableHeaderItem({ data: result[this.headerIndex['2'].translateId] })
    ];
  });
}
}
