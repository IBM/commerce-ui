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

import java.io.IOException;

import com.ibm.commerce.qa.wte.framework.page.PageObject;
import com.ibm.commerce.qa.wte.framework.page.PageObject.PageType;

@PageObject(type=PageType.MAIN_WINDOW)
public interface FeatureConfigurationPage {
	
	public void verifyFeatureEnabled(String featureName) throws IOException;
	
	public void verifyFeatureDisabled(String featureName) throws IOException;
}

