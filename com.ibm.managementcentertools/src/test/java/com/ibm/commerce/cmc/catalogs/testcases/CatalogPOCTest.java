package com.ibm.commerce.cmc.catalogs.testcases;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

//import junit.framework.Assert;

public class CatalogPOCTest {
	WebDriver driver;
	WebElement manageCategory;
	WebElement sengineOptimization;
	WebElement associatedAssets;
	WebElement content;
	WebElement references;
	JavascriptExecutor js; 
	
	@Test(priority=1)
	public void loadDriver() {
		System.setProperty("webdriver.chrome.driver", "WebDriverServer/chromedriver");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://localhost:7443/catalogs");
		String pageTitle = driver.getTitle();
		System.out.println("Page Title is: "+pageTitle );
		WebElement file = driver.findElement(By.xpath("//*[text()='File']"));
		file.click();
		/* WebElement filedd = driver.findElement(By.xpath("//div[@class='dropdown-menu show']"));
		Actions a = new Actions(driver);
		a.moveToElement(filedd).build().perform(); */
		
		js = (JavascriptExecutor) driver;
		//WebElement newelement = driver.findElement(By.xpath("//*[text()='New']"));
		WebElement newelement = driver.findElement(By.xpath("//a[@class='dropdown-toggle dropdown-item tabnextx bx--link']"));
		
		//a.moveToElement(newelement).build().perform();;
		newelement.click();
		WebElement newmasterCategory = driver.findElement(By.linkText("New Master Category"));
		String newmasCategory = newmasterCategory.getText();
		
		System.out.println("New Category Title is: "+newmasCategory);
		newmasterCategory.click();
	
		
		
		WebElement newMasterPageHeader = driver.findElement(By.xpath("//span[@class='mstrCtgry']"));
		System.out.println("New Master Page Header is: "+newMasterPageHeader.getText());
		
		/**
		 * Verify Save and Preview button Exists or not
		 */
		
		WebElement saveandPreview = driver.findElement(By.xpath("//button[text()='Save and Preview']"));
		Assert.assertTrue(saveandPreview.isDisplayed());
		
		/**
		 * Verify Save button Exists or not
		 */
		
		WebElement save = driver.findElement(By.xpath("//button[text()='Save']"));
		Assert.assertTrue(save.isDisplayed());
		
		
		/**
		 * Verify Close button Exists or not
		 */
		
		WebElement close = driver.findElement(By.xpath("//button[text()='Close']"));
		Assert.assertTrue(close.isDisplayed());
		
		
		/**
		 * Verify Manage Category Tab Exists or not
		 */
		
	// manageCategory = driver.findElement(By.linkText("Manage Category"));
		
		manageCategory = driver.findElement(By.id("n-tab-0-header"));
		Assert.assertTrue(manageCategory.isDisplayed());
		
		/**
		 * Verify Search Engine Optimization Tab Exists or not
		 */
		
		 //sengineOptimization = driver.findElement(By.linkText("Search Engine Optimization"));
		sengineOptimization = driver.findElement(By.id("n-tab-1-header"));
		Assert.assertTrue(sengineOptimization.isDisplayed());
		
		/**
		 * Verify Associated Assets Tab Exists or not
		 */
		
		 associatedAssets = driver.findElement(By.id("n-tab-2-header"));
		Assert.assertTrue(associatedAssets.isDisplayed());
		
		
		/**
		 * Verify Content Tab Exists or not
		 */
		//*[@id="n-tab-2-header"]
		 content = driver.findElement(By.id("n-tab-3-header"));
		Assert.assertTrue(content.isDisplayed());
		
		
		/**
		 * Verify References Tab Exists or not
		 */
		
		 references = driver.findElement(By.id("n-tab-4-header"));
		Assert.assertTrue(references.isDisplayed());
		
		
		
		
		
	}
	
