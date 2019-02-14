package com.ibm.commerce.cmc.ui.catalogs.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.ibm.commerce.cmc.base.TestBase;
import com.ibm.commerce.cmc.ui.utils.TestUtil;;

public class ExtendedSitesCatalogAssetStoreCategoriesListPage2 extends TestBase{
	public ExtendedSitesCatalogAssetStoreCategoriesListPage2() {
		PageFactory.initElements(driver, this);
	}
	
//	/html/body/app-root/div/app-extended-sites/div/div[1]/ac-side-bar/section/div[3]/button
	//ac-side-bar/section//button[text()='ExtendedSitesCatalogAssetStore']
	//button[text()='ExtendedSitesCatalogAssetStore']
	@FindBy(xpath="//button[text()=' ExtendedSitesCatalogAssetStore ']")
	WebElement extendedSitesCatalogAssetStoreinExplorerview;
	
	
	///html/body/app-root/div/app-extended-sites/div/div[2]/div/h1
	@FindBy(xpath=".//h1[text()=' ExtendedSitesCatalogAssetStore - Categories List ']")
	WebElement pageHeader;
	
	//html/body/app-root/div/app-extended-sites/div/div[2]/ibm-table/table/thead/tr/th[2]/button/span
	//html/body/app-root/div/app-extended-sites/div/div[2]/ibm-table/table/thead/tr/th[3]/button/span
	
	@FindBy(xpath="//ibm-table//thead/tr/th[2]/button/span")
	WebElement column_Sequence;
	
	@FindBy(xpath="//ibm-table//thead/tr/th[3]/button/span")
	WebElement column_Type;
	//html/body/app-root/div/app-extended-sites/div/div[2]/ibm-table/table/thead/tr/th[4]/button/div/ibm-dropdown/div/button/span
	//html/body/app-root/div/app-extended-sites/div/div[2]/ibm-table/table/thead/tr/th[4]/button/div/ibm-dropdown/div/button/span
	//html/body/app-root/div/app-extended-sites/div/div[2]/ibm-table/table/thead/tr/th[2]/button/span
	@FindBy(xpath="//ibm-table//thead/tr/th[4]/button//ibm-dropdown//span")
	WebElement column_Store;
	
	@FindBy(xpath="//ibm-table//thead/tr/th[5]/button/span")
	WebElement column_Code;
	
	@FindBy(xpath="//ibm-table//thead/tr/th[6]/button/span")
	WebElement column_Name;
	
	@FindBy(xpath="//ibm-table//thead/tr/th[7]/button/span")
	WebElement column_DisplayToCustomer;
	
	public void clickOnExtendedSitesCatalogAssetStore() {
		//extendedSitesCatalogAssetStoreinExplorerview.click();
		TestUtil.clickOnElement(extendedSitesCatalogAssetStoreinExplorerview);
		
	}
	
	public String getPageHeading() {
		//return pageHeader.getText();
		return TestUtil.getElementText(pageHeader);
	}
	
	public boolean isSequenceColumnExists() {
		//System.out.println(column_Sequence.getText());
		return TestUtil.isElementDisplayed(column_Sequence);
	}
	
	public boolean isSequenceColumnClickable() {
		return TestUtil.isClickable(column_Sequence);
	}
	
	public boolean isTypeColumnExists() {
		return TestUtil.isElementDisplayed(column_Type);
	}
	
	
	public boolean isTypeColumnClickable() {
		return TestUtil.isClickable(column_Type);
	}
	
	public boolean isStoreColumnExists() {
		return TestUtil.isElementDisplayed(column_Store);
	}
	
	
	public boolean isStoreColumnClickable() {
		return TestUtil.isClickable(column_Store);
	}
	
	
	public boolean isCodeColumnExists() {
		return TestUtil.isElementDisplayed(column_Code);
	}
	
	public boolean isCodeColumnClickable() {
		return TestUtil.isClickable(column_Code);
	}
	
	public boolean isNameColumnExists() {
		return TestUtil.isElementDisplayed(column_Name);
	}
	
	public boolean isNameColumnClickable() {
		return TestUtil.isClickable(column_Name);
	}
	
	public boolean isDisplayToCustomerColumnExists() {
		return TestUtil.isElementDisplayed(column_DisplayToCustomer);
	}
	
	public boolean isDisplayToCustomerColumnClickable() {
		return TestUtil.isClickable(column_DisplayToCustomer);
	}
	
	
	
	

}
