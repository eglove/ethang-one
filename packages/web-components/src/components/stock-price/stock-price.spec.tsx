import { newSpecPage } from '@stencil/core/testing';

import { StockPrice } from './stock-price';

describe('stock-price', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [StockPrice],
      html: '<stock-price></stock-price>',
    });
    expect(root).toEqualHtml(`
      <stock-price>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </stock-price>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [StockPrice],
      html: `<stock-price first="Stencil" last="'Don't call me a framework' JS"></stock-price>`,
    });
    expect(root).toEqualHtml(`
      <stock-price first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </stock-price>
    `);
  });
});
