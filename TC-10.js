	const {Builder, By, Key, until} = require('selenium-webdriver');

async function checkLogo(link) {
  let driver = await new Builder().forBrowser('chrome').build(); 
  
  try {
    	driver.get(link);
	
	const ptext = await driver.findElement(By.xpath("/html/body/div/div[1]/p")).getText();
	if (ptext === "This site is dedicated to perform some exercises and demonstrate automated web testing.")
		{	console.log('Test passed');  
	} else {
    console.log('Test failed');
    }		
	}
	finally {driver.quit();	
  
  }
    	
};
checkLogo('http://uitest.duodecadits.com');
