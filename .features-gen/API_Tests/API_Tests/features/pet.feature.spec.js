// Generated from: API_Tests/features/pet.feature
import { test } from "playwright-bdd";

test.describe('Pet API - CRUD Operations', () => {

  test('Create a new pet', async ({ Given, When, Then, And, request }) => { 
    await Given('a pet with name "Bubble" and status "available"'); 
    await When('the user sends a POST request to create the pet', null, { request }); 
    await Then('the response status should be 200'); 
    await And('the response should contain name "Bubble" and status "available"'); 
  });

  test('Retrieve a pet by ID', async ({ Given, When, Then, And, request }) => { 
    await Given('a pet with name "Bubble" and status "available"'); 
    await And('the pet has been created', null, { request }); 
    await When('the user sends a GET request to retrieve the pet', null, { request }); 
    await Then('the response status should be 200'); 
    await And('the response should contain name "Bubble" and status "available"'); 
  });

  test('Update an existing pet', async ({ Given, When, Then, And, request }) => { 
    await Given('a pet with name "Bubble" and status "available"'); 
    await And('the pet has been created', null, { request }); 
    await When('the user updates the pet name to "Bubble Updated" and status to "adopted"', null, { request }); 
    await Then('the response status should be 200'); 
    await And('the response should contain name "Bubble Updated" and status "adopted"'); 
  });

  test('Find pets by status', async ({ When, Then, And, request }) => { 
    await When('the user searches for pets with status "available"', null, { request }); 
    await Then('the response status should be 200'); 
    await And('the response should return a list of pets'); 
  });

  test('Delete a pet', async ({ Given, When, Then, And, request }) => { 
    await Given('a pet with name "Bubble" and status "available"'); 
    await And('the pet has been created', null, { request }); 
    await When('the user sends a DELETE request for the pet', null, { request }); 
    await Then('the response status should be 200'); 
  });

  test('Get deleted pet returns 404', async ({ Given, When, Then, And, request }) => { 
    await Given('a pet with name "Bubble" and status "available"'); 
    await And('the pet has been created', null, { request }); 
    await And('the pet has been deleted', null, { request }); 
    await When('the user sends a GET request to retrieve the pet', null, { request }); 
    await Then('the response status should be 404'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('API_Tests/features/pet.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given a pet with name \"Bubble\" and status \"available\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Bubble\"","children":[{"start":17,"value":"Bubble","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":36,"value":"\"available\"","children":[{"start":37,"value":"available","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user sends a POST request to create the pet","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 200","stepMatchArguments":[{"group":{"start":30,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And the response should contain name \"Bubble\" and status \"available\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Bubble\"","children":[{"start":34,"value":"Bubble","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"available\"","children":[{"start":54,"value":"available","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":13,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given a pet with name \"Bubble\" and status \"available\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Bubble\"","children":[{"start":17,"value":"Bubble","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":36,"value":"\"available\"","children":[{"start":37,"value":"available","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"And the pet has been created","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user sends a GET request to retrieve the pet","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 200","stepMatchArguments":[{"group":{"start":30,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And the response should contain name \"Bubble\" and status \"available\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Bubble\"","children":[{"start":34,"value":"Bubble","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"available\"","children":[{"start":54,"value":"available","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":21,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":22,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given a pet with name \"Bubble\" and status \"available\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Bubble\"","children":[{"start":17,"value":"Bubble","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":36,"value":"\"available\"","children":[{"start":37,"value":"available","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And the pet has been created","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When the user updates the pet name to \"Bubble Updated\" and status to \"adopted\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Bubble Updated\"","children":[{"start":34,"value":"Bubble Updated","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":64,"value":"\"adopted\"","children":[{"start":65,"value":"adopted","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 200","stepMatchArguments":[{"group":{"start":30,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"And the response should contain name \"Bubble Updated\" and status \"adopted\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Bubble Updated\"","children":[{"start":34,"value":"Bubble Updated","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":61,"value":"\"adopted\"","children":[{"start":62,"value":"adopted","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":29,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":30,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When the user searches for pets with status \"available\"","stepMatchArguments":[{"group":{"start":39,"value":"\"available\"","children":[{"start":40,"value":"available","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 200","stepMatchArguments":[{"group":{"start":30,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":32,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"And the response should return a list of pets","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":36,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"Given a pet with name \"Bubble\" and status \"available\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Bubble\"","children":[{"start":17,"value":"Bubble","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":36,"value":"\"available\"","children":[{"start":37,"value":"available","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"And the pet has been created","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When the user sends a DELETE request for the pet","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 200","stepMatchArguments":[{"group":{"start":30,"value":"200","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":42,"pickleLine":35,"tags":[],"steps":[{"pwStepLine":43,"gherkinStepLine":36,"keywordType":"Context","textWithKeyword":"Given a pet with name \"Bubble\" and status \"available\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Bubble\"","children":[{"start":17,"value":"Bubble","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":36,"value":"\"available\"","children":[{"start":37,"value":"available","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"And the pet has been created","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"And the pet has been deleted","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When the user sends a GET request to retrieve the pet","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 404","stepMatchArguments":[{"group":{"start":30,"value":"404","children":[]},"parameterTypeName":"int"}]}]},
]; // bdd-data-end