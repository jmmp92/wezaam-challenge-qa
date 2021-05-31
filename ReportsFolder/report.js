$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Withdrawals/WithdrawalsAmount.feature");
formatter.feature({
  "name": "Withdrawal Amount",
  "description": "    As a user\n    I want to specify different amounts\n    In order to make a withdrawals",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Withdrawal with correct amount",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with \u003cmethodId\u003e and \u003camount\u003e and \u003cuserId\u003e and future date",
  "keyword": "When "
});
formatter.step({
  "name": "I expect response should have a status \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "withdrawal status \"PENDING\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "methodId",
        "amount",
        "userId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "3",
        "100",
        "2",
        "200"
      ]
    },
    {
      "cells": [
        "3",
        "200",
        "2",
        "200"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Withdrawal with correct amount",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with 3 and 100 and 2 and future date",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.withdrawFuture(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 200",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "withdrawal status \"PENDING\"",
  "keyword": "And "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusWithdrawal(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Withdrawal with correct amount",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with 3 and 200 and 2 and future date",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.withdrawFuture(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 200",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "withdrawal status \"PENDING\"",
  "keyword": "And "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusWithdrawal(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Withdrawal with incorrect amount",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with \u003cmethodId\u003e and \u003camount\u003e and \u003cuserId\u003e and future date",
  "keyword": "When "
});
formatter.step({
  "name": "I expect response should have a status \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "methodId",
        "amount",
        "userId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "3",
        "0",
        "2",
        "400"
      ]
    },
    {
      "cells": [
        "3",
        "-2",
        "2",
        "400"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Withdrawal with incorrect amount",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with 3 and 0 and 2 and future date",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.withdrawFuture(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 400",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Expected status code is \u0027400\u0027 but actual status code is \u0027200\u0027\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyStatusCode(VerifyResponseStatusCodeKeyword.groovy:52)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.access$1(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.doCall(VerifyResponseStatusCodeKeyword.groovy:42)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.call(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyResponseStatusCode(VerifyResponseStatusCodeKeyword.groovy:37)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.execute(VerifyResponseStatusCodeKeyword.groovy:32)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords.verifyResponseStatusCode(WSBuiltInKeywords.groovy:344)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords$verifyResponseStatusCode$0.call(Unknown Source)\r\n\tat com.katalon.WithdrawalStep.checkStatusCode(WithdrawalStep.groovy:167)\r\n\tat ✽.I expect response should have a status 400(Include/features/Withdrawals/WithdrawalsAmount.feature:23)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Withdrawal with incorrect amount",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with 3 and -2 and 2 and future date",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.withdrawFuture(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 400",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Expected status code is \u0027400\u0027 but actual status code is \u0027200\u0027\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyStatusCode(VerifyResponseStatusCodeKeyword.groovy:52)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.access$1(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.doCall(VerifyResponseStatusCodeKeyword.groovy:42)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.call(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyResponseStatusCode(VerifyResponseStatusCodeKeyword.groovy:37)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.execute(VerifyResponseStatusCodeKeyword.groovy:32)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords.verifyResponseStatusCode(WSBuiltInKeywords.groovy:344)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords$verifyResponseStatusCode$0.call(Unknown Source)\r\n\tat com.katalon.WithdrawalStep.checkStatusCode(WithdrawalStep.groovy:167)\r\n\tat ✽.I expect response should have a status 400(Include/features/Withdrawals/WithdrawalsAmount.feature:23)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Withdrawal with more than maxWithdrawalAmount",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with \u003cmethodId\u003e and \u003camount\u003e and \u003cuserId\u003e and future date",
  "keyword": "When "
});
formatter.step({
  "name": "I expect response should have a status \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "methodId",
        "amount",
        "userId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "3",
        "300",
        "2",
        "400"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Withdrawal with more than maxWithdrawalAmount",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with 3 and 300 and 2 and future date",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.withdrawFuture(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 400",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Expected status code is \u0027400\u0027 but actual status code is \u0027200\u0027\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyStatusCode(VerifyResponseStatusCodeKeyword.groovy:52)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.access$1(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.doCall(VerifyResponseStatusCodeKeyword.groovy:42)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.call(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyResponseStatusCode(VerifyResponseStatusCodeKeyword.groovy:37)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.execute(VerifyResponseStatusCodeKeyword.groovy:32)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords.verifyResponseStatusCode(WSBuiltInKeywords.groovy:344)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords$verifyResponseStatusCode$0.call(Unknown Source)\r\n\tat com.katalon.WithdrawalStep.checkStatusCode(WithdrawalStep.groovy:167)\r\n\tat ✽.I expect response should have a status 400(Include/features/Withdrawals/WithdrawalsAmount.feature:32)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Two withdrawals with sum amount less or equal than maxWithdrawalAmount",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do two withdrawals with \u003cmethodId\u003e and \u003camount\u003e and \u003cuserId\u003e and \u003cmethodId2\u003e and \u003camount2\u003e  and future date",
  "keyword": "When "
});
formatter.step({
  "name": "I expect response should have a status \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "methodId",
        "amount",
        "methodId2",
        "amount2",
        "userId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "3",
        "50",
        "3",
        "100",
        "2",
        "200"
      ]
    },
    {
      "cells": [
        "3",
        "100",
        "3",
        "100",
        "2",
        "200"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Two withdrawals with sum amount less or equal than maxWithdrawalAmount",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do two withdrawals with 3 and 50 and 2 and 3 and 100  and future date",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.twoWithdrawFuture(int,int,int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 200",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Two withdrawals with sum amount less or equal than maxWithdrawalAmount",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do two withdrawals with 3 and 100 and 2 and 3 and 100  and future date",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.twoWithdrawFuture(int,int,int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 200",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Two withdrawals with sum amount more than maxWithdrawalAmount",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do two withdrawals with \u003cmethodId\u003e and \u003camount\u003e and \u003cuserId\u003e and \u003cmethodId2\u003e and \u003camount2\u003e  and future date",
  "keyword": "When "
});
formatter.step({
  "name": "I expect response should have a status \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "methodId",
        "amount",
        "methodId2",
        "amount2",
        "userId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "3",
        "50",
        "3",
        "200",
        "2",
        "400"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Two withdrawals with sum amount more than maxWithdrawalAmount",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do two withdrawals with 3 and 50 and 2 and 3 and 200  and future date",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.twoWithdrawFuture(int,int,int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 400",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Expected status code is \u0027400\u0027 but actual status code is \u0027200\u0027\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyStatusCode(VerifyResponseStatusCodeKeyword.groovy:52)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.access$1(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.doCall(VerifyResponseStatusCodeKeyword.groovy:42)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.call(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyResponseStatusCode(VerifyResponseStatusCodeKeyword.groovy:37)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.execute(VerifyResponseStatusCodeKeyword.groovy:32)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords.verifyResponseStatusCode(WSBuiltInKeywords.groovy:344)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords$verifyResponseStatusCode$0.call(Unknown Source)\r\n\tat com.katalon.WithdrawalStep.checkStatusCode(WithdrawalStep.groovy:167)\r\n\tat ✽.I expect response should have a status 400(Include/features/Withdrawals/WithdrawalsAmount.feature:49)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Two withdrawals with sum amount less or equal than maxWithdrawalAmount and different dates",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do two withdrawals with \u003cmethodId\u003e and \u003camount\u003e and \u003cuserId\u003e and \u003cmethodId2\u003e and \u003camount2\u003e  and different dates",
  "keyword": "When "
});
formatter.step({
  "name": "I expect response should have a status \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "methodId",
        "amount",
        "methodId2",
        "amount2",
        "userId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "3",
        "50",
        "3",
        "100",
        "2",
        "200"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Two withdrawals with sum amount less or equal than maxWithdrawalAmount and different dates",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do two withdrawals with 3 and 50 and 2 and 3 and 100  and different dates",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.twoWithdrawDifferentDates(int,int,int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 200",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Two withdrawals with sum amount more than maxWithdrawalAmount and different dates",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do two withdrawals with \u003cmethodId\u003e and \u003camount\u003e and \u003cuserId\u003e and \u003cmethodId2\u003e and \u003camount2\u003e  and different dates",
  "keyword": "When "
});
formatter.step({
  "name": "I expect response should have a status \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "methodId",
        "amount",
        "methodId2",
        "amount2",
        "userId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "3",
        "150",
        "3",
        "100",
        "2",
        "400"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Two withdrawals with sum amount more than maxWithdrawalAmount and different dates",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do two withdrawals with 3 and 150 and 2 and 3 and 100  and different dates",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.twoWithdrawDifferentDates(int,int,int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 400",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Expected status code is \u0027400\u0027 but actual status code is \u0027200\u0027\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyStatusCode(VerifyResponseStatusCodeKeyword.groovy:52)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.access$1(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.doCall(VerifyResponseStatusCodeKeyword.groovy:42)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.call(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyResponseStatusCode(VerifyResponseStatusCodeKeyword.groovy:37)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.execute(VerifyResponseStatusCodeKeyword.groovy:32)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords.verifyResponseStatusCode(WSBuiltInKeywords.groovy:344)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords$verifyResponseStatusCode$0.call(Unknown Source)\r\n\tat com.katalon.WithdrawalStep.checkStatusCode(WithdrawalStep.groovy:167)\r\n\tat ✽.I expect response should have a status 400(Include/features/Withdrawals/WithdrawalsAmount.feature:65)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "More withdrawals than maxWithdrawals",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do three withdrawals with \u003cmethodId\u003e and \u003camount\u003e and \u003cuserId\u003e and \u003cmethodId2\u003e and \u003camount2\u003e and \u003cmethodId3\u003e and \u003camount3\u003e and future dates",
  "keyword": "When "
});
formatter.step({
  "name": "I expect response should have a status \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "methodId",
        "amount",
        "methodId2",
        "amount2",
        "methodId3",
        "amount3",
        "userId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "3",
        "50",
        "3",
        "100",
        "3",
        "50",
        "2",
        "400"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "More withdrawals than maxWithdrawals",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do three withdrawals with 3 and 50 and 2 and 3 and 100 and 3 and 50 and future dates",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.twoWithdrawFuture(int,int,int,int,int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 400",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Expected status code is \u0027400\u0027 but actual status code is \u0027200\u0027\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyStatusCode(VerifyResponseStatusCodeKeyword.groovy:52)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.access$1(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.doCall(VerifyResponseStatusCodeKeyword.groovy:42)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.call(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyResponseStatusCode(VerifyResponseStatusCodeKeyword.groovy:37)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.execute(VerifyResponseStatusCodeKeyword.groovy:32)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords.verifyResponseStatusCode(WSBuiltInKeywords.groovy:344)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords$verifyResponseStatusCode$0.call(Unknown Source)\r\n\tat com.katalon.WithdrawalStep.checkStatusCode(WithdrawalStep.groovy:167)\r\n\tat ✽.I expect response should have a status 400(Include/features/Withdrawals/WithdrawalsAmount.feature:73)\r\n",
  "status": "failed"
});
formatter.uri("Include/features/Withdrawals/WithdrawalsDate.feature");
formatter.feature({
  "name": "Withdrawal Dates",
  "description": "    As a user\n    I want to specify different dates\n    In order to make withdrawals",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Immediate OK withdrawal",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with \u003cmethodId\u003e and \u003camount\u003e and \u003cuserId\u003e and current date",
  "keyword": "When "
});
formatter.step({
  "name": "I expect response should have a status \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "withdrawal status \"SUCCESS\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "methodId",
        "amount",
        "userId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "1",
        "5",
        "1",
        "200"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Immediate OK withdrawal",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with 1 and 5 and 1 and current date",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.withdrawInmediate(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 200",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "withdrawal status \"SUCCESS\"",
  "keyword": "And "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusWithdrawal(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \r\nExpecting:\r\n \u003c\"[{\"id\":90,\"amount\":5.0,\"executeAt\":\"2021-05-31T09:32:25.741Z\",\"userId\":1,\"paymentMethodId\":1,\"status\":\"PENDING\"}]\"\u003e\r\nto contain:\r\n \u003c\"\"SUCCESS\"\"\u003e \r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PojoMetaMethodSite$PojoCachedMethodSite.invoke(PojoMetaMethodSite.java:192)\r\n\tat org.codehaus.groovy.runtime.callsite.PojoMetaMethodSite.call(PojoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:128)\r\n\tat com.katalon.WithdrawalStep.checkStatusWithdrawal(WithdrawalStep.groovy:172)\r\n\tat ✽.withdrawal status \"SUCCESS\"(Include/features/Withdrawals/WithdrawalsDate.feature:14)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Future OK withdrawal",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with \u003cmethodId\u003e and \u003camount\u003e and \u003cuserId\u003e and future date",
  "keyword": "When "
});
formatter.step({
  "name": "I expect response should have a status \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "withdrawal status \"PENDING\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "methodId",
        "amount",
        "userId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "1",
        "5",
        "1",
        "200"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Future OK withdrawal",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with 1 and 5 and 1 and future date",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.withdrawFuture(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 200",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "withdrawal status \"PENDING\"",
  "keyword": "And "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusWithdrawal(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Past KO withdrawal",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with \u003cmethodId\u003e and \u003camount\u003e and \u003cuserId\u003e and last date",
  "keyword": "When "
});
formatter.step({
  "name": "I expect response should have a status \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "methodId",
        "amount",
        "userId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "1",
        "5",
        "1",
        "400"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Past KO withdrawal",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with 1 and 5 and 1 and last date",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.withdrawLast(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 400",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Expected status code is \u0027400\u0027 but actual status code is \u0027200\u0027\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyStatusCode(VerifyResponseStatusCodeKeyword.groovy:52)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.access$1(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.doCall(VerifyResponseStatusCodeKeyword.groovy:42)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.call(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyResponseStatusCode(VerifyResponseStatusCodeKeyword.groovy:37)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.execute(VerifyResponseStatusCodeKeyword.groovy:32)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords.verifyResponseStatusCode(WSBuiltInKeywords.groovy:344)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords$verifyResponseStatusCode$0.call(Unknown Source)\r\n\tat com.katalon.WithdrawalStep.checkStatusCode(WithdrawalStep.groovy:167)\r\n\tat ✽.I expect response should have a status 400(Include/features/Withdrawals/WithdrawalsDate.feature:31)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Withdrawal KO by non-exist date",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with \u003cmethodId\u003e and \u003camount\u003e and \u003cuserId\u003e and non-exist date",
  "keyword": "When "
});
formatter.step({
  "name": "I expect response should have a status \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "methodId",
        "amount",
        "userId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "1",
        "5",
        "1",
        "400"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Withdrawal KO by non-exist date",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with 1 and 5 and 1 and non-exist date",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.withdrawIncorrectDate(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 400",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Leap-year OK withdrawal",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with \u003cmethodId\u003e and \u003camount\u003e and \u003cuserId\u003e and leap-year date",
  "keyword": "When "
});
formatter.step({
  "name": "I expect response should have a status \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "withdrawal status \"PENDING\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "methodId",
        "amount",
        "userId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "1",
        "5",
        "1",
        "200"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Leap-year OK withdrawal",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with 1 and 5 and 1 and leap-year date",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.withdrawLeapYearDate(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 200",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "withdrawal status \"PENDING\"",
  "keyword": "And "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusWithdrawal(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Withdrawal KO by incorrect date format",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with \u003cmethodId\u003e and \u003camount\u003e and \u003cuserId\u003e and incorrect date format",
  "keyword": "When "
});
formatter.step({
  "name": "I expect response should have a status \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "methodId",
        "amount",
        "userId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "1",
        "5",
        "1",
        "400"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Withdrawal KO by incorrect date format",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with 1 and 5 and 1 and incorrect date format",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.withdrawIncorrectDateFormat(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 400",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/Withdrawals/WithdrawalsMethod.feature");
formatter.feature({
  "name": "Withdrawal Method",
  "description": "    As a user\n    I want to specify different payment methods\n    In order to make a withdrawals",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Withdrawal with avaible method",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with \u003cmethodId\u003e and \u003camount\u003e and \u003cuserId\u003e and future date",
  "keyword": "When "
});
formatter.step({
  "name": "I expect response should have a status \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "withdrawal status \"PENDING\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "methodId",
        "amount",
        "userId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "1",
        "5",
        "1",
        "200"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Withdrawal with avaible method",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with 1 and 5 and 1 and future date",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.withdrawFuture(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 200",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "withdrawal status \"PENDING\"",
  "keyword": "And "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusWithdrawal(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Withdrawal with unavaible method",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with \u003cmethodId\u003e and \u003camount\u003e and \u003cuserId\u003e and future date",
  "keyword": "When "
});
formatter.step({
  "name": "I expect response should have a status \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "methodId",
        "amount",
        "userId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "10",
        "5",
        "1",
        "400"
      ]
    },
    {
      "cells": [
        "0",
        "5",
        "1",
        "400"
      ]
    },
    {
      "cells": [
        "-1",
        "5",
        "1",
        "400"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Withdrawal with unavaible method",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with 10 and 5 and 1 and future date",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.withdrawFuture(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 400",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Expected status code is \u0027400\u0027 but actual status code is \u0027200\u0027\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyStatusCode(VerifyResponseStatusCodeKeyword.groovy:52)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.access$1(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.doCall(VerifyResponseStatusCodeKeyword.groovy:42)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.call(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyResponseStatusCode(VerifyResponseStatusCodeKeyword.groovy:37)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.execute(VerifyResponseStatusCodeKeyword.groovy:32)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords.verifyResponseStatusCode(WSBuiltInKeywords.groovy:344)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords$verifyResponseStatusCode$0.call(Unknown Source)\r\n\tat com.katalon.WithdrawalStep.checkStatusCode(WithdrawalStep.groovy:167)\r\n\tat ✽.I expect response should have a status 400(Include/features/Withdrawals/WithdrawalsMethod.feature:22)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Withdrawal with unavaible method",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with 0 and 5 and 1 and future date",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.withdrawFuture(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 400",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Expected status code is \u0027400\u0027 but actual status code is \u0027200\u0027\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyStatusCode(VerifyResponseStatusCodeKeyword.groovy:52)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.access$1(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.doCall(VerifyResponseStatusCodeKeyword.groovy:42)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.call(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyResponseStatusCode(VerifyResponseStatusCodeKeyword.groovy:37)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.execute(VerifyResponseStatusCodeKeyword.groovy:32)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords.verifyResponseStatusCode(WSBuiltInKeywords.groovy:344)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords$verifyResponseStatusCode$0.call(Unknown Source)\r\n\tat com.katalon.WithdrawalStep.checkStatusCode(WithdrawalStep.groovy:167)\r\n\tat ✽.I expect response should have a status 400(Include/features/Withdrawals/WithdrawalsMethod.feature:22)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Withdrawal with unavaible method",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with -1 and 5 and 1 and future date",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.withdrawFuture(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 400",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Expected status code is \u0027400\u0027 but actual status code is \u0027200\u0027\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyStatusCode(VerifyResponseStatusCodeKeyword.groovy:52)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.access$1(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.doCall(VerifyResponseStatusCodeKeyword.groovy:42)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.call(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyResponseStatusCode(VerifyResponseStatusCodeKeyword.groovy:37)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.execute(VerifyResponseStatusCodeKeyword.groovy:32)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords.verifyResponseStatusCode(WSBuiltInKeywords.groovy:344)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords$verifyResponseStatusCode$0.call(Unknown Source)\r\n\tat com.katalon.WithdrawalStep.checkStatusCode(WithdrawalStep.groovy:167)\r\n\tat ✽.I expect response should have a status 400(Include/features/Withdrawals/WithdrawalsMethod.feature:22)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Withdrawal with an user who doesn\u0027t have that payment method",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with \u003cmethodId\u003e and \u003camount\u003e and \u003cuserId\u003e and future date",
  "keyword": "When "
});
formatter.step({
  "name": "I expect response should have a status \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "methodId",
        "amount",
        "userId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "3",
        "5",
        "1",
        "400"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Withdrawal with an user who doesn\u0027t have that payment method",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with 3 and 5 and 1 and future date",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.withdrawFuture(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 400",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Expected status code is \u0027400\u0027 but actual status code is \u0027200\u0027\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyStatusCode(VerifyResponseStatusCodeKeyword.groovy:52)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.access$1(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.doCall(VerifyResponseStatusCodeKeyword.groovy:42)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.call(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyResponseStatusCode(VerifyResponseStatusCodeKeyword.groovy:37)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.execute(VerifyResponseStatusCodeKeyword.groovy:32)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords.verifyResponseStatusCode(WSBuiltInKeywords.groovy:344)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords$verifyResponseStatusCode$0.call(Unknown Source)\r\n\tat com.katalon.WithdrawalStep.checkStatusCode(WithdrawalStep.groovy:167)\r\n\tat ✽.I expect response should have a status 400(Include/features/Withdrawals/WithdrawalsMethod.feature:32)\r\n",
  "status": "failed"
});
formatter.uri("Include/features/Withdrawals/WithdrawalsUser.feature");
formatter.feature({
  "name": "Withdrawal User",
  "description": "    As a user\n    I want to specify different users\n    In order to make a withdrawals",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Withdrawal with avaible user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with \u003cmethodId\u003e and \u003camount\u003e and \u003cuserId\u003e and future date",
  "keyword": "When "
});
formatter.step({
  "name": "I expect response should have a status \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "withdrawal status \"PENDING\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "methodId",
        "amount",
        "userId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "1",
        "5",
        "1",
        "200"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Withdrawal with avaible user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with 1 and 5 and 1 and future date",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.withdrawFuture(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 200",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "withdrawal status \"PENDING\"",
  "keyword": "And "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusWithdrawal(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Withdrawal with unavaible user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with \u003cmethodId\u003e and \u003camount\u003e and \u003cuserId\u003e and future date",
  "keyword": "When "
});
formatter.step({
  "name": "I expect response should have a status \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "methodId",
        "amount",
        "userId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "1",
        "5",
        "10",
        "400"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Withdrawal with unavaible user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with 1 and 5 and 10 and future date",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.withdrawFuture(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 400",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Expected status code is \u0027400\u0027 but actual status code is \u0027200\u0027\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyStatusCode(VerifyResponseStatusCodeKeyword.groovy:52)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.access$1(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.doCall(VerifyResponseStatusCodeKeyword.groovy:42)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.call(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyResponseStatusCode(VerifyResponseStatusCodeKeyword.groovy:37)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.execute(VerifyResponseStatusCodeKeyword.groovy:32)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords.verifyResponseStatusCode(WSBuiltInKeywords.groovy:344)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords$verifyResponseStatusCode$0.call(Unknown Source)\r\n\tat com.katalon.WithdrawalStep.checkStatusCode(WithdrawalStep.groovy:167)\r\n\tat ✽.I expect response should have a status 400(Include/features/Withdrawals/WithdrawalsUser.feature:22)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Withdrawal with negative userId",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with \u003cmethodId\u003e and \u003camount\u003e and \u003cuserId\u003e and future date",
  "keyword": "When "
});
formatter.step({
  "name": "I expect response should have a status \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "methodId",
        "amount",
        "userId",
        "statusCode"
      ]
    },
    {
      "cells": [
        "1",
        "5",
        "-1",
        "400"
      ]
    },
    {
      "cells": [
        "1",
        "5",
        "0",
        "400"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Withdrawal with negative userId",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with 1 and 5 and -1 and future date",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.withdrawFuture(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 400",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Expected status code is \u0027400\u0027 but actual status code is \u0027200\u0027\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyStatusCode(VerifyResponseStatusCodeKeyword.groovy:52)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.access$1(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.doCall(VerifyResponseStatusCodeKeyword.groovy:42)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.call(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyResponseStatusCode(VerifyResponseStatusCodeKeyword.groovy:37)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.execute(VerifyResponseStatusCodeKeyword.groovy:32)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords.verifyResponseStatusCode(WSBuiltInKeywords.groovy:344)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords$verifyResponseStatusCode$0.call(Unknown Source)\r\n\tat com.katalon.WithdrawalStep.checkStatusCode(WithdrawalStep.groovy:167)\r\n\tat ✽.I expect response should have a status 400(Include/features/Withdrawals/WithdrawalsUser.feature:30)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "The Platform is available",
  "keyword": "Given "
});
formatter.match({
  "location": "WithdrawalStep.selectValidUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Withdrawal with negative userId",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I do a withdrawal with 1 and 5 and 0 and future date",
  "keyword": "When "
});
formatter.match({
  "location": "WithdrawalStep.withdrawFuture(int,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect response should have a status 400",
  "keyword": "Then "
});
formatter.match({
  "location": "WithdrawalStep.checkStatusCode(int)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Expected status code is \u0027400\u0027 but actual status code is \u0027200\u0027\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:50)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyStatusCode(VerifyResponseStatusCodeKeyword.groovy:52)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.access$1(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.doCall(VerifyResponseStatusCodeKeyword.groovy:42)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword$_verifyResponseStatusCode_closure1.call(VerifyResponseStatusCodeKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.verifyResponseStatusCode(VerifyResponseStatusCodeKeyword.groovy:37)\r\n\tat com.kms.katalon.core.webservice.keyword.builtin.VerifyResponseStatusCodeKeyword.execute(VerifyResponseStatusCodeKeyword.groovy:32)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords.verifyResponseStatusCode(WSBuiltInKeywords.groovy:344)\r\n\tat com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords$verifyResponseStatusCode$0.call(Unknown Source)\r\n\tat com.katalon.WithdrawalStep.checkStatusCode(WithdrawalStep.groovy:167)\r\n\tat ✽.I expect response should have a status 400(Include/features/Withdrawals/WithdrawalsUser.feature:30)\r\n",
  "status": "failed"
});
});