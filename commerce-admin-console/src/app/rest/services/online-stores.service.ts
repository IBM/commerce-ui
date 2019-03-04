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
class OnlineStoresService extends __BaseService {
  static readonly getOnlineStoresPath = '/rest/admin/v2/online-stores';
  static readonly getOnlineStoresByIdentifierPath = '/rest/admin/v2/online-stores/by-identifier';
  static readonly getOnlineStoresByRelatedStoreIdPath = '/rest/admin/v2/online-stores/by-related-store-id';
  static readonly getOnlineStorePath = '/rest/admin/v2/online-stores/{id}';
  static readonly closeOnlineStorePath = '/rest/admin/v2/online-stores/{id}/close';
  static readonly openOnlineStorePath = '/rest/admin/v2/online-stores/{id}/open';
  static readonly getOnlineStoreConfigurationValuesPath = '/rest/admin/v2/online-stores/{onlineStoreId}/configuration-values';
  static readonly getOnlineStoreContactsPath = '/rest/admin/v2/online-stores/{onlineStoreId}/contacts';
  static readonly createOnlineStoreContactPath = '/rest/admin/v2/online-stores/{onlineStoreId}/contacts';
  static readonly deleteOnlineStoreContactPath = '/rest/admin/v2/online-stores/{onlineStoreId}/contacts/{id}';
  static readonly updateOnlineStoreContactPath = '/rest/admin/v2/online-stores/{onlineStoreId}/contacts/{id}';
  static readonly getOnlineStoreCurrenciesPath = '/rest/admin/v2/online-stores/{onlineStoreId}/currencies';
  static readonly updateOnlineStoreCurrenciesPath = '/rest/admin/v2/online-stores/{onlineStoreId}/currencies';
  static readonly getOnlineStoreDefaultCatalogsPath = '/rest/admin/v2/online-stores/{onlineStoreId}/default-catalogs';
  static readonly createOnlineStoreDefaultCatalogPath = '/rest/admin/v2/online-stores/{onlineStoreId}/default-catalogs';
  static readonly deleteOnlineStoreDefaultCatalogPath = '/rest/admin/v2/online-stores/{onlineStoreId}/default-catalogs/{id}';
  static readonly getOnlineStoreDescriptionsPath = '/rest/admin/v2/online-stores/{onlineStoreId}/descriptions';
  static readonly createOnlineStoreDescriptionPath = '/rest/admin/v2/online-stores/{onlineStoreId}/descriptions';
  static readonly getOnlineStoreDescriptionPath = '/rest/admin/v2/online-stores/{onlineStoreId}/descriptions/{id}';
  static readonly updateOnlineStoreDescriptionPath = '/rest/admin/v2/online-stores/{onlineStoreId}/descriptions/{id}';
  static readonly getOnlineStoreLanguagesPath = '/rest/admin/v2/online-stores/{onlineStoreId}/languages';
  static readonly updateOnlineStoreLanguagesPath = '/rest/admin/v2/online-stores/{onlineStoreId}/languages';
  static readonly getOnlineStoreLocationsPath = '/rest/admin/v2/online-stores/{onlineStoreId}/locations';
  static readonly createOnlineStoreLocationPath = '/rest/admin/v2/online-stores/{onlineStoreId}/locations';
  static readonly deleteOnlineStoreLocationPath = '/rest/admin/v2/online-stores/{onlineStoreId}/locations/{id}';
  static readonly updateOnlineStoreLocationPath = '/rest/admin/v2/online-stores/{onlineStoreId}/locations/{id}';
  static readonly getOnlineStoreRelatedStoresPath = '/rest/admin/v2/online-stores/{onlineStoreId}/related-stores';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `OnlineStoresService.GetOnlineStoresParams` containing the following parameters:
   *
   * - `usage`: The usage.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * @return The operation is successful.
   */
  getOnlineStoresResponse(params: OnlineStoresService.GetOnlineStoresParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{catalogOverrideEnabled?: string, externalContentEnablementMode?: string, externalContentHostName?: string, externalContentPickerUrl?: string, externalContentTenantId?: string, externalContentUiContextRoot?: string, id?: number, identifier?: string, ownerId?: number, state?: string, type?: string, unregisterMarketingEvent?: string}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.usage != null) __params = __params.set('usage', params.usage.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/online-stores`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number, items?: Array<{catalogOverrideEnabled?: string, externalContentEnablementMode?: string, externalContentHostName?: string, externalContentPickerUrl?: string, externalContentTenantId?: string, externalContentUiContextRoot?: string, id?: number, identifier?: string, ownerId?: number, state?: string, type?: string, unregisterMarketingEvent?: string}>}>;
      })
    );
  }

  /**
   * @param params The `OnlineStoresService.GetOnlineStoresParams` containing the following parameters:
   *
   * - `usage`: The usage.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * @return The operation is successful.
   */
  getOnlineStores(params: OnlineStoresService.GetOnlineStoresParams): __Observable<{count?: number, items?: Array<{catalogOverrideEnabled?: string, externalContentEnablementMode?: string, externalContentHostName?: string, externalContentPickerUrl?: string, externalContentTenantId?: string, externalContentUiContextRoot?: string, id?: number, identifier?: string, ownerId?: number, state?: string, type?: string, unregisterMarketingEvent?: string}>}> {
    return this.getOnlineStoresResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{catalogOverrideEnabled?: string, externalContentEnablementMode?: string, externalContentHostName?: string, externalContentPickerUrl?: string, externalContentTenantId?: string, externalContentUiContextRoot?: string, id?: number, identifier?: string, ownerId?: number, state?: string, type?: string, unregisterMarketingEvent?: string}>})
    );
  }

  /**
   * @param params The `OnlineStoresService.GetOnlineStoresByIdentifierParams` containing the following parameters:
   *
   * - `usage`: The usage.
   *
   * - `identifier`: The identifier or name for identifying the online store.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * @return The operation is successful.
   */
  getOnlineStoresByIdentifierResponse(params: OnlineStoresService.GetOnlineStoresByIdentifierParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{catalogOverrideEnabled?: string, externalContentEnablementMode?: string, externalContentHostName?: string, externalContentPickerUrl?: string, externalContentTenantId?: string, externalContentUiContextRoot?: string, id?: number, identifier?: string, ownerId?: number, state?: string, type?: string, unregisterMarketingEvent?: string}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.usage != null) __params = __params.set('usage', params.usage.toString());
    if (params.identifier != null) __params = __params.set('identifier', params.identifier.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/online-stores/by-identifier`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number, items?: Array<{catalogOverrideEnabled?: string, externalContentEnablementMode?: string, externalContentHostName?: string, externalContentPickerUrl?: string, externalContentTenantId?: string, externalContentUiContextRoot?: string, id?: number, identifier?: string, ownerId?: number, state?: string, type?: string, unregisterMarketingEvent?: string}>}>;
      })
    );
  }

  /**
   * @param params The `OnlineStoresService.GetOnlineStoresByIdentifierParams` containing the following parameters:
   *
   * - `usage`: The usage.
   *
   * - `identifier`: The identifier or name for identifying the online store.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * @return The operation is successful.
   */
  getOnlineStoresByIdentifier(params: OnlineStoresService.GetOnlineStoresByIdentifierParams): __Observable<{count?: number, items?: Array<{catalogOverrideEnabled?: string, externalContentEnablementMode?: string, externalContentHostName?: string, externalContentPickerUrl?: string, externalContentTenantId?: string, externalContentUiContextRoot?: string, id?: number, identifier?: string, ownerId?: number, state?: string, type?: string, unregisterMarketingEvent?: string}>}> {
    return this.getOnlineStoresByIdentifierResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{catalogOverrideEnabled?: string, externalContentEnablementMode?: string, externalContentHostName?: string, externalContentPickerUrl?: string, externalContentTenantId?: string, externalContentUiContextRoot?: string, id?: number, identifier?: string, ownerId?: number, state?: string, type?: string, unregisterMarketingEvent?: string}>})
    );
  }

  /**
   * @param params The `OnlineStoresService.GetOnlineStoresByRelatedStoreIdParams` containing the following parameters:
   *
   * - `usage`: The usage.
   *
   * - `relatedStoreId`: The unique numeric ID of the related online store. The returned online stores are related to this online store.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * @return The operation is successful.
   */
  getOnlineStoresByRelatedStoreIdResponse(params: OnlineStoresService.GetOnlineStoresByRelatedStoreIdParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{catalogOverrideEnabled?: string, externalContentEnablementMode?: string, externalContentHostName?: string, externalContentPickerUrl?: string, externalContentTenantId?: string, externalContentUiContextRoot?: string, id?: number, identifier?: string, ownerId?: number, state?: string, type?: string, unregisterMarketingEvent?: string}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.usage != null) __params = __params.set('usage', params.usage.toString());
    if (params.relatedStoreId != null) __params = __params.set('relatedStoreId', params.relatedStoreId.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/online-stores/by-related-store-id`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number, items?: Array<{catalogOverrideEnabled?: string, externalContentEnablementMode?: string, externalContentHostName?: string, externalContentPickerUrl?: string, externalContentTenantId?: string, externalContentUiContextRoot?: string, id?: number, identifier?: string, ownerId?: number, state?: string, type?: string, unregisterMarketingEvent?: string}>}>;
      })
    );
  }

  /**
   * @param params The `OnlineStoresService.GetOnlineStoresByRelatedStoreIdParams` containing the following parameters:
   *
   * - `usage`: The usage.
   *
   * - `relatedStoreId`: The unique numeric ID of the related online store. The returned online stores are related to this online store.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * @return The operation is successful.
   */
  getOnlineStoresByRelatedStoreId(params: OnlineStoresService.GetOnlineStoresByRelatedStoreIdParams): __Observable<{count?: number, items?: Array<{catalogOverrideEnabled?: string, externalContentEnablementMode?: string, externalContentHostName?: string, externalContentPickerUrl?: string, externalContentTenantId?: string, externalContentUiContextRoot?: string, id?: number, identifier?: string, ownerId?: number, state?: string, type?: string, unregisterMarketingEvent?: string}>}> {
    return this.getOnlineStoresByRelatedStoreIdResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{catalogOverrideEnabled?: string, externalContentEnablementMode?: string, externalContentHostName?: string, externalContentPickerUrl?: string, externalContentTenantId?: string, externalContentUiContextRoot?: string, id?: number, identifier?: string, ownerId?: number, state?: string, type?: string, unregisterMarketingEvent?: string}>})
    );
  }

  /**
   * @param id The unique numeric ID for identifying the online store.
   * @return The operation is successful.
   */
  getOnlineStoreResponse(id: number): __Observable<__StrictHttpResponse<{catalogOverrideEnabled?: string, externalContentEnablementMode?: string, externalContentHostName?: string, externalContentPickerUrl?: string, externalContentTenantId?: string, externalContentUiContextRoot?: string, id?: number, identifier?: string, ownerId?: number, state?: string, type?: string, unregisterMarketingEvent?: string}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/online-stores/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{catalogOverrideEnabled?: string, externalContentEnablementMode?: string, externalContentHostName?: string, externalContentPickerUrl?: string, externalContentTenantId?: string, externalContentUiContextRoot?: string, id?: number, identifier?: string, ownerId?: number, state?: string, type?: string, unregisterMarketingEvent?: string}>;
      })
    );
  }

  /**
   * @param id The unique numeric ID for identifying the online store.
   * @return The operation is successful.
   */
  getOnlineStore(id: number): __Observable<{catalogOverrideEnabled?: string, externalContentEnablementMode?: string, externalContentHostName?: string, externalContentPickerUrl?: string, externalContentTenantId?: string, externalContentUiContextRoot?: string, id?: number, identifier?: string, ownerId?: number, state?: string, type?: string, unregisterMarketingEvent?: string}> {
    return this.getOnlineStoreResponse(id).pipe(
      __map(_r => _r.body as {catalogOverrideEnabled?: string, externalContentEnablementMode?: string, externalContentHostName?: string, externalContentPickerUrl?: string, externalContentTenantId?: string, externalContentUiContextRoot?: string, id?: number, identifier?: string, ownerId?: number, state?: string, type?: string, unregisterMarketingEvent?: string})
    );
  }

  /**
   * @param id The unique numeric ID for identifying the online store.
   */
  closeOnlineStoreResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/online-stores/${id}/close`,
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
   * @param id The unique numeric ID for identifying the online store.
   */
  closeOnlineStore(id: number): __Observable<null> {
    return this.closeOnlineStoreResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param id The unique numeric ID for identifying the online store.
   */
  openOnlineStoreResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/online-stores/${id}/open`,
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
   * @param id The unique numeric ID for identifying the online store.
   */
  openOnlineStore(id: number): __Observable<null> {
    return this.openOnlineStoreResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param onlineStoreId The unique numeric ID for identifying the online store.
   * @return The operation is successful.
   */
  getOnlineStoreConfigurationValuesResponse(onlineStoreId: number): __Observable<__StrictHttpResponse<{onlineStoreId?: number, values?: {[key: string]: string}}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/online-stores/${onlineStoreId}/configuration-values`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{onlineStoreId?: number, values?: {[key: string]: string}}>;
      })
    );
  }

  /**
   * @param onlineStoreId The unique numeric ID for identifying the online store.
   * @return The operation is successful.
   */
  getOnlineStoreConfigurationValues(onlineStoreId: number): __Observable<{onlineStoreId?: number, values?: {[key: string]: string}}> {
    return this.getOnlineStoreConfigurationValuesResponse(onlineStoreId).pipe(
      __map(_r => _r.body as {onlineStoreId?: number, values?: {[key: string]: string}})
    );
  }

  /**
   * @param params The `OnlineStoresService.GetOnlineStoreContactsParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `dataLanguageIds`: The data language IDs.
   *
   * @return The operation is successful.
   */
  getOnlineStoreContactsResponse(params: OnlineStoresService.GetOnlineStoreContactsParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{addressLine1?: string, addressLine2?: string, addressLine3?: string, city?: string, country?: string, email1?: string, email2?: string, fax1?: string, fax2?: string, id?: number, languageId?: number, name?: string, onlineStoreId?: number, phone1?: string, phone2?: string, postalCode?: string, stateOrProvince?: string}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.dataLanguageIds != null) __params = __params.set('dataLanguageIds', params.dataLanguageIds.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/online-stores/${params.onlineStoreId}/contacts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number, items?: Array<{addressLine1?: string, addressLine2?: string, addressLine3?: string, city?: string, country?: string, email1?: string, email2?: string, fax1?: string, fax2?: string, id?: number, languageId?: number, name?: string, onlineStoreId?: number, phone1?: string, phone2?: string, postalCode?: string, stateOrProvince?: string}>}>;
      })
    );
  }

  /**
   * @param params The `OnlineStoresService.GetOnlineStoreContactsParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `dataLanguageIds`: The data language IDs.
   *
   * @return The operation is successful.
   */
  getOnlineStoreContacts(params: OnlineStoresService.GetOnlineStoreContactsParams): __Observable<{count?: number, items?: Array<{addressLine1?: string, addressLine2?: string, addressLine3?: string, city?: string, country?: string, email1?: string, email2?: string, fax1?: string, fax2?: string, id?: number, languageId?: number, name?: string, onlineStoreId?: number, phone1?: string, phone2?: string, postalCode?: string, stateOrProvince?: string}>}> {
    return this.getOnlineStoreContactsResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{addressLine1?: string, addressLine2?: string, addressLine3?: string, city?: string, country?: string, email1?: string, email2?: string, fax1?: string, fax2?: string, id?: number, languageId?: number, name?: string, onlineStoreId?: number, phone1?: string, phone2?: string, postalCode?: string, stateOrProvince?: string}>})
    );
  }

  /**
   * @param params The `OnlineStoresService.CreateOnlineStoreContactParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `body`: The request body.
   */
  createOnlineStoreContactResponse(params: OnlineStoresService.CreateOnlineStoreContactParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/online-stores/${params.onlineStoreId}/contacts`,
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
   * @param params The `OnlineStoresService.CreateOnlineStoreContactParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `body`: The request body.
   */
  createOnlineStoreContact(params: OnlineStoresService.CreateOnlineStoreContactParams): __Observable<null> {
    return this.createOnlineStoreContactResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `OnlineStoresService.DeleteOnlineStoreContactParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `id`: The unique numeric ID for identifying online store contact ID.
   */
  deleteOnlineStoreContactResponse(params: OnlineStoresService.DeleteOnlineStoreContactParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/rest/admin/v2/online-stores/${params.onlineStoreId}/contacts/${params.id}`,
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
   * @param params The `OnlineStoresService.DeleteOnlineStoreContactParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `id`: The unique numeric ID for identifying online store contact ID.
   */
  deleteOnlineStoreContact(params: OnlineStoresService.DeleteOnlineStoreContactParams): __Observable<null> {
    return this.deleteOnlineStoreContactResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `OnlineStoresService.UpdateOnlineStoreContactParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `id`: The unique numeric ID for identifying online store contact ID.
   *
   * - `body`: The request body.
   */
  updateOnlineStoreContactResponse(params: OnlineStoresService.UpdateOnlineStoreContactParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/rest/admin/v2/online-stores/${params.onlineStoreId}/contacts/${params.id}`,
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
   * @param params The `OnlineStoresService.UpdateOnlineStoreContactParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `id`: The unique numeric ID for identifying online store contact ID.
   *
   * - `body`: The request body.
   */
  updateOnlineStoreContact(params: OnlineStoresService.UpdateOnlineStoreContactParams): __Observable<null> {
    return this.updateOnlineStoreContactResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param onlineStoreId The unique numeric ID for identifying the online store.
   * @return The operation is successful.
   */
  getOnlineStoreCurrenciesResponse(onlineStoreId: number): __Observable<__StrictHttpResponse<{currencies?: Array<string>, defaultCurrency?: string, onlineStoreId?: number}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/online-stores/${onlineStoreId}/currencies`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{currencies?: Array<string>, defaultCurrency?: string, onlineStoreId?: number}>;
      })
    );
  }

  /**
   * @param onlineStoreId The unique numeric ID for identifying the online store.
   * @return The operation is successful.
   */
  getOnlineStoreCurrencies(onlineStoreId: number): __Observable<{currencies?: Array<string>, defaultCurrency?: string, onlineStoreId?: number}> {
    return this.getOnlineStoreCurrenciesResponse(onlineStoreId).pipe(
      __map(_r => _r.body as {currencies?: Array<string>, defaultCurrency?: string, onlineStoreId?: number})
    );
  }

  /**
   * @param params The `OnlineStoresService.UpdateOnlineStoreCurrenciesParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `body`: The request body.
   */
  updateOnlineStoreCurrenciesResponse(params: OnlineStoresService.UpdateOnlineStoreCurrenciesParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/rest/admin/v2/online-stores/${params.onlineStoreId}/currencies`,
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
   * @param params The `OnlineStoresService.UpdateOnlineStoreCurrenciesParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `body`: The request body.
   */
  updateOnlineStoreCurrencies(params: OnlineStoresService.UpdateOnlineStoreCurrenciesParams): __Observable<null> {
    return this.updateOnlineStoreCurrenciesResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param onlineStoreId The unique numeric ID for identifying the online store.
   * @return The operation is successful.
   */
  getOnlineStoreDefaultCatalogsResponse(onlineStoreId: number): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{catalogId?: number, id?: number, onlineStoreId?: number, storeId?: number}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/online-stores/${onlineStoreId}/default-catalogs`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number, items?: Array<{catalogId?: number, id?: number, onlineStoreId?: number, storeId?: number}>}>;
      })
    );
  }

  /**
   * @param onlineStoreId The unique numeric ID for identifying the online store.
   * @return The operation is successful.
   */
  getOnlineStoreDefaultCatalogs(onlineStoreId: number): __Observable<{count?: number, items?: Array<{catalogId?: number, id?: number, onlineStoreId?: number, storeId?: number}>}> {
    return this.getOnlineStoreDefaultCatalogsResponse(onlineStoreId).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{catalogId?: number, id?: number, onlineStoreId?: number, storeId?: number}>})
    );
  }

  /**
   * @param params The `OnlineStoresService.CreateOnlineStoreDefaultCatalogParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `body`: The request body.
   */
  createOnlineStoreDefaultCatalogResponse(params: OnlineStoresService.CreateOnlineStoreDefaultCatalogParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/online-stores/${params.onlineStoreId}/default-catalogs`,
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
   * @param params The `OnlineStoresService.CreateOnlineStoreDefaultCatalogParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `body`: The request body.
   */
  createOnlineStoreDefaultCatalog(params: OnlineStoresService.CreateOnlineStoreDefaultCatalogParams): __Observable<null> {
    return this.createOnlineStoreDefaultCatalogResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `OnlineStoresService.DeleteOnlineStoreDefaultCatalogParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `id`: The unique numeric ID for identifying the default catalog.
   */
  deleteOnlineStoreDefaultCatalogResponse(params: OnlineStoresService.DeleteOnlineStoreDefaultCatalogParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/rest/admin/v2/online-stores/${params.onlineStoreId}/default-catalogs/${params.id}`,
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
   * @param params The `OnlineStoresService.DeleteOnlineStoreDefaultCatalogParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `id`: The unique numeric ID for identifying the default catalog.
   */
  deleteOnlineStoreDefaultCatalog(params: OnlineStoresService.DeleteOnlineStoreDefaultCatalogParams): __Observable<null> {
    return this.deleteOnlineStoreDefaultCatalogResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `OnlineStoresService.GetOnlineStoreDescriptionsParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `dataLanguageIds`: The data language IDs.
   *
   * @return The operation is successful.
   */
  getOnlineStoreDescriptionsResponse(params: OnlineStoresService.GetOnlineStoreDescriptionsParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{description?: string, id?: number, name?: string, onlineStoreId?: number}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.dataLanguageIds != null) __params = __params.set('dataLanguageIds', params.dataLanguageIds.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/online-stores/${params.onlineStoreId}/descriptions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number, items?: Array<{description?: string, id?: number, name?: string, onlineStoreId?: number}>}>;
      })
    );
  }

  /**
   * @param params The `OnlineStoresService.GetOnlineStoreDescriptionsParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `dataLanguageIds`: The data language IDs.
   *
   * @return The operation is successful.
   */
  getOnlineStoreDescriptions(params: OnlineStoresService.GetOnlineStoreDescriptionsParams): __Observable<{count?: number, items?: Array<{description?: string, id?: number, name?: string, onlineStoreId?: number}>}> {
    return this.getOnlineStoreDescriptionsResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{description?: string, id?: number, name?: string, onlineStoreId?: number}>})
    );
  }

  /**
   * @param params The `OnlineStoresService.CreateOnlineStoreDescriptionParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `body`: The request body.
   */
  createOnlineStoreDescriptionResponse(params: OnlineStoresService.CreateOnlineStoreDescriptionParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/online-stores/${params.onlineStoreId}/descriptions`,
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
   * @param params The `OnlineStoresService.CreateOnlineStoreDescriptionParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `body`: The request body.
   */
  createOnlineStoreDescription(params: OnlineStoresService.CreateOnlineStoreDescriptionParams): __Observable<null> {
    return this.createOnlineStoreDescriptionResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `OnlineStoresService.GetOnlineStoreDescriptionParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `id`: The integer for identifying the language of the description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
   *
   * @return The operation is successful.
   */
  getOnlineStoreDescriptionResponse(params: OnlineStoresService.GetOnlineStoreDescriptionParams): __Observable<__StrictHttpResponse<{description?: string, id?: number, name?: string, onlineStoreId?: number}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/online-stores/${params.onlineStoreId}/descriptions/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{description?: string, id?: number, name?: string, onlineStoreId?: number}>;
      })
    );
  }

  /**
   * @param params The `OnlineStoresService.GetOnlineStoreDescriptionParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `id`: The integer for identifying the language of the description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
   *
   * @return The operation is successful.
   */
  getOnlineStoreDescription(params: OnlineStoresService.GetOnlineStoreDescriptionParams): __Observable<{description?: string, id?: number, name?: string, onlineStoreId?: number}> {
    return this.getOnlineStoreDescriptionResponse(params).pipe(
      __map(_r => _r.body as {description?: string, id?: number, name?: string, onlineStoreId?: number})
    );
  }

  /**
   * @param params The `OnlineStoresService.UpdateOnlineStoreDescriptionParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `id`: The integer for identifying the language of the description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
   *
   * - `body`: The request body.
   */
  updateOnlineStoreDescriptionResponse(params: OnlineStoresService.UpdateOnlineStoreDescriptionParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/rest/admin/v2/online-stores/${params.onlineStoreId}/descriptions/${params.id}`,
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
   * @param params The `OnlineStoresService.UpdateOnlineStoreDescriptionParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `id`: The integer for identifying the language of the description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
   *
   * - `body`: The request body.
   */
  updateOnlineStoreDescription(params: OnlineStoresService.UpdateOnlineStoreDescriptionParams): __Observable<null> {
    return this.updateOnlineStoreDescriptionResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param onlineStoreId The unique numeric ID for identifying the online store.
   * @return The operation is successful.
   */
  getOnlineStoreLanguagesResponse(onlineStoreId: number): __Observable<__StrictHttpResponse<{defaultLanguageId?: number, languageIds?: Array<number>, onlineStoreId?: number}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/online-stores/${onlineStoreId}/languages`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{defaultLanguageId?: number, languageIds?: Array<number>, onlineStoreId?: number}>;
      })
    );
  }

  /**
   * @param onlineStoreId The unique numeric ID for identifying the online store.
   * @return The operation is successful.
   */
  getOnlineStoreLanguages(onlineStoreId: number): __Observable<{defaultLanguageId?: number, languageIds?: Array<number>, onlineStoreId?: number}> {
    return this.getOnlineStoreLanguagesResponse(onlineStoreId).pipe(
      __map(_r => _r.body as {defaultLanguageId?: number, languageIds?: Array<number>, onlineStoreId?: number})
    );
  }

  /**
   * @param params The `OnlineStoresService.UpdateOnlineStoreLanguagesParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `body`: The request body.
   */
  updateOnlineStoreLanguagesResponse(params: OnlineStoresService.UpdateOnlineStoreLanguagesParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/rest/admin/v2/online-stores/${params.onlineStoreId}/languages`,
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
   * @param params The `OnlineStoresService.UpdateOnlineStoreLanguagesParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `body`: The request body.
   */
  updateOnlineStoreLanguages(params: OnlineStoresService.UpdateOnlineStoreLanguagesParams): __Observable<null> {
    return this.updateOnlineStoreLanguagesResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `OnlineStoresService.GetOnlineStoreLocationsParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `dataLanguageIds`: The data language IDs.
   *
   * @return The operation is successful.
   */
  getOnlineStoreLocationsResponse(params: OnlineStoresService.GetOnlineStoreLocationsParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{addressLine1?: string, addressLine2?: string, addressLine3?: string, city?: string, country?: string, email1?: string, email2?: string, fax1?: string, fax2?: string, id?: number, languageId?: number, name?: string, onlineStoreId?: number, phone1?: string, phone2?: string, postalCode?: string, stateOrProvince?: string}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.dataLanguageIds != null) __params = __params.set('dataLanguageIds', params.dataLanguageIds.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/online-stores/${params.onlineStoreId}/locations`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number, items?: Array<{addressLine1?: string, addressLine2?: string, addressLine3?: string, city?: string, country?: string, email1?: string, email2?: string, fax1?: string, fax2?: string, id?: number, languageId?: number, name?: string, onlineStoreId?: number, phone1?: string, phone2?: string, postalCode?: string, stateOrProvince?: string}>}>;
      })
    );
  }

  /**
   * @param params The `OnlineStoresService.GetOnlineStoreLocationsParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `dataLanguageIds`: The data language IDs.
   *
   * @return The operation is successful.
   */
  getOnlineStoreLocations(params: OnlineStoresService.GetOnlineStoreLocationsParams): __Observable<{count?: number, items?: Array<{addressLine1?: string, addressLine2?: string, addressLine3?: string, city?: string, country?: string, email1?: string, email2?: string, fax1?: string, fax2?: string, id?: number, languageId?: number, name?: string, onlineStoreId?: number, phone1?: string, phone2?: string, postalCode?: string, stateOrProvince?: string}>}> {
    return this.getOnlineStoreLocationsResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{addressLine1?: string, addressLine2?: string, addressLine3?: string, city?: string, country?: string, email1?: string, email2?: string, fax1?: string, fax2?: string, id?: number, languageId?: number, name?: string, onlineStoreId?: number, phone1?: string, phone2?: string, postalCode?: string, stateOrProvince?: string}>})
    );
  }

  /**
   * @param params The `OnlineStoresService.CreateOnlineStoreLocationParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `body`: The request body.
   */
  createOnlineStoreLocationResponse(params: OnlineStoresService.CreateOnlineStoreLocationParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/online-stores/${params.onlineStoreId}/locations`,
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
   * @param params The `OnlineStoresService.CreateOnlineStoreLocationParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `body`: The request body.
   */
  createOnlineStoreLocation(params: OnlineStoresService.CreateOnlineStoreLocationParams): __Observable<null> {
    return this.createOnlineStoreLocationResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `OnlineStoresService.DeleteOnlineStoreLocationParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `id`: The unique numeric ID for identifying online store location ID.
   */
  deleteOnlineStoreLocationResponse(params: OnlineStoresService.DeleteOnlineStoreLocationParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/rest/admin/v2/online-stores/${params.onlineStoreId}/locations/${params.id}`,
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
   * @param params The `OnlineStoresService.DeleteOnlineStoreLocationParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `id`: The unique numeric ID for identifying online store location ID.
   */
  deleteOnlineStoreLocation(params: OnlineStoresService.DeleteOnlineStoreLocationParams): __Observable<null> {
    return this.deleteOnlineStoreLocationResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `OnlineStoresService.UpdateOnlineStoreLocationParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `id`: The unique numeric ID for identifying online store location ID.
   *
   * - `body`: The request body.
   */
  updateOnlineStoreLocationResponse(params: OnlineStoresService.UpdateOnlineStoreLocationParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/rest/admin/v2/online-stores/${params.onlineStoreId}/locations/${params.id}`,
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
   * @param params The `OnlineStoresService.UpdateOnlineStoreLocationParams` containing the following parameters:
   *
   * - `onlineStoreId`: The unique numeric ID for identifying the online store.
   *
   * - `id`: The unique numeric ID for identifying online store location ID.
   *
   * - `body`: The request body.
   */
  updateOnlineStoreLocation(params: OnlineStoresService.UpdateOnlineStoreLocationParams): __Observable<null> {
    return this.updateOnlineStoreLocationResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param onlineStoreId The unique numeric ID for identifying the online store.
   * @return The operation is successful.
   */
  getOnlineStoreRelatedStoresResponse(onlineStoreId: number): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{id?: number, onlineStoreId?: number, relationshipTypeId?: number, sequence?: number, state?: number}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/online-stores/${onlineStoreId}/related-stores`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number, items?: Array<{id?: number, onlineStoreId?: number, relationshipTypeId?: number, sequence?: number, state?: number}>}>;
      })
    );
  }

  /**
   * @param onlineStoreId The unique numeric ID for identifying the online store.
   * @return The operation is successful.
   */
  getOnlineStoreRelatedStores(onlineStoreId: number): __Observable<{count?: number, items?: Array<{id?: number, onlineStoreId?: number, relationshipTypeId?: number, sequence?: number, state?: number}>}> {
    return this.getOnlineStoreRelatedStoresResponse(onlineStoreId).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{id?: number, onlineStoreId?: number, relationshipTypeId?: number, sequence?: number, state?: number}>})
    );
  }
}

