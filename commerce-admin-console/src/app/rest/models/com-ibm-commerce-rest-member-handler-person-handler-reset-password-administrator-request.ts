/* tslint:disable */

/**
 * Request of ResetPasswordAdministratorCmd.
 */
export interface ComIbmCommerceRestMemberHandlerPersonHandlerResetPasswordAdministratorRequest {

  /**
   * The URL to call when the command completes successfully.
   */
  URL?: string;

  /**
   * The administrator password.
   */
  administratorPassword?: string;

  /**
   * The logonId of shopper to reset the password for.
   */
  logonId: string;
}
