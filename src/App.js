import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages';
import AboutUs from './pages/AboutUs';
import AboutXcel from './pages/aboutXcel';
import Contact from './pages/contact';
import Products from './pages/products';

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/about' element={<Contact />} />
              <Route path='/contact' element={<AboutUs />} />
              <Route path='/blogs' element={<AboutXcel />} />
              <Route path='/sign-up' element={<Products />} />
          </Routes>
      </Router>
  );
}

export default App;
