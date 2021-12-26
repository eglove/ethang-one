import { Component, h, JSX, Listen, Prop, State, Watch } from '@stencil/core';

import { environmentVariable } from '../../../../environment/src';
import { EnvironmentKey } from '../../../../environment/src/lib/variables/enviroment.development';

@Component({
  shadow: true,
  styleUrl: 'stock-price.css',
  tag: 'ethang-stock-price',
})
export class StockPrice {
  @State() fetchedPrice: number;
  @State() stockInput: string;
  @State() stockInputValid = false;
  @State() error: string;
  @State() loading = false;

  @Prop({ reflect: true }) stockSymbol: string;

  stockInputElement = (<input />) as HTMLInputElement;

  @Listen('egSymbolSelected', { target: 'body' })
  onStockSymbolSelected(event: CustomEvent): void {
    if (typeof event.detail === 'string' && event.detail !== this.stockSymbol) {
      this.stockSymbol = event.detail;
    }
  }

  @Watch('stockSymbol')
  stockSymbolChanged(newValue: string, oldValue: string): void {
    if (newValue !== oldValue) {
      this.stockInput = newValue;
      this.stockInputValid = true;
      this.fetchStockPrice(newValue);
    }
  }

  onFetchStockPrice(): void {
    this.stockSymbol = this.stockInputElement.value;
  }

  onUserInput(): void {
    this.stockInput = this.stockInputElement.value;

    this.stockInputValid = this.stockInput.trim() !== '';
  }

  componentWillLoad(): void {
    console.log('componentWillLoad');
  }

  componentDidLoad(): void {
    if (this.stockSymbol) {
      this.stockInputElement.value = this.stockSymbol;
      this.stockInput = this.stockSymbol;
      this.stockInputValid = true;
      // This.initialStockSymbol = this.stockSymbol;
      this.fetchStockPrice(this.stockSymbol);
    }
  }

  componentWillUpdate(): void {
    console.log('componentWillUpdate');
  }

  componentDidUpdate(): void {
    console.log('componentDidUpdate');
  }

  disconnectedCallback(): void {
    console.log('disconnectedCallback');
  }

  fetchStockPrice = (stockSymbol: string): void => {
    this.loading = true;
    fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${environmentVariable(
        EnvironmentKey.API_KEY_ALPHA_VANTANGE
      )}`
    )
      .then(async response => response.json())
      .then(data => {
        if (data['Global Quote']?.['05. price']) {
          this.error = null;
          this.fetchedPrice = Number.parseFloat(
            data['Global Quote']['05. price']
          );
        } else {
          this.fetchedPrice = null;
          throw new Error('Invalid symbol');
        }

        this.loading = false;
        return null;
      })
      .catch((error: Error) => {
        this.loading = false;
        this.error = error.message;
      });
  };

  hostData(): { class: string } {
    return {
      class: this.error ? 'error' : '',
    };
  }

  render(): JSX.IntrinsicElements[] {
    let dataContent = (<p>Please enter a symbol.</p>) as HTMLElement;
    if (this.error) {
      dataContent = (<p>{this.error}</p>) as HTMLElement;
    } else if (this.fetchedPrice) {
      dataContent = (<p>Price: ${this.fetchedPrice}</p>) as HTMLElement;
    } else if (this.loading) {
      dataContent = (<ethang-spinner />) as HTMLElement;
    }

    return [
      <form
        onSubmit={(event: Event): void => {
          event.preventDefault();
          this.onFetchStockPrice();
        }}
      >
        <input
          id="stock-symbol"
          onInput={(event: Event): void => {
            event.preventDefault();
            this.onUserInput();
          }}
          ref={(element: HTMLInputElement): void => {
            this.stockInputElement = element;
          }}
          value={this.stockInput}
        />
        <button type="submit" disabled={!this.stockInputValid || this.loading}>
          Fetch
        </button>
      </form>,
      <div>{dataContent}</div>,
    ] as JSX.IntrinsicElements[];
  }
}
