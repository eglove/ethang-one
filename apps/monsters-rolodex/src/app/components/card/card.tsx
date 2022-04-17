import styles from './card.module.css';

export type Monster = {
  id: string;
  email: string;
  name: string;
};

export interface CardProperties {
  monster: Monster;
}

export function Card({ monster }: CardProperties): JSX.Element | null {
  if (typeof monster === 'undefined' || monster === null) {
    return null;
  }

  return (
    <div key={monster.id} className={styles['CardContainer']}>
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt={`${monster.name}`}
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
}

export default Card;
