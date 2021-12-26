import { newSpecPage } from '@stencil/core/testing';

import { EthangSpinner } from './ethang-spinner';

describe('ethang-spinner', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [EthangSpinner],
      html: '<ethang-spinner></ethang-spinner>',
    });
    expect(root).toEqualHtml(`
      <ethang-spinner>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ethang-spinner>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [EthangSpinner],
      html: `<ethang-spinner first="Stencil" last="'Don't call me a framework' JS"></ethang-spinner>`,
    });
    expect(root).toEqualHtml(`
      <ethang-spinner first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ethang-spinner>
    `);
  });
});
