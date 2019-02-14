package com.ibm.commerce.cmc.base;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.SimpleDateFormat;

import java.util.Date;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.apache.commons.io.FileUtils;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


import com.ibm.commerce.cmc.ui.utils.TestUtil;

public class TestBase {
	public static WebDriver driver;
	public static Properties p;
	
	public TestBase(){
		try {
			p = new Properties();
			File f = new File("./testdata/Catalogs.properties");
			FileInputStream fis = new FileInputStream(f);
			p.load(fis);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	
	public void initialization() {
		String browserName = p.getProperty("browser");
		
		if (browserName.equalsIgnoreCase("chrome")){
			System.setProperty("webdriver.chrome.driver", "WebDriverServer/chromedriver");
			driver = new ChromeDriver();
		} else if(browserName.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver", "WebDriverServer/geckodriver");	
			driver = new FirefoxDriver();
		} else {
			System.setProperty("webdriver.chrome.driver", "WebDriverServer/chromedriver");
			driver = new ChromeDriver();
		}
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
		driver.get(p.getProperty("url"));
			
	}
	
	
	public void getData() {
		System.out.println("URL value from Prop file is: "+p.getProperty("url"));
		initialization();
	}
	
	public void captureScreenshot(String result) throws Exception {
		//String fileName = new SimpleDateFormat("yyyyMMddHHmm'.txt'").format(new Date());
		String fileName = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
		//Calendar.getInstance().getTime();
		long d = System.currentTimeMillis();

		TakesScreenshot ts = (TakesScreenshot)driver;
		File src = ts.getScreenshotAs(OutputType.FILE);
		File dest = new File("screenshots/"+"screenshot_"+result+"_"+fileName+".jpg");
		FileUtils.copyFile(src,dest);
		
		
		/*
		TakesScreenshot ts1= (TakesScreenshot)driver;
		File src1 = ts1.getScreenshotAs(OutputType.FILE);
		File dest1 = new File("ss/file.jpg");
		FileUtils.copyFile(src1, dest1);
		String fname = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());*/
	}

}
