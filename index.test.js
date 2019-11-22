const { Builder, By, Key, until } = require("selenium-webdriver");
require("selenium-webdriver/chrome");
require("chromedriver");

// const rootURL = "https://yelyzaveta-kuzmina.github.io/typing-trainer/";
const rootURL = "http://localhost:3000/";
let driver;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5;

beforeAll(async () => {
  driver = await new Builder().forBrowser("chrome").build();
});

// afterAll(async () => driver.quit());

it("access the root link", async () => {
  await driver.get(rootURL);
});

it("open poems", async () => {
  await driver
    .findElement(
      By.css("#root > div:nth-child(1) > div:nth-child(3) > div > button")
    )
    .click();

  await driver.findElement(
    By.css("#root > div:nth-child(1) > div.bm-menu-wrap > div.bm-menu")
  );
});

it("changeJedeNacht", async () => {
  driver.wait(
    until.elementLocated(
      By.xpath('//*[@id="root"]/div[1]/div[2]/div[1]/nav/span[3]')
    )
  );
  const jedeNacht = await driver.findElement(
    By.xpath('//*[@id="root"]/div[1]/div[2]/div[1]/nav/span[3]')
  );
  const innerTextJedeNacht = await jedeNacht.getText();
  expect(innerTextJedeNacht).toBe('H. Hesse "Jede Nacht"');
  jedeNacht.click();
});

it("changeAbendsGespraech", async () => {
  driver.wait(
    until.elementLocated(
      By.xpath('//*[@id="root"]/div[1]/div[2]/div[1]/nav/span[2]')
    )
  );
  const abendsGespraech = await driver.findElement(
    By.xpath('//*[@id="root"]/div[1]/div[2]/div[1]/nav/span[2]')
  );
  const innerTextAbendsGespraech = await abendsGespraech.getText();
  expect(innerTextAbendsGespraech).toBe('H. Hesse "Abendgespräch"');
  abendsGespraech.click();
});

it("close modal window", async () => {
  driver.wait(
    until.elementLocated(
      By.css(
        "#root > div:nth-child(1) > div.bm-menu-wrap > div:nth-child(2) > div > button"
      )
    )
  );
  const closeButton = await driver.findElement(
    By.css(
      "#root > div:nth-child(1) > div.bm-menu-wrap > div:nth-child(2) > div > button"
    )
  );
  closeButton.click();
});

it("insert the content", async () => {
  const input = await driver.findElement(
    By.css(
      "#root > div.styles_wrapper__3dLt8 > div.styles_inputWrapper__1kPzV > input"
    )
  );
  let activeLetter;
  while (
    (activeLetter = await driver.findElement(
      By.css('span[test-handle="active-letter"]')
    ))
  ) {
    const letter = await activeLetter.getText();
    console.log(letter);
    input.sendKeys(letter);
    await new Promise(resolve => setTimeout(resolve, 100));
  }
});
