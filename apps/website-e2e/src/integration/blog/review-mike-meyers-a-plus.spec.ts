export {};

describe('Review Mike Meyers A Plus', () => {
  it('should contain all necessary pieces', () => {
    // @ts-expect-error Custom command
    cy.testReview({
      courseAuthor: 'Mike Meyers',
      courseName: 'TOTAL: CompTIA A+ Certification',
      courseUrl:
        'https://leveluptutorials.com/tutorials/code-automation-with-github',
      rating: '4',
      reviewSlug: 'review-code-automation-with-github',
    });
  });
});
