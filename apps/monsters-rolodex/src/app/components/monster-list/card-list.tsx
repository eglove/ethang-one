import { Component } from 'react';

export type Monster = {
  id: string;
  name: string;
};

interface CardListProperties {
  filteredMonsters: Monster[];
}

export class CardList extends Component<CardListProperties, unknown> {
  override render(): JSX.Element {
    return (
      <>
        {this.props.filteredMonsters.map(monster => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </>
    );
  }
}
