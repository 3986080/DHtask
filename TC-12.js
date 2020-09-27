const {Builder, By, Key, until} = require('selenium-webdriver');

async function example(name,result)
{
    try {
	var driver = new Builder().forBrowser('chrome').build();
        driver.get('http://uitest.duodecadits.com/form.html');
        await driver.findElement(By.name('myName')).sendKeys(name, Key.ENTER);
        let firstResult = await driver.wait(until.elementLocated(By.css('#hello-text')), 5000);
		appear = await firstResult.getAttribute('textContent');
        if (result === appear)  {
		console.log('Test ' + name + ' passed');
		} else {
		console.log('Test ' + name +  ' failed'); }
	}		
	catch(err) {
		console.log('Test error');
  }	

   
    finally{driver.quit();
    }
};
example("John","Hello John!");
example("Sophia","Hello Sophia!");
example("Charlie","Hello Charlie!");
example("Emily","Hello Emily!");
