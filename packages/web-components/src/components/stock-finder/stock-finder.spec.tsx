import { newSpecPage } from '@stencil/core/testing';

import { StockFinder } from './stock-finder';

describe('stock-finder', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [StockFinder],
      html: '<stock-finder></stock-finder>',
    });
    expect(root).toEqualHtml(`
      <stock-finder>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </stock-finder>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [StockFinder],
      html: `<stock-finder first="Stencil" last="'Don't call me a framework' JS"></stock-finder>`,
    });
    expect(root).toEqualHtml(`
      <stock-finder first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </stock-finder>
    `);
  });
});
