import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrganizationsMainService } from '../organizations.main.service';
import { OrganizationsConstants } from '../organizations.constants';
import { AppConstants } from '../../../app.constants';
import {TranslateService} from '@ngx-translate/core';
import { HelpLinksConstants } from '../../../components/help-links/help-links.constants';
import { IframeService } from '../../../services/iframe.service';

@Component({
  selector: 'ac-edit-organization',
  templateUrl: './edit-organization.component.html',
  styleUrls: ['./edit-organization.component.scss']
})
export class EditOrganizationComponent implements OnInit {
  breadCrumbLinks = [];

  readonly ORGANIZATIONS_HELPLINKS = HelpLinksConstants.ORGANIZATIONS_HELP_LINK;
  orgId: string;
  contextOrg: Object = {};

  onEdit(changedOrg: Object){
    if (changedOrg != null){
      this.orgService
          .editOrganization(changedOrg)
          .then(orgId => {
              this.router.navigate(['/organizations'], {queryParams: {orgId: orgId.toString()}});
          }).catch(()=>{
              this.translateService
                      .get('ORGANIZATIONS.EDIT_ORGANIZATION.editFailed')
                      .subscribe((msg: string) =>{
                        this.iframeService.postStatusMsg(msg, 'error');
                     });
          });
    } else {
      this.router.navigate(['/organizations']);
    }
    
  }

  constructor(private route: ActivatedRoute,
              private router: Router,
              private iframeService: IframeService,
              private orgService: OrganizationsMainService,
              private translateService: TranslateService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orgId = params['id'];
      this.orgService.getOrganizationById(this.orgId)
                     .then( result =>{
                        this.contextOrg = Object.assign({}, result);
                     }).catch(()=>{
                      this.translateService
                          .get('ORGANIZATIONS.EDIT_ORGANIZATION.detailsFailed')
                          .subscribe((msg: string) =>{
                            this.iframeService.postStatusMsg(msg, 'error');
                          });
                      this.router.navigate(['/organizations']);
                     });
    });

    this.translateService.get(['breadcrumb.logOut',
      'breadcrumb.home',
      'breadcrumb.editOrganizations']).subscribe((result: object) =>{
        this.breadCrumbLinks = [{
          'link': AppConstants.BREADCRUMBS_URL.BREADCRUMB_LOGOUT_URL,
          'name': result['breadcrumb.logOut']
        }, {
          'link': AppConstants.BREADCRUMBS_URL.BREADCRUMB_HOME_URL,
          'name': result['breadcrumb.home']
        }, {
          'link': OrganizationsConstants.BREADCRUMB_LINKS.BREADCRUMB_ORGANIZATIONS_URL+"/"+this.orgId,
          'name': result['breadcrumb.editOrganizations']
        }];
    });
  }

}
