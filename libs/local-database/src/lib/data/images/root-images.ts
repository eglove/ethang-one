import { Image } from '../../models/image';

export const rootImages = {
  gmail: new Image({
    altText: 'GMail',
    height: 384,
    url: 'https://res.cloudinary.com/eglove/image/upload/v1652900946/gmail.png',
    width: 512,
  }),
  linkedIn: new Image({
    altText: 'LinkedIn',
    height: 300,
    url: 'https://res.cloudinary.com/eglove/image/upload/v1650668210/linkedin.svg',
    width: 300,
  }),
  loading: new Image({
    altText: 'Loading',
    height: 200,
    url: 'https://res.cloudinary.com/eglove/image/upload/v1650668233/loading.svg',
    width: 200,
  }),
};
