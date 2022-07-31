import { BodyFive } from './body-five';
import { BodyFour } from './body-four';
import { BodyOne } from './body-one';
import { BodySix } from './body-six';
import { BodyThree } from './body-three';
import { BodyTwo } from './body-two';
import { BodyZero } from './body-zero';

type AccessoriesLayoutProperties = {
  body: number;
  clothesColor: string;
  skinColor: string;
};

export function BodiesLayout({
  clothesColor,
  body,
  skinColor,
}: AccessoriesLayoutProperties): JSX.Element {
  switch (body) {
    case 1: {
      return <BodyOne clothesColor={clothesColor} skinColor={skinColor} />;
    }

    case 2: {
      return <BodyTwo clothesColor={clothesColor} skinColor={skinColor} />;
    }

    case 3: {
      return <BodyThree clothesColor={clothesColor} skinColor={skinColor} />;
    }

    case 4: {
      return <BodyFour clothesColor={clothesColor} skinColor={skinColor} />;
    }

    case 5: {
      return <BodyFive clothesColor={clothesColor} skinColor={skinColor} />;
    }

    case 6: {
      return <BodySix clothesColor={clothesColor} skinColor={skinColor} />;
    }

    default: {
      return <BodyZero clothesColor={clothesColor} skinColor={skinColor} />;
    }
  }
}
