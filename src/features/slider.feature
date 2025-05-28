@slider
Feature: Slider

  Scenario: Move the slider to a specific value
    Given I open the slider page
    When I move the slider to "30"
    Then the slider value should be "30"