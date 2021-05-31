#Author: jmmmp92@hotmail.com

Feature: Withdrawal Dates
    As a user
    I want to specify different dates
    In order to make withdrawals
    
  Background: 
  	Given The Platform is available

  Scenario Outline: Immediate OK withdrawal
		When I do a withdrawal with <methodId> and <amount> and <userId> and current date
    Then I expect response should have a status <statusCode>
    And withdrawal status "SUCCESS"

		Examples: 
      | methodId  | amount 	| userId  |	statusCode  |
      | 1 				|     5 	| 1 			|	200				  |
      
  Scenario Outline: Future OK withdrawal
		When I do a withdrawal with <methodId> and <amount> and <userId> and future date
    Then I expect response should have a status <statusCode>
    And withdrawal status "PENDING"

		Examples: 
      | methodId  | amount 	| userId  |	statusCode  |
      | 1 				|     5 	| 1 			|	200				  |
      
  Scenario Outline: Past KO withdrawal
		When I do a withdrawal with <methodId> and <amount> and <userId> and last date
    Then I expect response should have a status <statusCode>

		Examples: 
      | methodId  | amount 	| userId  |	statusCode  |
      | 1 				|     5 	| 1 			|	400				  |

  Scenario Outline: Withdrawal KO by non-exist date
		When I do a withdrawal with <methodId> and <amount> and <userId> and non-exist date
    Then I expect response should have a status <statusCode>

		Examples: 
      | methodId  | amount 	| userId  |	statusCode  |
      | 1 				|     5 	| 1 			|	400				  |
      
  Scenario Outline: Leap-year OK withdrawal
		When I do a withdrawal with <methodId> and <amount> and <userId> and leap-year date
    Then I expect response should have a status <statusCode>
    And withdrawal status "PENDING"

		Examples: 
      | methodId  | amount 	| userId  |	statusCode  |
      | 1 				|     5 	| 1 			|	200				  |
      
  Scenario Outline: Withdrawal KO by incorrect date format
		When I do a withdrawal with <methodId> and <amount> and <userId> and incorrect date format
    Then I expect response should have a status <statusCode>

		Examples: 
      | methodId  | amount 	| userId  |	statusCode  |
      | 1 				|     5 	| 1 			|	400				  |
      