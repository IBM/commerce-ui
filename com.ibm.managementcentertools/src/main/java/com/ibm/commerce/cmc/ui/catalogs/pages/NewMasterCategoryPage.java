package com.ibm.commerce.cmc.ui.catalogs.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import com.ibm.commerce.cmc.base.TestBase;
import com.ibm.commerce.cmc.ui.utils.TestUtil;

public class NewMasterCategoryPage extends TestBase {

	public NewMasterCategoryPage() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//span[@class='mstrCtgry']")
	WebElement newMasterCategoryPageHeader;

	@FindBy(xpath = "//button[text()='Save and Preview']")
	WebElement saveandPreview;

	@FindBy(xpath = "//button[text()='Save']")
	WebElement save;

	@FindBy(xpath = "//button[text()='Close']")
	WebElement close;

	@FindBy(id = "n-tab-0-header")
	WebElement manageCategoryTab;

	@FindBy(id = "n-tab-1-header")
	WebElement searchEngineOptimizationTab;

	@FindBy(id = "n-tab-2-header")
	WebElement associatedAssetsTab;

	@FindBy(id = "n-tab-3-header")
	WebElement contentTab;

	@FindBy(id = "n-tab-4-header")
	WebElement referencesTab;

	/*
	 * Following are the accordions under Manage Category tab of New Master Category
	 * Page
	 */

	@FindBy(xpath = "//p[contains(text(),'Object Properties')]")
	WebElement objectPropertiesAccordion;

	@FindBy(xpath = "//p[contains(text(),'General Category Information')]")
	WebElement generalCategoryInformationAccordion;

	@FindBy(xpath = "//p[contains(text(),'Display')]")
	WebElement displayAccordion;

	/*
	 * Following are the elements under Object Properties Accordion of New Master
	 * Category Page
	 */

	// @FindBy(xpath="//ul[@class='bx--accordion']/ibm-accordion-item[1]/div/div/div[1]")
	// @FindBy(xpath="//ul[@class='bx--accordion']/ibm-accordion-item[1]/div/div[1][text()='
	// Associated Store ']")
	@FindBy(xpath = "//ul[@class='bx--accordion']/ibm-accordion-item[1]//div[contains(text(),'Associated Store')]")
	WebElement associatedStoreFieldText;
	/// *[@id="accordion-item-0"]/div/div[2]
	// @FindBy(xpath="//ul[@class='bx--accordion']/ibm-accordion-item[1]/div/div/div[2]")

	@FindBy(xpath = "//ul[@class='bx--accordion']/ibm-accordion-item[1]//div[contains(text(),'Associated Store')]//following-sibling::div")
	WebElement associatedStoreDisplayed;

	/*
	 * Following are the elements under General Category Information Accordion of
	 * New Master Category Page
	 */
	
	@FindBy(xpath = "//ul[@class='bx--accordion']/ibm-accordion-item[2]/div[1]/label")
	WebElement uniqueIdFieldText;

	// @FindBy(xpath="//ul[@class='bx--accordion']/ibm-accordion-item[2]/div/div[1]/div")
	//@FindBy(xpath = "//ul[@class='bx--accordion']/ibm-accordion-item[2]//div[contains(text(), 'Code')]")
	@FindBy(id="code-text")
	WebElement codeFieldText;

	// @FindBy(xpath="//ul[@class='bx--accordion']/ibm-accordion-item[2]/div/div[1]/div[2]/input")
	@FindBy(xpath = "//ul[@class='bx--accordion']/ibm-accordion-item[2]//div[contains(text(), 'Code')]//following-sibling::div/input")
	WebElement codeInputField;
	// *[@id="accordion-item-1"]/div[1]/div[2]/input

	// @FindBy(xpath="//ul[@class='bx--accordion']/ibm-accordion-item[2]/div/div[2]/div[1]")
	@FindBy(xpath = "//ul[@class='bx--accordion']/ibm-accordion-item[2]//div[contains(text(), 'Name')]")
	WebElement nameUSEnglishFieldText;
	// *[@id="accordion-item-1"]/div[2]/div[1]

