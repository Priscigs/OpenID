import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-q024wp4wou22f5r0.us.auth0.com"
    clientId="mKaJLN8uZwoIxjilWJPH3mrqNAkA4s9g"
    redirectUri={window.location.origin}
    audience="https://endpoint/api/v2/"
  >
    <App />
  </Auth0Provider>,
);
