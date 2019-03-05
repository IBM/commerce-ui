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

import com.ibm.commerce.cmc.ui.page.impl.AbstractCMCPage;
import com.ibm.commerce.qa.wte.framework.page.Identifier;
import com.ibm.commerce.cmc.ui.orgadmintool.pages.CreateOrganizationsPage;

public class CreateOrganizationsPageImpl extends AbstractCMCPage implements CreateOrganizationsPage{
	
	public static final Identifier ORG_NAME = Identifier.byXPath(".//input[@formcontrolname='orgEntityName']");
	
	public static final Identifier DESCRIPTION = Identifier.byXPath(".//input[@formcontrolname='description']");
	
	public static final Identifier SELECT_ORG_TYPE = Identifier.byXPath(".//n-dropdown[@formcontrolname='orgEntityType']");

	public static final Identifier SELECT_PARENT_ORG = Identifier.byXPath(".//n-dropdown[@formcontrolname='parentOrg']");
	
	public static final Identifier ORG_TYPE = Identifier.byXPath(".//span[(text() ='ORG_TYPE')]");
	
	public static final Identifier PARENT_ORG = Identifier.byXPath(".//span[(text() ='PARENT_ORG')]");
	
	public static final Identifier STREET_ADDRESS = Identifier.byXPath(".//input[@formcontrolname='address']");
	
	public static final Identifier CITY = Identifier.byXPath(".//input[@formcontrolname='city']");
	
	public static final Identifier STATE = Identifier.byXPath(".//input[@formcontrolname='state']");
	
	public static final Identifier POSTAL_CODE = Identifier.byXPath(".//input[@formcontrolname='zipCode']");
	
	public static final Identifier COUNTRY = Identifier.byXPath(".//input[@formcontrolname='country']");
	
	public static final Identifier EMAIL = Identifier.byXPath(".//input[@formcontrolname='email']");
	
	public static final Identifier PHONE = Identifier.byXPath(".//input[@formcontrolname='phone']");
	
	public static final Identifier SUBMIT = Identifier.byXPath(".//button[(text() = 'Submit')]");
	
	public static final Identifier CANCEL = Identifier.byXPath(".//button[(text() = 'Cancel')]");
	
	public static final Identifier NAME_RESULT = Identifier.byXPath(".//a[(text() ='ORG_NAME')]");
	
	public static final Identifier PARENT_ORG_RESULT = Identifier.byXPath(".//span[(text() ='PARENT_ORG')]");
	
	public static final Identifier ORG_TYPE_RESULT = Identifier.byXPath(".//span[(text() ='ORGANIZATION_TYPE')]");
	
	@Override
	public CreateOrganizationsPage typeOrgName(String orgName) {
		getElement(ORG_NAME).type(orgName);
		return this;
	}

	@Override
	public CreateOrganizationsPage typeDescription(String description) {
		getElement(DESCRIPTION).type(description);	
		return this;
	}

	@Override
	public CreateOrganizationsPage selectOrganizationType(String orgType) {
		getElement(SELECT_ORG_TYPE).click();
		getElement(ORG_TYPE.replace("ORG_TYPE", orgType)).click();
		return this;
	}

	@Override
	public CreateOrganizationsPage selectParentOrganization(String parentOrg) {
		getElement(SELECT_PARENT_ORG).click();
		getElement(PARENT_ORG.replace("PARENT_ORG", parentOrg)).click();
		return this;
	}

	@Override
	public CreateOrganizationsPage typeStreetAddress(String address) {
		getElement(STREET_ADDRESS).type(address);
		return this;
	}

	@Override
	public CreateOrganizationsPage typeState(String state) {
		getElement(STATE).type(state);	
		return this;
	}

	@Override
	public CreateOrganizationsPage typeCity(String city) {
		getElement(CITY).type(city);
		return this;
	}

	@Override
	public CreateOrganizationsPage typePostalCode(String postalCode) {
		getElement(POSTAL_CODE).type(postalCode);
		return this;	
	}

	@Override
	public CreateOrganizationsPage typeCountryCode(String countryCode) {
		getElement(COUNTRY).type(countryCode);
		return this;
	}

	@Override
	public CreateOrganizationsPage typeEmail(String email) {
		getElement(EMAIL).type(email);
		return this;	
	}

	@Override
	public CreateOrganizationsPage typePhoneNumber(String phoneNumber) {
		getElement(PHONE).type(phoneNumber);
		return this;
	}

	@Override
	public CreateOrganizationsPage submit() {
		getElement(SUBMIT).click();
		return this;
	}

	@Override
	public CreateOrganizationsPage cancel() {
		getElement(CANCEL).click();
		return this;
	}
	
	@Override
	public CreateOrganizationsPage validateCreateOrgFromList(String name, String parentOrg, String orgType) {
		validateElement(NAME_RESULT.replace("ORG_NAME", name));
		validateElement(PARENT_ORG_RESULT.replace("PARENT_ORG", parentOrg));
		validateElement(ORG_TYPE_RESULT.replace("ORGANIZATION_TYPE", orgType));
		return this;
	}

}
