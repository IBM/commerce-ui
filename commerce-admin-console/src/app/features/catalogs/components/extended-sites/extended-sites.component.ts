import { Component, ViewChild, OnInit, Input, OnChanges, AfterContentInit, OnDestroy, SimpleChanges, TemplateRef } from '@angular/core';

import { TableModel, TableItem, TableHeaderItem } from 'carbon-components-angular';


@Component({
  selector: 'app-extended-sites',
  templateUrl: './extended-sites.component.html',
  styleUrls: ['./extended-sites.component.scss']
})
export class ExtendedSitesComponent implements OnInit {

  constructor() { }

  @Input() customModel = new TableModel();
  @Input() size = 'md';
  @Input() showSelectionColumn = true;
  @Input() striped = true;


  @ViewChild("customHeaderTemplate")
	protected customHeaderTemplate: TemplateRef<any>;
	@ViewChild("customTableItemTemplate")
  protected customTableItemTemplate: TemplateRef<any>;
  // @ViewChild("customTableItemTemplate2")
	// protected customTableItemTemplate2: TemplateRef<any>;
 
  ngOnInit() {
    this.customModel.data = [
      [new TableItem({data: "4.0", template: this.customTableItemTemplate}),new TableItem({data: "jhjh"}), new TableItem({data: "ExtendedSitesCatalogAssetStore"}), new TableItem({data: "asdf", template: this.customTableItemTemplate}), new TableItem({data: "Lessy", template: this.customTableItemTemplate}), new TableItem({data: "checkbox"})],
      [new TableItem({data: "4.0", template: this.customTableItemTemplate}),new TableItem({data: "asas"}), new TableItem({data: "ExtendedSitesCatalogAssetStore"}), new TableItem({data: "asdf", template: this.customTableItemTemplate}), new TableItem({data: "Lessy", template: this.customTableItemTemplate}), new TableItem({data: "Checkbox"})],
      [new TableItem({data: "5.0", template: this.customTableItemTemplate}),new TableItem({data: "dfd"}), new TableItem({data: "ExtendedSitesCatalogAssetStore"}), new TableItem({data: "asdf", template: this.customTableItemTemplate}), new TableItem({data: "Lessy", template: this.customTableItemTemplate}), new TableItem({data: "Checkbox"})],
      [new TableItem({data: "4.0", template: this.customTableItemTemplate}),new TableItem({data: "ccv"}), new TableItem({data: "ExtendedSitesCatalogAssetStore"}), new TableItem({data: "asdf", template: this.customTableItemTemplate}), new TableItem({data: "Lessy", template: this.customTableItemTemplate}), new TableItem({data: "Checkbox"})],
      [new TableItem({data: "5.0", template: this.customTableItemTemplate}),new TableItem({data: "njkb"}), new TableItem({data: "ExtendedSitesCatalogAssetStore"}), new TableItem({data: "asdf", template: this.customTableItemTemplate}), new TableItem({data: "Lessy", template: this.customTableItemTemplate}), new TableItem({data: "Checkbox"})],
      [new TableItem({data: "10.0", template: this.customTableItemTemplate}),new TableItem({data: "hsn"}), new TableItem({data: "ExtendedSitesCatalogAssetStore"}), new TableItem({data: "asdf", template: this.customTableItemTemplate}), new TableItem({data: "Lessy", template: this.customTableItemTemplate}), new TableItem({data: "Checkbox"})]
    ];
    this.customModel.header = [
      new TableHeaderItem({ data: "Sequence"}),
      new TableHeaderItem({ data: "* Type"}),
      new TableHeaderItem({ data: "Store", template: this.customHeaderTemplate}),
      new TableHeaderItem({ data: "* Code"}),
      new TableHeaderItem({ data: "* Name"}),
      new TableHeaderItem({ data: "Display to customers"})
    ];

    // this.customModel.header = [
    //   new TableHeaderItem({ data: 'Very long title indeed' }),
    //   // new CustomHeaderItem({data: { name: 'Custom header', link: '/table' }, template: this.customHeaderTemplate, style: { width: 'auto' },}),
    // ];

    // this.model.header = [
    //   new TableHeaderItem({ data: "Sequence" }),
    //   new TableHeaderItem({ data: "* Type" }),
    //   new TableHeaderItem({ data: "Store" }),
    //   new TableHeaderItem({ data: "* Code" }),
    //   new TableHeaderItem({ data: "* Name" }),
    //   new TableHeaderItem({ data: "Display to customers" })
    // ];
    // this.model.data = [
    //   [new TableItem({data: "asdf"}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
    //   [new TableItem({data: "csdf"}), new TableItem({data: "zwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
    //   [new TableItem({data: "bsdf"}), new TableItem({data: "swer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
    //   [new TableItem({data: "csdf"}), new TableItem({data: "twer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
    //   [new TableItem({data: "bsdf"}), new TableItem({data: "swer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
    //   [new TableItem({data: "csdf"}), new TableItem({data: "twer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"}), new TableItem({data: "asdf"}), new TableItem({data: "qwer"})]
    // ];
  }

}
