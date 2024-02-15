import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.name}!</p>
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
