@textBox
Feature: Text Box functionality

  Scenario: Fill text box and verify output
    Given I open the "text-box" page
    When I fill in the text box form with generated data
    Then I should see the generated name and email in the output
