import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/index';
import AboutUs from './pages/AboutUs';
import AboutXcel from './pages/aboutXcel';
import Contact from './pages/contact';
import Products from './pages/products';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <header>
          <img src='' alt=''/>
          <h1>Redneck Feed</h1>
          <h3>Grain delivered within 2 business days</h3>
          <img src='' alt=''/>
        </header>
      </div>
      <div className='Navbar'>
        <Navbar />
      </div>
      <div className='App-body'>
        
      </div>
    </div>
  );
}

export default App;