	@Test(priority=2)
	public void verifyManageCategory() throws InterruptedException {
		manageCategory.click();
		
		/**
		 * Verify Object Properties accordion  Exists or not
		 */
		WebElement objectProperties = driver.findElement(By.xpath("//p[text()='Object Properties']"));
		
		//System.out.println("Text is: "+objectProperties.getText());
		Assert.assertTrue(objectProperties.isDisplayed());
		
		
		/**
		 * Verify General Category Information accordion  Exists or not
		 */
		WebElement generalCategoryInformation = driver.findElement(By.xpath("//p[text()='General Category Information']"));
		
		
		Assert.assertTrue(generalCategoryInformation.isDisplayed());
		
		
		/**
		 * Verify Display accordion  Exists or not
		 */
		WebElement display = driver.findElement(By.xpath("//p[text()='Display']"));
		
		
		Assert.assertTrue(display.isDisplayed());
		
		/**
		 * Verify Expected   details present under Object Properties Accordion
		 */
		
		objectProperties.click();
		Thread.sleep(3000);
		// //*[@id="accordion-item-3"]
		//*[@id="accordion-item-3"]/div/div[1]
		//ul[@class='bx--accordion']/ibm-accordion-item[1]/div/div/div[1]
		//here the accordion id is random id
		WebElement associatedStore = driver.findElement(By.xpath("//ul[@class='bx--accordion']/ibm-accordion-item[1]/div/div/div[1]"));
		String associatedStoreText = associatedStore.getText();
		System.out.println("Associated Store Text is: "+associatedStoreText);
		Assert.assertEquals(associatedStoreText, "Associated Store");//-- This Store Name can be passed from properties file
		
		WebElement associatedStoreDisplayed = driver.findElement(By.xpath("//ul[@class='bx--accordion']/ibm-accordion-item[1]/div/div/div[2]"));
		Assert.assertEquals(associatedStoreDisplayed.getText(), "AuroraESite");//-- This store can be get from properties file
		objectProperties.click();
		
		
		/**
		 * Verify Expected   details present under General Category Information Accordion
		 */
		//*[@id="accordion-item-1"]/div[1]/div
		//*[@id="n-tab-0"]/div/ibm-accordion/ul/ibm-accordion-item[1]/button/p
		
		generalCategoryInformation.click();
		WebElement uniqueIdCodeFieldName = driver.findElement(By.xpath("//ul[@class='bx--accordion']/ibm-accordion-item[2]/div/div[1]/div"));
		//*[@id="accordion-item-1"]/div[1]/div
		Assert.assertEquals(uniqueIdCodeFieldName.getText(), "Unique ID");// It supposed to be Unique ID Code, but currently it has been wrapped in two lines
		WebElement uniqueIdCodeInputField = driver.findElement(By.xpath("//ul[@class='bx--accordion']/ibm-accordion-item[2]/div/div[2]/input"));
		uniqueIdCodeInputField.sendKeys("UQ_123_3456");
		WebElement nameUSFieldName = driver.findElement(By.xpath("//ul[@class='bx--accordion']/ibm-accordion-item[2]/div/div[3]/div/span"));
		
		Assert.assertEquals(nameUSFieldName.getText(), "Name (United State English)");
		WebElement nameUSInputField = driver.findElement(By.xpath("//ul[@class='bx--accordion']/ibm-accordion-item[2]/div/div[3]/input"));
		nameUSInputField.sendKeys("English US Description");
		
		WebElement shortDescriptionFieldName = driver.findElement(By.xpath("//ul[@class='bx--accordion']/ibm-accordion-item[2]/div/div[4]/div/span"));
		Assert.assertEquals(shortDescriptionFieldName.getText(), "Short description (United State English)");
		WebElement shortDescriptionInputField = driver.findElement(By.xpath("//ul[@class='bx--accordion']/ibm-accordion-item[2]/div/div[4]/input"));
		shortDescriptionInputField.sendKeys("shortDescriptionInputField");
		generalCategoryInformation.click();
		
		
		/**
		 * Verify Expected   details present under Display Accordion
		 */
		display.click();
		WebElement displayToCustomerFieldName = driver.findElement(By.xpath("//ul[@class='bx--accordion']/ibm-accordion-item[3]/div/div[1]/div"));
		Assert.assertEquals(displayToCustomerFieldName.getText(), "Display to customer (United State English)");
		WebElement displayToCustomerCheckbox = driver.findElement(By.xpath("//ul[@class='bx--accordion']/ibm-accordion-item[3]/div/div[1]/ibm-checkbox/label"));
		displayToCustomerCheckbox.click();
		
		WebElement thumbnailText = driver.findElement(By.xpath("//ul[@class='bx--accordion']/ibm-accordion-item[3]/div/div[2]/div"));
		Assert.assertEquals(thumbnailText.getText(), "Thumbnail (United State English)");
		WebElement thumbnailInputField = driver.findElement(By.xpath("//ul[@class='bx--accordion']/ibm-accordion-item[3]/div/div[2]/input"));
		thumbnailInputField.sendKeys("Thumbnailtext");
		
		WebElement fullImageText = driver.findElement(By.xpath("//ul[@class='bx--accordion']/ibm-accordion-item[3]/div/div[3]/div"));
		Assert.assertEquals(fullImageText.getText(), "Full image (United State English)");
		WebElement fullImageInputField = driver.findElement(By.xpath("//ul[@class='bx--accordion']/ibm-accordion-item[3]/div/div[3]/input"));
		fullImageInputField.sendKeys("FullImage Input Text");


		
	}
	
