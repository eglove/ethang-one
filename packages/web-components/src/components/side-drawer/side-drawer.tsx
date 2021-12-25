import { Component, h, JSX, Method, Prop, State } from '@stencil/core';

@Component({
  shadow: true,
  styleUrl: 'side-drawer.css',
  tag: 'ethang-side-drawer',
})
export class SideDrawer {
  @State() showContactInfo = false;
  @Prop({ reflect: true }) drawerTitle: string;
  @Prop({ reflect: true }) open: boolean;

  @Method()
  async toggle(): Promise<void> {
    this.open = !this.open;
  }

  onCloseDrawer = (): void => {
    this.open = !this.open;
  };

  onContentChange = (content: 'nav' | 'contact'): void => {
    this.showContactInfo = content === 'contact';
  };

  render(): JSX.IntrinsicElements[] {
    let mainContent = (<slot />) as JSX.IntrinsicElements;

    if (this.showContactInfo) {
      mainContent = (
        <div id="contact-information">
          <h2>Contact Information</h2>
          <p>You can reach us via phone or email.</p>
          <ul>
            <li>Phone:</li>
            <li>Email:</li>
          </ul>
        </div>
      ) as JSX.IntrinsicElements;
    }

    return [
      <div
        class="backdrop"
        role="button"
        tabindex={0}
        onKeyPress={this.onCloseDrawer}
        onClick={this.onCloseDrawer}
      />,
      <aside>
        <header>
          <h1>{this.drawerTitle}</h1>
          <button onClick={this.onCloseDrawer}>❌</button>
        </header>
        <section id="tabs">
          <button
            class={this.showContactInfo ? '' : 'active'}
            onClick={(): void => {
              this.onContentChange('nav');
            }}
          >
            Navigation
          </button>
          <button
            class={this.showContactInfo ? 'active' : ''}
            onClick={(): void => {
              this.onContentChange('contact');
            }}
          >
            Contact
          </button>
        </section>
        <main>{mainContent}</main>
      </aside>,
    ] as JSX.IntrinsicElements[];
  }
}
