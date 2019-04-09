// import { Injectable } from '@angular/core';
// import { OrganizationsService } from '../../../rest/services/organizations.service';
// import { IframeService } from '../../../services/iframe.service';
// import { TranslateService } from '@ngx-translate/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class OrganizationMainService {

//   orgDataResponse = [];
//   resultData: any;
//   constructor(private organizationsService: OrganizationsService,
//               private iframeService: IframeService,
//               private translateService: TranslateService) { }


//             //   storeListApi(): Promise<Object> {
//             //     return new Promise((resolve, reject) => {
//             //       this.organizationsService.OrganizationGetManageableOrganizations({
//             //       }).subscribe(response => {
//             //         resolve(response);
//             //         this.resultData = response;
//             //         console.log("data of org api service", this.resultData);
//             //       },  error => {
//             //         this.errorHandler(error);
//             //         reject();
//             //       });
//             //     });
//             //   }

//             //   private errorHandler(error) {
//             //     this.translateService.get('CATALOGS.HEADR.errorMessage', {code: error.status, msg: error.message})
//             //     .subscribe((message: string) => {
//             //         this.iframeService.postStatusMsg(message, 'error');
//             //     });
//             //   }
//             // }
                  
//   convertParentIdtoName(orgData: any[]): void {
//     if(orgData != null  && orgData.length > 0) {
//         var parentNameCache = {}; 
//         for(var org of orgData) {
//             if(org['parentMemberId'] != null && org['parentMemberId'] != "") {
//                 let parentId = org['parentMemberId'];
//                 if (parentNameCache[parentId] != null) {
//                     org['parentMemberName'] = parentNameCache[parentId];
//                 } else {
//                     for (var o of orgData){
//                         if (parentId === o['organizationId']){
//                             org['parentMemberName'] = o['organizationName'];
//                             parentNameCache[parentId] = o['organizationName'];
//                             break;
//                         } 
//                     }
//                 }
//             } else {
//                 org['parentMemberName'] = "";
//             }
//         }
//     }
//   }   

//               getOrganizations(_orgName: string, _parentOrgName: string, _orgId: string): Promise<Object> { 
//                 return new Promise((resolve, reject) => {
//                  this.iframeService.startProgressIndicator();
//                  this.organizationsService.OrganizationGetManageableOrganizations({
//                    organizationName: _orgName,
//                    parentOrganizationName: _parentOrgName
//                    }).subscribe(response =>{
//                      var organizationsData = [];
//                      if (response != null && response.count > 0){
//                          var orgsReturned;
//                          let organizations = Object.assign([], response.items);
//                          for (var org of organizations) {
//                              var orgType: string;
//                              switch (org['organizationType']){
//                                  case "O": {
//                                      orgType = "Organization";
//                                      break;
//                                  }
//                                  case "OU": {
//                                      orgType = "Organization Unit";
//                                      break;
//                                  }
//                                  case "AD": {
//                                      orgType = "Authorization Domain";
//                                      break;
//                                  }
//                                  default: {
//                                      orgType = "Organization Unit";
//                                      break;
//                                  }
//                              }
//                              var orgApprovalState: string;
//                              switch (org['approvalState']){
//                                  case "0": {
//                                      orgApprovalState = "Pending Approval";
//                                      break;
//                                  }
//                                  case "1": {
//                                      orgApprovalState = "Approved";
//                                      break;
//                                  }
//                                  case "2": {
//                                      orgApprovalState = "Rejected";
//                                      break;
//                                  }
//                                  case "3": {
//                                      orgApprovalState = "Pending Email Activation";
//                                      break;
//                                  }
//                                  default: {
//                                      orgApprovalState = "Approval is not applicable (Approved)";
//                                      break;
//                                  }
//                              }
//                             }   
//                          this.convertParentIdtoName(organizationsData);
//                          if(_orgId != '*'){ 
//                          // The current GET API only returns all orgs regardless of orgId value. Need to filter the all the orgs based on orgId
//                              let organizationByOrgId = organizationsData.filter(org => org['id'] === _orgId);
//                              orgsReturned = organizationByOrgId.length;
//                              resolve(organizationByOrgId);
//                          }else if(_orgName !=  null){
//                              let organizationsByOrgName =  organizationsData.filter(org => org['organizationName'] === _orgName);
//                              orgsReturned = organizationsByOrgName.length;
//                              resolve(organizationsByOrgName);
//                          }else if(_parentOrgName != null) {
//                              let organizationsByParentName =  organizationsData.filter(org => org['parentOrganizationName'] === _parentOrgName);
//                              orgsReturned = organizationsByParentName.length
//                              resolve(organizationsByParentName);
//                          }else{
//                              orgsReturned = response.count;
//                              resolve(organizationsData);
//                          }
//                          this.orgDataResponse = organizationsData;
//                      }
//                      this.translateService.get('ORGANIZATIONS.SERVICES.getAllOrgs', {orgs: orgsReturned.toString()})
//                                      .subscribe((message: string) =>{
//                          this.iframeService.postStatusMsg(message, 'success');
//                      });
//                      this.iframeService.stopProgressIndicator();
//                    }, error => {
//                      this.errorHandler(error);
//                      this.iframeService.stopProgressIndicator();
//                      reject();
//                    });
//                 })
//                  }

