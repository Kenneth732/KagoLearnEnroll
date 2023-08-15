// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; //
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import './App.css';
import Courses from './components/Courses/Courses';
import Campus from './components/Campus/Campus';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/campus' element={<Campus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
