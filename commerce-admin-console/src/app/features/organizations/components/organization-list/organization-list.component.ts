import { Component, OnInit, TemplateRef, ViewChild,ViewEncapsulation,Input } from '@angular/core';
import { TableModel, TableItem, TableHeaderItem  } from 'carbon-components-angular';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { OrganizationsConstants } from '../organizations.constants';
//import { AppConstants } from '../../../app.constants';
//import { HelpLinksConstants } from '../../../components/help-links/help-links.constants';
import { IframeService } from '../../../../services/iframe.service';
import { OrganizationMainService } from '../../organization.main.service';
import { OrganizationsService } from '../../../../rest/services/organizations.service';


@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class OrganizationListComponent implements OnInit {
@Input() striped = false;

@Input() model = new TableModel();

@Input() get totalDataLength() {
  return this.model.totalDataLength;
}
set totalDataLength(value) {
  this.model.totalDataLength = value;
}

@ViewChild('paginationTableItemTemplate')
protected paginationTableItemTemplate: TemplateRef<any>;
@ViewChild('listOrgItemTemplate')
protected listOrgItemTemplate: TemplateRef<any>;

constructor(private router: Router, private orgService: OrganizationsService) { }

ngOnInit() {
  

  
  this.model.header = [
    new TableHeaderItem({ data: 'Name'}),
    new TableHeaderItem({ data: 'Parent Organization'}),
    new TableHeaderItem({ data: 'Type' }),
  ];
  this.model.data = [[]];
  this.model.pageLength = 10;
  this.model.totalDataLength = 14;
  
  
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
  //const line = line => [`dave_evans`, `Dave`,`Evans`,`Organization A`,`Site Administrator`,``];

  //const fullPage = [];

  //for (
  //  let i = (page - 1) * this.model.pageLength;
  //  i < page * this.model.pageLength && i < this.model.totalDataLength;
  //  i++
  //) {
  //  fullPage.push(line(i + 1));
  //}

  return new Promise(resolve => {
    //setTimeout(() => resolve(fullPage), 150);
    this.orgService.OrganizationGetManageableOrganizations({
      offset:(page-1)*this.model.pageLength,
      limit:this.model.pageLength
    }).subscribe((body: any) => {
      this.model.totalDataLength = body.count;
      console.log("org" + this.totalDataLength);
      let data = [];
      for (let i = 0; i < body.items.length; i++) {
        let item = body.items[i];
        let name = item.name;
        let parentOrganizationName = item.parentOrganizationName;
        let organizationType = item.organizationType;
        data.push([name, parentOrganizationName, organizationType]);
      }
      resolve(data);
    });
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
          data: {name: dataElement}, template:  this.listOrgItemTemplate
          //template: typeof dataElement === 'string' ? undefined : this.listOrgItemTemplate,
        
          // your template can handle all the data types so you don't have to conditionally set it
          // you can also set different templates for different columns based on index
        })
      );
    });
    newData.push(row);
  });
  return newData;
}
createUser() {
  this.router.navigate(['organizations/userAccount']);
}

}

