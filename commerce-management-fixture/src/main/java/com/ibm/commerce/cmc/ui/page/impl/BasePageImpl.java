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

import java.util.List;
import java.util.concurrent.TimeUnit;

import com.google.inject.Inject;
import com.ibm.commerce.cmc.ui.page.BasePage;
import com.ibm.commerce.qa.wte.framework.page.Identifier;
import com.ibm.commerce.qa.wte.framework.page.RelativePageFactory;
import com.ibm.commerce.qa.wte.framework.page.WteElement;

public abstract class BasePageImpl implements BasePage {
    @Inject
    private RelativePageFactory pageFactory;

    /**
     * Returns the {@link RelativePageFactory} instance
     *
     * @return The page factory
     */
    protected final RelativePageFactory getFactory() {
        return pageFactory;
    }

    /**
     * Returns the element for the given Identifier.
     *
     * @param identifier
     * @return element
     */
    protected WteElement getElement(Identifier identifier) {
        return getFactory().createQuery(identifier).withinAjaxTimeout().asVisible()
                .expectExactlyOne().executeForOne();
   
    }
    
    /**
     * Returns the element for the given Identifier within Script Timeout.
     *
     * @param identifier
     * @return element
     */
    protected WteElement getElementWithinScriptTimeout(Identifier identifier) {
        return getFactory().createQuery(identifier).withinScriptTimeout().asVisible()
                .expectExactlyOne().executeForOne();
    }
    
    /**
     * Returns the element for the given Identifier within explicit timeout.
     *
     * @param identifier
     * @return element
     */
    protected WteElement getElementWithinExplicitTimeout(Identifier identifier, int seconds) {
        return getFactory().createQuery(identifier).withinExplicitTimeout(seconds, TimeUnit.SECONDS).asVisible()
                .expectExactlyOne().executeForOne();
    }
    
    /**
	 * Returns the element for the given Identifier when the element is hidden/ has less opacity.
	 *
	 * @param identifier
	 * @return element
	 */
	protected WteElement getElementAsExist(Identifier identifier) {
		return getFactory().createQuery(identifier).withinAjaxTimeout().asExisting()
				.expectExactlyOne().executeForOne();
	}

    protected void getFrame(Identifier identifier) {
        getFactory().createQuery(identifier).selectFrame();
    }

    protected void getFrame() {
        getFactory().selectFirstWindow();
    }

    /**
     * Returns the element for the given Identifier.
     *
     * @param identifier
     * @return element
     */
    protected List<WteElement> getElements(Identifier identifier) {
        return getFactory().createQuery(identifier).withinAjaxTimeout().execute();
    }

    protected WteElement getHiddenElement(Identifier identifier) {
        return getFactory().createQuery(identifier).withinAjaxTimeout().asHidden()
                .expectExactlyOne().executeForOne();
    }

    /**
     * Get a hidden element on a page
     *
     * @param identifier an identifier for a page
     * @return
     */
    protected WteElement gethiddenElementWithinScriptTimeout(Identifier identifier) {
        return getFactory().createQuery(identifier).withinScriptTimeout().asHidden().expectExactlyOne().executeForOne();
    }

    protected void validateHiddenElement(Identifier identifier) {
        getHiddenElement(identifier);
    }

    /**
     * Validate the existence of a hidden element on a page
     *
     * @param identifier an identifier for a page
     */
    protected void validateHiddenElementWithinScriptTimeout(Identifier identifier) {
        gethiddenElementWithinScriptTimeout(identifier);
    }

    protected void validateElement(Identifier identifier) {
        getElement(identifier);
    }

    protected void validateElementDoesNotExist(Identifier identifier) {
        getFactory().createQuery(identifier).withinAjaxTimeout().asNonExistent().execute();
    }

    protected void verifyEquals(String expected, String actual) {
        if (!expected.equals(actual)) {
            throw new IllegalArgumentException(String.format(
                    "Arguments differ, expected: %s, actual: %s", expected,
                    actual));
        }
    }

    protected void verifyEquals(boolean expected, boolean actual) {
        if (expected != actual) {
            throw new IllegalArgumentException(String.format(
                    "Arguments differ, expected: %s, actual: %s", expected,
                    actual));
        }
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
    protected void focusNewWindow() {
        getFactory().selectNewestWindow().waitForNewBrowserWindowToLoad();
    }

    /**
     * Change context to a given iframe in the page.
     *
     * @param iFrame iframe Identifier to change to
     */
    protected void selectIFrame(Identifier iFrame) {
        getFactory().createQuery(iFrame).withinPageLoadTimeout().selectFrame();
    }

}

