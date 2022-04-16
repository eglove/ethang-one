export {};

describe('Review Complete React Developer', () => {
  it('should contain all necessary pieces', () => {
    // @ts-expect-error Custom command
    cy.testReview({
      courseAuthor: 'Yihua Zhang',
      courseName: 'Complete React Developer',
      courseUrl: 'https://zerotomastery.io/courses/learn-react/',
      rating: '5',
      reviewSlug: 'review-complete-react-developer',
    });
  });
});