module OnlineStoresService {

  /**
   * Parameters for getOnlineStores
   */
  export interface GetOnlineStoresParams {

    /**
     * The usage.
     */
    usage: string;

    /**
     * The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
     */
    offset?: number;

    /**
     * The maximum number of records to return.
     */
    limit?: number;
  }

  /**
   * Parameters for getOnlineStoresByIdentifier
   */
  export interface GetOnlineStoresByIdentifierParams {

    /**
     * The usage.
     */
    usage: string;

    /**
     * The identifier or name for identifying the online store.
     */
    identifier: string;

    /**
     * The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
     */
    offset?: number;

    /**
     * The maximum number of records to return.
     */
    limit?: number;
  }

  /**
   * Parameters for getOnlineStoresByRelatedStoreId
   */
  export interface GetOnlineStoresByRelatedStoreIdParams {

    /**
     * The usage.
     */
    usage: string;

    /**
     * The unique numeric ID of the related online store. The returned online stores are related to this online store.
     */
    relatedStoreId: number;

    /**
     * The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
     */
    offset?: number;

    /**
     * The maximum number of records to return.
     */
    limit?: number;
  }

  /**
   * Parameters for getOnlineStoreContacts
   */
  export interface GetOnlineStoreContactsParams {

    /**
     * The unique numeric ID for identifying the online store.
     */
    onlineStoreId: number;

