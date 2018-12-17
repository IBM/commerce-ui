import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApprovalConstants } from '../approval.constants';
import { HelpLinksConstants } from '../../../components/help-links/help-links.constants';

@Component({
  selector: 'ac-approval-dashboard',
  templateUrl: './approval-dashboard.component.html',
  styleUrls: ['./approval-dashboard.component.scss']
})
export class ApprovalDashboardComponent implements OnInit {

  pages = [];

  readonly APPROVAL_HELPLINKS = HelpLinksConstants.APPROVALS_HELP_LINK;

  constructor(private readonly translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.pages = [{
      'link': ApprovalConstants.BREADCRUMB_LINKS.BREADCRUMB_LOGOUT_URL
    }, {
      'link': ApprovalConstants.BREADCRUMB_LINKS.BREADCRUMB_HOME_URL
    }, {
      'link': ApprovalConstants.BREADCRUMB_LINKS.BREADCRUMB_APPROVALS_URL
    }];

    this.translate.get(["APPROVALS.BREADCRUMB.LOGOUT_LABEL","APPROVALS.BREADCRUMB.HOME_LABEL","APPROVALS.BREADCRUMB.APPROVALS_LABEL"]).subscribe((result: string[]) => {
      this.pages[0].name = result['APPROVALS.BREADCRUMB.LOGOUT_LABEL'];
      this.pages[1].name = result['APPROVALS.BREADCRUMB.HOME_LABEL'];
      this.pages[2].name = result['APPROVALS.BREADCRUMB.APPROVALS_LABEL'];
    });
  }
}
