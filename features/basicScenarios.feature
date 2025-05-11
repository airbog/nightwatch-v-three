Feature: Basic assertions and Elements interactions

 
  Scenario: AB Testing page
    Given I open Herokuapp homepage page
    When I click the link with text "A/B Testing" in Homepage
    Then the "Split Testing" page contains Header with text "A/B Test"
      And the AB Testing Page contains text "Also known as split testing."

 
  Scenario: Add Remove Elements Page initial State
    Given I open Herokuapp homepage page
    When I click the link with text "Add/Remove Elements" in Homepage
    Then the "Add Remmove Elements" page contains Header with text "Add/Remove Elements"
      And the Add Element button is visible in the Add Remove Elements page


  Scenario: Adding and Removing elements in Add Remove Elements page
    Given I open Herokuapp homepage page
    When I click the link with text "Add/Remove Elements" in Homepage
      And I click the Add Element button in the Add Remove Elements page
    Then the Delete button is visible 1 time in the Add Remove Elements page

    When I click the Add Element button in the Add Remove Elements page
      And I click the Add Element button in the Add Remove Elements page
    Then the Delete button is visible 3 times in the Add Remove Elements page

    When I click the Delete button on position 3 in the Add Remove Elements page
    Then the Delete button is visible 2 times in the Add Remove Elements page

    When I click the Delete button on position 2 in the Add Remove Elements page
    Then the Delete button is visible 1 time in the Add Remove Elements page

    When I click the Delete button on position 1 in the Add Remove Elements page
    Then the Delete button is visible 0 times in the Add Remove Elements page