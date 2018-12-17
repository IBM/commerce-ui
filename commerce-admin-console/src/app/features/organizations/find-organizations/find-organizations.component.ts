import { Component, OnInit } from '@angular/core';
import { OrganizationsConstants } from '../organizations.constants';
import { TranslateService } from '@ngx-translate/core';
import { AppConstants } from '../../../app.constants';
import { Router } from '@angular/router';
import { IframeService } from '../../../services/iframe.service';
import { HelpLinksConstants } from '../../../components/help-links/help-links.constants';
import { OrganizationsMainService } from '../organizations.main.service';

@Component({
  selector: 'ac-find-organizations',
  templateUrl: './find-organizations.component.html',
  styleUrls: ['./find-organizations.component.scss']
})
export class FindOrganizationsComponent implements OnInit {

  readonly ORGANIZATIONS_HELPLINKS = HelpLinksConstants.ORGANIZATIONS_HELP_LINK;

  breadCrumbLinks = [];
  orgName: string;
  orgParentName: string;
  orgItems = [];
  parentOrgItems = [];

  onOrgSelected(selection: Object) {
    if (selection['item']['selected'] === true){
      this.orgName = selection['item']['content'];
    } else {
      this.orgName = null;
    }
  }

  onParentOrgSelected(selection: Object) {
    if (selection['item']['selected'] === true){
      this.orgParentName = selection['item']['content'];
    } else {
      this.orgParentName = null;
    }
  }

  findOrg(): void {
    this.router.navigate(['/organizations'], {queryParams: {name: this.orgName, parent: this.orgParentName}});
  }
  
  validRequest():boolean {

    if(this.orgName == null && this.orgParentName == null ){
      return false;
    }

    if(this.orgName === "" && this.orgParentName === ""){
      return false;
    }
    
    return true;
  }
  
  constructor(private translateService: TranslateService,
              private iframeService: IframeService,
              private organizationService: OrganizationsMainService,
              private router: Router) {}

  ngOnInit() {
    this.translateService.get(['breadcrumb.logOut',
    'breadcrumb.home',
    'breadcrumb.findOrgs']).subscribe((result: object) =>{
      this.breadCrumbLinks = [{
        'link': AppConstants.BREADCRUMBS_URL.BREADCRUMB_LOGOUT_URL,
        'name': result['breadcrumb.logOut']
      }, {
        'link': AppConstants.BREADCRUMBS_URL.BREADCRUMB_HOME_URL,
        'name': result['breadcrumb.home']
      }, {
        'link': OrganizationsConstants.BREADCRUMB_LINKS.BREADCRUMB_FIND_URL,
        'name': result['breadcrumb.findOrgs']
      }];
    });

    this.organizationService.getOrganizations(null, null, '*')
        .then( results => {
          let organizations = Object.assign([], results);
          var orgList = [];
          var parentList = [];
          organizations.forEach( org =>{
            if (org['organizationName'] != null && org['organizationName'] != ""){
              let orgItem = {
                "content": org['organizationName'],
                "selected": false
              };
              orgList.push(orgItem);
            }
            if (org['parentMemberId'] != null && org['parentMemberId'] != ""){
              let orgParentItem = {
                content: org['parentMemberName'],
                selected: false
              };
              var parentExists = false;
              parentList.forEach(p => {
                if (p['content'] === orgParentItem['content']){
                  parentExists = true;
                  return;
                }
              });
              if (!parentExists){
                parentList.push(orgParentItem);
              }
            }
          });
          this.orgItems = orgList;
          this.parentOrgItems = parentList;
        }).catch(()=>{
          this.translateService
              .get('ORGANIZATIONS.FIND_ORGANIZATION.startFailed')
              .subscribe((msg: string)=>{
                  this.iframeService.postStatusMsg(msg, 'error');
              });
        });
  }

}
