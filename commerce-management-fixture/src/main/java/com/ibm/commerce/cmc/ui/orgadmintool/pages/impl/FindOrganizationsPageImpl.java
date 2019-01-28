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

import com.ibm.commerce.cmc.ui.orgadmintool.pages.FindOrganizationsPage;
import com.ibm.commerce.cmc.ui.page.impl.AbstractCMCPage;
import com.ibm.commerce.qa.wte.framework.page.Identifier;

public class FindOrganizationsPageImpl extends AbstractCMCPage implements FindOrganizationsPage{
	
	public static final Identifier NAME = Identifier.byXPath(".//li//span[(text() ='ORG_NAME')]");
	
	public static final Identifier NAME_DROPDOWN = Identifier.byXPath(".//span[(text() ='The Short Name of the Organization')]");
	
	public static final Identifier SEARCH = Identifier.byXPath(".//input[@type='search']");
	
	public static final Identifier PARENT_ORG = Identifier.byXPath(".//li//span[(text() ='PARENT_ORG')]");
	
	public static final Identifier PARENT_ORG_DROPDOWN = Identifier.byXPath(".//span[(text() ='The Name of the Parent Organization')]");
	
	public static final Identifier SUBMIT = Identifier.byXPath(".//button[(text() = 'Submit')]");
	
	public static final Identifier CANCEL = Identifier.byXPath(".//button[(text() = 'Cancel')]");
	
	public static final Identifier NAME_RESULT = Identifier.byXPath(".//a[(text() ='ORG_NAME')]");
	
	public static final Identifier PARENT_ORG_RESULT = Identifier.byXPath(".//span[(text() ='PARENT_ORG')]");

	@Override
	public FindOrganizationsPage selectName(String name) {
		getElement(NAME_DROPDOWN).click();
		getElement(SEARCH).type(name);
		getElement(NAME.replace("ORG_NAME", name)).click();
		return this;
	}

	@Override
	public FindOrganizationsPage selectParentOrg(String org) {
		getElement(PARENT_ORG_DROPDOWN).click();
		getElement(SEARCH).type(org);
		getElement(PARENT_ORG.replace("PARENT_ORG", org)).click();
		return this;
	}

	@Override
	public FindOrganizationsPage submit() {
		getElement(SUBMIT).click();
		return this;
	}

	@Override
	public FindOrganizationsPage cancel() {
		getElement(CANCEL).click();
		return this;
	}
	
	@Override
	public FindOrganizationsPage validateOrgExist(String name, String org) {
		validateElement(NAME_RESULT.replace("ORG_NAME", name));
		validateElement(PARENT_ORG_RESULT.replace("PARENT_ORG", org));
		return this;
	}

}
