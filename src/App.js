import React from 'react';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import Project from './pages/Project';
import Publish from './pages/Publish';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/workExperience" element={<Work />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/publications" element={<Publish />} />
      </Routes>
    </BrowserRouter></div>
  );
}

export default App;

