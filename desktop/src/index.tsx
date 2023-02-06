import React from 'react';
import { createRoot } from 'react-dom/client';
import { isMobile } from 'react-device-detect';

import reportWebVitals from 'src/reportWebVitals';

import 'src/index.scss';

if (isMobile) {
  window.location.replace('https://mobile-app.jacob-alspaw.com');
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element missing in index.html');
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <div>Hello world!</div>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
