package com.ibm.commerce.cmc.catalogs.testcases;

import org.testng.Assert;
import org.testng.annotations.AfterClass;
//import org.junit.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

import com.ibm.commerce.cmc.base.TestBase;
import com.ibm.commerce.cmc.ui.catalogs.pages.CatalogsHomePage;
import com.ibm.commerce.cmc.ui.catalogs.pages.ExtendedSitesCatalogAssetStoreCategoriesListPage;

public class ExtendedSitesCatalogAssetStoreCategoriesListTest extends TestBase {
	ExtendedSitesCatalogAssetStoreCategoriesListPage extendedSitesCatalogAssetStoreCategoriesListPage;
	public ExtendedSitesCatalogAssetStoreCategoriesListTest()
	{
		super();
	}
	
	
	
	@BeforeClass
	public void setUp() {
		//System.out.println("in new master setup");
		initialization();
		extendedSitesCatalogAssetStoreCategoriesListPage= new ExtendedSitesCatalogAssetStoreCategoriesListPage();
		
		extendedSitesCatalogAssetStoreCategoriesListPage.clickOnExtendedSitesCatalogAssetStore();
		//newMasterCategoryPage= new NewMasterCategoryPage();
		
	}
	
	@Test(priority=1)
	public void extendedSitesCatalogAssetStoreCategoriesListPageHeadingTest() {
		String heading = extendedSitesCatalogAssetStoreCategoriesListPage.getPageHeading();
		Assert.assertEquals(heading, "ExtendedSitesCatalogAssetStore - Catagories List");
	}
	
	@Test(priority=2)
	public void verifyAllColumnsDisplayedOnThePage() {
		SoftAssert sa = new SoftAssert();
		sa.assertTrue(extendedSitesCatalogAssetStoreCategoriesListPage.isSequenceColumnExists());
		sa.assertTrue(extendedSitesCatalogAssetStoreCategoriesListPage.isTypeColumnExists());
		sa.assertTrue(extendedSitesCatalogAssetStoreCategoriesListPage.isStoreColumnExists());
		sa.assertTrue(extendedSitesCatalogAssetStoreCategoriesListPage.isCodeColumnExists());
		sa.assertTrue(extendedSitesCatalogAssetStoreCategoriesListPage.isNameColumnExists());
		sa.assertTrue(extendedSitesCatalogAssetStoreCategoriesListPage.isDisplayToCustomerColumnExists());
		sa.assertAll();
	}
	
	@Test(priority=3)
	public void verifyAllColumnsClickable() {
		SoftAssert sa = new SoftAssert();
		sa.assertTrue(extendedSitesCatalogAssetStoreCategoriesListPage.isSequenceColumnClickable());
		sa.assertTrue(extendedSitesCatalogAssetStoreCategoriesListPage.isTypeColumnClickable());
		sa.assertTrue(extendedSitesCatalogAssetStoreCategoriesListPage.isStoreColumnClickable());
		sa.assertTrue(extendedSitesCatalogAssetStoreCategoriesListPage.isCodeColumnClickable());
		sa.assertTrue(extendedSitesCatalogAssetStoreCategoriesListPage.isNameColumnClickable());
		sa.assertTrue(extendedSitesCatalogAssetStoreCategoriesListPage.isDisplayToCustomerColumnClickable());
		sa.assertAll();
	}
	
	@AfterClass
	public void tearDown() {
		//System.out.println("in new master tear down");
		driver.close();
	}

}
