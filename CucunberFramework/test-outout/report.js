$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/New folder/CucunberFramework/features/account.feature");
formatter.feature({
  "line": 1,
  "name": "Create  Account of Gmail",
  "description": "",
  "id": "create--account-of-gmail",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Create new gmail account",
  "description": "",
  "id": "create--account-of-gmail;create-new-gmail-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open browser and send url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Gmail login",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on Create account button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\" and \"\u003cUserName\u003e\" and \"\u003cpassword\u003e\" and \"\u003cconfirmpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is click on next button.",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "create--account-of-gmail;create-new-gmail-account;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "UserName",
        "password",
        "confirmpassword"
      ],
      "line": 12,
      "id": "create--account-of-gmail;create-new-gmail-account;;1"
    },
    {
      "cells": [
        "Deoraj",
        "Bisen",
        "deoraj.95",
        "gsit1234",
        "gsit1234"
      ],
      "line": 13,
      "id": "create--account-of-gmail;create-new-gmail-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Create new gmail account",
  "description": "",
  "id": "create--account-of-gmail;create-new-gmail-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open browser and send url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Gmail login",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on Create account button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters \"Deoraj\" and \"Bisen\" and \"deoraj.95\" and \"gsit1234\" and \"gsit1234\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is click on next button.",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});