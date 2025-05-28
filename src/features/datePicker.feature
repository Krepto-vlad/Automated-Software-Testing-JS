@date
Feature: Date Picker

  Scenario: Pick a specific date and check the result
    Given I open the date picker page
    When I select the date "10/28/2025"
    Then the selected date should be "10/28/2025"