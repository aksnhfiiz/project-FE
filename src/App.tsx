// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Pendidikan from './pages/pendidikan';
import Skill from './pages/skill';
import Pengalaman from './pages/experience';
import Contact from './pages/contact';
import Account from './pages/account';
import About from './pages/about';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pendidikan" element={<Pendidikan />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/pengalaman" element={<Pengalaman />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
