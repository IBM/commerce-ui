import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { TableModel, TableItem, TableHeaderItem } from 'carbon-components-angular';
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
  organizationResponse: any;
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
      new TableHeaderItem({ data: 'Name' }),
      new TableHeaderItem({ data: 'Parent Organization' }),
      new TableHeaderItem({ data: 'Type' }),
    ];
    this.model.data = [[]];
    this.model.pageLength = 10;
    this.model.totalDataLength = this.organizationResponse;


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

    return new Promise(resolve => {

      this.orgService.OrganizationGetManageableOrganizations({
        offset: (page - 1) * this.model.pageLength,
        limit: this.model.pageLength
      }).subscribe((body: any) => {
        this.model.totalDataLength = body.count;
        //console.log("org" + this.totalDataLength);
        const data = [];
        for (let i = 0; i < body.items.length; i++) {
          const item = body.items[i];
          this.organizationResponse = item;
          const name = item.organizationName;
          const parentOrganizationName = item.parentOrganizationName;
          const organizationType = item.organizationType;
          data.push([name, parentOrganizationName, organizationType]);
        }
        resolve(data);
       // console.log(data);
        //console.log(data[0]);
      });
    });
  }

  selectPage(page) {

    this.getPage(page).then((data: Array<Array<any>>) => {
      // set the data and update page
      //console.log("page", data)
      this.model.data = this.prepareData(data);
      //   this.model.data = [
      //     [new TableItem({data: {name:data[0][0], link: "/table"}, template: this.listOrgItemTemplate}), 
      //     new TableItem({data:  data[0][1]}), new TableItem({data: data[2][2] })]
      // ];
     // console.log("data[1][1]", data[0][1])
      this.model.currentPage = page;
    });
  }

  prepareData(data: Array<Array<any>>) {
    const listData = [];
    // for (let i = 0; i <= data.length-1; i++) {
    //       listData.push( [new TableItem({data: {name: data[i][0]}, template: this.listOrgItemTemplate}), 
    //       new TableItem({data:  data[i][1]}), new TableItem({data: data[i][2] })]);
    // }
    // return listData;
    data.forEach((value, idx) => {
      console.log('val', value);
      console.log('idx', idx);
      if (value[2] === 'O') {
        listData.push([new TableItem({ data: { name: data[idx][0] }, template: this.listOrgItemTemplate }),
        new TableItem({ data: data[idx][1] }), new TableItem({ data: 'Organization' })]);
      } else {
        listData.push([new TableItem({ data: { name: data[idx][0] }, template: this.listOrgItemTemplate }),
        new TableItem({ data: data[idx][1] }), new TableItem({ data: 'Organization Unit' })]);
      }

    });
    return listData;
  }

  getSelectedOrganization(name) {
    this.organizationResponse.forEach((value, idx) => {
      if (value.name === name) {
        this.manageOrgApiCall();
      }
    })
    this.router.navigate(['organizations/organizationsDetails']);
  }
  manageOrgApiCall() {

  }



  createOrganization() {
    this.router.navigate(['organizations/organizationsDetails']);
  }

}
