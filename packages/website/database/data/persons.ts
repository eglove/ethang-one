import { Person } from '../models/person';
import { images } from './images';

export enum PersonName {
  ethanGlover = 'ethanGlover',
  danielBourke = 'danielBourke',
  jacintoWong = 'jacintoWong',
  adamOdziemkowski = 'adamOdziemkowski',
  andreiDumitrescu = 'andreiDumitrescu',
  andreiNeagoie = 'andreiNeagoie',
  coltSteele = 'coltSteele',
  danielSchifano = 'danielSchifano',
  angelaYu = 'angelaYu',
  luisRamirezJr = 'luisRamirezJr',
  michelleMabuyo = 'michelleMabuyo',
  moBinni = 'moBinni',
  philippMuellauer = 'philippMuellauer',
  raphTerrier = 'raphTerrier',
  realToughCandy = 'realToughCandy',
  stephaneMaarek = 'stephaneMaarek',
  stephenGrider = 'stephenGrider',
  valentinDespa = 'valentinDespa',
  wesBos = 'wesBos',
  yihuaZhang = 'yihuaZhang',
  aleskaTamburkovski = 'aleskaTamburkovski',
  kentDodds = 'kentDodds',
  juriStrumpflohner = 'juriStrumpflohner',
  maximilianSchwarzmuller = 'maximilianSchwarzmuller',
}

type PersonMetaData = Record<PersonName, Person>;

export const persons: PersonMetaData = {
  [PersonName.adamOdziemkowski]: new Person({
    firstName: 'Adam',
    lastName: 'Odziemkowski',
  }),
  [PersonName.aleskaTamburkovski]: new Person({
    firstName: 'Aleska',
    lastName: 'Tamburkovski',
  }),
  [PersonName.andreiNeagoie]: new Person({
    firstName: 'Andrei',
    lastName: 'Neagoie',
  }),
  [PersonName.andreiDumitrescu]: new Person({
    firstName: 'Andrei',
    lastName: 'Dumitrescu',
  }),
  [PersonName.angelaYu]: new Person({
    firstName: 'Angela',
    lastName: 'Yu',
  }),
  [PersonName.coltSteele]: new Person({
    firstName: 'Colt',
    lastName: 'Steele',
  }),
  [PersonName.danielSchifano]: new Person({
    firstName: 'Daniel',
    lastName: 'Schifano',
  }),
  [PersonName.danielBourke]: new Person({
    firstName: 'Daniel',
    lastName: 'Bourke',
  }),
  [PersonName.ethanGlover]: new Person({
    firstName: 'Ethan',
    githubUrl: new URL('https://github.com/eglove'),
    image: images.ethanAvatar,
    lastName: 'Glover',
    linkedinUrl: new URL('https://www.linkedin.com/in/ethan-glover/'),
    websiteUrl: new URL('https://www.ethang.dev/'),
  }),
  [PersonName.jacintoWong]: new Person({
    firstName: 'Jacinto',
    lastName: 'Wong',
  }),
  [PersonName.juriStrumpflohner]: new Person({
    firstName: 'Juri',
    lastName: 'Strumpflohner',
  }),
  [PersonName.kentDodds]: new Person({
    firstName: 'Kent C.',
    lastName: 'Dodds',
  }),
  [PersonName.luisRamirezJr]: new Person({
    firstName: 'Luis',
    lastName: 'Ramirez Jr.',
  }),
  [PersonName.maximilianSchwarzmuller]: new Person({
    firstName: 'Maximilian',
    lastName: 'Schwarzmüller',
  }),
  [PersonName.michelleMabuyo]: new Person({
    firstName: 'Michelle',
    lastName: 'Mabuyo',
  }),
  [PersonName.moBinni]: new Person({
    firstName: 'Mo',
    lastName: 'Binni',
  }),
  [PersonName.philippMuellauer]: new Person({
    firstName: 'Philipp',
    lastName: 'Muellauer',
  }),
  [PersonName.raphTerrier]: new Person({
    firstName: 'Raph',
    lastName: 'Terrier',
  }),
  [PersonName.realToughCandy]: new Person({
    firstName: 'Real Tough',
    lastName: 'Candy',
  }),
  [PersonName.stephaneMaarek]: new Person({
    firstName: 'Stephane',
    lastName: 'Maarek',
  }),
  [PersonName.stephenGrider]: new Person({
    firstName: 'Stephen',
    lastName: 'Grider',
  }),
  [PersonName.valentinDespa]: new Person({
    firstName: 'Valentin',
    lastName: 'Despa',
  }),
  [PersonName.wesBos]: new Person({
    firstName: 'Wes',
    lastName: 'Bos',
  }),
  [PersonName.yihuaZhang]: new Person({
    firstName: 'Yihua',
    lastName: 'Zhang',
  }),
};
