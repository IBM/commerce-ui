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

import com.ibm.commerce.cmc.ui.orgadmintool.pages.ApprovalsPage;
import com.ibm.commerce.cmc.ui.orgadmintool.pages.CreateOrganizationsPage;
import com.ibm.commerce.cmc.ui.orgadmintool.pages.FindOrganizationsPage;
import com.ibm.commerce.cmc.ui.orgadmintool.pages.OrganizationPage;
import com.ibm.commerce.cmc.ui.page.impl.AbstractCMCPage;
import com.ibm.commerce.qa.wte.framework.page.Identifier;

public class OrganizationPageImpl extends AbstractCMCPage implements OrganizationPage{
	
	public static final Identifier NEWORG = Identifier.byXPath(".//button[(text() = 'New')]");
			
	public static final Identifier FIND =  Identifier.byXPath(".//button[(text() = 'Find')]");
	
	public static final Identifier APPROVALS = Identifier.byXPath("//span[(text() = 'Approvals')]");
	
	public static final Identifier NAME = Identifier.byXPath("//span[@title = 'ORGNAME' and (text() = 'ORGNAME')]");
	
	public static final Identifier PARENT = Identifier.byXPath("//span[@title = 'PARENT' and (text() = 'PARENT')]");
	
	public static final Identifier STATUS = Identifier.byXPath("//span[@title = 'STATUS' and (text() = 'STATUS')]");
	
	public static final Identifier ORGTYPE = Identifier.byXPath("//span[@title = 'ORGTYPE' and (text() = 'ORGTYPE')]");
	
	public static final Identifier PREVIOUS = Identifier.byXPath("//a[@title='TABLE.PREVIOUS_PAGE']");
	
	public static final Identifier NEXT = Identifier.byXPath("//a[@title='TABLE.NEXT_PAGE']");
	
	public static final Identifier GOTOPAGE = Identifier.byXPath("//input[@id='tableGoToPage-0']");
	
	public static final Identifier SUBMITGOTOPAGE = Identifier.byXPath("//button[@type='submit']");
	
	public static final Identifier IFRAME = Identifier.byXPath(".//iframe");
	
	public static final Identifier NAME_RESULT = Identifier.byXPath(".//a[(text() ='ORG_NAME')]");

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
	public ApprovalsPage approvals() {
		getElement(APPROVALS).click();	
		return getFactory().createPage().build(ApprovalsPage.class);
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
	public void goToOrgDetail(String name) {
		getElement(NAME_RESULT.replace("ORG_NAME", name)).click();
	}

}
