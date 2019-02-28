/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
class PersonService extends __BaseService {
  static readonly PersonResetPasswordByAdminPath = '/wcs/resources/store/{storeId}/person/updateMemberPassword';
  static readonly PersonDeleteContextAttributeForPersonPath = '/wcs/resources/store/{storeId}/person/@self/contextattributes/{attributeName}/{value}';
  static readonly PersonRegisterPersonOnUserRegistrationAdminAddPath = '/wcs/resources/store/{storeId}/person';
  static readonly PersonFindByQueryPath = '/wcs/resources/store/{storeId}/person';
  static readonly PersonUpdatePersonByAdminPath = '/wcs/resources/store/{storeId}/person/{userId}';
  static readonly PersonPerformActionByAdminPath = '/wcs/resources/store/{storeId}/person/{userId}';
  static readonly PersonFindByUserIdWRolesOfUserInOrgsICanAdminProfileNamePath = '/wcs/resources/store/{storeId}/person/{userId}';
  static readonly PersonDeletePersonByAdminPath = '/wcs/resources/store/{storeId}/person/{userId}';
  static readonly PersonUpdateMemberUserPath = '/wcs/resources/store/{storeId}/person/updateMemberUser/{userId}';
  static readonly PersonUpdatePersonOnUserRegistrationUpdatePath = '/wcs/resources/store/{storeId}/person/@self';
  static readonly PersonFindPersonBySelfPath = '/wcs/resources/store/{storeId}/person/@self';
  static readonly getUserRegistrationOptionsPath = '/wcs/resources/store/{storeId}/person/@self/registrationOptions';
  static readonly PersonChangeLanguageCurrencyPath = '/wcs/resources/store/{storeId}/person/@self/languageCurrency';
  static readonly PersonFindOptOutBySelfWOptOutAllProfileNamePath = '/wcs/resources/store/{storeId}/person/@self/optOut';
  static readonly PersonFindByUserSearchPath = '/wcs/resources/store/{storeId}/person/search';

