import { Route, Routes } from 'react-router-dom';

import { Home } from '../routes/home/home';
import { Navigation } from '../routes/navigation/navigation';
import { SignIn } from '../routes/sign-in/sign-in';

export function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Navigation />} path="/">
        <Route index element={<Home />} />
        <Route element={<SignIn />} path="sign-in" />
      </Route>
    </Routes>
  );
}

export default App;
