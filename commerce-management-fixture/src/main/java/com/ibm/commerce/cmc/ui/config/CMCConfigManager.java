package com.ibm.commerce.cmc.ui.config;

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
import com.google.inject.Injector;
import com.ibm.commerce.qa.wc.util.config.ConfigManager;
import com.ibm.commerce.qa.wc.util.config.MachineRole;
import com.ibm.commerce.qa.wte.util.WcConfigManager;

public class CMCConfigManager extends WcConfigManager {
	
	@Inject
	public CMCConfigManager(Injector injector, Logger log, ConfigManager f_baseConfig) {
		super(injector, log, f_baseConfig);
	}
	
	/**
	 * Get the CMC URL
	 * @return CMC URL
	 */
	public String getCMCUrl() {
		return "https://" + getHostName(MachineRole.CMC) + "/lobtools/cmc/ManagementCenterMain?locale=en_US";
		//return "http://" + getHostName(MachineRole.CMC) + "/users/";

	}
	
	/**
	 * Enable the CMC Dark Feature URL
	 * @return URL to Enable a Dark Feature
	 */
	public String enableCMCFeature(String featureName) {
		return "https://" + getHostName(MachineRole.CMC) + 
				"/lobtools/cmc/Configure?featureName=" + featureName +"&featureEnabled=true";
	}

}
