package com.ibm.commerce.cmc.ui.catalogs.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.ibm.commerce.cmc.base.TestBase;
import com.ibm.commerce.cmc.ui.utils.TestUtil;

public class CatalogUploadsListPage extends TestBase {
	
	public CatalogUploadsListPage() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//button[contains(text(),'Catalog Uploads')]")
	WebElement catalogUploadsinExplorerView;
	
	//html/body/app-root/div/app-search-result/div/div[2]/div/p
	@FindBy(xpath="//h3")
	WebElement pageHeader;
	
	
	//ibm-table/table/thead/tr/th[1]/button/span
	@FindBy(xpath="//ibm-table//thead/tr/th[1]/button/span[contains(text(), 'File Name')]")
	WebElement column_FileName;
	
	
	@FindBy(xpath="//ibm-table//thead/tr/th[2]/button//span[contains(text(), 'Size')]")
	WebElement column_Size;
	
	
	@FindBy(xpath="//ibm-table//thead/tr/th[3]/button//ibm-dropdown//span[contains(text(), 'Status')]")
	WebElement column_Status;
	
	@FindBy(xpath="//ibm-table//thead/tr/th[4]/button/span[contains(text(), 'Uploaded By')]")
	WebElement column_Uploadedby;
	
	@FindBy(xpath="//ibm-table//thead/tr/th[5]/button/span[contains(text(), 'Target Catalog')]")
	WebElement column_TargetCatalog;
	
	@FindBy(xpath="//ibm-table//thead/tr/th[6]/button/span[contains(text(), 'Start Time')]")
	WebElement column_StartTime;
	
	@FindBy(xpath="//ibm-table//thead/tr/th[7]/button/span[contains(text(), 'End Time')]")
	WebElement column_EndTime;
	
	
	
	
	
	public void clickOnCatalogUploads() {
		TestUtil.clickOnElement(catalogUploadsinExplorerView);
	}
	
	public String getPageHeading() {
		//return pageHeader.getText();
		return TestUtil.getElementText(pageHeader);
		
	}
	
	public boolean isFileNameColumnExists() {
		return TestUtil.isElementDisplayed(column_FileName);
	}
	
	
	public boolean isFileNameColumnClickable() {
		return TestUtil.isClickable(column_FileName);
	}
	
	public boolean isSizeColumnExists() {
		return TestUtil.isElementDisplayed(column_Size);
	}
	
	
	public boolean isSizeColumnClickable() {
		return TestUtil.isClickable(column_Size);
	}
	
	
	public boolean isStatusColumnExists() {
		return TestUtil.isElementDisplayed(column_Status);
	}
	
	public boolean isStatusColumnClickable() {
		return TestUtil.isClickable(column_Status);
	}
	
	public boolean isUploadedByColumnExists() {
		return TestUtil.isElementDisplayed(column_Uploadedby);
	}
	
	public boolean isUploadedByColumnClickable() {
		return TestUtil.isClickable(column_Uploadedby);
	}
	
	public boolean isTargetCatalogColumnExists() {
		return TestUtil.isElementDisplayed(column_TargetCatalog);
	}
	
	public boolean isTargetCatalogColumnClickable() {
		return TestUtil.isClickable(column_TargetCatalog);
	}
	
	
	public boolean isStartTimeColumnExists() {
		return TestUtil.isElementDisplayed(column_StartTime);
	}
	
	public boolean isStartTimeColumnClickable() {
		return TestUtil.isClickable(column_StartTime);
	}
	
	public boolean isEndTimeColumnExists() {
		return TestUtil.isElementDisplayed(column_EndTime);
	}
	
	public boolean isEndTimeColumnClickable() {
		return TestUtil.isClickable(column_EndTime);
	}
	
	

}
