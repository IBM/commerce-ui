/* tslint:disable */

/**
 * response of MemberGroupMemberUpdateCmd.
 */
export interface ComIbmCommerceRestMemberHandlerPersonHandlerUpdateMemberUserResponse {

  /**
   * The current store identifier.
   */
  storeId?: string;

  /**
   * MemberGroup Identifiers to explicitly exclude the user from.
   */
  addAsExplicitExclusionToMemberGroupId?: string;

  /**
   * The URL to call when the command completes successfully.
   */
  URL?: string;

  /**
   * MemberGroup Identifiers to explicitly add the user to.
   */
  addAsExplicitInclusionToMemberGroupId?: string;

  /**
   * The user identifier.
   */
  userId?: string;

  /**
   * The catalog identifier.
   */
  catalogId?: string;

  /**
   * The request type for example, ajax.
   */
  requesttype?: string;

  /**
   * MemberGroup Identifiers to remove the user from.
   */
  removeFromMemberGroupId?: string;
}
