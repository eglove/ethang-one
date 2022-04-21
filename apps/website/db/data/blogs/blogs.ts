import { Blog } from '../../models/blog';
import { authors } from '../authors/authors';
import { allImages } from '../images/all-images';

export const blogs = {
  aFirstPost: new Blog({
    authors: [authors.ethanGlover],
    createdAt: new Date('3/11/2022, 2:44 PM'),
    description: 'First post of this blog.',
    featuredImage: allImages.blogImages.tinyMce,
    slug: 'a-first-post',
    title: 'A First Post',
    updatedAt: new Date('11/14/2021, 12:48 AM'),
  }),
  curingBiasWithCuriosity: new Blog({
    authors: [authors.ethanGlover],
    createdAt: new Date('3/11/2022, 2:38 PM'),
    description: 'How to cure bias with curiosity.',
    featuredImage: allImages.blogImages.iWantToBelieve,
    slug: 'curing-bias-with-curiosity',
    title: 'Curing Bias with Curiosity',
    updatedAt: new Date('11/26/2016, 04:25 AM'),
  }),
  sevenWayToWinAnArgumentOnline: new Blog({
    authors: [authors.ethanGlover],
    createdAt: new Date('3/11/2022, 3:03 PM'),
    description: '7 ways to win an argument on the internet.',
    featuredImage: allImages.blogImages.redditCmv,
    slug: '7-ways-to-win-an-argument-online',
    title: '7 Ways to Win An Argument Online',
    updatedAt: new Date('10/12/2016, 04:10 AM'),
  }),
};
