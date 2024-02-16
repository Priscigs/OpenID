import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Dashboard = () => {
  const { user, isAuthenticated, isLoading, getIdTokenClaims } = useAuth0();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      try {
        const tokenClaims = await getIdTokenClaims();
        setToken(tokenClaims.__raw); // Accessing the raw token string
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    if (isAuthenticated) {
      getToken();
    }
  }, [getIdTokenClaims, isAuthenticated]);

  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.name}!</p>
      {token && (
        <div>
          <p>Your ID Token:</p>
          <code style={{color:"black"}}>{token}</code>
        </div>
      )}
      <iframe title="Video" 
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        width="560" height="315"  allowFullScreen>
      </iframe>
    </div>
  ) : (
    <div><p>Please <span style={{color:"red", textDecoration:"underline"}}>log in</span> to see the dashboard.</p></div>
  );
};

export default Dashboard;
