import { Component, ViewChild, OnInit, Input, OnChanges, ViewEncapsulation, AfterContentInit, OnDestroy, SimpleChanges, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { TableModel, TableItem, TableHeaderItem } from 'carbon-components-angular';


@Component({
  selector: 'app-extended-sites',
  templateUrl: './extended-sites.component.html',
  styleUrls: ['./extended-sites.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExtendedSitesComponent implements OnInit, OnChanges {

  // private router = Router;

  constructor(private router: Router,
    private translate: TranslateService,) {
    // this.router =route;
}

  @Input() customModel = new TableModel();
  @Input() size = 'md';
  @Input() showSelectionColumn = false;
  @Input() striped = true;


  @ViewChild("customHeaderTemplate")
	protected customHeaderTemplate: TemplateRef<any>;
	@ViewChild("customTableItemTemplate")
  protected customTableItemTemplate: TemplateRef<any>;
  @ViewChild("customTableItemTemplate2")
  protected customTableItemTemplate2: TemplateRef<any>;
  
  private readonly headerIndex = {
    '0': {
      'translateId': 'CATALOGS.EXTENDED_SITES_TABLE.SEQUENCE',
      'sortOrderAscId': 'A-approvalStatusId',
      'sortOrderDescId': 'D-approvalStatusId'
    },
    '1': {
      'translateId': 'CATALOGS.EXTENDED_SITES_TABLE.TYPE',
      'sortOrderAscId': '',
      'sortOrderDescId': ''
    },
    '2': {
      'translateId': 'CATALOGS.EXTENDED_SITES_TABLE.STORE',
      'sortOrderAscId': 'A-flowTypeId',
      'sortOrderDescId': 'D-flowTypeId'
    },
    '3': {
      'translateId': 'CATALOGS.EXTENDED_SITES_TABLE.CODE',
      'sortOrderAscId': 'A-stateId',
      'sortOrderDescId': 'D-stateId'
    },
    '4': {
      'translateId': 'CATALOGS.EXTENDED_SITES_TABLE.NAME',
      'sortOrderAscId': 'A-submitTime',
      'sortOrderDescId': 'D-submitTime'
    },
    '5': {
      'translateId': 'CATALOGS.EXTENDED_SITES_TABLE.DISPLAY_TO_CUSTOMERS',
      'sortOrderAscId': 'A-submitTime',
      'sortOrderDescId': 'D-submitTime'
    }
  }

  private translationSubscription: Subscription;
 
  ngOnInit() {
    this.populateTableHeader();

    this.customModel.data = [
      [new TableItem({data: "4.0", template: this.customTableItemTemplate}),new TableItem({data: "jhjh"}), new TableItem({data: "ExtendedSitesCatalogAssetStore"}), new TableItem({data: "asdf", template: this.customTableItemTemplate}), new TableItem({data: "Lessy", template: this.customTableItemTemplate}), new TableItem({template: this.customTableItemTemplate2})],
      [new TableItem({data: "4.0", template: this.customTableItemTemplate}),new TableItem({data: "asas"}), new TableItem({data: "AuroraESite"}), new TableItem({data: "asdf", template: this.customTableItemTemplate}), new TableItem({data: "Lessy", template: this.customTableItemTemplate}), new TableItem({template: this.customTableItemTemplate2})],
      [new TableItem({data: "5.0", template: this.customTableItemTemplate}),new TableItem({data: "dfd"}), new TableItem({data: "ExtendedSitesCatalogAssetStore"}), new TableItem({data: "asdf", template: this.customTableItemTemplate}), new TableItem({data: "Lessy", template: this.customTableItemTemplate}), new TableItem({template: this.customTableItemTemplate2})],
      [new TableItem({data: "4.0", template: this.customTableItemTemplate}),new TableItem({data: "ccv"}), new TableItem({data: "ExtendedSitesCatalogAssetStore"}), new TableItem({data: "asdf", template: this.customTableItemTemplate}), new TableItem({data: "Lessy", template: this.customTableItemTemplate}), new TableItem({template: this.customTableItemTemplate2})],
      [new TableItem({data: "5.0", template: this.customTableItemTemplate}),new TableItem({data: "njkb"}), new TableItem({data: "AuroraESite"}), new TableItem({data: "asdf", template: this.customTableItemTemplate}), new TableItem({data: "Lessy", template: this.customTableItemTemplate}), new TableItem({template: this.customTableItemTemplate2})],
      [new TableItem({data: "10.0", template: this.customTableItemTemplate}),new TableItem({data: "hsn"}), new TableItem({data: "AuroraESite"}), new TableItem({data: "asdf", template: this.customTableItemTemplate}), new TableItem({data: "Lessy", template: this.customTableItemTemplate}), new TableItem({template: this.customTableItemTemplate2})]
    ];
    // this.customModel.header = [
    //   new TableHeaderItem({ data: "Sequence"}),
    //   new TableHeaderItem({ data: "* Type"}),
    //   new TableHeaderItem({ data: "Store", template: this.customHeaderTemplate}),
    //   new TableHeaderItem({ data: "* Code"}),
    //   new TableHeaderItem({ data: "* Name"}),
    //   new TableHeaderItem({ data: "Display to customers"})
    // ];
  }

  populateTableHeader() {
    this.translationSubscription = this.translate.get([this.headerIndex['0'].translateId,
    this.headerIndex['1'].translateId,
    this.headerIndex['2'].translateId,
    this.headerIndex['3'].translateId,
    this.headerIndex['4'].translateId,
    this.headerIndex['5'].translateId
    ]).subscribe((result: object) => {
      this.customModel.header = [
        new TableHeaderItem({ data: result[this.headerIndex['0'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['1'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['2'].translateId], template: this.customHeaderTemplate }),
        new TableHeaderItem({ data: result[this.headerIndex['3'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['4'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['5'].translateId] })
      ];
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.sortable) {
      for (let column of this.customModel.header) {
        column.sortable = changes.sortable.currentValue;
      }
    }
  }
  // simpleSort(index: number) {
  //   sort(simpleModel, index);
  // }
  customSort(index: number) {
    this.sort(this.customModel, index);
  }

  sort(customModel, index: number) {
    if (customModel.header[index].sorted) {
      // if already sorted flip sorting direction
      customModel.header[index].ascending = customModel.header[index].descending;
    }
    customModel.sort(index);
  }

  listItems = [{
             content: "Show All",
             selected: false
         },
         {
             content: "AuroraESite",
             selected: false,
         },
         {
             content: "ExtendedSitesCatalogAssetStore",
             selected: false
         }
  ];

  selected() {}

  onClose() {}


}
