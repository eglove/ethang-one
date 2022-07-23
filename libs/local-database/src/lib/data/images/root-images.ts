import { Image } from '../../models/image';

export const rootImages = {
  gmail: new Image({
    altText: 'GMail',
    height: 384,
    url: 'https://i.imgur.com/74J3VE9.png',
    width: 512,
  }),
  linkedIn: new Image({
    altText: 'LinkedIn',
    height: 300,
    url: '/images/linkedin.svg',
    width: 300,
  }),
  loading: new Image({
    altText: 'Loading',
    height: 200,
    url: '/images/loading.svg',
    width: 200,
  }),
};
