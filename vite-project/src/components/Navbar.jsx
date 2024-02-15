import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <nav>
      <Link to="/home">Home</Link>
      {isAuthenticated && <Link to="/dashboard">Dashboard</Link>}
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      ) : (
        <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
      )}
    </nav>
  );
};

export default Navbar;
