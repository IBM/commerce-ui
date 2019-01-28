package com.ibm.commerce.cmc.ui.component.impl;

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

import com.ibm.commerce.cmc.ui.component.TopMenuDropDown;
import com.ibm.commerce.cmc.ui.component.TopNavigation;
import com.ibm.commerce.cmc.ui.dialog.LogoutConfirmationDialog;
import com.ibm.commerce.cmc.ui.page.impl.AbstractCMCPage;
import com.ibm.commerce.qa.wte.framework.page.Identifier;
import com.ibm.commerce.qa.wte.framework.page.PageValidator;
import com.ibm.commerce.qa.wte.framework.page.RootIdentifier;

public class RealTopNavigation extends AbstractCMCPage implements TopNavigation{
	@RootIdentifier
	public static final Identifier ROOT_IDENT = Identifier.byXPath(".//div[@modulename='cmc/shell/MainWorkbench::_$0']");
	
	@PageValidator
	private static final Identifier HAMBURGER_MENU = Identifier.byXPath(".//div[@modulename='cmc/shell/ApplicationMenu::_$1']");

	@PageValidator
	private static final Identifier LOGOUT_BUTTON = Identifier.byXPath(".//div[@modulename='cmc/shell/LogoutLink::_$0_$0']");
	
	@PageValidator
	private static final Identifier USER_FIELD = Identifier.byXPath(".//div[@modulename='cmc/shell/BannerArea::_$1_$1_$2']");
	

	@PageValidator
	private static final Identifier TOP_DROPDOWN_MENU = Identifier.byXPath(".//div[@modulename='cmc/shell/BannerArea::_$0_$1']");
							

	private static final Identifier WORK_ON_APPROVED_CONTENT = Identifier.byXPath(".//div[@modulename='cmc/shell/WorkspaceIndicator::_$1_$1']");
	
	private static final Identifier TASK_NAME = Identifier.byXPath(".//div[@modulename='cmc/shell/WorkspaceIndicator::_$0_$1']");
	
	private static final Identifier WORKSPACE_NAME = Identifier.byXPath(".//div[@modulename='cmc/shell/WorkspaceIndicator::_$0_$4']");
	
	

	
	@Override
	public TopNavigation verifyUserName(String userName) {
		String actualUsername = getFactory().createQuery(USER_FIELD).withinImplicitTimeout().asVisible().expectExactlyOne().executeForOne().getText();
		
		final String GREETING = "Welcome ";
		actualUsername = actualUsername.replace(GREETING, "");
		if (!userName.equals(actualUsername)) {
			throw new IllegalStateException("Expect login user to be '" + userName + "', but actual is '" + actualUsername + "'");
		}
		
		return this;
	}

	@Override
	public TopNavigation verifyWorkOnApprovedContent() {
		
		boolean isVisible = getFactory().createQuery(WORK_ON_APPROVED_CONTENT).withinAjaxTimeout().expectExactlyOne().asVisible().executeChecked();
		
		if (!isVisible) {
			throw new IllegalStateException ("You are NOT 'Working on Approved Content'");
		}
		return this;

	}

	@Override
	public TopNavigation verifyWorkOnTask(String taskName) {
		
		String actualTaskName = getFactory().createQuery(TASK_NAME).withinImplicitTimeout().asVisible().expectExactlyOne().executeForOne().getText();
		
		if (!taskName.equals(actualTaskName)) {
			throw new IllegalStateException("Expected Task Name: '" + taskName + "', but actual Task Name: '" + actualTaskName + "'");
		}
		
		return this;
	}

	@Override
	public TopNavigation verifyWorkOnWorkspaceTask(String workspaceName,
			String taskName) {
		
		String actualTaskName = getFactory().createQuery(TASK_NAME).withinImplicitTimeout().asVisible().expectExactlyOne().executeForOne().getText();
		String actualWorkSpaceName = getFactory().createQuery(WORKSPACE_NAME).withinImplicitTimeout().asVisible().expectExactlyOne().executeForOne().getText();
		
		if (!workspaceName.equals(actualWorkSpaceName)) {
			throw new IllegalStateException("Expected Workspace Name: '" + workspaceName + "', but actual Workspace Name: '" + actualWorkSpaceName + "'");
		}
		else if (!taskName.equals(actualTaskName)) {
			throw new IllegalStateException("Expected Task Name: '" + taskName + "', but actual Task Name: '" + actualTaskName + "'");
		}
		
		return this;
	}

	@Override
	public LogoutConfirmationDialog logout() {
		getFactory().createQuery(LOGOUT_BUTTON).withinImplicitTimeout().asVisible().expectExactlyOne().executeForOne().click();
		
		return getFactory().createPage().build(LogoutConfirmationDialog.class);
	}

	@Override
	public TopMenuDropDown showTopMenuDropDown() {
		
		getFactory().executeForOne(TOP_DROPDOWN_MENU).click();
		return getFactory().createPage().build(TopMenuDropDown.class);
	}
}
