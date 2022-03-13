export {};

describe('Review Testing With Cypress', () => {
  it('should contain all necessary pieces', () => {
    // @ts-expect-error Custom command
    cy.testReview({
      courseAuthor: 'Scott Tolinski',
      courseName: 'Testing With Cypress',
      courseUrl: 'https://leveluptutorials.com/tutorials/testing-with-cypress',
      rating: '4',
      reviewSlug: 'review-testing-with-cypress',
    });
  });
});
