import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './dashboard/Dashboard';
import Login from './login/signup/login';
import Footer from './components/Footer';
import Signup from './login/signup/signup';
import './assets/css/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/footer" element={<Footer/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
