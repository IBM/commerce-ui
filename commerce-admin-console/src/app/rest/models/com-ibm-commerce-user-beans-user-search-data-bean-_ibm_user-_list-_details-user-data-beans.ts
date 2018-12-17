/* tslint:disable */
import { ComIbmCommerceUserBeansUserSearchDataBean_IBM_User_List_DetailsUserDataBeansUserProfile } from './com-ibm-commerce-user-beans-user-search-data-bean-_ibm_user-_list-_details-user-data-beans-user-profile';
import { ComIbmCommerceUserBeansUserSearchDataBean_IBM_User_List_DetailsUserDataBeansBusinessProfile } from './com-ibm-commerce-user-beans-user-search-data-bean-_ibm_user-_list-_details-user-data-beans-business-profile';
import { ComIbmCommerceUserBeansUserSearchDataBean_IBM_User_List_DetailsUserDataBeansUserRegistry } from './com-ibm-commerce-user-beans-user-search-data-bean-_ibm_user-_list-_details-user-data-beans-user-registry';
import { ComIbmCommerceUserBeansUserSearchDataBean_IBM_User_List_DetailsUserDataBeansDemographics } from './com-ibm-commerce-user-beans-user-search-data-bean-_ibm_user-_list-_details-user-data-beans-demographics';
import { ComIbmCommerceUserBeansUserSearchDataBean_IBM_User_List_DetailsUserDataBeansMemberAttributeValues } from './com-ibm-commerce-user-beans-user-search-data-bean-_ibm_user-_list-_details-user-data-beans-member-attribute-values';
export interface ComIbmCommerceUserBeansUserSearchDataBean_IBM_User_List_DetailsUserDataBeans {
  logonId?: string;
  lastName?: string;
  parentMemberId?: string;
  preferredCurrency?: string;
  roles?: Array<number>;
  distinguishedName?: string;
  registerType?: string;
  userId?: string;
  userProfile?: ComIbmCommerceUserBeansUserSearchDataBean_IBM_User_List_DetailsUserDataBeansUserProfile;
  firstName?: string;
  displayName?: string;
  profileType?: string;
  businessProfile?: ComIbmCommerceUserBeansUserSearchDataBean_IBM_User_List_DetailsUserDataBeansBusinessProfile;
  personalizationId?: string;
  state?: string;
  userRegistry?: ComIbmCommerceUserBeansUserSearchDataBean_IBM_User_List_DetailsUserDataBeansUserRegistry;
  demographics?: ComIbmCommerceUserBeansUserSearchDataBean_IBM_User_List_DetailsUserDataBeansDemographics;
  memberId?: string;
  memberAttributeValues?: Array<ComIbmCommerceUserBeansUserSearchDataBean_IBM_User_List_DetailsUserDataBeansMemberAttributeValues>;
  preferredLanguageId?: string;
}
