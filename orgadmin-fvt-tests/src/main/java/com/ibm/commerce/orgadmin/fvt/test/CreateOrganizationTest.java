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
import com.ibm.commerce.cmc.ui.config.CMCConfigManager;
import com.ibm.commerce.cmc.ui.orgadmintool.pages.CreateOrganizationsPage;
import com.ibm.commerce.cmc.ui.orgadmintool.pages.OrganizationPage;
import com.ibm.commerce.cmc.ui.page.CMCMainPage;
import com.ibm.commerce.cmc.ui.page.FeatureConfigurationPage;
import com.ibm.commerce.cmc.ui.page.LogonCMC;
import com.ibm.commerce.cmc.ui.utils.CMCTools;
import com.ibm.commerce.cmc.ui.utils.CMCUIModule;
import com.ibm.commerce.orgadmin.fvt.workflow.LoginFlow;
import com.ibm.commerce.orgadmin.fvt.workflow.CreateOrgnizationFlow;
import com.ibm.commerce.qa.util.junit.runners.GuiceTestRunner;
import com.ibm.commerce.qa.util.junit.runners.TestModules;
import com.ibm.commerce.qa.wc.util.config.MachineRole;
import com.ibm.commerce.qa.wte.framework.page.Identifier;
import com.ibm.commerce.qa.wte.util.WcModule;

@RunWith(GuiceTestRunner.class)
@TestModules({WcModule.class, CMCUIModule.class})
public class CreateOrganizationTest extends AbstractSingleSessionTest{
	
	private final String ORG_FILE_NAME = "data/organizationTest.xml";

	private final String CREATE_ORG_TEST_NAME = "CREATEORG";
	
	private final String CREATE_ORG_DATA_BLOCK = "orgInfo";
	
	@Inject
	private CMCMainPage mainPage;
	
	@Inject
	private LoginFlow loginFlow;
	
	@Inject
	private CreateOrgnizationFlow createOrganizationFlow;
	
	@Inject
	private CMCConfigManager config;

	@Before
	public void setUp() throws Exception {
		
		String FeatureName = "organizationManagement";
		
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
	public void testCreateOrganization() throws Exception{
		
		dsm.setDataFile(ORG_FILE_NAME);
		dsm.setTestName(CREATE_ORG_TEST_NAME);
		dsm.setDataBlock(CREATE_ORG_DATA_BLOCK);
		
		OrganizationPage orgPage = mainPage.goToCMCToolPage(CMCTools.ORGANIZATION);
		mainPage.verifyCMCToolActive(CMCTools.ORGANIZATION);
		
		orgPage = createOrganizationFlow.setOrgName(dsm.getInputParameter("orgName")).setDescription(dsm.getInputParameter("description"))
		.setOrgType(dsm.getInputParameter("orgType")).setParentOrg(dsm.getInputParameter("parentOrg")).setStreetAddress(dsm.getInputParameter("streetAddress"))
		.setState(dsm.getInputParameter("state")).setCity(dsm.getInputParameter("city")).setPostalCode(dsm.getInputParameter("postalCode"))
		.setCountry(dsm.getInputParameter("country")).setPhone(dsm.getInputParameter("phone")).setEmail(dsm.getInputParameter("email")).createOrgThroughUI();;

		createOrganizationFlow.validateCreateOrg();
		
	}

}
