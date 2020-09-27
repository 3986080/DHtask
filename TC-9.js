	const {Builder, By, Key, until} = require('selenium-webdriver');

async function checkLogo(link) {
  let driver = await new Builder().forBrowser('chrome').build(); 
  
  try {
    	driver.get(link);
	head1 = await driver.findElement(By.tagName("h1")).textContent;
	
	const h1text = await driver.findElement(By.css("h1")).getText();
	if (h1text === "Welcome to the Docler Holding QA Department")
		{	console.log('Test passed');  
	} else {
    console.log('Test failed');
    }		
	}
	finally {driver.quit();	
  
  }
    	
};
checkLogo('http://uitest.duodecadits.com');
