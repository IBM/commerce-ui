package com.ibm.commerce.cmc.ui.utils;

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

import com.ibm.commerce.cmc.ui.orgadmintool.pages.*;

/**
 * This ENUM contains all entries showingin the CMC top menu drop down (hamburger menu)
 */
public enum CMCTools {

	ORGANIZATION("Organization Management", OrganizationPage.class),
	USER("User Management", UserManagementPage.class);
	
	private final String displayName;
	private final Class<?> pageObjectClass;
	
	private CMCTools(String theDisplayName, Class<?> clazz) {
		displayName = theDisplayName;
		pageObjectClass = clazz;
	}
	
	/**
	 * Get the display name of the CMC Tool
	 * @return the String representation of the display name
	 */
	public String getDisplayName() {
		return displayName;
	}
	
	/**
	 * Get the page object class of the CMC Tool
	 * @return Class representing the page
	 */
	public Class<?> getToolPageObjectClass() {
		return pageObjectClass;
	}
}