    /**
     * The data language IDs.
     */
    dataLanguageIds?: string;
  }

  /**
   * Parameters for createOnlineStoreContact
   */
  export interface CreateOnlineStoreContactParams {

    /**
     * The unique numeric ID for identifying the online store.
     */
    onlineStoreId: number;

    /**
     * The request body.
     */
    body: {addressLine1?: string, addressLine2?: string, addressLine3?: string, city?: string, country?: string, email1?: string, email2?: string, fax1?: string, fax2?: string, id?: number, languageId?: number, name?: string, onlineStoreId?: number, phone1?: string, phone2?: string, postalCode?: string, stateOrProvince?: string};
  }

  /**
   * Parameters for deleteOnlineStoreContact
   */
  export interface DeleteOnlineStoreContactParams {

    /**
     * The unique numeric ID for identifying the online store.
     */
    onlineStoreId: number;

    /**
     * The unique numeric ID for identifying online store contact ID.
     */
    id: number;
  }

  /**
   * Parameters for updateOnlineStoreContact
   */
  export interface UpdateOnlineStoreContactParams {

    /**
     * The unique numeric ID for identifying the online store.
     */
    onlineStoreId: number;

    /**
     * The unique numeric ID for identifying online store contact ID.
     */
    id: number;

    /**
     * The request body.
     */
    body: {addressLine1?: string, addressLine2?: string, addressLine3?: string, city?: string, country?: string, email1?: string, email2?: string, fax1?: string, fax2?: string, id?: number, languageId?: number, name?: string, onlineStoreId?: number, phone1?: string, phone2?: string, postalCode?: string, stateOrProvince?: string};
  }

