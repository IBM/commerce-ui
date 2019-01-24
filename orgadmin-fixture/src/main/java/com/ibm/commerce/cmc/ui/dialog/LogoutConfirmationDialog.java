package com.ibm.commerce.cmc.ui.dialog;

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
import com.ibm.commerce.qa.wte.framework.page.PageObject;
import com.ibm.commerce.qa.wte.framework.page.PageObject.PageType;

@PageObject(type=PageType.SECTION)
public interface LogoutConfirmationDialog {
	
	/**
	 * Cancel logout 
	 * @return to CMCMainPage
	 */
	public CMCMainPage cancel();
	
	/**
	 * Confirm logout
	 * @return to LogonCMC page
	 */
	public LogonCMC confirm();
}
