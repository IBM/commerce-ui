import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { OrganizationsMainService } from '../organizations.main.service';

@Component({
  selector: 'organization-form',
  templateUrl: './organization-form.component.html',
  styleUrls: ['./organization-form.component.scss']
})
export class OrganizationFormComponent implements OnInit {

  @Output() outputOrg: EventEmitter<Object> = new EventEmitter<Object>();

  @Input() inputOrg = {} as Object ;

  @Input() isInputDisabled = false;

  organizationForm: FormGroup;
  parentOrgsItems = [];
  organizationTypeItems = [];

  submitForm() {
    this.outputOrg.emit(this.inputOrg);
  }

  cancelForm() {
    this.outputOrg.emit(null);
  }

  onTypeSelected(selection: Object) {
    if (selection['item']['selected'] == true){
      this.inputOrg['orgEntityType'] = selection['item']['id'];
    } else {
      this.inputOrg['orgEntityType'] = null;
    }
  }

  onParentOrgSelected(selection: Object) {
    if (selection['item']['selected'] == true){
      this.inputOrg['parentMemberId'] = selection['item']['id'];
    } else {
      this.inputOrg['parentMemberId'] = null;
    }
  }

  get orgEntityName() { return this.organizationForm.get('orgEntityName'); }
  get orgEntityType() { return this.organizationForm.get('orgEntityType');}
  get description() { return this.organizationForm.get('description');}
  get parentOrg() { return this.organizationForm.get('parentOrg'); }
  get address() { return this.organizationForm.get('address'); }
  get email() { return this.organizationForm.get('email'); }
  get phone() { return this.organizationForm.get('phone'); }
  get state() { return this.organizationForm.get('state'); }
  get city() { return this.organizationForm.get('city'); }
  get country() { return this.organizationForm.get('country'); }
  get zipCode() { return this.organizationForm.get('zipCode'); }

  constructor (private organizationService: OrganizationsMainService) {
  }

  ngOnInit() {

    this.organizationForm = new FormGroup({
      'orgEntityName': new FormControl(this.inputOrg['orgEntityName'], [
        Validators.required,
        Validators.minLength(4)
      ]),
      'description': new FormControl(this.inputOrg['description'],Validators.maxLength(300)),
      'orgEntityType': new FormControl(this.inputOrg['orgEntityType'], Validators.required),
      'parentOrg': new FormControl(this.inputOrg['parentMemberId'],Validators.required),
      'address': new FormControl(this.inputOrg['address'], [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('[0-9]+ [a-z|A-Z|0-9|\s]+ [a-zA-Z|(.|,)]+')
      ]),
      'state': new FormControl(this.inputOrg['state'], [
        Validators.required,
        Validators.minLength(2)]),
      'city': new FormControl(this.inputOrg['city'], Validators.required),
      'zipCode': new FormControl(this.inputOrg['zipCode'], [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[a-z|A-Z|0-9|\s]+')
      ]),
      'country': new FormControl(this.inputOrg['country'], Validators.required),
      'email':  new FormControl(this.inputOrg['email'], [Validators.required, Validators.email]),
      'phone': new FormControl(this.inputOrg['phone'],[
        Validators.minLength(10),
        Validators.maxLength(11),
        Validators.pattern('[0-9]+')
      ])
    });

    this.organizationService
        .getOrganizations(null,null,'*')
        .then(results => {
          let orgData = Object.assign([], results);
          var parentOrgs = [];
          if (this.inputOrg['organizationId'] != undefined){
            for(var org of orgData){
              if (org['organizationId'] === this.inputOrg['organizationId'] ){
                let orgTypeItem = [{
                  id: org['orgEntityTypeCode'],
                  content: org['orgEntityType'],
                  selected: true
                }];

                let parentItem = {
                  id: org['parentMemberId'],
                  content: org['parentMemberName'],
                  selected: true
                };

                this.inputOrg['orgEntityType'] =  org['orgEntityType'];
                this.inputOrg['parentMemberId'] =  org['parentMemberId'];
                this.inputOrg['parentMemberName'] =  org['parentMemberName'];
                this.organizationTypeItems = orgTypeItem;
                parentOrgs.push(parentItem);
                break;
              }
            }
          this.organizationForm.get('orgEntityType').disable();
          this.organizationForm.get('parentOrg').disable();
          }else{
              this.organizationTypeItems = [
                {
                  id: "O",
                  content: "Organization",
                  selected: false
                }, {
                  id: "OU",
                  content: "Organization Unit",
                  selected: false
                }, {
                  id: "AD",
                  content: "Authorization Domain",
                  selected: false
                }
              ];
              orgData.forEach(org =>{
                if (org['orgEntityType'] === "Organization"){
                  let item = {
                    id: org['organizationId'],
                    content: org['organizationName'],
                    selected: false
                  };
                  parentOrgs.push(item);
                }
              });
            }
        this.parentOrgsItems = parentOrgs;
        }); 
  }

}
