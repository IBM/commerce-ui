import { Component, OnInit, Input, ViewChild, ViewEncapsulation, TemplateRef, SimpleChanges } from '@angular/core';
import { TableModel, TableItem, TableHeaderItem } from 'carbon-components-angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-unassigned-cat-entries',
  templateUrl: './unassigned-cat-entries.component.html',
  styleUrls: ['./unassigned-cat-entries.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UnassignedCatEntriesComponent implements OnInit {

  constructor(private translate: TranslateService) { }

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
      'translateId': 'CATALOGS.UNASSIGNED_CATALOG_ENTRIES.TYPE'
    },
    '1': {
      'translateId': 'CATALOGS.UNASSIGNED_CATALOG_ENTRIES.STORE'
    },
    '2': {
      'translateId': 'CATALOGS.UNASSIGNED_CATALOG_ENTRIES.CODE'
    },
    '3': {
      'translateId': 'CATALOGS.UNASSIGNED_CATALOG_ENTRIES.NAME'
    },
    '4': {
      'translateId': 'CATALOGS.UNASSIGNED_CATALOG_ENTRIES.THUMBNAIL'
    },
    '5': {
      'translateId': 'CATALOGS.UNASSIGNED_CATALOG_ENTRIES.DISPLAY_TO_CUSTOMERS'
    },
    '6': {
      'translateId': 'CATALOGS.UNASSIGNED_CATALOG_ENTRIES.BUYABLE'
    },
    '7': {
      'translateId': 'CATALOGS.UNASSIGNED_CATALOG_ENTRIES.MANUFACTURER_PART_NUMBER'
    },
    '8': {
      'translateId': 'CATALOGS.UNASSIGNED_CATALOG_ENTRIES.MANUFACTURER_NAME'
    }
  }
  private translationSubscription: Subscription;

  ngOnInit() {
    this.populateTableHeader();

    this.customModel.data = [
      [new TableItem({data: ""}),new TableItem({data: "AuroraESite"}), new TableItem({data: "Test1", template: this.customTableItemTemplate}), new TableItem({data: "Entries", template: this.customTableItemTemplate}), new TableItem({data: ""}), new TableItem({template: this.customTableItemTemplate2}), new TableItem({template: this.customTableItemTemplate2}) ,new TableItem({data: "", template: this.customTableItemTemplate}), new TableItem({data: "", template: this.customTableItemTemplate})],
      [new TableItem({data: ""}),new TableItem({data: "AuroraESite"}), new TableItem({data: "Test2", template: this.customTableItemTemplate}), new TableItem({data: "List", template: this.customTableItemTemplate}), new TableItem({data: ""}), new TableItem({template: this.customTableItemTemplate2}), new TableItem({template: this.customTableItemTemplate2}) ,new TableItem({data: "", template: this.customTableItemTemplate}), new TableItem({data: "", template: this.customTableItemTemplate})]
      
    ];
  }

  populateTableHeader() {
    this.translationSubscription = this.translate.get([
    this.headerIndex['0'].translateId,
    this.headerIndex['1'].translateId,
    this.headerIndex['2'].translateId,
    this.headerIndex['3'].translateId,
    this.headerIndex['4'].translateId,
    this.headerIndex['5'].translateId,
    this.headerIndex['6'].translateId,
    this.headerIndex['7'].translateId,
    this.headerIndex['8'].translateId
    ]).subscribe((result: object) => {
      this.customModel.header = [
        new TableHeaderItem({ data: result[this.headerIndex['0'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['1'].translateId], template: this.customHeaderTemplate }),
        new TableHeaderItem({ data: result[this.headerIndex['2'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['3'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['4'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['5'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['6'].translateId]}),
        new TableHeaderItem({ data: result[this.headerIndex['7'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['8'].translateId] })
      ];
    });
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
}];

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

}
