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

import com.google.inject.AbstractModule;
import com.ibm.commerce.cmc.junit.CMCWteConfigLifeCycleListener;
import com.ibm.commerce.cmc.junit.CMCWteTestRule;
import com.ibm.commerce.cmc.junit.impl.CMCWteConfigLifeCycleListenerImpl;
import com.ibm.commerce.cmc.junit.impl.CMCWteTestRuleImpl;
import com.ibm.commerce.cmc.ui.component.TopMenuDropDown;
import com.ibm.commerce.cmc.ui.component.TopNavigation;
import com.ibm.commerce.cmc.ui.component.impl.RealTopMenuDropDown;
import com.ibm.commerce.cmc.ui.component.impl.RealTopNavigation;
import com.ibm.commerce.cmc.ui.dialog.*;
import com.ibm.commerce.cmc.ui.dialog.impl.*;
import com.ibm.commerce.cmc.ui.orgadmintool.pages.*;
import com.ibm.commerce.cmc.ui.orgadmintool.pages.impl.*;
import com.ibm.commerce.cmc.ui.page.*;
import com.ibm.commerce.cmc.ui.page.impl.*;

public class CMCUIModule extends AbstractModule {

	@Override
	protected void configure() {
		// test rule binding
		bind(CMCWteTestRule.class).to(CMCWteTestRuleImpl.class);
		bind(CMCWteConfigLifeCycleListener.class).to(CMCWteConfigLifeCycleListenerImpl.class);
		
		// pages binding
		bind(LogonCMC.class).to(RealLogonCMC.class);
		bind(CMCMainPage.class).to(RealCMCMainPage.class);
		bind(FeatureConfigurationPage.class).to(RealFeatureConfigurationPage.class);
		bind(IbmIdSignInPage.class).to(IbmIdSignInPageImpl.class);
		bind(OrganizationPage.class).to(OrganizationPageImpl.class);
		bind(FindOrganizationsPage.class).to(FindOrganizationsPageImpl.class);
		bind(CreateOrganizationsPage.class).to(CreateOrganizationsPageImpl.class);
		bind(UserManagementPage.class).to(UserManagementPageImpl.class);
		bind(CreateUserPage.class).to(CreateUserPageImpl.class);
		bind(GroupsListPage.class).to(GroupsListPageImpl.class);
		bind(CreateGroupsPage.class).to(CreateGroupsPageImpl.class);
		bind(ApprovalListPage.class).to(ApprovalListPageImpl.class);
		
		
		// components binding
		bind(TopNavigation.class).to(RealTopNavigation.class);
		bind(TopMenuDropDown.class).to(RealTopMenuDropDown.class);		
		
		// dialogs binding
		bind(LogoutConfirmationDialog.class).to(RealLogoutConfirmationDialog.class);
		
	}
	
}
