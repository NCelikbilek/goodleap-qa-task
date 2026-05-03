Feature: Pet API - CRUD Operations
  Petstore API pet endpoint scenarios

  Scenario: Create a new pet
    Given a pet with name "Bubble" and status "available"
    When the user sends a POST request to create the pet
    Then the response status should be 200
    And the response should contain name "Bubble" and status "available"

  Scenario: Retrieve a pet by ID
    Given a pet with name "Bubble" and status "available"
    And the pet has been created
    When the user sends a GET request to retrieve the pet
    Then the response status should be 200
    And the response should contain name "Bubble" and status "available"

  Scenario: Update an existing pet
    Given a pet with name "Bubble" and status "available"
    And the pet has been created
    When the user updates the pet name to "Bubble Updated" and status to "adopted"
    Then the response status should be 200
    And the response should contain name "Bubble Updated" and status "adopted"

  Scenario: Find pets by status
    When the user searches for pets with status "available"
    Then the response status should be 200
    And the response should return a list of pets

  Scenario: Delete a pet
    Given a pet with name "Bubble" and status "available"
    And the pet has been created
    When the user sends a DELETE request for the pet
    Then the response status should be 200

  Scenario: Get deleted pet returns 404
    Given a pet with name "Bubble" and status "available"
    And the pet has been created
    And the pet has been deleted
    When the user sends a GET request to retrieve the pet
    Then the response status should be 404
