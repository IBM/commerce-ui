/* tslint:disable */
import { JavaUtilMapEntry } from './java-util-map-entry';
import { ComIbmCommerceFoundationCommonDatatypesOrganizationIdentifierType } from './com-ibm-commerce-foundation-common-datatypes-organization-identifier-type';
import { ComIbmCommerceFoundationCommonDatatypesPersonIdentifierType } from './com-ibm-commerce-foundation-common-datatypes-person-identifier-type';
import { PersonPersonContactUserDataField } from './person-person-contact-user-data-field';
export interface PersonPersonContact {
  middleName?: string;
  addressId?: string;
  addressType?: string;
  attributes?: Array<JavaUtilMapEntry>;
  bestCallingTime?: string;
  businessTitle?: string;
  city?: string;
  country?: string;
  email1: string;
  email2: string;
  fax1: string;
  fax2: string;
  firstName?: string;
  geographicalShippingCode?: string;
  geographicalTaxCode?: string;
  internalOfficeAddress?: string;
  language?: string;
  lastName?: string;
  addressLine?: Array<string>;
  mobilePhone1: string;
  mobilePhone1Country: string;
  nickName: string;
  organizationIdentifier?: ComIbmCommerceFoundationCommonDatatypesOrganizationIdentifierType;
  organizationName?: string;
  organizationUnitName?: string;
  personIdentifier?: ComIbmCommerceFoundationCommonDatatypesPersonIdentifierType;
  personTitle?: string;
  phone1: string;
  phone1Publish?: string;
  phone1Type?: string;
  phone2: string;
  phone2Publish?: string;
  phone2Type?: string;
  primary?: string;
  state?: string;
  userDataField?: Array<PersonPersonContactUserDataField>;
  zipCode?: string;
}
