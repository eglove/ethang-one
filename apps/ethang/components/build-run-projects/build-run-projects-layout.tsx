import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';

import { GlobalContext } from '../../store/global-store';

export const BuildRunProjectsLayout = observer((): JSX.Element => {
  const state = useContext(GlobalContext);

  useEffect(() => {
    if (
      typeof state.socket !== 'undefined' &&
      typeof state.nxProjects === 'undefined'
    ) {
      state.socket?.emit('nx-projects');
    }
  }, [state.nxProjects, state.socket]);

  return (
    <div>
      {state.nxProjects?.map(project => {
        return <div key={project}>{project}</div>;
      })}
    </div>
  );
});
