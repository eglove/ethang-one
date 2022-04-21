import { Person } from '../../models/person';

export const authors = {
  ethanGlover: new Person({
    birthday: new Date('April 28, 1990'),
    firstName: 'Ethan',
    heightIn: 70,
    lastName: 'Glover',
    weightLbs: 187.6,
  }),
};
