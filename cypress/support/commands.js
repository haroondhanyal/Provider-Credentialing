// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-xpath';
import 'cypress-file-upload';
/// <reference types="Cypress"/>
Cypress.Commands.add('visitUrl', (urlKey) => {
    const baseUrl = Cypress.env(urlKey);
    if (!baseUrl) {
      throw new Error(`No URL defined for key: ${urlKey}`);
    }
    cy.visit(baseUrl);
  });
// Cypress.Commands.add('clickMultipleXPaths', (xpaths) => {
//     xpaths.forEach((xpath) => {
//       cy.xpath(xpath).click();
//       cy.wait(500); // Optional: Add a short wait between clicks
//     });
//   });