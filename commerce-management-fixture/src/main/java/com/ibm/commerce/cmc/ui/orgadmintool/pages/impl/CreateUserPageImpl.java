package com.ibm.commerce.cmc.ui.orgadmintool.pages.impl;

/*
 *-----------------------------------------------------------------
 * IBM Confidential
 *
 * OCO Source Materials
 *
 * WebSphere Commerce
 *
 * (C) Copyright IBM Corp. 2019
 *
 * The source code for this program is not published or otherwise
 * divested of its trade secrets, irrespective of what has
 * been deposited with the U.S. Copyright Office.
 *-----------------------------------------------------------------
 */

import com.ibm.commerce.cmc.ui.orgadmintool.pages.CreateUserPage;
import com.ibm.commerce.cmc.ui.page.impl.AbstractCMCPage;
import com.ibm.commerce.qa.wte.framework.page.Identifier;

public class CreateUserPageImpl extends AbstractCMCPage implements CreateUserPage{
	
	//private static final Identifier LOGON_ID = Identifier.byXPath(".//input[@id='loginId']");
	//private static final Identifier LOGON_ID = Identifier.byXPath("//ac-user-account/div[2]/div[2]/div[2]/div[1]/div/input[1]");
	private static final Identifier LOGON_ID = Identifier.byId("logonid");

	
	//private static final Identifier TITLE = Identifier.byXPath(".//input[@id='title']");
	
	//private static final Identifier TITLE = Identifier.byXPath("//ibm-dropdown/div/button");
	private static final Identifier TITLE = Identifier.byXPath("//*[@id='title']//button");
	
	
	private static final Identifier FIRST_NAME = Identifier.byXPath(".//input[@id='firstName']");
	
	//private static final Identifier FIRST_NAME = Identifier.byXPath("//ac-user-contact/div[2]/div[2]/div[2]/div[1]/div/div[2]/div[1]/input");
	

	private static final Identifier MIDDLE_NAME = Identifier.byXPath(".//input[@id='middleName']");
	
	private static final Identifier LAST_NAME = Identifier.byXPath(".//input[@id='lastName']");
	
	//private static final Identifier LAST_NAME = Identifier.byXPath("//ac-user-contact/div[2]/div[2]/div[2]/div[1]/div/div[2]/div[2]/input");

	private static final Identifier PASSWORD = Identifier.byXPath(".//input[@id='password']");
	//private static final Identifier PASSWORD = Identifier.byXPath("//ac-user-account/div[2]/div[2]/div[2]/div[1]/div/div[4]/input");
	
	
	//private static final Identifier PASSWORD_CONFIRM = Identifier.byXPath(".//input[@id='passwordConfirm']");
	private static final Identifier PASSWORD_CONFIRM = Identifier.byXPath(".//input[@id='passwordVerify']");

	
	private static final Identifier EMPLOYEE_ID = Identifier.byXPath(".//input[@id='employeeId']");
	
	private static final Identifier EMPLOYEE_TYPE = Identifier.byXPath(".//input[@id='employeeType']");
	
	private static final Identifier DEPARTMENT_NUMBER = Identifier.byXPath(".//input[@id='departmentNumber']");

	private static final Identifier MANAGER_NAME = Identifier.byXPath(".//input[@id='managerName']");
	
	private static final Identifier SECRETARY_NAME = Identifier.byXPath(".//input[@id='secretaryName']");
	
	private static final Identifier STREET_ADDRESS = Identifier.byXPath(".//input[@id='address1']");
	
	private static final Identifier STREET_ADDRESS2 = Identifier.byXPath(".//input[@id='address2']");
	
	//private static final Identifier STREET_ADDRESS = Identifier.byXPath("//ac-user-contact//div[text()='Street address']//following::input[1]");
	
	private static final Identifier CITY = Identifier.byXPath(".//input[@id='city']");
	//private static final Identifier CITY = Identifier.byXPath("//ac-user-contact//div[text()='City']//following::input[1]");
	
	private static final Identifier STATE = Identifier.byXPath(".//input[@id='country']");
	//private static final Identifier STATE = Identifier.byXPath("//ac-user-contact//div[text()='City']//following::input[2]");

	//private static final Identifier ZIP = Identifier.byXPath(".//input[@id='zip']");
	//private static final Identifier ZIP = Identifier.byXPath("//ac-user-contact//div[text()='City']//following::input[3]");
	private static final Identifier ZIP = Identifier.byXPath(".//input[@id='zipCode']");

	
	//private static final Identifier EMAIL_ONE = Identifier.byXPath(".//input[@id='email1']");
	//private static final Identifier EMAIL_ONE = Identifier.byXPath("//ac-user-account/div[2]/div[2]/div[2]/div[1]/div/input[2]");
	private static final Identifier EMAIL_ONE = Identifier.byId("email");

	
	private static final Identifier EMAIL_TWO = Identifier.byXPath(".//input[@id='email2']");
	
