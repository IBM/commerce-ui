import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { OrganizationMainService } from '../../organization.main.service';

export class User {


  constructor(public contactName: string,
    public contactEmail: string,
    public streetAddress: string,
    public apartmentName: string,
    public city: string,
    public state: string) {
  }
}

@Component({
  selector: 'app-organization-contact',
  templateUrl: './organization-contact.component.html',
  styleUrls: ['./organization-contact.component.scss']
})
export class OrganizationContactComponent implements OnInit {


  orgContactData: any;
  contactData: any;
  contactName: any;
contactEmail: any;
streetAddress: any;
apartmentName: any;
city: any;
state: any;
country: any;
zipCode: any;
      
  @Output() loggedIn = new EventEmitter<User>();
  contactForm: FormGroup;
  constructor(private router: Router,
    private _fb: FormBuilder, private orgMainService: OrganizationMainService) { }

  ngOnInit() {
    this.contactForm = this._fb.group({
      contactName: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)]],
      contactEmail: ['', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')]],
      streetAddress: [],
      apartmentName: [],
      city: [],
      state: []
    });

  }
  routeOrganizationList() {
    this.router.navigate(['organizations']);
  }
  routeOrganizationDetails() {
    this.orgMainService.contactBackClick = true;
    this.router.navigate(['organizations/organizationsDetails']);
  }
 
  onSubmit() {
    console.log(this.contactForm.value);
    if (this.contactForm.valid) {
      this.loggedIn.emit(
        new User(
          this.contactForm.value.contactName,
          this.contactForm.value.contactEmail,
          this.contactForm.value.streetAddress,
          this.contactForm.value.apartmentName,
          this.contactForm.value.city,
          this.contactForm.value.state,
        )
      );
    }
    this.contactCall();
        this.orgMainService.orgContact(this.orgContactData);
    this.router.navigate(['organizations/organizationsRoles']);
  }
  
    

  contactCall() {
    this.orgContactData = this.contactForm.value;
    // {
    //   'contactName': this.contactName.value,
    //   'contactEmail': this.contactEmail.value,
    //   'streetAddress': this.streetAddress.value,
    //   'address1': this.apartmentName.value,
    //   'city': this.city.value,
    //   'country': this.country.value,
    //   'zipCode': this.zipCode.value,
    //   'state': this.state.value
    // };
    console.log("set contact", this.orgContactData);
  }


}
