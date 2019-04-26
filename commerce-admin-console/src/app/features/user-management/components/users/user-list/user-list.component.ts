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
  //specificUserId: string
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




  constructor(private router: Router, private usersService: UsersService,
    private userMainservice: UserMainService,
    private translateService: TranslateService,
    private iframeService: IframeService) { }

  ngOnInit() {


    this.model.data = [[]];
    this.model.header = [
      new TableHeaderItem({ data: 'Login ID' }),
      new TableHeaderItem({ data: 'First name' }),
      new TableHeaderItem({ data: 'Last name' }),
      new TableHeaderItem({ data: 'Organization' }),
      new TableHeaderItem({ data: 'Role' }),
      new TableHeaderItem({ })
    ];

    // this.getUsersList();
    this.model.pageLength = 10;
    // this.model.totalDataLength = 15;


     this.selectPage(1);
  }
  // getUsersList() {
  //   this.userMainservice.userList().then(results => {
  //     this.userResult = Object.assign([], results);
  //     if (this.userResult.items.length > 0) {
  //       this.model.totalDataLength = this.userResult.length;
  //       for (const org of this.userResult.items) {
  //         this.model.addRow([
  //           new TableItem({ data: { name: org['logonId'], link: '/users' + org['logonId'] }, template: this.listUserItemTemplate }),
  //           new TableItem({ data: org['id'] }),
  //           new TableItem({ data: org['receiveSmsNotification'] }),
  //           new TableItem({ data: org['organizationId'] }),
  //           new TableItem({ data: org['registrationType'] })
  //         ]);
  //       }
  //     }

  //   }).catch(() => {
  //     this.translateService
  //       .get('CATALOGS.HEADR.store_list_failed')
  //       .subscribe((msg: string) => {
  //         this.iframeService.postStatusMsg(msg, 'error');
  //       });
  //   });
  // }

  // sort
  // customSort(index: number) {
  //   this.sort(this.model, index);
  // }
  // sort(Tablemodel, index: number) {
  //   if (Tablemodel.header[index].sorted) {
  //     // if already sorted flip sorting direction
  //     Tablemodel.header[index].ascending = Tablemodel.header[index].descending;
  //   }
  //   Tablemodel.sort(index);
  // }

  getPage(page: number) {
    // const line = line => [`dave_evans`, `Dave`, `Evans`, `Organization A`, `Site Administrator`, ``];

    // const fullPage = [];

    // for (
    //  let i = (page - 1) * this.model.pageLength;
    //  i < page * this.model.pageLength && i < this.model.totalDataLength;
    //  i++
    // ) {
    //  fullPage.push(line(i + 1));
    // }

    return new Promise(resolve => {
      //setTimeout(() => resolve(fullPage), 150);
      this.usersService.UsersGetManageableUsers({
        offset: (page - 1) * this.model.pageLength,
        limit: this.model.pageLength
      }).subscribe((body: any) => {
       this.userListData = body.items;
        this.model.totalDataLength = body.count;
        const data = [];
        for (let i = 0; i < body.items.length; i++) {
          const item = body.items[i];
          const logonId = item.logonId;
          const firstName = item.address ? item.address.firstName : '';
          const lastName = item.address ? item.address.lastName : '';
          const organizationName = item.organizationName;
          data.push([ logonId, firstName, lastName, organizationName, '', '']);
          this.loginArray.push([logonId]);
        }
        resolve(data);
      });
    });
  }

  selectPage(page) {

    this.getPage(page).then((data: Array<Array<any>>) => {
      // set the data and update page
      this.model.data = this.prepareData(data, this.loginArray);
      this.model.currentPage = page;
    });
  }

  protected prepareData(data: Array<Array<any>>, loginArray: Array<Array<any>>) {
    // create new data from the service data
    const newData = [];
    // loginArray.forEach(dataRow => {
    //   const row1 = [] ;
    //   dataRow.forEach(dataElement => {
    //     row1.push(new TableItem({
    //       data: dataElement
    //     }));
    //         });
    //         newData.push(row1);
    // });
    data.forEach(dataRow => {
      const row = [];

      dataRow.forEach(dataElement => {
        row.push(
          new TableItem({
            data: { name: dataElement  }, template: this.listUserItemTemplate
          }));
      });
        newData.push(row);
      });

    return newData;
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
