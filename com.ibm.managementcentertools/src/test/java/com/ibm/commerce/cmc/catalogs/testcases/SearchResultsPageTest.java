package com.ibm.commerce.cmc.catalogs.testcases;

import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

import com.ibm.commerce.cmc.base.TestBase;
import com.ibm.commerce.cmc.ui.catalogs.pages.CatalogsHomePage;
import com.ibm.commerce.cmc.ui.catalogs.pages.ExtendedSitesCatalogAssetStoreCategoriesListPage;
import com.ibm.commerce.cmc.ui.catalogs.pages.SearchResultsPage;

public class SearchResultsPageTest extends TestBase {
	CatalogsHomePage catalogsHomePage;
	SearchResultsPage sResultsPage;
	
	public SearchResultsPageTest() {
		super();
	}
	
	@BeforeClass
	public void setUp() {
		//System.out.println("in new master setup");
		initialization();
		catalogsHomePage = new CatalogsHomePage();
		catalogsHomePage.clickOnStoreDropdown();
		
		Assert.assertTrue(catalogsHomePage.selectStorefromAngularDropDownByName(p.getProperty("storeToSelect")));
		sResultsPage= new SearchResultsPage();
		
		sResultsPage.clickOnSearchResults();
		//newMasterCategoryPage= new NewMasterCategoryPage();
		
	}
	
	@Test(priority=1)
	public void searchResultsPageHeadingTest() {
		String pageHeading = sResultsPage.getPageHeading();
		Assert.assertEquals(pageHeading, "Search Results - Catagories");
	}
	
	
	@Test(priority=2)
	public void verifyAllColumnsDisplayedOnThePage() {
		SoftAssert sa = new SoftAssert();
		sa.assertTrue(sResultsPage.isTypeColumnExists());
		sa.assertTrue(sResultsPage.isStoreColumnExists());
		sa.assertTrue(sResultsPage.isCodeColumnExists());
		sa.assertTrue(sResultsPage.isNameColumnExists());
		sa.assertTrue(sResultsPage.isThumbnailColumnExists());
		sa.assertTrue(sResultsPage.isDisplayToCustomerColumnExists());
		sa.assertTrue(sResultsPage.isBuyableColumnExists());
		sa.assertTrue(sResultsPage.isManufacturerPartNumberColumnExists());
		sa.assertTrue(sResultsPage.isManufacturerNameColumnExists());
		sa.assertAll();
	}
	
	@Test(priority=3)
	public void veriverifyAllColumnsClickable() {
		SoftAssert sa = new SoftAssert();
		sa.assertTrue(sResultsPage.isTypeColumnClickable());
		sa.assertTrue(sResultsPage.isStoreColumnClickable());
		sa.assertTrue(sResultsPage.isCodeColumnClickable());
		sa.assertTrue(sResultsPage.isNameColumnClickable());
		sa.assertTrue(sResultsPage.isThumbnailColumnClickable());
		sa.assertTrue(sResultsPage.isDisplayToCustomerColumnClickable());
		sa.assertTrue(sResultsPage.isBuyableColumnClickable());
		sa.assertTrue(sResultsPage.isManufacturerPartNumberColumnClickable());
		sa.assertTrue(sResultsPage.isManufacturerNameColumnClickable());
		sa.assertAll();
	}
	
	@AfterClass
	public void tearDown() {
		driver.close();
	}

}
