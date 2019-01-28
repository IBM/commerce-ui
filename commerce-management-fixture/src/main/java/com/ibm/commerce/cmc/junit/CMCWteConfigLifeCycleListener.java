package com.ibm.commerce.cmc.junit;

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

import com.ibm.commerce.cmc.ui.config.CMCConfigManager;
import com.ibm.commerce.qa.util.junit.rules.LifeCycleRuleEventListener;

public interface CMCWteConfigLifeCycleListener extends LifeCycleRuleEventListener
{

	CMCConfigManager getConfig();

}
