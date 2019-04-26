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
class ApiService extends __BaseService {
  static readonly patchRestAdminV2MemberGroupsIdDescriptionsLanguageIdPath = '/rest/admin/v2/member-groups/{id}/descriptions/{languageId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `ApiService.PatchRestAdminV2MemberGroupsIdDescriptionsLanguageIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `languageId`: The integer for identifying the language of the member group description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `body`: The request body.
   */
  patchRestAdminV2MemberGroupsIdDescriptionsLanguageIdResponse(params: ApiService.PatchRestAdminV2MemberGroupsIdDescriptionsLanguageIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.storeId != null) __params = __params.set('storeId', params.storeId.toString());
    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/rest/admin/v2/member-groups/${params.id}/descriptions/${params.languageId}`,
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
   * @param params The `ApiService.PatchRestAdminV2MemberGroupsIdDescriptionsLanguageIdParams` containing the following parameters:
   *
   * - `id`: The unique numeric ID for identifying the member group.
   *
   * - `languageId`: The integer for identifying the language of the member group description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
   *
   * - `storeId`: The unique numeric ID for identifying the store.
   *
   * - `body`: The request body.
   */
  patchRestAdminV2MemberGroupsIdDescriptionsLanguageId(params: ApiService.PatchRestAdminV2MemberGroupsIdDescriptionsLanguageIdParams): __Observable<null> {
    return this.patchRestAdminV2MemberGroupsIdDescriptionsLanguageIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ApiService {

  /**
   * Parameters for patchRestAdminV2MemberGroupsIdDescriptionsLanguageId
   */
  export interface PatchRestAdminV2MemberGroupsIdDescriptionsLanguageIdParams {

    /**
     * The unique numeric ID for identifying the member group.
     */
    id: number;

    /**
     * The integer for identifying the language of the member group description. For a list of the integers that map to the supported default languages, refer to the Knowledge Center.
     */
    languageId: number;

    /**
     * The unique numeric ID for identifying the store.
     */
    storeId: number;

    /**
     * The request body.
     */
    body: {languageId?: number, longDescription?: string, shortDescription?: string};
  }
}

export { ApiService }
