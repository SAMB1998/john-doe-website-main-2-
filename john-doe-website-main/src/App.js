// src/App.js

import React, { useState } from 'react';
import './App.css'; // Assurez-vous d'avoir ce fichier
import Profile from './Profile'; // Importez le composant Profile

function App() {
  const [username, setUsername] = useState('github-john-doe');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>GitHub Profile Viewer</h1>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
        />
      </header>
      <Profile username={username} />
    </div>
  );
}

export default App;
