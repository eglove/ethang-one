import { Component, h } from '@stencil/core';

@Component({
  shadow: true,
  styleUrl: 'ethang-spinner.css',
  tag: 'ethang-spinner',
})
export class EthangSpinner {
  render(): HTMLElement {
    return (
      <div class="lds-facebook">
        <div />
        <div />
        <div />
      </div>
    ) as HTMLElement;
  }
}
