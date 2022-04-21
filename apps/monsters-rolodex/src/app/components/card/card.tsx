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
    <div className={styles['CardContainer']} key={monster.id}>
      <img
        alt={`${monster.name}`}
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
}

export default Card;
