/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ComIbmCommerceSecurityCommandsResetPasswordAdministratorCmd } from '../models/com-ibm-commerce-security-commands-reset-password-administrator-cmd';
import { ComIbmCommerceRestMemberHandlerPersonHandlerResetPasswordAdministratorRequest } from '../models/com-ibm-commerce-rest-member-handler-person-handler-reset-password-administrator-request';
import { ComIbmCommerceRestMemberHandlerPersonHandlerDeleteContextAttribute } from '../models/com-ibm-commerce-rest-member-handler-person-handler-delete-context-attribute';
import { ComIbmCommerceRestMemberHandlerPersonHandlerUserRegistrationAdminAddResponse } from '../models/com-ibm-commerce-rest-member-handler-person-handler-user-registration-admin-add-response';
import { ComIbmCommerceRestMemberHandlerPersonHandlerUserRegistrationAdminAddRequest } from '../models/com-ibm-commerce-rest-member-handler-person-handler-user-registration-admin-add-request';
import { ComIbmCommerceUserBeansUserSearchDataBean_IBM_User_List_Details } from '../models/com-ibm-commerce-user-beans-user-search-data-bean-_ibm_user-_list-_details';
import { ComIbmCommerceRestMemberHandlerPersonHandlerUserIdentifier } from '../models/com-ibm-commerce-rest-member-handler-person-handler-user-identifier';
import { ComIbmCommerceRestMemberHandlerPersonHandlerUserRegistrationAdminUpdateRequest } from '../models/com-ibm-commerce-rest-member-handler-person-handler-user-registration-admin-update-request';
import { Empty } from '../models/empty';
import { ComIbmCommerceUserBeansMemberRoleAssignDataBean_IBM_Roles_Of_User_In_Orgs_I_Can_Admin } from '../models/com-ibm-commerce-user-beans-member-role-assign-data-bean-_ibm_roles-_of-_user-_in-_orgs-_i_can-_admin';
import { ComIbmCommerceRestMemberHandlerPersonHandlerUpdateMemberUserResponse } from '../models/com-ibm-commerce-rest-member-handler-person-handler-update-member-user-response';
import { ComIbmCommerceRestMemberHandlerPersonHandlerUpdateMemberUser } from '../models/com-ibm-commerce-rest-member-handler-person-handler-update-member-user';
import { PersonPerson } from '../models/person-person';
import { ComIbmCommerceRestMemberHandlerPersonHandlerUserRegistrationUpdateRequest } from '../models/com-ibm-commerce-rest-member-handler-person-handler-user-registration-update-request';
import { ComIbmCommercePriceCommandsSetCurrencyPreferenceCmd } from '../models/com-ibm-commerce-price-commands-set-currency-preference-cmd';
import { ComIbmCommerceEmarketingBeansEmailUserReceiveDataBean_IBM_optOut_all } from '../models/com-ibm-commerce-emarketing-beans-email-user-receive-data-bean-_ibm_opt-out-_all';

/**
 * This class provides RESTful services to get person details, register a member, and update a member.  This class also provides RESTful services used by an administrator to find person information, register new and update existing user information.
 */
