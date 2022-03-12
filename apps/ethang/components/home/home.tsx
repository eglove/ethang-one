import { WebsocketKey } from '../../lib/commands';
import { gateway } from '../../lib/gateway';
import styles from './home.module.css';

export const Home = (): JSX.Element => {
  const options = Object.keys(WebsocketKey);

  return (
    <div className={styles.CommandContainer}>
      {options.map((option: WebsocketKey) => {
        return (
          <div key={option}>
            <button
              type="button"
              onClick={(): void => {
                gateway(WebsocketKey[option]);
              }}
            >
              {WebsocketKey[option]}
            </button>
          </div>
        );
      })}
    </div>
  );
};
