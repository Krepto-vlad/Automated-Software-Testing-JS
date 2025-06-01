@brokenlinks
Feature: Link validation

  Scenario: Navigate using valid link
    Given I open the "broken" page
    When I click the valid link
    Then I should be navigated to a valid page
