import { getGreeting } from '../support/app.po';

describe('ethang', () => {
  beforeEach(() => {
    getGreeting();
    return cy.visit('/');
  });
});
