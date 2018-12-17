/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ComIbmCommerceRestMemberHandlerPersonCheckoutProfileHandlerUserIdContainer } from '../models/com-ibm-commerce-rest-member-handler-person-checkout-profile-handler-user-id-container';
import { PersonCheckoutProfile } from '../models/person-checkout-profile';

/**
 * This class provides RESTful services to get and update a checkout profile.
 */
@Injectable()
class CheckoutProfileService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Updates the CheckOutProfile for the logged in user using the Member service. The shopper must log in before invoking this method.
   * @param params The `CheckoutProfileService.CheckoutProfileUpdateCheckoutProfileParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `body`: Update checkout profile body.
   *
   * @return The requested completed successfully.
   */
  CheckoutProfileUpdateCheckoutProfileResponse(params: CheckoutProfileService.CheckoutProfileUpdateCheckoutProfileParams): Observable<StrictHttpResponse<ComIbmCommerceRestMemberHandlerPersonCheckoutProfileHandlerUserIdContainer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/store/${params.storeId}/person/@self/checkoutProfile`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceRestMemberHandlerPersonCheckoutProfileHandlerUserIdContainer>;
      })
    );
  }

  /**
   * Updates the CheckOutProfile for the logged in user using the Member service. The shopper must log in before invoking this method.
   * @param params The `CheckoutProfileService.CheckoutProfileUpdateCheckoutProfileParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `body`: Update checkout profile body.
   *
   * @return The requested completed successfully.
   */
  CheckoutProfileUpdateCheckoutProfile(params: CheckoutProfileService.CheckoutProfileUpdateCheckoutProfileParams): Observable<ComIbmCommerceRestMemberHandlerPersonCheckoutProfileHandlerUserIdContainer> {
    return this.CheckoutProfileUpdateCheckoutProfileResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Gets the Check Out Profile for the logged in user using the Member service. The shopper must log in before invoking this method.
   * @param params The `CheckoutProfileService.CheckoutProfileGetCheckoutProfileParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  CheckoutProfileGetCheckoutProfileResponse(params: CheckoutProfileService.CheckoutProfileGetCheckoutProfileParams): Observable<StrictHttpResponse<PersonCheckoutProfile>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/person/@self/checkoutProfile`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<PersonCheckoutProfile>;
      })
    );
  }

  /**
   * Gets the Check Out Profile for the logged in user using the Member service. The shopper must log in before invoking this method.
   * @param params The `CheckoutProfileService.CheckoutProfileGetCheckoutProfileParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  CheckoutProfileGetCheckoutProfile(params: CheckoutProfileService.CheckoutProfileGetCheckoutProfileParams): Observable<PersonCheckoutProfile> {
    return this.CheckoutProfileGetCheckoutProfileResponse(params).pipe(
      __map(_r => _r.body)
    );
  }
}

module CheckoutProfileService {

  /**
   * Parameters for CheckoutProfileUpdateCheckoutProfile
   */
  export interface CheckoutProfileUpdateCheckoutProfileParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';

    /**
     * Update checkout profile body.
     */
    body?: PersonCheckoutProfile;
  }

  /**
   * Parameters for CheckoutProfileGetCheckoutProfile
   */
  export interface CheckoutProfileGetCheckoutProfileParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';
  }
}

export { CheckoutProfileService }
