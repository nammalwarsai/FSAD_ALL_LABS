import React from 'react';

const FSADlabs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to FSAD Labs</h1>
      <p style={styles.subtitle}>Full Stack Application Development Laboratory</p>
      <div style={styles.description}>
        <p>Please select a lab from the navigation menu to get started.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#666',
    marginBottom: '2rem',
  },
  description: {
    fontSize: '1.2rem',
    color: '#888',
  }
};

export default FSADlabs;
