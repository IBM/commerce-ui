package com.ibm.commerce.cmc.rest.fixture.impl;

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

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.ibm.commerce.cmc.rest.fixture.Email;
import com.ibm.commerce.cmc.rest.fixture.TestUsersEmailFixture;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Type;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static com.google.common.base.Throwables.getStackTraceAsString;

/**
 * This fixture allows testers to interact with IBM's Bluebox email mocking service.
 * Note that the only email domain that can be served is 'isc4sb'.
 * example: 'test@isc4sb.com' will work, but not 'test@gmail.com' or 'test@live.com'
 * <p>
 * This fixture will grow based on the needs of the Self Service development & testing team.
 */
public class TestUsersEmailFixtureImpl extends TestUsersEmailFixture {
    /**
     * REST endpoints for accessing Bluebox's API.
     * <p>
     * From the documentation:
     * List user emails: http://[hostname]/[bluebox context]/jaxrs/inbox/list/[email]/[0=ANY, 1=NORMAL, 2=DELETED
     * List email detail: http://[hostname]/[bluebox context]/jaxrs//message/detail/[Uid]
     */
    private String INBOX_URL_FORMAT = "https://%s/%s/jaxrs/inbox/list/%s/%s ";
    private String MESSAGE_DETAILS_URL_FORMAT = "https://%s/%s/jaxrs/message/detail/%s";

    private String BLUEBOX_HOSTNAME = "bluebox.ams01.isc4sb.com";
    private String BLUEBOX_CONTENT = "bluebox";

    // Email types available by Bluebox
    private String ANY = "0";
    private String NORMAL = "1";
    private String DELETED = "2";

    // Setting up a logger
    private static final String CLASSNAME = TestUsersEmailFixtureImpl.class.getName();
    private static final Logger LOGGER = Logger.getLogger(CLASSNAME);

    /**
     * Send an HTTP GET request to the Bluebox isc4sb domain and return the response body as a string.
     *
     * @param formattedURL: A valid URL endpoint on the Bluebox isc4sb domain
     * @return: A StringBuilder representing the response body of this reques
     */
    private StringBuilder sendHttpGetRequest(String formattedURL) {
        final String methodName = "sendHttpGetRequest()";
        LOGGER.entering(CLASSNAME, methodName);

        StringBuilder httpGetResponse = new StringBuilder();

        try {
            // Sending a GET request to the email server
            URL url = new URL(formattedURL);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            LOGGER.logp(Level.INFO, CLASSNAME, methodName, "Sending 'GET' request to URL: " + formattedURL);

            // Checking response code
            int responseCode = connection.getResponseCode();
            LOGGER.logp(Level.INFO, CLASSNAME, methodName, "Response Code: " + responseCode);

            if (responseCode == 200) {
                // Reading the HTTP Response into a buffer
                String line;
                BufferedReader buffer = new BufferedReader(new InputStreamReader(connection.getInputStream()));

                while ((line = buffer.readLine()) != null) {
                    httpGetResponse.append(line);
                }

                buffer.close();
            }

            connection.disconnect();

        } catch (MalformedURLException e) {
            LOGGER.logp(Level.WARNING, CLASSNAME, methodName, "The URL seems to be malformed: " + e.getMessage());
            String errorMessage = getStackTraceAsString(e);
            LOGGER.logp(Level.WARNING, CLASSNAME, methodName, errorMessage);
        } catch (IOException e) {
            String errorMessage = getStackTraceAsString(e);
            LOGGER.logp(Level.WARNING, CLASSNAME, methodName, errorMessage);
        }

        return httpGetResponse;
    }

    private List<Email> parseResonseStringToEmailList(StringBuilder response) {
        Gson googleJson = new Gson();
        Type listType = new TypeToken<ArrayList<Email>>() {
        }.getType();
        return googleJson.fromJson(response.toString(), listType);
    }

