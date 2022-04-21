import { Route, Routes } from 'react-router-dom';

import { Home } from '../routes/home/home';

export function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
    </Routes>
  );
}

export default App;
