/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ComIbmCommerceRestMemberHandlerUserActivateHandlerActiveUserResponse } from '../models/com-ibm-commerce-rest-member-handler-user-activate-handler-active-user-response';
import { ComIbmCommerceRestMemberHandlerUserActivateHandlerActiveUserRequestBody } from '../models/com-ibm-commerce-rest-member-handler-user-activate-handler-active-user-request-body';
import { ComIbmCommerceMemberFacadeServerCommandsUserRegistrationEmailActivateResendCmd } from '../models/com-ibm-commerce-member-facade-server-commands-user-registration-email-activate-resend-cmd';
import { ComIbmCommerceRestMemberHandlerUserActivateHandlerResendActiveUserRequestBody } from '../models/com-ibm-commerce-rest-member-handler-user-activate-handler-resend-active-user-request-body';

/**
 * This class provides RESTful services to get activate a user account and resend account activation emails.
 */
@Injectable()
class UserActivateService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Activate the user account.
   * @param params The `UserActivateService.UserActivateActiveUserParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `body`: Request body to activate the user account.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `langId`: The language ID.
   *
   * @return The requested completed successfully.
   */
  UserActivateActiveUserResponse(params: UserActivateService.UserActivateActiveUserParams): Observable<StrictHttpResponse<ComIbmCommerceRestMemberHandlerUserActivateHandlerActiveUserResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    if (params.langId != null) __params = __params.set('langId', params.langId.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/store/${params.storeId}/useractivate/emailactivate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceRestMemberHandlerUserActivateHandlerActiveUserResponse>;
      })
    );
  }

  /**
   * Activate the user account.
   * @param params The `UserActivateService.UserActivateActiveUserParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `body`: Request body to activate the user account.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `langId`: The language ID.
   *
   * @return The requested completed successfully.
   */
  UserActivateActiveUser(params: UserActivateService.UserActivateActiveUserParams): Observable<ComIbmCommerceRestMemberHandlerUserActivateHandlerActiveUserResponse> {
    return this.UserActivateActiveUserResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Resend user account activation email.
   * @param params The `UserActivateService.UserActivateResendActiveUserParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `body`: Request body for resend user account activation email.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  UserActivateResendActiveUserResponse(params: UserActivateService.UserActivateResendActiveUserParams): Observable<StrictHttpResponse<ComIbmCommerceMemberFacadeServerCommandsUserRegistrationEmailActivateResendCmd>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/store/${params.storeId}/useractivate/resendemail`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceMemberFacadeServerCommandsUserRegistrationEmailActivateResendCmd>;
      })
    );
  }

  /**
   * Resend user account activation email.
   * @param params The `UserActivateService.UserActivateResendActiveUserParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `body`: Request body for resend user account activation email.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  UserActivateResendActiveUser(params: UserActivateService.UserActivateResendActiveUserParams): Observable<ComIbmCommerceMemberFacadeServerCommandsUserRegistrationEmailActivateResendCmd> {
    return this.UserActivateResendActiveUserResponse(params).pipe(
      __map(_r => _r.body)
    );
  }
}

module UserActivateService {

  /**
   * Parameters for UserActivateActiveUser
   */
  export interface UserActivateActiveUserParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * Request body to activate the user account.
     */
    body: ComIbmCommerceRestMemberHandlerUserActivateHandlerActiveUserRequestBody;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';

    /**
     * The language ID.
     */
    langId?: string;
  }

  /**
   * Parameters for UserActivateResendActiveUser
   */
  export interface UserActivateResendActiveUserParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * Request body for resend user account activation email.
     */
    body: ComIbmCommerceRestMemberHandlerUserActivateHandlerResendActiveUserRequestBody;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';
  }
}

export { UserActivateService }
