import { useHermitDispatchContext } from '../../context/hermit-context';
import { HermitActionEnum } from '../../context/hermit-reducer';
import { DataEntity } from '../../types/hermit-craft-types';
import styles from './hermit-stream-link.module.css';

type HermitStreamLinkProperties = {
  hermitStream?: DataEntity;
};

export function HermitStreamLink({
  hermitStream,
}: HermitStreamLinkProperties): JSX.Element {
  const hermitDispatch = useHermitDispatchContext();

  const handleSetCurrentStream = (): void => {
    hermitDispatch({
      payload: hermitStream.id,
      type: HermitActionEnum.currentlyWatching,
    });
  };

  if (hermitStream) {
    const { user_name, title } = hermitStream;

    return (
      <button
        className={styles.StreamLink}
        type="button"
        onClick={handleSetCurrentStream}
      >{`${user_name} - ${title}`}</button>
    );
  }

  return null;
}
