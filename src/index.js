import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
      domain="dev-ebvwwchz4olpyt1p.us.auth0.com"
      clientId="2HsTXPfZUR1QAnIQYA6X6hjoAu11aJYu"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
);
