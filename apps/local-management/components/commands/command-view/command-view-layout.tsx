import { uuid } from '@ethang/util-typescript';

import { useGlobalStateContext } from '../../../context/global/global-context';

export function CommandViewLayout(): JSX.Element {
  const state = useGlobalStateContext();

  return (
    <div>
      {state.currentShellMessages?.map(message => {
        return <div key={uuid()}>{message}</div>;
      })}
    </div>
  );
}
