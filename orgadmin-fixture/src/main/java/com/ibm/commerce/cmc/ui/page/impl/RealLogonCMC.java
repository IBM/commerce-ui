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

import com.ibm.commerce.cmc.ui.page.CMCMainPage;
import com.ibm.commerce.cmc.ui.page.LogonCMC;
import com.ibm.commerce.qa.wte.framework.page.Identifier;
import com.ibm.commerce.qa.wte.framework.page.PageObject;
import com.ibm.commerce.qa.wte.framework.page.PageObject.PageType;
import com.ibm.commerce.qa.wte.framework.page.PageValidator;
import com.ibm.commerce.qa.wte.framework.page.WteElement;

@PageObject(type=PageType.MAIN_WINDOW)
public class RealLogonCMC extends AbstractCMCPage implements LogonCMC{
	
	@PageValidator
	private static final Identifier SUBMIT_BUTTON = Identifier.byXPath("//div[text()='Log in']");
	
	public RealLogonCMC() {
	}

	@Override
	public CMCMainPage logon() {
		WteElement logonButton = getFactory().createQuery(SUBMIT_BUTTON).asVisible().withinPageLoadTimeout()
				.expectExactlyOne().executeForOne();
		logonButton.click();
		return getFactory().createPage().build(CMCMainPage.class);
	}
}
