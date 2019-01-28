package com.ibm.commerce.cmc.ui.page;

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

import com.google.inject.ImplementedBy;
import com.ibm.commerce.cmc.ui.page.impl.IbmIdSignInPageImpl;
import com.ibm.commerce.qa.wte.framework.page.PageObject;
import com.ibm.commerce.qa.wte.framework.page.PageObject.PageType;

@ImplementedBy(IbmIdSignInPageImpl.class)
@PageObject(type=PageType.SECTION)
public interface IbmIdSignInPage extends BasePage {
	void setIbmIdInput(String ibmId);
	void validateIbmIdInput();	
	void clickContinueButton();	
	void validateContinueButton();	
	void setPasswordInput(String password);	
	void validatePasswordInput();	
	void clickSignInButton();	
	void validateSignInButton();
	void clickChangeUserLink();	
	void validateChangeUserLink();
}


