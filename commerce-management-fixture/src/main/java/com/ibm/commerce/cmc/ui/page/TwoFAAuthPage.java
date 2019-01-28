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
import com.ibm.commerce.cmc.ui.page.impl.TwoFAAuthPageImpl;
import com.ibm.commerce.qa.wte.framework.page.PageObject;
import com.ibm.commerce.qa.wte.framework.page.PageObject.PageType;

@ImplementedBy(TwoFAAuthPageImpl.class)
@PageObject(type=PageType.SECTION)
public interface TwoFAAuthPage extends BasePage {
	void validateTwoFAWindow();
	void validateContinueButton();
	void validateRequestNewCodeButton(); 
	void validateCodeInput();
	void clickContinueButton();
	void clickRequestNewCodeButton();
	void setCodeInput(String input);
}

