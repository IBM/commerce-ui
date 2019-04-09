// import { Component, OnInit, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
// import {TableModel, TableHeaderItem, TableItem, PaginationModel } from 'carbon-components-angular';
// import { TranslateService } from '@ngx-translate/core';
// import { Subscription } from 'rxjs';
// import { OrganizationMainService } from '../../organization.main.service';
// import { IframeService } from '../../../../../services/iframe.service';
// import { ActivatedRoute } from '@angular/router';


// @Component({
//   selector: 'app-organization-list',
//   templateUrl: './organization-list.component.html',
//   styleUrls: ['./organization-list.component.scss'],
//   encapsulation: ViewEncapsulation.None
// })
// export class OrganizationListComponent implements OnInit {

  
  
//   breadCrumbLinks = [];
//   orgDataSet = [];
//   orgResponseData = [];
//   orgModel = new TableModel();
//   pageLength = 11;
//   pageIndex = {};
//   selectOrgLink: string = null;
//   @Input() striped = false;
  
//   @ViewChild("listOrgItemTemplate")
//   private listOrgItemTemplate: TemplateRef<any>;

//   onSelect(selected: Object) {
//     var tableArr = selected['model']['rowsSelected'] as Array<Boolean>;
//     if (this.isOnlyOneSelected(tableArr) === true){
//       let index = selected["selectedRowIndex"];
//       this.selectOrgLink = this.orgModel.row(index)[0]['data']['link'];
//     } else {
//       this.selectOrgLink = null;
//     }
//   }

//   onSelectAll(selected: Object) {
//     this.selectOrgLink = null;
//   }

//   onDeselectAll(selected: Object) {
//     this.selectOrgLink = null;
//   }

//   onDeselect(selected: Object){
//     var tableArr = selected['model']['rowsSelected'] as Array<Boolean>;
//     if (this.isOnlyOneSelected(tableArr) === true){
//       let index = tableArr.indexOf(true)
//       this.selectOrgLink = this.orgModel.row(index)[0]['data']['link'];
//     } else {
//       this.selectOrgLink = null;
//     }

//   }


//   isOnlyOneSelected(arr: Array<Boolean>): Boolean {    
//     return arr.filter(sel => sel === true).length === 1;
//   }

//   setPageIndex(){
//     var pageCount = 0;
//     for(var i = 0; i < this.orgModel.currentPage; i++){
//       pageCount += this.pageLength;
//     }
//     this.pageIndex['start'] = pageCount - this.pageLength + 1;
//     this.pageIndex['end'] = pageCount < this.orgResponseData.length? pageCount :  this.orgResponseData.length;
//   }

//   onPage(pageNum: number){
//     this.selectOrgLink = null;
//     this.orgModel.currentPage = pageNum;
//     this.orgModel.data = this.orgDataSet[this.orgModel.currentPage - 1];
//     this.setPageIndex();
//   }

//   genPageData(page: number){
//     var count = 0;
//     var pageContent = []
//     for (let o of this.orgResponseData){
//       if (count === page){
//         this.orgDataSet.push(pageContent);
//         pageContent = [];
//         count = 0;
//       }
//       pageContent.push([new TableItem({data: {name: o['organizationName'], link: '/organizations/'+o['organizationId']}, template: this.listOrgItemTemplate}), new TableItem({data: o['parentMemberName']}),
//         new TableItem({data: o['state']}), new TableItem({data: o['status']}), new TableItem({data: o['orgEntityType']})]);
//       count++;
//     }
//     if (pageContent.length > 0){
//       this.orgDataSet.push(pageContent);
//     }
//   }

//   constructor(private iframeService: IframeService,
//               private translateService: TranslateService,
//               private route: ActivatedRoute,
//               private organizationsService: OrganizationMainService) {
//    }

//   ngOnInit() {

//     var orgQuery = this.route.snapshot.queryParamMap.get('name');
//     var parentOrgQuery = this.route.snapshot.queryParamMap.get('parent');
//     var orgIdQuery = this.route.snapshot.queryParamMap.get('orgId');
//     orgIdQuery = orgIdQuery != null ? orgIdQuery : '*';
//     this.organizationsService
//       .getOrganizations(orgQuery, parentOrgQuery, orgIdQuery).then( results =>{
//         let orgData = Object.assign([], results);
//         if (orgData.length > 0){
//           this.orgResponseData = orgData;
//           this.orgModel.totalDataLength = orgData.length;
//           for (var org of this.orgResponseData){
//             this.orgModel.addRow([new TableItem({data: {name: org['organizationName'], link: '/organizations'+org['organizationId']}, template: this.listOrgItemTemplate}), new TableItem({data: org['parentMemberName']}), new TableItem({data: org['state']}), new TableItem({data: org['status']}), 
//             new TableItem({data: org['orgEntityType']})]);
//           }
//           this.genPageData(this.pageLength);
//           this.orgModel.data = this.orgDataSet[this.orgModel.currentPage - 1];
//           this.orgModel.pageLength = this.pageLength;
//           this.pageIndex['start'] = 1;
//           this.pageIndex['end'] = (orgData.length < this.pageLength)? orgData.length: this.pageLength;
//         }else {
//           this.orgModel.pageLength = -1;
//           this.orgModel.data = [];
//         }
//     }, () => {
//       this.orgModel.pageLength = -1;
//       this.orgModel.data = [];
//     }).catch(()=>{
//       this.translateService
//           .get('ORGANIZATIONS.LIST_ORGANIZATIONS.listOrgFailed')
//           .subscribe((msg: string)=>{
//             this.iframeService.postStatusMsg(msg, 'error');
//           });
//     });

