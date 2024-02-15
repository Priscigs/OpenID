const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// Load environment variables
dotenv.config();
console.log(dotenv.config())
console.log(process.env.AUTH0_DOMAIN)
console.log(process.env.AUTH0_AUDIENCE)

const app = express();

// Enable CORS
app.use(cors());

// Public route
app.get('/api/public', (req, res) => {
  res.json({ message: "Hello from a public endpoint! You don't need to be authenticated to see this." });
});

// Middleware to validate JWT tokens
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});

// Private route
app.get('/api/private', checkJwt, (req, res) => {
  res.json({ message: "Hello from a private endpoint! You need to be authenticated to see this." });
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
