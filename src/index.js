import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(
    <HelmetProvider>
      <App />
    </HelmetProvider>,
    rootElement
  );
} else {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>,
    rootElement
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