	private static final Identifier PHONE_ONE = Identifier.byXPath(".//input[@id='phone1']");
	
	private static final Identifier PHONE_TWO = Identifier.byXPath(".//input[@id='phone2']");
	
	private static final Identifier FAX_ONE = Identifier.byXPath(".//input[@id='fax1']");
	
	private static final Identifier FAX_TWO = Identifier.byXPath(".//input[@id='fax2']");
	
	//private static final Identifier ACCOUNT_POLICY_DROPDOWN = Identifier.byXPath(".//n-dropdown[@id='accountPolicyDropdown']//button");
	//private static final Identifier ACCOUNT_POLICY_DROPDOWN = Identifier.byXPath("//ac-user-account//ibm-dropdown/div[1]/button");
	private static final Identifier ACCOUNT_POLICY_DROPDOWN = Identifier.byXPath("//*[@id='accountPolicy']//button");

	
	private static final Identifier ACCOUNT_STATUS_DROPDOWN = Identifier.byXPath(".//n-dropdown[@id='accountStatusDropdown']//button");
	
	private static final Identifier LANGUAGE_DROPDOWN = Identifier.byXPath(".//n-dropdown[@id='languageDropdown']//button");
	
	private static final Identifier LANGUAGE_TEXT = Identifier.byXPath(".//n-dropdown[@id='languageDropdown']//span");
	
	//private static final Identifier ORGANIZATION_DROPDOWN = Identifier.byXPath(".//n-dropdown[@id='organizationDropdown']//button");
	//private static final Identifier ORGANIZATION_DROPDOWN = Identifier.byXPath("//ac-user-account//div[text()='Organization']//following::input");
	private static final Identifier ORGANIZATION_DROPDOWN = Identifier.byXPath(".//input[@id='organization']");

	
	
	private static final Identifier COUNTRY_DROPDOWN = Identifier.byXPath(".//n-dropdown[@id='countryDropdown']");
	
	private static final Identifier TITLEVAL = Identifier.byXPath("//ibm-dropdown-list/ul/li[text()='TITLE']");
	//private static final Identifier ACCOUNT_POLICY = Identifier.byXPath(".//span[(text() ='POLICY')]");
	private static final Identifier ACCOUNT_POLICY = Identifier.byXPath("//ibm-dropdown-list/ul/li[text()='POLICY']");
	
	
	private static final Identifier ACCOUNT_STATUS = Identifier.byXPath(".//ul[@role='listbox']//span[(text() ='STATUS')]");
	
	private static final Identifier LANGUAGE = Identifier.byXPath(".//n-dropdown[@id='languageDropdown']//span[(text() ='LANGUAGE')]");
	
	private static final Identifier ORGANIZATION = Identifier.byXPath(".//li[@role='option']//span[(text() ='ORGANIZATION')]");	
	
	private static final Identifier COUNTRY = Identifier.byXPath(".//li[@role='option']//span[(text() ='COUNTRY')]");
	
	private static final Identifier SUBMIT = Identifier.byXPath(".//button[(text() = 'Submit')]");
	
	private static final Identifier CANCEL = Identifier.byXPath(".//button[(text() = 'Cancel')]");
	
	private static final Identifier ORG_SEARCH = Identifier.byXPath(".//n-dropdown[@id='organizationDropdown']//input[@type='search']");
	
	private static final Identifier COUNTRY_SEARCH = Identifier.byXPath(".//n-dropdown[@id='countryDropdown']//input[@type='search']");
	
	private static final Identifier NEXT = Identifier.byXPath("//button[(text()='Next')]");
	
	private static final Identifier BACK = Identifier.byXPath("//button[(text()='Back')]");
	
	private static final Identifier SAVE = Identifier.byXPath("//button[(text()='Save')]");
	
	//private static final Identifier R_ORGANIZATION_DROPDOWN = Identifier.byXPath("//ac-user-roles//ibm-dropdown[1]//button");
	private static final Identifier R_ORGANIZATION_DROPDOWN = Identifier.byXPath("//*[@id='organizationName']//button");

	//private static final Identifier AVAILABLE_ROLES_DROPDOWN = Identifier.byXPath("//ac-user-roles//ibm-dropdown[2]//button");
	private static final Identifier AVAILABLE_ROLES_DROPDOWN = Identifier.byXPath("//*[@id='rolesList']//button");

	private static final Identifier R_ORGANIZATION_ITEM = Identifier.byXPath("//ibm-dropdown-list/ul/li[text()='RORGANIZATION']");

