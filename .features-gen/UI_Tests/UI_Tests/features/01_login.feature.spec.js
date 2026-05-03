// Generated from: UI_Tests/features/01_login.feature
import { test } from "playwright-bdd";

test.describe('Login', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('the user navigates to "https://www.saucedemo.com/"', null, { page }); 
  });
  
  test('Successful login with valid credentials', async ({ When, Then, And, page }) => { 
    await When('the user enters username "standard_user"', null, { page }); 
    await And('the user enters password "secret_sauce"', null, { page }); 
    await And('the user clicks the login button', null, { page }); 
    await Then('the URL should contain "inventory"', null, { page }); 
  });

  test('Login should fail for locked out user', async ({ When, Then, And, page }) => { 
    await When('the user enters username "locked_out_user"', null, { page }); 
    await And('the user enters password "secret_sauce"', null, { page }); 
    await And('the user clicks the login button', null, { page }); 
    await Then('an error message should be visible', null, { page }); 
  });

  test('Login with performance glitch user', async ({ When, Then, And, page }) => { 
    await When('the user enters username "performance_glitch_user"', null, { page }); 
    await And('the user enters password "secret_sauce"', null, { page }); 
    await And('the user clicks the login button', null, { page }); 
    await Then('the URL should contain "inventory"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('UI_Tests/features/01_login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user navigates to \"https://www.saucedemo.com/\"","isBg":true,"stepMatchArguments":[{"group":{"start":22,"value":"\"https://www.saucedemo.com/\"","children":[{"start":23,"value":"https://www.saucedemo.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When the user enters username \"standard_user\"","stepMatchArguments":[{"group":{"start":25,"value":"\"standard_user\"","children":[{"start":26,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And the user enters password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":25,"value":"\"secret_sauce\"","children":[{"start":26,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And the user clicks the login button","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the URL should contain \"inventory\"","stepMatchArguments":[{"group":{"start":23,"value":"\"inventory\"","children":[{"start":24,"value":"inventory","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":17,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user navigates to \"https://www.saucedemo.com/\"","isBg":true,"stepMatchArguments":[{"group":{"start":22,"value":"\"https://www.saucedemo.com/\"","children":[{"start":23,"value":"https://www.saucedemo.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When the user enters username \"locked_out_user\"","stepMatchArguments":[{"group":{"start":25,"value":"\"locked_out_user\"","children":[{"start":26,"value":"locked_out_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And the user enters password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":25,"value":"\"secret_sauce\"","children":[{"start":26,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And the user clicks the login button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then an error message should be visible","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user navigates to \"https://www.saucedemo.com/\"","isBg":true,"stepMatchArguments":[{"group":{"start":22,"value":"\"https://www.saucedemo.com/\"","children":[{"start":23,"value":"https://www.saucedemo.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When the user enters username \"performance_glitch_user\"","stepMatchArguments":[{"group":{"start":25,"value":"\"performance_glitch_user\"","children":[{"start":26,"value":"performance_glitch_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And the user enters password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":25,"value":"\"secret_sauce\"","children":[{"start":26,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"And the user clicks the login button","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then the URL should contain \"inventory\"","stepMatchArguments":[{"group":{"start":23,"value":"\"inventory\"","children":[{"start":24,"value":"inventory","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end