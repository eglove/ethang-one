import { Image } from '../../models/image';
import { getRootImage } from './util';

export const rootImages = {
  linkedIn: new Image({
    altText: 'LinkedIn',
    height: 300,
    url: getRootImage('linkedin.svg'),
    width: 300,
  }),
  loading: new Image({
    altText: 'Loading',
    height: 200,
    url: getRootImage('loading.svg'),
    width: 200,
  }),
};
