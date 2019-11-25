const webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until,
  chrome = require('selenium-webdriver/chrome'),
  options = new chrome.Options();
options.addArguments('disable-infobars');

class Root {
  driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions()
    .build();

  visit = (url) => {
    return this.driver.get(url);
  };

  quit = () => {
    return this.driver.quit();
  };

  find = (element) => {
    this.driver.wait(until.elementLocated(By.css(element)), 5000);
    return this.driver.findElement(By.css(element));
  };

  getText = (element) => {
    this.driver.wait(until.elementLocated(By.css(element)), 5000);
    return this.driver.findElement(By.css(element)).getText();
  };

  write = (element, text) => {
    return this.find(element).sendKeys(text);
  };
}

module.exports = Root;