	//private static final Identifier R_ORGANIZATION_ITEM = Identifier.byXPath("//ibm-dropdown-list/ul/li[1]");
	
	private static final Identifier AVAILABLE_ROLES = Identifier.byXPath("//ibm-dropdown-list/ul/li[text()='AVAILABLEROLE']");
	
	//private static final Identifier AVAILABLE_ROLES = Identifier.byXPath("//ibm-dropdown-list/ul/li[2]");

	private static final Identifier INCLUDE_TAB = Identifier.byXPath("//*[@id='n-tab-0-header']");
	
	private static final Identifier EXCLUDE_TAB = Identifier.byXPath("//*[@id='n-tab-1-header']");

	//private static final Identifier FIND_A_GROUP_TO_INCLUDE = Identifier.byXPath("//*[@id='n-tab-0']/div/div/div[2]/input");
	private static final Identifier FIND_A_GROUP_TO_INCLUDE = Identifier.byXPath("//*[@id='groupsInput']");

	private static final Identifier FIND_A_GROUP_TO_EXCLUDE = Identifier.byXPath("//*[@id='n-tab-1']/div/div/div[2]/input");
	
	//private static final Identifier INCLUDE_GROUP_ITEM = Identifier.byXPath("//*[@id='n-tab-0']/div/div/div[2]/ul/li/ibm-checkbox/label[text()=' INCLUDEGROUP ']");
	private static final Identifier INCLUDE_GROUP_ITEM = Identifier.byXPath("//ibm-checkbox/label[text()=' INCLUDEGROUP ']");

	
	
	//private static final Identifier INCLUDE_GROUP_ITEM = Identifier.byXPath("//*[@id='n-tab-0']/div/div/div[2]/ul/li[1]/ibm-checkbox/label");

	
	private static final Identifier EXCLUDE_GROUP_ITEM = Identifier.byXPath("//*[@id='n-tab-1']//ul/li/ibm-checkbox/label[contains(text(),'EXCLUDEGROUP')]");


	
	@Override
	public CreateUserPage typeLonOnId(String userId) {
		getElement(LOGON_ID).type(userId);
		return this;
	}

	@Override
	public CreateUserPage typeTitle(String title) {
		getElement(TITLE).type(title);
		return this;
	}
	
	@Override
	public CreateUserPage selectTitle(String title) {
		getElement(TITLE).click();
		getElement(TITLEVAL.replace("TITLE", title)).click();
		return this;
	}

	@Override
	public CreateUserPage typeFirstName(String firstName) {
		getElement(FIRST_NAME).type(firstName);
		return this;
	}

	@Override
	public CreateUserPage typeMiddleName(String middleName) {
		getElement(MIDDLE_NAME).type(middleName);
		return this;
	}

	@Override
	public CreateUserPage typeLastName(String lastName) {
		getElement(LAST_NAME).type(lastName);
		return this;
	}

	@Override
	public CreateUserPage typePassward(String password) {
		getElement(PASSWORD).type(password);
		return this;
	}

	@Override
	public CreateUserPage typePasswordConfirmation(String passwordConfirmation) {
		getElement(PASSWORD_CONFIRM).type(passwordConfirmation);
		return this;
	}

	@Override
	public CreateUserPage selectAccountPolicy(String accountPolicy) {
		getElement(ACCOUNT_POLICY_DROPDOWN).click();
		getElement(ACCOUNT_POLICY.replace("POLICY", accountPolicy)).click();
		return this;
	}

	@Override
	public CreateUserPage selectAccountStatus(String accountStatus) {
		getElement(ACCOUNT_STATUS_DROPDOWN).click();
		getElement(ACCOUNT_STATUS.replace("STATUS", accountStatus)).click();
		return this;
	}

	@Override
	public CreateUserPage typeEmployeeId(String employeeId) {
		getElement(EMPLOYEE_ID).type(employeeId);
		return this;
	}

	@Override
	public CreateUserPage typeEmployeeType(String employeeType) {
		getElement(EMPLOYEE_TYPE).type(employeeType);
		return this;
	}

	@Override
	public CreateUserPage typeDepartmentNumber(String departmentNumber) {
		getElement(DEPARTMENT_NUMBER).type(departmentNumber);
		return this;
	}

	@Override
	public CreateUserPage typeManagerName(String managerName) {
		getElement(MANAGER_NAME).type(managerName);
		return this;
	}

	@Override
	public CreateUserPage typeSecretaryName(String secretaryName) {
		getElement(SECRETARY_NAME).type(secretaryName);
		return this;
	}

	@Override
	public CreateUserPage selectPreferredLanguage(String preferredLanguage) {
		getElement(LANGUAGE_DROPDOWN).click();
		getElement(LANGUAGE.replace("LANGUAGE", preferredLanguage)).click();
		return this;
	}

