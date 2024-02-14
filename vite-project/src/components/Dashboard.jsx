import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.name}!</p>
    </div>
  ) : (
    <div>Please log in to see the dashboard.</div>
  );
};

export default Dashboard;