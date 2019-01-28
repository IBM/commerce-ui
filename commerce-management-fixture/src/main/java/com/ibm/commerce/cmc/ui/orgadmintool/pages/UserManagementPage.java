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
public interface UserManagementPage {
	
	public CreateUserPage addUser();
	
	public void goToNextPage();
	
	public void goToPage(String pageNumber);

	public void goToPreviousPage();

	public void selectIFrame();

	public void getMainFrame();

	public CreateUserPage goToUserDetail(String userId);

	public void validateUserExist(String userId, String firstName, String lastName);
}
