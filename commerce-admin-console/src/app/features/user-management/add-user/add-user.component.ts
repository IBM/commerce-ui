import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { OrganizationService } from "../../../rest/services/organization.service";
import { PersonService } from "../../../rest/services/person.service";
import { CountryService } from "../../../rest/services/country.service";
import { TranslateService } from '@ngx-translate/core';
import { UserManagementConstants } from '../user-management.constants';

@Component({
  selector: 'ac-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userId = 0;
  editUserEnabled = false;
  stateDropdownEnabled = false;

  translation = {
    error: [],
    addUser: []
  };

  policyList = UserManagementConstants.POLICY_LIST;

  statusList = UserManagementConstants.STATUS_LIST;

  languageList = UserManagementConstants.LANGUAGE_LIST;

  validationList = [];
  countryList = [];
  stateDropdownList = [];


  formElements = [
    {
      id: "logonId",
      required: true,
      value: "",
      valid: true,
      type: "text"
    },
    {
      id: "title",
      required: false,
      value: "",
      valid: true,
      type: "text"
    },
    {
      id: "firstName",
      required: false,
      value: "",
      valid: true,
      type: "text"
    },
    {
      id: "middleName",
      required: false,
      value: "",
      valid: true,
      type: "text"
    },
    {
      id: "lastName",
      required: true,
      value: "",
      valid: true,
      type: "text"
    },
    {
      id: "password",
      required: true,
      value: "",
      valid: true,
      type: "password"
    },
    {
      id: "passwordConfirm",
      required: true,
      value: "",
      valid: true,
      type: "password"
    },
    {
      id: "accountPolicy",
      required: true,
      value: this.policyList[0].value,
      valid: true,
      type: "text"
    },
    {
      id: "statusPolicy",
      required: true,
      value: this.statusList[0].value,
      valid: true,
      type: "text"
    },
    {
      id: "employeeId",
      required: false,
      value: "",
      valid: true,
      type: "text"
    },
    {
      id: "employeeType",
      required: false,
      value: "",
      valid: true,
      type: "text"
    },
    {
      id: "departmentNumber",
      required: false,
      value: "",
      valid: true,
      type: "number"
    },
    {
      id: "managerName",
      required: false,
      value: "",
      valid: true,
      type: "text"
    },
    {
      id: "secretaryName",
      required: false,
      value: "",
      valid: true,
      type: "text"
    },
    {
      id: "language",
      required: true,
      value: this.languageList[0].value,
      valid: true,
      type: "text"
    },
    {
      id: "organization",
      required: true,
      value: "",
      valid: true,
      type: "text"
    },
    {
      id: "address1",
      required: true,
      value: "",
      valid: true,
      type: "text"
    },
    {
      id: "address2",
      required: false,
      value: "",
      valid: true,
      type: "text"
    },
    {
      id: "address3",
      required: false,
      value: "",
      valid: true,
      type: "text"
    },
    {
      id: "city",
      required: true,
      value: "",
      valid: true,
      type: "text"
    },
    {
      id: "state",
      required: true,
      value: "",
      valid: true,
      type: "text"
    },
    {
      id: "zip",
      required: true,
      value: "",
      valid: true,
      type: "text"
    },
    {
      id: "country",
      required: true,
      value: "",
      valid: true,
      type: "text"
    },
    {
      id: "email1",
      required: false,
      value: "",
      valid: true,
      type: "email"
    },
    {
      id: "email2",
      required: false,
      value: "",
      valid: true,
      type: "email"
    },
    {
      id: "phone1",
      required: false,
      value: "",
      valid: true,
      type: "number"
    },
    {
      id: "phone2",
      required: false,
      value: "",
      valid: true,
      type: "number"
    },
    {
      id: "fax1",
      required: false,
      value: "",
      valid: true,
      type: "number"
    },
    {
      id: "fax2",
      required: false,
      value: "",
      valid: true,
      type: "number"
    }
  ];

  organizationList = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private organizationService: OrganizationService,
    private personService: PersonService,
    private countryService: CountryService,
    private translateService: TranslateService) {
  
    translateService.setDefaultLang('en');

  }

  ngOnInit() {

    this.translateService.get([UserManagementConstants.TRANSLATION_VALUES.LANGUAGE, 
      UserManagementConstants.TRANSLATION_VALUES.ERROR, 
      UserManagementConstants.TRANSLATION_VALUES.ADD_USER]).subscribe((result: object) => { 
      this.translation.error = result[UserManagementConstants.TRANSLATION_VALUES.ERROR];
      this.translation.addUser = result[UserManagementConstants.TRANSLATION_VALUES.ADD_USER]
      let bufferLanguageArray = [];
      this.languageList.forEach(element => {
        bufferLanguageArray.push({content: result[UserManagementConstants.TRANSLATION_VALUES.LANGUAGE][element.value], value: element.value, selected: false});
      });
      bufferLanguageArray[0].selected = true;
      this.languageList = bufferLanguageArray;

      if (this.router.url.includes('/edit-user')) {
        this.route.params.subscribe(data => this.setUserId(data));
      } else {
        this.organizationService.OrganizationFindByQuery({
          storeId: UserManagementConstants.DEFAULT_STORE_ID,
          q: UserManagementConstants.DEFAULT_ORG_Q,
          orgId: '*'
        }).subscribe(this.processOrgData.bind(this));
      }
    });
  }

  processOrgData(data) {
    let newOrgList = [];
    data["organizationDataBeans"].forEach(element => {
      newOrgList.push({
        content: element.displayName,
        selected: false,
        organizationId: element.organizationId,
        organizationParentId: element.organizationId,
        id: element.organizationId,
        value: element.organizationId
      });
    });
    this.organizationList = newOrgList;

    this.countryService.CountryfindCountryStateList({
      storeId: '0'
    }).subscribe(data => this.processCountryData(data));

  }

  processCountryData(data) {
    let countryBuffer = [];
    data.countries.forEach(element => {
      if(element.states.length > 0) {
        let stateBuffer = [];
        element.states.forEach(element => {
          stateBuffer.push({content: element.displayName, selected: false, value: element.code});
        });
        stateBuffer[0].selected = true;
        countryBuffer.push({content: element.displayName, value: element.code, state: stateBuffer, selected: false});
      } else {
        countryBuffer.push({content: element.displayName, value: element.code, state: element.states, selected: false});
      }
    });

    this.countryList = countryBuffer;
    if (this.editUserEnabled) {
      this.personService.PersonFindByUserIdWRolesOfUserInOrgsICanAdminProfileName({
        storeId: UserManagementConstants.DEFAULT_STORE_ID,
        userId: String(this.userId),
        profileName: UserManagementConstants.DEFAULT_PROFILE_NAME
      }).subscribe(data => this.processUserData(data));
    }
  }

  setUserId(data) {
    this.editUserEnabled = true;
    this.userId = data.id;
    this.organizationService.OrganizationFindByQuery({
      storeId: UserManagementConstants.DEFAULT_STORE_ID,
      q: UserManagementConstants.DEFAULT_ORG_Q,
      orgId: '*'
    }).subscribe(this.processOrgData.bind(this));
  }

  distinguishedName = "";
  registrationTime = "";
  registrationUpdateTime = "";
  lastLogon = "";

  processUserData(user) {
    this.formElements[0].value = user.logonId;
    this.formElements[1].value = user.personTitle;
    this.formElements[2].value = user.address.firstName;
    this.formElements[3].value = user.address.middleName;
    this.formElements[4].value = user.address.lastName;
    this.formElements[7].value = user.userRegistry.policyAccountId;
    this.policyList = this.dropdownFormFill(this.formElements[7].value, "policyList");
    this.formElements[8].value = user.userRegistry.status;
    this.statusList = this.dropdownFormFill(this.formElements[8].value, "statusList");
    this.formElements[9].value = user.employeeId;
    this.formElements[10].value = user.employeeType;
    this.formElements[11].value = user.departmentNumber;
    this.formElements[12].value = user.managerName;
    this.formElements[13].value = user.secretaryName;
    this.formElements[14].value = user.preferredLanguage;
    this.languageList = this.dropdownFormFill(this.formElements[14].value, "languageList");
    this.formElements[15].value = user.organizationId;
    this.organizationList = this.dropdownFormFill(this.formElements[15].value, "organizationList");
    this.formElements[16].value = user.address.address1;
    this.formElements[17].value = user.address.address2;
    this.formElements[18].value = user.address.address3;
    this.formElements[19].value = user.address.city;
    this.formElements[20].value = user.address.state;
    this.formElements[21].value = user.address.zipCode;
    this.formElements[22].value = user.address.country;
    this.countryList = this.countryDropdownFormFill(this.formElements[22].value);
    if(this.stateDropdownEnabled) {
      this.stateDropdownList = this.dropdownFormFill(this.formElements[20].value, "stateList");
    }
    this.formElements[23].value = user.address.email1;
    this.formElements[24].value = user.address.email2;
    this.formElements[25].value = user.address.phone1;
    this.formElements[26].value = user.address.phone2;
    this.formElements[27].value = user.address.fax1;
    this.formElements[28].value = user.address.fax2;
    this.distinguishedName = user.distinguishedName;
    this.registrationTime = user.registrationTime;
    this.registrationUpdateTime = user.registrationUpdateTime;
    this.lastLogon = user.lastSession;
  }

  dropdownFormFill(value, dropdownType) {
    let bufferDropdown = [];
    if (dropdownType === "policyList") {
      bufferDropdown = Object.assign([], this.policyList);
      this.policyList = [];
    } else if (dropdownType === "statusList") {
      bufferDropdown = Object.assign([], this.statusList);
      this.statusList = [];
    }else if (dropdownType === "languageList") {
      bufferDropdown = Object.assign([], this.languageList);
      this.languageList = [];
    } else if (dropdownType === "countryList") {
      bufferDropdown = Object.assign([], this.countryList);
    } else if (dropdownType === "organizationList") {
      bufferDropdown = Object.assign([], this.organizationList);
    } else if (dropdownType === "stateList") {
      bufferDropdown = Object.assign([], this.stateDropdownList);
    }
    bufferDropdown[0].selected = false;
    bufferDropdown.forEach(element => {
      if (element.value === value) {
        element.selected = true;
      }
    });
    return bufferDropdown;
  }

  countryDropdownFormFill(countryValue) {
    let bufferDropdown = [];
    bufferDropdown = Object.assign([], this.countryList);
    bufferDropdown[0].selected = false;
    bufferDropdown.forEach(element => {
      if (element.value === countryValue) {
        element.selected = true;
        let countryItem = { item: element };
        this.onCountryDropdownSelect(countryItem);
      }
    });
    return bufferDropdown;

  }

  onDropdownSelect(selectedItem, dropdownOrder) {
    if (selectedItem.item.selected === true) {
      this.formElements[dropdownOrder].value = selectedItem.item.value;
    } else {
      this.formElements[dropdownOrder].value = "";
    }
  }

  onCountryDropdownSelect(selectedItem) {
    if(selectedItem.item.state.length > 0) {
      this.stateDropdownEnabled = true;
      this.stateDropdownList = selectedItem.item.state;
    } else {
      this.stateDropdownEnabled = false;
      this.stateDropdownList = [];
    }

    if (selectedItem.item.selected === true) {
      this.formElements[22].value = selectedItem.item.value;
    } else {
      this.formElements[22].value = "";
    }
  }

  submit() {
    this.validationList = [];
    let formValid = true;

    this.formElements.forEach(element => {
      if (element.type === "text") {
        element.valid = this.checkText(element);
        formValid = formValid && element.valid;
      } else if (element.type === "password") {
        element.valid = this.checkPassword(element);
        formValid = formValid && element.valid;
      } else if (element.type === "email") {
        element.valid = this.checkEmail(element);
        formValid = formValid && element.valid;
      }
    });

    if(formValid) {
      if(this.formElements[5].value === this.formElements[6].value) {
        if(this.editUserEnabled) {
          this.handleEditUser();
        } else { 
          this.handleCreateUser();
        }
      } 
    } else {
      window.scroll(0,0);
    }

  }

  handleEditUser() {
    let body =  {
      logonId: this.formElements[0].value,
      personTitle: this.formElements[1].value,
      firstName: this.formElements[2].value,
      middleName: this.formElements[3].value,
      lastName: this.formElements[4].value,
      logonPassword: this.formElements[5].value,
      logonPasswordVerify: this.formElements[6].value,
      employeeId: this.formElements[9].value,
      employeeType: this.formElements[10].value,
      departmentNumber: this.formElements[11].value,
      managerName: this.formElements[12].value,
      secretaryName: this.formElements[13].value,
      preferredLanguage: this.formElements[14].value,
      organizationId: this.formElements[15].value,
      address1: this.formElements[16].value,
      city: this.formElements[19].value,
      state: this.formElements[20].value,
      zipCode: this.formElements[21].value,
      country: this.formElements[22].value,
      email1: this.formElements[23].value,
      email2: this.formElements[24].value,
      phone1: this.formElements[25].value,
      phone2: this.formElements[26].value,
      fax1: this.formElements[27].value,
      fax2: this.formElements[28].value
    }

    if(this.formElements[5].value === "" || this.formElements[5].value === "undefined") {
      delete body.logonPassword;
      delete body.logonPasswordVerify;
    }

    this.personService.PersonUpdatePersonByAdmin({
      storeId: "0",
      userId: String(this.userId),
      body: body
    }).subscribe(
      this.handleSuccess.bind(this), 
      this.handleError.bind(this)
    );
  }

  handleCreateUser(){ 

    this.personService.PersonRegisterPersonOnUserRegistrationAdminAdd( {
      storeId: "0",
      mode: "admin",
      body: {
        logonId: this.formElements[0].value,
        personTitle: this.formElements[1].value,
        firstName: this.formElements[2].value,
        middleName: this.formElements[3].value,
        lastName: this.formElements[4].value,
        logonPassword: this.formElements[5].value,
        logonPasswordVerify: this.formElements[6].value,
        policyAccountId: this.formElements[7].value,
        userStatus: this.formElements[8].value,
        employeeId: this.formElements[9].value,
        employeeType: this.formElements[10].value,
        departmentNumber: this.formElements[11].value,
        manager: this.formElements[12].value,
        secretary: this.formElements[13].value,  
        preferredLanguage: this.formElements[14].value,
        organizationId: this.formElements[15].value,
        address1: this.formElements[16].value,
        city: this.formElements[19].value,
        state: this.formElements[20].value,
        zipCode: this.formElements[21].value,
        country: this.formElements[22].value,
        email1: this.formElements[23].value,
        email2: this.formElements[24].value,
        phone1: this.formElements[25].value,
        phone2: this.formElements[26].value,
        fax1: this.formElements[27].value,
        fax2: this.formElements[28].value,
        profileType: "B"
      }
    }
    ).subscribe( 
      this.handleSuccess.bind(this), 
      this.handleError.bind(this)
    );

  }

  checkText(element) {
    if (element.required === true && (element.value === "" || element.value === undefined || element.value === null)) {
      this.validationList.push(this.translation.addUser[element.id] + " " + this.translation.error["emptyAlert"]);
      return false;
    } else {
      return true;
    }
  }

  checkEmail(element) {
    let emailRegex = UserManagementConstants.REGEX_VALUES.EMAIL_REGEX;
    let result = true;
    if (element.value === "" || element.value === undefined || element.value === null) {
      element.required = false;
      result = true;
      return true;
    } else if (!emailRegex.test(element.value)) {
      result = false;
      element.required = true;
      return false;
    }
    return result;
  }

  checkPassword(element) {
    let passwordRegexNumber = UserManagementConstants.REGEX_VALUES.PASS_NUMBER_REGEX;
    let passwordRegexAlphabet = UserManagementConstants.REGEX_VALUES.PASS_ALPHABET_REGEX;

    if (element.value === "" || element.value === "undefined" || element.value === null) {
      if(this.editUserEnabled) {
        return true;
      }
      this.validationList.push(this.translation.addUser[element.id] + " " + this.translation.error["emptyAlert"]);
      return false;
    }

    if (element.value.length < 8) {
      return false;
    }

    if (!passwordRegexNumber.test(element.value)) {
      this.validationList.push(this.translation.addUser[element.id] + " " + this.translation.error["passAlphanumeric"]);
      return false;
    }

    if (!passwordRegexAlphabet.test(element.value)) {
      this.validationList.push(this.translation.addUser[element.id] + " " + this.translation.error["passAlphabetical"]);
      return false;
    }

    return true;

  }

  cancel() {
    this.router.navigate(['/users']);
  }

  handleSuccess(success) {
    this.router.navigate(['/users']);
  }

  handleError(error) {
    this.validationList.push(error.error.errors[0]);
  }

}
