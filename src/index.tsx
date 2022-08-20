// import './style.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
// import animation from './utils/animation';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// animation();
