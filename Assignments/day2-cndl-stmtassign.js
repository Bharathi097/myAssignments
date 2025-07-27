/* 
Assignment Details:
Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and `runTests` with `switch` for test type messages.
Assignment Requirements:
Create two functions : launchBrowser, runTests where,
a) launchBrowser need to take input as browserName (string) and do not return any
- use if-else (chrome or otherwise)
- Print the value
b) runTests need to take input as testType (string) and do not return any
- use switch case (smoke, sanity, regression, default (smoke))
- Print the values
Call that function from the javascript
*/


function launchBrowser(browserName)
{
    if(browserName=='chrome')
    {
        console.log("Launch browser is "+browserName);
    }
    else if(browserName=='firefox')
    {
        console.log("Launch browser is "+browserName);
    }
    else if(browserName=='IE')
    {
        console.log("Launch browser is "+browserName);
    
    }
    else
    {
        console.log("Invalid Browser")
    }

}

function runTests(testType)
{
    switch(true)
    {
        case testType=='smoke':
            console.log("Run a smoke Test")
            break
        case testType=='sanity':  // ==/=== not working
            console.log("Run a sanity Test")
            break
        case testType=='Regression':
                console.log("Run a Regression Test")
                break
        default:
            console.log("Incorrect test type, default tp smoke test")
    }
}

launchBrowser('IE')
runTests('Sanity')