package com.ibm.commerce.cmc.ui.catalogs.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.ibm.commerce.cmc.base.TestBase;
import com.ibm.commerce.cmc.ui.utils.TestUtil;

public class CatalogUploadsPage extends TestBase {
	
	public CatalogUploadsPage() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//button[contains(text(),'Catalog Uploads')]")
	WebElement catalogUploadsinExplorerView;
	
	//html/body/app-root/div/app-search-result/div/div[2]/div/p
	@FindBy(className="searchheader")
	WebElement pageHeader;
	
	
	
	@FindBy(xpath="//ibm-table//thead/tr/th[1]/button/span[contains(text(), 'File Name')]")
	WebElement column_FileName;
	
	
	@FindBy(xpath="//ibm-table//thead/tr/th[2]/button//ibm-dropdown//span[contains(text(), 'Size')]")
	WebElement column_Size;
	
	@FindBy(xpath="//ibm-table//thead/tr/th[3]/button/span[contains(text(), 'Status')]")
	WebElement column_Status;
	
	@FindBy(xpath="//ibm-table//thead/tr/th[4]/button/span[contains(text(), 'Uploaded by')]")
	WebElement column_Uploadedby;
	
	@FindBy(xpath="//ibm-table//thead/tr/th[5]/button/span[contains(text(), 'Target Catalog')]")
	WebElement column_TargetCatalog;
	
	@FindBy(xpath="//ibm-table//thead/tr/th[6]/button/span[contains(text(), 'Start Time')]")
	WebElement column_StartTime;
	
	@FindBy(xpath="//ibm-table//thead/tr/th[7]/button/span[contains(text(), 'Buyable')]")
	WebElement column_EndTime;
	
	
	
	
	
	public void clickOnSearchResults() {
		TestUtil.clickOnElement(catalogUploadsinExplorerView);
	}
	
	public String getPageHeading() {
		//return pageHeader.getText();
		return TestUtil.getElementText(pageHeader);
		
	}
	
	public boolean isTypeColumnExists() {
		return TestUtil.isElementDisplayed(column_FileName);
	}
	
	
	public boolean isTypeColumnClickable() {
		return TestUtil.isClickable(column_FileName);
	}
	
	public boolean isStoreColumnExists() {
		return TestUtil.isElementDisplayed(column_Size);
	}
	
	
	public boolean isStoreColumnClickable() {
		return TestUtil.isClickable(column_Size);
	}
	
	
	public boolean isCodeColumnExists() {
		return TestUtil.isElementDisplayed(column_Status);
	}
	
	public boolean isCodeColumnClickable() {
		return TestUtil.isClickable(column_Status);
	}
	
	public boolean isNameColumnExists() {
		return TestUtil.isElementDisplayed(column_Uploadedby);
	}
	
	public boolean isNameColumnClickable() {
		return TestUtil.isClickable(column_Uploadedby);
	}
	
	public boolean isThumbnailColumnExists() {
		return TestUtil.isElementDisplayed(column_TargetCatalog);
	}
	
	public boolean isThumbnailColumnClickable() {
		return TestUtil.isClickable(column_TargetCatalog);
	}
	
	
	public boolean isDisplayToCustomerColumnExists() {
		return TestUtil.isElementDisplayed(column_StartTime);
	}
	
	public boolean isDisplayToCustomerColumnClickable() {
		return TestUtil.isClickable(column_StartTime);
	}
	
	public boolean isBuyableColumnExists() {
		return TestUtil.isElementDisplayed(column_EndTime);
	}
	
	public boolean isBuyableColumnClickable() {
		return TestUtil.isClickable(column_EndTime);
	}
	
	

}
