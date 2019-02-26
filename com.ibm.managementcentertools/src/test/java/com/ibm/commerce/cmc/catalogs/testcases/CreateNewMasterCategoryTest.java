package com.ibm.commerce.cmc.catalogs.testcases;

import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;
import org.testng.annotations.BeforeMethod;

//import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.ibm.commerce.cmc.base.TestBase;
import com.ibm.commerce.cmc.ui.catalogs.pages.CatalogsHomePage;
import com.ibm.commerce.cmc.ui.catalogs.pages.NewMasterCategoryPage;
import com.ibm.commerce.cmc.ui.utils.TestUtil;

public class CreateNewMasterCategoryTest extends TestBase {
	NewMasterCategoryPage newMasterCategoryPage;
	CatalogsHomePage catalogsHomePage;

	public CreateNewMasterCategoryTest() {
		super();
	}

	@BeforeClass
	public void setUp() {
		// System.out.println("in new master setup");
		initialization();
		catalogsHomePage = new CatalogsHomePage();
		catalogsHomePage.clickOnStoreDropdown();
		
		Assert.assertTrue(catalogsHomePage.selectStorefromAngularDropDownByName(p.getProperty("storeToSelect")));
		newMasterCategoryPage = catalogsHomePage.clickNewMasterCategoryFromFileMenu();
		// newMasterCategoryPage= new NewMasterCategoryPage();

	}

	@Test(priority = 1)
	public void newMasterCategoryPageHeadingTest() {
		// System.out.println("in new master p1");
		String title = newMasterCategoryPage.getNewMasterCategoryPageHeading();
		Assert.assertEquals(title, "New Master Category",
				"New Master Category Page Heading is not matched with Expected Value");

	}

	/**
	 * Verify Save and Preview button Exists or not
	 */
	@Test(priority = 2)
	public void validateSaveandPreviewButtonExistance() {
		// System.out.println("in new master p2");
		boolean flag = newMasterCategoryPage.isSaveandPreviewButtonDisplayed();
		Assert.assertTrue(flag, "SaveandPreviewButton is not displayed on Screen");
	}

	/**
	 * Verify Save button Exists or not
	 */
	@Test(priority = 3)
	public void validateSaveButtonExistance() {
		// System.out.println("in new master p3");
		boolean flag = newMasterCategoryPage.isSaveButtonDisplayed();
		// Assert.assertTrue(flag,"hh");
		Assert.assertTrue(flag, "Save Button not displayed on the Screen");
	}

	/**
	 * Verify Close button Exists or not
	 */
	@Test(priority = 4)
	public void validateCloseButtonExistance() {
		// System.out.println("in new master p4");
		boolean flag = newMasterCategoryPage.isCloseButtonDisplayed();
		// Assert.assertTrue(flag, "Not exist");
		Assert.assertTrue(flag, "Close Button not displayed on the Screen");
	}

	/**
	 * Verify Manage Category Tab Exists or not
	 */
	@Test(priority = 5)
	public void validateManageCategoryTabExistance() {
		// System.out.println("in new master p 5");
		boolean flag = newMasterCategoryPage.isManageCategoryTabExists();
		Assert.assertTrue(flag, "Manage Category Tab is not displayed on Screen");
	}

	/**
	 * Verify Search Engine Optimization Tab Exists or not
	 */
	@Test(priority = 6)
	public void validateSearchEngineOptimizationTabExistance() {
		boolean flag = newMasterCategoryPage.isSearchEngineOptimizationTabExists();
		Assert.assertTrue(flag, "Search Engine Optimization Tab is not diplayed on Screen");
	}

	/**
	 * Verify Associated Assets Tab Exists or not
	 */

	@Test(priority = 7)
	public void validateAssociatedAssetsTabExistance() {
		boolean flag = newMasterCategoryPage.isAssociatedAssetsTabExists();
		Assert.assertTrue(flag, "Associated Tab is not displayed on Screen");

	}

