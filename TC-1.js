const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

	
function checkUI(link) {
driver.get(link);
driver.sleep(1000).then(function() {
  driver.getTitle().then(function(title) {
    if(title === 'UI Testing Site') {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }
    driver.quit();
  });
});
}

checkUI('http://uitest.duodecadits.com');
checkUI('http://uitest.duodecadits.com/form.html');
