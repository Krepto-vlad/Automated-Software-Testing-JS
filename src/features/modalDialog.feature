@modal
Feature: Modal dialog handling

  Scenario: Open small modal and check title
    Given I open the "modal-dialogs" page
    When I click the "Small Modal" button
    Then I should see the modal with title "Small Modal"
