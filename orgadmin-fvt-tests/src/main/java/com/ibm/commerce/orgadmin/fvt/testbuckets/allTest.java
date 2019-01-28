package com.ibm.commerce.orgadmin.fvt.testbuckets;

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

import com.ibm.commerce.orgadmin.fvt.test.*;

import junit.framework.JUnit4TestAdapter;
import junit.framework.Test;
import junit.framework.TestSuite;

/**
 * JUnit suite to run all test cases for orgadmin console
 */

public class allTest {
	
	/**
     * Suite to run all test cases
     * @return the suite
     */
    public static Test suite(){
    	
    	 TestSuite suite = new TestSuite();
    	 
    	 suite.addTest(new JUnit4TestAdapter(CreateOrganizationTest.class));
    	 suite.addTest(new JUnit4TestAdapter(CreateUserTest.class));
    	 suite.addTest(new JUnit4TestAdapter(FindOrganizationTest.class));
    	 
    	 return suite;
    	 
    }

}
