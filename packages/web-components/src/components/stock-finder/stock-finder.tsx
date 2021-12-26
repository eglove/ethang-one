import { Component, Event, EventEmitter, h, State } from '@stencil/core';

import { environmentVariable } from '../../../../environment/src';
import { EnvironmentKey } from '../../../../environment/src/lib/variables/enviroment.development';

type Stock = { name: string; symbol: string };

@Component({
  shadow: true,
  styleUrl: 'stock-finder.css',
  tag: 'ethang-stock-finder',
})
export class StockFinder {
  @State() searchResults: Stock[] = [];
  @State() loading = false;

  @Event({ bubbles: true, composed: true })
  egSymbolSelected: EventEmitter<string>;

  stockNameInput: HTMLInputElement;

  onFindStocks = (event: Event): void => {
    event.preventDefault();
    const stockName = this.stockNameInput.value;
    this.loading = true;
    fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${environmentVariable(
        EnvironmentKey.API_KEY_ALPHA_VANTANGE
      )}`
    )
      .then(async response => response.json())
      .then((data: Record<'bestMatches', Stock[]>) => {
        this.searchResults = data.bestMatches.map(stock => {
          return {
            name: stock['2. name'] as string,
            symbol: stock['1. symbol'] as string,
          };
        });
        this.loading = false;
        return null;
      })
      .catch(error => {
        this.loading = false;
        console.log(error);
      });
  };

  onSelectSymbol = (symbol: string): void => {
    this.egSymbolSelected.emit(symbol);
  };

  render(): HTMLElement[] {
    let content = (
      <ul>
        {this.searchResults.map(
          stock =>
            (
              <li>
                <button
                  onClick={(): void => {
                    this.onSelectSymbol(stock.symbol);
                  }}
                  style={{ backgroundColor: '#fff', margin: '0.3rem' }}
                >
                  <strong>{stock.symbol}</strong> - {stock.name}
                </button>
              </li>
            ) as HTMLElement
        )}
      </ul>
    ) as HTMLElement;

    if (this.loading) {
      content = (<ethang-spinner />) as HTMLElement;
    }

    return [
      <form onSubmit={this.onFindStocks}>
        <input
          id="stock-symbol"
          ref={(element: HTMLInputElement): void => {
            this.stockNameInput = element;
          }}
        />
        <button type="submit">Find!</button>
      </form>,
      content,
    ] as HTMLElement[];
  }
}
