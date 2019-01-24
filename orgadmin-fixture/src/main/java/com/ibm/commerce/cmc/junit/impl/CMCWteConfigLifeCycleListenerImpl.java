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
import com.google.inject.Provider;
import com.ibm.commerce.cmc.junit.CMCWteConfigLifeCycleListener;
import com.ibm.commerce.cmc.ui.config.CMCConfigManager;
import com.ibm.commerce.qa.util.junit.rules.util.AbstractLifeCycleEventListener;

public class CMCWteConfigLifeCycleListenerImpl extends AbstractLifeCycleEventListener implements CMCWteConfigLifeCycleListener
{
	private final Logger fLog;

	private final Provider<CMCConfigManager> fConfigProvider;
	
	@Inject
	public CMCWteConfigLifeCycleListenerImpl(Logger pLog, Provider<CMCConfigManager> pConfigProvider)
	{
		fLog = pLog;
		fConfigProvider = pConfigProvider;
	}

	@Override
	public void oneTimeStartUpAction()
	{
		fLog.info("Loading CMC configuration.");
		fConfigProvider.get();
	}
	
	@Override
	public CMCConfigManager getConfig()
	{
		return fConfigProvider.get();
	}
}
