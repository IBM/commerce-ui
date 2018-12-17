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

import { com_ibm_commerce_user_beans_CountryStateListDataBean_IBM_countryStateList_Summary } from '../models/com-_ibm-_commerce-_user-_beans-_country-state-list-data-bean-_ibm_country-state-list-_summary';
import { com_ibm_commerce_user_beans_CountryStateListDataBean_IBM_countryStateName } from '../models/com-_ibm-_commerce-_user-_beans-_country-state-list-data-bean-_ibm_country-state-name';

/**
 * This class provides RESTful services to get countries or regions and states or provinces information.
 */
@Injectable()
class CountryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Gets a list of countries or regions with the corresponding states or provinces.
   * @param params The `CountryService.CountryfindCountryStateListParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `profileName`: Profile name. Profiles determine the subset of data returned by a query.  Default profile name = IBM_countryStateList_Summary.
   *
   * - `countryCode`: The country or region abbreviation code.
   *
   * @return The requested completed successfully.
   */
  CountryfindCountryStateListResponse(params: CountryService.CountryfindCountryStateListParams): Observable<HttpResponse<com_ibm_commerce_user_beans_CountryStateListDataBean_IBM_countryStateList_Summary>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.profileName != null) __params = __params.set('profileName', params.profileName.toString());
    if (params.countryCode != null) __params = __params.set('countryCode', params.countryCode.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/country/country_state_list`,
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
        let _body: com_ibm_commerce_user_beans_CountryStateListDataBean_IBM_countryStateList_Summary = null;
        _body = _resp.body as com_ibm_commerce_user_beans_CountryStateListDataBean_IBM_countryStateList_Summary;
        return _resp.clone({body: _body}) as HttpResponse<com_ibm_commerce_user_beans_CountryStateListDataBean_IBM_countryStateList_Summary>;
      })
    );
  }

  /**
   * Gets a list of countries or regions with the corresponding states or provinces.
   * @param params The `CountryService.CountryfindCountryStateListParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `profileName`: Profile name. Profiles determine the subset of data returned by a query.  Default profile name = IBM_countryStateList_Summary.
   *
   * - `countryCode`: The country or region abbreviation code.
   *
   * @return The requested completed successfully.
   */
  CountryfindCountryStateList(params: CountryService.CountryfindCountryStateListParams): Observable<com_ibm_commerce_user_beans_CountryStateListDataBean_IBM_countryStateList_Summary> {
    return this.CountryfindCountryStateListResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * Gets the display name of a country and/or a state.
   * @param params The `CountryService.CountryfindCountryStateNameParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `stateCode`: The state or province abbreviation code.
   *
   * - `profileName`: Profile name. Profiles determine the subset of data returned by a query. The default profile name is IBM_countryStateName.
   *
   * - `countryCode`: The country or region abbreviation code.
   *
   * @return The requested completed successfully.
   */
  CountryfindCountryStateNameResponse(params: CountryService.CountryfindCountryStateNameParams): Observable<HttpResponse<com_ibm_commerce_user_beans_CountryStateListDataBean_IBM_countryStateName>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.stateCode != null) __params = __params.set('stateCode', params.stateCode.toString());
    if (params.profileName != null) __params = __params.set('profileName', params.profileName.toString());
    if (params.countryCode != null) __params = __params.set('countryCode', params.countryCode.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/${params.storeId}/country/country_state_name`,
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
        let _body: com_ibm_commerce_user_beans_CountryStateListDataBean_IBM_countryStateName = null;
        _body = _resp.body as com_ibm_commerce_user_beans_CountryStateListDataBean_IBM_countryStateName;
        return _resp.clone({body: _body}) as HttpResponse<com_ibm_commerce_user_beans_CountryStateListDataBean_IBM_countryStateName>;
      })
    );
  }

  /**
   * Gets the display name of a country and/or a state.
   * @param params The `CountryService.CountryfindCountryStateNameParams` containing the following parameters:
   *
   * - `storeId`: The store identifier.
   *
   * - `stateCode`: The state or province abbreviation code.
   *
   * - `profileName`: Profile name. Profiles determine the subset of data returned by a query. The default profile name is IBM_countryStateName.
   *
   * - `countryCode`: The country or region abbreviation code.
   *
   * @return The requested completed successfully.
   */
  CountryfindCountryStateName(params: CountryService.CountryfindCountryStateNameParams): Observable<com_ibm_commerce_user_beans_CountryStateListDataBean_IBM_countryStateName> {
    return this.CountryfindCountryStateNameResponse(params).pipe(
      map(_r => _r.body)
    );
  }
}

module CountryService {

  /**
   * Parameters for CountryfindCountryStateList
   */
  export interface CountryfindCountryStateListParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * Profile name. Profiles determine the subset of data returned by a query.  Default profile name = IBM_countryStateList_Summary.
     */
    profileName?: 'IBM_countryStateList_Summary';

    /**
     * The country or region abbreviation code.
     */
    countryCode?: string;
  }

  /**
   * Parameters for CountryfindCountryStateName
   */
  export interface CountryfindCountryStateNameParams {

    /**
     * The store identifier.
     */
    storeId: string;

    /**
     * The state or province abbreviation code.
     */
    stateCode?: string;

    /**
     * Profile name. Profiles determine the subset of data returned by a query. The default profile name is IBM_countryStateName.
     */
    profileName?: 'IBM_countryStateName';

    /**
     * The country or region abbreviation code.
     */
    countryCode?: string;
  }
}

export { CountryService }