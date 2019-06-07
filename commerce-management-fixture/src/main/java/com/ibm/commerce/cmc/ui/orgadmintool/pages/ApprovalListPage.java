package com.ibm.commerce.cmc.ui.orgadmintool.pages;

import com.ibm.commerce.qa.wte.framework.page.PageObject;
import com.ibm.commerce.qa.wte.framework.page.PageObject.PageType;

@PageObject(type = PageType.SECTION)
public interface ApprovalListPage {
	
  public void selectIFrame();
	
	public void getMainFrame();
	
	public void validateApprovalExist(String requestor, String approver, String process, String status, String  datesubmitted);

}
