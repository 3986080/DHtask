const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example()
{
    try {
	var driver = new Builder().forBrowser('chrome').build();
        await driver.get('http://uitest.duodecadits.com/form.html');

		await driver.findElement({partialLinkText :'Home'}).click();
		url = await driver.getCurrentUrl();
		if (url = "http://uitest.duodecadits.com/") {
		console.log("Test passed"); }
	}		
	catch(err) {
		console.log('Test failed');
  }	
    finally{driver.quit();
    }
})();