	// @FindBy(xpath="//ul[@class='bx--accordion']/ibm-accordion-item[2]/div/div[2]/div[2]/input")
	@FindBy(xpath = "//ul[@class='bx--accordion']/ibm-accordion-item[2]//div[contains(text(), 'Name')]//following-sibling::div/input")
	WebElement nameUSEnglishInputField;

	// @FindBy(xpath="//ul[@class='bx--accordion']/ibm-accordion-item[2]/div/div[3]/div[1]")
	@FindBy(xpath = "//ul[@class='bx--accordion']/ibm-accordion-item[2]//div[contains(text(), 'Short description')]")
	WebElement shortDescriptionFieldText;

	// @FindBy(xpath="//ul[@class='bx--accordion']/ibm-accordion-item[2]/div/div[3]/div[2]/input")
	@FindBy(xpath = "//ul[@class='bx--accordion']/ibm-accordion-item[2]//div[contains(text(), 'Short description')]//following-sibling::div/input")
	WebElement shortDescriptionInputField;
	// *[@id="accordion-item-1"]/div[4]/input
	// *[@id="accordion-item-1"]/div[4]/input

	/*
	 * Following are the elements under Display Accordion of New Master Category
	 * Page
	 */

	// @FindBy(xpath="//ul[@class='bx--accordion']/ibm-accordion-item[3]/div/div[1]")
	@FindBy(xpath = "//ul[@class='bx--accordion']/ibm-accordion-item[3]//div[contains(text(), 'Display to customer')]")
	WebElement displayToCustomerFieldText;

	// *[@id="checkbox-0"]
	// ul[@class='bx--accordion']/ibm-accordion-item[3]/div/div[1]/ibm-checkbox/label
	// *[@id="accordion-item-2"]/div[1]/ibm-checkbox/label
	// @FindBy(xpath="//*[@id='accordion-item-2']/div[1]/ibm-checkbox/label")
	@FindBy(xpath = "//ul[@class='bx--accordion']/ibm-accordion-item[3]//div[contains(text(), 'Display to customer')]//following-sibling::div//label")
	WebElement displayToCustomerCheckbox;

	// @FindBy(xpath="//ul[@class='bx--accordion']/ibm-accordion-item[3]/div/div[2]/div")
	@FindBy(xpath = "//ul[@class='bx--accordion']/ibm-accordion-item[3]//div[contains(text(), 'Thumbnail')]")
	WebElement thumbnailFieldText;
	// *[@id="accordion-item-2"]/div[3]/div[1]

	// @FindBy(xpath="//ul[@class='bx--accordion']/ibm-accordion-item[3]/div/div[2]/input")
	@FindBy(xpath = "//ul[@class='bx--accordion']/ibm-accordion-item[3]//div[contains(text(), 'Thumbnail')]//following-sibling::div/input")
	WebElement thumbnailInputField;
	// *[@id="accordion-item-2"]/div[3]/div[2]/input

	// @FindBy(xpath="//ul[@class='bx--accordion']/ibm-accordion-item[3]/div/div[3]/div")
	@FindBy(xpath = "//ul[@class='bx--accordion']/ibm-accordion-item[3]//div[contains(text(), 'Full image')]")
	WebElement fullImageFieldText;

	// @FindBy(xpath="//ul[@class='bx--accordion']/ibm-accordion-item[3]/div/div[3]/input")
	@FindBy(xpath = "//ul[@class='bx--accordion']/ibm-accordion-item[3]//div[contains(text(), 'Full image')]//following-sibling::div/input")
	WebElement fullImageInputField;

	/*
	 * Following are the elements under Search Engine Optimization tab of New Master
	 * Category Page
	 */

