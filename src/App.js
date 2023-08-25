import React from 'react';
import { BrowserRouter as Router, Routes, Route as MyRoute } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Services from './components/Services';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <MyRoute path="/" element={<Home />} />
          <MyRoute path="/about" element={<AboutUs />} />
          <MyRoute path="/contact" element={<ContactUs />} />
          <MyRoute path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
