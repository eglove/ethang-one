import { Route, Routes } from 'react-router-dom';

import { Authentication } from '../routes/authentication/authentication';
import { Home } from '../routes/home/home';
import { Navigation } from '../routes/navigation/navigation';

export function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Navigation />} path="/">
        <Route index element={<Home />} />
        <Route element={<Authentication />} path="authentication" />
      </Route>
    </Routes>
  );
}

export default App;
