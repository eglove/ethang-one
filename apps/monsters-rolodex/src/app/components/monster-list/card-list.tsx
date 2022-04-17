import Card, { Monster } from '../card/card';
import styles from './card-list.module.css';

interface CardListProperties {
  filteredMonsters: Monster[];
}

export function CardList({
  filteredMonsters,
}: CardListProperties): JSX.Element {
  return (
    <div className={styles['CardList']}>
      {filteredMonsters.map(monster => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
}
