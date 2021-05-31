Finally I have used Katalon Studio to automated this API tests. I split this cases in four Features by Date, Users, Amounts and Payment Methods.

I have used groovy and integrated Cucumber.

### Preconditions:

Download and install Katalon Studio
        
        https://www.katalon.com/

You have to create and account to Start For Free and download only Katalon Studio

### Run tests

Open the repository in Katalon Studio Framework. 

You can see the Features files implemented in Include/features folder writed in Gherkin language and the Step file in Include/scripts/groovy/com.katalon/WithdrawalStep. The other step files are one by default (KatalonHelper) and the other is to run and make the report file in html.

To run all the Features, go to Test Cases folder and open RunFeatureFile. Once the file is open, click on the play button and this generated the report in ReportsFolder folder.

To run one of the features, go to the feature file in Include/features, select the feature and click on the play button.

### Report file

Once you run RunFeatureFile, go to ReportsFolder and you can see index.html file, open this and you can see the results of the tests cases.

### Comments

All tests cases failed are bugs discovered. I assumed that in case of and error, withdrawal-controller should respond with error 400, because 500 should be server errors.

### Test failed flow

In my opinion the better way to do this is with a mock service using Wiremock with a file like bellow

{
    "request": {
        "method": "GET",
        "url": "/v1/users"
    },
    "response": {
        "status": 500,
        "body": "INTERNAL_ERROR"
    }
}