//     this.orgModel.header = [
//       new TableHeaderItem({data: 'Name'}),
//       new TableHeaderItem({data: 'Parent'}),
//       new TableHeaderItem({data: 'Approval State'}),
//       new TableHeaderItem({data: 'Status'}),
//       new TableHeaderItem({data: 'Organization Type'})
//     ];
//     this.orgModel.currentPage = 1;
//   }

// }


// // @Input() customModel = new TableModel();
// // //@Input() model = new TableModel();
// // @Input() size = 'md';
// // @Input() showSelectionColumn = true;
// // @Input() striped = false;

// // @Input() skeleton = false;

// // storeListResult: any;
// // listItems: any;
// // orgtype: any;
// // content: any;
// // parentName: any;

// // @Input() get totalDataLength() {
// //   return this.customModel.totalDataLength;
// // }
// // set totalDataLength(value) {
// //   this.customModel.totalDataLength = value;
// // }

// // @ViewChild('paginationTableItemTemplate')
// // protected paginationTableItemTemplate: TemplateRef<any>;
// // @ViewChild('listOrgItemTemplate')
// // protected listOrgItemTemplate: TemplateRef<any>;


// // constructor(private translate: TranslateService, private organizationMain: OrganizationMainService,
// //             private iframeService: IframeService) { }



//   // private readonly associateHeaderIndex = {
//   //   '0': {
//   //     'translateId': 'CATALOGS.ORGANIZATION.ORGNIZATION_TABLE.name',
//   //   },
//   //   '1': {
//   //     'translateId': 'CATALOGS.ORGANIZATION.ORGNIZATION_TABLE.parent_organization',
//   //   },
//   //   '2': {
//   //     'translateId': 'CATALOGS.ORGANIZATION.ORGNIZATION_TABLE.type',
//   //   }
//   // };
//   // private translationSubscription: Subscription;

//   // associateTableHeader() {
//   //   this.translationSubscription = this.translate.get([this.associateHeaderIndex['0'].translateId,
//   //   this.associateHeaderIndex['1'].translateId,
//   //   this.associateHeaderIndex['2'].translateId
//   //   ]).subscribe((result: object) => {
//   //     this.customModel.header = [
//   //       new TableHeaderItem({ data: result[this.associateHeaderIndex['0'].translateId] }),
//   //       new TableHeaderItem({ data: result[this.associateHeaderIndex['1'].translateId] }),
//   //       new TableHeaderItem({ data: result[this.associateHeaderIndex['2'].translateId] })
//   //     ];
//   //   });
//   // }
 

//   // ngOnInit() {
//   //   //this.associateTableHeader();
//   //       this.customModel.header = [
//   //     new TableHeaderItem({data: 'Name'}),
//   //     new TableHeaderItem({data: 'Parent'}),
//   //     new TableHeaderItem({data: 'Organization Type'})
//   //   ];
//     //this.customModel.data = [[]];
  
//     // this.customModel.pageLength = 10;
//     // this.customModel.totalDataLength = 15;

//     //this.selectPage(1);

//     // this.stoteListServiceCall();


// //     const abc = this.listItems;
// // for (let org of abc) {
// // this.customModel.data = [
// //   // [new TableItem({data: org['content']}), 
// //   // new TableItem({data: org['parentName']}), 
// //   // new TableItem({data: org['orgtype']})],      
// //   // [new TableItem({data: 'hi'}),
// //   //   new TableItem({data: 'secong'}),
// //   //   new TableItem({data: 'this.orgtype'})
// //   //  ],
// //   [new TableItem({data: org.content}),
// //     new TableItem({data: org.parentName}),
// //     new TableItem({data: org.orgtype})
// //    ]
// // ];
// //   }
// //   }
  
// //   stoteListServiceCall() {
// //     this.organizationMain.storeListApi().then(results => {
// //     this.storeListResult = Object.assign([], results);
// //     console.log("data of org api component", this.storeListResult);
// //     this.iterateStoreList();
// //  }).catch(() => {
// //   this.translate
// //       .get('CATALOGS.HEADR.store_list_failed')
// //       .subscribe((msg: string) => {
// //         this.iframeService.postStatusMsg(msg, 'error');
// //       });
// // });
// // }

