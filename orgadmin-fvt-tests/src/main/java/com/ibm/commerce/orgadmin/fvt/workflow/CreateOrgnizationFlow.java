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

import com.google.inject.Inject;
import com.google.inject.Singleton;
import com.ibm.commerce.cmc.ui.orgadmintool.pages.*;
import com.ibm.commerce.orgadmin.fvt.test.AbstractSingleSessionTest;


@Singleton
public class CreateOrgnizationFlow extends AbstractSingleSessionTest{
	
	@Inject
	OrganizationPage orgPage;
	
	CreateOrganizationsPage createOrgsPage;
		
	private String orgName;
	private String description;
	private String orgType;
	private String parentOrg;
	private String streetAddress;
	private String state;
	private String city;
	private String postalCode;
	private String country;
	private String email;
	private String phone;
	
	public String getOrgName() {
		return orgName;
	}
	
	public String getDescription() {
		return description;
	}
	
	public String getOrgType() {
		return orgType;
	}
	
	public String getParentOrg() {
		return parentOrg;
	}
	
	public String getStreetAddress() {
		return streetAddress;
	}
	
	public String getState() {
		return state;
	}
	
	public String getCity() {
		return city;
	}
	
	public String getPostalCode() {
		return postalCode;
	}
	
	public String getCountry() {
		return country;
	}
	
	public String getEmail() {
		return email;
	}
	
	public String getPhone() {
		return phone;
	}
	
	public CreateOrgnizationFlow setOrgName(String orgName) {
		this.orgName = orgName;
		return this;
	}
	
	public CreateOrgnizationFlow setDescription(String description) {
		this.description = description;
		return this;
	}
	
	public CreateOrgnizationFlow setOrgType(String orgType) {
		this.orgType = orgType;
		return this;
	}
	
	public CreateOrgnizationFlow setParentOrg(String parentOrg) {
		this.parentOrg = parentOrg;
		return this;
	}
	
	public CreateOrgnizationFlow setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
		return this;
	}
	
	public CreateOrgnizationFlow setState(String state) {
		this.state = state;
		return this;
	}
	
	public CreateOrgnizationFlow setCity(String city) {
		this.city = city;
		return this;
	}
	
	public CreateOrgnizationFlow setPostalCode(String postalCode) {
		this.postalCode = postalCode;
		return this;
	}
	
	public CreateOrgnizationFlow setCountry(String country) {
		this.country = country;
		return this;
	}
	
	public CreateOrgnizationFlow setEmail(String email) {
		this.email = email;
		return this;
	}
	
	public CreateOrgnizationFlow setPhone(String phone) {
		this.phone = phone;
		return this;
	}
	
	public OrganizationPage createOrgThroughUI() {
		orgPage.selectIFrame();
		createOrgsPage = orgPage.newOrg();
		createOrgsPage.typeOrgName(orgName);
		if (!description.isEmpty()) {
			createOrgsPage.typeDescription(description);
		}
		
		createOrgsPage.selectOrganizationType(orgType).selectParentOrganization(parentOrg)
			.typeStreetAddress(streetAddress).typeState(state).typeCity(city).typePostalCode(postalCode)
			.typeCountryCode(country).typeEmail(email);
		
		if (!phone.isEmpty()) {
			createOrgsPage.typePhoneNumber(phone);
		}
		createOrgsPage.submit();
		orgPage.getMainFrame();
		return orgPage;
	}
	
	public CreateOrgnizationFlow validateCreateOrg() {
		orgPage.selectIFrame();
		createOrgsPage.validateCreateOrgFromList(orgName, parentOrg, orgType);
		orgPage.getMainFrame();
		return this;
	}
	
}
