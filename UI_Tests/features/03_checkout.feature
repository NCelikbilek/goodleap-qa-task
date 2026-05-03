Feature: Checkout
  Swag Labs checkout scenarios

  Background:
    Given the user is logged in as "standard_user"
    And the user adds the first product to the cart
    And the user goes to the cart

  Scenario: Complete checkout with valid details
    When the user proceeds to checkout
    And the user enters first name "Nazli" last name "Celikbilek" and zip "33467"
    And the user continues to order overview
    And the user finishes the order
    Then the order confirmation message should be visible

  Scenario: Checkout fails with empty form
    When the user proceeds to checkout
    And the user continues to order overview
    Then a checkout error message should be visible
