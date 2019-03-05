package com.ibm.commerce.orgadmin.fvt.workflow;

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
import java.util.logging.Level;
import java.util.logging.Logger;

import com.google.inject.Inject;
import com.google.inject.Singleton;
import com.ibm.commerce.qa.util.bluebox.TestUsersEmailFixture;
import com.ibm.commerce.qa.util.bluebox.impl.TestUsersEmailFixtureImpl;
import com.ibm.commerce.cmc.ui.config.CMCConfigManager;
import com.ibm.commerce.cmc.ui.page.IbmIdSignInPage;
import com.ibm.commerce.cmc.ui.page.TwoFAAuthPage;
import com.ibm.commerce.orgadmin.fvt.test.AbstractSingleSessionTest;
import java.util.concurrent.TimeoutException;


@Singleton
public class LoginFlow extends AbstractSingleSessionTest{
	
	@Inject
	IbmIdSignInPage ibmIdSignInPage;
	
	@Inject
	private
	TwoFAAuthPage twoFactorAuthPage;
	
	@Inject
	CMCConfigManager cmcConfig;
	
	private final String USER_INFO_FILE_NAME = "data/UserInfo.xml";

	private final String USER_LOGIN_TEST_NAME = "LOGIN";
	
	private String username = "";

	private String password = "";

	// Setting up a logger
	private static final String CLASSNAME = LoginFlow.class.getName();

	private static final Logger LOGGER = Logger.getLogger(CLASSNAME);


	public String getUserName() {
		return username;
	}

	public String getPassword() {
		return password;
	}

	public void setUserName(String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * Main entry point for logging into ibm web app with a user
	 * @param user: datablock name from UserInfo.xml that specifies a specific test user
	 * @throws Exception
	 */
	public void login(String user) throws Exception{
		ibmIdSignInPage = getSession().continueToPage("https://idaas.iam.ibm.com", IbmIdSignInPage.class);
		initLoginData(user);
		loginThroughUI();
		//give enough time for log in to take effect
		Thread.sleep(1000);
		if (cmcConfig.getCustomProperty("2FA_ENABLED").contains("true")) {
			twoFactorAuthPage = getSession().continueToPage("https://idaas.iam.ibm.com/idaas/sps/authsvc?PolicyId=urn:ibm:security:authentication:asf:persession:EOTP"
					, TwoFAAuthPage.class);
			twoFactor();
		}
	}
	
	/**
	 * Initializes user and tenant specific information for this class.
	 * 
	 * @param user: datablock name from UserInfo.xml for test users
	 */
	public void initLoginData(String user) {
		dsm.setDataFile(USER_INFO_FILE_NAME);
		dsm.setTestName(USER_LOGIN_TEST_NAME);
		dsm.setDataBlock(user);
		setUserName(dsm.getInputParameter("username"));
		setPassword(dsm.getInputParameter("password"));
	}

	/**
	 * Main login method that submits IBM ID credentials, and checks and deals with any unneeded pop ups.
	 * Checks for privacy notice, 2FA, walkme.
	 * Then selects an organization if specified in UserInfo.xml
	 * @throws InterruptedException 
	 */
	private void loginThroughUI() throws InterruptedException{
		final String methodName = "loginThroughUI()";
		LOGGER.entering(CLASSNAME, methodName);

	    try{
	        // At times the UI may not provide the IBMid input because it failed to click the "Login with your IBMid link"
	        ibmIdSignInPage.validateIbmIdInput();
	    } catch( Exception e){
	    	LOGGER.logp(Level.WARNING, CLASSNAME, methodName, "Login flow failed to click \"Login with your IBMid\". Retrying.");
	        ibmIdSignInPage.validateIbmIdInput();
	    }

	    loginIBMIDPageSubmitCredentials();
	    
	}
	
	public void twoFactor() throws InterruptedException{
		
		final String methodName = "twoFactor()";
 		int count = 0;		
		 // If Two Factor Authentication is required, enter this flow
	 	try {

	 		//Try five times to get the correct two factor code
	 		for(count=0 ; count<5; count++) {
		 		twoFactorAuthPage.validateTwoFAWindow();
		 		
		 		Thread.sleep(5000);
		 		
		 		getTwoFactorCode();
	 		}
	 		
	 		if (count == 5) { throw new TimeoutException(); }

	 	} catch (Exception e) {
	 		//passed twoFA
	 		if (count==0) {
		 		// Silently pass through this check, but don't ignore the exception thrown
		 		LOGGER.logp(Level.FINE, CLASSNAME, methodName, e.toString());
	 		}
	 		else {
	 			LOGGER.log(Level.FINE, "Passes twoFA");
	 		}

	 	}
	}
	
	private void getTwoFactorCode() throws InterruptedException{
		
		TestUsersEmailFixture testUsersEmailFixture = new TestUsersEmailFixtureImpl();
 		String code = testUsersEmailFixture.getLatestTwoFactorVerificationCode(getUserName());

 		twoFactorAuthPage.setCodeInput(code);
 		twoFactorAuthPage.clickContinueButton();
	}

	/**
	 * Submits user name and password when you are on the IBM ID login page.
	 * @throws InterruptedException 
	 */
    private void loginIBMIDPageSubmitCredentials() throws InterruptedException{
      ibmIdSignInPage.setIbmIdInput(getUserName());
      ibmIdSignInPage.clickContinueButton();
      ibmIdSignInPage.setPasswordInput(getPassword());
      ibmIdSignInPage.clickSignInButton();
      Thread.sleep(2000);
    }

}
