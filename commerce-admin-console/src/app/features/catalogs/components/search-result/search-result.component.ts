import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import { TableModel, TableItem, TableHeaderItem } from 'carbon-components-angular';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  constructor() { }

  // @Input() model= emptymodel();
  @Input() model = new TableModel();
  @Input() size = 'md';
  // @Input() showSelectionColumn = true;
  @Input() striped = true;
 
  ngOnInit() {
    this.model.header = [
      new TableHeaderItem({ data: "Sequence" }),
      new TableHeaderItem({ data: "* Type" }),
      new TableHeaderItem({ data: "Store" }),
      new TableHeaderItem({ data: "* Code" }),
      new TableHeaderItem({ data: "* Name" }),
      new TableHeaderItem({ data: "Display to customers" }),
      new TableHeaderItem({ data: "Short Description"})
    ];
    // this.model.data = [
    //   [new TableItem({data: " "}), new TableItem({data: " "}), new TableItem({data: " "}), new TableItem({data: " "}), new TableItem({data: " "}), new TableItem({data: " "}), new TableItem({data: " "})],
    // ];
  }
}
