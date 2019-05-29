import { Component, OnInit } from '@angular/core';
import { ApprovalStatusService } from '../../../../rest/services/approval-status.service';
import { UsersService } from '../../../../rest/services/users.service';
import { OrganizationsService } from '../../../../rest/services/organizations.service';

@Component({
  selector: 'app-approval-summary',
  templateUrl: './approval-summary.component.html',
  styleUrls: ['./approval-summary.component.scss']
})
export class ApprovalSummaryComponent implements OnInit {

  constructor(private approvalStatusService: ApprovalStatusService,
    private usersService: UsersService,
    private organizationsService: OrganizationsService) { }

  comments: string;
  statusId: number;
  orgId: any;
  userDetails: any;
  organizationDetails: any;
  disabledButtons: boolean = true;
  showUserData: boolean = false;
  showOrganizationData: boolean = false;

  ngOnInit() {
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
        this.showUserData = true;
			},
			error => {
				console.log(error);
			}
		);
  }

  submitApproval(data) {
    if (data === 'approve') {
      this.statusId = 1
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
  }
  
}