	/**
	 * Verify Content Tab Exists or not
	 */
	@Test(priority = 8)
	public void validateContentTabExistance() {
		boolean flag = newMasterCategoryPage.isContentTabExists();
		Assert.assertTrue(flag, "Content Tab is not displayed on Screen");
	}

	/**
	 * Verify References Tab Exists or not
	 */
	@Test(priority = 9)
	public void validateReferencesTabExistance() {
		boolean flag = newMasterCategoryPage.isReferencesTabExists();
		Assert.assertTrue(flag, "References Tab is not displayed on Screen");
	}

	@Test(priority = 10)
	public void validateManageCategoryObjectPropertiesAssociatedStoreTest() {
		newMasterCategoryPage.clickManageCategoryTab();
		newMasterCategoryPage.clickObjectPropertiesAccordion();
		String associatedStoreText = newMasterCategoryPage.getAssociatedStoreFieldText();
		Assert.assertEquals(associatedStoreText, "Associated Store");
	}

	@Test(priority = 11)
	public void validateManageCategoryObjectPropertiesAssociatedStoreDisplayedTest() {

		String associatedStoreDisplayed = newMasterCategoryPage.getAssociatedStoreDisplayed();
		Assert.assertEquals(associatedStoreDisplayed, "AuroraESite");
		newMasterCategoryPage.clickObjectPropertiesAccordion();
	}
	
	@Test(priority = 12)
	public void validateManageCategoryGeneralCategoryInformationUniqueIdFieldNameTest() {

		newMasterCategoryPage.clickGeneralCategoryInformationAccordion();

		String uniqueIDFieldName = newMasterCategoryPage.getUniqueIDFieldText();
		Assert.assertEquals(uniqueIDFieldName, "Unique ID");

	}

	@Test(priority = 12)
	public void validateManageCategoryGeneralCategoryInformationCodeFieldNameTest() {

		//newMasterCategoryPage.clickGeneralCategoryInformationAccordion();

		String codeFieldName = newMasterCategoryPage.getCodeFieldText();
		//System.out.println("Code Field Text is:"+codeFieldName);
		Assert.assertEquals(codeFieldName, "Code");

	}

	@Test(priority = 13)
	public void validateManageCategoryGeneralCategoryInformationNameFieldTest() {
		String nameFieldText = newMasterCategoryPage.getNameFieldText();
		//System.out.println("name field text is: "+nameFieldText);
		Assert.assertEquals(nameFieldText, "Name (United State English)");
	}

	@Test(priority = 14)
	public void validateManageCategoryGeneralCategoryInformationShortDescriptionFieldTest() {
		String shortDescription = newMasterCategoryPage.getShortDescriptionFieldText();
		Assert.assertEquals(shortDescription, "Short description (United State English)");
	}

	@Test(priority = 15)
	public void validateManageCategoryInputGeneralCategoryInformationTest() {
		newMasterCategoryPage.inputGeneralCategoryInformation("Auto_Category_ID", "Auto_Category_Name",
				"Auto_Category_Description");
		newMasterCategoryPage.clickGeneralCategoryInformationAccordion();
	}

	@Test(priority = 16)
	public void validateManageCategoryDisplayAccordionDisplayToCustomerFieldTest() {
		newMasterCategoryPage.clickDisplayAccordion();

		String displayToCustomerText = newMasterCategoryPage.getDisplayToCustomerFieldText();
		Assert.assertEquals(displayToCustomerText, "Display to customer (United State English)");
	}

	@Test(priority = 17)
	public void validateManageCategoryDisplayAccordionThumbnailFieldTest() {

		String thumbNailText = newMasterCategoryPage.getThumbnailFieldText();
		Assert.assertEquals(thumbNailText, "Thumbnail (United State English)");
	}

