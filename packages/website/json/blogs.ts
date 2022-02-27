import { Blog, blogSlug } from './models/blog';
import { Image } from './models/image';
import { Person } from './models/person';

type BlogsMetaData = Record<blogSlug, Blog>;

export const blogs: BlogsMetaData = {
  [blogSlug.staticPages]: new Blog({
    authors: [Person.Ethan],
    created: new Date('Feb. 26, 2022 17:19'),
    image: new Image({
      altText: 'React JSX',
      height: 249,
      url: `/images/blog-images/${blogSlug.staticPages}.png`,
      width: 670,
    }),
    title: 'On Hosting Static Pages',
    updated: new Date('Feb. 26, 2022 17:19'),
  }),
};
