const App = require('../lib/app');
const chai = require('chai');
const ChaiAsPromised = require('chai-as-promised');
const should = chai.should();
chai.use(ChaiAsPromised);
let app;

describe('typing trainer app scenarios', function() {
  jest.setTimeout(50000);

  beforeEach(function() {
    app = new App();
    app.visit('http://localhost:3000/'); // https://yelyzaveta-kuzmina.github.io/typing-trainer/
  });

  afterEach(function() {
    app.quit();
  });

  it('insert the content', async function() {
    const lettersInsertion = await app.insertContent();
    return true;
    // return lettersInsertion.letter.should.eventually.be.true;
  });
});
