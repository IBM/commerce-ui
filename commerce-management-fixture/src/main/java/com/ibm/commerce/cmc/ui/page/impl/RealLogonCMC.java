package com.ibm.commerce.cmc.ui.page.impl;

import com.google.inject.Inject;
import com.ibm.commerce.cmc.ui.config.CMCConfigManager;

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
	@Inject
	private CMCConfigManager config;
	
	@PageValidator
	private static final Identifier SUBMIT_BUTTON = Identifier.byXPath("//div[text()='Log in']");
	
	//private static final Identifier USER_ID = Identifier.byXPath("//*[@id=\"mainContent\"]/div[2]/div[5]/div[2]/div[3]/div[2]/div[1]/div[3]/div[1]/input");
	private static final Identifier USER_ID = Identifier.byXPath("//*[@id=\"mainContent\"]//input[@type='text']");
	//private static final Identifier PASSWORD = Identifier.byXPath("//*[@id=\"mainContent\"]/div[2]/div[5]/div[2]/div[3]/div[2]/div[1]/div[7]/div[1]/input");
	private static final Identifier PASSWORD = Identifier.byXPath("//*[@id=\"mainContent\"]//input[@type='password']");

	
	public RealLogonCMC() {
	}

	@Override
	public CMCMainPage logon() {
		WteElement logonButton = getFactory().createQuery(SUBMIT_BUTTON).asVisible().withinPageLoadTimeout()
				.expectExactlyOne().executeForOne();
		WteElement userid=getFactory().createQuery(USER_ID).asVisible().withinPageLoadTimeout().executeForOne();
		WteElement pwd=getFactory().createQuery(PASSWORD).asVisible().withinPageLoadTimeout().executeForOne();
		
		userid.type(config.getAdminUserName());
		pwd.type(config.getAdminPassword());
		logonButton.click();
		return getFactory().createPage().build(CMCMainPage.class);
	}
}
