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
public interface FindOrganizationsPage {
	
	public FindOrganizationsPage selectName(String name);
	
	public FindOrganizationsPage selectParentOrg(String org);
	
	public FindOrganizationsPage submit();
	
	public FindOrganizationsPage cancel();

	public FindOrganizationsPage validateOrgExist(String name, String org);

}
