import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationsConstants } from '../organizations.constants';
import { AppConstants } from '../../../app.constants';
import { HelpLinksConstants } from '../../../components/help-links/help-links.constants'
import { IframeService } from '../../../services/iframe.service';
import { TranslateService } from '@ngx-translate/core';
import { OrganizationsMainService } from '../organizations.main.service';

@Component({
  selector: 'ac-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.scss']
})
export class CreateOrganizationComponent implements OnInit {

  breadCrumbLinks = [];

  readonly ORGANIZATIONS_HELPLINKS = HelpLinksConstants.ORGANIZATIONS_HELP_LINK;
  
  onCreate(createdOrg : Object) {
    if (createdOrg != null){
      this.orgService.createOrganization(createdOrg
      ).then(orgId =>{
        this.router.navigate(['/organizations'], {queryParams: {orgId: orgId.toString()}});
      }).catch(() => {
        this.translateService
            .get('ORGANIZATIONS.CREATE_ORGANIZATION.createFailed')
            .subscribe((msg: string) =>{
                this.iframeService.postStatusMsg(msg, 'error');
            });
      });
    } else {
      this.router.navigate(['/organizations']);
    }
  }

  constructor(private router: Router,
              private orgService: OrganizationsMainService,
              private iframeService: IframeService,
              private translateService: TranslateService) {}

  ngOnInit() {
    this.translateService.get(['breadcrumb.logOut',
      'breadcrumb.home',
      'breadcrumb.createOrganizations']).subscribe((result: object) =>{
        this.breadCrumbLinks = [{
          'link': AppConstants.BREADCRUMBS_URL.BREADCRUMB_LOGOUT_URL,
          'name': result['breadcrumb.logOut']
        }, {
          'link': AppConstants.BREADCRUMBS_URL.BREADCRUMB_HOME_URL,
          'name': result['breadcrumb.home']
        }, {
          'link': OrganizationsConstants.BREADCRUMB_LINKS.BREADCRUMB_CREATE_URL,
          'name': result['breadcrumb.createOrganizations']
        }];
    });
  }

}
