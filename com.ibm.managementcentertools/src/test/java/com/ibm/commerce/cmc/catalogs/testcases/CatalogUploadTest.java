package com.ibm.commerce.cmc.catalogs.testcases;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.io.File;

import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.ibm.commerce.cmc.base.TestBase;
import com.ibm.commerce.cmc.ui.catalogs.pages.CatalogUploadPage;
import com.ibm.commerce.cmc.ui.catalogs.pages.CatalogsHomePage;
import com.ibm.commerce.cmc.ui.utils.TestUtil;

public class CatalogUploadTest extends TestBase {
	CatalogsHomePage catalogsHomePage;
	CatalogUploadPage catalogUploadPage;
	
	public CatalogUploadTest() {
		super();
	}
	
	@BeforeClass
	public void setUP() {
		initialization();
		catalogsHomePage = new CatalogsHomePage();
		catalogsHomePage.clickOnStoreDropdown();
		Assert.assertTrue(catalogsHomePage.selectStorefromAngularDropDownByName(p.getProperty("storeToSelect")));

		catalogUploadPage = catalogsHomePage.clickCatalogUploadFromPlus();
	}
	
	/**
	 * Verify Page heading
	 */
	@Test(priority=1)
	public void newCatalogUploadPageHeadTest() {
		String title = catalogUploadPage.getCatalogUploadPageHeading();
		Assert.assertEquals(title, "New Catalog Upload");
	}
	
	/**
	 * Verify Save button exists or not
	 */
	@Test(priority=2)
	public void validateSaveButtonExistance() {
		boolean flag = catalogUploadPage.isSaveButtonDisplayed();
		Assert.assertTrue(flag,"Save Button is not displayed on Screen");
	}
	
	@Test(priority=3)
	public void validateCloseButtonExistance() {
		boolean flag = catalogUploadPage.isCloseButtonDisplayed();
		Assert.assertTrue(flag, "Close Button is not displayed on Screen");
	}
	
	@Test(priority=4)
	public void validateFileNameFieldTest() {
		catalogUploadPage.clickOnMainPropertiesAccordion();
		String fileNameText = catalogUploadPage.getFileNameFieldText();
		Assert.assertEquals(fileNameText, "Filename *");
		
	}
	
	@Test(priority=5)
	public void validateSizeFieldTest() {
		String sizeText = catalogUploadPage.getSizeFieldText();
		Assert.assertEquals(sizeText, "Size");
	}
	
	@Test(priority=6)
	public void validateCharacterSetFieldTest(){
		String characterSetText = catalogUploadPage.getCharacterSetFieldText();
		Assert.assertEquals(characterSetText, "Character Set");
		
	}
	
	@Test(priority=7)
	public void validateTargetCatalogFieldTest() {
		String characterSetText = catalogUploadPage.getTargetCatalogFieldText();
		Assert.assertEquals(characterSetText, "Target catalog");
		
	}
	
	@Test(priority=8)
	public void createNewCatalogUpload() throws AWTException {
		catalogUploadPage.selectCharacterSetfromDropDownByName("UTF-8");
		
		catalogUploadPage.selectTargetCatalogfromDropDownByName("ExtendedSitesCatalogAssetStore Catalog");
		
		catalogUploadPage.clickOnUploadButton();
		
		//File Need to be imported
		//System.out.println("File path is: "+p.getProperty("catalogUploadFile"));
		catalogUploadPage.uploadCatalogFile(p.getProperty("catalogUploadFile"));
		
		//catalogUploadPage.scrollToSaveButtonOnCatalogUploadPage();
		
		catalogUploadPage.clickOnSaveButton();
		Assert.assertTrue(catalogUploadPage.isUploadedFileElementExists(),"Uploaded File Element not displayed on the Screen");
		
		
	}
	
	@AfterClass
	public void tearDown() {
		driver.close();
	}
	
	

}
