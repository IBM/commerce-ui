import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableModel, TableItem, TableHeaderItem  } from 'carbon-components-angular';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizationsConstants } from '../organizations.constants';
import { AppConstants } from '../../../app.constants';
import { HelpLinksConstants } from '../../../components/help-links/help-links.constants';
import { IframeService } from '../../../services/iframe.service';
import { OrganizationsMainService } from '../organizations.main.service';

@Component({
  selector: 'ac-list-organization',
  templateUrl: './list-organizations.component.html',
  styleUrls: ['./list-organizations.component.scss']
})
export class ListOrganizationsComponent implements OnInit {

  readonly ORGANIZATIONS_HELPLINKS = HelpLinksConstants.ORGANIZATIONS_HELP_LINK;
  
  breadCrumbLinks = [];
  orgDataSet = [];
  orgResponseData = [];
  orgModel = new TableModel();
  pageLength = 11;
  pageIndex = {};
  selectOrgLink: string = null;
  
  @ViewChild("listOrgItemTemplate")
  private listOrgItemTemplate: TemplateRef<any>;

  onSelect(selected: Object) {
    var tableArr = selected['model']['rowsSelected'] as Array<Boolean>;
    if (this.isOnlyOneSelected(tableArr) === true){
      let index = selected["selectedRowIndex"];
      this.selectOrgLink = this.orgModel.row(index)[0]['data']['link'];
    } else {
      this.selectOrgLink = null;
    }
  }

  onSelectAll(selected: Object) {
    this.selectOrgLink = null;
  }

  onDeselectAll(selected: Object) {
    this.selectOrgLink = null;
  }

  onDeselect(selected: Object){
    var tableArr = selected['model']['rowsSelected'] as Array<Boolean>;
    if (this.isOnlyOneSelected(tableArr) === true){
      let index = tableArr.indexOf(true)
      this.selectOrgLink = this.orgModel.row(index)[0]['data']['link'];
    } else {
      this.selectOrgLink = null;
    }

  }


  isOnlyOneSelected(arr: Array<Boolean>): Boolean {    
    return arr.filter(sel => sel === true).length === 1;
  }

  setPageIndex(){
    var pageCount = 0;
    for(var i = 0; i < this.orgModel.currentPage; i++){
      pageCount += this.pageLength;
    }
    this.pageIndex['start'] = pageCount - this.pageLength + 1;
    this.pageIndex['end'] = pageCount < this.orgResponseData.length? pageCount :  this.orgResponseData.length;
  }

  onPage(pageNum: number){
    this.selectOrgLink = null;
    this.orgModel.currentPage = pageNum;
    this.orgModel.data = this.orgDataSet[this.orgModel.currentPage - 1];
    this.setPageIndex();
  }

  genPageData(page: number){
    var count = 0;
    var pageContent = []
    for (let o of this.orgResponseData){
      if (count === page){
        this.orgDataSet.push(pageContent);
        pageContent = [];
        count = 0;
      }
      pageContent.push([new TableItem({data: {name: o['organizationName'], link: '/organizations/'+o['organizationId']}, template: this.listOrgItemTemplate}), new TableItem({data: o['parentMemberName']}),
        new TableItem({data: o['state']}), new TableItem({data: o['status']}), new TableItem({data: o['orgEntityType']})]);
      count++;
    }
    if (pageContent.length > 0){
      this.orgDataSet.push(pageContent);
    }
  }

  constructor(private iframeService: IframeService,
              private translateService: TranslateService,
              private route: ActivatedRoute,
              private organizationsService: OrganizationsMainService) {
   }

  ngOnInit() {
    this.translateService.get(['breadcrumb.logOut',
      'breadcrumb.home',
      'breadcrumb.organizations']).subscribe((result: object) =>{
        this.breadCrumbLinks = [{
          'link': AppConstants.BREADCRUMBS_URL.BREADCRUMB_LOGOUT_URL,
          'name': result['breadcrumb.logOut']
        }, {
          'link': AppConstants.BREADCRUMBS_URL.BREADCRUMB_HOME_URL,
          'name': result['breadcrumb.home']
        }, {
          'link': OrganizationsConstants.BREADCRUMB_LINKS.BREADCRUMB_ORGANIZATIONS_URL,
          'name': result['breadcrumb.organizations']
        }];
    });

    var orgQuery = this.route.snapshot.queryParamMap.get('name');
    var parentOrgQuery = this.route.snapshot.queryParamMap.get('parent');
    var orgIdQuery = this.route.snapshot.queryParamMap.get('orgId');
    orgIdQuery = orgIdQuery != null ? orgIdQuery : '*';
    this.organizationsService
      .getOrganizations(orgQuery, parentOrgQuery, orgIdQuery).then( results =>{
        let orgData = Object.assign([], results);
        if (orgData.length > 0){
          this.orgResponseData = orgData;
          this.orgModel.totalDataLength = orgData.length;
          for (var org of this.orgResponseData){
            this.orgModel.addRow([new TableItem({data: {name: org['organizationName'], link: '/organizations'+org['organizationId']}, template: this.listOrgItemTemplate}), new TableItem({data: org['parentMemberName']}), new TableItem({data: org['state']}), new TableItem({data: org['status']}), 
            new TableItem({data: org['orgEntityType']})]);
          }
          this.genPageData(this.pageLength);
          this.orgModel.data = this.orgDataSet[this.orgModel.currentPage - 1];
          this.orgModel.pageLength = this.pageLength;
          this.pageIndex['start'] = 1;
          this.pageIndex['end'] = (orgData.length < this.pageLength)? orgData.length: this.pageLength;
        }else {
          this.orgModel.pageLength = -1;
          this.orgModel.data = [];
        }
    }, () => {
      this.orgModel.pageLength = -1;
      this.orgModel.data = [];
    }).catch(()=>{
      this.translateService
          .get('ORGANIZATIONS.LIST_ORGANIZATIONS.listOrgFailed')
          .subscribe((msg: string)=>{
            this.iframeService.postStatusMsg(msg, 'error');
          });
    });

    this.orgModel.header = [
      new TableHeaderItem({data: 'Name'}),
      new TableHeaderItem({data: 'Parent'}),
      new TableHeaderItem({data: 'Approval State'}),
      new TableHeaderItem({data: 'Status'}),
      new TableHeaderItem({data: 'Organization Type'})
    ];
    this.orgModel.currentPage = 1;
  }

}
