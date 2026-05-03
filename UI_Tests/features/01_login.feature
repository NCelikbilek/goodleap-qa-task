Feature: Login
  Swag Labs login scenarios

  Background:
    Given the user navigates to "https://www.saucedemo.com/"

  # 1. Happy Path
  Scenario: Successful login with valid credentials
    When the user enters username "standard_user"
    And the user enters password "secret_sauce"
    And the user clicks the login button
    Then the URL should contain "inventory"

  # 2. Negative Test
  Scenario: Login should fail for locked out user
    When the user enters username "locked_out_user"
    And the user enters password "secret_sauce"
    And the user clicks the login button
    Then an error message should be visible

  # 3. Edge Case (Performance)
  Scenario: Login with performance glitch user
    When the user enters username "performance_glitch_user"
    And the user enters password "secret_sauce"
    And the user clicks the login button
    Then the URL should contain "inventory"
