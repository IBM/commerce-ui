/* tslint:disable */

/**
 * Request body for resend user account activation email.
 */
export interface ComIbmCommerceRestMemberHandlerUserActivateHandlerResendActiveUserRequestBody {

  /**
   * An alternative email that the user account activation email can be sent to.
   */
  email1?: string;

  /**
   * The user's logon ID.
   */
  logonId: string;

  /**
   * The user's logon password.
   */
  logonPassword: string;
}
