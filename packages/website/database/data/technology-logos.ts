import { TechnologyLogo } from '../models/technology-logo';
import { images } from './images';

export enum TechnologyType {
  typescript = 'typescript',
}

type TechnologyLogoMetaData = Record<TechnologyType, TechnologyLogo>;

export const technologyLogos: TechnologyLogoMetaData = {
  [TechnologyType.typescript]: new TechnologyLogo({
    image: images.typescript,
    isOneHomepage: true,
  }),
};
