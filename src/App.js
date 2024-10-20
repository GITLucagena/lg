import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './finala.jpeg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home'; // Import the Home component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ fontFamily: 'Cascadia Code, monospace', fontSize: '18px' }}>
            Welcome to the Questoria Web Platform, where innovation meets education in a vibrant online ecosystem designed for aspiring learners and skilled professionals alike. Our platform serves as the digital hub for skill development, providing an immersive and interactive experience that empowers users to unlock their full potential.
          </p>
          <a
            className="App-link"
            href={`${process.env.PUBLIC_URL}/file1.html`}
            target="_blank"
            rel="noopener noreferrer"
          >
            DIVE DEEPER
          </a>
        </header>

        {/* Updated Routes */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} /> {/* Add route for Home */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