  constructor(
    config: __Configuration,
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
   * - `body`: Request body.
   *
   * - `mode`: The mode in which resetPassword is run. ResetPassword can be executed in an administrator session or in an on-behalf session for a user. Default value is 'resetPasswordAdmin' if no valid value was supplied.
   *
   * @return The requested completed successfully.
   */
  PersonResetPasswordByAdminResponse(params: PersonService.PersonResetPasswordByAdminParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    if (params.mode != null) __params = __params.set('mode', params.mode.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/person/updateMemberPassword`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Allows a CSR or CSS to reset the password for a registered user. It also allows resetting password when the CSR / CSS has established a session to act on behalf of a user.
   * @param params The `PersonService.PersonResetPasswordByAdminParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `body`: Request body.
   *
   * - `mode`: The mode in which resetPassword is run. ResetPassword can be executed in an administrator session or in an on-behalf session for a user. Default value is 'resetPasswordAdmin' if no valid value was supplied.
   *
   * @return The requested completed successfully.
   */
  PersonResetPasswordByAdmin(params: PersonService.PersonResetPasswordByAdminParams): __Observable<any> {
    return this.PersonResetPasswordByAdminResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Deletes one or more values of a context attribute for a registered user by removing associated entry in the MBRATTRVAL table.
   * @param params The `PersonService.PersonDeleteContextAttributeForPersonParams` containing the following parameters:
   *
   * - `attributeName`: Name of the context attribute as listed in MBRATTR.
   *
   * - `value`: Value of the context attribute you want to delete as listed in MBRATTRVAL.
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  PersonDeleteContextAttributeForPersonResponse(params: PersonService.PersonDeleteContextAttributeForPersonParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/person/@self/contextattributes/${params.attributeName}/${params.value}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Deletes one or more values of a context attribute for a registered user by removing associated entry in the MBRATTRVAL table.
   * @param params The `PersonService.PersonDeleteContextAttributeForPersonParams` containing the following parameters:
   *
   * - `attributeName`: Name of the context attribute as listed in MBRATTR.
   *
   * - `value`: Value of the context attribute you want to delete as listed in MBRATTRVAL.
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  PersonDeleteContextAttributeForPerson(params: PersonService.PersonDeleteContextAttributeForPersonParams): __Observable<any> {
    return this.PersonDeleteContextAttributeForPersonResponse(params).pipe(
      __map(_r => _r.body as any)
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
   * - `body`: Request body.
   *
   * - `mode`: The mode of the rest service.
   *
   * @return The requested completed successfully.
   */
  PersonRegisterPersonOnUserRegistrationAdminAddResponse(params: PersonService.PersonRegisterPersonOnUserRegistrationAdminAddParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    __body = params.body;
    if (params.mode != null) __params = __params.set('mode', params.mode.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/person`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<any>;
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
   * - `body`: Request body.
   *
   * - `mode`: The mode of the rest service.
   *
   * @return The requested completed successfully.
   */
  PersonRegisterPersonOnUserRegistrationAdminAdd(params: PersonService.PersonRegisterPersonOnUserRegistrationAdminAddParams): __Observable<any> {
    return this.PersonRegisterPersonOnUserRegistrationAdminAddResponse(params).pipe(
      __map(_r => _r.body as any)
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
   * - `startIndex`: The starting index of the result.
   *
   * - `maxResults`: Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above.
   *
   * @return The requested completed successfully.
   */
  PersonFindByQueryResponse(params: PersonService.PersonFindByQueryParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.startIndex != null) __params = __params.set('startIndex', params.startIndex.toString());
    if (params.maxResults != null) __params = __params.set('maxResults', params.maxResults.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/person`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<any>;
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
   * - `startIndex`: The starting index of the result.
   *
   * - `maxResults`: Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above.
   *
   * @return The requested completed successfully.
   */
  PersonFindByQuery(params: PersonService.PersonFindByQueryParams): __Observable<any> {
    return this.PersonFindByQueryResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Allows administrators to update account data for a registered user.
   * @param params The `PersonService.PersonUpdatePersonByAdminParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `userId`: The user identifier.
   *
   * - `body`: Request body.
   *
   * @return The requested completed successfully.
   */
  PersonUpdatePersonByAdminResponse(params: PersonService.PersonUpdatePersonByAdminParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/person/${params.userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Allows administrators to update account data for a registered user.
   * @param params The `PersonService.PersonUpdatePersonByAdminParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `userId`: The user identifier.
   *
   * - `body`: Request body.
   *
   * @return The requested completed successfully.
   */
  PersonUpdatePersonByAdmin(params: PersonService.PersonUpdatePersonByAdminParams): __Observable<any> {
    return this.PersonUpdatePersonByAdminResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Performs an action on a user by an administrator. See each action for details on input and output.
   * @param params The `PersonService.PersonPerformActionByAdminParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `userId`: The user identifier.
   *
   * - `action`: The action of the rest service. The assignRole action allows an administrator to assign role(s) to a registered user, while unassignRole allos an administrator to unassign role(s) from a registered user.
   */
  PersonPerformActionByAdminResponse(params: PersonService.PersonPerformActionByAdminParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.action != null) __params = __params.set('action', params.action.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/person/${params.userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }

  /**
   * Performs an action on a user by an administrator. See each action for details on input and output.
   * @param params The `PersonService.PersonPerformActionByAdminParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `userId`: The user identifier.
   *
   * - `action`: The action of the rest service. The assignRole action allows an administrator to assign role(s) to a registered user, while unassignRole allos an administrator to unassign role(s) from a registered user.
   */
  PersonPerformActionByAdmin(params: PersonService.PersonPerformActionByAdminParams): __Observable<null> {
    return this.PersonPerformActionByAdminResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Allows administrators to find user information by user identifier.
   * @param params The `PersonService.PersonFindByUserIdWRolesOfUserInOrgsICanAdminProfileNameParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `userId`: The user identifier.
   *
   * - `profileName`: Profile name. Profiles determine the subset of data returned by a query. The default profile name is IBM_User_Display_Details.
   *
   * @return The requested completed successfully.
   */
  PersonFindByUserIdWRolesOfUserInOrgsICanAdminProfileNameResponse(params: PersonService.PersonFindByUserIdWRolesOfUserInOrgsICanAdminProfileNameParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.profileName != null) __params = __params.set('profileName', params.profileName.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/person/${params.userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Allows administrators to find user information by user identifier.
   * @param params The `PersonService.PersonFindByUserIdWRolesOfUserInOrgsICanAdminProfileNameParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `userId`: The user identifier.
   *
   * - `profileName`: Profile name. Profiles determine the subset of data returned by a query. The default profile name is IBM_User_Display_Details.
   *
   * @return The requested completed successfully.
   */
  PersonFindByUserIdWRolesOfUserInOrgsICanAdminProfileName(params: PersonService.PersonFindByUserIdWRolesOfUserInOrgsICanAdminProfileNameParams): __Observable<any> {
    return this.PersonFindByUserIdWRolesOfUserInOrgsICanAdminProfileNameResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Allows administrators to delete user
   * @param params The `PersonService.PersonDeletePersonByAdminParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `userId`: The user identifier.
   *
   * @return The requested completed successfully.
   */
  PersonDeletePersonByAdminResponse(params: PersonService.PersonDeletePersonByAdminParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/person/${params.userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Allows administrators to delete user
   * @param params The `PersonService.PersonDeletePersonByAdminParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `userId`: The user identifier.
   *
   * @return The requested completed successfully.
   */
  PersonDeletePersonByAdmin(params: PersonService.PersonDeletePersonByAdminParams): __Observable<any> {
    return this.PersonDeletePersonByAdminResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Updates the user to include, exclude, or unassign the user from a member group.
   * @param params The `PersonService.PersonUpdateMemberUserParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `userId`: The user identifier.
   *
   * - `body`: Request body.
   *
   * @return The requested completed successfully.
   */
  PersonUpdateMemberUserResponse(params: PersonService.PersonUpdateMemberUserParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/person/updateMemberUser/${params.userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Updates the user to include, exclude, or unassign the user from a member group.
   * @param params The `PersonService.PersonUpdateMemberUserParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `userId`: The user identifier.
   *
   * - `body`: Request body.
   *
   * @return The requested completed successfully.
   */
  PersonUpdateMemberUser(params: PersonService.PersonUpdateMemberUserParams): __Observable<any> {
    return this.PersonUpdateMemberUserResponse(params).pipe(
      __map(_r => _r.body as any)
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
  PersonUpdatePersonOnUserRegistrationUpdateResponse(params: PersonService.PersonUpdatePersonOnUserRegistrationUpdateParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    __body = params.body;
    if (params.action != null) __params = __params.set('action', params.action.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/person/@self`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<any>;
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
  PersonUpdatePersonOnUserRegistrationUpdate(params: PersonService.PersonUpdatePersonOnUserRegistrationUpdateParams): __Observable<any> {
    return this.PersonUpdatePersonOnUserRegistrationUpdateResponse(params).pipe(
      __map(_r => _r.body as any)
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
  PersonFindPersonBySelfResponse(params: PersonService.PersonFindPersonBySelfParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/person/@self`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<any>;
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
  PersonFindPersonBySelf(params: PersonService.PersonFindPersonBySelfParams): __Observable<any> {
    return this.PersonFindPersonBySelfResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * Get the user registration options available to the current user.
   * @param storeId The store identifier.
   * @return The requested completed successfully.
   */
  getUserRegistrationOptionsResponse(storeId: string): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/wcs/resources/store/${storeId}/person/@self/registrationOptions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Get the user registration options available to the current user.
   * @param storeId The store identifier.
   * @return The requested completed successfully.
   */
  getUserRegistrationOptions(storeId: string): __Observable<any> {
    return this.getUserRegistrationOptionsResponse(storeId).pipe(
      __map(_r => _r.body as any)
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
  PersonChangeLanguageCurrencyResponse(params: PersonService.PersonChangeLanguageCurrencyParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/person/@self/languageCurrency`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<any>;
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
  PersonChangeLanguageCurrency(params: PersonService.PersonChangeLanguageCurrencyParams): __Observable<any> {
    return this.PersonChangeLanguageCurrencyResponse(params).pipe(
      __map(_r => _r.body as any)
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
  PersonFindOptOutBySelfWOptOutAllProfileNameResponse(params: PersonService.PersonFindOptOutBySelfWOptOutAllProfileNameParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.profileName != null) __params = __params.set('profileName', params.profileName.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/person/@self/optOut`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<any>;
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
  PersonFindOptOutBySelfWOptOutAllProfileName(params: PersonService.PersonFindOptOutBySelfWOptOutAllProfileNameParams): __Observable<any> {
    return this.PersonFindOptOutBySelfWOptOutAllProfileNameResponse(params).pipe(
      __map(_r => _r.body as any)
    );
  }

  /**
   * This allows an administrator to find users by their logonId, firstname, lastname and/or email.
   * @param params The `PersonService.PersonFindByUserSearchParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `registerType`: The user registration type: G (Guest users), R (Registered users), RG (Registered and Guest users), or A (Administrators).
   *
   * - `orderByTableName`: The order by table name.
   *
   * - `orderByFieldName`: The order by field name.
   *
   * - `startIndex`: The starting index of the result.
   *
   * - `profileName`: Profile name. Profiles determine the subset of data to be returned by a query. Default profile name = IBM_User_List_Summary
   *
   * - `firstName`: The user's first name.
   *
   * - `lastName`: The user's last name.
   *
   * - `logonId`: The user's logonId.
   *
   * - `email`: The user's email address.
   *
   * - `maxResults`: Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above.
   *
   * @return The requested completed successfully.
   */
  PersonFindByUserSearchResponse(params: PersonService.PersonFindByUserSearchParams): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.registerType != null) __params = __params.set('registerType', params.registerType.toString());
    if (params.orderByTableName != null) __params = __params.set('orderByTableName', params.orderByTableName.toString());
    if (params.orderByFieldName != null) __params = __params.set('orderByFieldName', params.orderByFieldName.toString());
    if (params.startIndex != null) __params = __params.set('startIndex', params.startIndex.toString());
    if (params.profileName != null) __params = __params.set('profileName', params.profileName.toString());
    if (params.firstName != null) __params = __params.set('firstName', params.firstName.toString());
    if (params.lastName != null) __params = __params.set('lastName', params.lastName.toString());
    if (params.logonId != null) __params = __params.set('logonId', params.logonId.toString());
    if (params.email != null) __params = __params.set('email', params.email.toString());
    if (params.maxResults != null) __params = __params.set('maxResults', params.maxResults.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/wcs/resources/store/${params.storeId}/person/search`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<any>;
      })
    );
  }

  /**
   * This allows an administrator to find users by their logonId, firstname, lastname and/or email.
   * @param params The `PersonService.PersonFindByUserSearchParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `registerType`: The user registration type: G (Guest users), R (Registered users), RG (Registered and Guest users), or A (Administrators).
   *
   * - `orderByTableName`: The order by table name.
   *
   * - `orderByFieldName`: The order by field name.
   *
   * - `startIndex`: The starting index of the result.
   *
   * - `profileName`: Profile name. Profiles determine the subset of data to be returned by a query. Default profile name = IBM_User_List_Summary
   *
   * - `firstName`: The user's first name.
   *
   * - `lastName`: The user's last name.
   *
   * - `logonId`: The user's logonId.
   *
   * - `email`: The user's email address.
   *
   * - `maxResults`: Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above.
   *
   * @return The requested completed successfully.
   */
  PersonFindByUserSearch(params: PersonService.PersonFindByUserSearchParams): __Observable<any> {
    return this.PersonFindByUserSearchResponse(params).pipe(
      __map(_r => _r.body as any)
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
     * Request body.
     */
    body?: any;

    /**
     * The mode in which resetPassword is run. ResetPassword can be executed in an administrator session or in an on-behalf session for a user. Default value is 'resetPasswordAdmin' if no valid value was supplied.
     */
    mode?: 'resetPasswordAdmin' | 'resetPasswordOnBehalf';
  }

  /**
   * Parameters for PersonDeleteContextAttributeForPerson
   */
  export interface PersonDeleteContextAttributeForPersonParams {

    /**
     * Name of the context attribute as listed in MBRATTR.
     */
    attributeName: string;

    /**
     * Value of the context attribute you want to delete as listed in MBRATTRVAL.
     */
    value: string;

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
     * Request body.
     */
    body?: any;

    /**
     * The mode of the rest service.
     */
    mode?: 'self' | 'admin';
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
    q: 'usersICanAdmin' | 'registeredUsersICanManage';

    /**
     * The starting index of the result.
     */
    startIndex?: string;

    /**
     * Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above.
     */
    maxResults?: string;
  }

  /**
   * Parameters for PersonUpdatePersonByAdmin
   */
  export interface PersonUpdatePersonByAdminParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The user identifier.
     */
    userId: string;

    /**
     * Request body.
     */
    body?: any;
  }

  /**
   * Parameters for PersonPerformActionByAdmin
   */
  export interface PersonPerformActionByAdminParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The user identifier.
     */
    userId: string;

    /**
     * The action of the rest service. The assignRole action allows an administrator to assign role(s) to a registered user, while unassignRole allos an administrator to unassign role(s) from a registered user.
     */
    action: 'assignRole' | 'unassignRole';
  }

  /**
   * Parameters for PersonFindByUserIdWRolesOfUserInOrgsICanAdminProfileName
   */
  export interface PersonFindByUserIdWRolesOfUserInOrgsICanAdminProfileNameParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The user identifier.
     */
    userId: string;

    /**
     * Profile name. Profiles determine the subset of data returned by a query. The default profile name is IBM_User_Display_Details.
     */
    profileName?: 'IBM_User_Display_Details' | 'IBM_User_Registration_Details' | 'IBM_User_Top_Level_Org_Administered' | 'IBM_Assigned_Roles_Details' | 'IBM_Roles_Of_User_All' | 'IBM_Roles_Of_User_In_Orgs_I_Can_Admin';
  }

  /**
   * Parameters for PersonDeletePersonByAdmin
   */
  export interface PersonDeletePersonByAdminParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The user identifier.
     */
    userId: string;
  }

  /**
   * Parameters for PersonUpdateMemberUser
   */
  export interface PersonUpdateMemberUserParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The user identifier.
     */
    userId: string;

    /**
     * Request body.
     */
    body?: any;
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
    body?: any;

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
     * The user registration type: G (Guest users), R (Registered users), RG (Registered and Guest users), or A (Administrators).
     */
    registerType?: 'R' | 'G' | 'RG' | 'A';

    /**
     * The order by table name.
     */
    orderByTableName?: 'ADDRESS';

    /**
     * The order by field name.
     */
    orderByFieldName?: 'ADDRESS_ID';

    /**
     * The starting index of the result.
     */
    startIndex?: string;

    /**
     * Profile name. Profiles determine the subset of data to be returned by a query. Default profile name = IBM_User_List_Summary
     */
    profileName?: 'IBM_User_List_Summary' | 'IBM_User_List_Details';

    /**
     * The user's first name.
     */
    firstName?: string;

    /**
     * The user's last name.
     */
    lastName?: string;

    /**
     * The user's logonId.
     */
    logonId?: string;

    /**
     * The user's email address.
     */
    email?: string;

    /**
     * Page size. Used to limit the amount of data returned by a query. Valid values include positive integers of 1 and above.
     */
    maxResults?: string;
  }
}

export { PersonService }