	// @FindBy(xpath="//*[@id='n-tab-1']/div/div/div[1]/div")
	@FindBy(xpath = "//*[@id='n-tab-1']//div[contains(text(), 'URL keyword')]")
	WebElement urlKeywordFieldText;

	// @FindBy(xpath="//*[@id='n-tab-1']/div/div/div[1]/input")
	@FindBy(xpath = "//*[@id='n-tab-1']//div[contains(text(), 'URL keyword')]//following-sibling::div/input")
	WebElement urlKeywordInputField;

	// @FindBy(xpath="//*[@id='n-tab-1']/div/div/div[2]/div[1]")
	@FindBy(xpath = "//*[@id='n-tab-1']//div[contains(text(), 'Page title')]")
	WebElement pageTitleFieldText;

	// @FindBy(xpath="//*[@id='n-tab-1']/div/div/div[2]/div[2]/div[1]/div/ibm-radio/label")
	@FindBy(xpath = "//*[@id='n-tab-1']//ibm-radio//input[@id='radio-0']//following-sibling::label")
	WebElement pageTitleUseDefaultRadioText;

	// @FindBy(xpath="//*[@id='n-tab-1']/div/div/div[2]/div[2]/div[1]/div/ibm-radio/label/span")
	@FindBy(xpath = "//*[@id='n-tab-1']//ibm-radio//input[@id='radio-0']//following-sibling::label/span")
	WebElement pageTitleUseDefaultRadioButton;

	// @FindBy(xpath="//*[@id='n-tab-1']/div/div/div[2]/div[2]/div[2]/div/ibm-radio/label")
	@FindBy(xpath = "//*[@id='n-tab-1']//ibm-radio//input[@id='radio-1']//following-sibling::label")
	WebElement pageTitleOverrideDefaultRadioText;

	// @FindBy(xpath="//*[@id='n-tab-1']/div/div/div[2]/div[2]/div[2]/div/ibm-radio/label/span")
	@FindBy(xpath = "//*[@id='n-tab-1']//ibm-radio//input[@id='radio-1']//following-sibling::label/span")
	WebElement pageTitleOverrideDefaultRadioButton;

	// @FindBy(xpath="//*[@id='n-tab-1']/div/div/div[2]/div[2]/div[3]/input")
	@FindBy(xpath = "//*[@id='n-tab-1']/div/div/div[5]/input")
	WebElement pageTitleOverrideDefaultInputField;

	// @FindBy(xpath="//*[@id='n-tab-1']/div/div/div[3]/div[1]")
	@FindBy(xpath = "//*[@id='n-tab-1']//div[contains(text(), 'Meta description')]")
	WebElement metaDescriptionFieldText;

	// @FindBy(xpath="//*[@id='n-tab-1']/div/div/div[3]/div[2]/div[1]/div/ibm-radio/label")
	@FindBy(xpath = "//*[@id='n-tab-1']//ibm-radio//input[@id='radio-2']//following-sibling::label")
	WebElement metaDescriptionUseDefaultRadioText;

	// @FindBy(xpath="//*[@id='n-tab-1']/div/div/div[3]/div[2]/div[1]/div/ibm-radio/label/span")
	@FindBy(xpath = "//*[@id='n-tab-1']//ibm-radio//input[@id='radio-2']//following-sibling::label/span")
	WebElement metaDescriptionUseDefaultRadioButton;

	// @FindBy(xpath="//*[@id='n-tab-1']/div/div/div[3]/div[2]/div[2]/div/ibm-radio/label")
	@FindBy(xpath = "//*[@id='n-tab-1']//ibm-radio//input[@id='radio-3']//following-sibling::label")
	WebElement metaDescriptionOverrideDefaultRadioText;

	// @FindBy(xpath="//*[@id='n-tab-1']/div/div/div[3]/div[2]/div[2]/div/ibm-radio/label/span")
	@FindBy(xpath = "//*[@id='n-tab-1']//ibm-radio//input[@id='radio-3']//following-sibling::label/span")
	WebElement metaDescriptionOverrideDefaultRadioButton;

