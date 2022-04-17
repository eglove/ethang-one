import './App.css';

import { CardList } from './components/monster-list/card-list';
import { SearchBar } from './components/search-bar/search-bar';
import { useApp } from './use-app';

function App(): JSX.Element {
  const { onSearchChange, filteredMonsters } = useApp();

  return (
    <div>
      <h1 className="AppTitle">Monsters Rolodex</h1>
      <SearchBar onChangeHandler={onSearchChange} />
      <CardList filteredMonsters={filteredMonsters} />
    </div>
  );
}

export default App;
