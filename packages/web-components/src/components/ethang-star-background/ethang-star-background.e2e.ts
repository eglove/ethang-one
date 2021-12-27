import { newE2EPage } from '@stencil/core/testing';

describe('ethang-star-background', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ethang-star-background></ethang-star-background>');
    const element = await page.find('ethang-star-background');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<ethang-star-background></ethang-star-background>');
    const component = await page.find('ethang-star-background');
    const element = await page.find('ethang-star-background >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
