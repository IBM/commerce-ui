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

import com.ibm.commerce.cmc.ui.dialog.LogoutConfirmationDialog;
import com.ibm.commerce.qa.wte.framework.page.PageObject;
import com.ibm.commerce.qa.wte.framework.page.PageObject.PageType;

@PageObject(type=PageType.SECTION)
public interface TopNavigation {

	/**
	 * Verify the current logon user matchs specified user
	 * @param userName
	 * @return current TopNavigation
	 */
	public TopNavigation verifyUserName(String userName);
	
	/**
	 * Verify currently working on approved content
	 * @return current TopNavigation
	 */
	public TopNavigation verifyWorkOnApprovedContent();
	
	/**
	 * Verify currently working on specified workspace task
	 * @param taskName
	 * @return current TopNavigation
	 */
	public TopNavigation verifyWorkOnTask(String taskName);
	
	/**
	 * Verify currently working on specified task under specified workspace
	 * @param workspaceName
	 * @param taskName
	 * @return current TopNavigation
	 */
	public TopNavigation verifyWorkOnWorkspaceTask(String workspaceName, String taskName);
	
	/**
	 * Logout CMC
	 * @return the LogonCMC page
	 */
	public LogoutConfirmationDialog logout();
	
	
	/**
	 * Show top menu drop down 
	 * @return TopMenuDropDown
	 */
	public TopMenuDropDown showTopMenuDropDown();
}
