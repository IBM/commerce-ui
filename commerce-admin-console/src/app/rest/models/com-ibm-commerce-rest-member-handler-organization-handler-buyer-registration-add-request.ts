/* tslint:disable */

/**
 * Request of BuyerRegistrationAddCmd.
 */
export interface ComIbmCommerceRestMemberHandlerOrganizationHandlerBuyerRegistrationAddRequest {

  /**
   * The name of the new buyer organization to register.
   */
  org_orgEntityName: Array<string>;

  /**
   * The logonId for the buyer organization's initial administrator.
   */
  usr_logonId: Array<string>;

  /**
   * The logonId for the password of buyer organization's initial administrator's.
   */
  usr_logonPassword: Array<string>;

  /**
   * The logonId for the password of buyer organization's initial administrator's entered a second time.
   */
  usr_logonPasswordVerify: Array<string>;
}
