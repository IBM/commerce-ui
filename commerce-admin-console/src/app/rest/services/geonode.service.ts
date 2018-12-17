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

import { geonode_geonode } from '../models/geonode-_geonode';
import { Empty } from '../models/empty';

/**
 * This class provides RESTful services to get geo node details. It performs the service by delegating to the GeoNode BOD service.
 */
@Injectable()
class GeonodeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Gets the geo nodes by the parent geo node unique ID. The response schema will flatten the result if a single object is returned in the list.
   * @param params The `GeonodeService.GeonodefindGeoByParentGeoIdParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `parentgeoid`: The parent geo node identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  GeonodefindGeoByParentGeoIdResponse(params: GeonodeService.GeonodefindGeoByParentGeoIdParams): Observable<HttpResponse<geonode_geonode>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/geonode/byParentGeoNode/${params.parentgeoid}`,
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
        let _body: geonode_geonode = null;
        _body = _resp.body as geonode_geonode;
        return _resp.clone({body: _body}) as HttpResponse<geonode_geonode>;
      })
    );
  }

  /**
   * Gets the geo nodes by the parent geo node unique ID. The response schema will flatten the result if a single object is returned in the list.
   * @param params The `GeonodeService.GeonodefindGeoByParentGeoIdParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `parentgeoid`: The parent geo node identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  GeonodefindGeoByParentGeoId(params: GeonodeService.GeonodefindGeoByParentGeoIdParams): Observable<geonode_geonode> {
    return this.GeonodefindGeoByParentGeoIdResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * Finds geo nodes based on query name. See each query for details on input and output.
   * @param params The `GeonodeService.GeonodefindByQueryParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `q`: The query name.
   *
   * @return The requested completed successfully.
   */
  GeonodefindByQueryResponse(params: GeonodeService.GeonodefindByQueryParams): Observable<HttpResponse<Empty>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.q != null) __params = __params.set('q', params.q.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/geonode`,
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
        let _body: Empty = null;
        _body = _resp.body as Empty;
        return _resp.clone({body: _body}) as HttpResponse<Empty>;
      })
    );
  }

  /**
   * Finds geo nodes based on query name. See each query for details on input and output.
   * @param params The `GeonodeService.GeonodefindByQueryParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `q`: The query name.
   *
   * @return The requested completed successfully.
   */
  GeonodefindByQuery(params: GeonodeService.GeonodefindByQueryParams): Observable<Empty> {
    return this.GeonodefindByQueryResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * Gets the top geo nodes for the site. The response schema will flatten the result if a single object is returned in the list.
   * @param params The `GeonodeService.GeonodefindTopGeoNodesParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  GeonodefindTopGeoNodesResponse(params: GeonodeService.GeonodefindTopGeoNodesParams): Observable<HttpResponse<geonode_geonode>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.responseFormat != null) __params = __params.set('responseFormat', params.responseFormat.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/geonode/byTopGeoNode`,
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
        let _body: geonode_geonode = null;
        _body = _resp.body as geonode_geonode;
        return _resp.clone({body: _body}) as HttpResponse<geonode_geonode>;
      })
    );
  }

  /**
   * Gets the top geo nodes for the site. The response schema will flatten the result if a single object is returned in the list.
   * @param params The `GeonodeService.GeonodefindTopGeoNodesParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `responseFormat`: The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
   *
   * @return The requested completed successfully.
   */
  GeonodefindTopGeoNodes(params: GeonodeService.GeonodefindTopGeoNodesParams): Observable<geonode_geonode> {
    return this.GeonodefindTopGeoNodesResponse(params).pipe(
      map(_r => _r.body)
    );
  }
}

module GeonodeService {

  /**
   * Parameters for GeonodefindGeoByParentGeoId
   */
  export interface GeonodefindGeoByParentGeoIdParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The parent geo node identifier.
     */
    parentgeoid: string;

    /**
     * The response format. Valid values are json and xml. If the request contains an input body, it must use the format specified in responseFormat. If the responseFormat is not specified, the accept  HTTP header determines the format of the response. If the accept  HTTP header is not specified then default response format is json.
     */
    responseFormat?: 'xml' | 'json';
  }

  /**
   * Parameters for GeonodefindByQuery
   */
  export interface GeonodefindByQueryParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The query name.
     */
    q: 'byGeoNodeTypeAndName';
  }

  /**
   * Parameters for GeonodefindTopGeoNodes
   */
  export interface GeonodefindTopGeoNodesParams {

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

export { GeonodeService }