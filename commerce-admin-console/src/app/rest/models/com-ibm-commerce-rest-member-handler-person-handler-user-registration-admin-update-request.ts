/* tslint:disable */

/**
 * Request of UserRegistrationAdminUpdateCmd.
 */
export interface ComIbmCommerceRestMemberHandlerPersonHandlerUserRegistrationAdminUpdateRequest {

  /**
   * A shipping code based on geographical region, especially useful with tax software.
   */
  shippingGeoCode?: string;

  /**
   * The registrant's marital status.
   */
  maritalStatus?: string;

  /**
   * The user the administrator will update.
   */
  userId?: string;

  /**
   * The name of the registrant's manager.
   */
  manager?: string;

  /**
   * The registrant's secondary e-mail or Web address.
   */
  email2?: string;

  /**
   * The number of children the registrant has.
   */
  children?: string;

  /**
   * The registrant's primary e-mail or Web address.
   */
  email1?: string;

  /**
   * The middle name of the registrant.
   */
  middleName?: string;

  /**
   * The registrant's password. In database mode, the password is encrypted before it is saved in the database. In LDAP mode, the password is only stored on the LDAP server.
   */
  logonPassword?: string;

  /**
   * The internal address (for example, mail stop).
   */
  officeAddress?: string;

  /**
   * The registrant's preferred unit of measure.
   */
  preferredMeasure?: string;

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
   * Required if the logonPassword is used: The registrant's password, entered a second time.
   */
  logonPasswordVerify?: string;

  /**
   * The registrant's mobile phone number used for SMS, for example, 4161235555.
   */
  mobilePhone1?: string;

  /**
   * The name of the organization that the registrant represents.
   */
  organizationName?: string;

  /**
   * The first name of the registrant.
   */
  firstName?: string;

  /**
   * The registrant's gender.
   */
  gender?: string;

  /**
   * Indicates whether the user wants to receive order notification SMS text messages. Valid values are true or false (default).
   */
  receiveSMSNotification?: string;

  /**
   * The registrant's organization's code to identify the shipping or billing addresses and cost center.
   */
  billingCode?: string;

  /**
   * The name of the registrant's secretary.
   */
  secretary?: string;

  /**
   * Code designating the method of code structure used for the billing code. The default value is D, assigned by buyer.
   */
  billingCodeType?: string;

  /**
   * Specifies whether the registrant wants to receive marketing SMS messages for the current store (or all stores if no stores have been visited during the session). Valid values are true or false (default).
   */
  receiveSMS?: string;

  /**
   * 1 - An indicator that the registrant's primary phone number is listed; 0 - An indicator that the registrant's primary phone number is unlisted. There is no default for these publishPhone fields. If the field is left unused, it remains null in the database.
   */
  publishPhone1?: string;

  /**
   * The registrant's ID with his or her employer.
   */
  employeeId?: string;

  /**
   * The registrant's preferred language.
   */
  preferredLanguage?: string;

  /**
   * Challenge question for verbal confirmation of the customer's identity.
   */
  challengeQuestion?: string;

  /**
   * Date of birth. The format is yyyy-mm-dd, for example: 1980-01-01.
   */
  dateOfBirth?: string;

  /**
   * The name of the state, province, or equivalent where the registrant resides.
   */
  state?: string;

  /**
   * The type of phone used for the registrant's primary phone number, for example TTY for hearing impaired, PCM for pulse-coded modulation, or CEL for mobile. This is a field of 3 characters.
   */
  phone1Type?: string;

  /**
   * The type of phone used for the registrant's secondary phone number, for example TTY for hearing impaired, PCM for pulse-coded modulation, or CEL for mobile. This is a field of 3 characters.
   */
  phone2Type?: string;

  /**
   * The company name of the organization that the registrant represents, obtained when filling in demographic information.
   */
  companyName?: string;

  /**
   * The registrant's secondary phone number.
   */
  phone2?: string;

  /**
   * The registrant's primary phone number.
   */
  phone1?: string;

  /**
   * A tax code based on geographical region, especially useful with tax software.
   */
  taxGeoCode?: string;

  /**
   * The name of the unit within the organization that the registrant represents.
   */
  organizationUnitName?: string;

  /**
   * Required if the authentication mode is LDAP: The last name of the registrant. If the authentication mode is LDAP, this parameter is mandatory.
   */
  lastName?: string;

  /**
   * The time zone in which the registrant does business (report as GMT +/- hours).
   */
  timeZone?: string;

  /**
   * The country code used for the registrant's mobile phone number, for example, CA for Canada.
   */
  mobilePhone1Country?: string;

  /**
   * The currency in which the registrant's income is paid.
   */
  incomeCurrency?: string;

  /**
   * URL or path to a photo of the registrant.
   */
  photo?: string;

  /**
   * The preferred phone for the registrant (stored in the ADDRESS table), for example: P1=phone 1 P2=phone 2.
   */
  preferredCommunication?: Array<string>;

  /**
   * The name of the city where the registrant resides.
   */
  city?: string;

