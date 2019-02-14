package com.ibm.commerce.cmc.ui.catalogs.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.ibm.commerce.cmc.base.TestBase;
import com.ibm.commerce.cmc.ui.utils.TestUtil;

public class CatalogsHomePage2 extends TestBase {
	public CatalogsHomePage2() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//*[@class='catlogMargin']//strong")
	WebElement pageHeading;
	///html/body/app-root/div/ac-landing-page/div/div[2]/div/div[1]/h3/strong
	@FindBy(xpath="//*[text()='File']")
	WebElement file;
	
	@FindBy(xpath="//a[@class='dropdown-toggle dropdown-item tabnextx bx--link']")
	//@FindBy(xpath="//a[text()='New']")
	WebElement newElement;
	
	
	@FindBy(linkText="New Master Category")
	//@FindBy(linkText="Master Category")
	WebElement newMasterCategory;
	
	
	public String getPageHeading() {
		return pageHeading.getText();
	}
	
	public void clickElement(WebElement element)	{
		element.click();
		
	}
	
	public String getCatalogsPageTitle() {
		return driver.getTitle();
	}
	
	public NewMasterCategoryPage clickNewMasterCategoryFromFileMenu() {
		file.click();
		newElement.click();
		/*TestUtil.mouseHoverToElement(file);
		TestUtil.mouseHoverToElement(newElement);*/
		newMasterCategory.click();
		return new  NewMasterCategoryPage();
	}
	
	
}
