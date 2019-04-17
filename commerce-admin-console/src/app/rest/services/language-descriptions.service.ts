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
class LanguageDescriptionsService extends __BaseService {
  static readonly getLanguageDescriptionsPath = '/rest/admin/v2/language-descriptions';
  static readonly createLanguageDescriptionPath = '/rest/admin/v2/language-descriptions';
  static readonly getLanguageDescriptionByIdPath = '/rest/admin/v2/language-descriptions/descriptionLanguageId:{descriptionLanguageId},languageId:{languageId}';
  static readonly deleteLanguageDescriptionByIdPath = '/rest/admin/v2/language-descriptions/descriptionLanguageId:{descriptionLanguageId},languageId:{languageId}';
  static readonly updateLanguageDescriptionByIdPath = '/rest/admin/v2/language-descriptions/descriptionLanguageId:{descriptionLanguageId},languageId:{languageId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Get a collection of languages descriptions.
   * @param params The `LanguageDescriptionsService.GetLanguageDescriptionsParams` containing the following parameters:
   *
   * - `descriptionLanguageId`: The language ID of the language that is being described.
   *
   * - `description`: The description of the language that is displayed in a graphical user interface, which manages supported languages for a StoreEntity.
   *
   * - `languageId`: The language ID.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * - `sort`: The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
   *
   * @return A collection of languages descriptions.
   */
  getLanguageDescriptionsResponse(params: LanguageDescriptionsService.GetLanguageDescriptionsParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{descriptionLanguageId?: number, description?: string, languageId?: number}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.descriptionLanguageId != null) __params = __params.set('descriptionLanguageId', params.descriptionLanguageId.toString());
    if (params.description != null) __params = __params.set('description', params.description.toString());
    if (params.languageId != null) __params = __params.set('languageId', params.languageId.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.expand != null) __params = __params.set('expand', params.expand.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/language-descriptions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number, items?: Array<{descriptionLanguageId?: number, description?: string, languageId?: number}>}>;
      })
    );
  }

  /**
   * Get a collection of languages descriptions.
   * @param params The `LanguageDescriptionsService.GetLanguageDescriptionsParams` containing the following parameters:
   *
   * - `descriptionLanguageId`: The language ID of the language that is being described.
   *
   * - `description`: The description of the language that is displayed in a graphical user interface, which manages supported languages for a StoreEntity.
   *
   * - `languageId`: The language ID.
   *
   * - `offset`: The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
   *
   * - `limit`: The maximum number of records to return.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * - `sort`: The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
   *
   * @return A collection of languages descriptions.
   */
  getLanguageDescriptions(params: LanguageDescriptionsService.GetLanguageDescriptionsParams): __Observable<{count?: number, items?: Array<{descriptionLanguageId?: number, description?: string, languageId?: number}>}> {
    return this.getLanguageDescriptionsResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{descriptionLanguageId?: number, description?: string, languageId?: number}>})
    );
  }

  /**
   * Create a language descriptions.
   * @param LanguageDescription Language Description
   */
  createLanguageDescriptionResponse(LanguageDescription: {descriptionLanguageId?: number, description?: string, languageId?: number}): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = LanguageDescription;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/language-descriptions`,
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
   * Create a language descriptions.
   * @param LanguageDescription Language Description
   */
  createLanguageDescription(LanguageDescription: {descriptionLanguageId?: number, description?: string, languageId?: number}): __Observable<null> {
    return this.createLanguageDescriptionResponse(LanguageDescription).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get a language descriptions.
   * @param params The `LanguageDescriptionsService.GetLanguageDescriptionByIdParams` containing the following parameters:
   *
   * - `descriptionLanguageId`: The language ID of the language that is being described.
   *
   * - `languageId`: The language ID.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * - `sort`: The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
   *
   * @return Language Description
   */
  getLanguageDescriptionByIdResponse(params: LanguageDescriptionsService.GetLanguageDescriptionByIdParams): __Observable<__StrictHttpResponse<{descriptionLanguageId?: number, description?: string, languageId?: number}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.expand != null) __params = __params.set('expand', params.expand.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/language-descriptions/descriptionLanguageId:${params.descriptionLanguageId},languageId:${params.languageId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{descriptionLanguageId?: number, description?: string, languageId?: number}>;
      })
    );
  }

  /**
   * Get a language descriptions.
   * @param params The `LanguageDescriptionsService.GetLanguageDescriptionByIdParams` containing the following parameters:
   *
   * - `descriptionLanguageId`: The language ID of the language that is being described.
   *
   * - `languageId`: The language ID.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * - `sort`: The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
   *
   * @return Language Description
   */
  getLanguageDescriptionById(params: LanguageDescriptionsService.GetLanguageDescriptionByIdParams): __Observable<{descriptionLanguageId?: number, description?: string, languageId?: number}> {
    return this.getLanguageDescriptionByIdResponse(params).pipe(
      __map(_r => _r.body as {descriptionLanguageId?: number, description?: string, languageId?: number})
    );
  }

  /**
   * Delete a language descriptions.
   * @param params The `LanguageDescriptionsService.DeleteLanguageDescriptionByIdParams` containing the following parameters:
   *
   * - `descriptionLanguageId`: The language ID of the language that is being described.
   *
   * - `languageId`: The language ID.
   */
  deleteLanguageDescriptionByIdResponse(params: LanguageDescriptionsService.DeleteLanguageDescriptionByIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/rest/admin/v2/language-descriptions/descriptionLanguageId:${params.descriptionLanguageId},languageId:${params.languageId}`,
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
   * Delete a language descriptions.
   * @param params The `LanguageDescriptionsService.DeleteLanguageDescriptionByIdParams` containing the following parameters:
   *
   * - `descriptionLanguageId`: The language ID of the language that is being described.
   *
   * - `languageId`: The language ID.
   */
  deleteLanguageDescriptionById(params: LanguageDescriptionsService.DeleteLanguageDescriptionByIdParams): __Observable<null> {
    return this.deleteLanguageDescriptionByIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Update a language descriptions.
   * @param params The `LanguageDescriptionsService.UpdateLanguageDescriptionByIdParams` containing the following parameters:
   *
   * - `LanguageDescription`: Language Description
   *
   * - `descriptionLanguageId`: The language ID of the language that is being described.
   *
   * - `languageId`: The language ID.
   */
  updateLanguageDescriptionByIdResponse(params: LanguageDescriptionsService.UpdateLanguageDescriptionByIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.LanguageDescription;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/rest/admin/v2/language-descriptions/descriptionLanguageId:${params.descriptionLanguageId},languageId:${params.languageId}`,
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
   * Update a language descriptions.
   * @param params The `LanguageDescriptionsService.UpdateLanguageDescriptionByIdParams` containing the following parameters:
   *
   * - `LanguageDescription`: Language Description
   *
   * - `descriptionLanguageId`: The language ID of the language that is being described.
   *
   * - `languageId`: The language ID.
   */
  updateLanguageDescriptionById(params: LanguageDescriptionsService.UpdateLanguageDescriptionByIdParams): __Observable<null> {
    return this.updateLanguageDescriptionByIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module LanguageDescriptionsService {

  /**
   * Parameters for getLanguageDescriptions
   */
  export interface GetLanguageDescriptionsParams {

    /**
     * The language ID of the language that is being described.
     */
    descriptionLanguageId?: number;

    /**
     * The description of the language that is displayed in a graphical user interface, which manages supported languages for a StoreEntity.
     */
    description?: string;

    /**
     * The language ID.
     */
    languageId?: number;

    /**
     * The position within the resulting dataset where the query begins returning item records. If the offset is "5", the records that returned begin with the sixth record that matches the query parameters. If the offset is "0", the records that are returned begin with the first record that matches the query parameters.
     */
    offset?: number;

    /**
     * The maximum number of records to return.
     */
    limit?: number;

    /**
     * The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
     */
    fields?: string;

    /**
     * The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
     */
    expand?: string;

    /**
     * The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
     */
    sort?: string;
  }

  /**
   * Parameters for getLanguageDescriptionById
   */
  export interface GetLanguageDescriptionByIdParams {

    /**
     * The language ID of the language that is being described.
     */
    descriptionLanguageId: number;

    /**
     * The language ID.
     */
    languageId: number;

    /**
     * The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
     */
    fields?: string;

    /**
     * The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
     */
    expand?: string;

    /**
     * The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
     */
    sort?: string;
  }

  /**
   * Parameters for deleteLanguageDescriptionById
   */
  export interface DeleteLanguageDescriptionByIdParams {

    /**
     * The language ID of the language that is being described.
     */
    descriptionLanguageId: number;

    /**
     * The language ID.
     */
    languageId: number;
  }

  /**
   * Parameters for updateLanguageDescriptionById
   */
  export interface UpdateLanguageDescriptionByIdParams {

    /**
     * Language Description
     */
    LanguageDescription: {descriptionLanguageId?: number, description?: string, languageId?: number};

    /**
     * The language ID of the language that is being described.
     */
    descriptionLanguageId: number;

    /**
     * The language ID.
     */
    languageId: number;
  }
}

export { LanguageDescriptionsService }
