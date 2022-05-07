import { AccessoryFive } from './accessory-five';
import { AccessoryFour } from './accessory-four';
import { AccessoryOne } from './accessory-one';
import { AccessoryThree } from './accessory-three';
import { AccessoryTwo } from './accessory-two';

interface AccessoriesLayoutProperties {
  accessory: number;
}

export function AccessoriesLayout({
  accessory,
}: AccessoriesLayoutProperties): JSX.Element {
  switch (accessory) {
    case 1: {
      return <AccessoryOne />;
    }

    case 2: {
      return <AccessoryTwo />;
    }

    case 3: {
      return <AccessoryThree />;
    }

    case 4: {
      return <AccessoryFour />;
    }

    case 5: {
      return <AccessoryFive />;
    }

    default: {
      return null;
    }
  }
}
