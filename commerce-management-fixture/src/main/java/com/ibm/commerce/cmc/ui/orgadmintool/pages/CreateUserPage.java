package com.ibm.commerce.cmc.ui.orgadmintool.pages;

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

import com.ibm.commerce.qa.wte.framework.page.PageObject;
import com.ibm.commerce.qa.wte.framework.page.PageObject.PageType;

@PageObject(type=PageType.SECTION)
public interface CreateUserPage {
	
	public CreateUserPage typeLonOnId(String userId);
	
	public CreateUserPage typeTitle(String title);
	
	public CreateUserPage selectTitle(String title);
	
	public CreateUserPage typeFirstName(String firstName);
	
	public CreateUserPage typeMiddleName(String middleName);
	
	public CreateUserPage typeLastName(String lastName);
	
	public CreateUserPage typePassward(String password);
	
	public CreateUserPage typePasswordConfirmation(String passwordConfirmation);
	
	public CreateUserPage selectAccountPolicy(String accountPolicy);
	
	public CreateUserPage selectAccountStatus(String accountStatus);
	
	public CreateUserPage typeEmployeeId(String employeeId);
	
	public CreateUserPage typeEmployeeType(String employeeType);
	
	public CreateUserPage typeDepartmentNumber(String departmentNumber);

	public CreateUserPage typeManagerName(String managerName);
	
	public CreateUserPage typeSecretaryName(String secretaryName);
	
	public CreateUserPage selectPreferredLanguage(String preferredLanguage);
	
	public CreateUserPage selectParentOrganization(String parentOrganization);
	
	public CreateUserPage typeStreetAddress(String streetAddress);
	
	public CreateUserPage typeStreetAddress2(String streetAddress);
	
	public CreateUserPage typeCity(String city);
	
	public CreateUserPage typeState(String state);
	
	public CreateUserPage typePostalCode(String postalCode);
	
	public CreateUserPage selectCountry(String country);
	
	public CreateUserPage typeEmail1(String email1);
	
	public CreateUserPage typeEmail2(String email2);
	
	public CreateUserPage typePhone1(String phoneNumber1);
	
	public CreateUserPage typePhone2(String phoneNumber2);
	
	public CreateUserPage typeFax1(String faxNumber1);
	
	public CreateUserPage typeFax2(String faxNumber2);
	
	public CreateUserPage submit();
	
	public CreateUserPage cancel();
	
	public CreateUserPage next();
	
	public CreateUserPage save();
	
	public CreateUserPage selectOrganizationForRoles(String organization);
	
	public CreateUserPage selectFromAvailableRoles(String role);
	
	public CreateUserPage navigateToIncludeTab();
	
	public CreateUserPage navigateToExcludeTab();
	
	public CreateUserPage findAGroupToInclude(String groupName);
	
	public CreateUserPage findAGroupToExclude(String groupName);
	
	public CreateUserPage selectAGroupToInclude(String groupName);
	
	public CreateUserPage selectAGroupToExclude(String groupName);
	

	boolean verifyLanguageExist(String language);

	

}
