package com.ibm.commerce.cmc.ui.page.impl;

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
import com.ibm.commerce.cmc.ui.component.impl.RealTopNavigation;
import com.ibm.commerce.cmc.ui.page.CMCMainPage;
import com.ibm.commerce.cmc.ui.utils.CMCTools;
import com.ibm.commerce.qa.wte.framework.page.Identifier;
import com.ibm.commerce.qa.wte.framework.page.PageSection;

public class RealCMCMainPage extends AbstractCMCPage implements CMCMainPage {

	private static final  Identifier TOP_NAV_ROOT = RealTopNavigation.ROOT_IDENT;
	
	private static final Identifier HAMBURGER_MENU = Identifier.byXPath(".//div[@modulename='cmc/shell/BannerArea::_$0_$1']");
	private static final Identifier CMC_TOOL_BUTTON = Identifier.byXPath(".//div[div/div[@modulename='cmc/shell/ApplicationMenuItem::_$1_$0' and text()='CMC_TOOL_NAME']]");

	private static final Identifier CMC_TOOL_OPENED_ACTIVE = Identifier.byXPath(".//div[@modulename='cmc/shell/ToolTab::_$0_$1_$1' and text()='CMC_TOOL_NAME']");
	private static final Identifier CMC_TOOL_OPENED_NOT_ACTIVE = Identifier.byXPath(".//div[@modulename='cmc/shell/ToolTab::_$1_$1_$1' and text()='CMC_TOOL_NAME']");
	
	private static final Identifier ALERT_VIEW_OK = Identifier.byXPath("//*[@id=\"mainContent\"]/div[2]/div[20]/div[7]/div/div[4]/div[6]");
	
			
	@PageSection(identifier = "TOP_NAV_ROOT")
	private TopNavigation topNavigation;
	
	@Override
	public TopNavigation getTopNavigation() {
		return topNavigation;
	}

	@Override
	public CMCMainPage verifyCMCToolOpened(CMCTools tool) {
		
		boolean isActive = getFactory().createQuery(CMC_TOOL_OPENED_ACTIVE.replace("CMC_TOOL_NAME", tool.getDisplayName()))
				.withinAjaxTimeout().expectExactlyOne().asVisible().executeChecked();
		
		boolean isOpened = getFactory().createQuery(CMC_TOOL_OPENED_NOT_ACTIVE.replace("CMC_TOOL_NAME", tool.getDisplayName()))
				.withinAjaxTimeout().expectExactlyOne().asVisible().executeChecked();
		
		if (!isActive && !isOpened) {
			throw new IllegalStateException ("CMC Tool: "+tool.getDisplayName()+" is NOT opened.");
		}
		
		return this;
	}

	@Override
	public CMCMainPage verifyCMCToolActive(CMCTools tool) {
		
		boolean isActive = getFactory().createQuery(CMC_TOOL_OPENED_ACTIVE.replace("CMC_TOOL_NAME", tool.getDisplayName()))
				.withinAjaxTimeout().expectExactlyOne().asVisible().executeChecked();
	
		if (!isActive) {
			throw new IllegalStateException ("CMC Tool: "+tool.getDisplayName()+" is NOT Active.");
		}
		return this;
	}

	@SuppressWarnings("unchecked")
	@Override
	public <T> T goToCMCToolPage(CMCTools tool) {

		getFactory().executeForOne(HAMBURGER_MENU).click();

		getFactory().createQuery(CMC_TOOL_BUTTON.replace("CMC_TOOL_NAME", tool.getDisplayName()))
		.withinScriptTimeout().asVisible().expectExactlyOne().executeForOne().click();
		
		return (T) getFactory().createPage().build(tool.getToolPageObjectClass());
	}
	
	public <T> T getComponent(Class<T> componentClass) {
		
		return getFactory().createPage().build(componentClass);
	}
	
	
	public CMCMainPage acceptAlert() {
		getAndacceptAlert();
		return this;
	}
	
	public CMCMainPage clickOKOnAlert() {
		getFactory().createQuery(ALERT_VIEW_OK).executeForOne().click();
		return this;
	}

}
