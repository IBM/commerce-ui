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
import com.ibm.commerce.cmc.ui.page.impl.AbstractCMCPage;
import com.ibm.commerce.cmc.ui.utils.CMCTools;
import com.ibm.commerce.qa.wte.framework.page.Identifier;
import com.ibm.commerce.qa.wte.framework.page.PageValidator;
import com.ibm.commerce.qa.wte.framework.page.RootIdentifier;

public class RealTopMenuDropDown extends AbstractCMCPage implements TopMenuDropDown{
	@RootIdentifier
	public static final Identifier ROOT_IDENT = Identifier.byXPath(".//div[@modulename='cmc/shell/MainWorkbench::_$0']");
	
	@PageValidator
	private static final Identifier HAMBURGER_MENU = Identifier.byXPath(".//div[@modulename='cmc/shell/BannerArea::_$0_$1']");

	private static final Identifier CMC_TOOL_BUTTON = Identifier.byXPath(".//div[div/div[@modulename='cmc/shell/ApplicationMenuItem::_$1_$0' and text()='CMC_TOOL_NAME']]");

	
	@SuppressWarnings("unchecked")
	@Override
	public <T> T gotoCMCTool(CMCTools tool) {
		
		getFactory().executeForOne(HAMBURGER_MENU).click();
		
		getFactory().createQuery(CMC_TOOL_BUTTON.replace("CMC_TOOL_NAME", tool.getDisplayName()))
		.withinScriptTimeout().asVisible().expectExactlyOne().executeForOne().click();
		
		return (T) getFactory().createPage().build(tool.getToolPageObjectClass());
		
	}

}
