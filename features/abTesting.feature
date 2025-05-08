Feature: A/B Testing page

  Scenario: AB Testing page
    Given I open Herokuapp homepage page
    When I click the link with text "A/B Testing" in Homepage
    Then the "Split Testing" page contains Header with text "A/B Test"
      And the AB Testing Page contains text "Also known as split testing."