    /**
     * Get a list of emails from the Bluebox emailing service for the given email.
     *
     * @param userEmail: A valid isc4bm.com hosted email address
     * @return: A JSONArray representing a list of email objects
     */
    @Override
    public List<Email> getLatestEmails(String userEmail) {
        final String methodName = "getLatestEmails()";
        LOGGER.entering(CLASSNAME, methodName);

        // Formatting the REST endpoint for receiving emails
        String formattedRequestURL = String.format(INBOX_URL_FORMAT, BLUEBOX_HOSTNAME, BLUEBOX_CONTENT, userEmail, NORMAL);

        // Send a GET request to get a list of emails for the email given
        StringBuilder response = sendHttpGetRequest(formattedRequestURL);

        // Parse the http response string into a JSON array
        List<Email> emailsList = parseResonseStringToEmailList(response);

        // If anyone needs to check the list of emails. This list can get incredibly long and is best left only
        // to view for debugging purposes
        LOGGER.logp(Level.FINE, CLASSNAME, methodName, "Response Body: \n" + emailsList);

        return emailsList;
    }

    /**
     * Get a list of deleted emails from the Bluebox emailing service for the given email.
     *
     * @param userEmail a valid isc4bm.com hosted email address
     * @return A JSONArray representing a list of email objects
     */
    @Override
    public List<Email> getDeletedEmails(String userEmail) {
        final String methodName = "getDeletedEmails()";
        LOGGER.entering(CLASSNAME, methodName);

        // Formatting the REST endpoint for receiving emails
        String formattedRequestURL = String.format(INBOX_URL_FORMAT, BLUEBOX_HOSTNAME, BLUEBOX_CONTENT, userEmail, DELETED);

        // Send a GET request to get a list of emails for the email given
        StringBuilder response = sendHttpGetRequest(formattedRequestURL);

        // Parse the http response string into a JSON array
        List<Email> emailsList = parseResonseStringToEmailList(response);

        // If anyone needs to check the list of emails. This list can get incredibly long and is best left only
        // to view for debugging purposes
        LOGGER.logp(Level.FINE, CLASSNAME, methodName, "Response Body: \n" + emailsList);

        return emailsList;
    }

    /**
     * Given a test user's email, returns the latest Two-Factor Authentication verification code from their email.
     * If a verification code isn't found within a delta of 24 hours from current time, this method returns null.
     * If a verification code is found, but is older than 20 minutes, this method logs a warning that it may be expired.
     *
     * @param userEmail : A test user's email address
     * @return: The 6-digit verification code for 2-FA
     */
    @Override
    public String getLatestTwoFactorVerificationCode(String userEmail) {
        final String methodName = "getLatestTwoFactorVerificationCode()";
        LOGGER.entering(CLASSNAME, methodName);

        // Objects needed to search emails
        final LocalDateTime yesterday = LocalDateTime.now().minusDays(1);
        final LocalDateTime expiredCodeTime = LocalDateTime.now().minusMinutes(20);
        final String verificationEmailSubject = "Verify your identity";

        // A verification code is always of the pattern: dddd-dddddd, i.e 4 digits followed by a dash and 6 digits
        final Pattern verificationCodeRegex = Pattern.compile("\\d{4}-\\d{6}");

        Email verificationEmail = null;
        String verificationCode = null;

        // Get the latest emails from this user
        List<Email> latestUserEmails = getLatestEmails(userEmail);

        for (Email email : latestUserEmails) {
            String emailSubject = email.getSubject();
            LocalDateTime dateReceived = email.getReceived().plusHours(1);  // Bluebox server time is one hour behind torolab time

            if (dateReceived.isBefore(yesterday)) {
                LOGGER.logp(Level.INFO, CLASSNAME, methodName, "Found out-of-date emails, stopping search.");
                break;
            } else if (emailSubject.equals(verificationEmailSubject)) {
                // Notify if a verification code is older than 20 minutes, but within 24 days.
                if (dateReceived.isBefore(expiredCodeTime)) {
                    LOGGER.logp(Level.WARNING, CLASSNAME, methodName, "This verification email may be out of date.");
                }
                verificationEmail = email;
                break;
            }
        }

        if (verificationEmail != null) {
            String verificationEmailHTMLBody = verificationEmail.getEmailDetails().getParsedHtmlBody();

            Matcher matcher = verificationCodeRegex.matcher(verificationEmailHTMLBody);

            if (matcher.find()) {
                verificationCode = matcher.group(0);
                LOGGER.logp(Level.INFO, CLASSNAME, methodName, "Found the following verification code: " + verificationCode);

            } else {
                // The pattern matcher found no valid code in this email
                LOGGER.logp(Level.INFO, CLASSNAME, methodName, "No verification code found in email " + verificationEmail.getUid());
            }
        } else {
            // No verification email was found before the for loop exited
            LOGGER.logp(Level.INFO, CLASSNAME, methodName, "No verification email for the past 24 hours found.");
        }

        // If a verification code is found, the only relevant code is the last 6 digits
        return verificationCode != null ? verificationCode.substring(5) : null;
    }

