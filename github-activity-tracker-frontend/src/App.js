import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/health') // This will be proxied to the backend
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setMessage(data.message || 'No message received');
      })
      .catch(err => {
        setError(err.message);
        console.error("Failed to fetch from backend:", err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub Activity Tracker</h1>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        <p>Backend status: {message}</p>
      </header>
    </div>
  );
}

export default App;
