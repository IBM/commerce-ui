package com.ibm.commerce.cmc.ui.page.impl;

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

import com.ibm.commerce.cmc.ui.page.TwoFAAuthPage;
import com.ibm.commerce.qa.wte.framework.page.Identifier;


public class TwoFAAuthPageImpl extends BasePageImpl implements TwoFAAuthPage {

	private static final Identifier TWOFA_WINDOW = Identifier.byId("errId");
	private static final Identifier CONTINUE_BUTTON = Identifier.byXPath("//button[@class=\"ibm-btn-pri ibm-btn-blue-50\"]");
	private static final Identifier REQUEST_NEW_CODE_BUTTON = Identifier.byXPath("//a[@onclick=\\\"regenrateToken();\\\"]");
	private static final Identifier CODE_INPUT = Identifier.byXPath("//*[@id=\"otp\"]");


	public void validateTwoFAWindow() {
		validateHiddenElementWithinScriptTimeout(TWOFA_WINDOW);
	}

	public void validateContinueButton() {
		validateElement(CONTINUE_BUTTON);
	}

	public void validateRequestNewCodeButton() {
		validateElement(REQUEST_NEW_CODE_BUTTON);
	}

	public void validateCodeInput() {
		validateElement(CODE_INPUT);
	}

	public void clickContinueButton() {
		getElement(CONTINUE_BUTTON).click();
	}

	public void clickRequestNewCodeButton() {
		getElement(REQUEST_NEW_CODE_BUTTON).click();
	}

	public void setCodeInput(String input) {
		getElement(CODE_INPUT).clearAndType(input);

	}
}
