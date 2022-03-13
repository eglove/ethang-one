export {};

describe('Review Code Automation with Github', () => {
  it('should contain all necessary pieces', () => {
    // @ts-expect-error Custom command
    cy.testReview({
      courseAuthor: 'Brian Douglas',
      courseName: 'Code Automation With GitHub',
      courseUrl:
        'https://leveluptutorials.com/tutorials/code-automation-with-github',
      rating: '4',
      reviewSlug: 'review-code-automation-with-github',
    });
  });
});
