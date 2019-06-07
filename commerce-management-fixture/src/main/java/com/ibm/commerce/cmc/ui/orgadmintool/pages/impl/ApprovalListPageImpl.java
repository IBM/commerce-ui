package com.ibm.commerce.cmc.ui.orgadmintool.pages.impl;

import com.ibm.commerce.cmc.ui.orgadmintool.pages.ApprovalListPage;
import com.ibm.commerce.cmc.ui.page.impl.AbstractCMCPage;
import com.ibm.commerce.qa.wte.framework.page.Identifier;

public class ApprovalListPageImpl extends AbstractCMCPage implements ApprovalListPage {
	
	
	
	private static final Identifier IFRAME = Identifier.byXPath(".//iframe");
	private static final Identifier REQUESTOR_RESULT = Identifier.byXPath(".//td[(text() = 'REQUESTOR')]");
	private static final Identifier APPROVER_RESULT = Identifier.byXPath(".//td[(text() = 'APPROVER')]");
	private static final Identifier PROCESS_RESULT = Identifier.byXPath(".//td[(text() = 'PROCESS')]");
	private static final Identifier STATUS_RESULT = Identifier.byXPath(".//td[(text() = 'STATUS')]");
	private static final Identifier DATESUBMITTED_RESULT = Identifier.byXPath(".//td[(text() = 'DATESUBMITTED')]"); 
	
	
	@Override
	public void selectIFrame() {
		this.selectIFrame(IFRAME);
	}	
	
	@Override
	public void getMainFrame() {
		this.getFrame();
	}

	@Override
	public void validateApprovalExist(String requestor, String approver, String process, String status,
			String datesubmitted) {
		// TODO Auto-generated method stub
		validateElement(REQUESTOR_RESULT.replace("REQUESTOR", requestor));
		validateElement(APPROVER_RESULT.replace("APPROVER", approver));
		validateElement(PROCESS_RESULT.replace("PROCESS", process));
		validateElement(STATUS_RESULT.replace("STATUS",status));
		validateElement(DATESUBMITTED_RESULT.replace("DATESUBMITTED",datesubmitted));
	}

	
	

	

}
