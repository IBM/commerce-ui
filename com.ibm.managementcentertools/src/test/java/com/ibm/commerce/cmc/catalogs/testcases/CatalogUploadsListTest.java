package com.ibm.commerce.cmc.catalogs.testcases;

import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

import com.ibm.commerce.cmc.base.TestBase;
import com.ibm.commerce.cmc.ui.catalogs.pages.CatalogUploadsListPage;
import com.ibm.commerce.cmc.ui.catalogs.pages.CatalogsHomePage;
import com.ibm.commerce.cmc.ui.catalogs.pages.ExtendedSitesCatalogAssetStoreCategoriesListPage;
import com.ibm.commerce.cmc.ui.catalogs.pages.SearchResultsPage;

public class CatalogUploadsListTest extends TestBase {
	CatalogsHomePage catalogsHomePage;
	CatalogUploadsListPage catalogUploadsListPage;
	
	public CatalogUploadsListTest() {
		super();
	}
	
	@BeforeClass
	public void setUp() {
		//System.out.println("in new master setup");
		initialization();
		catalogsHomePage = new CatalogsHomePage();
		catalogsHomePage.clickOnStoreDropdown();
		
		Assert.assertTrue(catalogsHomePage.selectStorefromAngularDropDownByName(p.getProperty("storeToSelect")));
		catalogUploadsListPage= new CatalogUploadsListPage();
		
		catalogUploadsListPage.clickOnCatalogUploads();
		//newMasterCategoryPage= new NewMasterCategoryPage();
		
	}
	
	@Test(priority=1)
	public void searchResultsPageHeadingTest() {
		String pageHeading = catalogUploadsListPage.getPageHeading();
		Assert.assertEquals(pageHeading, "Catalog Uploads - Catalog Uploads List");
	}
	
	
	@Test(priority=2)
	public void verifyAllColumnsDisplayedOnThePage() {
		SoftAssert sa = new SoftAssert();
		sa.assertTrue(catalogUploadsListPage.isFileNameColumnExists());
		sa.assertTrue(catalogUploadsListPage.isSizeColumnExists());
		sa.assertTrue(catalogUploadsListPage.isStatusColumnExists());
		sa.assertTrue(catalogUploadsListPage.isUploadedByColumnExists());
		sa.assertTrue(catalogUploadsListPage.isTargetCatalogColumnExists());
		sa.assertTrue(catalogUploadsListPage.isStartTimeColumnExists());
		sa.assertTrue(catalogUploadsListPage.isEndTimeColumnExists());
	
		sa.assertAll();
	}
	
	@Test(priority=3)
	public void veriverifyAllColumnsClickable() {
		SoftAssert sa = new SoftAssert();
		sa.assertTrue(catalogUploadsListPage.isFileNameColumnClickable());
		sa.assertTrue(catalogUploadsListPage.isSizeColumnClickable());
		sa.assertTrue(catalogUploadsListPage.isStatusColumnClickable());
		sa.assertTrue(catalogUploadsListPage.isUploadedByColumnClickable());
		sa.assertTrue(catalogUploadsListPage.isTargetCatalogColumnClickable());
		sa.assertTrue(catalogUploadsListPage.isStartTimeColumnClickable());
		sa.assertTrue(catalogUploadsListPage.isEndTimeColumnClickable());

		sa.assertAll();
	}
	
	@AfterClass
	public void tearDown() {
		driver.close();
	}

}
