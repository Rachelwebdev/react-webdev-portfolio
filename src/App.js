import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
// import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import About from './components/About/About';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