	@Test(priority=3, enabled=true)
	public void verifySearchEngineOptimization() {
	 sengineOptimization.click();
	 
	//*[@id="n-tab-1"]/div/div/div[1]/div
	
	//*[@id="n-tab-0"]/div/ibm-accordion/ul/ibm-accordion-item[1]/button/p
	 
	 WebElement urlKeywordText = driver.findElement(By.xpath("//*[@id='n-tab-1']/div/div/div[1]/div"));
	 Assert.assertEquals(urlKeywordText.getText(), "URL keyword (United State English)");
	 WebElement urlKeywordInputField = driver.findElement(By.xpath("//*[@id='n-tab-1']/div/div/div[1]/input"));
	 urlKeywordInputField.sendKeys("URL Keyword...input");
	 
	//*[@id="n-tab-1"]/div/div/div[2]/div[1]
	 
	 WebElement pageTitleText = driver.findElement(By.xpath("//*[@id='n-tab-1']/div/div/div[2]/div[1]"));
	 Assert.assertEquals(pageTitleText.getText(), "Page title (United State English)");
	 
	//*[@id='n-tab-1']/div/div/div[2]/div[2]/div[1]/div/ibm-radio/label/span
	//*[@id="n-tab-1"]/div/div/div[2]/div[2]/div[2]/div/ibm-radio/label/span
	//*[@id="n-tab-1"]/div/div/div[2]/div[2]/div[3]/input
	 
	 SoftAssert sa = new SoftAssert();
	 
	 WebElement pageTitleUseDefaultText = driver.findElement(By.xpath("//*[@id='n-tab-1']/div/div/div[2]/div[2]/div[1]/div/ibm-radio/label"));
	 Assert.assertEquals(pageTitleUseDefaultText.getText(), "Use default");
	
	 
	 //Use Default should be selected by default
	 WebElement pageTitleUseDefaultRadio = driver.findElement(By.xpath("//*[@id='n-tab-1']/div/div/div[2]/div[2]/div[1]/div/ibm-radio/label/span"));
	 sa.assertTrue(pageTitleUseDefaultRadio.isSelected());
	 
	 WebElement pageTitleOverrideDefaultText = driver.findElement(By.xpath("//*[@id='n-tab-1']/div/div/div[2]/div[2]/div[2]/div/ibm-radio/label"));
	 Assert.assertEquals(pageTitleOverrideDefaultText.getText(), "Override default");
	 
	 //Override Default should be unselected by default
	 WebElement pageTitleOverrideDefaultRadio = driver.findElement(By.xpath("//*[@id='n-tab-1']/div/div/div[2]/div[2]/div[2]/div/ibm-radio/label/span"));
	sa.assertFalse(pageTitleOverrideDefaultRadio.isSelected());
	 
	 WebElement pageTitleOverrideDefaultInputField = driver.findElement(By.xpath("//*[@id='n-tab-1']/div/div/div[2]/div[2]/div[3]/input"));
	 pageTitleOverrideDefaultInputField.click();
	 //upon click on Input field, Override Default should be selected automatically
	 sa.assertTrue(pageTitleOverrideDefaultRadio.isSelected());
	 pageTitleOverrideDefaultInputField.sendKeys("Page Title Override Default Text");
	 
	 
	 //sa.assertAll();
	 
	//*[@id='n-tab-1']/div/div/div[3]/div[1]
	 
	 WebElement metaDescriptionText = driver.findElement(By.xpath("//*[@id='n-tab-1']/div/div/div[3]/div[1]"));
	 Assert.assertEquals(metaDescriptionText.getText(), "Meta description (United State English)");
	//*[@id='n-tab-1']/div/div/div[3]/div[2]/div[1]/div/ibm-radio/label
	 WebElement metaDescriptionUseDefaultText = driver.findElement(By.xpath("//*[@id='n-tab-1']/div/div/div[3]/div[2]/div[1]/div/ibm-radio/label"));
	 Assert.assertEquals(metaDescriptionUseDefaultText.getText(), "Use default");
	 
	//*[@id='n-tab-1']/div/div/div[3]/div[2]/div[1]/div/ibm-radio/label/span
	 
	//Use Default should be selected by default
		 WebElement metaDescriptionUseDefaultRadio = driver.findElement(By.xpath("//*[@id='n-tab-1']/div/div/div[3]/div[2]/div[1]/div/ibm-radio/label/span"));
		 sa.assertTrue(metaDescriptionUseDefaultRadio.isSelected());
		//*[@id="n-tab-1"]/div/div/div[3]/div[2]/div[2]/div/ibm-radio/label
		 
		 WebElement metaDescriptionOverrideDefaultText = driver.findElement(By.xpath("//*[@id='n-tab-1']/div/div/div[3]/div[2]/div[2]/div/ibm-radio/label"));
		 Assert.assertEquals(metaDescriptionOverrideDefaultText.getText(), "Override default");
		 
		 //Override Default should be unselected by default
		 WebElement metaDescriptionOverrideDefaultRadio = driver.findElement(By.xpath("//*[@id='n-tab-1']/div/div/div[3]/div[2]/div[2]/div/ibm-radio/label/span"));
		 sa.assertFalse(pageTitleOverrideDefaultRadio.isSelected());
		//*[@id="n-tab-1"]/div/div/div[3]/div[2]/div[3]/textarea
		 
		 WebElement metaDescriptionOverrideDefaultInputField = driver.findElement(By.xpath("//*[@id='n-tab-1']/div/div/div[3]/div[2]/div[3]/textarea"));
		 metaDescriptionOverrideDefaultInputField.click();
		 //upon click on Input field, Override Default should be selected automatically
		 sa.assertTrue(metaDescriptionOverrideDefaultRadio.isSelected());
		 metaDescriptionOverrideDefaultInputField.sendKeys("Meta Description Override Default Text");
		 
		 
		//*[@id="n-tab-1"]/div/div/div[4]/div[1]
		 WebElement imageAltText = driver.findElement(By.xpath("//*[@id='n-tab-1']/div/div/div[4]/div[1]"));
		 Assert.assertEquals(imageAltText.getText(), "Image alt text (United State English)");
		//*[@id='n-tab-1']/div/div/div[4]/div[2]/div[1]/div/ibm-radio/label
		//*[@id="n-tab-1"]/div/div/div[4]/div[2]/div[1]/div/ibm-radio/label
		 WebElement imageAltTextUseDefaultText = driver.findElement(By.xpath("//*[@id='n-tab-1']/div/div/div[4]/div[2]/div[1]/div/ibm-radio/label"));
		 Assert.assertEquals(imageAltTextUseDefaultText.getText(), "Use default");
		 
		//*[@id='n-tab-1']/div/div/div[3]/div[2]/div[1]/div/ibm-radio/label/span
		 
		//Use Default should be selected by default
			 WebElement imageAltTextUseDefaultRadio = driver.findElement(By.xpath("//*[@id='n-tab-1']/div/div/div[4]/div[2]/div[1]/div/ibm-radio/label/span"));
			 sa.assertTrue(imageAltTextUseDefaultRadio.isSelected());
			//*[@id="n-tab-1"]/div/div/div[3]/div[2]/div[2]/div/ibm-radio/label
			 
			 WebElement imageAltTextOverrideDefaultText = driver.findElement(By.xpath("//*[@id='n-tab-1']/div/div/div[4]/div[2]/div[2]/div/ibm-radio/label"));
			 Assert.assertEquals(imageAltTextOverrideDefaultText.getText(), "Override default");
			 
			 //Override Default should be unselected by default
			 WebElement imageAltTextOverrideDefaultRadio = driver.findElement(By.xpath("//*[@id='n-tab-1']/div/div/div[4]/div[2]/div[2]/div/ibm-radio/label/span"));
			 sa.assertFalse(imageAltTextOverrideDefaultRadio.isSelected());
			//*[@id="n-tab-1"]/div/div/div[3]/div[2]/div[3]/textarea
			 
			 WebElement imageAltTextOverrideDefaultInputField = driver.findElement(By.xpath("//*[@id='n-tab-1']/div/div/div[4]/div[2]/div[3]/input"));
			 imageAltTextOverrideDefaultInputField.click();
			 //upon click on Input field, Override Default should be selected automatically
			 sa.assertTrue(imageAltTextOverrideDefaultRadio.isSelected());
			 imageAltTextOverrideDefaultInputField.sendKeys("Image Alt Text Override Default Text");
	 
		 sa.assertAll();
		 //js.executeScript("arguments[0].scrollIntoView();",associatedAssets );
		 
	 
	}
	
	@Test(priority=4)
	public void verifyAssociatedAssets() {
		js.executeScript("window.scrollBy(0,-2000)");
		associatedAssets.click();
		//*[@id='n-tab-2']/div
		WebElement associatedAssetsFieldText = driver.findElement(By.xpath("//*[@id='n-tab-2']/div"));
		System.out.println("Associated Assets Page Text is: "+associatedAssetsFieldText);
		
		Assert.assertEquals(associatedAssetsFieldText.getText(), "Associated assets");
	}
	
	@Test(priority=5)
	public void verifyContent() {
		content.click();
		//*[@id='n-tab-2']/div
		//todo
	}
	
	@Test(priority=6)
	public void verifyReferences() {
		references.click();
		//*[@id='n-tab-2']/div
		//todo
	}
	
	
	/*@AfterTest
	public void tearDown() {
		driver.quit();
	}*/
	

}
