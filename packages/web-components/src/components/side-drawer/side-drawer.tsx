import { Component, h, JSX, Prop } from '@stencil/core';

@Component({
  shadow: true,
  styleUrl: 'side-drawer.css',
  tag: 'ethang-side-drawer',
})
export class SideDrawer {
  @Prop() title: string;

  render(): JSX.IntrinsicElements {
    return (
      <aside>
        <header>
          <h1>{this.title}</h1>
        </header>
        <main>
          <slot />
        </main>
      </aside>
    ) as JSX.IntrinsicElements;
  }
}
