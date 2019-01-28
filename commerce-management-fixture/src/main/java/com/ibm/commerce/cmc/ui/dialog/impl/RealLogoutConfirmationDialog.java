package com.ibm.commerce.cmc.ui.dialog.impl;

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

import com.ibm.commerce.cmc.ui.dialog.LogoutConfirmationDialog;
import com.ibm.commerce.cmc.ui.page.CMCMainPage;
import com.ibm.commerce.cmc.ui.page.LogonCMC;
import com.ibm.commerce.cmc.ui.page.impl.AbstractCMCPage;
import com.ibm.commerce.qa.wte.framework.page.Identifier;
import com.ibm.commerce.qa.wte.framework.page.PageValidator;
import com.ibm.commerce.qa.wte.framework.page.RootIdentifier;

public class RealLogoutConfirmationDialog extends AbstractCMCPage implements LogoutConfirmationDialog {

	@RootIdentifier
	public static final Identifier ROOT_IDENT = Identifier.byXPath(".//div[@modulename='cmc/shell/LogoutDialog']");
	
	@PageValidator
	private static final Identifier CANCEL_BUTTON = Identifier.byXPath(".//div[@modulename='cmc/shell/LogoutDialogClass::_$3_$0']");
	
	@PageValidator
	private static final Identifier CONFIRM_BUTTON = Identifier.byXPath(".//div[@modulename='cmc/shell/LogoutDialogClass::_$3_$1']");
	
	@Override
	public CMCMainPage cancel() {
		getFactory().createQuery(CANCEL_BUTTON).withinScriptTimeout().asVisible().expectExactlyOne().executeForOne().click();
		return getFactory().createPage().build(CMCMainPage.class);
	}

	@Override
	public LogonCMC confirm() {
		getFactory().createQuery(CONFIRM_BUTTON).withinScriptTimeout().asVisible().expectExactlyOne().executeForOne().click();
		return getFactory().createPage().build(LogonCMC.class);
	}

}