	@Test(priority = 18)
	public void validateManageCategoryDisplayAccordionFullImageFieldTest() {

		String fullImageText = newMasterCategoryPage.getFullImageFieldText();
		Assert.assertEquals(fullImageText, "Full image (United State English)");
	}

	@Test(priority = 19)
	public void validateManageCategoryInputDisplayAccordionInformationTest() {
		newMasterCategoryPage.inputDisplayInformation("Thumb Nail Input", "FullImage Input");
	}

	@Test(priority = 20)
	public void validateSearchEngineOptimizationURLKeywordFieldTest() {
		newMasterCategoryPage.clickSearchEngineOptimazationTab();

		String urlKeywordText = newMasterCategoryPage.getURLKeywordFieldText();
		Assert.assertEquals(urlKeywordText, "URL keyword (United State English)");

	}

	@Test(priority = 21)
	public void validateSearchEngineOptimizationPageTitleFieldTest() {

		String pageTitleFieldText = newMasterCategoryPage.getPageTileFieldText();
		Assert.assertEquals(pageTitleFieldText, "Page title (United State English)");
	}

	@Test(priority = 22)
	public void validateSearchEngineOptimizationPageTitleUseDefaultRadioTest() {
		Assert.assertTrue(newMasterCategoryPage.isPageTitleUseDefaultRadioSelected());
	}

	@Test(priority = 23)
	public void validateSearchEngineOptimizationPageTitleOverrideDefaultRadioTest() {
		Assert.assertFalse(newMasterCategoryPage.isPageTitleOverrideDefaultRadioSelected());
	}

	@Test(priority = 24)
	public void validateSearchEngineOptimizationPageTitleOverrideDefaultRadioAutoSelectTest() {
		newMasterCategoryPage.clickOnPageTitleOverrideDefaultInputField();
		Assert.assertTrue(newMasterCategoryPage.isPageTitleOverrideDefaultRadioSelected());
	}

	@Test(priority = 25)
	public void validateSearchEngineOptimizationMetaDescriptionFieldTest() {
		String metaDescriptionFieldText = newMasterCategoryPage.getMetaDescriptionFieldText();
		Assert.assertEquals(metaDescriptionFieldText, "Meta description (United State English)");
	}

	@Test(priority = 26)
	public void validateSearchEngineOptimizationMetaDescriptionUseDefaultRadioTest() {
		Assert.assertTrue(newMasterCategoryPage.isMetaDescriptionUseDefaultRadioSelected());
	}

	@Test(priority = 27)
	public void validateSearchEngineOptimizationMetaDescriptionOverrideDefaultRadioTest() {
		Assert.assertFalse(newMasterCategoryPage.isMetaDescriptionOverrideDefaultRadioSelected());
	}

	@Test(priority = 28)
	public void validateSearchEngineOptimizationMetaDescriptionOverrideDefaultRadioAutoSelectTest() {
		newMasterCategoryPage.clickOnMetaDescriptionOverrideDefaultInputField();
		Assert.assertTrue(newMasterCategoryPage.isMetaDescriptionOverrideDefaultRadioSelected());
	}

	@Test(priority = 29)
	public void validateSearchEngineOptimizationImageAltFieldTest() {

		String imageAltFieldText = newMasterCategoryPage.getImageAltTextFieldText();
		Assert.assertEquals(imageAltFieldText, "Image alt text (United State English)");
	}

	@Test(priority = 30)
	public void validateSearchEngineOptimizationImageAltTextUseDefaultRadioTest() {
		Assert.assertTrue(newMasterCategoryPage.isImageAltTextUseDefaultRadioSelected());
	}

	@Test(priority = 31)
	public void validateSearchEngineOptimizationImageAltTextOverrideDefaultRadioTest() {
		Assert.assertFalse(newMasterCategoryPage.isImageAltTextOverrideDefaultRadioSelected());

	}

