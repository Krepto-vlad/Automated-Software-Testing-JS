@textBox
Feature: Text Box functionality

  Scenario: Fill text box and verify output
    Given I open the text box page
    #TODO avoid hard coding. generate data
    When I fill in the form with name "John Doe", email "john@example.com", current address "123 Main St", and permanent address "456 Elm St"
    Then I should see the output with name "John Doe" and email "john@example.com"
