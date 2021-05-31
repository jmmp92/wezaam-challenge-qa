package com.katalon
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

import java.util.TimeZone
import internal.GlobalVariable
import static org.assertj.core.api.Assertions.*

class WithdrawalStep {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("The Platform is available")
	def selectValidUser() {
		GlobalVariable.response = WS.sendRequest(findTestObject('Users/getUsers'))

		WS.verifyResponseStatusCode(GlobalVariable.response, 200)
	}

	@When("I do a withdrawal with {int} and {int} and {int} and current date")
	def withdrawInmediate(int methodId,int amount,int userId) {
		def dateZone= TimeZone.getTimeZone('UTC')
		def timezone = TimeZone.setDefault(dateZone)
		def now = new Date()
		def nowdate=now.format("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
		
		GlobalVariable.response = WS.sendRequest(findTestObject('Withdrawals/sendWithdrawal', [('userId') : userId, ('paymentMethodId') : methodId, ('executeAt') : nowdate
            , ('amount') : amount]))
		
	}
	
	@When("I do a withdrawal with {int} and {int} and {int} and future date")
	def withdrawFuture(int methodId,int amount,int userId) {
		def dateZone= TimeZone.getTimeZone('UTC')
		def timezone = TimeZone.setDefault(dateZone)
		def now = new Date()
		def tomorrow = now.next()
		def tomorrowDate=tomorrow.format("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
		
		GlobalVariable.response = WS.sendRequest(findTestObject('Withdrawals/sendWithdrawal', [('userId') : userId, ('paymentMethodId') : methodId, ('executeAt') : tomorrowDate
			, ('amount') : amount]))
		
	}

	@When("I do a withdrawal with {int} and {int} and {int} and last date")
	def withdrawLast(int methodId,int amount,int userId) {
		def dateZone= TimeZone.getTimeZone('UTC')
		def timezone = TimeZone.setDefault(dateZone)
		def now = new Date()
		def yesterday = now.previous()
		def yesterdayDate=yesterday.format("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
		println('FECHAAA' +yesterdayDate)
		
		GlobalVariable.response = WS.sendRequest(findTestObject('Withdrawals/sendWithdrawal', [('userId') : userId, ('paymentMethodId') : methodId, ('executeAt') : yesterdayDate
			, ('amount') : amount]))
		
	}
	
	@When("I do a withdrawal with {int} and {int} and {int} and non-exist date")
	def withdrawIncorrectDate(int methodId,int amount,int userId) {
		def incorrectDate = "2021-02-30T17:09:45.330Z"
		
		GlobalVariable.response = WS.sendRequest(findTestObject('Withdrawals/sendWithdrawal', [('userId') : userId, ('paymentMethodId') : methodId, ('executeAt') : incorrectDate
			, ('amount') : amount]))
		
	}
	
	@When("I do a withdrawal with {int} and {int} and {int} and leap-year date")
	def withdrawLeapYearDate(int methodId,int amount,int userId) {
		def leapYearDate = "2024-02-29T17:09:45.330Z"
		
		GlobalVariable.response = WS.sendRequest(findTestObject('Withdrawals/sendWithdrawal', [('userId') : userId, ('paymentMethodId') : methodId, ('executeAt') : leapYearDate
			, ('amount') : amount]))
		
	}
	
	@When("I do a withdrawal with {int} and {int} and {int} and incorrect date format")
	def withdrawIncorrectDateFormat(int methodId,int amount,int userId) {
		def incorrectDate = "2021/02/30T17:09:45.330Z"
		
		GlobalVariable.response = WS.sendRequest(findTestObject('Withdrawals/sendWithdrawal', [('userId') : userId, ('paymentMethodId') : methodId, ('executeAt') : incorrectDate
			, ('amount') : amount]))
		
	}
	
	@When("I do two withdrawals with {int} and {int} and {int} and {int} and {int}  and future date")
	def twoWithdrawFuture(int methodId,int amount,int userId,int methodId2,int amount2) {
		def dateZone= TimeZone.getTimeZone('UTC')
		def timezone = TimeZone.setDefault(dateZone)
		def now = new Date()
		def tomorrow = now.next()
		def tomorrowDate=tomorrow.format("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
		
		GlobalVariable.response = WS.sendRequest(findTestObject('Withdrawals/sendTwoWithdrawals', [('userId') : userId, ('paymentMethodId') : methodId, ('amount') : amount
            , ('executeAt') : tomorrowDate, ('amount2') : amount2, ('executeAt2') : tomorrowDate]))
		
	}
	
	@When("I do two withdrawals with {int} and {int} and {int} and {int} and {int}  and different dates")
	def twoWithdrawDifferentDates(int methodId,int amount,int userId,int methodId2,int amount2) {
		def dateZone= TimeZone.getTimeZone('UTC')
		def timezone = TimeZone.setDefault(dateZone)
		def now = new Date()
		def nowDate = now.format("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
		def tomorrow = now.next()
		def tomorrowDate=tomorrow.format("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
		
		GlobalVariable.response = WS.sendRequest(findTestObject('Withdrawals/sendTwoWithdrawals', [('userId') : userId, ('paymentMethodId') : methodId, ('amount') : amount
			, ('executeAt') : nowDate, ('amount2') : amount2, ('executeAt2') : tomorrowDate]))
		
	}
	
	@When("I do three withdrawals with {int} and {int} and {int} and {int} and {int} and {int} and {int} and future dates")
	def twoWithdrawFuture(int methodId,int amount,int userId,int methodId2,int amount2,int methodId3,int amount3) {
		def dateZone= TimeZone.getTimeZone('UTC')
		def timezone = TimeZone.setDefault(dateZone)
		def now = new Date()
		def tomorrow = now.next()
		def tomorrowDate=tomorrow.format("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
		
		GlobalVariable.response = WS.sendRequest(findTestObject('Withdrawals/sendThreeWithdrawals', [('userId') : userId, ('paymentMethodId') : methodId, ('amount') : amount
            , ('executeAt') : tomorrowDate, ('amount2') : amount2, ('executeAt2') : tomorrowDate, ('executeAt3') : tomorrowDate
            , ('amount3') : amount3]))
		
	}
	
	@Then("I expect response should have a status {int}")
	def checkStatusCode(int statusCode) {
		WS.verifyResponseStatusCode(GlobalVariable.response, statusCode)
	}

	@And("withdrawal status (.*)")
	def checkStatusWithdrawal(String status) {
		assertThat(GlobalVariable.response.getResponseText()).contains(status)
	}
}