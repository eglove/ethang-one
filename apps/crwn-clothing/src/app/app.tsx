import { Route, Routes } from 'react-router-dom';

import { Home } from '../routes/home/home';
import { Navigation } from '../routes/navigation/navigation';

export function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Navigation />} path="/">
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
