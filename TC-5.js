const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example()
{
    try {
	var driver = new Builder().forBrowser('chrome').build();
        await driver.get('http://uitest.duodecadits.com/');

		await driver.findElement({partialLinkText :'Form'}).click();
		url = await driver.getCurrentUrl();
		console.log(url);
		if (url == "http://uitest.duodecadits.com/form.html") {
		console.log("Test passed"); } 
		else {
		console.log("Test failed"); }
	}		
	catch(err) {
		console.log('Test error');
  }	
    finally{driver.quit();
    }
})();

