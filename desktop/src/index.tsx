import React from 'react';
import { isMobile } from 'react-device-detect';
import { createRoot } from 'react-dom/client';

import App from 'src/components/App';

import reportWebVitals from 'src/reportWebVitals';

if (isMobile) {
  window.location.replace('https://mobile-app.jacob-alspaw.com');
} else {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Root element missing in index.html');
  }

  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App></App>
    </React.StrictMode>,
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

  // eslint-disable-next-line no-console
  reportWebVitals(console.log);
}
