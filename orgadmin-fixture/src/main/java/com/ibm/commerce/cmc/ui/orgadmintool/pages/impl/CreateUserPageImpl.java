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
	
	public static final Identifier LOGON_ID = Identifier.byXPath(".//input[@id='loginId']");
	
	public static final Identifier TITLE = Identifier.byXPath(".//input[@id='title']");
	
	public static final Identifier FIRST_NAME = Identifier.byXPath(".//input[@id='firstName']");

	public static final Identifier MIDDLE_NAME = Identifier.byXPath(".//input[@id='middleName']");
	
	public static final Identifier LAST_NAME = Identifier.byXPath(".//input[@id='lastName']");
	
	public static final Identifier PASSWORD = Identifier.byXPath(".//input[@id='password']");
	
	public static final Identifier PASSWORD_CONFIRM = Identifier.byXPath(".//input[@id='passwordConfirm']");
	
	public static final Identifier EMPLOYEE_ID = Identifier.byXPath(".//input[@id='employeeId']");
	
	public static final Identifier EMPLOYEE_TYPE = Identifier.byXPath(".//input[@id='employeeType']");
	
	public static final Identifier DEPARTMENT_NUMBER = Identifier.byXPath(".//input[@id='departmentNumber']");

	public static final Identifier MANAGER_NAME = Identifier.byXPath(".//input[@id='managerName']");
	
	public static final Identifier SECRETARY_NAME = Identifier.byXPath(".//input[@id='secretaryName']");
	
	public static final Identifier STREET_ADDRESS = Identifier.byXPath(".//input[@id='address1']");
	
	public static final Identifier CITY = Identifier.byXPath(".//input[@id='city']");
	
	public static final Identifier STATE = Identifier.byXPath(".//input[@id='state']");

	public static final Identifier ZIP = Identifier.byXPath(".//input[@id='zip']");
	
	public static final Identifier EMAIL_ONE = Identifier.byXPath(".//input[@id='email1']");
	
	public static final Identifier EMAIL_TWO = Identifier.byXPath(".//input[@id='email2']");
	
	public static final Identifier PHONE_ONE = Identifier.byXPath(".//input[@id='phone1']");
	
	public static final Identifier PHONE_TWO = Identifier.byXPath(".//input[@id='phone2']");
	
	public static final Identifier FAX_ONE = Identifier.byXPath(".//input[@id='fax1']");
	
	public static final Identifier FAX_TWO = Identifier.byXPath(".//input[@id='fax2']");
	
	public static final Identifier ACCOUNT_POLICY_DROPDOWN = Identifier.byXPath(".//n-dropdown[@id='accountPolicyDropdown']//button");
	
	public static final Identifier ACCOUNT_STATUS_DROPDOWN = Identifier.byXPath(".//n-dropdown[@id='accountStatusDropdown']//button");
	
	public static final Identifier LANGUAGE_DROPDOWN = Identifier.byXPath(".//n-dropdown[@id='languageDropdown']//button");
	
	public static final Identifier LANGUAGE_TEXT = Identifier.byXPath(".//n-dropdown[@id='languageDropdown']//span");
	
	public static final Identifier ORGANIZATION_DROPDOWN = Identifier.byXPath(".//n-dropdown[@id='organizationDropdown']//button");	
	
	public static final Identifier COUNTRY_DROPDOWN = Identifier.byXPath(".//n-dropdown[@id='countryDropdown']");
	
	public static final Identifier ACCOUNT_POLICY = Identifier.byXPath(".//span[(text() ='POLICY')]");
	
	public static final Identifier ACCOUNT_STATUS = Identifier.byXPath(".//ul[@role='listbox']//span[(text() ='STATUS')]");
	
	public static final Identifier LANGUAGE = Identifier.byXPath(".//n-dropdown[@id='languageDropdown']//span[(text() ='LANGUAGE')]");
	
	public static final Identifier ORGANIZATION = Identifier.byXPath(".//li[@role='option']//span[(text() ='ORGANIZATION')]");	
	
	public static final Identifier COUNTRY = Identifier.byXPath(".//li[@role='option']//span[(text() ='COUNTRY')]");
	
	public static final Identifier SUBMIT = Identifier.byXPath(".//button[(text() = 'Submit')]");
	
	public static final Identifier CANCEL = Identifier.byXPath(".//button[(text() = 'Cancel')]");
	
	public static final Identifier ORG_SEARCH = Identifier.byXPath(".//n-dropdown[@id='organizationDropdown']//input[@type='search']");
	
	public static final Identifier COUNTRY_SEARCH = Identifier.byXPath(".//n-dropdown[@id='countryDropdown']//input[@type='search']");
	

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
		getElement(ORG_SEARCH).type(parentOrganization);
		getElement(ORGANIZATION.replace("ORGANIZATION", parentOrganization)).click();
		return this;
	}

	@Override
	public CreateUserPage typeStreetAddress(String streetAddress) {
		getElement(STREET_ADDRESS).type(streetAddress);
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
	
}
