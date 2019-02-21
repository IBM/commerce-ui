import { Component, OnInit, ViewChild, Input, OnChanges, TemplateRef } from '@angular/core';
import {
  TableItem,
  TableHeaderItem,
  TableModel,
} from 'carbon-components-angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-catalog-upload',
  templateUrl: './catalog-upload.component.html',
  styleUrls: ['./catalog-upload.component.scss']
})
export class CatalogUploadComponent implements OnInit {
  isTableEmpty = true;

  private readonly headerIndex = {
    '0': {
      'translateId': 'CATALOGS.CATALOG_UPLOADS.FILENAME'
    },
    '1': {
      'translateId': 'CATALOGS.CATALOG_UPLOADS.SIZE'
    },
    '2': {
      'translateId': 'CATALOGS.CATALOG_UPLOADS.STATUS'
    },
    '3': {
      'translateId': 'CATALOGS.CATALOG_UPLOADS.UPLOADED_BY'
    },
    '4': {
      'translateId': 'CATALOGS.CATALOG_UPLOADS.TARGET_CATALOG'
    },
    '5': {
      'translateId': 'CATALOGS.CATALOG_UPLOADS.START_TIME'
    },
    '6': {
      'translateId': 'CATALOGS.CATALOG_UPLOADS.END_TIME'
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
    this.headerIndex['6'].translateId
    ]).subscribe((result: object) => {
      this.model.header = [
        new TableHeaderItem({ data: result[this.headerIndex['0'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['1'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['2'].translateId], template: this.customHeaderTemplate }),
        new TableHeaderItem({ data: result[this.headerIndex['3'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['4'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['5'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['6'].translateId] })
      ];
    });
    this.model.data = [
        [new TableItem({data: " "}), new TableItem({data: " "}), new TableItem({data: " "}), new TableItem({data: " "}), new TableItem({data: " "}), new TableItem({data: " "}), new TableItem({data: " "})],
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
