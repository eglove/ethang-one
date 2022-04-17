import { ChangeEvent, Component } from 'react';

import { CardList, Monster } from './components/monster-list/card-list';
import { SearchBar } from './components/search-bar/search-bar';

interface AppState {
  monsters: Monster[];
  searchString: string;
}

class App extends Component<unknown, AppState> {
  override state: AppState = {
    monsters: [],
    searchString: '',
  };

  override async componentDidMount(): Promise<void> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = (await response.json()) as Monster[];

    this.setState(previousState => {
      return {
        ...previousState,
        monsters: data,
      };
    });
  }

  onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState(() => {
      return {
        searchString: event.target.value.toLowerCase(),
      };
    });
  };

  override render(): JSX.Element {
    const filteredMonsters = this.state.monsters.filter(monster => {
      return monster.name.toLowerCase().includes(this.state.searchString);
    });

    return (
      <div>
        <SearchBar onChangeHandler={this.onSearchChange} />
        <CardList filteredMonsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
