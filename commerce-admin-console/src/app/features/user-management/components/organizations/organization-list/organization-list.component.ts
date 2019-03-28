import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import {TableModel, TableHeaderItem, TableItem, PaginationModel } from 'carbon-components-angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})
export class OrganizationListComponent implements OnInit {

@Input() customModel = new TableModel();
//@Input() model = new TableModel();
@Input() size = 'md';
@Input() showSelectionColumn = true;
@Input() striped = false;
@Input() model = new PaginationModel();
@Input() skeleton = false;
@Input() get totalDataLength() {
  return this.model.totalDataLength;
}
set totalDataLength(value) {
  this.model.totalDataLength = value;
}

@ViewChild('paginationTableItemTemplate')
protected paginationTableItemTemplate: TemplateRef<any>;


constructor(private translate: TranslateService,) { }



  private readonly associateHeaderIndex = {
    '0': {
      'translateId': 'CATALOGS.ORGANIZATION.ORGNIZATION_TABLE.name',
    },
    '1': {
      'translateId': 'CATALOGS.ORGANIZATION.ORGNIZATION_TABLE.parent_organization',
    },
    '2': {
      'translateId': 'CATALOGS.ORGANIZATION.ORGNIZATION_TABLE.type',
    }
  };
  private translationSubscription: Subscription;

  associateTableHeader() {
    this.translationSubscription = this.translate.get([this.associateHeaderIndex['0'].translateId,
    this.associateHeaderIndex['1'].translateId,
    this.associateHeaderIndex['2'].translateId
    ]).subscribe((result: object) => {
      this.customModel.header = [
        new TableHeaderItem({ data: result[this.associateHeaderIndex['0'].translateId] }),
        new TableHeaderItem({ data: result[this.associateHeaderIndex['1'].translateId] }),
        new TableHeaderItem({ data: result[this.associateHeaderIndex['2'].translateId] })
      ];
    });
  }
 

  ngOnInit() {
    this.associateTableHeader();
    this.customModel.data = [[]];

    this.model.pageLength = 10;
    this.model.totalDataLength = 15;

    this.selectPage(1);
  }

  customSort(index: number) {
    this.sort(this.model, index);
  }
  sort(Tablemodel, index: number) {
    if (Tablemodel.header[index].sorted) {
      // if already sorted flip sorting direction
      Tablemodel.header[index].ascending = Tablemodel.header[index].descending;
    }
    Tablemodel.sort(index);
  }

  getPage(page: number) {
    const line = line => [`Asset Store Organization`, `Extended Site Organization`,`Organization A`];

    const fullPage = [];

    for (
      let i = (page - 1) * this.model.pageLength;
      i < page * this.model.pageLength && i < this.model.totalDataLength;
      i++
    ) {
      fullPage.push(line(i + 1));
    }

    return new Promise(resolve => {
      setTimeout(() => resolve(fullPage), 150);
    });
  }

  selectPage(page) {
    
    this.getPage(page).then((data: Array<Array<any>>) => {
      // set the data and update page
      this.customModel.data = this.prepareData(data);
      this.model.currentPage = page;
    });
  }

  protected prepareData(data: Array<Array<any>>) {
    // create new data from the service data
    let newData = [];
    data.forEach(dataRow => {
      let row = [];
      dataRow.forEach(dataElement => {
        row.push(
          new TableItem({
            data: dataElement,
            template: typeof dataElement === 'string' ? undefined : this.paginationTableItemTemplate,
            // your template can handle all the data types so you don't have to conditionally set it
            // you can also set different templates for different columns based on index
          })
        );
      });
      newData.push(row);
    });
    return newData;
  }
}

