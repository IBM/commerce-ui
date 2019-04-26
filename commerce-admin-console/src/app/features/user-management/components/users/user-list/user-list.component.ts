import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { TableModel, TableHeaderItem, TableItem } from 'carbon-components-angular';
import { Router } from '@angular/router';
import { UsersService } from '../../../../../rest/services/users.service';
import { UserMainService } from '../../../services/user-main.service';
import { TranslateService } from '@ngx-translate/core';
import { IframeService } from '../../../../../services/iframe.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  loginArray: any = [];
  userListData: any;
  @Input() striped = false;
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

  userResponse: any;


  constructor(private router: Router, private usersService: UsersService,
    private userMainservice: UserMainService,
    private translateService: TranslateService,
    private iframeService: IframeService) { }

  ngOnInit() {
    this.model.header = [
      new TableHeaderItem({ data: 'Login ID' }),
      new TableHeaderItem({ data: 'First name' }),
      new TableHeaderItem({ data: 'Last name' }),
      new TableHeaderItem({ data: 'Organization' }),
      new TableHeaderItem({ data: 'Role' }),
    ];
    this.model.data = [[]];
    this.model.pageLength = 10;
    this.model.totalDataLength = this.userResponse;
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
      this.usersService.UsersGetManageableUsers({
        offset: (page - 1) * this.model.pageLength,
        limit: this.model.pageLength
      }).subscribe((body: any) => {
        this.model.totalDataLength = body.count;
        const data = [];
        for (let i = 0; i < body.items.length; i++) {
          const item = body.items[i];
          this.userResponse = item;
          const logonId = item.logonId;
          const firstName = item.address ? item.address.firstName : '';
          const lastName = item.address ? item.address.lastName : '';
          const organizationName = item.address ? item.address.organizationName : '';
          data.push([ logonId, firstName, lastName, organizationName, '']);
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
    const newData = [];

    data.forEach((value, idx) => {
      newData.push([
        new TableItem({ data: { name: data[idx][0] }, template: this.listUserItemTemplate }),
        new TableItem({ data: data[idx][1] }),
        new TableItem({ data: data[idx][2] }),
        new TableItem({ data: data[idx][3] }),
        new TableItem({ data: data[idx][4] })

    ]);
    });
    return newData;
  }

  getSelectedOrganization(name) {
    this.userResponse.forEach((value, idx) => {
      if (value.name === name) {
        this.manageOrgApiCall();
      }
    });
    this.router.navigate(['users/userAccount']);
  }
  manageOrgApiCall() {

  }

  createUser() {
    this.router.navigate(['users/userAccount']);
  }
  userId(logonId: any) {
    if (this.userListData) {
      //console.log('itm', this.userListData);
      //console.log('list', this.userListData);
      this.userListData.forEach(function(value) {
        //console.log('val', value);
        // if (value.logonId === logonId) {
        //    this.id = value.id;
        // }
      });
    }

  }
}
