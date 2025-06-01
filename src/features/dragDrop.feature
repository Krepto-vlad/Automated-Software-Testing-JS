@dragdrop
Feature: Drag and Drop

  Scenario: Perform drag and drop and check result
    Given I open the "droppable" page
    When I drag the element to the drop zone
    Then the drop zone should show "Dropped!"
