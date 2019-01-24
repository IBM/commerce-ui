import { Component, OnInit, Input } from '@angular/core';
import { TableModel, TableItem, TableHeaderItem } from 'carbon-components-angular';

@Component({
  selector: 'app-extended-sites',
  templateUrl: './extended-sites.component.html',
  styleUrls: ['./extended-sites.component.scss']
})
export class ExtendedSitesComponent implements OnInit {

  constructor() { }

  @Input() model = new TableModel();
  @Input() size = 'md';
  @Input() showSelectionColumn = true;
  @Input() striped = true;

  modelData = [];
  ngOnInit() {
    this.model.header = [
      new TableHeaderItem({ data: "Sequence" }),
      new TableHeaderItem({ data: "* Type" }),
      new TableHeaderItem({ data: "Store" }),
      new TableHeaderItem({ data: "* Code" }),
      new TableHeaderItem({ data: "* Name" }),
      new TableHeaderItem({ data: "Display to customers" })
    ];
   // this.model.data = this.masterCategoryService.categoryListTableData;
    this.model.data = [
      [new TableItem({data: "asdf"}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
      [new TableItem({data: "csdf"}), new TableItem({data: "zwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
      [new TableItem({data: "bsdf"}), new TableItem({data: "swer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
      [new TableItem({data: "csdf"}), new TableItem({data: "twer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
      [new TableItem({data: "bsdf"}), new TableItem({data: "swer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
      [new TableItem({data: "csdf"}), new TableItem({data: "twer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"})]
    ];

    //this.masterCategoryService.categoryListTableData.forEach((items, index) => {
      // this.modelData = [new TableItem({data: (index + 1)}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), 
      //        new TableItem({data: items.code  }), new TableItem({data: items.name}), new TableItem({data: "qwer"})
      //       ],
          //   this.model.data.push([[new TableItem({data: (index + 1)}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), 
          //   new TableItem({data: items.code  }), new TableItem({data: items.name}), new TableItem({data: "qwer"})
          //  ]);
    //});
  }
}
