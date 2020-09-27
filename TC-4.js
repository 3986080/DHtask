const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example()
{
    try {
	var driver = new Builder().forBrowser('chrome').build();
        await driver.get('http://uitest.duodecadits.com/form.html');

		await driver.findElement({partialLinkText :'Home'}).click();
		url = await driver.getCurrentUrl();
		//if (url = "http://uitest.duodecadits.com/") {
		//var current = await driver.findElement(By.className("active"));
        //classNames = current.getAttribute("class");
		assertTrue(driver.findElement(By.id("home")).getAttribute("class").contains("active"));

		console.log(classNames); 
	}		
	catch(err) {
		console.log('Test failed');
  }	
    finally{driver.quit();
    }
})();

