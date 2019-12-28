package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class AccountStepDefination {

	
    WebDriver driver;
	
	@Given("^open browser and send url$")
	public void open_browser_and_send_url() throws InterruptedException  {
		System.setProperty("webdriver.chrome.driver","E:\\selenium\\chromedriver.exe");
		 driver = new ChromeDriver();
		 driver.get("https://accounts.google.com/");
		 Thread.sleep(5000);
	    
	}
	 @When("^title of login page is Gmail login")
		public void title_of_login_page_is_Gmail_login()  {
		 String title = driver.getTitle();
		 System.out.println(title);
	
		}

	@Then("^user clicks on Create account button$")
	public void user_clicks_on_Create_account_button() throws InterruptedException  {
	    	   driver.findElement(By.id("ow252")).click();
	    	   Thread.sleep(5000);
	    	   driver.findElement(By.id("initialView")).click();
	    	   Thread.sleep(5000);
	}
	 @And("^user enters \"([^\"]*)\" and \"([^\"]*)\"and \"([^\"]*)\" and \"([^\"]*)\"and \"([^\"]*)\"$")
	
	public void user_enters_and_and_and_and_and_(String firstName, String lastName,String username,String Passwd,String ConfirmPasswd) throws InterruptedException  {
	   driver.findElement(By.name("firstName")).sendKeys(firstName);
	   Thread.sleep(2000);
	   driver.findElement(By.name("lastName")).sendKeys(lastName);
	   Thread.sleep(2000);
	   driver.findElement(By.name("username")).sendKeys(username);
	   Thread.sleep(2000);
	   driver.findElement(By.name("Passwd")).sendKeys(Passwd);
	   Thread.sleep(2000);
	   driver.findElement(By.name("ConfirmPasswd")).sendKeys(ConfirmPasswd);
	   Thread.sleep(2000);

	}

	@Then("^user is click on next button.$")
	public void user_is_click_on_next_button() throws InterruptedException  {
		 driver.findElement(By.id("accountDetailsNext")).click();
		   Thread.sleep(2000);
	    
	}

}


