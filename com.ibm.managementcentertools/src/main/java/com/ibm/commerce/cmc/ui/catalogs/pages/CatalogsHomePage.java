package com.ibm.commerce.cmc.ui.catalogs.pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.ibm.commerce.cmc.base.TestBase;
import com.ibm.commerce.cmc.ui.utils.TestUtil;

public class CatalogsHomePage extends TestBase {
	public CatalogsHomePage() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//*[@class='catlogMargin']//strong")
	WebElement pageHeading;
	
	@FindBy(xpath="//*[@id='ibmdropdownheader']/ibm-dropdown//button[@class='bx--list-box__field']")
	WebElement storeDropDown;
	//$x("//*[id='ibmdropdownheader']/ibm-dropdown//button[class='bx--list-box__field']")
	
	@FindBy(xpath="//ibm-dropdown-list/ul/li")
	List<WebElement> dropDownItems;
	
	@FindBy(xpath="")
	WebElement storeSelected;
	
	//*[@id="ibmdropdownheader"]/ibm-dropdown/div[1]/button/span
	
	
	@FindBy(xpath="//*[@class='ibmheaderdropdown']/ibm-dropdown//button[@class='bx--list-box__field']")
	WebElement searchItemDropDown;
	
	@FindBy(xpath="//*[@class='ibmheadersearch']//input[@class='bx--search-input']")
	WebElement searchItemInputField;
	
	//@FindBy(xpath="//*[@class='ibmheadersearch']//input[@class='bx--search-input']//following-sibling::svg")
	@FindBy(xpath="//*[@class='bx--search-magnifier']")
	WebElement searchMagnifier;
	
	//html/body/app-root/div/app-stockholm/app-ui-shell/div/div[11]/ibm-dropdown/div[1]/button/span
	
	//html/body/div/div/ibm-dropdown-list/ul/li[1]
	///html/body/app-root/div/ac-landing-page/div/div[2]/div/div[1]/h3/strong
	@FindBy(xpath="//*[text()='File']")
	WebElement file;
	
	//@FindBy(xpath="//a[@class='dropdown-toggle dropdown-item tabnextx bx--link']")
	@FindBy(xpath="//a[text()='New']")
	WebElement newElement;
	
	
	//@FindBy(linkText="New Master Category")
	@FindBy(linkText="Master Category")
	WebElement newMasterCategory;
	
	//html/body/app-root/div/app-new-catalog-upload/app-ui-shell/div/div[3]/button/ibm-icon-add-alt32/svg
	@FindBy(xpath="//button[@class='dropdownnav']")
	WebElement plus;
	//html/body/app-root/div/ac-landing-page/app-ui-shell/div/div[3]/button/ibm-icon-add-alt32/svg
	//html/body/app-root/div/app-extended-sites/app-ui-shell/div/div[3]/button/ibm-icon-add-alt32/svg
	
	@FindBy(linkText="Catalog Upload")
	WebElement catalogUpload;
	
	public String getPageHeading() {
		return pageHeading.getText();
	}
	
	public void clickOnStoreDropdown()	{
		TestUtil.clickOnElement(storeDropDown);
		
	}
	
	public String getCatalogsPageTitle() {
		return driver.getTitle();
	}
	
	public void selectStoreByName(String store) {
		TestUtil.selectItemFromDropDownByVisibleText(storeDropDown, store);
	}
	
	public String getSelectedStore() {
		return TestUtil.getElementText(storeDropDown);
	}
	
	public boolean selectStorefromAngularDropDownByName(String store) {
		return TestUtil.isItemSelectedFromAngularDropDown(dropDownItems, store);
	}
	
	public void clickOnSearchItemDropdown()	{
		TestUtil.clickOnElement(searchItemDropDown);
		
	}
	public void searchForItemOnCatalogsPage(String searchItem, String searchText) {
		TestUtil.clickOnElement(searchItemDropDown);
		TestUtil.selectItemFromAngularDropDown(dropDownItems, searchItem);
		TestUtil.enterText(searchItemInputField, searchText);
		TestUtil.clickOnElement(searchMagnifier);
	}
	
	public NewMasterCategoryPage clickNewMasterCategoryFromFileMenu() {
		/*file.click();
		newElement.click();*/
		TestUtil.mouseHoverToElement(file);
		TestUtil.mouseHoverToElement(newElement);
		newMasterCategory.click();
		return new  NewMasterCategoryPage();
	}
	
	public CatalogUploadPage clickCatalogUploadFromPlus() {
		TestUtil.mouseHoverToElement(plus);
		//TestUtil.mouseHoverToElement(catalogUpload);
		TestUtil.clickOnElement(catalogUpload);
		
		return new CatalogUploadPage();
		
	}
	
	
	
	
	
	
}
