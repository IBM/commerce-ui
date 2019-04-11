import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserMainService } from '../../../services/user-main.service';
import { UserSettingService } from '../../../services/user-setting.service';

@Component({
  selector: 'ac-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  disabled: '';
  accountData: any;
  userAccountData: any;
  inputFieldValideted: boolean;
  logonId: string;
  email1: string;
  password: string;
  passwordVerify: string;
  organizationName: string;
  policy: string;
  emailPattern: any;
  showInput: boolean;
  envalidEmail: boolean;
  showTextVisible = true;
  showTickboxVisible: boolean;
  inputFieldError: boolean;


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
  constructor(private router: Router, private userMainService: UserMainService,
    private userSettingService: UserSettingService) { }

  ngOnInit() {
    this.showInput = true;
    this.accountData = this.userMainService.userAccountData;
    if (this.userSettingService.contactBackClick) {
      this.setModelData();
      this.showTickboxVisible = true;
    } else {
      this.showTickboxVisible = false;
    }
  }

  setModelData() {
    this.logonId = this.accountData.logonId;
    this.email1 = this.accountData.email1;
    this.password = this.accountData.password;
    this.passwordVerify = this.accountData.passwordVerify;
    this.organizationName = this.accountData.organizationName;
    this.policy = this.accountData.policy;
  }

  goToContact() {
    this.validateInputField();
    this.validatePassword();
    if (this.inputFieldValideted && !this.envalidEmail && this.showTickboxVisible) {
      this.accountCall();
      this.router.navigate(['/users/userContact']);
      this.userMainService.useraccount(this.userAccountData);
    }

  }
  cancelClick() {
    this.router.navigate(['users']);
  }
accountCall() {
  this.userAccountData = {
    'logonId': this.logonId,
    'email1': this.email1,
    'password': this.password,
    'passwordVerify': this.passwordVerify,
    'organizationName': this.organizationName,
    'policy': this.policy
  };
}

validateEmail(email) {
   this.emailPattern = new RegExp('[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+');
  if (this.emailPattern.test(email)) {
    this.envalidEmail = false;
  } else {
    this.envalidEmail = true;
  }
}
validateInputField() {
  if (this.logonId !== '' && this.logonId !== undefined && this.email1 !== '' && this.email1 !== undefined
   && this.password !== '' && this.password !== undefined && this.passwordVerify !== '' && this.passwordVerify !== undefined
  && this.organizationName !== '' && this.organizationName !== undefined && this.policy !== '' && this.policy !== undefined) {
    this.inputFieldValideted = true;
    this.inputFieldError = false;
  } else {
    this.inputFieldValideted = false;
    this.inputFieldError = true;
  }
}
validatePassword() {
  if (this.password.length >= 8) {
    this.showTickboxVisible = true;
  } else {
    this.showTickboxVisible = false;
  }
}
showHide() {
  this.showTextVisible = !this.showTextVisible;
}

}
