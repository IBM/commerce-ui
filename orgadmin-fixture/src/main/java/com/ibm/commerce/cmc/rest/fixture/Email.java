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

import com.google.gson.Gson;
import com.ibm.commerce.cmc.rest.fixture.impl.TestUsersEmailFixtureImpl;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import org.jsoup.Jsoup;

/**
 * An Email object represent an email sent through BlueBox's mailing service. This is intended to be used internally
 * for testing purposes only.
 * <p>
 * Email objects get generated in the 'TestUsersEmailFixture'
 *
 * @see com.ibm.commerce.test.sst.rest.fixture.impl.TestUsersEmailFixtureImpl
 * <p>
 * Because all of the rest calls to BlueBox's service are being made in that fixture, there is a bit of coupling
 * between an Email object and the TestUsersEmailFixture's methods. Specifically, Email uses a public method
 * found in TestUsersEmailFixture to obtain more details about itself.
 */
public class Email {
    private String Inbox;
    private String RawUid;
    private String Received;
    private List<String> Sender;
    private String Size;
    private String State;
    private String Subject;
    private String Uid;

    // Formatter to use when parsing a date to a LocalDateTime object recognized by Java
    private final DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("M/d/yy h:mm a");

    @Override
    public String toString() {
        return "{\n" +
                "  \"Inbox\": \"" + this.Inbox + "\",\n" +
                "  \"Raw Uid\": \"" + this.RawUid + "\",\n" +
                "  \"Received\": \"" + this.getReceived() + "\",\n" +
                "  \"Sender\": " + this.Sender + ",\n" +
                "  \"Size\": \"" + this.Size + "\",\n" +
                "  \"State\": \"" + this.State + "\",\n" +
                "  \"Subject\": \"" + this.Subject + "\",\n" +
                "  \"Uid\": \"" + this.Uid + "\",\n" +
                "}";
    }

    public String getInbox() {
        return this.Inbox;
    }

    public String getRawUid() {
        return this.RawUid;
    }

    public LocalDateTime getReceived() {
        return LocalDateTime.parse(this.Received, dateTimeFormatter);
    }

    public String getSize() {
        return this.Size;
    }

    public List<String> getSender() {
        return Sender;
    }

    public String getSubject() {
        return Subject;
    }

    public String getState() {
        return this.State;
    }

    public String getUid() {
        return this.Uid;
    }

    //  TODO: Find a way to de-couple the fixture from this Email class
    public EmailDetails getEmailDetails() {
        TestUsersEmailFixture fixture = new TestUsersEmailFixtureImpl();
        StringBuilder rawEmailDetails = fixture.getRawEmailDetails(Uid);

        Gson gson = new Gson();
        return gson.fromJson(rawEmailDetails.toString(), EmailDetails.class);
    }

    /**
     * In order to get email details such as HTML body, body-text, and security meta data, we need to parse another
     * JSON response from the Bluebox server. To make sure we're not making these calls for every single Email object,
     * we generate this class every time a user needs to obtain the full details of an email.
     * <p>
     * This is to improve efficiency of accessing Bluebox's information.
     * <p>
     * A detailed email is the exact same as an Email above, with the following additional keys:
     * - Cc
     * - Bcc
     * - HtmlBody
     * - TextBody
     * - Security
     * <p>
     * An Email object parses only these fields into an EmailDetails object that can then be used to get more information
     * about an email.
     */
    public class EmailDetails {
        private List<String> Cc;
        private List<String> Bcc;
        private String HtmlBody;
        private String TextBody;
        private String Security;

        /**
         * Return a parsed email HTML Body without HTML tags.
         * @return a string representing the text in an email
         */
        public String getParsedHtmlBody() {
            return Jsoup.parse(this.HtmlBody).body().text();
        }

        /**
         * Return a raw email HTML Body with tags.
         * @return an email's html body
         */
        public String getRawHtmlBody() { return this.HtmlBody; }

        public String getTextBody() {
            return this.TextBody;
        }

        public String getSecurity() {
            return this.Security;
        }

        public List<String> getBcc() {
            return this.Bcc;
        }

        public List<String> getCc() {
            return this.Cc;
        }

        @Override
        public String toString() {
            return "{\n" +
                    "  \"Cc\": \"" + Cc + "\",\n" +
                    "  \"Bcc\": \"" + Bcc + "\",\n" +
                    "  \"HtmlBody\": \"" + HtmlBody + "\",\n" +
                    "  \"TextBody\": " + TextBody + ",\n" +
                    "  \"Security\": \"" + Security + "\",\n" +
                    "}";
        }
    }

}

