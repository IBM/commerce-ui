package com.ibm.commerce.orgadmin.fvt.test;

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
import java.util.logging.Logger;

import org.junit.ClassRule;
import org.junit.Rule;
import org.junit.rules.TestRule;

import com.google.inject.Inject;
import com.ibm.commerce.cmc.junit.CMCWteTestRule;
import com.ibm.commerce.cmc.ui.config.CMCConfigManager;
import com.ibm.commerce.cmc.ui.page.FeatureConfigurationPage;
import com.ibm.commerce.qa.util.dataset.TestDataProvider;
import com.ibm.commerce.qa.util.junit.rules.impl.DefaultJUnitLifeCycleRule;
import com.ibm.commerce.qa.wte.framework.test.WebSession;

/**
 * Abstract Test class, helps avoid code duplication. Other buckets
 * should not just re-use this. If any bucket wants to make a superclass for
 * their test classes, then consider such a superclass as a convenience and
 * create a custom one per bucket.
 */
public abstract class AbstractSingleSessionTest
{
	/**
	 * The internal copyright field.
	 */
	public static final String COPYRIGHT = com.ibm.commerce.qa.wte.framework.util.IBMCopyright.SHORT_COPYRIGHT;

	@ClassRule
	public static final TestRule CLASS_RULE = DefaultJUnitLifeCycleRule.getStaticClassRuleInstance();

	@Rule
	@Inject
	public CMCWteTestRule fWcWteTestRule;

	@Inject
	private Logger fLog;
	
	@Inject
	protected TestDataProvider dsm;
	
	@Inject
	private CMCConfigManager config;
	
	private static String dsmPath;
	
	private static String dsmTestName;
	
	public void setUpDataProvider(String path, String testName){
		// the sequence of following command should not be changed.
		dsm.setDataFile(path);
		dsmPath = path + "";
		dsm.setTestName(testName);
		dsmTestName = testName + "";
	}
	
	public void enableFeature(String featureName) throws IOException {
		// enable Dark code feature 'testTool'
		FeatureConfigurationPage featureConfiguration =  getSession().startAtPage(config.enableCMCFeature(featureName), FeatureConfigurationPage.class);
		
		featureConfiguration.verifyFeatureEnabled(featureName);
	}

	/**
	 * @return the logger
	 */
	protected Logger getLog()
	{
		return fLog;
	}

	/**
	 * @return the sessionFactory
	 */
	protected WebSession getSession()
	{
		return fWcWteTestRule.getSession();
	}

	/**
	 * @return the config
	 */
	protected CMCConfigManager getConfig()
	{
		return fWcWteTestRule.getConfig();
	}
	
	
}