  /**
   * Parameters for updateOnlineStoreCurrencies
   */
  export interface UpdateOnlineStoreCurrenciesParams {

    /**
     * The unique numeric ID for identifying the online store.
     */
    onlineStoreId: number;

    /**
     * The request body.
     */
    body: {currencies?: Array<string>, defaultCurrency?: string, onlineStoreId?: number};
  }

  /**
   * Parameters for createOnlineStoreDefaultCatalog
   */
  export interface CreateOnlineStoreDefaultCatalogParams {

    /**
     * The unique numeric ID for identifying the online store.
     */
    onlineStoreId: number;

    /**
     * The request body.
     */
    body: {catalogId?: number, id?: number, onlineStoreId?: number, storeId?: number};
  }

  /**
   * Parameters for deleteOnlineStoreDefaultCatalog
   */
  export interface DeleteOnlineStoreDefaultCatalogParams {

    /**
     * The unique numeric ID for identifying the online store.
     */
    onlineStoreId: number;

    /**
     * The unique numeric ID for identifying the default catalog.
     */
    id: number;
  }

  /**
   * Parameters for getOnlineStoreDescriptions
   */
  export interface GetOnlineStoreDescriptionsParams {

    /**
     * The unique numeric ID for identifying the online store.
     */
    onlineStoreId: number;

