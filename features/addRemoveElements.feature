Feature: Add Remove Elements


  Scenario: Add Remove Elements Page initial State
    Given I open Herokuapp homepage page
    When I click the link with text "Add/Remove Elements" in Homepage
    Then the Add Remove Elements Page contains Sub-header with text "Add/Remove Elements"
      And the Add Element button is visible in the Add Remove Elements page