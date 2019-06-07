package com.ibm.commerce.cmc.ui.orgadmintool.pages.impl;

import com.ibm.commerce.cmc.ui.orgadmintool.pages.ApprovalListPage;

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

import com.ibm.commerce.cmc.ui.orgadmintool.pages.CreateOrganizationsPage;
import com.ibm.commerce.cmc.ui.orgadmintool.pages.FindOrganizationsPage;
import com.ibm.commerce.cmc.ui.orgadmintool.pages.OrganizationPage;
import com.ibm.commerce.cmc.ui.page.impl.AbstractCMCPage;
import com.ibm.commerce.qa.wte.framework.page.Identifier;

public class OrganizationPageImpl extends AbstractCMCPage implements OrganizationPage{
	
	private static final Identifier NEWORG = Identifier.byXPath(".//button[(text() = 'New')]");
			
	private static final Identifier FIND =  Identifier.byXPath(".//button[(text() = 'Find')]");
	
	private static final Identifier APPROVALS = Identifier.byXPath("//span[(text() = 'Approvals')]");
	
	private static final Identifier NAME = Identifier.byXPath("//span[@title = 'ORGNAME' and (text() = 'ORGNAME')]");
	
	private static final Identifier PARENT = Identifier.byXPath("//span[@title = 'PARENT' and (text() = 'PARENT')]");
	
	private static final Identifier STATUS = Identifier.byXPath("//span[@title = 'STATUS' and (text() = 'STATUS')]");
	
	private static final Identifier ORGTYPE = Identifier.byXPath("//span[@title = 'ORGTYPE' and (text() = 'ORGTYPE')]");
	
	private static final Identifier PREVIOUS = Identifier.byXPath("//a[@title='TABLE.PREVIOUS_PAGE']");
	
	private static final Identifier NEXT = Identifier.byXPath("//a[@title='TABLE.NEXT_PAGE']");
	
	private static final Identifier GOTOPAGE = Identifier.byXPath("//input[@id='tableGoToPage-0']");
	
	private static final Identifier SUBMITGOTOPAGE = Identifier.byXPath("//button[@type='submit']");
	
	private static final Identifier IFRAME = Identifier.byXPath(".//iframe");
	
	private static final Identifier NAME_RESULT = Identifier.byXPath(".//a[(text() ='ORG_NAME')]");
	
	private static final Identifier PARENT_ORG_RESULT = Identifier.byXPath(".//td[(text() ='PARENT_ORG')]");

	private static final Identifier ORG_TYPE_RESULT = Identifier.byXPath(".//td[text()='ORGANIZATION_TYPE']");
	

	@Override
	public CreateOrganizationsPage newOrg() {
		getElement(NEWORG).click();	
		return getFactory().createPage().build(CreateOrganizationsPage.class);
	}

	@Override
	public FindOrganizationsPage findOrg() {
		getElement(FIND).click();	
		return getFactory().createPage().build(FindOrganizationsPage.class);
	}

	@Override
	public ApprovalListPage approvals() {
		getElement(APPROVALS).click();	
		return getFactory().createPage().build(ApprovalListPage.class);
	}

	@Override
	public void goToNextPage() {
		getElement(NEXT).click();
	}
	
	@Override
	public void goToPreviousPage() {
		getElement(PREVIOUS).click();	
	}

	@Override
	public void goToPage(String pageNumber) {
		getElement(GOTOPAGE).type(pageNumber);	
		getElement(SUBMITGOTOPAGE).click();
	}
	
	@Override
	public void selectIFrame() {
		this.selectIFrame(IFRAME);
	}	
	
	@Override
	public void getMainFrame() {
		this.getFrame();
	}
	
	@Override
	public CreateOrganizationsPage goToOrgDetail(String name) {
		getElement(NAME_RESULT.replace("ORG_NAME", name)).click();
		return getFactory().createPage().build(CreateOrganizationsPage.class);
	}
	
	

	@Override
	public void validateOrganizationExist(String name, String parentOrg, String orgType) {
		validateElement(NAME_RESULT.replace("ORG_NAME", name));
		validateElement(PARENT_ORG_RESULT.replace("PARENT_ORG", parentOrg));
		validateElement(ORG_TYPE_RESULT.replace("ORGANIZATION_TYPE", orgType));
		
	}

}
