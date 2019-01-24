package com.ibm.commerce.orgadmin.fvt.test;

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

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import com.google.inject.Inject;
import com.ibm.commerce.casl.foundation.util.CaslFoundationModule;
import com.ibm.commerce.cmc.ui.orgadmintool.pages.OrganizationPage;
import com.ibm.commerce.cmc.ui.orgadmintool.pages.UserManagementPage;
import com.ibm.commerce.cmc.ui.page.CMCMainPage;
import com.ibm.commerce.cmc.ui.page.FeatureConfigurationPage;
import com.ibm.commerce.cmc.ui.page.LogonCMC;
import com.ibm.commerce.cmc.ui.utils.CMCTools;
import com.ibm.commerce.cmc.ui.utils.CMCUIModule;
import com.ibm.commerce.orgadmin.fvt.workflow.CreateUserFlow;
import com.ibm.commerce.orgadmin.fvt.workflow.LoginFlow;
import com.ibm.commerce.qa.util.junit.runners.GuiceTestRunner;
import com.ibm.commerce.qa.util.junit.runners.TestModules;
import com.ibm.commerce.qa.wc.util.config.MachineRole;
import com.ibm.commerce.qa.wte.framework.util.WteBaseModule;
import com.ibm.commerce.qa.wte.s2impl.page.Selenium2BaseModule;
import com.ibm.commerce.qa.wte.util.WcModule;

@RunWith(GuiceTestRunner.class)
@TestModules({WcModule.class, CMCUIModule.class})
public class CreateUserTest  extends AbstractSingleSessionTest{
	
	private final String USER_FILE_NAME = "data/userTest.xml";

	private final String CREATE_USER_TEST_NAME = "ADDUSER";
	
	private final String CREATE_USER_DATA_BLOCK = "userInfo";
	
	@Inject
	private CMCMainPage mainPage;
	
	@Inject
	private LoginFlow loginFlow;
	
	@Inject
	private CreateUserFlow createUserFlow;
	
	@Before
	public void setUp() throws Exception{
		
		String FeatureName = "userManagement";
		
		this.enableFeature(FeatureName);
		
		loginFlow.login("baseOrgAdmin");
		
		//perform log on action
		LogonCMC logonCMC = getSession().continueToPage(getConfig().getCMCUrl(), LogonCMC.class);
			
		mainPage = logonCMC.logon();

	}
	
	@After
	public void tearDown() throws Exception {
		//perform log off action
		mainPage.getTopNavigation().logout().confirm();
	}
	
	@Test
	public void testCreateUser() throws Exception{
		
		dsm.setDataFile(USER_FILE_NAME);
		dsm.setTestName(CREATE_USER_TEST_NAME);
		dsm.setDataBlock(CREATE_USER_DATA_BLOCK);
		
		UserManagementPage userPage = mainPage.goToCMCToolPage(CMCTools.USER);
		mainPage.verifyCMCToolActive(CMCTools.USER);
		
		createUserFlow.setLogonId(dsm.getInputParameter("logonId")).setTitle(dsm.getInputParameter("title"))
		.setFirstName(dsm.getInputParameter("firstName")).setMiddleName(dsm.getInputParameter("middleName"))
		.setLastName(dsm.getInputParameter("lastName")).setPassword(dsm.getInputParameter("password"))
		.setPasswordConfirm(dsm.getInputParameter("passwordConfirm")).setAccountPolicy(dsm.getInputParameter("accountPolicy"))
		.setAccountStatus(dsm.getInputParameter("accountStatus")).setEmployeeId(dsm.getInputParameter("employeeId"))
		.setEmployeeType(dsm.getInputParameter("employeeType")).setDepartmentNumber(dsm.getInputParameter("departmentNumber"))
		.setManagerName(dsm.getInputParameter("managerName")).setSecretaryName(dsm.getInputParameter("secretaryName"))
		.setLanguage(dsm.getInputParameter("language")).setParentOrg(dsm.getInputParameter("parentOrg"))
		.setStreetAddress(dsm.getInputParameter("streetAddress")).setCity(dsm.getInputParameter("city"))
		.setState(dsm.getInputParameter("state")).setZip(dsm.getInputParameter("zip"))
		.setCountry(dsm.getInputParameter("country")).setEmail1(dsm.getInputParameter("email1"))
		.setEmail2(dsm.getInputParameter("email2")).setPhone1(dsm.getInputParameter("phone1"))
		.setPhone2(dsm.getInputParameter("phone2")).setFax1(dsm.getInputParameter("fax1")).setFax2(dsm.getInputParameter("fax2"))
		.createUserThroughUI().validateCreateUser();
		
	}

}
