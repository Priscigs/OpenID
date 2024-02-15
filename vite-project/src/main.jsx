import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM.render(
  <Auth0Provider
    domain="dev-q024wp4wou22f5r0.us.auth0.com"
    clientId="mKaJLN8uZwoIxjilWJPH3mrqNAkA4s9g"
    redirectUri={window.location.origin}
    audience="YOUR_AUTH0_AUDIENCE"
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
