const { Key, until } = require('selenium-webdriver');
const Root = require('./root');
const locators = require('../utils/locators');

const textSelector = locators.text;
const inputSelector = locators.input;

class App extends Root {
  writeLetter = async (letter) => {
    console.log(letter.charCodeAt(0));
    if (letter === '↩') {
      this.write(inputSelector, Key.ENTER);
      await new Promise((resolve) => setTimeout(resolve, 500));
    } else {
      return this.write(inputSelector, letter);
    }
  };

  insertContent = async () => {
    const text = await this.getText(textSelector).then((text) => text.replace(/\n/g, ''));
    for (const letter of text) {
      await this.writeLetter(letter);
    }
  };
}

module.exports = App;
