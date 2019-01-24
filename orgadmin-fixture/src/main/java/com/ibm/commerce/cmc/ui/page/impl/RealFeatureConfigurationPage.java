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

import java.io.IOException;

import com.google.inject.Inject;
import com.ibm.commerce.cmc.ui.config.CMCConfigManager;
import com.ibm.commerce.cmc.ui.page.FeatureConfigurationPage;
import com.ibm.commerce.qa.wte.framework.page.Identifier;
import com.ibm.commerce.qa.wte.framework.page.PageObject;
import com.ibm.commerce.qa.wte.framework.page.PageObject.PageType;

@PageObject(type=PageType.MAIN_WINDOW)
public class RealFeatureConfigurationPage extends AbstractCMCPage implements FeatureConfigurationPage{
	
	@Inject
	private CMCConfigManager config;
	
	private static final Identifier FEATURE_BODY = Identifier.byXPath(".//body");

	@Override
	public void verifyFeatureEnabled(String featureName) throws IOException {
		String featureInfo = getHtmlBody(FEATURE_BODY);
		this.verifyContains(featureName + "=true", featureInfo);
	}

	@Override
	public void verifyFeatureDisabled(String featureName) throws IOException{
		String featureInfo = getHtmlBody(FEATURE_BODY);
		this.verifyContains(featureName + "=false", featureInfo);
	}


}

