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
import com.ibm.commerce.cmc.ui.orgadmintool.pages.CreateUserPage;
import com.ibm.commerce.cmc.ui.orgadmintool.pages.UserManagementPage;
import com.ibm.commerce.orgadmin.fvt.test.AbstractSingleSessionTest;

@Singleton
public class CreateUserFlow extends AbstractSingleSessionTest{
	
	@Inject 
	UserManagementPage userManagement;
	
	CreateUserPage createUser;
	
	private String logonId;
	private String title;
	private String firstName;
	private String middleName;
	private String lastName;
	private String password;
	private String passwordConfirm;
	private String accountPolicy;
	private String accountStatus;
	private String employeeId;
	private String employeeType;
	private String departmentNumber;
	private String managerName;
	private String secretaryName;
	private String language;
	private String parentOrg;
	private String streetAddress;
	private String city;
	private String state;
	private String zip;
	private String country;
	private String email1;
	private String email2;
	private String phone1;
	private String phone2;
	private String fax1;
	private String fax2;
	
	public String getLogonId() {
		return logonId;
	}
	
	public String geTtitle() {
		return title;
	}
	
	public String getFirstName() {
		return firstName;
	}
	
	public String getMiddleName() {
		return middleName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public String getPassword() {
		return password;
	}
	
	public String getPasswordConfirm() {
		return passwordConfirm;
	}
	
	public String getAccountPolicy() {
		return accountPolicy;
	}
	
	public String getAccountStatus() {
		return accountStatus;
	}
	
	public String getEmployeeId() {
		return employeeId;
	}
	
	public String getEmployeeType() {
		return employeeType;
	}
	
	public String getDepartmentNumber() {
		return departmentNumber;
	}
	
	public String getManagerName() {
		return managerName;
	}
	
	public String getSecretaryName() {
		return secretaryName;
	}
	
	public String getLanguage() {
		return language;
	}
	
	public String getParentOrg() {
		return parentOrg;
	}
	
	public String getStreetAddress() {
		return streetAddress;
	}
	
	public String getCity() {
		return city;
	}
	
	public String getState() {
		return state;
	}
	
	public String getZip() {
		return zip;
	}
	
	public String getCountry() {
		return country;
	}
	
	public String getEmail1() {
		return email1;
	}
	
	public String getEmail2() {
		return email2;
	}
	
	public String getPhone1() {
		return phone1;
	}
	
	public String getPhone2() {
		return phone2;
	}
	
	public String getFax1() {
		return fax1;
	}
	
	public String getFax2() {
		return fax2;
	}
	
	public CreateUserFlow setLogonId(String logonId) {
		this.logonId = logonId;
		return this;
	}
	
	public CreateUserFlow setTitle(String title) {
		this.title = title;
		return this;
	}
	
	public CreateUserFlow setFirstName(String firstName) {
		this.firstName = firstName;
		return this;
	}
	
	public CreateUserFlow setMiddleName(String middleName) {
		this.middleName = middleName;
		return this;
	}
	
	public CreateUserFlow setLastName(String lastName) {
		this.lastName = lastName;
		return this;
	}
	
	public CreateUserFlow setPassword(String password) {
		this.password = password;
		return this;
	}
	
	public CreateUserFlow setPasswordConfirm(String passwordConfirm) {
		this.passwordConfirm = passwordConfirm;
		return this;
	}
	
	public CreateUserFlow setAccountPolicy(String accountPolicy) {
		this.accountPolicy = accountPolicy;
		return this;
	}
	
	public CreateUserFlow setAccountStatus(String accountStatus) {
		this.accountStatus = accountStatus;
		return this;
	}
	
	public CreateUserFlow setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
		return this;
	}
	
	public CreateUserFlow setEmployeeType(String employeeType) {
		this.employeeType = employeeType;
		return this;
	}
	
	public CreateUserFlow setDepartmentNumber(String departmentNumber) {
		this.departmentNumber = departmentNumber;
		return this;
	}
	
