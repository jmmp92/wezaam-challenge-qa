#Author: jmmmp92@hotmail.com

Feature: Withdrawal User
    As a user
    I want to specify different users
    In order to make a withdrawals
    
  Background: 
  	Given The Platform is available
      
  Scenario Outline: Withdrawal with avaible user
		When I do a withdrawal with <methodId> and <amount> and <userId> and future date
    Then I expect response should have a status <statusCode>
    And withdrawal status "PENDING"

		Examples: 
      | methodId  | amount 	| userId  |	statusCode  |
      | 1 				|     5 	| 1 			|	200				  |
      
  Scenario Outline: Withdrawal with unavaible user
		When I do a withdrawal with <methodId> and <amount> and <userId> and future date
    Then I expect response should have a status <statusCode>

		Examples: 
      | methodId  | amount 	| userId  |	statusCode  |
      | 1 				|     5 	| 10 			|	400				  |
      
  Scenario Outline: Withdrawal with negative userId
		When I do a withdrawal with <methodId> and <amount> and <userId> and future date
    Then I expect response should have a status <statusCode>

		Examples: 
      | methodId  | amount 	| userId  |	statusCode  |
      | 1 				|     5 	| -1 			|	400				  |
      | 1 				|     5 	| 0 			|	400				  |
