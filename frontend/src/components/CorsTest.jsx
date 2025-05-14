import React, { useEffect, useState } from 'react';
import api from '../api';

const CorsTest = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const testCors = async () => {
      try {
        const result = await api.get('/user/test-cors');
        setResponse(result.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setResponse(null);
      }
    };

    testCors();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>CORS Test Results</h2>
      
      {error && (
        <div style={{ color: 'red', margin: '10px 0' }}>
          <h3>Error:</h3>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}

      {response && (
        <div style={{ color: 'green', margin: '10px 0' }}>
          <h3>Success Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {!response && !error && (
        <div>Testing CORS configuration...</div>
      )}
    </div>
  );
};

export default CorsTest; 