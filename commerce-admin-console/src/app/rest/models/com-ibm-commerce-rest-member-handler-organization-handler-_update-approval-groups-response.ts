/* tslint:disable */

/**
 * Information about an organization entity identity.
 */
export interface ComIbmCommerceRestMemberHandlerOrganizationHandler_UpdateApprovalGroupsResponse {

  /**
   * The organization entity identifier.
   */
  orgEntityId: string;

  /**
   * The ApprovalGroup identifier for a specific organization.
   */
  segmentId: string;

  /**
   * The URL to call when the command completes successfully.
   */
  URL: string;

  /**
   * The current store identifier.
   */
  storeId?: string;

  /**
   * The catalog identifier.
   */
  catalogId?: string;

  /**
   * The request type for example, ajax.
   */
  requesttype?: string;
}
