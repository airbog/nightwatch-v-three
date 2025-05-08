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