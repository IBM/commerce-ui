import { Injectable } from '@angular/core';
import { UsersService } from '../../../rest/services/users.service';
import { RoleAssignmentsService } from '../../../rest/services/role-assignments.service';

@Injectable({
	providedIn: 'root'
})
export class UserMainService {
	userData: any = null;
	assignedRoles: Array<any> = null;

	userAccountData: any;
	listResult: any;
	id: number;

	constructor(private usersService: UsersService, private roleAssignmentsService: RoleAssignmentsService) { }

	clearData() {
		this.userData = null;
		this.assignedRoles = null;
	}
  
	createUser() {
		this.usersService.UsersCreateUserResponse(this.buildCreateUserBody()).subscribe(
			response => {
				let paths: Array<string> = response.headers.get("location").split('/');
				let id: number = Number(paths[paths.length - 1]);
				this.createRoleAssignments(id);
				this.userData = null;
			},
			error => {
				console.log(error);
			}
		);
	}
	
	private createRoleAssignments(id: number) : void {
		let assignedRoles = this.assignedRoles;
		this.assignedRoles = null;
		assignedRoles.forEach(assignedRole => {
			this.roleAssignmentsService.RoleAssignmentCreateRoleAssignmentResponse({
				memberId: id,
				organizationId: assignedRole.organizationId,
				roleId: assignedRole.roleId
			}).subscribe(
				response => {
					//console.log(response);
				},
				error => {
					console.log(error);
				}
			);
		});
	}
  
	buildCreateUserBody(): any {
		let address = this.userData.address;
		let newAddress: any = {};
		if (address.address1) {
			newAddress.address1 = address.address1;
		}
		if (address.address2) {
			newAddress.address2 = address.address2;
		}
		if (address.city) {
			newAddress.city = address.city;
		}
		if (address.country) {
			newAddress.country = address.country;
		}
		if (address.email1) {
			newAddress.email1 = address.email1;
		}
		if (address.firstName) {
			newAddress.firstName = address.firstName;
		}
		if (address.lastName) {
			newAddress.lastName = address.lastName;
		}
		if (address.personTitle) {
			newAddress.personTitle = address.personTitle;
		}
		if (address.state) {
			newAddress.state = address.state;
		}
		let user = this.userData;
		let newUser: any = {
			address: newAddress
		};
		if (user.logonId) {
			newUser.logonId = user.logonId;
		}
		if (Number.isInteger(user.parentOrganizationId)) {
			newUser.parentOrganizationId = user.parentOrganizationId;
		}
		if (user.password) {
			newUser.password = user.password;
		}
		if (user.passwordVerify) {
			newUser.passwordVerify = user.passwordVerify;
		}
		return newUser;
	}

  userBody: any;
  manageUserData(data) {
    this.userBody = {
      'logonId': data.logonId,
      'email1': data.email1,
      'organizationName': data.organizationName,
      'password': data.password,
      'firstName': data.firstName,
      'lastName': data.lastName,
      'streetAddress1': data.address1,
      'streetAddress2': data.address2,
      'state': data.state,
      'city': data.city,
      'country': data.country,
      'zipcode': data.zipcode
    };
  }

  getUpdateUser(id: number): Promise<Object> {
    // this.id = 2011;
    return new Promise((resolve, reject) => {
      this.usersService.UsersFindByUserId(id
      ).subscribe(response => {
        resolve(response);
        console.log('service', response);
      }, error => {
        reject();
      });
    });
  }

  updateUser(id: number): Promise<Object> {
    // this.id = 2011;
    return new Promise((resolve, reject) => {
      console.log('Inside Promise method');
      this.usersService.UsersUpdateUser({
        id: id,
        body: this.userBody
      }).subscribe(response => {
        console.log('service', response);
        resolve(response);
        // console.log('service', this.resultData);
      }, error => {
        reject();
      });
    });
  }

  manageuserAccount(data) {
    this.userAccountData = {
      'logonId': data.logonId,
      'email1': data.email1,
      'password': data.password,
      'passwordVerify': data.passwordVerify,
      'organizationName': data.organizationName,
      'policy': data.policy
    };
  }

}
