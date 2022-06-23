import { render } from '@testing-library/react';

import { WeatherLayout } from './weather-layout';

describe('Weather Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WeatherLayout />);
    expect(baseElement).toBeTruthy();
  });
});