	@Test(priority = 32)
	public void validateSearchEngineOptimizationImageAltTextOverrideDefaultRadioAutoSelectTest() {
		newMasterCategoryPage.clickOnImageAltTextOverrideDefaultInputField();
		Assert.assertTrue(newMasterCategoryPage.isImageAltTextOverrideDefaultRadioSelected());
	}

	@Test(priority = 33)
	public void validateSearchEngineOptimizationInputDetailsTest() {

		newMasterCategoryPage.inputSearchEngineOptimizationInformation("URL Information", "pageTitle",
				"metaDescription", "imageAltText");
	}
	
	@Test(priority=34)
	public void verifyAllColumnsDisplayedUnderAssociatedAssetsTab() {
		TestUtil.scrollByPixels(0,-1000);
		newMasterCategoryPage.clickAssociatedAssertsTab();
		newMasterCategoryPage.clickOnAssociatedAssetsAccordion();
		
		SoftAssert sa = new SoftAssert();
		sa.assertTrue(newMasterCategoryPage.isAASequenceColumnExists());
		sa.assertTrue(newMasterCategoryPage.isAATypeColumnExists());
		sa.assertTrue(newMasterCategoryPage.isAAStoreColumnExists());
		sa.assertTrue(newMasterCategoryPage.isAAPathColumnExists());
		sa.assertTrue(newMasterCategoryPage.isAACodeColumnExists());
		sa.assertTrue(newMasterCategoryPage.isAAUsageColumnExists());
		sa.assertTrue(newMasterCategoryPage.isAAAdminNameColumnExists());
		sa.assertTrue(newMasterCategoryPage.isAADisplayNameColumnExists());
		sa.assertTrue(newMasterCategoryPage.isAAShortDescriptionColumnExists());
		sa.assertAll();
		

	}
	
	@Test(priority=35)
	public void verifyAllColumnsDisplayedUnderContentTab() {
		
		newMasterCategoryPage.clickContentTab();
		newMasterCategoryPage.clickOnContentAccordion();
		
		SoftAssert sa = new SoftAssert();
		sa.assertTrue(newMasterCategoryPage.isContentLanguageColumnExists());
		sa.assertTrue(newMasterCategoryPage.isContentIdentifierColumnExists());
		sa.assertTrue(newMasterCategoryPage.isContentNameColumnExists());
		sa.assertTrue(newMasterCategoryPage.isContentContentTypeColumnExists());
		sa.assertTrue(newMasterCategoryPage.isContentDescriptionColumnExists());
		
		sa.assertAll();
		

	}
	
	@Test(priority=36, description=" this is only applicable for Extended Stores...")
	public void verifyAllColumnsDisplayedUnderReferencesTab() {
		
		newMasterCategoryPage.clickReferencesTab();
		newMasterCategoryPage.clickOnMarketingActivitiesAccordion();
		
		SoftAssert sa = new SoftAssert();
		sa.assertTrue(newMasterCategoryPage.isReferencesMATypeColumnExists());
		sa.assertTrue(newMasterCategoryPage.isReferencesMAStatusColumnExists());
		sa.assertTrue(newMasterCategoryPage.isReferencesMAStoreColumnExists());
		sa.assertTrue(newMasterCategoryPage.isReferencesMANameColumnExists());
		sa.assertTrue(newMasterCategoryPage.isReferencesMADescriptionColumnExists());
		sa.assertTrue(newMasterCategoryPage.isReferencesMAStartDateColumnExists());
		sa.assertTrue(newMasterCategoryPage.isReferencesMAEndDateColumnExists());
		sa.assertTrue(newMasterCategoryPage.isReferencesMACampaignColumnExists());
		
		sa.assertAll();
		

	}
	
	@Test(priority=37)
	public void saveNewMasterCategory() {
		newMasterCategoryPage.clickOnSaveButton();
	}
	

	@AfterClass
	public void tearDown() {
		// System.out.println("in new master tear down");
		driver.close();
	}

}
