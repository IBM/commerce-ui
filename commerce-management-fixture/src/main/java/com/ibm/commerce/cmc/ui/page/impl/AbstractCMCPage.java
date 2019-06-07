package com.ibm.commerce.cmc.ui.page.impl;

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

import static org.junit.Assert.assertEquals;

import java.io.IOException;
import java.util.List;
import java.util.logging.Logger;

import com.google.inject.Inject;
import com.ibm.commerce.qa.wte.framework.page.Identifier;
import com.ibm.commerce.qa.wte.framework.page.PageFactory;
import com.ibm.commerce.qa.wte.framework.page.PageObject;
import com.ibm.commerce.qa.wte.framework.page.WteElement;

/**
 * This class provides the basic objects needed to work with all Dashboard page
 * objects. This is useful to inherit from if you are creating a page object
 * that represents a complete page (that is not broken up into sections like a
 * header and footer). Remember to annotate the class with {@link PageObject}.

 * 
 */
public abstract class AbstractCMCPage
{
	@Inject
	private Logger log;
	
	@Inject
	private PageFactory factory;
	
	/**
	 * Abstract Aurora page object constructor.
	 * 
	 * @param log
	 *            logging object
	 * @param factory
	 *            factory to work with pages and elements
	 */
	protected AbstractCMCPage()
	{ }

	/**
	 * @return the log
	 */
	protected Logger getLog()
	{
		return log;
	}

	/**
	 * @return the factory
	 */
	protected PageFactory getFactory()
	{
		return factory;
	}

	/**
	 * 
	 * Used as a convenience for sub classes of page objects. This will allow
	 * you to cast the base page object into a subclass.
	 * 
	 * @param pageSubClass the class of the page object you want to cast to
	 * @return the cast version of this page object
	 */
	public <T extends AbstractCMCPage> T castAs(Class<T> pageSubClass)
	{
		return pageSubClass.cast(this);
	}
	
	/*copy from basepageImpl*/
	/**
	 * Returns the element for the given Identifier.
	 *
	 * @param identifier
	 * @return element
	 */
	protected WteElement getElement(Identifier identifier) {
		return getFactory().createQuery(identifier).withinPageLoadTimeout().asVisible()
				.expectExactlyOne().executeForOne();
	}
	
	protected void getFrame(Identifier identifier) {
		getFactory().createQuery(identifier).selectFrame();
	}
	
	protected void getFrame() {
		getFactory().selectFirstWindow();
	}
	
	protected void getAndacceptAlert() {
		getFactory().getAlert().accept();;
	}
	
	
	/**
	 * Returns the element for the given Identifier.
	 *
	 * @param identifier
	 * @return element
	 */
	protected List<WteElement> getElements(Identifier identifier) {
		return getFactory().createQuery(identifier).withinPageLoadTimeout().execute();
	}
	
	protected WteElement getHiddenElement(Identifier identifier) {
		return getFactory().createQuery(identifier).withinPageLoadTimeout().asHidden()
				.expectExactlyOne().executeForOne();
	}
	
	protected void validateHiddenElement(Identifier identifier){
		getHiddenElement(identifier);
	}
	protected void validateElement(Identifier identifier) {
		getElement(identifier);
	}
	
	protected void validateElementDoesNotExist(Identifier identifier) {
		getFactory().createQuery(identifier).withinPageLoadTimeout().asNonExistent().execute();
	}
	
	protected void verifyEquals(String expected, String actual) {
		assertEquals(expected, actual);
	}
	
	protected void verifyEquals(boolean expected, boolean actual) {
		assertEquals(expected, actual);
	}
    protected void verifyContains(String expected, String actual) {
        if (!actual.contains(expected)) {
            throw new IllegalArgumentException(String.format(
                    "Arguments differ, expected: %s, actual: %s", expected,
                    actual));
        }
    }
    
    /**
     * Change browser focus to a newly opened window
     */
    protected void focusNewWindow(){
    	getFactory().selectNewestWindow().waitForNewBrowserWindowToLoad();
    }
    
    /**
     * Change context to a given iframe in the page.
     * @param iFrame iframe Identifier to change to
     */
    protected void selectIFrame(Identifier iFrame){
    	getFactory().createQuery(iFrame).withinPageLoadTimeout().selectFrame();
    }
    
    protected String getHtmlBody(Identifier identifier) throws IOException {
    	return getElement(identifier).getText();
    }
}
