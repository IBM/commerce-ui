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
public interface CreateOrganizationsPage {
	
	public CreateOrganizationsPage typeOrgName(String orgName);
	
	public CreateOrganizationsPage typeDescription(String description);
	
	public CreateOrganizationsPage selectOrganizationType(String orgType);
	
	public CreateOrganizationsPage selectParentOrganization(String parentOrg);
	
	public CreateOrganizationsPage typeStreetAddress(String address);
	
	public CreateOrganizationsPage typeState(String state);
	
	public CreateOrganizationsPage typeCity(String city);
	
	public CreateOrganizationsPage typePostalCode(String postalCode);
	
	public CreateOrganizationsPage typeCountryCode(String countryCode);
	
	public CreateOrganizationsPage typeEmail(String email);
	
	public CreateOrganizationsPage typePhoneNumber(String phoneNumber);
	
	public CreateOrganizationsPage submit();
	
	public CreateOrganizationsPage cancel();
	
	public CreateOrganizationsPage next();
	
	public CreateOrganizationsPage typeContactName(String contactName);

	public CreateOrganizationsPage typeStreetAddress2(String address2);
	
	public CreateOrganizationsPage selectFromAvailableRoles(String availableRole);
	
	public CreateOrganizationsPage selectFromAvailableApprovals(String availableApproval);
	
	public CreateOrganizationsPage validateCreateOrgFromList(String name, String parentOrg, String orgType);
}
