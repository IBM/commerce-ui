package com.ibm.commerce.cmc.ui.component;

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

import com.ibm.commerce.cmc.ui.utils.CMCTools;
import com.ibm.commerce.qa.wte.framework.page.PageObject;
import com.ibm.commerce.qa.wte.framework.page.PageObject.PageType;

@PageObject(type=PageType.SECTION)
public interface TopMenuDropDown {
	
	/**
	 * Go to the specified CMC tool
	 * @param tool
	 * @param pageObject
	 * @return the tool page
	 */
	public <T>T gotoCMCTool(CMCTools tool);
}
