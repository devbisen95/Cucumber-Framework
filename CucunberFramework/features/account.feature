Feature: Create  Account of Gmail

  Scenario Outline: Create new gmail account
    Given open browser and send url
    When title of login page is Gmail login
    Then user clicks on Create account button
    And user enters "<FirstName>" and "<LastName>" and "<UserName>" and "<password>" and "<confirmpassword>" 
    Then user is click on next button.

    Examples: 
      | FirstName | LastName | UserName | password | confirmpassword |
      | Deoraj    | Bisen    | deoraj   | gsit1234 | gsit1234        |