  /**
   * Customizable field.
   */
  addressField1?: string;

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
   * The department identifier for the registrant.
   */
  departmentNumber?: string;

  /**
   * The registrant's logon ID. If you are using LDAP, changing a user's logonID is not supported because it would require deleting and recreating the user in LDAP. This process would cause all non-WebSphere Commerce user attributes, such as the password, to be lost. If you are not using LDAP, changing the user's logon ID is not recommended, because the promotion subsystem stores the logon ID of the creator of the promotion in the XMLPARAM column of the PX_PROMOTION table. Note: When the UserRegistrationUpdate command is used to change the logonID, the command will automatically update the USERS.DN database column. Do not assume that ADDRESS.NICKNAME will also change. Instead, the following finder should be used to get the single self address of a user: AddressAccessBean.findSelfAddressByMember(Long memberID).
   */
  logonId?: string;

  /**
   * A string used to identify the user for taxation, especially useful with tax software.
   */
  taxPayerId?: string;

  /**
   * Customizable field for demographic information; an integer field.
   */
  demographicField6?: string;

  /**
   * Customizable field for demographic information; a field var char, length 6.
   */
  demographicField7?: string;

  /**
   * Customizable field for demographic information; this is single-character field.
   */
  demographicField4?: string;

  /**
   * Customizable field for demographic information; a field of 254 characters.
   */
  demographicField5?: string;

  /**
   * Customizable field.
   */
  userField3?: string;

  /**
   * Customizable field.
   */
  userField2?: string;

  /**
   * Customizable field.
   */
  userField1?: string;

  /**
   * Customizable field for demographic information; this is single-character field.
   */
  demographicField1?: string;

  /**
   * Determines whether the registrant wants to receive marketing e-mail activities for the current store (or all stores if no stores have been visited during the session): true - The user wants to receive marketing e-mail activities; false - The user does not want to receive e-mail activities (the default).
   */
  receiveEmail?: string;

  /**
   * The registrant's preferred mode of delivery.
   */
  preferredDelivery?: string;

  /**
   * The name of the country or region where the registrant resides.
   */
  country?: string;

  /**
   * Whether the registrant has previously placed an order. This value is supplied by the registrant.
   */
  orderBefore?: string;

  /**
   * The purpose of the address. Valid values are: S - shipto, B - billto, SB - shipto and billto (The default value.).
   */
  addressType?: string;

  /**
   * The title of the user whose address is being entered (for example, Dr., Rev., Mr. or Ms.).
   */
  personTitle?: string;

  /**
   * The number of people in the registrant's household; the default is 1.
   */
  household?: string;

  /**
   * You can manage custom member attributes (MBRATTRVAL table) for this user using the following syntax: {attributeName}_{storeId}_{action}_{sequence}: string. The curly braced values must be replaced as follows: attributeName is any attribute specified in MBRATTRVAL table, storeId is the numerical id of the store (or null to indicate all stores), action is either 'r' (for replace) or 'd' (for delete), and sequence to indicate the sequence of this value in relation to other values for this attribute. Some examples. 'JobFunction_10001_r_1' : 'ProductManager' is specifying that the user has a JobFunction attribute value of ProductManager for the store 10001, this is for replacing the first (r_1) JobFunction attribute value for the user. JobFunction_null_d deletes all job functions for the user in all stores.
   */
  attributeName_storeId_action_sequence?: string;

  /**
   * The registrant's hobbies.
   */
  hobbies?: string;

  /**
   * A special ID assigned by the registrant's business organization or organizational unit to this particular registrant..
   */
  alternateId?: string;

  /**
   * The registrant's status as an employee (for example, regular, permanent, contractor, or part time).
   */
  employeeType?: string;

  /**
   * Answer to the challenge question.
   */
  challengeAnswer?: string;

  /**
   * Customizable field.
   */
  userProfileField1?: string;

  /**
   * Customizable field.
   */
  userProfileField2?: string;

  /**
   * The registrant's annual income.
   */
  income?: string;

  /**
   * A description of the registrant.
   */
  description?: string;

  /**
   * 1 - An indicator that the registrant's secondary phone number is listed; 0 - An indicator that the registrant's secondary phone number is unlisted.
   */
  publishPhone2?: string;

  /**
   * The identifier of the registrant's organizational unit.
   */
  organizationUnitId?: string;

  /**
   * 1 - An indicator to include package inserts when the order is shipped; 0 - An indicator to not include package inserts when the order is shipped. There is no default for this field. If the field is left unused, it remains null in the database.
   */
  packageSuppression?: string;

  /**
   * D - An indicator that daytime is the best time to call the registrant; E - An indicator that evening is the best time to call the registrant.
   */
  bestCallingTime?: string;

  /**
   * The registrant's preferred currency for transactions.
   */
  preferredCurrency?: string;

  /**
   * The identifier of the registrant's company.
   */
  organizationId?: string;

  /**
   * The registrant's age.
   */
  age?: string;

  /**
   * Customizable field for demographic information; this is single-character field.
   */
  demographicField2?: string;

  /**
   * Customizable field for demographic information; this is single-character field.
   */
  demographicField3?: string;
}
