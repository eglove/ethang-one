import { Component, h, Prop, State } from '@stencil/core';

import init, { convert_date } from '../../../../util-wasm/pkg';

@Component({
  shadow: true,
  styleUrl: 'ethang-publish-update-times.css',
  tag: 'ethang-publish-update-times',
})
export class EthangPublishUpdateTimes {
  @State() initialized = false;

  @Prop({ reflect: true }) published: string;
  @Prop({ reflect: true }) updated: string;

  componentWillLoad(): void {
    init()
      .then((): void => {
        this.initialized = true;
        return null;
      })
      .catch((): void => {
        console.error('Failed to initialize wasm');
      });
  }

  render(): HTMLElement {
    if (!this.initialized) {
      return <div>Loading...</div>;
    }

    return (
      <div>{`Published: ${convert_date(
        this.published
      )}, Updated: ${convert_date(this.updated)}`}</div>
    );
  }
}
