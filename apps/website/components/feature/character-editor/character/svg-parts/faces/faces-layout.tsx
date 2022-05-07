import { FaceEight } from './face-eight';
import { FaceFive } from './face-five';
import { FaceFour } from './face-four';
import { FaceOne } from './face-one';
import { FaceSeven } from './face-seven';
import { FaceSix } from './face-six';
import { FaceThree } from './face-three';
import { FaceTwo } from './face-two';
import { FaceZero } from './face-zero';

interface AccessoriesLayoutProperties {
  face: number;
}

export function FacesLayout({
  face,
}: AccessoriesLayoutProperties): JSX.Element {
  switch (face) {
    case 1: {
      return <FaceOne />;
    }

    case 2: {
      return <FaceTwo />;
    }

    case 3: {
      return <FaceThree />;
    }

    case 4: {
      return <FaceFour />;
    }

    case 5: {
      return <FaceFive />;
    }

    case 6: {
      return <FaceSix />;
    }

    case 7: {
      return <FaceSeven />;
    }

    case 8: {
      return <FaceEight />;
    }

    default: {
      return <FaceZero />;
    }
  }
}
