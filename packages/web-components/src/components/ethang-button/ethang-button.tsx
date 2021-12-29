import { Component, h, Prop, State } from '@stencil/core';

import { ButtonTypes } from './types';

@Component({
  shadow: true,
  styleUrl: 'ethang-button.css',
  tag: 'ethang-button',
})
export class EthangButton {
  @State() buttonStyle = ButtonTypes.fill;

  @Prop() buttonProperties?: Record<string, unknown>;
  @Prop({ reflect: true }) styleType?: string;

  componentWillLoad(): void {
    if (this.styleType) {
      switch (this.styleType) {
        case 'outline': {
          this.buttonStyle = ButtonTypes.outline;
          break;
        }

        case 'submit': {
          this.buttonStyle = ButtonTypes.submit;
          break;
        }

        case 'cancel': {
          this.buttonStyle = ButtonTypes.cancel;
          break;
        }

        default: {
          this.buttonStyle = ButtonTypes.fill;
          break;
        }
      }
    }
  }

  render(): HTMLButtonElement {
    return (
      <button {...this.buttonProperties} class={this.buttonStyle}>
        <slot />
      </button>
    );
  }
}
