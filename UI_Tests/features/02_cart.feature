Feature: Shopping Cart
  Swag Labs shopping cart scenarios

  Background:
    Given the user is logged in as "standard_user"

  Scenario: Add a product to the cart
    When the user adds the first product to the cart
    Then the cart badge should show "1"

  Scenario: Remove a product from the cart
    When the user adds the first product to the cart
    And the user removes the first product from the cart
    Then the cart badge should not be visible

  Scenario: Cart retains items after navigation
    When the user adds the first product to the cart
    And the user navigates to the product detail page
    Then the cart badge should show "1"
