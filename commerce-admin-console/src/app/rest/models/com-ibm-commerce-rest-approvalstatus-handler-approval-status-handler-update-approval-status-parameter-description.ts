/* tslint:disable */

/**
 * Description of the post input body to update an approval status record.
 */
export interface ComIbmCommerceRestApprovalstatusHandlerApprovalStatusHandlerUpdateApprovalStatusParameterDescription {

  /**
   * Comment text for status change.
   */
  comments?: string;

  /**
   * Approval status. Valid values are 1 for approve and 2 for reject.
   */
  aprv_act: '1' | '2';
}
