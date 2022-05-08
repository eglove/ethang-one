import { createContext, useMemo } from 'react';

import { Dashboard as DashboardState } from '../../components/dashboard/store/dashboard';

export const DashboardContext = createContext<DashboardState>(
  new DashboardState()
);

function Dashboard(): JSX.Element {
  const dashboard = useMemo(() => {
    return new DashboardState();
  }, []);

  return (
    <DashboardContext.Provider value={dashboard}>
      Temp Remove
    </DashboardContext.Provider>
  );
}

export default Dashboard;
