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

import org.junit.rules.TestRule;

import com.ibm.commerce.cmc.ui.config.CMCConfigManager;
import com.ibm.commerce.qa.wte.framework.test.WebSession;
import com.ibm.commerce.qa.wte.util.WcConfigManager;

/**
 * Implementations of this class allow you to easily configure and get access to
 * the {@link WebSession} and {@link WcConfigManager} from within you JUnit 4
 * WebSphere Commerce WTE test cases.
 * 
 */
public interface CMCWteTestRule extends TestRule
{
	WebSession getSession();

	CMCConfigManager getConfig();
}
