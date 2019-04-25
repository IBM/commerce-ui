import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserMainService } from '../../../services/user-main.service';
import { IframeService } from '../../../../../services/iframe.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../../../../rest/services/users.service';

@Component({
  selector: 'ac-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.scss']
})
export class UserGroupsComponent implements OnInit {
  groupForm: FormGroup;
  groupListData: any;
  createUserResponse: any;
  checkedList: Array<String> = [];
  checked: boolean;
  showFullList = false;

  includeSearchText: FormControl;
  excludeSearchText: FormControl;

  groupList = [
    { id: 1, groupName: 'AccountAdministatorsRole1' },
    { id: 2, groupName: 'AccountAdministatorsRole2' },
    { id: 3, groupName: 'AccountAdministatorsRole3' },
    { id: 4, groupName: 'AccountAdministatorsRole4' },
    { id: 5, groupName: 'AccountAdministatorsRole5' },
    { id: 6, groupName: 'AccountAdministatorsRole6' },
    { id: 7, groupName: 'AccountAdministatorsRole7' },
    { id: 8, groupName: 'AccountAdministatorsRole8' },
    { id: 9, groupName: 'AccountAdministatorsRole9' },
    { id: 10, groupName: 'AccountAdministatorsRole10' },
    { id: 11, groupName: 'AccountAdministatorsRole11' },
    { id: 12, groupName: 'AccountAdministatorsRole12' },
    { id: 13, groupName: 'AccountAdministatorsRole13' },
    { id: 14, groupName: 'AccountAdministatorsRole14' },
    { id: 15, groupName: 'AccountAdministatorsRole15' },
    { id: 16, groupName: 'AccountAdministatorsRole16' },
    { id: 17, groupName: 'AccountAdministatorsRole17' },
    { id: 18, groupName: 'AccountAdministatorsRole18' },
    { id: 19, groupName: 'AccountAdministatorsRole19' },
    { id: 20, groupName: 'AccountAdministatorsRole20'}
  ];
  constructor(private router: Router, private userMainService: UserMainService,
    private translateService: TranslateService, private iframeService: IframeService,
    private userService: UsersService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.groupListData = this.groupList;
  }

  createFormControls() {
    this.includeSearchText = new FormControl('', Validators.required);
    this.excludeSearchText = new FormControl('', Validators.required);
  }

  createForm() {
    this.groupForm = new FormGroup({
      includeSearchText: this.includeSearchText,
      excludeSearchText: this.excludeSearchText,
    });
  }

//   createUserApiCall() {
//     this.userMainService.createUser().then(results => {
//     this.createUserResponse = Object.assign([], results);
//     console.log('from component', this.createUserResponse);
//  }).catch(() => {
//   this.translateService
//       .get('CATALOGS.HEADR.store_list_failed')
//       .subscribe((msg: string) => {
//         this.iframeService.postStatusMsg(msg, 'error');
//       });
// });
// }

  submitUserDetails() {
    this.createUser();
    this.router.navigate(['users']);
    }
    backClick() {
      this.router.navigate(['users/userRoles']);
    }
    cancelClick() {
    this.router.navigate(['users']);
  }

  onChangeCheckbox(list, event) {
    if (event.checked) {
      this.checkedList.push(list.id);
    } else {
      const remove = this.checkedList.includes(list.id);
      if (remove === true) {
        const idx = this.checkedList.indexOf(list.id);
      this.checkedList.splice(idx, 1);
      }
    }
  }

  showTotalItems() {
this.showFullList = true;
  }

  createUser(): Promise<Object> {
    this.userMainService.setUserData();
    console.log(this.userMainService.listData);
    const list = this.userMainService.listData;
    return new Promise((resolve, reject) => {
      this.userService.UsersCreateUserResponse(list
      ).subscribe(response => {
        resolve(response);
        console.log('serviceGroup', response);
      },  error => {
        reject();
      });
    });
  }


  // listOld = {
  //   "address": {
  //     "address1": "address 1",
  //     "address2": "address 2",
  //     "address3": "address 3",
  //     "addressType": "SB",
  //     "bestCallingTime": "D",
  //     "businessTitle": "Director",
  //     "city": "Bangalore",
  //     "country": "India",
  //     "email1": "asutosh.r@hcl.com",
  //     "firstName": "Asutosh",
  //     "lastName": "Roy",
  //     "state": "ON"
  //   },
  //   "logonId": "asu54",
  //   "organizationId": 7000000000000000002,
  //   "password": "wcs1admin",
  //   "passwordVerify": "wcs1admin"
  //  }

}
