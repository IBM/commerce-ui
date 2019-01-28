package com.ibm.commerce.cmc.rest.fixture;

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

/**
 * This fixture allows testers to interact with IBM's Bluebox email mocking service.
 * Note that the only email domain that can be served is 'isc4sb'.
 * example: 'test@isc4sb.com' will work, but not 'test@gmail.com' or 'test@live.com'
 * <p>
 * This fixture will grow based on the needs of the Self Service development & testing team.
 */
public abstract class TestUsersEmailFixture {

    /**
     * Get a list of emails from the Bluebox emailing service for the given email.
     *
     * @param userEmail a valid isc4bm.com hosted email address
     * @return A JSONArray representing a list of email objects
     */
    public abstract List<Email> getLatestEmails(String userEmail);

    /**
     * Get a list of deleted emails from the Bluebox emailing service for the given email.
     *
     * @param userEmail a valid isc4bm.com hosted email address
     * @return A JSONArray representing a list of email objects
     */
    public abstract List<Email> getDeletedEmails(String userEmail);

    /**
     * Get a StringBuilder representing the details of an email identified by its unique UID.
     *
     * @param emailUID a unique ID, example: '5713b662-9799-4263-b3ed-04ed3a7b4395'
     * @return a StringBuilder representing an email's detailed information (like HTML body, email text etc.)
     */
    public abstract StringBuilder getRawEmailDetails(String emailUID);

    /**
     * Given a test user's email, returns the latest Two-Factor Authentication verification code from their email.
     * If a verification code isn't found within a delta of 24 hours from current time, this method returns null.
     * If a verification code is found, but is older than 20 minutes, this method logs a warning that it may be expired.
     *
     * @param userEmail a test user's email address
     * @return the 6-digit verification code for 2-FA
     */
    public abstract String getLatestTwoFactorVerificationCode(String userEmail);

    /**
     * Given a test user's email and an email subject, find an email with a subject that contains the given email subject.
     * An email subject may not necessarily be identical; any subject which contains the query subject will be matched
     * and returned.
     * <p>
     * If no such email is found, returns null.
     *
     * @param userEmail    a test user's email (isc4sb.com domain)
     * @param emailSubject an email subject to query
     * @return an Email object representing an email with the given emailSubject, if found
     */
    public abstract Email getLatestEmailWithSubject(String userEmail, String emailSubject);

    /**
     * Given a test user's email and an email subject, returns a list of emails with matching subjects.
     * <p>
     * If no such emails are found, returns null.
     *
     * @param userEmail    a test user's email (isc4sb.com domain)
     * @param emailSubject an email subject to query
     * @return a List of Email objects representing emails with the given emailSubject, if found
     */
    public abstract List<Email> getListOfEmailsWithSubject(String userEmail, String emailSubject);
}
