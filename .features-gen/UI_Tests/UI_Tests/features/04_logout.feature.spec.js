// Generated from: UI_Tests/features/04_logout.feature
import { test } from "playwright-bdd";

test.describe('Logout', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('the user is logged in as "standard_user"', null, { page }); 
  });
  
  test('Successful logout', async ({ When, Then, And, page }) => { 
    await When('the user opens the menu', null, { page }); 
    await And('the user clicks logout', null, { page }); 
    await Then('the user should be redirected to the login page', null, { page }); 
  });

  test('User cannot access inventory after logout', async ({ When, Then, And, page }) => { 
    await When('the user opens the menu', null, { page }); 
    await And('the user clicks logout', null, { page }); 
    await And('the user navigates back to the inventory page', null, { page }); 
    await Then('the user should be redirected to the login page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('UI_Tests/features/04_logout.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged in as \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":25,"value":"\"standard_user\"","children":[{"start":26,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When the user opens the menu","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And the user clicks logout","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the login page","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is logged in as \"standard_user\"","isBg":true,"stepMatchArguments":[{"group":{"start":25,"value":"\"standard_user\"","children":[{"start":26,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user opens the menu","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And the user clicks logout","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And the user navigates back to the inventory page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the login page","stepMatchArguments":[]}]},
]; // bdd-data-end