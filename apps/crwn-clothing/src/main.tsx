import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOMClient.createRoot(document.querySelector('#root')!);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
