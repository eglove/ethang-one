// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

export {};

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    login(email: string, password: string): void;
  }
}
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => {
//   console.log('Custom command example: Login', email, password);
// });
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

interface TestReviewArguments {
  courseAuthor: string;
  courseName: string;
  courseUrl: string;
  rating: '1' | '2' | '3' | '4' | '5';
  reviewSlug: string;
}

Cypress.Commands.add(
  // @ts-expect-error Custom command
  'testReview',
  (arguments_: TestReviewArguments): void => {
    const reviewUrl = `${location.origin}/blog/${arguments_.reviewSlug}`;

    cy.visit(reviewUrl);

    // Contains a rating
    cy.contains(`${arguments_.rating} out of 5`);
    // Mentions author
    cy.contains(arguments_.courseAuthor);
    // Name of course is mentioned
    cy.contains(arguments_.courseName);
  }
);
