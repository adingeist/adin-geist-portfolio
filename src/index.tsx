import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import ReactGA from 'react-ga';

const GOOGLE_ANALYTICS_ID = 'G-JM7FZGYD92';
ReactGA.initialize(GOOGLE_ANALYTICS_ID);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
