import { Route, Routes } from 'react-router-dom';

import { Home } from '../routes/home/home';

export function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;