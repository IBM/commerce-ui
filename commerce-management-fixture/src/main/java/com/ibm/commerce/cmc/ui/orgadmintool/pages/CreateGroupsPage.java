package com.ibm.commerce.cmc.ui.orgadmintool.pages;

import com.ibm.commerce.qa.wte.framework.page.PageObject;
import com.ibm.commerce.qa.wte.framework.page.PageObject.PageType;

@PageObject(type=PageType.SECTION)
public interface CreateGroupsPage {
	
	public CreateGroupsPage selectGroupType(String groupType);
	
	public CreateGroupsPage typeGroupName(String groupName);
	
	public CreateGroupsPage typeDescription(String description);
	
	public CreateGroupsPage typeParentOrganization(String parentOrg);
	
	public CreateGroupsPage selectAccount(String account);
	
	public CreateGroupsPage typeAccount(String account);
	
	public CreateGroupsPage selectAccountSize(String accountSize);
	
	public CreateGroupsPage selectMultiAccountSize(String accountSize);
	
	public CreateGroupsPage selectAccountGeoLocation(String geoLocation);
	
	public CreateGroupsPage typeAccountGeoLocation(String geoLocation);
	
	public CreateGroupsPage selectAccountOperationLocation(String opLocation);
	
	public CreateGroupsPage typeAccountOperationLocation(String opLocation);
	
	public CreateGroupsPage selectAccountIndustry(String accountIndustry);
	
	public CreateGroupsPage selectMultiAccountIndustry(String accountIndustry);
	
	public CreateGroupsPage selectAccountBusiness(String accountBusiness);
	
	public CreateGroupsPage selectMultiAccountBusiness(String accountBusiness);
	
	public CreateGroupsPage selectAccountSales(String accountSales);
	
	public CreateGroupsPage typeAccountSales(String accountSales);
	
	
	public CreateGroupsPage next();
	
	public CreateGroupsPage cancel();
	
	public CreateGroupsPage back();
	
	public CreateGroupsPage submit();

}
