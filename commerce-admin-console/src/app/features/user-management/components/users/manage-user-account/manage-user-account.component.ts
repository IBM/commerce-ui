import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../../../../../src/app/rest/services/users.service';
import { UserMainService } from '../../../services/user-main.service';
import { IframeService } from '../../../../../services/iframe.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-manage-user-account',
  templateUrl: './manage-user-account.component.html',
  styleUrls: ['./manage-user-account.component.scss']
})
export class ManageUserAccountComponent implements OnInit {
  showInput: boolean;
  disabled: '';
  accountData: any;
  userAccountData: any;
  logonId: string;
  email1: string;
  password: string;
  passwordVerify: string;
  organizationName: string;
  policy: string;
  emailPattern: any;
  envalidEmail: boolean;
  showTextVisible = true;
  showTickboxVisible: boolean;
  manageUserResponse: any;
  id: number;

  constructor(
    private router: Router,
    private userMainService: UserMainService,
    private userService: UsersService,
    private iframeService: IframeService,
    private translateService: TranslateService) { }

  updateUser;

  ngOnInit() {
    this.showInput = true;
    this.accountData = this.userMainService.manageuserAccount;
    this.updateUserApiCall();
    
  }

  updateUserApiCall() {
    this.id = 1005;
    this.userMainService.updateUser(1005).then(results => {
    this.manageUserResponse = Object.assign([], results);
    this.setModelData();
    console.log("GET UPDATEUSER DATA FROM SERVICE", this.manageUserResponse);
    }).catch(() => {
      this.translateService
          .get('CATALOGS.HEADR.store_list_failed')
          .subscribe((msg: string) => {
            this.iframeService.postStatusMsg(msg, 'error');
          });
    });
  }
  
  saveAccount() {
    this.router.navigate(['/users/manageContact']); 
  }

  // getAccountData(){
  //   this.updateUser = this.userService.UsersUpdateUser;
  //   // console.log("$$$$$$$", this.updateUser);
  // }

  // resultData:any;
  // manageUserApiCall() {
  //   this.userMainService.updateUser(1005).subscribe(response=>{
  //     this.resultData = response;
  //     console.log('service', this.resultData);
  //   });
  //   this.translateService
  //     .get('CATALOGS.HEADR.store_list_failed')
  //     .subscribe((msg: string) => { 
  //       this.iframeService.postStatusMsg(msg, 'error');
  //     });
  // }

  setModelData() {
    this.logonId = this.manageUserResponse.logonId;
    this.email1 = this.manageUserResponse.address.email1;
    this.password = this.manageUserResponse.password;
    this.passwordVerify = this.manageUserResponse.password;
    this.organizationName = this.manageUserResponse.organizationName;
    this.policy = this.manageUserResponse.policy;
  }
 
  accountCall() {
    this.userAccountData = {
      'logonId': this.logonId,
      'email1': this.email1,
      'password': this.password,
      'passwordVerify': this.password,
      'organizationName': this.organizationName,
      'policy': this.policy
    };
  }

  cancelClick() {
    this.router.navigate(['users']);
  }

}



