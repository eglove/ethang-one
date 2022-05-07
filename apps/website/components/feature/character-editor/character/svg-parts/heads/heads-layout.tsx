import { HeadEight } from './head-eight';
import { HeadFive } from './head-five';
import { HeadFour } from './head-four';
import { HeadOne } from './head-one';
import { HeadSeven } from './head-seven';
import { HeadSix } from './head-six';
import { HeadThree } from './head-three';
import { HeadTwo } from './head-two';
import { HeadZero } from './head-zero';

interface AccessoriesLayoutProperties {
  head: number;
  skinColor: string;
}

export function HeadsLayout({
  head,
  skinColor,
}: AccessoriesLayoutProperties): JSX.Element {
  switch (head) {
    case 1: {
      return <HeadOne skinColor={skinColor} />;
    }

    case 2: {
      return <HeadTwo skinColor={skinColor} />;
    }

    case 3: {
      return <HeadThree skinColor={skinColor} />;
    }

    case 4: {
      return <HeadFour skinColor={skinColor} />;
    }

    case 5: {
      return <HeadFive skinColor={skinColor} />;
    }

    case 6: {
      return <HeadSix skinColor={skinColor} />;
    }

    case 7: {
      return <HeadSeven skinColor={skinColor} />;
    }

    case 8: {
      return <HeadEight skinColor={skinColor} />;
    }

    case 9: {
      return <HeadEight skinColor={skinColor} />;
    }

    case 10: {
      return <HeadEight skinColor={skinColor} />;
    }

    case 11: {
      return <HeadEight skinColor={skinColor} />;
    }

    default: {
      return <HeadZero skinColor={skinColor} />;
    }
  }
}