    /**
     * Get a StringBuilder representing the details of an email identified by its unique UID.
     *
     * @param emailUID : A unique ID, example: '5713b662-9799-4263-b3ed-04ed3a7b4395'
     * @return: A StringBuilder representing an email's detailed information (like HTML body, email text etc.)
     */
    @Override
    public StringBuilder getRawEmailDetails(String emailUID) {
        final String methodName = "getRawEmailDetails()";
        LOGGER.entering(CLASSNAME, methodName);

        // Formatting the REST endpoint for receiving emails
        String formattedRequestURL = String.format(MESSAGE_DETAILS_URL_FORMAT, BLUEBOX_HOSTNAME, BLUEBOX_CONTENT, emailUID);
        StringBuilder response = sendHttpGetRequest(formattedRequestURL);

        LOGGER.logp(Level.FINE, CLASSNAME, methodName, "Response Body: \n" + response);

        return response;
    }

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
    @Override
    public Email getLatestEmailWithSubject(String userEmail, String emailSubject) {
        final String methodName = "getLatestEmailWithSubject()";
        LOGGER.entering(CLASSNAME, methodName);

        List<Email> emails = getLatestEmails(userEmail);

        if (emails.isEmpty()) {
            LOGGER.logp(Level.INFO, CLASSNAME, methodName, "No emails found for user " + userEmail);
            return null;
        }

        for (Email email : emails) {
            if (email.getSubject().contains(emailSubject)) {
                return email;
            }
        }

        LOGGER.logp(Level.INFO, CLASSNAME, methodName, "No email with subject \"" + emailSubject + "\" found for user " + userEmail);
        return null;
    }

    /**
     * Given a test user's email and an email subject, returns a list of emails with matching subjects.
     * <p>
     * If no such emails are found, returns null.
     *
     * @param userEmail    a test user's email (isc4sb.com domain)
     * @param emailSubject an email subject to query
     * @return a List of Email objects representing emails with the given emailSubject, if found
     */
    @Override
    public List<Email> getListOfEmailsWithSubject(String userEmail, String emailSubject) {
        final String methodName = "getListOfEmailsWithSubject()";
        LOGGER.entering(CLASSNAME, methodName);

        List<Email> emails = getLatestEmails(userEmail);

        if (emails.isEmpty()) {
            LOGGER.logp(Level.INFO, CLASSNAME, methodName, "No emails found for user " + userEmail);
            return null;
        }

        // Instead of creating a new list of emails to keep, remove the emails not to keep
        emails.removeIf(currentEmail -> !currentEmail.getSubject().contains(emailSubject));

        if (emails.isEmpty()) {
            LOGGER.logp(Level.INFO, CLASSNAME, methodName, "No emails with subject \"" + emailSubject + "\" found for user " + userEmail);
            return null;
        }

        return emails;
    }

}