@Injectable()
class PersonService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Allows a CSR or CSS to reset the password for a registered user. It also allows resetting password when the CSR / CSS has established a session to act on behalf of a user.
   * @param params The `PersonService.PersonResetPasswordByAdminParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `mode`: The mode in which resetPassword is run. ResetPassword can be executed in an administrator session or in an on-behalf session for a user. Default value is 'resetPasswordAdmin' if no valid value was supplied.
   *
   * - `body`: Request body.
   *
   * @return The requested completed successfully.
   */
  PersonResetPasswordByAdminResponse(params: PersonService.PersonResetPasswordByAdminParams): Observable<StrictHttpResponse<ComIbmCommerceSecurityCommandsResetPasswordAdministratorCmd>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.mode != null) __params = __params.set('mode', params.mode.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/store/${params.storeId}/person/updateMemberPassword`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceSecurityCommandsResetPasswordAdministratorCmd>;
      })
    );
  }

  /**
   * Allows a CSR or CSS to reset the password for a registered user. It also allows resetting password when the CSR / CSS has established a session to act on behalf of a user.
   * @param params The `PersonService.PersonResetPasswordByAdminParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `mode`: The mode in which resetPassword is run. ResetPassword can be executed in an administrator session or in an on-behalf session for a user. Default value is 'resetPasswordAdmin' if no valid value was supplied.
   *
   * - `body`: Request body.
   *
   * @return The requested completed successfully.
   */
  PersonResetPasswordByAdmin(params: PersonService.PersonResetPasswordByAdminParams): Observable<ComIbmCommerceSecurityCommandsResetPasswordAdministratorCmd> {
    return this.PersonResetPasswordByAdminResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Deletes one or more values of a context attribute for a registered user by removing associated entry in the MBRATTRVAL table.
   * @param params The `PersonService.PersonDeleteContextAttributeForPersonParams` containing the following parameters:
   *
   * - `value`: Value of the context attribute you want to delete as listed in MBRATTRVAL.
   *
   * - `storeId`: The store identifier.
   *
   * - `attributeName`: Name of the context attribute as listed in MBRATTR.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  PersonDeleteContextAttributeForPersonResponse(params: PersonService.PersonDeleteContextAttributeForPersonParams): Observable<StrictHttpResponse<ComIbmCommerceRestMemberHandlerPersonHandlerDeleteContextAttribute>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/store/${params.storeId}/person/@self/contextattributes/${params.attributeName}/${params.value}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceRestMemberHandlerPersonHandlerDeleteContextAttribute>;
      })
    );
  }

  /**
   * Deletes one or more values of a context attribute for a registered user by removing associated entry in the MBRATTRVAL table.
   * @param params The `PersonService.PersonDeleteContextAttributeForPersonParams` containing the following parameters:
   *
   * - `value`: Value of the context attribute you want to delete as listed in MBRATTRVAL.
   *
   * - `storeId`: The store identifier.
   *
   * - `attributeName`: Name of the context attribute as listed in MBRATTR.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  PersonDeleteContextAttributeForPerson(params: PersonService.PersonDeleteContextAttributeForPersonParams): Observable<ComIbmCommerceRestMemberHandlerPersonHandlerDeleteContextAttribute> {
    return this.PersonDeleteContextAttributeForPersonResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Registers a user. When the mode is set to admin, the registration is done by an administrator.
   * @param params The `PersonService.PersonRegisterPersonOnUserRegistrationAdminAddParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `mode`: The mode of the rest service.
   *
   * - `body`: Request body.
   *
   * @return The requested completed successfully.
   */
  PersonRegisterPersonOnUserRegistrationAdminAddResponse(params: PersonService.PersonRegisterPersonOnUserRegistrationAdminAddParams): Observable<StrictHttpResponse<ComIbmCommerceRestMemberHandlerPersonHandlerUserRegistrationAdminAddResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    if (params.mode != null) __params = __params.set('mode', params.mode.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/store/${params.storeId}/person`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceRestMemberHandlerPersonHandlerUserRegistrationAdminAddResponse>;
      })
    );
  }

  /**
   * Registers a user. When the mode is set to admin, the registration is done by an administrator.
   * @param params The `PersonService.PersonRegisterPersonOnUserRegistrationAdminAddParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `mode`: The mode of the rest service.
   *
   * - `body`: Request body.
   *
   * @return The requested completed successfully.
   */
  PersonRegisterPersonOnUserRegistrationAdminAdd(params: PersonService.PersonRegisterPersonOnUserRegistrationAdminAddParams): Observable<ComIbmCommerceRestMemberHandlerPersonHandlerUserRegistrationAdminAddResponse> {
    return this.PersonRegisterPersonOnUserRegistrationAdminAddResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Allows administrators to find users based on a query name. See each query for details on input and output.
   * @param params The `PersonService.PersonFindByQueryParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `q`: The query name.
   *
   * @return The requested completed successfully.
   */
  PersonFindByQueryResponse(params: PersonService.PersonFindByQueryParams): Observable<StrictHttpResponse<ComIbmCommerceUserBeansUserSearchDataBean_IBM_User_List_Details>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.startIndex != null) __params = __params.set('startIndex', params.startIndex);
    if (params.maxResults != null) __params = __params.set('maxResults', params.maxResults);

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/person`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceUserBeansUserSearchDataBean_IBM_User_List_Details>;
      })
    );
  }

  /**
   * Allows administrators to find users based on a query name. See each query for details on input and output.
   * @param params The `PersonService.PersonFindByQueryParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `q`: The query name.
   *
   * @return The requested completed successfully.
   */
  PersonFindByQuery(params: PersonService.PersonFindByQueryParams): Observable<ComIbmCommerceUserBeansUserSearchDataBean_IBM_User_List_Details> {
    return this.PersonFindByQueryResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Allows administrators to update account data for a registered user.
   * @param params The `PersonService.PersonUpdatePersonByAdminParams` containing the following parameters:
   *
   * - `userId`: The user identifier.
   *
   * - `storeId`: The store identifier.
   *
   * - `body`: Request body.
   *
   * @return The requested completed successfully.
   */
  PersonUpdatePersonByAdminResponse(params: PersonService.PersonUpdatePersonByAdminParams): Observable<StrictHttpResponse<ComIbmCommerceRestMemberHandlerPersonHandlerUserIdentifier>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/store/${params.storeId}/person/${params.userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceRestMemberHandlerPersonHandlerUserIdentifier>;
      })
    );
  }

  /**
   * Allows administrators to update account data for a registered user.
   * @param params The `PersonService.PersonUpdatePersonByAdminParams` containing the following parameters:
   *
   * - `userId`: The user identifier.
   *
   * - `storeId`: The store identifier.
   *
   * - `body`: Request body.
   *
   * @return The requested completed successfully.
   */
  PersonUpdatePersonByAdmin(params: PersonService.PersonUpdatePersonByAdminParams): Observable<ComIbmCommerceRestMemberHandlerPersonHandlerUserIdentifier> {
    return this.PersonUpdatePersonByAdminResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Performs an action on a person by an administrator. See each action for details on input and output.
   * @param params The `PersonService.PersonPerformActionByAdminParams` containing the following parameters:
   *
   * - `userId`: The user identifier.
   *
   * - `storeId`: The store identifier.
   *
   * - `action`: The action of the rest service.
   *
   * @return The requested completed successfully.
   */
  PersonPerformActionByAdminResponse(params: PersonService.PersonPerformActionByAdminParams): Observable<StrictHttpResponse<Empty>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.action != null) __params = __params.set('action', params.action.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/store/${params.storeId}/person/${params.userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<Empty>;
      })
    );
  }

  /**
   * Performs an action on a person by an administrator. See each action for details on input and output.
   * @param params The `PersonService.PersonPerformActionByAdminParams` containing the following parameters:
   *
   * - `userId`: The user identifier.
   *
   * - `storeId`: The store identifier.
   *
   * - `action`: The action of the rest service.
   *
   * @return The requested completed successfully.
   */
  PersonPerformActionByAdmin(params: PersonService.PersonPerformActionByAdminParams): Observable<Empty> {
    return this.PersonPerformActionByAdminResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Allows administrators to find user information by user identifier.
   * @param params The `PersonService.PersonFindByUserIdWRolesOfUserInOrgsICanAdminProfileNameParams` containing the following parameters:
   *
   * - `userId`: The user identifier.
   *
   * - `storeId`: The store identifier.
   *
   * - `profileName`: Profile name. Profiles determine the subset of data returned by a query. The default profile name is IBM_User_Display_Details.
   *
   * @return The requested completed successfully.
   */
  PersonFindByUserIdWRolesOfUserInOrgsICanAdminProfileNameResponse(params: PersonService.PersonFindByUserIdWRolesOfUserInOrgsICanAdminProfileNameParams): Observable<StrictHttpResponse<ComIbmCommerceUserBeansMemberRoleAssignDataBean_IBM_Roles_Of_User_In_Orgs_I_Can_Admin>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.profileName != null) __params = __params.set('profileName', params.profileName.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/person/${params.userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceUserBeansMemberRoleAssignDataBean_IBM_Roles_Of_User_In_Orgs_I_Can_Admin>;
      })
    );
  }

  /**
   * Allows administrators to find user information by user identifier.
   * @param params The `PersonService.PersonFindByUserIdWRolesOfUserInOrgsICanAdminProfileNameParams` containing the following parameters:
   *
   * - `userId`: The user identifier.
   *
   * - `storeId`: The store identifier.
   *
   * - `profileName`: Profile name. Profiles determine the subset of data returned by a query. The default profile name is IBM_User_Display_Details.
   *
   * @return The requested completed successfully.
   */
  PersonFindByUserIdWRolesOfUserInOrgsICanAdminProfileName(params: PersonService.PersonFindByUserIdWRolesOfUserInOrgsICanAdminProfileNameParams): Observable<ComIbmCommerceUserBeansMemberRoleAssignDataBean_IBM_Roles_Of_User_In_Orgs_I_Can_Admin> {
    return this.PersonFindByUserIdWRolesOfUserInOrgsICanAdminProfileNameResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Allows administrators to delete user
   * @param params The `PersonService.PersonDeletePersonByAdminParams` containing the following parameters:
   *
   * - `userId`: The user identifier.
   *
   * - `storeId`: The store identifier.
   *
   * @return The requested completed successfully.
   */
  PersonDeletePersonByAdminResponse(params: PersonService.PersonDeletePersonByAdminParams): Observable<StrictHttpResponse<ComIbmCommerceRestMemberHandlerPersonHandlerUserIdentifier>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/store/${params.storeId}/person/${params.userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceRestMemberHandlerPersonHandlerUserIdentifier>;
      })
    );
  }

  /**
   * Allows administrators to delete user
   * @param params The `PersonService.PersonDeletePersonByAdminParams` containing the following parameters:
   *
   * - `userId`: The user identifier.
   *
   * - `storeId`: The store identifier.
   *
   * @return The requested completed successfully.
   */
  PersonDeletePersonByAdmin(params: PersonService.PersonDeletePersonByAdminParams): Observable<ComIbmCommerceRestMemberHandlerPersonHandlerUserIdentifier> {
    return this.PersonDeletePersonByAdminResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Updates the user to include, exclude, or unassign the user from a member group.
   * @param params The `PersonService.PersonUpdateMemberUserParams` containing the following parameters:
   *
   * - `userId`: The user identifier.
   *
   * - `storeId`: The store identifier.
   *
   * - `body`: Request body.
   *
   * @return The requested completed successfully.
   */
  PersonUpdateMemberUserResponse(params: PersonService.PersonUpdateMemberUserParams): Observable<StrictHttpResponse<ComIbmCommerceRestMemberHandlerPersonHandlerUpdateMemberUserResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/store/${params.storeId}/person/updateMemberUser/${params.userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceRestMemberHandlerPersonHandlerUpdateMemberUserResponse>;
      })
    );
  }

  /**
   * Updates the user to include, exclude, or unassign the user from a member group.
   * @param params The `PersonService.PersonUpdateMemberUserParams` containing the following parameters:
   *
   * - `userId`: The user identifier.
   *
   * - `storeId`: The store identifier.
   *
   * - `body`: Request body.
   *
   * @return The requested completed successfully.
   */
  PersonUpdateMemberUser(params: PersonService.PersonUpdateMemberUserParams): Observable<ComIbmCommerceRestMemberHandlerPersonHandlerUpdateMemberUserResponse> {
    return this.PersonUpdateMemberUserResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Updates account data for a registered user. This also supports resetting password for unauthenticated and authenticated users. When action is set to 'updateUserRegistration', user account data is updated using UserRegistrationUpdateCmd
   * @param params The `PersonService.PersonUpdatePersonOnUserRegistrationUpdateParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `body`: Request body.
   *
   * - `action`: The action of the rest service.
   *
   * @return The requested completed successfully.
   */
  PersonUpdatePersonOnUserRegistrationUpdateResponse(params: PersonService.PersonUpdatePersonOnUserRegistrationUpdateParams): Observable<StrictHttpResponse<PersonPerson>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    __body = params.body;
    if (params.action != null) __params = __params.set('action', params.action.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/store/${params.storeId}/person/@self`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<PersonPerson>;
      })
    );
  }

  /**
   * Updates account data for a registered user. This also supports resetting password for unauthenticated and authenticated users. When action is set to 'updateUserRegistration', user account data is updated using UserRegistrationUpdateCmd
   * @param params The `PersonService.PersonUpdatePersonOnUserRegistrationUpdateParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `body`: Request body.
   *
   * - `action`: The action of the rest service.
   *
   * @return The requested completed successfully.
   */
  PersonUpdatePersonOnUserRegistrationUpdate(params: PersonService.PersonUpdatePersonOnUserRegistrationUpdateParams): Observable<PersonPerson> {
    return this.PersonUpdatePersonOnUserRegistrationUpdateResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Gets the account data for a registered user.
   * @param params The `PersonService.PersonFindPersonBySelfParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  PersonFindPersonBySelfResponse(params: PersonService.PersonFindPersonBySelfParams): Observable<StrictHttpResponse<PersonPerson>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/person/@self`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<PersonPerson>;
      })
    );
  }

  /**
   * Gets the account data for a registered user.
   * @param params The `PersonService.PersonFindPersonBySelfParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  PersonFindPersonBySelf(params: PersonService.PersonFindPersonBySelfParams): Observable<PersonPerson> {
    return this.PersonFindPersonBySelfResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Changes language and currency preference in profile and in context.
   * @param params The `PersonService.PersonChangeLanguageCurrencyParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  PersonChangeLanguageCurrencyResponse(params: PersonService.PersonChangeLanguageCurrencyParams): Observable<StrictHttpResponse<ComIbmCommercePriceCommandsSetCurrencyPreferenceCmd>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/store/${params.storeId}/person/@self/languageCurrency`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommercePriceCommandsSetCurrencyPreferenceCmd>;
      })
    );
  }

  /**
   * Changes language and currency preference in profile and in context.
   * @param params The `PersonService.PersonChangeLanguageCurrencyParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  PersonChangeLanguageCurrency(params: PersonService.PersonChangeLanguageCurrencyParams): Observable<ComIbmCommercePriceCommandsSetCurrencyPreferenceCmd> {
    return this.PersonChangeLanguageCurrencyResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Finds personal opt-out. When the store level personal opt-out does not exist, the site level personal opt-out is returned.
   * @param params The `PersonService.PersonFindOptOutBySelfWOptOutAllProfileNameParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `profileName`: Profile name. Profiles determine the subset of data returned by a query.  Default profile name = IBM_optOut_email.
   *
   * @return The requested completed successfully.
   */
  PersonFindOptOutBySelfWOptOutAllProfileNameResponse(params: PersonService.PersonFindOptOutBySelfWOptOutAllProfileNameParams): Observable<StrictHttpResponse<ComIbmCommerceEmarketingBeansEmailUserReceiveDataBean_IBM_optOut_all>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.profileName != null) __params = __params.set('profileName', params.profileName.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/person/@self/optOut`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceEmarketingBeansEmailUserReceiveDataBean_IBM_optOut_all>;
      })
    );
  }

  /**
   * Finds personal opt-out. When the store level personal opt-out does not exist, the site level personal opt-out is returned.
   * @param params The `PersonService.PersonFindOptOutBySelfWOptOutAllProfileNameParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `profileName`: Profile name. Profiles determine the subset of data returned by a query.  Default profile name = IBM_optOut_email.
   *
   * @return The requested completed successfully.
   */
  PersonFindOptOutBySelfWOptOutAllProfileName(params: PersonService.PersonFindOptOutBySelfWOptOutAllProfileNameParams): Observable<ComIbmCommerceEmarketingBeansEmailUserReceiveDataBean_IBM_optOut_all> {
    return this.PersonFindOptOutBySelfWOptOutAllProfileNameResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * This allows an administrator to find users by their logonId, firstname, lastname and/or email.
   * @param params The `PersonService.PersonFindByUserSearchParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `startIndex`: The starting index of the result.
   *
   * - `registerType`: The user registration type: G (Guest users), R (Registered users), RG (Registered and Guest users), or A (Administrators).
   *
   * - `profileName`: Profile name. Profiles determine the subset of data to be returned by a query. Default profile name = IBM_User_List_Summary
   *
   * - `orderByTableName`: The order by table name.
   *
   * - `orderByFieldName`: The order by field name.
   *
   * - `maxResults`: Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above.
   *
   * - `logonId`: The user's logonId.
   *
   * - `lastName`: The user's last name.
   *
   * - `firstName`: The user's first name.
   *
   * - `email`: The user's email address.
   *
   * @return The requested completed successfully.
   */
  PersonFindByUserSearchResponse(params: PersonService.PersonFindByUserSearchParams): Observable<StrictHttpResponse<ComIbmCommerceUserBeansUserSearchDataBean_IBM_User_List_Details>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.startIndex != null) __params = __params.set('startIndex', params.startIndex.toString());
    if (params.registerType != null) __params = __params.set('registerType', params.registerType.toString());
    if (params.profileName != null) __params = __params.set('profileName', params.profileName.toString());
    if (params.orderByTableName != null) __params = __params.set('orderByTableName', params.orderByTableName.toString());
    if (params.orderByFieldName != null) __params = __params.set('orderByFieldName', params.orderByFieldName.toString());
    if (params.maxResults != null) __params = __params.set('maxResults', params.maxResults.toString());
    if (params.logonId != null) __params = __params.set('logonId', params.logonId.toString());
    if (params.lastName != null) __params = __params.set('lastName', params.lastName.toString());
    if (params.firstName != null) __params = __params.set('firstName', params.firstName.toString());
    if (params.email != null) __params = __params.set('email', params.email.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/person/search`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceUserBeansUserSearchDataBean_IBM_User_List_Details>;
      })
    );
  }

  /**
   * This allows an administrator to find users by their logonId, firstname, lastname and/or email.
   * @param params The `PersonService.PersonFindByUserSearchParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `startIndex`: The starting index of the result.
   *
   * - `registerType`: The user registration type: G (Guest users), R (Registered users), RG (Registered and Guest users), or A (Administrators).
   *
   * - `profileName`: Profile name. Profiles determine the subset of data to be returned by a query. Default profile name = IBM_User_List_Summary
   *
   * - `orderByTableName`: The order by table name.
   *
   * - `orderByFieldName`: The order by field name.
   *
   * - `maxResults`: Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above.
   *
   * - `logonId`: The user's logonId.
   *
   * - `lastName`: The user's last name.
   *
   * - `firstName`: The user's first name.
   *
   * - `email`: The user's email address.
   *
   * @return The requested completed successfully.
   */
  PersonFindByUserSearch(params: PersonService.PersonFindByUserSearchParams): Observable<ComIbmCommerceUserBeansUserSearchDataBean_IBM_User_List_Details> {
    return this.PersonFindByUserSearchResponse(params).pipe(
      __map(_r => _r.body)
    );
  }
}

