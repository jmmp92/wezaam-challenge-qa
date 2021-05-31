#Author: jmmmp92@hotmail.com

Feature: Withdrawal Method
    As a user
    I want to specify different payment methods
    In order to make a withdrawals
    
  Background: 
  	Given The Platform is available
      
  Scenario Outline: Withdrawal with avaible method
		When I do a withdrawal with <methodId> and <amount> and <userId> and future date
    Then I expect response should have a status <statusCode>
    And withdrawal status "PENDING"

		Examples: 
      | methodId  | amount 	| userId  |	statusCode  |
      | 1 				|     5 	| 1 			|	200				  |
      
  Scenario Outline: Withdrawal with unavaible method
		When I do a withdrawal with <methodId> and <amount> and <userId> and future date
    Then I expect response should have a status <statusCode>

		Examples: 
      | methodId  | amount 	| userId  |	statusCode  |
      | 10 				|     5 	| 1 			|	400				  |
      | 0 				|     5 	| 1 			|	400				  |
      | -1 				|     5 	| 1 			|	400				  |
      
  Scenario Outline: Withdrawal with an user who doesn't have that payment method
		When I do a withdrawal with <methodId> and <amount> and <userId> and future date
    Then I expect response should have a status <statusCode>

		Examples: 
      | methodId  | amount 	| userId  |	statusCode  |
      | 3 				|     5 	| 1 			|	400				  |

