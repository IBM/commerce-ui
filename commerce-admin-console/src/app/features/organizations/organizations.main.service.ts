import { Injectable } from '@angular/core';
import { OrganizationService } from '../../rest/services/organization.service';
import { IframeService } from '../../services/iframe.service';
import { TranslateService } from '@ngx-translate/core';
import { ComIbmCommerceRestMemberHandlerOrganizationHandler_OrgEntityUpdateRequest } from '../../rest/models';
import { ComIbmCommerceRestMemberHandlerOrganizationHandler_OrgEntityAddRequest } from '../../rest/models';

@Injectable()
export class OrganizationsMainService {
  orgDataResponse = [];
  constructor(private organizationService: OrganizationService,
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
        this.organizationService.OrganizationRegisterOrganization({
            storeId: '0',
            body: orgBody as ComIbmCommerceRestMemberHandlerOrganizationHandler_OrgEntityAddRequest
        }).subscribe(response => {
            this.translateService.get('ORGANIZATIONS.SERVICES.createOrg', {orgId: response.orgEntityId})
                                .subscribe((message: string)=>{
                                this.iframeService.postStatusMsg(message, 'success');
                                });
            this.iframeService.stopProgressIndicator();
            resolve(response.orgEntityId);
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
        this.organizationService.OrganizationUpdateOrganization({
            storeId: '0',
            organizationId: org['organizationId'],
            body: orgBody as ComIbmCommerceRestMemberHandlerOrganizationHandler_OrgEntityUpdateRequest
        }).subscribe(response => {
            this.translateService.get('ORGANIZATIONS.SERVICES.editOrg', {orgId: response.orgEntityId})
                            .subscribe((message: string) =>{
                                this.iframeService.postStatusMsg(message, 'success');
                            });
            this.iframeService.stopProgressIndicator();
            resolve(response.orgEntityId);
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

  getOrganizationById(_orgId: string): Promise<Object> {
      return new Promise((resolve, reject) =>{
        this.iframeService.startProgressIndicator();
        this.organizationService.OrganizationFindByOrganizationIdWParentAssignedRolesDetailsProfileName({
            storeId: '0',
            organizationId: _orgId
        }).subscribe(response =>{
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
    this.organizationService.OrganizationFindByQuery({
        storeId: '0',
        q: 'organizationsICanAdmin',
        orgId: _orgId 
      }).subscribe(response =>{
        var organizationsData = [];
        if (response != null && response.recordSetTotal > 0){
            var orgsReturned;
            let organizationDataBeans = Object.assign([], response.organizationDataBeans);
            for (var org of organizationDataBeans) {
                var orgType: string;
                switch (org['orgEntityType']){
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
                switch (org['state']){
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
                    displayName: org['displayName'],
                    distinguishedName: org['distinguishedName'],
                    legalId: org['legalId'],
                    memberId: org['memberId'],
                    orgEntityType: orgType ,
                    orgEntityTypeCode: org['orgEntityType'],
                    organizationId: org['organizationId'],
                    organizationName: org['organizationName'],
                    parentMemberId: org['parentMemberId'],
                    state: orgApprovalState,
                    status: org['status'] === -1? "Locked": "Unlocked",
                    type: org['type']
                }
                organizationsData.push(orgResponse);
            }
            
            this.convertParentIdtoName(organizationsData);
            if(_orgId != '*'){ 
            // The current GET API only returns all orgs regardless of orgId value. Need to filter the all the orgs based on orgId
                let organizationByOrgId = organizationsData.filter(org => org['organizationId'] === _orgId);
                orgsReturned = organizationByOrgId.length;
                resolve(organizationByOrgId);
            }else if(_orgName !=  null){
                let organizationsByOrgName =  organizationsData.filter(org => org['organizationName'] === _orgName);
                orgsReturned = organizationsByOrgName.length;
                resolve(organizationsByOrgName);
            }else if(_parentOrgName != null) {
                let organizationsByParentName =  organizationsData.filter(org => org['parentMemberName'] === _parentOrgName);
                orgsReturned = organizationsByParentName.length
                resolve(organizationsByParentName);
            }else{
                orgsReturned = response.recordSetTotal;
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