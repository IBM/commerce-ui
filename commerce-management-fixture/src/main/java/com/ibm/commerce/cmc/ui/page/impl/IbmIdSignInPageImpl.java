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

import com.ibm.commerce.cmc.ui.page.IbmIdSignInPage;
import com.ibm.commerce.qa.wte.framework.page.Identifier;

public class IbmIdSignInPageImpl extends BasePageImpl implements IbmIdSignInPage {
	private static final Identifier IBM_ID_INPUT = Identifier.byId("username");
	//private static final Identifier CONTINUE_BUTTON = Identifier.byId("continuebutton");
	private static final Identifier CONTINUE_BUTTON = Identifier.byId("continue-button");
	private static final Identifier PASSWORD_INPUT = Identifier.byId("password");
	private static final Identifier SIGN_IN_BUTTON = Identifier.byId("signinbutton");
	private static final Identifier CHANGE_USER_LINK = Identifier.byXPath(".//a[@onclick='ibmIDC.logInUtil.showNewUser()']");
	
	public void setIbmIdInput(String ibmId) {
		getElement(IBM_ID_INPUT).clearAndType(ibmId);
	}
	
	public void validateIbmIdInput() {
		validateElement(IBM_ID_INPUT);
	}
	
	public void clickContinueButton() {
		getElement(CONTINUE_BUTTON).click();
	}
	
	public void validateContinueButton() {
		validateElement(CONTINUE_BUTTON);
	}
	
	public void setPasswordInput(String password) {
		getElement(PASSWORD_INPUT).clearAndType(password);
	}
	
	public void validatePasswordInput() {
		validateElement(PASSWORD_INPUT);
	}
	
	public void clickSignInButton() {
		getElement(SIGN_IN_BUTTON).click();
	}
	
	public void validateSignInButton() {
		validateElement(SIGN_IN_BUTTON);
	}
	
	public void clickChangeUserLink() {
		getElement(CHANGE_USER_LINK).click();
	}
	
	public void validateChangeUserLink() {
		validateElement(CHANGE_USER_LINK);
	}
}
