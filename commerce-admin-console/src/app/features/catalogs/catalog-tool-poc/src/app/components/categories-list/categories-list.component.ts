import { Component, ViewChild, OnInit, Input, OnChanges } from '@angular/core';

import { TableModel, TableItem, TableHeaderItem } from 'carbon-components-angular';


@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})

export class CategoriesListComponent implements OnInit {

  constructor() { }

  @Input() model = new TableModel();
  @Input() size = 'md';
  @Input() showSelectionColumn = true;
  @Input() striped = true;
 
  ngOnInit() {
    this.model.header = [
      new TableHeaderItem({ data: "Sequence" }),
      new TableHeaderItem({ data: "* Type" }),
      new TableHeaderItem({ data: "Store" }),
      new TableHeaderItem({ data: "* Code" }),
      new TableHeaderItem({ data: "* Name" }),
      new TableHeaderItem({ data: "Display to customers" })
    ];
    this.model.data = [
      [new TableItem({data: "asdf"}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
      [new TableItem({data: "csdf"}), new TableItem({data: "zwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
      [new TableItem({data: "bsdf"}), new TableItem({data: "swer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
      [new TableItem({data: "csdf"}), new TableItem({data: "twer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
      [new TableItem({data: "bsdf"}), new TableItem({data: "swer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
      [new TableItem({data: "csdf"}), new TableItem({data: "twer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"})]
    ];
  }

  

}
