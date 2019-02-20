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
	
	@FindBy(xpath="//*[@class='ibmheaderdropdown']/ibm-dropdown//button[@class='bx--list-box__field']")
	WebElement searchItemDropDown;
	
	@FindBy(xpath="//*[@class='ibmheadersearch']//input[@class='bx--search-input']")
	WebElement searchItemInputField;
	
	//@FindBy(xpath="//*[@class='ibmheadersearch']//input[@class='bx--search-input']//following-sibling::svg")
	@FindBy(xpath="//*[@class='bx--search-magnifier']")
	WebElement searchMagnifier;
	
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
	
	
	
	
	
	
}
