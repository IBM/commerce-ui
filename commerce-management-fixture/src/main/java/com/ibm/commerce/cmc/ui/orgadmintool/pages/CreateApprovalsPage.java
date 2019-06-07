package com.ibm.commerce.cmc.ui.orgadmintool.pages;

import com.ibm.commerce.qa.wte.framework.page.PageObject;
import com.ibm.commerce.qa.wte.framework.page.PageObject.PageType;

@PageObject(type=PageType.SECTION)
public interface CreateApprovalsPage {
	
	public CreateApprovalsPage selectApprovalsRequestor(String approvalRequestor);
	


	public CreateApprovalsPage newApproval();

}
