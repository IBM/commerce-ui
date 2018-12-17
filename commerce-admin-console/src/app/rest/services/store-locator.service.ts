/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpRequest, HttpResponse,
  HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';

import { storelocator_storelocator } from '../models/storelocator-_storelocator';

/**
 * This class provides RESTful services to get store location details. It performs the service by delegating to the PhysicalStore and GeoNode BOD services.
 */
@Injectable()
class StoreLocatorService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Gets store location information by a specified location.
   * @param params The `StoreLocatorService.StoreLocatorfindGeoNodeByGeoLocationParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `state`: The state.
   *
   * - `siteLevelStoreSearch`: If it is 'true', a site level physical search is performed.  Otherwise, the physical store search is performed at the web store level. By default, it is 'true'.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `radiusUOM`: The radius unit of measure.
   *
   * - `radius`: The radius.
   *
   * - `prov`: The province.
   *
   * - `pageSize`: Page size. Used to limit the amount of data returned by a query. Valid values are integers starting with 1. Use pageSize with pageNumber.
   *
   * - `pageNumber`: Page number. Valid values are positive integers starting at 1. Use pageNumber with pageSize.
   *
   * - `country`: The country.
   *
   * - `city`: The city.
   *
   * - `Type`: The physical store attribute name to describe the type of the store.
   *
   * - `BeautyCenter`: The physical store attribute name that describes whether the store is a beauty center.
   *
   * @return The requested completed successfully.
   */
  StoreLocatorfindGeoNodeByGeoLocationResponse(params: StoreLocatorService.StoreLocatorfindGeoNodeByGeoLocationParams): Observable<HttpResponse<storelocator_storelocator>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.state != null) __params = __params.set('state', params.state.toString());
    if (params.siteLevelStoreSearch != null) __params = __params.set('siteLevelStoreSearch', params.siteLevelStoreSearch.toString());
    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    if (params.radiusUOM != null) __params = __params.set('radiusUOM', params.radiusUOM.toString());
    if (params.radius != null) __params = __params.set('radius', params.radius.toString());
    if (params.prov != null) __params = __params.set('prov', params.prov.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.pageNumber != null) __params = __params.set('pageNumber', params.pageNumber.toString());
    if (params.country != null) __params = __params.set('country', params.country.toString());
    if (params.city != null) __params = __params.set('city', params.city.toString());
    if (params.Type != null) __params = __params.set('Type', params.Type.toString());
    if (params.BeautyCenter != null) __params = __params.set('BeautyCenter', params.BeautyCenter.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/storelocator/byLocation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: storelocator_storelocator = null;
        _body = _resp.body as storelocator_storelocator;
        return _resp.clone({body: _body}) as HttpResponse<storelocator_storelocator>;
      })
    );
  }

  /**
   * Gets store location information by a specified location.
   * @param params The `StoreLocatorService.StoreLocatorfindGeoNodeByGeoLocationParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `state`: The state.
   *
   * - `siteLevelStoreSearch`: If it is 'true', a site level physical search is performed.  Otherwise, the physical store search is performed at the web store level. By default, it is 'true'.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `radiusUOM`: The radius unit of measure.
   *
   * - `radius`: The radius.
   *
   * - `prov`: The province.
   *
   * - `pageSize`: Page size. Used to limit the amount of data returned by a query. Valid values are integers starting with 1. Use pageSize with pageNumber.
   *
   * - `pageNumber`: Page number. Valid values are positive integers starting at 1. Use pageNumber with pageSize.
   *
   * - `country`: The country.
   *
   * - `city`: The city.
   *
   * - `Type`: The physical store attribute name to describe the type of the store.
   *
   * - `BeautyCenter`: The physical store attribute name that describes whether the store is a beauty center.
   *
   * @return The requested completed successfully.
   */
  StoreLocatorfindGeoNodeByGeoLocation(params: StoreLocatorService.StoreLocatorfindGeoNodeByGeoLocationParams): Observable<storelocator_storelocator> {
    return this.StoreLocatorfindGeoNodeByGeoLocationResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * Gets store location information by a store unique ID.
   * @param params The `StoreLocatorService.StoreLocatorfindByStoreUniqueIdParams` containing the following parameters:
   *
   * - `uniqueId`: The unique identifier.
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `pageSize`: Page size. Used to limit the amount of data returned by a query. Valid values are integers starting with 1. Use pageSize with pageNumber.
   *
   * - `pageNumber`: Page number. Valid values are positive integers starting at 1. Use pageNumber with pageSize.
   *
   * @return The requested completed successfully.
   */
  StoreLocatorfindByStoreUniqueIdResponse(params: StoreLocatorService.StoreLocatorfindByStoreUniqueIdParams): Observable<HttpResponse<storelocator_storelocator>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.pageNumber != null) __params = __params.set('pageNumber', params.pageNumber.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/storelocator/byStoreId/${params.uniqueId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: storelocator_storelocator = null;
        _body = _resp.body as storelocator_storelocator;
        return _resp.clone({body: _body}) as HttpResponse<storelocator_storelocator>;
      })
    );
  }

  /**
   * Gets store location information by a store unique ID.
   * @param params The `StoreLocatorService.StoreLocatorfindByStoreUniqueIdParams` containing the following parameters:
   *
   * - `uniqueId`: The unique identifier.
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `pageSize`: Page size. Used to limit the amount of data returned by a query. Valid values are integers starting with 1. Use pageSize with pageNumber.
   *
   * - `pageNumber`: Page number. Valid values are positive integers starting at 1. Use pageNumber with pageSize.
   *
   * @return The requested completed successfully.
   */
  StoreLocatorfindByStoreUniqueId(params: StoreLocatorService.StoreLocatorfindByStoreUniqueIdParams): Observable<storelocator_storelocator> {
    return this.StoreLocatorfindByStoreUniqueIdResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * Gets store location information by one to n store unique IDs.
   * @param params The `StoreLocatorService.StoreLocatorfindByStoreUniqueIdsParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `physicalStoreId`: A list of physical store unique identifiers.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `pageSize`: Page size. Used to limit the amount of data returned by a query. Valid values are integers starting with 1. Use pageSize with pageNumber.
   *
   * - `pageNumber`: Page number. Valid values are positive integers starting at 1. Use pageNumber with pageSize.
   *
   * @return The requested completed successfully.
   */
  StoreLocatorfindByStoreUniqueIdsResponse(params: StoreLocatorService.StoreLocatorfindByStoreUniqueIdsParams): Observable<HttpResponse<storelocator_storelocator>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    (params.physicalStoreId || []).forEach((val, index) => {if (val != null) __params = __params.append('physicalStoreId', val.toString())});
    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.pageNumber != null) __params = __params.set('pageNumber', params.pageNumber.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/storelocator/byStoreIds`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: storelocator_storelocator = null;
        _body = _resp.body as storelocator_storelocator;
        return _resp.clone({body: _body}) as HttpResponse<storelocator_storelocator>;
      })
    );
  }

  /**
   * Gets store location information by one to n store unique IDs.
   * @param params The `StoreLocatorService.StoreLocatorfindByStoreUniqueIdsParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `physicalStoreId`: A list of physical store unique identifiers.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `pageSize`: Page size. Used to limit the amount of data returned by a query. Valid values are integers starting with 1. Use pageSize with pageNumber.
   *
   * - `pageNumber`: Page number. Valid values are positive integers starting at 1. Use pageNumber with pageSize.
   *
   * @return The requested completed successfully.
   */
  StoreLocatorfindByStoreUniqueIds(params: StoreLocatorService.StoreLocatorfindByStoreUniqueIdsParams): Observable<storelocator_storelocator> {
    return this.StoreLocatorfindByStoreUniqueIdsResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * Gets store location information by specified coordinates.
   * @param params The `StoreLocatorService.StoreLocatorfindStoresParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `longitude`: The longitude.
   *
   * - `latitude`: The latitude.
   *
   * - `siteLevelStoreSearch`: If it is 'true', a site level physical search is performed.  Otherwise, the physical store search is performed at the web store level. By default, it is 'true'.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `radiusUOM`: The radius unit of measure.
   *
   * - `radius`: The radius.
   *
   * - `maxItems`: The maximum number of stores to return.
   *
   * - `Type`: The physical store attribute name to describe the type of the store.
   *
   * - `BeautyCenter`: The physical store attribute name that describes whether the store is a beauty center.
   *
   * @return The requested completed successfully.
   */
  StoreLocatorfindStoresResponse(params: StoreLocatorService.StoreLocatorfindStoresParams): Observable<HttpResponse<storelocator_storelocator>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    if (params.siteLevelStoreSearch != null) __params = __params.set('siteLevelStoreSearch', params.siteLevelStoreSearch.toString());
    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    if (params.radiusUOM != null) __params = __params.set('radiusUOM', params.radiusUOM.toString());
    if (params.radius != null) __params = __params.set('radius', params.radius.toString());
    if (params.maxItems != null) __params = __params.set('maxItems', params.maxItems.toString());
    if (params.Type != null) __params = __params.set('Type', params.Type.toString());
    if (params.BeautyCenter != null) __params = __params.set('BeautyCenter', params.BeautyCenter.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/storelocator/latitude/${params.latitude}/longitude/${params.longitude}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: storelocator_storelocator = null;
        _body = _resp.body as storelocator_storelocator;
        return _resp.clone({body: _body}) as HttpResponse<storelocator_storelocator>;
      })
    );
  }

  /**
   * Gets store location information by specified coordinates.
   * @param params The `StoreLocatorService.StoreLocatorfindStoresParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `longitude`: The longitude.
   *
   * - `latitude`: The latitude.
   *
   * - `siteLevelStoreSearch`: If it is 'true', a site level physical search is performed.  Otherwise, the physical store search is performed at the web store level. By default, it is 'true'.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `radiusUOM`: The radius unit of measure.
   *
   * - `radius`: The radius.
   *
   * - `maxItems`: The maximum number of stores to return.
   *
   * - `Type`: The physical store attribute name to describe the type of the store.
   *
   * - `BeautyCenter`: The physical store attribute name that describes whether the store is a beauty center.
   *
   * @return The requested completed successfully.
   */
  StoreLocatorfindStores(params: StoreLocatorService.StoreLocatorfindStoresParams): Observable<storelocator_storelocator> {
    return this.StoreLocatorfindStoresResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * Gets store location information by a geo node unique ID.
   * @param params The `StoreLocatorService.StoreLocatorfindGeoNodeByGeoIdParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `geoId`: The geo node unique identifier.
   *
   * - `siteLevelStoreSearch`: If it is 'true', a site level physical search is performed.  Otherwise, the physical store search is performed at the web store level. By default, it is 'true'.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `pageSize`: Page size. Used to limit the amount of data returned by a query. Valid values are integers starting with 1. Use pageSize with pageNumber.
   *
   * - `pageNumber`: Page number. Valid values are positive integers starting at 1. Use pageNumber with pageSize.
   *
   * - `Type`: The physical store attribute name to describe the type of the store.
   *
   * - `BeautyCenter`: The physical store attribute name that describes whether the store is a beauty center.
   *
   * @return The requested completed successfully.
   */
  StoreLocatorfindGeoNodeByGeoIdResponse(params: StoreLocatorService.StoreLocatorfindGeoNodeByGeoIdParams): Observable<HttpResponse<storelocator_storelocator>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.siteLevelStoreSearch != null) __params = __params.set('siteLevelStoreSearch', params.siteLevelStoreSearch.toString());
    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.pageNumber != null) __params = __params.set('pageNumber', params.pageNumber.toString());
    if (params.Type != null) __params = __params.set('Type', params.Type.toString());
    if (params.BeautyCenter != null) __params = __params.set('BeautyCenter', params.BeautyCenter.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/storelocator/byGeoNode/${params.geoId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: storelocator_storelocator = null;
        _body = _resp.body as storelocator_storelocator;
        return _resp.clone({body: _body}) as HttpResponse<storelocator_storelocator>;
      })
    );
  }

  /**
   * Gets store location information by a geo node unique ID.
   * @param params The `StoreLocatorService.StoreLocatorfindGeoNodeByGeoIdParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `geoId`: The geo node unique identifier.
   *
   * - `siteLevelStoreSearch`: If it is 'true', a site level physical search is performed.  Otherwise, the physical store search is performed at the web store level. By default, it is 'true'.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * - `pageSize`: Page size. Used to limit the amount of data returned by a query. Valid values are integers starting with 1. Use pageSize with pageNumber.
   *
   * - `pageNumber`: Page number. Valid values are positive integers starting at 1. Use pageNumber with pageSize.
   *
   * - `Type`: The physical store attribute name to describe the type of the store.
   *
   * - `BeautyCenter`: The physical store attribute name that describes whether the store is a beauty center.
   *
   * @return The requested completed successfully.
   */
  StoreLocatorfindGeoNodeByGeoId(params: StoreLocatorService.StoreLocatorfindGeoNodeByGeoIdParams): Observable<storelocator_storelocator> {
    return this.StoreLocatorfindGeoNodeByGeoIdResponse(params).pipe(
      map(_r => _r.body)
    );
  }
}

module StoreLocatorService {

  /**
   * Parameters for StoreLocatorfindGeoNodeByGeoLocation
   */
  export interface StoreLocatorfindGeoNodeByGeoLocationParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The state.
     */
    state?: string;

    /**
     * If it is 'true', a site level physical search is performed.  Otherwise, the physical store search is performed at the web store level. By default, it is 'true'.
     */
    siteLevelStoreSearch?: 'true' | 'false';

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';

    /**
     * The radius unit of measure.
     */
    radiusUOM?: string;

    /**
     * The radius.
     */
    radius?: string;

    /**
     * The province.
     */
    prov?: string;

    /**
     * Page size. Used to limit the amount of data returned by a query. Valid values are integers starting with 1. Use pageSize with pageNumber.
     */
    pageSize?: number;

    /**
     * Page number. Valid values are positive integers starting at 1. Use pageNumber with pageSize.
     */
    pageNumber?: number;

    /**
     * The country.
     */
    country?: string;

    /**
     * The city.
     */
    city?: string;

    /**
     * The physical store attribute name to describe the type of the store.
     */
    Type?: string;

    /**
     * The physical store attribute name that describes whether the store is a beauty center.
     */
    BeautyCenter?: string;
  }

  /**
   * Parameters for StoreLocatorfindByStoreUniqueId
   */
  export interface StoreLocatorfindByStoreUniqueIdParams {

    /**
     * The unique identifier.
     */
    uniqueId: string;

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';

    /**
     * Page size. Used to limit the amount of data returned by a query. Valid values are integers starting with 1. Use pageSize with pageNumber.
     */
    pageSize?: number;

    /**
     * Page number. Valid values are positive integers starting at 1. Use pageNumber with pageSize.
     */
    pageNumber?: number;
  }

  /**
   * Parameters for StoreLocatorfindByStoreUniqueIds
   */
  export interface StoreLocatorfindByStoreUniqueIdsParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * A list of physical store unique identifiers.
     */
    physicalStoreId: Array<string>;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';

    /**
     * Page size. Used to limit the amount of data returned by a query. Valid values are integers starting with 1. Use pageSize with pageNumber.
     */
    pageSize?: number;

    /**
     * Page number. Valid values are positive integers starting at 1. Use pageNumber with pageSize.
     */
    pageNumber?: number;
  }

  /**
   * Parameters for StoreLocatorfindStores
   */
  export interface StoreLocatorfindStoresParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The longitude.
     */
    longitude: string;

    /**
     * The latitude.
     */
    latitude: string;

    /**
     * If it is 'true', a site level physical search is performed.  Otherwise, the physical store search is performed at the web store level. By default, it is 'true'.
     */
    siteLevelStoreSearch?: 'true' | 'false';

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';

    /**
     * The radius unit of measure.
     */
    radiusUOM?: string;

    /**
     * The radius.
     */
    radius?: string;

    /**
     * The maximum number of stores to return.
     */
    maxItems?: string;

    /**
     * The physical store attribute name to describe the type of the store.
     */
    Type?: string;

    /**
     * The physical store attribute name that describes whether the store is a beauty center.
     */
    BeautyCenter?: string;
  }

  /**
   * Parameters for StoreLocatorfindGeoNodeByGeoId
   */
  export interface StoreLocatorfindGeoNodeByGeoIdParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The geo node unique identifier.
     */
    geoId: string;

    /**
     * If it is 'true', a site level physical search is performed.  Otherwise, the physical store search is performed at the web store level. By default, it is 'true'.
     */
    siteLevelStoreSearch?: 'true' | 'false';

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';

    /**
     * Page size. Used to limit the amount of data returned by a query. Valid values are integers starting with 1. Use pageSize with pageNumber.
     */
    pageSize?: number;

    /**
     * Page number. Valid values are positive integers starting at 1. Use pageNumber with pageSize.
     */
    pageNumber?: number;

    /**
     * The physical store attribute name to describe the type of the store.
     */
    Type?: string;

    /**
     * The physical store attribute name that describes whether the store is a beauty center.
     */
    BeautyCenter?: string;
  }
}

export { StoreLocatorService }