import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { TableModel, TableHeaderItem, TableItem } from 'carbon-components-angular';
import { ActivatedRoute, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { IframeService } from '../../../../services/iframe.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  loginArray: any = [];
  userListData: any;
  userResult: any;
  id: string;

  @Input() model = new TableModel();

  @Input() get totalDataLength() {
    return this.model.totalDataLength;
  }
  set totalDataLength(value) {
    this.model.totalDataLength = value;
  }

  @ViewChild('paginationTableItemTemplate')
  protected paginationTableItemTemplate: TemplateRef<any>;
  @ViewChild('paginationTableItemTemplate')

  @ViewChild('listUserItemTemplate')
  protected listUserItemTemplate: TemplateRef<any>;




  constructor(
    private translateService: TranslateService,
    private iframeService: IframeService,
    private router: Router) { }

  ngOnInit() {


    this.model.data = [[]];
    this.model.header = [
      new TableHeaderItem({ data: 'Name' }),
      new TableHeaderItem({ data: 'Owner' }),
      new TableHeaderItem({ data: 'Description' }),
      new TableHeaderItem({ data: 'Type' }),
      new TableHeaderItem({ data: '' }),
    ];

    this.model.pageLength = 10;
    this.model.totalDataLength = 25;
    this.selectPage(1);

  }
  getPage(page: number) {
    const line = line => [`group 1`, `Owner name`, `description text`, `customer price group`, ``];

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
      this.model.data = this.prepareData(data);
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

   routeGroupDetails() {
    this.router.navigate(['member-groups/groupDetails']);
   }

}
