import { Route, Routes } from 'react-router-dom';

import { Authentication } from '../routes/authentication/authentication';
import { Home } from '../routes/home/home';
import { Navigation } from '../routes/navigation/navigation';
import { Shop } from '../routes/shop/shop';

export function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Navigation />} path="/">
        <Route index element={<Home />} />
        <Route element={<Shop />} path="shop" />
        <Route element={<Authentication />} path="authentication" />
      </Route>
    </Routes>
  );
}

export default App;
