import fetch from 'cross-fetch';
import { ChangeEvent, useEffect, useState } from 'react';

import { Monster } from './components/card/card';

interface UseCardReturn {
  filteredMonsters: Monster[];
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useApp = (): UseCardReturn => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>(monsters);
  const [searchString, setSearchString] = useState<string>('');

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchString(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const getMonsters = async (): Promise<void> => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = (await response.json()) as Monster[];

      setMonsters(data);
    };

    getMonsters().catch((error: Error) => {
      console.error(error);
    });
  }, []);

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter(monster => {
        return monster.name.toLowerCase().includes(searchString);
      })
    );
  }, [monsters, searchString]);

  return { filteredMonsters, onSearchChange };
};