	// @FindBy(xpath="//*[@id='n-tab-1']/div/div/div[3]/div[2]/div[3]/textarea")
	@FindBy(xpath = "//*[@id=\"n-tab-1\"]/div/div/div[9]/textarea")
	WebElement metaDescriptionOverrideDefaultInputField;

	// @FindBy(xpath="//*[@id='n-tab-1']/div/div/div[4]/div[1]")
	@FindBy(xpath = "//*[@id='n-tab-1']//div[contains(text(), 'Image alt text')]")
	WebElement imageAltText;

	// @FindBy(xpath="//*[@id='n-tab-1']/div/div/div[4]/div[2]/div[1]/div/ibm-radio/label")
	@FindBy(xpath = "//*[@id='n-tab-1']//ibm-radio//input[@id='radio-4']//following-sibling::label")
	WebElement imageAltTextUseDefaultRadioText;

	// @FindBy(xpath="//*[@id='n-tab-1']/div/div/div[4]/div[2]/div[1]/div/ibm-radio/label/span")
	@FindBy(xpath = "//*[@id='n-tab-1']//ibm-radio//input[@id='radio-4']//following-sibling::label/span")
	WebElement imageAltTextUseDefaultRadioButton;

	// @FindBy(xpath="//*[@id='n-tab-1']/div/div/div[4]/div[2]/div[2]/div/ibm-radio/label")
	@FindBy(xpath = "//*[@id='n-tab-1']//ibm-radio//input[@id='radio-5']//following-sibling::label")
	WebElement imageAltTextOverrideDefaultRadioText;

	// @FindBy(xpath="//*[@id='n-tab-1']/div/div/div[4]/div[2]/div[2]/div/ibm-radio/label/span")
	@FindBy(xpath = "//*[@id='n-tab-1']//ibm-radio//input[@id='radio-5']//following-sibling::label/span")
	WebElement imageAltTextOverrideDefaultRadioButton;

	// @FindBy(xpath="//*[@id='n-tab-1']/div/div/div[4]/div[2]/div[3]/input")
	@FindBy(xpath = "//*[@id='n-tab-1']/div/div/div[13]/input")
	WebElement imageAltTextOverrideDefaultInputField;

	/*
	 * Following are the elements under Associated Assets tab of New Master Category
	 * Page
	 */

	@FindBy(xpath = "//p[contains(text(),'Associated Assets')]")
	WebElement associatedAssetsAccordion;

	@FindBy(xpath = "//*[@id='n-tab-2']/div")
	WebElement associatedAssetsFieldText;

	@FindBy(xpath = "//ibm-table//thead/tr/th[2]//span[contains(text(), 'Sequence')]")
	WebElement aacolumn_Sequence;

	@FindBy(xpath = "//ibm-table//thead/tr/th[3]//span[contains(text(), 'Type')]")
	WebElement aacolumn_Type;

	@FindBy(xpath = "//ibm-table//thead/tr/th[4]//span[contains(text(), 'Store')]")
	WebElement aacolumn_Store;

	@FindBy(xpath = "//ibm-table//thead/tr/th[5]//span[contains(text(), 'Path')]")
	WebElement aacolumn_Path;

	@FindBy(xpath = "//ibm-table//thead/tr/th[6]//span[contains(text(), 'Code')]")
	WebElement aacolumn_Code;

	@FindBy(xpath = "//ibm-table//thead/tr/th[7]//span[contains(text(), 'Usage')]")
	WebElement aacolumn_Usage;

	@FindBy(xpath = "//ibm-table//thead/tr/th[8]//span[contains(text(), 'Administrative name (United States English)')]")
	WebElement aacolumn_AdministrativeName;

