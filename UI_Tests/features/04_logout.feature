Feature: Logout
  Swag Labs logout scenarios

  Background:
    Given the user is logged in as "standard_user"

  Scenario: Successful logout
    When the user opens the menu
    And the user clicks logout
    Then the user should be redirected to the login page

  Scenario: User cannot access inventory after logout
    When the user opens the menu
    And the user clicks logout
    And the user navigates back to the inventory page
    Then the user should be redirected to the login page
