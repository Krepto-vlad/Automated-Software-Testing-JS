@buttons
Feature: Button clicks

  Scenario: Double click shows success message
    Given I open the "buttons" page
    When I double click the "Double Click Me" button
    Then I should see the message "You have done a double click"
