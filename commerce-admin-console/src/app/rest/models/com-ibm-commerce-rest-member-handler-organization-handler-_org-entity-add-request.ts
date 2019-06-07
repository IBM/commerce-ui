/* tslint:disable */

/**
 * Request of OrgEntityAddCmd.
 */
export interface ComIbmCommerceRestMemberHandlerOrganizationHandler_OrgEntityAddRequest {

  /**
   * 1 - An indicator that the registrant's secondary phone number is listed; 0 - An indicator that the registrant's secondary phone number is unlisted.
   */
  publishPhone2?: string;

  /**
   * Type of address, valid values are configurable by using a properties file: S (shipto), B (billto), and SB (both shipto and billto). A single address may be of different types. If a properties file cannot be found, a default of SB is used.
   */
  addressType?: string;

  /**
   * The name of the organization or organizational unit. Leading and trailing spaces is trimmed. When the system is configured with LDAP, the following characters are not allowed when the orgEntityName is used to construct the distinguished name: 1. The # character occurring at the beginning of orgEntityName. 2. Any of the following characters: = , + " \ < > ;.
   */
  orgEntityName: string;

  /**
   * Code designating the method of code structure used for the billing code. The default value is D, assigned by buyer.
   */
  billingCodeType?: string;

  /**
   * You can manage custom member attributes (MBRATTRVAL table) for this organization using the following syntax: &attributeName_storeId_action_number=value.
   */
  customMemberAttributes?: Array<string>;

  /**
   * The registrant's secondary e-mail or Web address.
   */
  email2?: string;

  /**
   * The registrant's primary e-mail or Web address.
   */
  email1?: string;

  /**
   * DN of the organization or organizational unit, for LDAP use.
   */
  distinguishedName: string;

  /**
   * The name of the city where the registrant resides.
   */
  city?: string;

  /**
   * The middle name of the administrator.
   */
  administratorMiddleName?: string;

  /**
   * The middle name of the registrant.
   */
  middleName?: string;

  /**
   * The last name of the administrator.
   */
  administratorLastName?: string;

  /**
   * The name of the state, province, or equivalent where the registrant resides.
   */
  state?: string;

  /**
   * Customizable field.
   */
  addressField1?: string;

  /**
   * The registrant's secondary phone number.
   */
  phone2?: string;

  /**
   * Customizable field.
   */
  addressField3?: string;

  /**
   * Customizable field.
   */
  addressField2?: string;

  /**
   * The registrant's secondary facsimile number.
   */
  fax2?: string;

  /**
   * The registrant's primary facsimile number.
   */
  fax1?: string;

  /**
   * The type of phone used for the registrant's primary phone number, for example TTY for hearing impaired, PCM for pulse-coded modulation, or CEL for mobile. This is a field of 3 characters.
   */
  phone1Type?: string;

  /**
   * Customizable field.
   */
  orgEntityField1?: string;

  /**
   * Customizable field.
   */
  orgEntityField2?: string;

  /**
   * Customizable field.
   */
  orgEntityField3?: string;

  /**
   * The type of phone used for the registrant's secondary phone number, for example TTY for hearing impaired, PCM for pulse-coded modulation, or CEL for mobile. This is a field of 3 characters.
   */
  phone2Type?: string;

  /**
   * A description of the registrant.
   */
  description?: string;

  /**
   * The title of the user whose address is being entered (for example, Dr., Rev., Mr. or Ms.).
   */
  personTitle?: string;

  /**
   * The ID for the tax payer.
   */
  taxPayerId?: string;

  /**
   * The URL to call when the command completes successfully.
   */
  URL?: string;

  /**
   * The registrant's street address, to a maximum of three lines of information.
   */
  address1?: string;

  /**
   * The registrant's street address, to a maximum of three lines of information.
   */
  address2?: string;

  /**
   * The registrant's street address, to a maximum of three lines of information.
   */
  address3?: string;

  /**
   * The ZIP or postal code of the registrant's address.
   */
  zipCode?: string;

  /**
   * 1 - An indicator to include package inserts when the order is shipped; 0 - An indicator to not include package inserts when the order is shipped. There is no default for this field. If the field is left unused, it remains null in the database.
   */
  packageSuppression?: string;

  /**
   * D - An indicator that daytime is the best time to call the registrant; E - An indicator that evening is the best time to call the registrant.
   */
  bestCallingTime?: string;

  /**
   * The registrant's primary phone number.
   */
  phone1?: string;

  /**
   * A tax code based on geographical region, especially useful with tax software.
   */
  taxGeoCode?: string;

  /**
   * 1 - An indicator that the registrant's primary phone number is listed; 0 - An indicator that the registrant's primary phone number is unlisted. There is no default for these publishPhone fields. If the field is left unused, it remains null in the database.
   */
  publishPhone1?: string;

  /**
   * The name of the unit within the organization that the registrant represents.
   */
  organizationUnitName?: string;

  /**
   * The first name of the registrant.
   */
  firstName?: string;

  /**
   * The name of the organization that the registrant represents.
   */
  organizationName?: string;

  /**
   * Describes the kind of business performed by an organization or organizational unit.
   */
  businessCategory?: string;

  /**
   * The registrant's preferred mode of delivery.
   */
  preferredDelivery?: string;

  /**
   * A shipping code based on geographical region, especially useful with tax software.
   */
  shippingGeoCode?: string;

  /**
   * The name of the country or region where the registrant resides.
   */
  country?: string;

  /**
   * Required if orgEntityType equals 'OU': The member ID of the parent organizational entity where the new organizational entity is added. For an organization (orgEntityType=O), this parameter is not mandatory; it defaults to Root Organization.
   */
  parentMemberId: string;

  /**
   * The first name of the administrator.
   */
  administratorFirstName?: string;

  /**
   * The registrant's organization's code to identify the shipping or billing addresses and cost center.
   */
  billingCode?: string;

  /**
   * Required if the authentication mode is LDAP: The last name of the registrant. If the authentication mode is LDAP, this parameter is mandatory.
   */
  lastName?: string;

  /**
   * The type of the organizational entity being added. O - Organization; OU - Organizational Unit.
   */
  orgEntityType: string;

  /**
   * Registered organization identifier; may be null for an organizational unit.
   */
  legalId?: string;
}
