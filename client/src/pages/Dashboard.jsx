import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';

export default function Dashboard() {
  const { user } = useContext(UserContext);

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5'
  };

  const dashboardStyle = {
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '5px',
    width: '400px',
    textAlign: 'center'
  };

  const headingStyle = {
    color: '#004080',
    marginBottom: '20px'
  };

  const welcomeStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '10px 0'
  };

  const loadingStyle = {
    fontSize: '16px',
    color: '#999'
  };

  return (
    <div style={containerStyle}>
      <div style={dashboardStyle}>
        <h1 style={headingStyle}>Dashboard</h1>
        {
          user ? (
            <div>
              <h2 style={welcomeStyle}>Welcome {user.name}</h2>
            </div>
          ) : (
            <p style={loadingStyle}>Loading...</p>
          )
        }
      </div>
    </div>
  );
}