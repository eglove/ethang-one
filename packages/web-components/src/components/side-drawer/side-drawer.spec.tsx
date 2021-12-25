import { newSpecPage } from '@stencil/core/testing';

import { SideDrawer } from './side-drawer';

describe('side-drawer', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SideDrawer],
      html: '<side-drawer></side-drawer>',
    });
    expect(root).toEqualHtml(`
      <side-drawer>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </side-drawer>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [SideDrawer],
      html: `<side-drawer first="Stencil" last="'Don't call me a framework' JS"></side-drawer>`,
    });
    expect(root).toEqualHtml(`
      <side-drawer first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </side-drawer>
    `);
  });
});