	public CreateUserFlow setManagerName(String managerName) {
		this.managerName = managerName;
		return this;
	}
	
	public CreateUserFlow setSecretaryName(String secretaryName) {
		this.secretaryName = secretaryName;
		return this;
	}
	
	public CreateUserFlow setLanguage(String language) {
		this.language = language;
		return this;
	}
	
	public CreateUserFlow setParentOrg(String parentOrg) {
		this.parentOrg = parentOrg;
		return this;
	}
	
	public CreateUserFlow setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
		return this;
	}
	
	public CreateUserFlow setCity(String city) {
		this.city = city;
		return this;
	}
	
	public CreateUserFlow setState(String state) {
		this.state = state;
		return this;
	}
	
	public CreateUserFlow setZip(String zip) {
		this.zip = zip;
		return this;
	}
	
	public CreateUserFlow setCountry(String country) {
		this.country = country;
		return this;
	}
	
	public CreateUserFlow setEmail1(String email1) {
		this.email1 = email1;
		return this;
	}

	public CreateUserFlow setEmail2(String email2) {
		this.email2 = email2;
		return this;
	}
	
	public CreateUserFlow setPhone1(String phone1) {
		this.phone1 = phone1;
		return this;
	}

	public CreateUserFlow setPhone2(String phone2) {
		this.phone2 = phone2;
		return this;
	}
	
	public CreateUserFlow setFax1(String fax1) {
		this.fax1 = fax1;
		return this;
	}

	public CreateUserFlow setFax2(String fax2) {
		this.fax2 = fax2;
		return this;
	}
	
	public CreateUserFlow createUserThroughUI() {
		userManagement.selectIFrame();
		createUser = userManagement.addUser();
		createUser.typeLonOnId(logonId);
		//within if means this input is not required, and can be empty
		if (!title.isEmpty()) {
			createUser.typeTitle(title);
		}	
		if (!firstName.isEmpty()) {
			createUser.typeFirstName(firstName);
		}
		if (!middleName.isEmpty()) {
			createUser.typeMiddleName(middleName);
		}
		createUser.typeLastName(lastName).typePassward(password).typePasswordConfirmation(passwordConfirm)
		.selectAccountPolicy(accountPolicy).selectAccountStatus(accountStatus);
		
		if (!employeeId.isEmpty()) {
			createUser.typeEmployeeId(employeeId);
		}
		if (!employeeType.isEmpty()) {
			createUser.typeEmployeeType(employeeType);
		}
		if (!departmentNumber.isEmpty()) {
			createUser.typeDepartmentNumber(departmentNumber);
		}
		if (!managerName.isEmpty()) {
			createUser.typeManagerName(managerName);
		}
		if (!secretaryName.isEmpty()) {
			createUser.typeSecretaryName(secretaryName);
		}
		if (!createUser.verifyLanguageExist(language)) {
			createUser.selectPreferredLanguage(language);
		}
		createUser.selectParentOrganization(parentOrg).typeStreetAddress(streetAddress).typeCity(city)
		.typeState(state).typePostalCode(zip).selectCountry(country);
		
		if (!email1.isEmpty()) {
			createUser.typeEmail1(email1);
		}
		if (!email2.isEmpty()) {
			createUser.typeEmail2(email2);
		}
		if (!phone1.isEmpty()) {
			createUser.typePhone1(phone1);
		}
		if (!phone2.isEmpty()) {
			createUser.typePhone2(phone2);
		}
		if (!fax1.isEmpty()) {
			createUser.typeFax1(fax1);
		}
		if (!fax2.isEmpty()) {
			createUser.typeFax2(fax2);
		}
		createUser.submit();
		userManagement.getMainFrame();
		return this;
	}
	
	public CreateUserFlow validateCreateUser() {
		userManagement.selectIFrame();
		userManagement.validateUserExist(logonId, firstName, lastName);
		userManagement.getMainFrame();
		return this;
	}
}
