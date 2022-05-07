import { render } from '@testing-library/react';

import { Character } from './character';

describe('Character', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Character
        accessory={0}
        body={0}
        clothesColor="0"
        face={0}
        head={0}
        skinColor="0"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
