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
class LanguagesService extends __BaseService {
  static readonly getLanguagesPath = '/rest/admin/v2/languages';
  static readonly createLanguagePath = '/rest/admin/v2/languages';
  static readonly getLanguageByIdPath = '/rest/admin/v2/languages/{id}';
  static readonly deleteLanguageByIdPath = '/rest/admin/v2/languages/{id}';
  static readonly updateLanguageByIdPath = '/rest/admin/v2/languages/{id}';
  static readonly getDescriptionsOfLanguagePath = '/rest/admin/v2/languages/{id}/descriptions';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Get a collection of languages.
   * @param params The `LanguagesService.GetLanguagesParams` containing the following parameters:
   *
   * - `mimeCharSet`: The MIME character encoding value that the notification system uses to encode a message for the selected language.
   *
   * - `id`: The language ID. When creating new languages, use negative values less than -999.
   *
   * - `language`: Language component of the locale.
   *
   * - `country`: Country or region component of the locale.
   *
   * - `variant`: Variant component of the locale. Used to specify the locale encoding character set or to further segregate a distinct formatting custom for a political, geographical, or cultural region.
   *
   * - `encoding`: The character encoding value that the browser uses to display the page in the selected language.
   *
   * - `localeName`: A Java locale used to represent a political, geographical, or cultural region that has a distinct language and customs. This is a mandatory field.
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
   * @return A collection of languages.
   */
  getLanguagesResponse(params: LanguagesService.GetLanguagesParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{id?: number, localeName?: string, language?: string, country?: string, variant?: string, encoding?: string, mimeCharSet?: string, links?: {descriptions?: {href?: string}}}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.mimeCharSet != null) __params = __params.set('mimeCharSet', params.mimeCharSet.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.language != null) __params = __params.set('language', params.language.toString());
    if (params.country != null) __params = __params.set('country', params.country.toString());
    if (params.variant != null) __params = __params.set('variant', params.variant.toString());
    if (params.encoding != null) __params = __params.set('encoding', params.encoding.toString());
    if (params.localeName != null) __params = __params.set('localeName', params.localeName.toString());
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.expand != null) __params = __params.set('expand', params.expand.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/languages`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{count?: number, items?: Array<{id?: number, localeName?: string, language?: string, country?: string, variant?: string, encoding?: string, mimeCharSet?: string, links?: {descriptions?: {href?: string}}}>}>;
      })
    );
  }

  /**
   * Get a collection of languages.
   * @param params The `LanguagesService.GetLanguagesParams` containing the following parameters:
   *
   * - `mimeCharSet`: The MIME character encoding value that the notification system uses to encode a message for the selected language.
   *
   * - `id`: The language ID. When creating new languages, use negative values less than -999.
   *
   * - `language`: Language component of the locale.
   *
   * - `country`: Country or region component of the locale.
   *
   * - `variant`: Variant component of the locale. Used to specify the locale encoding character set or to further segregate a distinct formatting custom for a political, geographical, or cultural region.
   *
   * - `encoding`: The character encoding value that the browser uses to display the page in the selected language.
   *
   * - `localeName`: A Java locale used to represent a political, geographical, or cultural region that has a distinct language and customs. This is a mandatory field.
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
   * @return A collection of languages.
   */
  getLanguages(params: LanguagesService.GetLanguagesParams): __Observable<{count?: number, items?: Array<{id?: number, localeName?: string, language?: string, country?: string, variant?: string, encoding?: string, mimeCharSet?: string, links?: {descriptions?: {href?: string}}}>}> {
    return this.getLanguagesResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{id?: number, localeName?: string, language?: string, country?: string, variant?: string, encoding?: string, mimeCharSet?: string, links?: {descriptions?: {href?: string}}}>})
    );
  }

  /**
   * Create a language.
   * @param Language The language.
   */
  createLanguageResponse(Language: {id?: number, localeName?: string, language?: string, country?: string, variant?: string, encoding?: string, mimeCharSet?: string, links?: {descriptions?: {href?: string}}}): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = Language;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/rest/admin/v2/languages`,
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
   * Create a language.
   * @param Language The language.
   */
  createLanguage(Language: {id?: number, localeName?: string, language?: string, country?: string, variant?: string, encoding?: string, mimeCharSet?: string, links?: {descriptions?: {href?: string}}}): __Observable<null> {
    return this.createLanguageResponse(Language).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get a language.
   * @param params The `LanguagesService.GetLanguageByIdParams` containing the following parameters:
   *
   * - `id`: The language ID. When creating new languages, use negative values less than -999.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * - `sort`: The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
   *
   * @return The language.
   */
  getLanguageByIdResponse(params: LanguagesService.GetLanguageByIdParams): __Observable<__StrictHttpResponse<{id?: number, localeName?: string, language?: string, country?: string, variant?: string, encoding?: string, mimeCharSet?: string, links?: {descriptions?: {href?: string}}}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.expand != null) __params = __params.set('expand', params.expand.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/languages/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{id?: number, localeName?: string, language?: string, country?: string, variant?: string, encoding?: string, mimeCharSet?: string, links?: {descriptions?: {href?: string}}}>;
      })
    );
  }

  /**
   * Get a language.
   * @param params The `LanguagesService.GetLanguageByIdParams` containing the following parameters:
   *
   * - `id`: The language ID. When creating new languages, use negative values less than -999.
   *
   * - `fields`: The comma-separated set of properties to be returned. If no properties are specified, all properties are returned.
   *
   * - `expand`: The comma-separated set of related resources referenced in the links to be returned. If no related resources are specified, no related resources are returned.
   *
   * - `sort`: The comma-separated set of properties which controls the order of the items being listed, prefixed by either (-) to sort by descending order, or optionally (+) to sort by ascending order. For example, sort=name,-d which means, order the items based on the name value in ascending order, then by the id value in descending order.
   *
   * @return The language.
   */
  getLanguageById(params: LanguagesService.GetLanguageByIdParams): __Observable<{id?: number, localeName?: string, language?: string, country?: string, variant?: string, encoding?: string, mimeCharSet?: string, links?: {descriptions?: {href?: string}}}> {
    return this.getLanguageByIdResponse(params).pipe(
      __map(_r => _r.body as {id?: number, localeName?: string, language?: string, country?: string, variant?: string, encoding?: string, mimeCharSet?: string, links?: {descriptions?: {href?: string}}})
    );
  }

  /**
   * Delete a language.
   * @param id The language ID. When creating new languages, use negative values less than -999.
   */
  deleteLanguageByIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/rest/admin/v2/languages/${id}`,
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
   * Delete a language.
   * @param id The language ID. When creating new languages, use negative values less than -999.
   */
  deleteLanguageById(id: number): __Observable<null> {
    return this.deleteLanguageByIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Update a language.
   * @param params The `LanguagesService.UpdateLanguageByIdParams` containing the following parameters:
   *
   * - `Language`: The language.
   *
   * - `id`: The language ID. When creating new languages, use negative values less than -999.
   */
  updateLanguageByIdResponse(params: LanguagesService.UpdateLanguageByIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.Language;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/rest/admin/v2/languages/${params.id}`,
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
   * Update a language.
   * @param params The `LanguagesService.UpdateLanguageByIdParams` containing the following parameters:
   *
   * - `Language`: The language.
   *
   * - `id`: The language ID. When creating new languages, use negative values less than -999.
   */
  updateLanguageById(params: LanguagesService.UpdateLanguageByIdParams): __Observable<null> {
    return this.updateLanguageByIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `LanguagesService.GetDescriptionsOfLanguageParams` containing the following parameters:
   *
   * - `id`: The language ID. When creating new languages, use negative values less than -999.
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
  getDescriptionsOfLanguageResponse(params: LanguagesService.GetDescriptionsOfLanguageParams): __Observable<__StrictHttpResponse<{count?: number, items?: Array<{descriptionLanguageId?: number, description?: string, languageId?: number}>}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.expand != null) __params = __params.set('expand', params.expand.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/rest/admin/v2/languages/${params.id}/descriptions`,
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
   * @param params The `LanguagesService.GetDescriptionsOfLanguageParams` containing the following parameters:
   *
   * - `id`: The language ID. When creating new languages, use negative values less than -999.
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
  getDescriptionsOfLanguage(params: LanguagesService.GetDescriptionsOfLanguageParams): __Observable<{count?: number, items?: Array<{descriptionLanguageId?: number, description?: string, languageId?: number}>}> {
    return this.getDescriptionsOfLanguageResponse(params).pipe(
      __map(_r => _r.body as {count?: number, items?: Array<{descriptionLanguageId?: number, description?: string, languageId?: number}>})
    );
  }
}

module LanguagesService {

  /**
   * Parameters for getLanguages
   */
  export interface GetLanguagesParams {

    /**
     * The MIME character encoding value that the notification system uses to encode a message for the selected language.
     */
    mimeCharSet?: string;

    /**
     * The language ID. When creating new languages, use negative values less than -999.
     */
    id?: number;

    /**
     * Language component of the locale.
     */
    language?: string;

    /**
     * Country or region component of the locale.
     */
    country?: string;

    /**
     * Variant component of the locale. Used to specify the locale encoding character set or to further segregate a distinct formatting custom for a political, geographical, or cultural region.
     */
    variant?: string;

    /**
     * The character encoding value that the browser uses to display the page in the selected language.
     */
    encoding?: string;

    /**
     * A Java locale used to represent a political, geographical, or cultural region that has a distinct language and customs. This is a mandatory field.
     */
    localeName?: string;

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
   * Parameters for getLanguageById
   */
  export interface GetLanguageByIdParams {

    /**
     * The language ID. When creating new languages, use negative values less than -999.
     */
    id: number;

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
   * Parameters for updateLanguageById
   */
  export interface UpdateLanguageByIdParams {

    /**
     * The language.
     */
    Language: {id?: number, localeName?: string, language?: string, country?: string, variant?: string, encoding?: string, mimeCharSet?: string, links?: {descriptions?: {href?: string}}};

    /**
     * The language ID. When creating new languages, use negative values less than -999.
     */
    id: number;
  }

  /**
   * Parameters for getDescriptionsOfLanguage
   */
  export interface GetDescriptionsOfLanguageParams {

    /**
     * The language ID. When creating new languages, use negative values less than -999.
     */
    id: number;

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
}

export { LanguagesService }
