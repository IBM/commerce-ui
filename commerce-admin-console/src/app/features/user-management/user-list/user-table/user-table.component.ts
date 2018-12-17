import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/Subscription';
import { TableHeaderItem, TableItem, TableModel } from 'carbon-components-angular';
import { PersonService } from '../../../../rest/services/person.service';
import { SearchService } from '../../search-service.service';
import { ComIbmCommerceUserBeansUserSearchDataBean_IBM_User_List_DetailsUserDataBeans } from '../../../../rest/models';

@Component({
  selector: 'ac-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})

export class UserTableComponent implements OnInit {

  public userModel: TableModel;
  public isTableEmpty: boolean;

  @ViewChild("userItemTemplate")
  private userItemTemplate: TemplateRef<any>;


  private readonly headerIndex = {
    '0': {
      'translateId': 'USERS.USER_LIST.TABLE_HEADER.DISPLAY_NAME',
    },
    '1': {
      'translateId': 'USERS.USER_LIST.TABLE_HEADER.FIRST_NAME',
    },
    '2': {
      'translateId': 'USERS.USER_LIST.TABLE_HEADER.LAST_NAME'
    },
    '3': {
      'translateId': 'USERS.USER_LIST.TABLE_HEADER.ROLES',
    },
    '4': {
      'translateId': 'USERS.USER_LIST.TABLE_HEADER.PROFILE_TYPE',
    }
  }

  private userModelSubscription: Subscription;

  constructor(private translateService: TranslateService,
    private personService: PersonService,
    public searchService: SearchService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translateService.setDefaultLang('en');
    this.userModel = new TableModel();
    this.userModel.data = [[]];
    this.userModel.pageLength = parseInt(searchService.getPageSize());
    this.isTableEmpty = true;
  }

  ngOnInit() {
    this.populateHeader();
    this.isTableEmpty = true;
    this.userModelSubscription = this.searchService.personsData$.subscribe((data) => { this.parseTableData(data) });
    this.searchService.setPageNumber(1);
    this.searchService.searchPersons();
  }

  ngOnDestroy() {
    this.userModelSubscription.unsubscribe();
  }

  selectPage(pageNumber: number) {
    this.searchService.setPageNumber(pageNumber);
    this.searchService.searchPersons();
  }

  simpleSort(index: number) {
    this.sort(this.userModel, index);
  }

  sort(model, index: number) {
    if (model.header[index].sorted) {
      // if already sorted flip sorting direction
      model.header[index].ascending = model.header[index].descending;
    }
    model.sort(index);
  }

  parseTableData(data: any) {
    this.userModel.data = [[]];
    this.populateHeader();
    this.userModel.currentPage = data.pageNumber;
    this.userModel.totalDataLength = data.recordSetTotal;

    this.userModel.currentPage = data.pageNumber;
    this.isTableEmpty = false;
    this.userModel.totalDataLength = data.recordSetTotal ? data.recordSetTotal : 0;

    if (this.userModel.totalDataLength === 0) {
      this.isTableEmpty = true;
      this.userModel.totalDataLength = 1; //For Pagination to render properly...
    }


    data.userDataBeans.forEach((item: ComIbmCommerceUserBeansUserSearchDataBean_IBM_User_List_DetailsUserDataBeans) => {
      this.userModel.addRow([
        new TableItem({ data: {name: item.displayName, link: '/users/edit-user/'+item.userId}, template: this.userItemTemplate }),
        new TableItem({ data: item.firstName }),
        new TableItem({ data: item.lastName }),
        // new TableItem({ data: item.roles.join(', ') }),
        new TableItem({ data: item.profileType }),
      ])
    });
  }

  populateHeader() {
    this.translateService.get([this.headerIndex['0'].translateId,
    this.headerIndex['1'].translateId,
    this.headerIndex['2'].translateId,
    this.headerIndex['3'].translateId,
    this.headerIndex['4'].translateId]).subscribe((result: object) => {
      this.userModel.header = [
        new TableHeaderItem({ data: result[this.headerIndex['0'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['1'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['2'].translateId] }),
        // new TableHeaderItem({ data: result[this.headerIndex['3'].translateId] }),
        new TableHeaderItem({ data: result[this.headerIndex['4'].translateId] }),
      ]
    });
  }
}
