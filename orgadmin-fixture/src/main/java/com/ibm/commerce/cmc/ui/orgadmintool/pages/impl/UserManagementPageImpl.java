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
import com.ibm.commerce.cmc.ui.orgadmintool.pages.CreateUserPage;
import com.ibm.commerce.cmc.ui.orgadmintool.pages.FindOrganizationsPage;
import com.ibm.commerce.cmc.ui.orgadmintool.pages.UserManagementPage;
import com.ibm.commerce.cmc.ui.page.impl.AbstractCMCPage;
import com.ibm.commerce.qa.wte.framework.page.Identifier;

public class UserManagementPageImpl extends AbstractCMCPage implements UserManagementPage{
	
	public static final Identifier ADDUSER = Identifier.byXPath(".//button[(text() = 'Add User')]");
	
	public static final Identifier FIND =  Identifier.byXPath(".//button[(text() = 'Find')]");
	
	public static final Identifier PREVIOUS = Identifier.byXPath("//a[@title='TABLE.PREVIOUS_PAGE']");
	
	public static final Identifier NEXT = Identifier.byXPath("//a[@title='TABLE.NEXT_PAGE']");
	
	public static final Identifier GOTOPAGE = Identifier.byXPath("//input[@id='tableGoToPage-0']");
	
	public static final Identifier SUBMITGOTOPAGE = Identifier.byXPath("//button[@type='submit']");
	
	public static final Identifier IFRAME = Identifier.byXPath(".//iframe");
	
	public static final Identifier USER_LIST = Identifier.byXPath(".//a[(text() ='USER_ID')]");
	
	public static final Identifier FIRST_NAME = Identifier.byXPath(".//span[@title='FIRSTNAME']");
	
	public static final Identifier LAST_NAME = Identifier.byXPath(".//span[@title='LASTNAME']");

	@Override
	public CreateUserPage addUser() {
		getElement(ADDUSER).click();	
		return getFactory().createPage().build(CreateUserPage.class);
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
	public CreateUserPage goToUserDetail(String userId) {
		getElement(USER_LIST.replace("USER_ID", userId)).click();
		return getFactory().createPage().build(CreateUserPage.class);
	}
	
	@Override
	public void validateUserExist(String userId, String firstName, String lastName) {
		validateElement(USER_LIST.replace("USER_ID", userId));
		validateElement(FIRST_NAME.replace("FIRSTNAME", firstName));
		validateElement(LAST_NAME.replace("LASTNAME", lastName));	
	}
	

}