    /**
     * The data language IDs.
     */
    dataLanguageIds?: string;
  }

  /**
   * Parameters for createOnlineStoreDescription
   */
  export interface CreateOnlineStoreDescriptionParams {

    /**
     * The unique numeric ID for identifying the online store.
     */
    onlineStoreId: number;

    /**
     * The request body.
     */
    body: {description?: string, id?: number, name?: string, onlineStoreId?: number};
  }

  /**
   * Parameters for getOnlineStoreDescription
   */
  export interface GetOnlineStoreDescriptionParams {

    /**
     * The unique numeric ID for identifying the online store.
     */
    onlineStoreId: number;

    /**
     * The integer for identifying the language of the description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
     */
    id: number;
  }

  /**
   * Parameters for updateOnlineStoreDescription
   */
  export interface UpdateOnlineStoreDescriptionParams {

    /**
     * The unique numeric ID for identifying the online store.
     */
    onlineStoreId: number;

    /**
     * The integer for identifying the language of the description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
     */
    id: number;

    /**
     * The request body.
     */
    body: {description?: string, id?: number, name?: string, onlineStoreId?: number};
  }

  /**
   * Parameters for updateOnlineStoreLanguages
   */
  export interface UpdateOnlineStoreLanguagesParams {

    /**
     * The unique numeric ID for identifying the online store.
     */
    onlineStoreId: number;

