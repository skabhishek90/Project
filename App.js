import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Contact />
    </div>
  );
}

export default App;
