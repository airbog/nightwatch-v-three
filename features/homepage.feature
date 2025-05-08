Feature: Herokuapp Homepage check

  Scenario: Herokuapp homepage title, header, sub-header and footer
    Given I open Herokuapp homepage page
    Then the page title should contain "The Internet"
      And the Main Homepage Header text is "Welcome to the-internet"
      And the "Herokuapp homepage" page contains Header with text "Available Examples"
      And the Main Homepage Footer text is "Powered by Elemental Selenium"


  