    /**
     * The request body.
     */
    body: {defaultLanguageId?: number, languageIds?: Array<number>, onlineStoreId?: number};
  }

  /**
   * Parameters for getOnlineStoreLocations
   */
  export interface GetOnlineStoreLocationsParams {

    /**
     * The unique numeric ID for identifying the online store.
     */
    onlineStoreId: number;

    /**
     * The data language IDs.
     */
    dataLanguageIds?: string;
  }

  /**
   * Parameters for createOnlineStoreLocation
   */
  export interface CreateOnlineStoreLocationParams {

    /**
     * The unique numeric ID for identifying the online store.
     */
    onlineStoreId: number;

    /**
     * The request body.
     */
    body: {addressLine1?: string, addressLine2?: string, addressLine3?: string, city?: string, country?: string, email1?: string, email2?: string, fax1?: string, fax2?: string, id?: number, languageId?: number, name?: string, onlineStoreId?: number, phone1?: string, phone2?: string, postalCode?: string, stateOrProvince?: string};
  }

  /**
   * Parameters for deleteOnlineStoreLocation
   */
  export interface DeleteOnlineStoreLocationParams {

    /**
     * The unique numeric ID for identifying the online store.
     */
    onlineStoreId: number;

    /**
     * The unique numeric ID for identifying online store location ID.
     */
    id: number;
  }

  /**
   * Parameters for updateOnlineStoreLocation
   */
  export interface UpdateOnlineStoreLocationParams {

    /**
     * The unique numeric ID for identifying the online store.
     */
    onlineStoreId: number;

    /**
     * The unique numeric ID for identifying online store location ID.
     */
    id: number;

    /**
     * The request body.
     */
    body: {addressLine1?: string, addressLine2?: string, addressLine3?: string, city?: string, country?: string, email1?: string, email2?: string, fax1?: string, fax2?: string, id?: number, languageId?: number, name?: string, onlineStoreId?: number, phone1?: string, phone2?: string, postalCode?: string, stateOrProvince?: string};
  }
}

export { OnlineStoresService }
