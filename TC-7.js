const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example()
{
    try {
	var driver = new Builder().forBrowser('chrome').build();
        await driver.get('http://uitest.duodecadits.com/');
		await driver.findElement({partialLinkText :'Error'}).click();
		url = await driver.getCurrentUrl();
		console.log(url);
		const h1text = await driver.findElement(By.css("body > h1:nth-child(1)")).getText();
		{ console.log(h1text); } 
	if (h1text === "404 Error: File not found :-(")

		{ console.log("Test passed"); } 
		else {
		console.log("Test failed"); }
	}		
	catch (e) {
  if (e.name === 'NoSuchElementError')
    console.log('Element not found');
}
  	
    finally{driver.quit();
    }
})();

