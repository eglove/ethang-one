import { render } from '@testing-library/react';

import { CharacterEditorLayout } from './character-editor-layout';

describe('CharacterEditorLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CharacterEditorLayout />);
    expect(baseElement).toBeTruthy();
  });
});
