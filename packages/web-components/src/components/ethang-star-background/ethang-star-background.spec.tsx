import { newSpecPage } from '@stencil/core/testing';

import { EthangStarBackground } from './ethang-star-background';

describe('ethang-star-background', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [EthangStarBackground],
      html: '<ethang-star-background></ethang-star-background>',
    });
    expect(root).toEqualHtml(`
      <ethang-star-background>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ethang-star-background>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [EthangStarBackground],
      html: `<ethang-star-background first="Stencil" last="'Don't call me a framework' JS"></ethang-star-background>`,
    });
    expect(root).toEqualHtml(`
      <ethang-star-background first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ethang-star-background>
    `);
  });
});
