import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Theme } from 'components/Theme/Theme';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </Theme>
  </React.StrictMode>
);
