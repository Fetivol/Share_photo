import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Theme } from 'components/Theme/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>
);
