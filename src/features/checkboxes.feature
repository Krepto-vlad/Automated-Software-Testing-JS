@checkbox
Feature: Checkbox selection

  Scenario Outline: Select a checkbox and verify it is checked
    Given I open the "checkbox" page
    When I expand all checkboxes
    And I select the checkbox "<name>"
    Then the checkbox "<name>" should be checked

    Examples:
      | name        |
      | Notes       |
      | Angular     |
      | Private     |
      | Excel File  |
      | Downloads   |
