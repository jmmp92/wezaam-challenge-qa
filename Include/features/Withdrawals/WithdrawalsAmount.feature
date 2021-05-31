#Author: jmmmp92@hotmail.com

Feature: Withdrawal Amount
    As a user
    I want to specify different amounts
    In order to make a withdrawals
    
  Background: 
  	Given The Platform is available
      
  Scenario Outline: Withdrawal with correct amount
		When I do a withdrawal with <methodId> and <amount> and <userId> and future date
    Then I expect response should have a status <statusCode>
    And withdrawal status "PENDING"

		Examples: 
      | methodId  | amount 		| userId  |	statusCode  |
      | 3 				|     100 	| 2 			|	200				  |
      | 3 				|     200 	| 2 			|	200				  |
      
  Scenario Outline: Withdrawal with incorrect amount
		When I do a withdrawal with <methodId> and <amount> and <userId> and future date
    Then I expect response should have a status <statusCode>

		Examples: 
      | methodId  | amount 		| userId  |	statusCode  |
     	| 3 				|     0 		| 2 			|	400				  |
      | 3 				|     -2	 	| 2 			|	400				  |

  Scenario Outline: Withdrawal with more than maxWithdrawalAmount 
		When I do a withdrawal with <methodId> and <amount> and <userId> and future date
    Then I expect response should have a status <statusCode>

		Examples: 
      | methodId  | amount 			| userId  |	statusCode  |
     	| 3 				|     300 		| 2 			|	400				  |
     	
  Scenario Outline: Two withdrawals with sum amount less or equal than maxWithdrawalAmount 
		When I do two withdrawals with <methodId> and <amount> and <userId> and <methodId2> and <amount2>  and future date
    Then I expect response should have a status <statusCode>

		Examples: 
      | methodId  | amount 			|	methodId2	|	amount2	| userId  |	statusCode  |
      | 3 				|     50	 		|	3					|	100			| 2 			|	200				  |
     	| 3 				|     100 		|	3					|	100			| 2 			|	200				  |

  Scenario Outline: Two withdrawals with sum amount more than maxWithdrawalAmount 
		When I do two withdrawals with <methodId> and <amount> and <userId> and <methodId2> and <amount2>  and future date
    Then I expect response should have a status <statusCode>

		Examples: 
      | methodId  | amount 			|	methodId2	|	amount2	| userId  |	statusCode  |
      | 3 				|     50	 		|	3					|	200			| 2 			|	400				  |

  Scenario Outline: Two withdrawals with sum amount less or equal than maxWithdrawalAmount and different dates
		When I do two withdrawals with <methodId> and <amount> and <userId> and <methodId2> and <amount2>  and different dates
    Then I expect response should have a status <statusCode>

		Examples: 
      | methodId  | amount 			|	methodId2	|	amount2	| userId  |	statusCode  |
      | 3 				|     50	 		|	3					|	100			| 2 			|	200				  |
      
  Scenario Outline: Two withdrawals with sum amount more than maxWithdrawalAmount and different dates
		When I do two withdrawals with <methodId> and <amount> and <userId> and <methodId2> and <amount2>  and different dates
    Then I expect response should have a status <statusCode>

		Examples: 
      | methodId  | amount 			|	methodId2	|	amount2	| userId  |	statusCode  |
      | 3 				|     150	 		|	3					|	100			| 2 			|	400				  |
      
  Scenario Outline: More withdrawals than maxWithdrawals
		When I do three withdrawals with <methodId> and <amount> and <userId> and <methodId2> and <amount2> and <methodId3> and <amount3> and future dates
    Then I expect response should have a status <statusCode>

		Examples: 
      | methodId  | amount 			|	methodId2	|	amount2	| methodId3  	| amount3 			| userId  |	statusCode  |
      | 3 				|     50	 		|	3					|	100			|	3						|50							| 2 			|	400				  |