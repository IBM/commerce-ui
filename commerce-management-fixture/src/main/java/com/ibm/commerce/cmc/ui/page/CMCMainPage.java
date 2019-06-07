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

import com.ibm.commerce.cmc.ui.component.TopNavigation;
import com.ibm.commerce.cmc.ui.utils.CMCTools;
import com.ibm.commerce.qa.wte.framework.page.PageObject;
import com.ibm.commerce.qa.wte.framework.page.PageObject.PageType;

@PageObject(type=PageType.MAIN_WINDOW)
public interface CMCMainPage {
	
	/**
	 * Get the top navigation 
	 * @return TopNavigation
	 */
	public TopNavigation getTopNavigation();
	
	/**
	 * Verify CMC Tool is opened and shows as a tab
	 * @param tool
	 * @return CMCMainPage
	 */
	public CMCMainPage verifyCMCToolOpened(CMCTools tool);
	
	/**
	 * Verify CMC Tool is currently active and showing in the main content
	 * @param tool
	 * @return CMCMainPage
	 */
	public CMCMainPage verifyCMCToolActive(CMCTools tool);
	
	/**
	 * Go to specified CMC Tool by clicking on the tool tab
	 * @param cmcToolPage
	 * @return CMC tool page
	 */
	public <T>T goToCMCToolPage(CMCTools tool);
	
	public abstract <T> T getComponent(Class<T> componentClass);
	public CMCMainPage acceptAlert();
	public CMCMainPage clickOKOnAlert();
}
