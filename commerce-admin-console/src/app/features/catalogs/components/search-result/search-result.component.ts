import { Component, OnInit, ViewChild, Input, OnChanges, TemplateRef } from '@angular/core';
import {
  TableItem,
  TableHeaderItem,
  TableModel,
} from 'carbon-components-angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  isTableEmpty = true;

  private readonly headerIndex = {
    '0': {
      'translateId': 'CATALOGS.SEARCH_RESULT.TABLE_HEADER_TYPE'
    },
    '1': {
      'translateId': 'CATALOGS.SEARCH_RESULT.TABLE_HEADER_STORE'
    },
    '2': {
      'translateId': 'CATALOGS.SEARCH_RESULT.TABLE_HEADER_CODE'
    },
    '3': {
      'translateId': 'CATALOGS.SEARCH_RESULT.TABLE_HEADER_NAME'
    },
    '4': {
      'translateId': 'CATALOGS.SEARCH_RESULT.TABLE_HEADER_THUMBNAIL'
    },
    '5': {
      'translateId': 'CATALOGS.SEARCH_RESULT.TABLE_HEADER_DISPLAY_TO_CUSTOMER'
    },
    '6': {
      'translateId': 'CATALOGS.SEARCH_RESULT.TABLE_HEADER_BUYABLE'
    },
    '7': {
      'translateId': 'CATALOGS.SEARCH_RESULT.TABLE_HEADER_MANUFACTURER_PART_NUMBER',
    },
    '8': {
      'translateId': 'CATALOGS.SEARCH_RESULT.TABLE_HEADER_MANUFACTURER_NAME',
    }
  }
  private translationSubscription: Subscription;
  constructor(private translate: TranslateService) { }

  @Input() model = new TableModel();
  @Input() size = 'md';
  @Input() showSelectionColumn = false;
  @Input() striped = true;

  listItems = [{
    content: "Show All",
    selected: false,
  }]

  @ViewChild("customHeaderTemplate")
  protected customHeaderTemplate: TemplateRef<any>;

  ngOnInit() {
 
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
      this.model.header = [
        new TableHeaderItem({ data: result[this.headerIndex['0'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['1'].translateId], template: this.customHeaderTemplate }),
        new TableHeaderItem({ data: result[this.headerIndex['2'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['3'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['4'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['5'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['6'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['7'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['8'].translateId] })
      ];
    });
    this.model.data = [
        [new TableItem({data: " "}), new TableItem({data: " "}), new TableItem({data: " "}), new TableItem({data: " "}), new TableItem({data: " "}), new TableItem({data: " "}), new TableItem({data: " "}), new TableItem({data: " "}), new TableItem({data: " "})],
      ];
  
}
simpleSort(index: number) {
  this.sort(this.model, index);
}

sort(model, index: number) {
  if (model.header[index].sorted) {
    // if already sorted flip sorting direction
    model.header[index].ascending = model.header[index].descending;
  }
  model.sort(index);
}

  selected() { }

  onClose() { }
}
