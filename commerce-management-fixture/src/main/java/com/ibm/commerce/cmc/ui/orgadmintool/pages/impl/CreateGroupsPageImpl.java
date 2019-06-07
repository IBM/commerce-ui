package com.ibm.commerce.cmc.ui.orgadmintool.pages.impl;

import com.ibm.commerce.cmc.ui.orgadmintool.pages.CreateGroupsPage;
import com.ibm.commerce.cmc.ui.page.impl.AbstractCMCPage;
import com.ibm.commerce.qa.wte.framework.page.Identifier;

public class CreateGroupsPageImpl extends AbstractCMCPage implements CreateGroupsPage{
	private static final Identifier SELECT_GROUP_TYPE = Identifier.byXPath("//ibm-dropdown//button");
	
	private static final Identifier GROUP_TYPE_ITEM = Identifier.byXPath("//ibm-dropdown-list/ul/li[text()='GROUP_TYPE']");
	
	private static final Identifier NAME = Identifier.byId("description-name");
	
	private static final Identifier DESCRIPTION = Identifier.byId("description-optional");
	
	private static final Identifier PARENT_ORGANIZATION = Identifier.byId("parent-organization");
	
	private static final Identifier CANCEL = Identifier.byXPath(".//button[(text() = 'Cancel')]");
	
	private static final Identifier NEXT = Identifier.byXPath(".//button[(text()='Next')]");
	
	private static final Identifier BACK = Identifier.byXPath(".//button[(text()='Back')]");
	
	private static final Identifier SUBMIT = Identifier.byXPath(".//button[(text()='Submit')]");
	
	private static final Identifier SELECT_ACCOUNT = Identifier.byXPath("(//ibm-dropdown//button)[1]");
	
	private static final Identifier ACCOUNT_ITEM = Identifier.byXPath("//ibm-dropdown-list/ul/li[text()='ACCOUNT_NAME']");
	
	private static final Identifier FIND_ACCOUNTS = Identifier.byXPath("//input[@placeholder='Find accounts']");
	
	private static final Identifier SELECT_ACCOUNT_SIZE = Identifier.byXPath("(//ibm-dropdown//button)[2]");
	
	private static final Identifier ACCOUNT_SIZE_ITEM = Identifier.byXPath("//ibm-dropdown-list/ul/li[text()='ACCOUNT_SIZE']");
	
	private static final Identifier SELECT_MULTI_ACCOUNT_SIZE = Identifier.byXPath("(//ibm-dropdown//button)[3]");
	
	private static final Identifier MULTI_ACCOUNT_SIZE_ITEM = Identifier.byXPath("//ibm-dropdown-list/ul/li[text()='MULTI_ACCOUNT_SIZE']");

	private static final Identifier SELECT_ACCOUNT_GEO_LOCATION = Identifier.byXPath("(//ibm-dropdown//button)[4]");
	
	private static final Identifier ACCOUNT_GEO_LOCATION_ITEM = Identifier.byXPath("//ibm-dropdown-list/ul/li[text()='ACCOUNT_GEO_LOCATION']");
	
	private static final Identifier FIND_GEO_LOCATIONS = Identifier.byXPath("//input[@placeholder='Find geographical locations']");

	private static final Identifier SELECT_ACCOUNT_OP_LOCATION = Identifier.byXPath("(//ibm-dropdown//button)[5]");
	
	private static final Identifier ACCOUNT_OP_LOCATION_ITEM = Identifier.byXPath("//ibm-dropdown-list/ul/li[text()='ACCOUNT_OP_LOCATION']");

	private static final Identifier FIND_OP_LOCATIONS = Identifier.byXPath("//input[@placeholder='Find locations of operation']");

	private static final Identifier SELECT_ACCOUNT_INDUSTRY = Identifier.byXPath("(//ibm-dropdown//button)[6]");

	private static final Identifier ACCOUNT_INDUSTRY_ITEM = Identifier.byXPath("//ibm-dropdown-list/ul/li[text()='ACCOUNT_INDUSTRY']");
	
	private static final Identifier SELECT_MULTI_ACCOUNT_INDUSTRY = Identifier.byXPath("(//ibm-dropdown//button)[7]");
	
	private static final Identifier MULTI_ACCOUNT_INDUSTRY_ITEM = Identifier.byXPath("//ibm-dropdown-list/ul/li[text()='MULTI_ACCOUNT_INDUSTRY']");

	private static final Identifier SELECT_ACCOUNT_BUSINESS = Identifier.byXPath("(//ibm-dropdown//button)[8]");

	private static final Identifier ACCOUNT_BUSINESS_ITEM = Identifier.byXPath("//ibm-dropdown-list/ul/li[text()='ACCOUNT_BUSINESS']");
	
	private static final Identifier SELECT_MULTI_ACCOUNT_BUSINESS = Identifier.byXPath("(//ibm-dropdown//button)[9]");
	
	private static final Identifier MULTI_ACCOUNT_BUSINESS_ITEM = Identifier.byXPath("//ibm-dropdown-list/ul/li[text()='MULTI_ACCOUNT_BUSINESS']");

	private static final Identifier SELECT_ACCOUNT_SALES = Identifier.byXPath("(//ibm-dropdown//button)[10]");