	@FindBy(xpath = "//ibm-table//thead/tr/th[9]//span[contains(text(), 'Display name (United States English)')]")
	WebElement aacolumn_DisplayName;

	@FindBy(xpath = "//ibm-table//thead/tr/th[10]//span[contains(text(), 'Short description (United States English)')]")
	WebElement aacolumn_ShortDescription;

	

	/*
	 * Following are the elements under Content tab of New Master Category Page
	 */
	
	@FindBy(xpath = "//p[contains(text(),'Content')]")
	WebElement contentAccordion;


	@FindBy(xpath = "//ibm-table//thead/tr/th[2]//span[contains(text(), 'Language')]")
	WebElement cntcolumn_Language;

	@FindBy(xpath = "//ibm-table//thead/tr/th[3]//span[contains(text(), 'Identifier')]")
	WebElement cntcolumn_Identifier;

	@FindBy(xpath = "//ibm-table//thead/tr/th[4]//span[contains(text(), 'Name')]")
	WebElement cntcolumn_Name;

	@FindBy(xpath = "//ibm-table//thead/tr/th[5]//span[contains(text(), 'Content Type')]")
	WebElement cntcolumn_ContentType;

	@FindBy(xpath = "//ibm-table//thead/tr/th[6]//span[contains(text(), 'Description')]")
	WebElement cntcolumn_Description;

	

	/*
	 * Following are the elements under References tab of New Master Category Page
	 */
	@FindBy(xpath = "//p[contains(text(),'Marketing Activities')]")
	WebElement marketingActivitiesAccordion;


	@FindBy(xpath = "//ibm-table//thead/tr/th[2]//span[contains(text(), 'Type')]")
	WebElement refcolumn_Type;

	@FindBy(xpath = "//ibm-table//thead/tr/th[3]//span[contains(text(), 'Status')]")
	WebElement refcolumn_Status;

	@FindBy(xpath = "//ibm-table//thead/tr/th[4]//span[contains(text(), 'Store')]")
	WebElement refcolumn_Store;

	@FindBy(xpath = "//ibm-table//thead/tr/th[5]//span[contains(text(), 'Name')]")
	WebElement refcolumn_Name;

	@FindBy(xpath = "//ibm-table//thead/tr/th[6]//span[contains(text(), 'Description')]")
	WebElement refcolumn_Description;
	
	@FindBy(xpath = "//ibm-table//thead/tr/th[7]//span[contains(text(), 'Start Date')]")
	WebElement refcolumn_StartDate;
	
	@FindBy(xpath = "//ibm-table//thead/tr/th[8]//span[contains(text(), 'End Date')]")
	WebElement refcolumn_EndDate;
	
	@FindBy(xpath = "//ibm-table//thead/tr/th[9]//span[contains(text(), 'Campaign')]")
	WebElement refcolumn_Campaign;
	

	public String getNewMasterCategoryPageHeading() {
		String pageHeading = newMasterCategoryPageHeader.getText();
		return pageHeading;
	}

	public boolean isSaveandPreviewButtonDisplayed() {

		return TestUtil.isElementDisplayed(saveandPreview);
	}

	public boolean isSaveButtonDisplayed() {

		return TestUtil.isElementDisplayed(save);
	}

	public boolean isCloseButtonDisplayed() {

		return TestUtil.isElementDisplayed(close);
	}

	public boolean isManageCategoryTabExists() {
		// return manageCategoryTab.isDisplayed();
		return TestUtil.isElementDisplayed(manageCategoryTab);
	}

	public boolean isSearchEngineOptimizationTabExists() {
		// return searchEngineOptimizationTab.isDisplayed();
		return TestUtil.isElementDisplayed(searchEngineOptimizationTab);
	}

	public boolean isAssociatedAssetsTabExists() {
		// return associatedAssetsTab.isDisplayed();
		return TestUtil.isElementDisplayed(associatedAssetsTab);
	}