	@Override
	public CreateUserPage selectParentOrganization(String parentOrganization) {
		getElement(ORGANIZATION_DROPDOWN).click();
		//getElement(ORG_SEARCH).type(parentOrganization);
		//getElement(ORGANIZATION.replace("ORGANIZATION", parentOrganization)).click();
		getElement(ORGANIZATION_DROPDOWN).type(parentOrganization);
		return this;
	}

	@Override
	public CreateUserPage typeStreetAddress(String streetAddress) {
		getElement(STREET_ADDRESS).type(streetAddress);
		return this;
	}
	
	@Override
	public CreateUserPage typeStreetAddress2(String streetAddress) {
		getElement(STREET_ADDRESS2).type(streetAddress);
		return this;
	}

	@Override
	public CreateUserPage typeCity(String city) {
		getElement(CITY).type(city);
		return this;
	}

	@Override
	public CreateUserPage typeState(String state) {
		getElement(STATE).type(state);
		return this;
	}

	@Override
	public CreateUserPage typePostalCode(String postalCode) {
		getElement(ZIP).type(postalCode);
		return this;
	}

	@Override
	public CreateUserPage selectCountry(String country) {
		getElement(COUNTRY_DROPDOWN).click();
		getElement(COUNTRY.replace("COUNTRY", country)).click();
		return this;
	}

	@Override
	public CreateUserPage typeEmail1(String email1) {
		getElement(EMAIL_ONE).type(email1);
		return this;
	}

	@Override
	public CreateUserPage typeEmail2(String email2) {
		getElement(EMAIL_TWO).type(email2);
		return this;
	}

	@Override
	public CreateUserPage typePhone1(String phoneNumber1) {
		getElement(PHONE_ONE).type(phoneNumber1);
		return this;
	}

	@Override
	public CreateUserPage typePhone2(String phoneNumber2) {
		getElement(PHONE_TWO).type(phoneNumber2);
		return this;
	}

	@Override
	public CreateUserPage typeFax1(String faxNumber1) {
		getElement(FAX_ONE).type(faxNumber1);
		return this;
	}

	@Override
	public CreateUserPage typeFax2(String faxNumber2) {
		getElement(FAX_TWO).type(faxNumber2);
		return this;
	}

	@Override
	public CreateUserPage submit() {
		getElement(SUBMIT).click();
		return this;
	}

	@Override
	public CreateUserPage cancel() {
		getElement(CANCEL).click();
		return this;
	}
	
	@Override
	public boolean verifyLanguageExist(String language) {
		return getElement(LANGUAGE_TEXT).getText().equals(language);
	}

	@Override
	public CreateUserPage next() {
		getElement(NEXT).click();
		return this;
	}
	
	@Override
	public CreateUserPage save() {
		getElement(SAVE).click();
		return this;
	}

	@Override
	public CreateUserPage selectOrganizationForRoles(String organization) {
		getElement(R_ORGANIZATION_DROPDOWN).click();
		getElement(R_ORGANIZATION_ITEM.replace("RORGANIZATION", organization)).click();
		
		return this;
	}

	@Override
	public CreateUserPage selectFromAvailableRoles(String role) {
		getElement(AVAILABLE_ROLES_DROPDOWN).click();
		getElement(AVAILABLE_ROLES.replace("AVAILABLEROLE", role)).click();
		return this;
	}

	@Override
	public CreateUserPage navigateToIncludeTab() {
		getElement(INCLUDE_TAB).click();
		return this;
	}

	@Override
	public CreateUserPage navigateToExcludeTab() {
		getElement(EXCLUDE_TAB).click();
		return this;
	}

	@Override
	public CreateUserPage findAGroupToInclude(String groupName) {
		//getElement(FIND_A_GROUP_TO_INCLUDE).click();
		getElement(FIND_A_GROUP_TO_INCLUDE).type(groupName);
		return this;
	}

	@Override
	public CreateUserPage findAGroupToExclude(String groupName) {
		getElement(FIND_A_GROUP_TO_EXCLUDE).click();
		getElement(FIND_A_GROUP_TO_EXCLUDE).clearAndType(groupName);
		return this;
	}

	@Override
	public CreateUserPage selectAGroupToInclude(String groupName) {
		getElement(INCLUDE_GROUP_ITEM.replace("INCLUDEGROUP", groupName)).click();
		return this;
	}

	@Override
	public CreateUserPage selectAGroupToExclude(String groupName) {
		getElement(INCLUDE_GROUP_ITEM.replace("EXCLUDEGROUP", groupName)).click();
		return this;
	}

	

	

	
	
	
}
