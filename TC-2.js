	const {Builder, By, Key, until} = require('selenium-webdriver');

async function checkLogo(link) {
  let driver = await new Builder().forBrowser('chrome').build(); 
  
  try {
    	driver.get(link);
	ulaa = await driver.findElement(By.id('dh_logo'));
	console.log('Test passed');
	}
	finally {driver.quit();	
  
  }
    	
};
checkLogo('http://uitest.duodecadits.com');
checkLogo('http://uitest.duodecadits.com/form.html');