	public boolean isContentTabExists() {
		// return contentTab.isDisplayed();
		return TestUtil.isElementDisplayed(contentTab);

	}

	public boolean isReferencesTabExists() {
		// return referencesTab.isDisplayed();
		return TestUtil.isElementDisplayed(referencesTab);

	}

	public void clickManageCategoryTab() {
		// manageCategoryTab.click();
		TestUtil.clickOnElement(manageCategoryTab);
	}

	public void clickSearchEngineOptimazationTab() {
		// searchEngineOptimizationTab.click();
		TestUtil.clickOnElement(searchEngineOptimizationTab);

	}

	public void clickAssociatedAssertsTab() {
		// associatedAssetsTab.click();
		TestUtil.clickOnElement(associatedAssetsTab);

	}

	public void clickContentTab() {
		// contentTab.click();
		TestUtil.clickOnElement(contentTab);

	}

	public void clickReferencesTab() {
		// referencesTab.click();
		TestUtil.clickOnElement(referencesTab);

	}

	public void clickObjectPropertiesAccordion() {
		// objectPropertiesAccordion.click();
		TestUtil.clickOnElement(objectPropertiesAccordion);

	}

	public String getAssociatedStoreFieldText() {
		// return associatedStoreFieldText.getText();
		return TestUtil.getElementText(associatedStoreFieldText);
	}

	public String getAssociatedStoreDisplayed() {
		// return associatedStoreDisplayed.getText();
		return TestUtil.getElementText(associatedStoreDisplayed);

	}

	public void clickGeneralCategoryInformationAccordion() {
		// generalCategoryInformationAccordion.click();
		TestUtil.clickOnElement(generalCategoryInformationAccordion);

	}

	public void clickDisplayAccordion() {
		// displayAccordion.click();
		TestUtil.clickOnElement(displayAccordion);

	}
	
	public String getUniqueIDFieldText() {
		// return uniqueIdCodeFieldText.getText();
		return TestUtil.getElementText(uniqueIdFieldText);

	}

	public String getCodeFieldText() {
		// return uniqueIdCodeFieldText.getText();
		return TestUtil.getElementText(codeFieldText);

	}

	public String getNameFieldText() {
		// return nameUSEnglishFieldText.getText();
		return TestUtil.getElementText(nameUSEnglishFieldText);

	}

	public String getShortDescriptionFieldText() {
		// return shortDescriptionFieldText.getText();
		return TestUtil.getElementText(shortDescriptionFieldText);
	}

	public void inputGeneralCategoryInformation(String categoryId, String categoryName, String categoryDescription) {
		//codeInputField.sendKeys(categoryId);
		TestUtil.enterText(codeInputField, categoryId);
		//nameUSEnglishInputField.sendKeys(categoryName);
		TestUtil.enterText(nameUSEnglishInputField, categoryName);
		//shortDescriptionInputField.sendKeys(categoryDescription);
		TestUtil.enterText(shortDescriptionInputField, categoryDescription);

	}

	public String getDisplayToCustomerFieldText() {
		// return displayToCustomerFieldText.getText();
		return TestUtil.getElementText(displayToCustomerFieldText);

	}

	public String getThumbnailFieldText() {
		// return thumbnailFieldText.getText();
		return TestUtil.getElementText(thumbnailFieldText);

	}

	public String getFullImageFieldText() {
		// return fullImageFieldText.getText();
		return TestUtil.getElementText(fullImageFieldText);

	}

	public void inputDisplayInformation(String thumbnail, String fullImage) {
		
		displayToCustomerCheckbox.click();
		//thumbnailInputField.sendKeys(thumbnail);
		TestUtil.enterText(thumbnailInputField, thumbnail);
		//fullImageInputField.sendKeys(fullImage);
		TestUtil.enterText(fullImageInputField, fullImage);

	}

	public String getURLKeywordFieldText() {
		// return urlKeywordFieldText.getText();
		return TestUtil.getElementText(urlKeywordFieldText);

	}

