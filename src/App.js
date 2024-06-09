import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from'./components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Photos from './components/pages/Photos';
import Videos from './components/pages/Videos';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/videos' element={<Videos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
