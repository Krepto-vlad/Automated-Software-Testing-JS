@radio
Feature: Radio button selection

  Scenario Outline: Select a radio button and verify the result
    Given I open the "radio-button" page
    When I select the radio button "<option>"
    Then the selected radio result should be "<option>"

    Examples:
      | option     |
      | Yes        |
      | Impressive |
