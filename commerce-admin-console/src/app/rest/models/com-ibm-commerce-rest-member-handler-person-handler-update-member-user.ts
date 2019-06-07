/* tslint:disable */

/**
 * Body of MemberGroupMemberUpdateCmd.
 */
export interface ComIbmCommerceRestMemberHandlerPersonHandlerUpdateMemberUser {

  /**
   * MemberGroup Identifiers to explicitly add the user too .
   */
  addAsExplicitInclusionToMemberGroupId?: string;

  /**
   * MemberGroup Identifiers to explicitly exclude the user from.
   */
  addAsExplicitExclusionToMemberGroupId?: string;

  /**
   * MemberGroup Identifiers to remove the user from.
   */
  removeFromMemberGroupId?: string;
}