	public String getPageTileFieldText() {
		// return pageTitleFieldText.getText();
		return TestUtil.getElementText(pageTitleFieldText);

	}

	public String getPageTitleUseDefaultRadioText() {
		// return pageTitleUseDefaultRadioText.getText();
		return TestUtil.getElementText(pageTitleUseDefaultRadioText);

	}

	public boolean isPageTitleUseDefaultRadioSelected() {
		return TestUtil.isElementSelected(pageTitleUseDefaultRadioButton);

	}

	public String getPageTitleOverrideDefaultRadioText() {
		// return pageTitleOverrideDefaultRadioText.getText();
		return TestUtil.getElementText(pageTitleOverrideDefaultRadioText);

	}

	public boolean isPageTitleOverrideDefaultRadioSelected() {
		return TestUtil.isElementSelected(pageTitleOverrideDefaultRadioButton);
	}

	public void clickOnPageTitleOverrideDefaultInputField() {
		TestUtil.clickOnElement(pageTitleOverrideDefaultInputField);
	}

	public String getMetaDescriptionFieldText() {
		// return metaDescriptionFieldText.getText();
		return TestUtil.getElementText(metaDescriptionFieldText);

	}

	public String getMetaDescriptionUseDefaultRadioText() {
		// return metaDescriptionUseDefaultRadioText.getText();
		return TestUtil.getElementText(metaDescriptionUseDefaultRadioText);

	}

	public boolean isMetaDescriptionUseDefaultRadioSelected() {
		return TestUtil.isElementSelected(metaDescriptionUseDefaultRadioButton);
	}

	public String getMetaDescriptionOverrideDefaultRadioText() {
		// return metaDescriptionOverrideDefaultRadioText.getText();
		return TestUtil.getElementText(metaDescriptionOverrideDefaultRadioText);

	}

	public boolean isMetaDescriptionOverrideDefaultRadioSelected() {
		return TestUtil.isElementSelected(metaDescriptionOverrideDefaultRadioButton);
	}

	public void clickOnMetaDescriptionOverrideDefaultInputField() {
		TestUtil.clickOnElement(metaDescriptionOverrideDefaultInputField);
	}

	public String getImageAltTextFieldText() {
		// return imageAltText.getText();
		return TestUtil.getElementText(imageAltText);

	}

	public String getImageAltUseDefaultRadioText() {
		// return imageAltTextUseDefaultRadioText.getText();
		return TestUtil.getElementText(imageAltTextUseDefaultRadioText);

	}

	public boolean isImageAltTextUseDefaultRadioSelected() {
		return TestUtil.isElementSelected(imageAltTextUseDefaultRadioButton);
	}

	public String getImageAltOverrideDefaultRadioText() {
		// return imageAltTextOverrideDefaultRadioText.getText();
		return TestUtil.getElementText(imageAltTextOverrideDefaultRadioText);

	}

	public boolean isImageAltTextOverrideDefaultRadioSelected() {
		return TestUtil.isElementSelected(imageAltTextOverrideDefaultRadioButton);
	}

	public void clickOnImageAltTextOverrideDefaultInputField() {
		TestUtil.clickOnElement(imageAltTextOverrideDefaultInputField);
	}

	public void inputSearchEngineOptimizationInformation(String urlKeyword, String pageTitle, String metaDescription,
			String imageAltText) {
		TestUtil.enterText(urlKeywordInputField, urlKeyword);
		//urlKeywordInputField.sendKeys(urlKeyword);
		TestUtil.enterText(pageTitleOverrideDefaultInputField, pageTitle);
		//pageTitleOverrideDefaultInputField.sendKeys(pageTitle);
		TestUtil.enterText(metaDescriptionOverrideDefaultInputField, metaDescription);
		//metaDescriptionOverrideDefaultInputField.sendKeys(metaDescription);
		TestUtil.enterText(imageAltTextOverrideDefaultInputField, imageAltText);
		//imageAltTextOverrideDefaultInputField.sendKeys(imageAltText);

	}

