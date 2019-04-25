import { Component, OnInit, Input } from '@angular/core';
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

  items = [
    {
      content: 'Administator',
      selected: false
    },
    {
      content: 'User',
      selected: false,
    }
  ];

  ngOnInit() {
    this.showInput = true;
    this.accountData = this.userMainService.manageuserAccount;
    this.updateUserApiCall();
    this.enableButton();
    
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
  
  buttonEnabled: boolean = false;
  // apiLogonId: any = this.logonId;
  // userLogonId: any;
  enableButton(){
    if(this.logonId === this.logonId) {
      this.buttonEnabled = !this.buttonEnabled;
    }
    else {
      this.buttonEnabled = this.buttonEnabled;
    }
  }

  values: any ;
  onChange(event: any) {
    this.values = event.target.value;
    console.log("onChange", this.values);
 };

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
    this.router.navigate(['/users']);
  }

//   myPassword: any;
//   checkPasswordEmpty() {
//     console.log("checkPasswordEmpty runs");
//     if (this.myPassword) {
//         // enable the button
//     }
// }


check(){
  var tocheck = ["text1", "text2", "text3", "email"];
  let tform = document.getElementById("theform");
  let ok = true;
  let i;
  for(i=0; i<tocheck.length; i++){
      ok = ok && tform[tocheck[i]].value != "";
  }
  document.getElementById("subm").style.color = ok ? "green" : "red";
}

}



