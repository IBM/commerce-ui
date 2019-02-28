import { Component, OnInit, ViewChild, Input, OnChanges, TemplateRef } from '@angular/core';
import {
  TableItem,
  TableHeaderItem,
  TableModel,
} from 'carbon-components-angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { CatalogUploadService } from '../../services/catalogUpload/catalog-upload.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-catalog-upload',
  templateUrl: './catalog-upload.component.html',
  styleUrls: ['./catalog-upload.component.scss']
})
export class CatalogUploadComponent implements OnInit {
  // isTableEmpty = true;
  size:any='';
  filename='';
  characterSet='';
  targetCatalog='';
  uploadedby: any;
  stime='';
  etime='';

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
  catalogInputData: TableItem[][];
  constructor(private translate: TranslateService,
    private catalogUploadService: CatalogUploadService,
    private router:Router
    ) { }

  @Input() model = new TableModel();
  @Input() showSelectionColumn = false;
  @Input() striped = true;

  listItems = [{
    content: "Show All",
    selected: false,
  },
  {
    content: "Completed",
    selected: false,
  }]

  @ViewChild("customHeaderTemplate")
  protected customHeaderTemplate: TemplateRef<any>;
  @ViewChild("customTableItemTemplate2")
  protected customTableItemTemplate2: TemplateRef<any>;
  @ViewChild("customTableItemTemplate3")
  protected customTableItemTemplate3: TemplateRef<any>;

  ngOnInit() {
    const catalogUpload = this.catalogUploadService.getData();
    console.log('SERVICEDATa', catalogUpload);

    for (let i = 0; i < catalogUpload.length; i++) {
      // debugger;
      this.filename = catalogUpload[i][0].filename; //2Dimensional Array
      this.size = catalogUpload[i][0].size;
      this.characterSet = catalogUpload[i][0].characterSet;
      this.targetCatalog = catalogUpload[i][0].targetCatalog;
      this.uploadedby=catalogUpload[i][0].uploadedby;
      this.stime=catalogUpload[i][0].stime;
      this.etime=catalogUpload[i][0].etime;

    }

    this.model.data = this.catalogInputData;
 
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
        [new TableItem({data: this.filename}), new TableItem({data: this.size}), new TableItem({template:this.customTableItemTemplate2}), new TableItem({data: this.uploadedby}), 
          new TableItem({data: this.targetCatalog}), new TableItem({data: this.stime, template:this.customTableItemTemplate3}), new TableItem({data: this.etime, template:this.customTableItemTemplate3})],
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
