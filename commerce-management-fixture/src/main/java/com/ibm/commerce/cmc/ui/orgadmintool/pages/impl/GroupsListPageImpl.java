package com.ibm.commerce.cmc.ui.orgadmintool.pages.impl;

import com.ibm.commerce.cmc.ui.orgadmintool.pages.CreateGroupsPage;
import com.ibm.commerce.cmc.ui.orgadmintool.pages.GroupsListPage;
import com.ibm.commerce.cmc.ui.page.impl.AbstractCMCPage;
import com.ibm.commerce.qa.wte.framework.page.Identifier;

public class GroupsListPageImpl extends AbstractCMCPage implements GroupsListPage {
	
	
	private static final Identifier NEWGROUP = Identifier.byXPath(".//button[(text() = 'New')]");
	private static final Identifier IFRAME = Identifier.byXPath(".//iframe");
	private static final Identifier NAME_RESULT = Identifier.byXPath(".//td[(text() ='GROUP_NAME')]");
	private static final Identifier PARENT_ORG_RESULT = Identifier.byXPath(".//td[(text() ='PARENT_ORG')]");
	private static final Identifier DESCRIPTION_RESULT = Identifier.byXPath(".//td[text()='DESCRIPTION']");
	private static final Identifier GROUP_TYPE_RESULT = Identifier.byXPath(".//td[text()='GROUP_TYPE']");

	
	
	@Override
	public void selectIFrame() {
		this.selectIFrame(IFRAME);
	}	
	
	@Override
	public void getMainFrame() {
		this.getFrame();
	}

	@Override
	public CreateGroupsPage newGroup() {
		getElement(NEWGROUP).click();
		return getFactory().createPage().build(CreateGroupsPage.class);
	}
	
	@Override
	public void validateGroupExist(String name, String parentOrg, String description, String groupType) {
		validateElement(NAME_RESULT.replace("ORG_NAME", name));
		validateElement(PARENT_ORG_RESULT.replace("PARENT_ORG", parentOrg));
		validateElement(DESCRIPTION_RESULT.replace("ORGANIZATION_TYPE", description));
		validateElement(GROUP_TYPE_RESULT.replace("",groupType));
		
	}
}