	public void clickOnSaveandPreviewButton() {
		TestUtil.clickOnElement(saveandPreview);
	}

	public void clickOnSaveButton() {
		TestUtil.clickOnElement(save);
	}

	public void clickOnCloseButton() {
		TestUtil.clickOnElement(close);
	}
	
	public void scrollToAssociatedAssets() {
		TestUtil.scrollToElementOnPage(associatedAssetsTab);
	}
	
	
	public void clickOnAssociatedAssetsAccordion() {
		TestUtil.clickOnElement(associatedAssetsAccordion);
	}

	public boolean isAASequenceColumnExists() {
		return TestUtil.isElementDisplayed(aacolumn_Sequence);
	}

	public boolean isAATypeColumnExists() {
		return TestUtil.isElementDisplayed(aacolumn_Type);
	}

	public boolean isAAStoreColumnExists() {
		return TestUtil.isElementDisplayed(aacolumn_Store);
	}

	public boolean isAAPathColumnExists() {
		return TestUtil.isElementDisplayed(aacolumn_Path);
	}

	public boolean isAACodeColumnExists() {
		return TestUtil.isElementDisplayed(aacolumn_Code);
	}

	public boolean isAAUsageColumnExists() {
		return TestUtil.isElementDisplayed(aacolumn_Usage);
	}

	public boolean isAAAdminNameColumnExists() {
		return TestUtil.isElementDisplayed(aacolumn_AdministrativeName);
	}

	public boolean isAADisplayNameColumnExists() {
		return TestUtil.isElementDisplayed(aacolumn_DisplayName);
	}

	public boolean isAAShortDescriptionColumnExists() {
		return TestUtil.isElementDisplayed(aacolumn_ShortDescription);

	}
	
	public void clickOnContentAccordion() {
		TestUtil.clickOnElement(contentAccordion);
	}

	public boolean isContentLanguageColumnExists() {
		return TestUtil.isElementDisplayed(cntcolumn_Language);
	}

	public boolean isContentIdentifierColumnExists() {
		return TestUtil.isElementDisplayed(cntcolumn_Identifier);
	}

	public boolean isContentNameColumnExists() {
		return TestUtil.isElementDisplayed(cntcolumn_Name);
	}

	public boolean isContentContentTypeColumnExists() {
		return TestUtil.isElementDisplayed(cntcolumn_ContentType);
	}

	public boolean isContentDescriptionColumnExists() {
		return TestUtil.isElementDisplayed(cntcolumn_Description);
	}
	
	public void clickOnMarketingActivitiesAccordion() {
		TestUtil.clickOnElement(marketingActivitiesAccordion);
	}

	public boolean isReferencesMATypeColumnExists() {
		return TestUtil.isElementDisplayed(refcolumn_Type);
	}

	public boolean isReferencesMAStatusColumnExists() {
		return TestUtil.isElementDisplayed(refcolumn_Status);
	}

	public boolean isReferencesMAStoreColumnExists() {
		return TestUtil.isElementDisplayed(refcolumn_Store);
	}

	public boolean isReferencesMANameColumnExists() {
		return TestUtil.isElementDisplayed(refcolumn_Name);
	}

	public boolean isReferencesMADescriptionColumnExists() {
		return TestUtil.isElementDisplayed(refcolumn_Description);
	}
	
	public boolean isReferencesMAStartDateColumnExists() {
		return TestUtil.isElementDisplayed(refcolumn_StartDate);
	}
	
	public boolean isReferencesMAEndDateColumnExists() {
		return TestUtil.isElementDisplayed(refcolumn_EndDate);
	}
	
	public boolean isReferencesMACampaignColumnExists() {
		return TestUtil.isElementDisplayed(refcolumn_Campaign);
	}
	

}