export class ApprovalConstants {

    static readonly DEFAULT_STORE_ID = '0';

    static readonly RESPONSE_TYPE_JSON = 'json';

    static readonly APPROVE_EVENT = 'approveEvent';
    static readonly REJECT_EVENT = 'rejectEvent';

    /* Approval Update Response Code */
    static readonly APPROVE_SUCCESS_MESSAGE = "approvalsOk";
    static readonly APPROVE_FAILURE_MESSAGE = "approvalsFailed";
    static readonly REJECT_SUCCESS_MESSAGE = "rejectsOk";
    static readonly REJECT_FAILURE_MESSAGE = "rejectsFailed";

    /* Breadcrumb Links */
    static readonly BREADCRUMB_LINKS = {
        'BREADCRUMB_LOGOUT_URL': '',
        'BREADCRUMB_HOME_URL': '',
        'BREADCRUMB_APPROVALS_URL': ''
    }

    /* Dropdown View Type Ids */
    static readonly DROPDOWN_VIEW_TYPES = {
        'VIEW_APPROVED': 1,
        'VIEW_PENDING': 0,
        'VIEW_REJECTED': 2,
        'VIEW_ALL': -1,
    };

}