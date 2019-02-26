package com.ibm.commerce.cmc.ui.catalogs.pages;

import java.awt.AWTException;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.ibm.commerce.cmc.base.TestBase;
import com.ibm.commerce.cmc.ui.utils.TestUtil;

public class CatalogUploadPage extends TestBase {
	public CatalogUploadPage() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id="header-text")
	WebElement pageHeading;
	
	
	@FindBy(id="close-btn")
	WebElement close;
	
	@FindBy(id="save-btn")
	WebElement save;
	
	@FindBy(xpath="//ibm-accordion-item//p[contains(text(), 'Main Properties')]")
	WebElement mainPropertiesAccordion;
	
	@FindBy(xpath="(//*[@id='thumbnail-text'])[1]")
	WebElement fileNameFieldText;
	
	@FindBy(xpath="//button[contains(text(), 'Upload')]")
	WebElement uploadButton;
	
	@FindBy(xpath="(//*[@id='thumbnail-text'])[2]")
	WebElement sizeFieldText;
	
	@FindBy(xpath="(//*[@id='thumbnail-text'])[3]")
	WebElement characterSetFieldText;
	
	@FindBy(xpath="(//*[@id='thumbnail-text'])[4]")
	WebElement targetCatalogFieldText;
	
	//@FindBy(xpath="(//*[@id='thumbnail-text'])[3]/ibm-dropdown//button[@class='bx--list-box__field']")
	@FindBy(xpath="(//*[@id='thumbnail-text'])[3]//following-sibling::div/ibm-dropdown//button[@class='bx--list-box__field']")
	WebElement characterSetDropDown;
		
	@FindBy(xpath="//ibm-dropdown-list/ul/li")
	List<WebElement> dropDownItems;
	
	@FindBy(xpath="(//*[@id='thumbnail-text'])[4]//following-sibling::div/ibm-dropdown//button[@class='bx--list-box__field']")
	WebElement targetCatalogDropDown;
	
	@FindBy(xpath="//ibm-file[@class='bx--file__selected-file']")
	WebElement uploadedFileElement;
	
	
	public String getCatalogUploadPageHeading() {
		return TestUtil.getElementText(pageHeading);
	}
	
	public boolean isSaveButtonDisplayed() {
		return TestUtil.isElementDisplayed(save);
	}
	
	public boolean isCloseButtonDisplayed() {
		return TestUtil.isElementDisplayed(close);
			
	}
	
	public void clickOnSaveButton() {
		TestUtil.clickOnElement(save);
	}
	
	public void clickOnCancelButton() {
		TestUtil.clickOnElement(close);
	}
	
	public void clickOnMainPropertiesAccordion() {
		TestUtil.clickOnElement(mainPropertiesAccordion);
	}
	
	public String getFileNameFieldText() {
		return TestUtil.getElementText(fileNameFieldText);
	}
	
	public String getSizeFieldText() {
		return TestUtil.getElementText(sizeFieldText);
	}
	public String getCharacterSetFieldText() {
		return TestUtil.getElementText(characterSetFieldText);
	}
	
	public String getTargetCatalogFieldText() {
		return TestUtil.getElementText(targetCatalogFieldText);
	}
	
	public void clickOnUploadButton() {
		TestUtil.clickOnElement(uploadButton);
	}
	public void clickOnCharacterSetDropdown() {
		TestUtil.clickOnElement(characterSetDropDown);
	}
	public void clickOnTargetCatalogDropdown(){
		TestUtil.clickOnElement(targetCatalogDropDown);
	}
	
	public void selectCharacterSetfromDropDownByName(String characterSet) {
		clickOnCharacterSetDropdown();
		TestUtil.selectItemFromAngularDropDown(dropDownItems, characterSet);
	}
	
	public void selectTargetCatalogfromDropDownByName(String targetCatalog) {
		clickOnTargetCatalogDropdown();
		TestUtil.selectItemFromAngularDropDown(dropDownItems, targetCatalog);

	}
	
	public void uploadCatalogFile(String filepath) throws AWTException {
		TestUtil.uploadFileFromLocalDrive(filepath);
	}
	
	public boolean isUploadedFileElementExists() {
		return TestUtil.isElementDisplayed(uploadedFileElement);
	}
	

}
