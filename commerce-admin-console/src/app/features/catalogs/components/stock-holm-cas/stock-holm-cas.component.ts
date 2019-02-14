import { Component, OnInit, Input, ViewChild, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TableModel, TableHeaderItem, TableItem } from 'carbon-components-angular';
import { Subscription } from "rxjs";
import { MasterCategoryService } from '../../services/masterCategory/master-category.service';



@Component({
  selector: 'app-stock-holm-cas',
  templateUrl: './stock-holm-cas.component.html',
  styleUrls: ['./stock-holm-cas.component.scss']
})
export class StockHolmCASComponent implements OnInit,OnChanges {


  @Input() customModel = new TableModel();
  @Input() size = 'md';
  @Input() showSelectionColumn = false;
  @Input() striped = true;

  masterInputData = [];
  display_to_customers;
  image = '';
  descreption: any;
  sequence: any;
  type: any;
  code: any;
  name: any;

  @ViewChild("customHeaderTemplate")
	protected customHeaderTemplate: TemplateRef<any>;
	@ViewChild("customTableItemTemplate")
  protected customTableItemTemplate: TemplateRef<any>;
  @ViewChild("customTableItemTemplate2")
  protected customTableItemTemplate2: TemplateRef<any>;
  @ViewChild('paginationTableItemTemplate')
  protected paginationTableItemTemplate: TemplateRef<any>;

  private readonly headerIndex = {
    '0': {
      'translateId': 'CATALOGS.STOCKHOLMCAS.sequence',
      'sortOrderAscId': 'A-approvalStatusId',
      'sortOrderDescId': 'D-approvalStatusId'
    },
    '1': {
      'translateId': 'CATALOGS.STOCKHOLMCAS.type'
    },
    '2': {
      'translateId': 'CATALOGS.STOCKHOLMCAS.store'
    },
    '3': {
      'translateId': 'CATALOGS.STOCKHOLMCAS.code'
    },  
    '4': {
      'translateId': 'CATALOGS.STOCKHOLMCAS.name'
    },
    '5': {
      'translateId': 'CATALOGS.STOCKHOLMCAS.display_to_customers'
    }
  };

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

  constructor(private translate: TranslateService, 
    private masterCategoryService: MasterCategoryService) { }

  private translationSubscription: Subscription;

  ngOnInit() {
    this.populateTableHeader();
      
    const abc = this.masterCategoryService.getData();
    console.log('SERVICEDATa', abc);

    for (let i = 0; i < abc.length; i++) {
      // debugger;
      this.sequence = abc[i][0].sequence; //2Dimensional Array
      this.code = abc[i][0].code;
      this.name = abc[i][0].name;
      this.descreption = abc[i][0].descreption;
    }

    this.customModel.data = this.masterInputData;
    // console.log('MASTERDATA', this.customModel.data);

    this.customModel.data = [
      [new TableItem({data: "4.0", template: this.customTableItemTemplate}),
      new TableItem({data: "asas"}), 
      new TableItem({data: "AuroraESite"}), 
      new TableItem({data: "asdf", template: this.customTableItemTemplate}), 
      new TableItem({data: "Lessy", template: this.customTableItemTemplate}), 
      new TableItem({template: this.customTableItemTemplate2})],

      [new TableItem({data: "5.0", template: this.customTableItemTemplate}),
      new TableItem({data: "dfd"}), new TableItem({data: "ExtendedSitesCatalogAssetStore"}), new TableItem({data: "asdf", template: this.customTableItemTemplate}), new TableItem({data: "Lessy", template: this.customTableItemTemplate}), new TableItem({template: this.customTableItemTemplate2})],
      //[new TableItem({data: "4.0", template: this.customTableItemTemplate}),new TableItem({data: "ccv"}), new TableItem({data: "ExtendedSitesCatalogAssetStore"}), new TableItem({data: "asdf", template: this.customTableItemTemplate}), new TableItem({data: "Lessy", template: this.customTableItemTemplate}), new TableItem({template: this.customTableItemTemplate2})],
      //[new TableItem({data: "5.0", template: this.customTableItemTemplate}),new TableItem({data: "njkb"}), new TableItem({data: "AuroraESite"}), new TableItem({data: "asdf", template: this.customTableItemTemplate}), new TableItem({data: "Lessy", template: this.customTableItemTemplate}), new TableItem({template: this.customTableItemTemplate2})],
      [new TableItem({data: this.sequence, template: this.customTableItemTemplate}),new TableItem({data: "Type1"}), new TableItem({data: "ExtendedSitesCatalogAssetStore"}), new TableItem({data: this.code, template: this.customTableItemTemplate}), new TableItem({data: this.name, template: this.customTableItemTemplate}), new TableItem({template: this.customTableItemTemplate2})]

    ];
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
        new TableHeaderItem({ data: result[this.headerIndex['2'].translateId], template: this.customHeaderTemplate}),
        new TableHeaderItem({ data: result[this.headerIndex['3'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['4'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['5'].translateId] })
      ];
    });
}
// Sorting the header items based on index
ngOnChanges(changes: SimpleChanges): void {
  if (changes.sortable) {
    for (let column of this.customModel.header) {
      column.sortable = changes.sortable.currentValue;
    }
  }
}
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
selected() {}

onClose() {}
}