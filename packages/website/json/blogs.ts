import { Blog, blogSlug } from './models/blog';
import { blogImage, Image } from './models/image';
import { Person } from './models/person';

type BlogsMetaData = Record<blogSlug, Blog>;

export const blogs: BlogsMetaData = {
  [blogSlug.firstPost]: new Blog({
    authors: [Person.Ethan],
    created: new Date('2021-11-14 00:48:54.841'),
    image: new Image({
      altText: 'Text editor showing this post.',
      height: 354,
      url: blogImage('tiny-mce.png'),
      width: 697,
    }),
    title: 'A First Post',
    updated: new Date('2021-11-14 00:48:54.841'),
  }),
  [blogSlug.pcBackup]: new Blog({
    authors: [Person.Ethan],
    created: new Date('2021-11-14 02:56:14.914'),
    image: new Image({
      altText: 'PowerShell script to download and run another script.',
      height: 150,
      url: blogImage('powershell-script.png'),
      width: 891,
    }),
    title: 'PC Backup In Two Lines',
    updated: new Date('2021-11-14 02:56:14.915'),
  }),
  [blogSlug.portfolioRedesign]: new Blog({
    authors: [Person.Ethan],
    created: new Date('2021-11-14 03:21:27.377'),
    image: new Image({
      altText:
        'Portfolio page showing large images in a masonry layout for each portfolio project.',
      height: 743,
      url: blogImage('portfolio-redesign.png'),
      width: 992,
    }),
    title: 'Portfolio Redesign',
    updated: new Date('2021-11-14 03:21:27.378'),
  }),
  [blogSlug.recommendedCourses]: new Blog({
    authors: [Person.Ethan],
    created: new Date('2021-11-14 03:12:02.535'),
    image: new Image({
      altText: 'List of recommended courses.',
      height: 324,
      url: blogImage('recommended-courses.png'),
      width: 931,
    }),
    title: 'The Recommended Courses',
    updated: new Date('2021-11-14 03:12:02.535'),
  }),
  [blogSlug.rtcReview]: new Blog({
    authors: [Person.Ethan],
    created: new Date('2021-11-14 03:25:00.019'),
    image: new Image({
      altText: 'RealToughCandy.io landing page.',
      height: 423,
      url: blogImage('real-tough-candy.png'),
      width: 946,
    }),
    title: 'RealToughCandy.io Review',
    updated: new Date('2021-11-14 03:25:00.020'),
  }),
  [blogSlug.staticPages]: new Blog({
    authors: [Person.Ethan],
    created: new Date('Feb. 26, 2022 17:19'),
    image: new Image({
      altText: 'React JSX',
      height: 249,
      url: blogImage(`${blogSlug.staticPages}.png`),
      width: 670,
    }),
    title: 'On Hosting Static Pages',
    updated: new Date('Feb. 26, 2022 17:19'),
  }),
  [blogSlug.talkAboutAnki]: new Blog({
    authors: [Person.Ethan],
    created: new Date('2021-11-14 02:46:21.627'),
    image: new Image({
      altText: 'Anki flashcard software.',
      height: 1000,
      url: blogImage('anki.png'),
      width: 1000,
    }),
    title: 'Do You Have a Moment to Talk About Anki?',
    updated: new Date('2021-11-14 02:46:21.628'),
  }),
};
