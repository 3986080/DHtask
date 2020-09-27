	const {Builder, By, Key, until} = require('selenium-webdriver');

async function checkLogo(link) {
  let driver = await new Builder().forBrowser('chrome').build(); 
  
  try {
    	driver.get(link);
	ulaa = await driver.findElement(By.id('hello-input'));
	ulba = await driver.findElement(By.id('hello-submit'));
	if ( driver.findElement(By.css("#hello-input")).isDisplayed()) 
	{console.log("Element is Visible");
     } else {
	console.log("Element is InVisible");
	}
	
	if ( driver.findElement(By.css("#hello-submit")).isDisplayed())
	{
	console.log("Element is Visible");
	} else {
	console.log("Element is InVisible");
	}
	
	
	console.log('Test passed');
	}
	finally {driver.quit();	
  
  }
    	
};
checkLogo('http://uitest.duodecadits.com/form.html');
