import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
