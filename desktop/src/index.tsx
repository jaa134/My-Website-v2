import React from 'react';
import { deviceType, isDesktop, isMobile, isMobileOnly, isTablet } from 'react-device-detect';
import { createRoot } from 'react-dom/client';

import reportWebVitals from 'src/reportWebVitals';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element missing in index.html');
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <div>
      <div>isMobile: {isMobile ? 'yes' : 'no'}</div>
      <div>isMobileOnly: {isMobileOnly ? 'yes' : 'no'}</div>
      <div>isTablet: {isTablet ? 'yes' : 'no'}</div>
      <div>isDesktop: {isDesktop ? 'yes' : 'no'}</div>
      <div>deviceType: {deviceType}</div>
    </div>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// eslint-disable-next-line no-console
reportWebVitals(console.log);
