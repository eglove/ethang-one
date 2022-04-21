import { Image } from '../../models/image';
import { getPersonImage } from './util';

export const personImages = {
  ethanGlover: new Image({
    altText: 'Ethan Glover profile',
    height: 449,
    url: getPersonImage('ethan-glover.jpg'),
    width: 449,
  }),
};
