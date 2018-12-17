/* tslint:disable */

/**
 * Response body to activate the user account.
 */
export interface ComIbmCommerceRestMemberHandlerUserActivateHandlerActiveUserResponse {

  /**
   * The redirect URL.
   */
  redirecturl: string;

  /**
   * The user's logon ID.
   */
  logonId: string;

  /**
   * The view task name.
   */
  viewTaskName: string;

  /**
   * The store identifier.
   */
  storeId?: string;

  /**
   * The language ID.
   */
  langId?: string;
}
