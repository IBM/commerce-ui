package com.ibm.commerce.orgadmin.fvt.workflow;

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

import com.google.inject.Inject;
import com.ibm.commerce.cmc.ui.orgadmintool.pages.FindOrganizationsPage;
import com.ibm.commerce.cmc.ui.orgadmintool.pages.OrganizationPage;
import com.ibm.commerce.orgadmin.fvt.test.AbstractSingleSessionTest;

public class FindOrganizationFlow extends AbstractSingleSessionTest{
	
	@Inject
	OrganizationPage orgPage;
	
	@Inject
	FindOrganizationsPage findOrgsPage;
	
	private String orgName;
	private String parentOrg;
	
	public String getOrgName() {
		return orgName;
	}
	
	public String getParentOrg() {
		return parentOrg;
	}
	
	public FindOrganizationFlow setOrgName(String orgName) {
		this.orgName = orgName;
		return this;
	}
	
	public FindOrganizationFlow setParentOrg(String parentOrg) {
		this.parentOrg = parentOrg;
		return this;
	}
	
	public FindOrganizationFlow findOrgThroughUI() {
		orgPage.selectIFrame();
		findOrgsPage = orgPage.findOrg();
		findOrgsPage.selectName(orgName).selectParentOrg(parentOrg).submit();
		orgPage.getMainFrame();
		return this;
	}
	
	public FindOrganizationFlow validateFindOrg() {
		orgPage.selectIFrame();
		findOrgsPage.validateOrgExist(orgName, parentOrg);
		orgPage.getMainFrame();
		return this;
	}

}
