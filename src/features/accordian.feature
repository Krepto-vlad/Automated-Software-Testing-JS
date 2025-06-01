@accordion
Feature: Accordian

  Scenario: Open the first accordion section and check that content is visible
    Given I open the "accordian" page
    When I expand the "What is Lorem Ipsum?" section
    Then the content under the "What is Lorem Ipsum?" section should be visible