package com.ibm.commerce.cmc.junit.impl;

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

import java.util.logging.Logger;

import com.google.inject.Inject;
import com.ibm.commerce.cmc.junit.CMCWteConfigLifeCycleListener;
import com.ibm.commerce.cmc.junit.CMCWteTestRule;
import com.ibm.commerce.cmc.ui.config.CMCConfigManager;
import com.ibm.commerce.qa.util.junit.rules.impl.DefaultJUnitLifeCycleRule;
import com.ibm.commerce.qa.wte.framework.junit.WebSessionLifeCycleListener;
import com.ibm.commerce.qa.wte.framework.test.WebSession;

public class CMCWteTestRuleImpl extends DefaultJUnitLifeCycleRule implements CMCWteTestRule
{
	private final WebSessionLifeCycleListener fSessionListener;
	
	private final CMCWteConfigLifeCycleListener fConfigListener;
	
	@Inject
	public CMCWteTestRuleImpl(Logger pLog, WebSessionLifeCycleListener pListener, CMCWteConfigLifeCycleListener pConfigListener)
	{
		super(pLog);
		
		fSessionListener = pListener;
		fConfigListener = pConfigListener;
		
		addListener(fSessionListener);
	}

	@Override
	public WebSession getSession()
	{
		return fSessionListener.getSession();
	}

	@Override
	public CMCConfigManager getConfig()
	{
		return fConfigListener.getConfig();
	}
}
