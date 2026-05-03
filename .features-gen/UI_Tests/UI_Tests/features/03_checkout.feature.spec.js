// Generated from: UI_Tests/features/03_checkout.feature
import { test } from "playwright-bdd";

test.describe('Checkout', () => {

  test.beforeEach('Background', async ({ Given, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('the user is logged in as "standard_user"', null, { page }); 
    await And('the user adds the first product to the cart', null, { page }); 
    await And('the user goes to the cart', null, { page }); 
  });
  
  test('Complete checkout with valid details', async ({ When, Then, And, page }) => { 
    await When('the user proceeds to checkout', null, { page }); 
    await And('the user enters first name "Nazli" last name "Celikbilek" and zip "33467"', null, { page }); 
    await And('the user continues to order overview', null, { page }); 
    await And('the user finishes the order', null, { page }); 
    await Then('the order confirmation message should be visible', null, { page }); 
  });

  test('Checkout fails with empty form', async ({ When, Then, And, page }) => { 
    await When('the user proceeds to checkout', null, { page }); 
    await And('the user continues to order overview', null, { page }); 
    await Then('a checkout error message should be visible', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('UI_Tests/features/03_checkout.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged in as \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":25,"value":"\"standard_user\"","children":[{"start":26,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user adds the first product to the cart","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And the user goes to the cart","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When the user proceeds to checkout","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And the user enters first name \"Nazli\" last name \"Celikbilek\" and zip \"33467\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Nazli\"","children":[{"start":28,"value":"Nazli","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"\"Celikbilek\"","children":[{"start":46,"value":"Celikbilek","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":66,"value":"\"33467\"","children":[{"start":67,"value":"33467","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And the user continues to order overview","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And the user finishes the order","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the order confirmation message should be visible","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged in as \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":25,"value":"\"standard_user\"","children":[{"start":26,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the user adds the first product to the cart","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And the user goes to the cart","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When the user proceeds to checkout","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And the user continues to order overview","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then a checkout error message should be visible","stepMatchArguments":[]}]},
]; // bdd-data-end