import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
export class ManageUserContact {
  constructor(public contactName: string,
    public contactEmail: string,
    public streetAddress: string,
    public apartmentName: string,
    public city: string,
    public state: string) {
  }
}
@Component({
  selector: 'app-manage-organization-contact',
  templateUrl: './manage-organization-contact.component.html',
  styleUrls: ['./manage-organization-contact.component.scss']
})
export class ManageOrganizationContactComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<ManageUserContact>();
  manageContactForm: FormGroup;
  constructor(private router: Router, private _fb: FormBuilder) { }

  ngOnInit() {
    this.manageContactForm = this._fb.group({
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
  onSubmit() {
    console.log(this.manageContactForm.value);
    if (this.manageContactForm.valid) {
      this.loggedIn.emit(
        new ManageUserContact(
          this.manageContactForm.value.contactName,
          this.manageContactForm.value.contactEmail,
          this.manageContactForm.value.streetAddress,
          this.manageContactForm.value.apartmentName,
          this.manageContactForm.value.city,
          this.manageContactForm.value.state,
        )
      );
    }
    this.router.navigate(['organizations/manageOrganizationRoles']);
  }
  routeManageOrganizationDetails() {
    this.router.navigate(['organizations/manageOrganizationDetails']);
  }
  routeManageOrganizationRoles() {
    this.router.navigate(['organizations/manageOrganizationRoles']);
  }
  routeOrganizationList() {
    this.router.navigate(['organizations']);
  }
}