	private static final Identifier ACCOUNT_SALES_ITEM = Identifier.byXPath("//ibm-dropdown-list/ul/li[text()='ACCOUNT_SALES']");
	
	private static final Identifier ACCOUNT_SALES_AMOUNT = Identifier.byXPath("//div[text()='Account sales']//following-sibling::input");
	

	@Override
	public CreateGroupsPage selectGroupType(String GROUP_TYPE) {
		getElement(SELECT_GROUP_TYPE).click();
		getElement(GROUP_TYPE_ITEM.replace("GROUP_TYPE", GROUP_TYPE)).click();
		return this;
	}

	@Override
	public CreateGroupsPage typeGroupName(String groupName) {
		getElement(NAME).type(groupName);
		return this;
	}

	@Override
	public CreateGroupsPage typeDescription(String description) {
		getElement(DESCRIPTION).type(description);
		return this;
	}

	@Override
	public CreateGroupsPage typeParentOrganization(String parentOrg) {
		getElement(PARENT_ORGANIZATION).type(parentOrg);
		return this;
	}

	@Override
	public CreateGroupsPage selectAccount(String account) {
		getElement(SELECT_ACCOUNT).click();
		getElement(ACCOUNT_ITEM.replace("ACCOUNT_NAME", account)).click();
		return this;
	}

	@Override
	public CreateGroupsPage typeAccount(String account) {
		getElement(FIND_ACCOUNTS).type(account);
		return this;
	}

	@Override
	public CreateGroupsPage selectAccountSize(String accountSize) {
		getElement(SELECT_ACCOUNT_SIZE).click();
		getElement(ACCOUNT_SIZE_ITEM.replace("ACCOUNT_SIZE", accountSize)).click();
		return this;
	}

	@Override
	public CreateGroupsPage selectMultiAccountSize(String accountSize) {
		getElement(SELECT_MULTI_ACCOUNT_SIZE).click();
		getElement(MULTI_ACCOUNT_SIZE_ITEM.replace("MULTI_ACCOUNT_SIZE", accountSize)).click();
		return this;
	}

	@Override
	public CreateGroupsPage selectAccountGeoLocation(String geoLocation) {
		getElement(SELECT_ACCOUNT_GEO_LOCATION).click();
		getElement(ACCOUNT_GEO_LOCATION_ITEM.replace("ACCOUNT_GEO_LOCATION", geoLocation)).click();
		return this;
	}

	@Override
	public CreateGroupsPage typeAccountGeoLocation(String geoLocation) {
		getElement(FIND_GEO_LOCATIONS).type(geoLocation);
		return this;
	}

	@Override
	public CreateGroupsPage selectAccountOperationLocation(String opLocation) {
		getElement(SELECT_ACCOUNT_OP_LOCATION).click();
		getElement(ACCOUNT_OP_LOCATION_ITEM.replace("ACCOUNT_OP_LOCATION", opLocation));
		return this;
	}

	@Override
	public CreateGroupsPage typeAccountOperationLocation(String opLocation) {
		getElement(FIND_OP_LOCATIONS).type(opLocation);
		return this;
	}

	@Override
	public CreateGroupsPage selectAccountIndustry(String accountIndustry) {
		getElement(SELECT_ACCOUNT_INDUSTRY).click();
		getElement(ACCOUNT_INDUSTRY_ITEM.replace("ACCOUNT_INDUSTRY", accountIndustry)).click();
		return this;
	}

	@Override
	public CreateGroupsPage selectMultiAccountIndustry(String accountIndustry) {
		getElement(SELECT_MULTI_ACCOUNT_INDUSTRY).click();
		getElement(MULTI_ACCOUNT_INDUSTRY_ITEM.replace("MULTI_ACCOUNT_INDUSTRY", accountIndustry)).click();
		return this;
	}

	@Override
	public CreateGroupsPage selectAccountBusiness(String accountBusiness) {
		getElement(SELECT_ACCOUNT_BUSINESS).click();
		getElement(ACCOUNT_BUSINESS_ITEM.replace("ACCOUNT_BUSINESS", accountBusiness)).click();
		return this;
	}

	@Override
	public CreateGroupsPage selectMultiAccountBusiness(String accountBusiness) {
		getElement(SELECT_MULTI_ACCOUNT_BUSINESS).click();
		getElement(MULTI_ACCOUNT_BUSINESS_ITEM.replace("MULTI_ACCOUNT_BUSINESS", accountBusiness)).click();
		return this;
	}

	@Override
	public CreateGroupsPage selectAccountSales(String accountSales) {
		getElement(SELECT_ACCOUNT_SALES).click();
		getElement(ACCOUNT_SALES_ITEM.replace("ACCOUNT_SALES", accountSales)).click();
		return this;
	}

	@Override
	public CreateGroupsPage typeAccountSales(String accountSales) {
		getElement(ACCOUNT_SALES_AMOUNT).type(accountSales);
		return this;
	}

	@Override
	public CreateGroupsPage next() {
		getElement(NEXT).click();
		return this;
	}

	@Override
	public CreateGroupsPage cancel() {
		getElement(CANCEL).click();
		return this;
	}

	@Override
	public CreateGroupsPage back() {
		getElement(BACK).click();
		return this;
	}

	@Override
	public CreateGroupsPage submit() {
		getElement(SUBMIT).click();
		return this;
	}

	

	
	


	
}
