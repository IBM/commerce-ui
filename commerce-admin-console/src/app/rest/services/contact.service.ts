/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ComIbmCommerceRestMemberHandlerPersonContactHandlerUserIdentifier } from '../models/com-ibm-commerce-rest-member-handler-person-contact-handler-user-identifier';
import { PersonContact } from '../models/person-contact';
import { PersonSingleContact } from '../models/person-single-contact';
import { Empty } from '../models/empty';

/**
 * This class provides RESTful services to get contact details, register a person as a member, and update a member.
 */
@Injectable()
class ContactService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Creates a new contact in a person's address book.
   * @param params The `ContactService.ContactAddPersonContactParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `body`: Request body.
   *
   * @return No response was specified.
   */
  ContactAddPersonContactResponse(params: ContactService.ContactAddPersonContactParams): Observable<StrictHttpResponse<ComIbmCommerceRestMemberHandlerPersonContactHandlerUserIdentifier>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/store/${params.storeId}/person/@self/contact`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ComIbmCommerceRestMemberHandlerPersonContactHandlerUserIdentifier>;
      })
    );
  }

  /**
   * Creates a new contact in a person's address book.
   * @param params The `ContactService.ContactAddPersonContactParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `body`: Request body.
   *
   * @return No response was specified.
   */
  ContactAddPersonContact(params: ContactService.ContactAddPersonContactParams): Observable<ComIbmCommerceRestMemberHandlerPersonContactHandlerUserIdentifier> {
    return this.ContactAddPersonContactResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Gets the contacts in a person's address book. If the addressType optional query parameter is passed in, the returned contacts are filtered by addressType.
   * @param params The `ContactService.ContactGetAllPersonContactParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `addressType`: The addressType to filter contacts by. All contacts will be returned if a valid value is not supplied for this parameter.
   *
   * @return The requested completed successfully.
   */
  ContactGetAllPersonContactResponse(params: ContactService.ContactGetAllPersonContactParams): Observable<StrictHttpResponse<PersonContact>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    if (params.addressType != null) __params = __params.set('addressType', params.addressType.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/person/@self/contact`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<PersonContact>;
      })
    );
  }

  /**
   * Gets the contacts in a person's address book. If the addressType optional query parameter is passed in, the returned contacts are filtered by addressType.
   * @param params The `ContactService.ContactGetAllPersonContactParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `addressType`: The addressType to filter contacts by. All contacts will be returned if a valid value is not supplied for this parameter.
   *
   * @return The requested completed successfully.
   */
  ContactGetAllPersonContact(params: ContactService.ContactGetAllPersonContactParams): Observable<PersonContact> {
    return this.ContactGetAllPersonContactResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Gets a person contact by address ID.
   * @param params The `ContactService.ContactFindPersonContactByIdParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `addressId`: The address identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  ContactFindPersonContactByIdResponse(params: ContactService.ContactFindPersonContactByIdParams): Observable<StrictHttpResponse<PersonSingleContact>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/person/@self/contact/byAddressId/${params.addressId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<PersonSingleContact>;
      })
    );
  }

  /**
   * Gets a person contact by address ID.
   * @param params The `ContactService.ContactFindPersonContactByIdParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `addressId`: The address identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  ContactFindPersonContactById(params: ContactService.ContactFindPersonContactByIdParams): Observable<PersonSingleContact> {
    return this.ContactFindPersonContactByIdResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Updates the contact in the address book identified by nickname.
   * @param params The `ContactService.ContactUpdatePersonContactParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `nickName`: The contact name saved in addressBook by registered shopper.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `body`: Request body.
   *
   * @return The requested completed successfully.
   */
  ContactUpdatePersonContactResponse(params: ContactService.ContactUpdatePersonContactParams): Observable<StrictHttpResponse<PersonSingleContact>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/store/${params.storeId}/person/@self/contact/${params.nickName}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<PersonSingleContact>;
      })
    );
  }

  /**
   * Updates the contact in the address book identified by nickname.
   * @param params The `ContactService.ContactUpdatePersonContactParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `nickName`: The contact name saved in addressBook by registered shopper.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `body`: Request body.
   *
   * @return The requested completed successfully.
   */
  ContactUpdatePersonContact(params: ContactService.ContactUpdatePersonContactParams): Observable<PersonSingleContact> {
    return this.ContactUpdatePersonContactResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Gets a person contact by nickname.
   * @param params The `ContactService.ContactFindPersonContactByNickNameParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `nickName`: The contact name saved in addressBook by registered shopper.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  ContactFindPersonContactByNickNameResponse(params: ContactService.ContactFindPersonContactByNickNameParams): Observable<StrictHttpResponse<PersonSingleContact>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/person/@self/contact/${params.nickName}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<PersonSingleContact>;
      })
    );
  }

  /**
   * Gets a person contact by nickname.
   * @param params The `ContactService.ContactFindPersonContactByNickNameParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `nickName`: The contact name saved in addressBook by registered shopper.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  ContactFindPersonContactByNickName(params: ContactService.ContactFindPersonContactByNickNameParams): Observable<PersonSingleContact> {
    return this.ContactFindPersonContactByNickNameResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Deletes the contact in the address book identified by nickname.
   * @param params The `ContactService.ContactDeletePersonContactParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `nickName`: The contact name saved in addressBook by registered shopper.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  ContactDeletePersonContactResponse(params: ContactService.ContactDeletePersonContactParams): Observable<StrictHttpResponse<Empty>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/store/${params.storeId}/person/@self/contact/${params.nickName}`,
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
   * Deletes the contact in the address book identified by nickname.
   * @param params The `ContactService.ContactDeletePersonContactParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `nickName`: The contact name saved in addressBook by registered shopper.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  ContactDeletePersonContact(params: ContactService.ContactDeletePersonContactParams): Observable<Empty> {
    return this.ContactDeletePersonContactResponse(params).pipe(
      __map(_r => _r.body)
    );
  }
}

module ContactService {

  /**
   * Parameters for ContactAddPersonContact
   */
  export interface ContactAddPersonContactParams {

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
    body?: PersonContact;
  }

  /**
   * Parameters for ContactGetAllPersonContact
   */
  export interface ContactGetAllPersonContactParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';

    /**
     * The addressType to filter contacts by. All contacts will be returned if a valid value is not supplied for this parameter.
     */
    addressType?: 'Shipping' | 'Billing' | 'ShippingAndBilling';
  }

  /**
   * Parameters for ContactFindPersonContactById
   */
  export interface ContactFindPersonContactByIdParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The address identifier.
     */
    addressId: string;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';
  }

  /**
   * Parameters for ContactUpdatePersonContact
   */
  export interface ContactUpdatePersonContactParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The contact name saved in addressBook by registered shopper.
     */
    nickName: string;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';

    /**
     * Request body.
     */
    body?: PersonContact;
  }

  /**
   * Parameters for ContactFindPersonContactByNickName
   */
  export interface ContactFindPersonContactByNickNameParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The contact name saved in addressBook by registered shopper.
     */
    nickName: string;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';
  }

  /**
   * Parameters for ContactDeletePersonContact
   */
  export interface ContactDeletePersonContactParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The contact name saved in addressBook by registered shopper.
     */
    nickName: string;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';
  }
}

export { ContactService }
