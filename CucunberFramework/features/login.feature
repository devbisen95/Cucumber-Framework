
Feature: Gmail Login Feature
  
Scenario Outline: Gmail Login Test Scenario

Given user is already on Login Page 
When title of login page is Gmail login
Then user enters "<username>" and "<password>" 
Then user clicks on login button
Then user is on home page
Then Close the browser

Examples:
	|        username       | password      |
  | devbisen95@gmail.com  | 8975615600    |
  | bisendev95@gmail.com  | Deva94223$    |
