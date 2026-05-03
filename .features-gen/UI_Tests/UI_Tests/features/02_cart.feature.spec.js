// Generated from: UI_Tests/features/02_cart.feature
import { test } from "playwright-bdd";

test.describe('Shopping Cart', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('the user is logged in as "standard_user"', null, { page }); 
  });
  
  test('Add a product to the cart', async ({ When, Then, page }) => { 
    await When('the user adds the first product to the cart', null, { page }); 
    await Then('the cart badge should show "1"', null, { page }); 
  });

  test('Remove a product from the cart', async ({ When, Then, And, page }) => { 
    await When('the user adds the first product to the cart', null, { page }); 
    await And('the user removes the first product from the cart', null, { page }); 
    await Then('the cart badge should not be visible', null, { page }); 
  });

  test('Cart retains items after navigation', async ({ When, Then, And, page }) => { 
    await When('the user adds the first product to the cart', null, { page }); 
    await And('the user navigates to the product detail page', null, { page }); 
    await Then('the cart badge should show "1"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('UI_Tests/features/02_cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged in as \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":25,"value":"\"standard_user\"","children":[{"start":26,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When the user adds the first product to the cart","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the cart badge should show \"1\"","stepMatchArguments":[{"group":{"start":27,"value":"\"1\"","children":[{"start":28,"value":"1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged in as \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":25,"value":"\"standard_user\"","children":[{"start":26,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user adds the first product to the cart","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And the user removes the first product from the cart","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the cart badge should not be visible","stepMatchArguments":[]}]},
  {"pwTestLine":21,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged in as \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":25,"value":"\"standard_user\"","children":[{"start":26,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When the user adds the first product to the cart","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And the user navigates to the product detail page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then the cart badge should show \"1\"","stepMatchArguments":[{"group":{"start":27,"value":"\"1\"","children":[{"start":28,"value":"1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end