//   private errorHandler(error) {
//     for(var e of error.error.errors){
//         this.iframeService.postStatusMsg(e.errorKey+' '+e.errorMessage,'error');
//     }
//     this.translateService.get('ORGANIZATIONS.SERVICES.errorMessage', {code: error.status, msg: error.message})
//     .subscribe((message: string) =>{
//         this.iframeService.postStatusMsg(message,'error');
//     });
//   }
// }



import { Injectable } from '@angular/core';
import { OrganizationsService } from '../../rest/services/organizations.service';
import { IframeService } from '../../services/iframe.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class OrganizationMainService {
  orgDataResponse = [];
  constructor(private organizationsService: OrganizationsService,
              private iframeService: IframeService,
              private translateService: TranslateService) { }
    
  convertParentIdtoName(orgData: any[]): void {
    if(orgData != null  && orgData.length > 0) {
        var parentNameCache = {}; 
        for(var org of orgData) {
            if(org['parentMemberId'] != null && org['parentMemberId'] != "") {
                let parentId = org['parentMemberId'];
                if (parentNameCache[parentId] != null) {
                    org['parentMemberName'] = parentNameCache[parentId];
                } else {
                    for (var o of orgData){
                        if (parentId === o['organizationId']){
                            org['parentMemberName'] = o['organizationName'];
                            parentNameCache[parentId] = o['organizationName'];
                            break;
                        } 
                    }
                }
            } else {
                org['parentMemberName'] = "";
            }
        }
    }
  }            

  createOrganization(org: any) : Promise<Object> {
    return new Promise( (resolve, reject) => {
        this.iframeService.startProgressIndicator();
        var orgBody = {
            orgEntityName: org['orgEntityName'],
            distinguishedName: org['orgEntityName'],
            organizationName: org['orgEntityName'],
            orgEntityType: org['orgEntityType'],
            description: org['description'] != undefined? org['description'] : null,
            parentMemberId: org['parentMemberId'],
            email1: org['email'],
            phone1: org['phone'] != undefined? org['phone'] : null,
            publishPhone1: org['phone'] != undefined ? '1': '0',
            billingCodeType: org['billingCodeType'] != undefined? org['billingCodeType'] : 'D',
            country: org['country'],
            city: org['city'],
            address1:  org['address'],
            addressType: org['addressType'] != undefined? org['addressType'] : 'SB',
            state: org['state'],
            zipCode: org['zipCode']
        };
        this.organizationsService.OrganizationsCreateOrganization({
            body: orgBody
        }).subscribe(response => {
        	console.log(response);
            this.translateService.get('ORGANIZATIONS.SERVICES.createOrg', {orgId: null})
                                .subscribe((message: string)=>{
                                this.iframeService.postStatusMsg(message, 'success');
                                });
            this.iframeService.stopProgressIndicator();
            resolve(null);
        }, error => {
            for(var e of error.error.errors){
                this.iframeService.postStatusMsg(e.errorKey+' '+e.errorMessage,'error');
            }
            this.translateService.get('ORGANIZATIONS.SERVICES.errorMessage', {code: error.status, msg: error.message})
                            .subscribe((message: string) =>{
                                this.iframeService.postStatusMsg(message,'error');
                            });
            this.iframeService.stopProgressIndicator();
            reject();
        });
    }) 
  }

  editOrganization(org: any): Promise<Object> {
      return new Promise((resolve, reject) => {
        this.iframeService.startProgressIndicator();
        var orgBody = {
            orgEntityName: org['orgEntityName'],
            organizationName: org['orgEntityName'],
            description: org['description'] != undefined? org['description'] : null,
            email1: org['email'],
            phone1: org['phone'] != undefined? org['phone'] : null,
            country: org['country'],
            city: org['city'],
            address1:  org['address'],
            state: org['state'],
            zipCode: org['zipCode']
        };
        this.organizationsService.OrganizationsUpdateOrganization({
            id: org['organizationId'],
            body: orgBody
        }).subscribe(response => {
            this.translateService.get('ORGANIZATIONS.SERVICES.editOrg', {orgId: org['organizationId']})
                            .subscribe((message: string) =>{
                                this.iframeService.postStatusMsg(message, 'success');
                            });
            this.iframeService.stopProgressIndicator();
            resolve(org['organizationId']);
        }, error => {
            this.errorHandler(error);
            this.iframeService.stopProgressIndicator();
            reject();
        });
      });
  }

  private errorHandler(error) {
    for(var e of error.error.errors){
        this.iframeService.postStatusMsg(e.errorKey+' '+e.errorMessage,'error');
    }
    this.translateService.get('ORGANIZATIONS.SERVICES.errorMessage', {code: error.status, msg: error.message})
    .subscribe((message: string) =>{
        this.iframeService.postStatusMsg(message,'error');
    });
  }

  getOrganizationById(_orgId: number): Promise<Object> {
      return new Promise((resolve, reject) =>{
        this.iframeService.startProgressIndicator();
        this.organizationsService.OrganizationsFindByOrganizationId(_orgId).subscribe(response =>{
            var orgResponse = {
                orgEntityName: response['organizationName'],
                description: response['description'],
                email: response['contactInfo']['email1'],
                phone: response['contactInfo']['phone1'],
                country: response['contactInfo']['country'],
                city: response['contactInfo']['city'],
                address:  response['contactInfo']['address1'],
                state: response['contactInfo']['state'],
                zipCode: response['contactInfo']['zipCode'],
                organizationId: response['organizationId']
            };
            this.translateService.get('ORGANIZATIONS.SERVICES.getOrgDetails', {orgId: response['organizationId']})
                                .subscribe((message: string)=>{
                                this.iframeService.postStatusMsg(message, 'success');
            });
            this.iframeService.stopProgressIndicator();
            resolve(orgResponse);
        }, error => {
            this.errorHandler(error);
            this.iframeService.stopProgressIndicator();
            reject();
        });  
      });
  }

  getOrganizations(_orgName: string, _parentOrgName: string, _orgId: string): Promise<Object> { 
   return new Promise((resolve, reject) => {
    this.iframeService.startProgressIndicator();
    this.organizationsService.OrganizationGetManageableOrganizations({
    	organizationName: _orgName,
    	parentOrganizationName: _parentOrgName
      }).subscribe(response =>{
        var organizationsData = [];
        if (response != null && response.count > 0){
            var orgsReturned;
            let organizations = Object.assign([], response.items);
            for (var org of organizations) {
                var orgType: string;
                switch (org['organizationType']){
                    case "O": {
                        orgType = "Organization";
                        break;
                    }
                    case "OU": {
                        orgType = "Organization Unit";
                        break;
                    }
                    case "AD": {
                        orgType = "Authorization Domain";
                        break;
                    }
                    default: {
                        orgType = "Organization Unit";
                        break;
                    }
                }
                var orgApprovalState: string;
                switch (org['approvalState']){
                    case "0": {
                        orgApprovalState = "Pending Approval";
                        break;
                    }
                    case "1": {
                        orgApprovalState = "Approved";
                        break;
                    }
                    case "2": {
                        orgApprovalState = "Rejected";
                        break;
                    }
                    case "3": {
                        orgApprovalState = "Pending Email Activation";
                        break;
                    }
                    default: {
                        orgApprovalState = "Approval is not applicable (Approved)";
                        break;
                    }
                }
                
                var orgResponse = {
                    businessCategory: org['businessCategory'],
                    description: org['description'],
                    distinguishedName: org['distinguishedName'],
                    legalId: org['legalId'],
                    orgEntityType: orgType ,
                    orgEntityTypeCode: org['organizationType'],
                    organizationId: org['id'],
                    organizationName: org['name'],
                    parentMemberId: org['parentOrganizationId'],
                    parentMemberName: org['parentOrganizationName'],
                    state: orgApprovalState,
                    status: org['status'] === -1? "Locked": "Unlocked",
                    type: org['type']
                }
                organizationsData.push(orgResponse);
            }
            
            this.convertParentIdtoName(organizationsData);
            if(_orgId != '*'){ 
            // The current GET API only returns all orgs regardless of orgId value. Need to filter the all the orgs based on orgId
                let organizationByOrgId = organizationsData.filter(org => org['id'] === _orgId);
                orgsReturned = organizationByOrgId.length;
                resolve(organizationByOrgId);
            }else if(_orgName !=  null){
                let organizationsByOrgName =  organizationsData.filter(org => org['organizationName'] === _orgName);
                orgsReturned = organizationsByOrgName.length;
                resolve(organizationsByOrgName);
            }else if(_parentOrgName != null) {
                let organizationsByParentName =  organizationsData.filter(org => org['parentOrganizationName'] === _parentOrgName);
                orgsReturned = organizationsByParentName.length
                resolve(organizationsByParentName);
            }else{
                orgsReturned = response.count;
                resolve(organizationsData);
            }
            this.orgDataResponse = organizationsData;
        }
        this.translateService.get('ORGANIZATIONS.SERVICES.getAllOrgs', {orgs: orgsReturned.toString()})
                        .subscribe((message: string) =>{
            this.iframeService.postStatusMsg(message, 'success');
        });
        this.iframeService.stopProgressIndicator();
      }, error => {
        this.errorHandler(error);
        this.iframeService.stopProgressIndicator();
        reject();
      });
   })
    }
}