import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import api from './lib/api';  // <-- import your axios instance

function App() {
  const [count, setCount] = useState(0);
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    // Test backend connection
    api.get('/')
      .then((res) => setBackendMessage(JSON.stringify(res.data)))
      .catch((err) => setBackendMessage('Error connecting to backend'));
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>Backend says: {backendMessage}</p>  {/* <-- display backend response */}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;