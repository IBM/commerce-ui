package com.ibm.commerce.cmc.catalogs.testcases;

import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

import com.ibm.commerce.cmc.base.TestBase;
import com.ibm.commerce.cmc.ui.catalogs.pages.CatalogsHomePage;


import com.ibm.commerce.cmc.ui.catalogs.pages.UnassignedCatalogEntriesPage;

public class UnassignedCatalogEntriesPageTest extends TestBase {
	CatalogsHomePage catalogsHomePage;
	UnassignedCatalogEntriesPage unassignedCatalogEntriesPage;
	
	public UnassignedCatalogEntriesPageTest() {
		super();
	}
	
	@BeforeClass
	public void setUp() {
		//System.out.println("in new master setup");
		initialization();
		catalogsHomePage = new CatalogsHomePage();
		catalogsHomePage.clickOnStoreDropdown();
		
		Assert.assertTrue(catalogsHomePage.selectStorefromAngularDropDownByName(p.getProperty("storeToSelect")));
		unassignedCatalogEntriesPage= new UnassignedCatalogEntriesPage();
		
		unassignedCatalogEntriesPage.clickOnUnassignedCatalogEntriesinExplorerView();
		//newMasterCategoryPage= new NewMasterCategoryPage();
		
	}
	
	@Test(priority=1)
	public void unassignedCatalogEntriesPageHeadingTest() {
		String pageHeading = unassignedCatalogEntriesPage.getPageHeading();
		Assert.assertEquals(pageHeading, "Unassigned Catalog Entries - Catalog Entries List");
	}
	
	
	@Test(priority=2)
	public void verifyAllColumnsDisplayedOnThePage() {
		SoftAssert sa = new SoftAssert();
		sa.assertTrue(unassignedCatalogEntriesPage.isTypeColumnExists());
		sa.assertTrue(unassignedCatalogEntriesPage.isStoreColumnExists());
		sa.assertTrue(unassignedCatalogEntriesPage.isCodeColumnExists());
		sa.assertTrue(unassignedCatalogEntriesPage.isNameColumnExists());
		sa.assertTrue(unassignedCatalogEntriesPage.isThumbnailColumnExists());
		sa.assertTrue(unassignedCatalogEntriesPage.isDisplayToCustomerColumnExists());
		sa.assertTrue(unassignedCatalogEntriesPage.isBuyableColumnExists());
		sa.assertTrue(unassignedCatalogEntriesPage.isManufacturerPartNumberColumnExists());
		sa.assertTrue(unassignedCatalogEntriesPage.isManufacturerNameColumnExists());
		sa.assertAll();
	}
	
	@Test(priority=3)
	public void veriverifyAllColumnsClickable() {
		SoftAssert sa = new SoftAssert();
		sa.assertTrue(unassignedCatalogEntriesPage.isTypeColumnClickable());
		sa.assertTrue(unassignedCatalogEntriesPage.isStoreColumnClickable());
		sa.assertTrue(unassignedCatalogEntriesPage.isCodeColumnClickable());
		sa.assertTrue(unassignedCatalogEntriesPage.isNameColumnClickable());
		sa.assertTrue(unassignedCatalogEntriesPage.isThumbnailColumnClickable());
		sa.assertTrue(unassignedCatalogEntriesPage.isDisplayToCustomerColumnClickable());
		sa.assertTrue(unassignedCatalogEntriesPage.isBuyableColumnClickable());
		sa.assertTrue(unassignedCatalogEntriesPage.isManufacturerPartNumberColumnClickable());
		sa.assertTrue(unassignedCatalogEntriesPage.isManufacturerNameColumnClickable());
		sa.assertAll();
	}
	
	@AfterClass
	public void tearDown() {
		driver.close();
	}

}
