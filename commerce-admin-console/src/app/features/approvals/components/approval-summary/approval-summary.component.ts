import { Component, OnInit } from '@angular/core';
import { ApprovalStatusService } from '../../../../rest/services/approval-status.service';
import { UsersService } from '../../../../rest/services/users.service';
import { OrganizationsService } from '../../../../rest/services/organizations.service';
import { RoleAssignmentsService } from '../../../../rest/services/role-assignments.service';
import { RoleDescriptionsService } from '../../../../rest/services/role-descriptions.service';
import { Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approval-summary',
  templateUrl: './approval-summary.component.html',
  styleUrls: ['./approval-summary.component.scss']
})
export class ApprovalSummaryComponent implements OnInit {

  constructor(private approvalStatusService: ApprovalStatusService,
    private usersService: UsersService,
    private organizationsService: OrganizationsService,
    private roleAssignmentsService: RoleAssignmentsService,
    private roleDescriptionsService: RoleDescriptionsService,
    private router: Router) { }

  comments: string;
  statusId: number;
  orgId: any;
  userDetails: any;
  organizationDetails: any;
  disabledButtons: boolean = true;
  showUserData: boolean = false;
  showOrganizationData: boolean = false;
  roleNames = null;
  rolesNameToDisplay: any;
  roleNamesLoaded: Subject<boolean> = new Subject<boolean>();

  ngOnInit() {
    this.loadRoleNames();
    this.getUserDetails();
    this.getOrganizationDetails();
  }

  controlButtons() {
    if(this.comments !== '' && this.comments !== undefined) {
      this.disabledButtons = false;
    } else {
      this.disabledButtons = true;
    }
  }
 
  getOrganizationDetails() {
    this.orgId = '7000000000000005002'
		this.organizationsService.OrganizationsFindByOrganizationId(this.orgId).subscribe(
			response => {
        console.log('organizationDetails', response);
        this.organizationDetails = response;
        this.showOrganizationData = true;
			},
			error => {
				console.log(error);
			}
		);
  }

  getUserDetails() {
    let id = -1101;
		this.usersService.UsersFindByUserId(id).subscribe(
			response => {
        console.log('userDetails', response);
        this.userDetails = response;
        debugger
        this.showUserData = true;
        this.populateRoles(this.userDetails.id);
			},
			error => {
				console.log(error);
			}
		);
  }

  private loadRoleNames() {
    debugger
    this.roleNamesLoaded.next(false);
		this.roleDescriptionsService.getRoleDescriptions({
			languageId: -1
		}).subscribe((body: any) => {
			let roleNames = {};
			for (let i = 0; i < body.items.length; i++) {
				let roleDescription = body.items[i];
				roleNames[roleDescription.roleId] = roleDescription.displayName;
			}
      this.roleNames = roleNames;
      this.roleNamesLoaded.next(true);
		});
  }
  
  private populateRoles(id:number) {
		debugger
		this.roleAssignmentsService.getRoleAssignments({
			memberId: id
		}).subscribe((body: any) => {
      debugger
      console.log('body', body);
			let uniqueRoles:Array<number> = [];
			for (let i = 0; i < body.items.length; i++) {
				let roleId = body.items[i].roleId;
				if (uniqueRoles.indexOf(roleId) === -1) {
					uniqueRoles.push(roleId);
				}
			}
			if (this.roleNames != null) {
				this.getRoleNamesFromIds(uniqueRoles);
			}
			else {
				const roleNamesLoadedSubscription: Subscription = this.roleNamesLoaded.subscribe((roleNamesLoaded: boolean) => {
					if (roleNamesLoaded) {
						this.getRoleNamesFromIds(uniqueRoles);
						roleNamesLoadedSubscription.unsubscribe();
					}
				});
			}
		});
  }

  private getRoleNamesFromIds(roleIds:Array<number>) {
		debugger
		let roleNames = [];
		for (let i = 0; i < roleIds.length; i++) {
			roleNames.push(this.roleNames[roleIds[i]]);
		}
		this.rolesNameToDisplay = roleNames;
	}

  submitApproval(data) {
    if (data === 'approve') {
      this.statusId = 1;
    }
    if (data === 'reject') {
      this.statusId = 2
    }
    let approvalBody = {
      "comment": this.comments,
      "status": this.statusId
    }
		this.approvalStatusService.updateApprovalStatusResponse({
      id: '10001',
      body: approvalBody
    }).subscribe(
			response => {
				// // let paths: Array<string> = response.headers.get("location").split('/');
        // // let id: number = Number(paths[paths.length - 1]);
        // console.log(paths, id );
			},
			error => {
				console.log(error);
			}
    );
    this.router.navigate(['/approvals']);
  }
  cancelButton() {
    this.router.navigate(['/approvals']);
  }
  
}