// // iterateStoreList() {
// //   this.listItems = this.storeListResult.items.map(item => {
// //     return { content: item.name,
// //       orgtype: item.type,
// //       parentName: item.parentOrganizationName
// //     };
// //   });
// //   console.log("3 items",this.listItems);
// //}





//   // customSort(index: number) {
//   //   this.sort(this.customModel, index);
//   // }
//   // sort(Tablemodel, index: number) {
//   //   if (Tablemodel.header[index].sorted) {
//   //     // if already sorted flip sorting direction
//   //     Tablemodel.header[index].ascending = Tablemodel.header[index].descending;
//   //   }
//   //   Tablemodel.sort(index);
//   // }

//   // getPage(page: number) {
//   //   const line = line => [`Asset Store Organization`, `Extended Site Organization`,`Organization A`];

//   //   const fullPage = [];

//   //   for (
//   //     let i = (page - 1) * this.customModel.pageLength;
//   //     i < page * this.customModel.pageLength && i < this.customModel.totalDataLength;
//   //     i++
//   //   ) {
//   //     fullPage.push(line(i + 1));
//   //   }

//   //   return new Promise(resolve => {
//   //     setTimeout(() => resolve(fullPage), 150);
//   //   });
//   // }

//   // selectPage(page) {
    
//   //   this.getPage(page).then((data: Array<Array<any>>) => {
//   //     // set the data and update page
//   //     this.customModel.data = this.prepareData(data);
//   //     this.customModel.currentPage = page;
//   //   });
//   // }

//   // protected prepareData(data: Array<Array<any>>) {
//   //   // create new data from the service data
//   //   let newData = [];
//   //   data.forEach(dataRow => {
//   //     let row = [];
//   //     dataRow.forEach(listItems => {
//   //       row.push(
//   //         new TableItem({
//   //           data: listItems,
//   //           template: typeof listItems === 'string' ? undefined : this.paginationTableItemTemplate,
//   //           // your template can handle all the data types so you don't have to conditionally set it
//   //           // you can also set different templates for different columns based on index
//   //         })
//   //       );
//   //     });
//   //     newData.push(row);
//   //   });
//   //   return newData;
//   // }
// //}

import { Component, OnInit, TemplateRef, ViewChild,ViewEncapsulation } from '@angular/core';
import { TableModel, TableItem, TableHeaderItem  } from 'carbon-components-angular';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
//import { OrganizationsConstants } from '../organizations.constants';
//import { AppConstants } from '../../../app.constants';
//import { HelpLinksConstants } from '../../../components/help-links/help-links.constants';
import { IframeService } from '../../../../services/iframe.service';
import { OrganizationMainService } from '../../organization.main.service';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrganizationListComponent implements OnInit {

  //readonly ORGANIZATIONS_HELPLINKS = HelpLinksConstants.ORGANIZATIONS_HELP_LINK;
  
  breadCrumbLinks = [];
  orgDataSet = [];
  orgResponseData = [];
  orgModel = new TableModel();
  pageLength = 11;
  pageIndex = {};
  selectOrgLink: string = null;
  striped = false;
  
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
      pageContent.push([new TableItem({data: {name: o['organizationName'], link: '/organizations/'+o['organizationId']}, template: this.listOrgItemTemplate}), 
      new TableItem({data: o['parentMemberName']}),
      //   new TableItem({data: o['state']}), new TableItem({data: o['status']}), 
        new TableItem({data: o['orgEntityType']})]);
      count++;
    }
    if (pageContent.length > 0){
      this.orgDataSet.push(pageContent);
    }
  }

  constructor(private iframeService: IframeService,
              private translateService: TranslateService,
              private route: ActivatedRoute,
              private organizationsService: OrganizationMainService) {
   }

  ngOnInit() {
    // this.translateService.get(['breadcrumb.logOut',
    //   'breadcrumb.home',
    //   'breadcrumb.organizations']).subscribe((result: object) =>{
    //     this.breadCrumbLinks = [{
    //       'link': AppConstants.BREADCRUMBS_URL.BREADCRUMB_LOGOUT_URL,
    //       'name': result['breadcrumb.logOut']
    //     }, {
    //       'link': AppConstants.BREADCRUMBS_URL.BREADCRUMB_HOME_URL,
    //       'name': result['breadcrumb.home']
    //     }, {
    //       'link': OrganizationsConstants.BREADCRUMB_LINKS.BREADCRUMB_ORGANIZATIONS_URL,
    //       'name': result['breadcrumb.organizations']
    //     }];
    // });

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
            this.orgModel.addRow([new TableItem({data: {name: org['organizationName'], link: '/organizations'+org['organizationId']}, template: this.listOrgItemTemplate}), 
            new TableItem({data: org['parentMemberName']}), 
            //new TableItem({data: org['state']}), new TableItem({data: org['status']}), 
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
      new TableHeaderItem({data: 'Parent Organization'}),
      // new TableHeaderItem({data: 'Approval State'}),
      // new TableHeaderItem({data: 'Status'}),
      new TableHeaderItem({data: 'Type'})
    ];
    this.orgModel.currentPage = 1;
  }

}
