export {};

describe('Review CSS for Javascript Developers', () => {
  it('should contain all necessary pieces', () => {
    // @ts-expect-error Custom command
    cy.testReview({
      courseAuthor: 'Josh Comeau',
      courseName: 'CSS for JavaScript Developers',
      courseUrl: 'https://css-for-js.com/',
      rating: '5',
      reviewSlug: 'review-css-javascript-developers',
    });
  });
});
