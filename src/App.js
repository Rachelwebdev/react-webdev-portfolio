import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
// import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </>
  );
}

export default App;