module PersonService {

  /**
   * Parameters for PersonResetPasswordByAdmin
   */
  export interface PersonResetPasswordByAdminParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The mode in which resetPassword is run. ResetPassword can be executed in an administrator session or in an on-behalf session for a user. Default value is 'resetPasswordAdmin' if no valid value was supplied.
     */
    mode?: 'resetPasswordAdmin' | 'resetPasswordOnBehalf';

    /**
     * Request body.
     */
    body?: ComIbmCommerceRestMemberHandlerPersonHandlerResetPasswordAdministratorRequest;
  }

  /**
   * Parameters for PersonDeleteContextAttributeForPerson
   */
  export interface PersonDeleteContextAttributeForPersonParams {

    /**
     * Value of the context attribute you want to delete as listed in MBRATTRVAL.
     */
    value: string;

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * Name of the context attribute as listed in MBRATTR.
     */
    attributeName: string;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';
  }

  /**
   * Parameters for PersonRegisterPersonOnUserRegistrationAdminAdd
   */
  export interface PersonRegisterPersonOnUserRegistrationAdminAddParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';

    /**
     * The mode of the rest service.
     */
    mode?: 'self' | 'admin';

    /**
     * Request body.
     */
    body?: ComIbmCommerceRestMemberHandlerPersonHandlerUserRegistrationAdminAddRequest;
  }

  /**
   * Parameters for PersonFindByQuery
   */
  export interface PersonFindByQueryParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The query name.
     */
    q: 'usersICanAdmin';

    /**
     * The page size.
     */
    startIndex: string;

    /**
     * The record set offset.
     */
    maxResults: string;
  }

  /**
   * Parameters for PersonUpdatePersonByAdmin
   */
  export interface PersonUpdatePersonByAdminParams {

    /**
     * The user identifier.
     */
    userId: string;

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * Request body.
     */
    body?: ComIbmCommerceRestMemberHandlerPersonHandlerUserRegistrationAdminUpdateRequest;
  }

  /**
   * Parameters for PersonPerformActionByAdmin
   */
  export interface PersonPerformActionByAdminParams {

    /**
     * The user identifier.
     */
    userId: string;

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The action of the rest service.
     */
    action: 'assignRole' | 'unassignRole';
  }

  /**
   * Parameters for PersonFindByUserIdWRolesOfUserInOrgsICanAdminProfileName
   */
  export interface PersonFindByUserIdWRolesOfUserInOrgsICanAdminProfileNameParams {

    /**
     * The user identifier.
     */
    userId: string;

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * Profile name. Profiles determine the subset of data returned by a query. The default profile name is IBM_User_Display_Details.
     */
    profileName?: 'IBM_User_Display_Details' | 'IBM_User_Registration_Details' | 'IBM_User_Top_Level_Org_Administered' | 'IBM_Assigned_Roles_Details' | 'IBM_Roles_Of_User_All' | 'IBM_Roles_Of_User_In_Orgs_I_Can_Admin' | 'IBM_User_List_Details';
  }

  /**
   * Parameters for PersonDeletePersonByAdmin
   */
  export interface PersonDeletePersonByAdminParams {

    /**
     * The user identifier.
     */
    userId: string;

    /**
     * The store identifier.
     */
    storeId: string;
  }

  /**
   * Parameters for PersonUpdateMemberUser
   */
  export interface PersonUpdateMemberUserParams {

    /**
     * The user identifier.
     */
    userId: string;

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * Request body.
     */
    body?: ComIbmCommerceRestMemberHandlerPersonHandlerUpdateMemberUser;
  }

  /**
   * Parameters for PersonUpdatePersonOnUserRegistrationUpdate
   */
  export interface PersonUpdatePersonOnUserRegistrationUpdateParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';

    /**
     * Request body.
     */
    body?: ComIbmCommerceRestMemberHandlerPersonHandlerUserRegistrationUpdateRequest;

    /**
     * The action of the rest service.
     */
    action?: 'updateUserRegistration';
  }

  /**
   * Parameters for PersonFindPersonBySelf
   */
  export interface PersonFindPersonBySelfParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';
  }

  /**
   * Parameters for PersonChangeLanguageCurrency
   */
  export interface PersonChangeLanguageCurrencyParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';
  }

  /**
   * Parameters for PersonFindOptOutBySelfWOptOutAllProfileName
   */
  export interface PersonFindOptOutBySelfWOptOutAllProfileNameParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * Profile name. Profiles determine the subset of data returned by a query.  Default profile name = IBM_optOut_email.
     */
    profileName?: 'IBM_optOut_email' | 'IBM_optOut_sms' | 'IBM_optOut_all';
  }

  /**
   * Parameters for PersonFindByUserSearch
   */
  export interface PersonFindByUserSearchParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The starting index of the result.
     */
    startIndex?: string;

    /**
     * The user registration type: G (Guest users), R (Registered users), RG (Registered and Guest users), or A (Administrators).
     */
    registerType?: 'R' | 'G' | 'RG' | 'A';

    /**
     * Profile name. Profiles determine the subset of data to be returned by a query. Default profile name = IBM_User_List_Summary
     */
    profileName?: 'IBM_User_List_Summary' | 'IBM_User_List_Details';

    /**
     * The order by table name.
     */
    orderByTableName?: 'ADDRESS';

    /**
     * The order by field name.
     */
    orderByFieldName?: 'ADDRESS_ID';

    /**
     * Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above.
     */
    maxResults?: string;

    /**
     * The user's logonId.
     */
    logonId?: string;

    /**
     * The user's last name.
     */
    lastName?: string;

    /**
     * The user's first name.
     */
    firstName?: string;

    /**
     * The user's email address.
     */
    email?: string;
  }
}

export { PersonService }
