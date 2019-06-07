package com.ibm.commerce.cmc.ui.orgadmintool.pages;

import com.ibm.commerce.qa.wte.framework.page.PageObject;
import com.ibm.commerce.qa.wte.framework.page.PageObject.PageType;

@PageObject(type = PageType.SECTION)
public interface GroupsListPage {
	
	public CreateGroupsPage newGroup();
	
	public void selectIFrame();
	
	public void getMainFrame();
	
	public void validateGroupExist(String name, String parentOrg, String description, String groupType);

}
