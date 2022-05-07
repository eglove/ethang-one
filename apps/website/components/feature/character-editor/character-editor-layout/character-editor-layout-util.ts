import { range, zeroPadNumber } from '../character-editor-util';
import {
  clothesColors,
  numberOfAccessories,
  numberOfBodies,
  numberOfFaces,
  numberOfHeads,
  skinColors,
} from '../constants';

export type CharacterOption = {
  children: string | undefined;
  color?: string;
  id: number | string;
  label: string;
};

export const accessoryOptions: CharacterOption[] = range(
  numberOfAccessories
).map(index => {
  return {
    children: zeroPadNumber(index + 1),
    id: index,
    label: `Accessory ${index + 1}`,
  };
});

export const bodyOptions: CharacterOption[] = range(numberOfBodies).map(
  index => {
    return {
      children: zeroPadNumber(index + 1),
      id: index,
      label: `Body ${index + 1}`,
    };
  }
);

export const faceOptions: CharacterOption[] = range(numberOfFaces).map(
  index => {
    return {
      children: zeroPadNumber(index + 1),
      id: index,
      label: `Face ${index + 1}`,
    };
  }
);

export const headOptions: CharacterOption[] = range(numberOfHeads).map(
  index => {
    return {
      children: zeroPadNumber(index + 1),
      id: index,
      label: `Head ${index + 1}`,
    };
  }
);

const withColorAndLabel = (color: string, label: string): CharacterOption => {
  return {
    children: null,
    color,
    id: color,
    label,
  };
};

export const skinColorOptions: CharacterOption[] = skinColors.map(
  ({ label, color }) => {
    return withColorAndLabel(color, label);
  }
);

export const clothesColorOptions: CharacterOption[] = clothesColors.map(
  ({ label, color }) => {
    return withColorAndLabel(color, label);
  }
);
